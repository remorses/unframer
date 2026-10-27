// Run in Playwriter's sandbox: playwriter -s <headless-session> -f unframer/scripts/check-hydration.ts
// Build and serve the three production examples first. See docs/hydration-tests.md.
const assert = require('node:assert').strict
const apps = state.hydrationApps ?? [
    { name: 'Next.js', url: 'http://localhost:5544' },
    { name: 'Astro', url: 'http://localhost:4322' },
    { name: 'Remix', url: 'http://localhost:5546' },
]
const INITIAL_WIDTHS = [390, 800, 1280]
const BOUNDARY_WIDTHS = [319, 320, 767, 768, 959, 960, 1199, 1200, 1535, 1536]
const VIEWPORT_HEIGHT_PX = 800
const CHECK_TIMEOUT_MS = 10_000
const BREAKPOINT_SIZES = {
    base: 0,
    sm: 320,
    md: 768,
    lg: 960,
    xl: 1200,
    '2xl': 1536,
}
const failures = []

for (const app of apps) {
    for (const width of INITIAL_WIDTHS) {
        console.log(
            `Checking ${app.name} at ${width}px before and after hydration`,
        )
        const page = await context.newPage()
        state.hydrationPage = page
        page.setDefaultTimeout(CHECK_TIMEOUT_MS)
        await page.setViewportSize({ width, height: VIEWPORT_HEIGHT_PX })
        const gate = Promise.withResolvers()
        const routeHandler = async (route) => {
            if (route.request().resourceType() === 'script') await gate.promise
            await route.continue()
        }
        await page.route('**/*', routeHandler)

        try {
            await page.goto(app.url, { waitUntil: 'commit' })
            await page.waitForFunction(
                () =>
                    document.readyState !== 'loading' &&
                    [
                        ...document.querySelectorAll('link[rel="stylesheet"]'),
                    ].every((link) => link.sheet),
            )
            const breakpoint = Object.keys(BREAKPOINT_SIZES).findLast(
                (name) => width >= BREAKPOINT_SIZES[name],
            )
            const before = await page.evaluate((breakpoint) => {
                const roots = [...document.querySelectorAll('.unframer-hidden')]
                const navs = [
                    ...document.querySelectorAll('nav.unframer-hidden'),
                ]
                const visible = (nodes) =>
                    nodes.filter(
                        (node) => getComputedStyle(node).display !== 'none',
                    )
                const active = visible(navs)
                const probe = (window.__unframerHydration = {
                    active: active[0],
                    islands: [...document.querySelectorAll('astro-island')].map(
                        (element) => ({
                            element,
                            active: visible([
                                ...element.querySelectorAll('.unframer-hidden'),
                            ]),
                        }),
                    ),
                    frames: [],
                    recording: true,
                })
                const sample = () => {
                    const current = visible([
                        ...document.querySelectorAll('nav.unframer-hidden'),
                    ])
                    probe.frames.push(
                        current.map((node) =>
                            node.classList.contains(`unframer-${breakpoint}`),
                        ),
                    )
                    if (probe.recording) requestAnimationFrame(sample)
                }
                requestAnimationFrame(sample)
                return {
                    roots: roots.length,
                    navs: navs.length,
                    visible: active.length,
                    correct: active.every((node) =>
                        node.classList.contains(`unframer-${breakpoint}`),
                    ),
                    hidden: roots
                        .filter(
                            (node) =>
                                !node.classList.contains(
                                    `unframer-${breakpoint}`,
                                ),
                        )
                        .every(
                            (node) => getComputedStyle(node).display === 'none',
                        ),
                }
            }, breakpoint)
            assert.ok(
                before.roots > 0,
                'The response must include responsive SSR markup',
            )
            assert.ok(
                before.navs >= 1,
                'The navigation must exist before app JavaScript runs',
            )
            assert.equal(
                before.visible,
                1,
                'CSS must show exactly one navigation before JavaScript runs',
            )
            assert.ok(
                before.correct && before.hidden,
                'SSR CSS must hide only the inactive breakpoints',
            )

            gate.resolve()
            await page.waitForFunction(
                () =>
                    document.querySelectorAll('nav.unframer-hidden').length ===
                    1,
            )
            await page.waitForLoadState('load')
            const after = await page.evaluate(() => {
                const probe = window.__unframerHydration
                probe.recording = false
                return {
                    retained: probe.active.isConnected,
                    frames: probe.frames,
                }
            })
            assert.ok(
                after.retained,
                'Hydration must reuse the visible SSR navigation, not replace it',
            )
            assert.ok(after.frames.length > 0, 'The first-paint probe must run')
            assert.ok(
                after.frames.every((frame) => frame.length === 1 && frame[0]),
                'Every frame must show exactly the correct responsive navigation',
            )

            // Scroll each SSR island into view so Astro client:visible boundaries also hydrate.
            const islands = await page.locator('astro-island').all()
            for (const [index, island] of islands.entries()) {
                await island
                    .locator('.unframer-hidden:visible')
                    .first()
                    .scrollIntoViewIfNeeded()
                await page.waitForFunction((index) => {
                    const { element } =
                        window.__unframerHydration.islands[index]
                    return (
                        element.querySelectorAll('.unframer-hidden').length ===
                        1
                    )
                }, index)
                assert.ok(
                    await island.evaluate((element) => {
                        const saved = window.__unframerHydration.islands.find(
                            (island) => island.element === element,
                        )
                        return (
                            saved.active.length === 1 &&
                            saved.active[0].isConnected
                        )
                    }),
                    'Each Astro island must retain its visible SSR variant after React commits',
                )
            }
            await page.waitForFunction(
                () =>
                    document.querySelectorAll('astro-island[ssr]').length === 0,
            )

            for (const resizedWidth of BOUNDARY_WIDTHS) {
                await page.setViewportSize({
                    width: resizedWidth,
                    height: VIEWPORT_HEIGHT_PX,
                })
                const resizedBreakpoint = Object.keys(
                    BREAKPOINT_SIZES,
                ).findLast((name) => resizedWidth >= BREAKPOINT_SIZES[name])
                await page.waitForFunction((breakpoint) => {
                    const navs = [
                        ...document.querySelectorAll('nav.unframer-hidden'),
                    ]
                    return (
                        navs.length === 1 &&
                        navs[0].classList.contains(`unframer-${breakpoint}`) &&
                        getComputedStyle(navs[0]).display !== 'none'
                    )
                }, resizedBreakpoint)
            }

            const logs = await getLatestLogs({ page, sinceLastCall: true })
            const errors = logs.filter((log) =>
                /hydration|hydrating|#418|#423|\[pageerror\]/i.test(log),
            )
            assert.equal(
                errors.length,
                0,
                `Hydration must finish without recovery or page errors: ${errors.join('\n')}`,
            )
            console.log(
                `PASS ${app.name} at ${width}px, SSR retained and all resize boundaries correct`,
            )
        } catch (error) {
            failures.push(`${app.name} at ${width}px: ${error.message}`)
            console.error(failures.at(-1))
            console.log(await getLatestLogs({ page, sinceLastCall: true }))
        } finally {
            gate.resolve()
            await page.unroute('**/*', routeHandler)
            delete state.hydrationPage
            await page.close()
        }
    }
}

assert.equal(
    failures.length,
    0,
    `Responsive hydration regression checks failed: ${failures.join('\n')}`,
)
