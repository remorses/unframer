// TODO the idea was to use Sentry to send back info but the package is too bloated
export async function notifyError(error: any, msg?: string) {
    console.error(msg, error?.['stack'] || error)
}
