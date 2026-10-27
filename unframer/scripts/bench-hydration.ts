// Benchmarks responsive hydration with and without the old pre-hydration DOM pruning.
// Serve the three production example apps first. See docs/hydration-tests.md.
// Run: pnpm tsx scripts/bench-hydration.ts
import { chromium, type Page } from 'playwright'

const APPS = [
    { name: 'Next.js', url: 'http://localhost:5544' },
    { name: 'Astro', url: 'http://localhost:4322' },
    { name: 'Remix', url: 'http://localhost:5546' },
]
const WIDTHS = [390, 1280]
const MODES = ['keep', 'prune'] as const
const RUNS_PER_MODE = 7
const VIEWPORT_HEIGHT_PX = 800
const CPU_THROTTLE_RATE = 4
const SETTLE_TIMEOUT_MS = 20_000
const QUIET_WINDOW_MS = 1_000

type Mode = (typeof MODES)[number]
type Sample = {
    hydrateMs: number
    scriptMs: number
    longTaskMs: number
    domNodes: number
    errors: number
}

// Verbatim copy of removeInactiveUnframerHiddenElements, removed in 6094438.
function removeInactiveUnframerHiddenElements() {
    const sizes = { base: 0, sm: 320, md: 768, lg: 960, xl: 1200, '2xl': 1536 }
    const activeBreakpoint = Object.keys(sizes)
        .reverse()
        .find((name) => window.innerWidth >= sizes[name])
    const activeClass = activeBreakpoint ? `unframer-${activeBreakpoint}` : null
    document.querySelectorAll('.unframer-hidden').forEach((el) => {
        if (activeClass && !el.classList.contains(activeClass)) {
            el.parentNode?.removeChild(el)
        }
    })
}

async function measure({
    page,
    url,
    mode,
}: {
    page: Page
    url: string
    mode: Mode
}) {
    const cdp = await page.context().newCDPSession(page)
    await cdp.send('Performance.enable')
    await cdp.send('Emulation.setCPUThrottlingRate', {
        rate: CPU_THROTTLE_RATE,
    })
    let errors = 0
    page.on('pageerror', () => errors++)
    page.on('console', (msg) => {
        if (msg.type() === 'error' && /hydrat|#418|#423/i.test(msg.text()))
            errors++
    })

    // Hold scripts so both modes start hydration from the same SSR DOM.
    const gate = Promise.withResolvers<void>()
    await page.route('**/*', async (route) => {
        if (route.request().resourceType() === 'script') await gate.promise
        await route.continue()
    })
    await page.goto(url, { waitUntil: 'commit' })
    await page.waitForFunction(
        () =>
            document.readyState !== 'loading' &&
            [...document.querySelectorAll('link[rel="stylesheet"]')].every(
                (link) => (link as HTMLLinkElement).sheet,
            ),
    )
    await page.evaluate(() => {
        const w = window as any
        w.__longTaskMs = 0
        new PerformanceObserver((list) => {
            for (const entry of list.getEntries())
                w.__longTaskMs += entry.duration
        }).observe({ type: 'longtask' })
    })
    if (mode === 'prune')
        await page.evaluate(removeInactiveUnframerHiddenElements)
    const domNodes = await page.evaluate(
        () => document.getElementsByTagName('*').length,
    )

    const scriptBefore = await scriptSeconds(cdp)
    const start = await page.evaluate(() => performance.now())
    gate.resolve()

    // Hydrated: only one responsive nav left and no long task for a quiet window.
    await page.waitForFunction(
        () => document.querySelectorAll('nav.unframer-hidden').length === 1,
        undefined,
        { timeout: SETTLE_TIMEOUT_MS },
    )
    await page.waitForLoadState('load')
    // String body: tsx adds __name() helpers to named inner functions, which the page lacks.
    const hydrateEnd: number = await page.evaluate(`new Promise((resolve) => {
        let last = performance.now()
        new PerformanceObserver(() => { last = performance.now() }).observe({ type: 'longtask' })
        const timer = setInterval(() => {
            if (performance.now() - last < ${QUIET_WINDOW_MS}) return
            clearInterval(timer)
            resolve(last)
        }, ${QUIET_WINDOW_MS / 4})
    })`)
    const scriptAfter = await scriptSeconds(cdp)
    const longTaskMs = await page.evaluate(() => (window as any).__longTaskMs)
    return {
        hydrateMs: hydrateEnd - start,
        scriptMs: (scriptAfter - scriptBefore) * 1000,
        longTaskMs,
        domNodes,
        errors,
    } satisfies Sample
}

async function scriptSeconds(cdp) {
    const { metrics } = await cdp.send('Performance.getMetrics')
    return metrics.find((m) => m.name === 'ScriptDuration').value
}

function stats(values: number[]) {
    const sorted = [...values].sort((a, b) => a - b)
    const median = sorted[Math.floor(sorted.length / 2)]
    return `${Math.round(median)} (${Math.round(sorted[0])}-${Math.round(sorted.at(-1)!)})`
}

const browser = await chromium.launch()
const rows: string[] = []
for (const app of APPS) {
    for (const width of WIDTHS) {
        const samples: Record<Mode, Sample[]> = { keep: [], prune: [] }
        // Alternate modes so drift on a busy machine hits both sides equally.
        for (let run = 0; run < RUNS_PER_MODE; run++) {
            for (const mode of run % 2 ? [...MODES].reverse() : MODES) {
                const context = await browser.newContext({
                    viewport: { width, height: VIEWPORT_HEIGHT_PX },
                })
                const page = await context.newPage()
                const sample = await measure({ page, url: app.url, mode })
                await context.close()
                samples[mode].push(sample)
                console.log(
                    `${app.name} ${width}px ${mode} run ${run + 1}: ${JSON.stringify(sample)}`,
                )
            }
        }
        for (const mode of MODES) {
            const s = samples[mode]
            rows.push(
                [
                    app.name,
                    `${width}px`,
                    mode,
                    stats(s.map((x) => x.hydrateMs)),
                    stats(s.map((x) => x.scriptMs)),
                    stats(s.map((x) => x.longTaskMs)),
                    stats(s.map((x) => x.domNodes)),
                    s.filter((x) => x.errors > 0).length + `/${s.length}`,
                ].join(' | '),
            )
        }
    }
}
await browser.close()

console.log(
    `\nCPU ${CPU_THROTTLE_RATE}x throttled, ${RUNS_PER_MODE} runs per mode, median (min-max)`,
)
console.log(
    'app | width | mode | hydrate ms | script ms | long tasks ms | SSR nodes | runs with errors',
)
for (const row of rows) console.log(row)
