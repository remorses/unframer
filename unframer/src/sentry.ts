const SENTRY_DSN =
    'https://67125acb9a41f616144a07c90a16775e@o4508014272446464.ingest.de.sentry.io/4509202968674384'

let sentry: typeof import('@sentry/node') | null = null

export async function notifyError(error: any, msg?: string) {
    console.error(msg, error?.['stack'] || error)

    if (!sentry) {
        const mod = await import('@sentry/node')
        mod.init({
            dsn: SENTRY_DSN,
            beforeSend(event) {
                if (event?.['name'] === 'AbortError') return null
                return event
            },
        })
        sentry = mod
    }

    sentry.captureException(error, { extra: { msg } })
    await sentry.flush(1000)
}
