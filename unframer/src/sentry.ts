import * as Sentry from '@sentry/node'

Sentry.init({
    dsn: 'https://67125acb9a41f616144a07c90a16775e@o4508014272446464.ingest.de.sentry.io/4509202968674384',
    beforeSend(event) {
        if (event?.['name'] === 'AbortError') {
            return null
        }

        return event
    },
})

export async function notifyError(error, msg?: string) {
    console.error(msg, error)
    Sentry.captureException(error, { extra: { msg } })
    await Sentry.flush(1000) // delivery timeout in ms
}
