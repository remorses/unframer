// Browser authorization for Framer Server API keys.
//
// Framer has no OAuth for framer-api. Instead framer.com has an undocumented
// consent page (used by Framer's own `@framer/agent` CLI) that mints a
// project-scoped API key after the user clicks "Approve":
//
//   https://framer.com/projects/server-api/auth?projectId=..&state=..&callback=..
//     -> 302 to callback?apiKey=fr_..&userId=..&state=..&theme=dark
//     -> or callback?code=user.denied (and other error codes below)
//
// The callback MUST be a loopback host (127.0.0.1 or localhost, http or https).
// Remote https callbacks (e.g. unframer.co) are rejected with "Invalid callback URL",
// so this flow only works from a local process like this CLI, not from the plugin iframe.
import http from 'node:http'
import crypto from 'node:crypto'
import { exec } from 'node:child_process'
import { loadConfig, saveConfig } from './config.js'

const AUTH_TIMEOUT_MS = 5 * 60 * 1000

const authErrorMessages: Record<string, string> = {
    'user.denied': 'Authorization denied by user.',
    'project.access_denied':
        'You do not have access to this project. Ask the owner to invite you.',
    'project.not_found': 'Project not found. Check the project URL.',
    'project.unauthorized': 'Not logged in to Framer in this browser.',
    'api_key.access_denied':
        'You do not have permission to create API keys for this project.',
    'api_key.unauthorized': 'Framer session expired. Log in again.',
    connection_error: 'Could not connect to Framer.',
    unknown: 'Authorization failed.',
}

/**
 * Extracts the Framer project id from a project URL or id.
 * `https://framer.com/projects/My-Site--lfAw10qcrLpLLEznmZmo-irrP1?node=x` -> `lfAw10qcrLpLLEznmZmo`
 */
export function extractFramerProjectId(projectUrlOrId: string): string {
    const input = projectUrlOrId.trim()
    if (/^[a-zA-Z0-9]+$/.test(input)) {
        return input
    }
    const candidate = input.match(/\/projects\/([^/?#]+)/)?.[1] ?? input
    const slugMatch = candidate.match(
        /^(?:.+--)?([a-zA-Z0-9]+)(?:-[a-zA-Z0-9]+)?$/,
    )
    return slugMatch?.[1] ?? input
}

export function getSavedFramerApiKey(projectUrlOrId: string): string | undefined {
    const projectId = extractFramerProjectId(projectUrlOrId)
    return loadConfig().framerProjects?.[projectId]?.apiKey
}

export function saveFramerApiKey({
    projectUrl,
    apiKey,
    userId,
}: {
    projectUrl: string
    apiKey: string
    userId?: string
}): void {
    const config = loadConfig()
    const projectId = extractFramerProjectId(projectUrl)
    saveConfig({
        ...config,
        mode: 'server-api',
        framerProjectUrl: projectUrl,
        framerProjects: {
            ...config.framerProjects,
            [projectId]: { apiKey, userId },
        },
    })
}

/**
 * Starts a loopback callback server and returns the consent URL.
 * `waitForApiKey` resolves when the user approves, rejects on deny, error, or timeout.
 */
export async function startFramerApiKeyAuthorization({
    projectUrl,
}: {
    projectUrl: string
}): Promise<{
    authorizationUrl: string
    waitForApiKey: Promise<{ apiKey: string; userId?: string }>
}> {
    const projectId = extractFramerProjectId(projectUrl)
    const state = crypto.randomBytes(16).toString('hex')

    let resolveKey: (value: { apiKey: string; userId?: string }) => void =
        () => {}
    let rejectKey: (error: Error) => void = () => {}
    const waitForApiKey = new Promise<{ apiKey: string; userId?: string }>(
        (resolve, reject) => {
            resolveKey = resolve
            rejectKey = reject
        },
    )

    // Set by /callback, resolved after /done is served so the server stays open for the redirect
    let pendingResult: { apiKey: string; userId?: string } | undefined

    const server = http.createServer((req, res) => {
        const url = new URL(req.url ?? '/', 'http://127.0.0.1')
        if (url.pathname === '/done' && pendingResult) {
            const result = pendingResult
            res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' })
            res.end('Unframer is authorized. You can close this tab.', () => {
                resolveKey(result)
            })
            return
        }
        if (url.pathname !== '/callback') {
            res.writeHead(404).end()
            return
        }
        const code = url.searchParams.get('code')
        if (code) {
            const message = authErrorMessages[code] || authErrorMessages.unknown
            res.writeHead(200, { 'content-type': 'text/plain; charset=utf-8' })
            res.end(`${message}\nYou can close this tab.`, () => {
                rejectKey(new Error(message))
            })
            return
        }
        const apiKey = url.searchParams.get('apiKey')
        if (!apiKey || url.searchParams.get('state') !== state) {
            res.writeHead(400, { 'content-type': 'text/plain; charset=utf-8' })
            res.end('Invalid authorization callback. Run the login command again.')
            return
        }
        pendingResult = {
            apiKey,
            userId: url.searchParams.get('userId') || undefined,
        }
        // Redirect so the API key does not stay in the address bar
        res.writeHead(302, { location: '/done' })
        res.end()
    })
    server.keepAliveTimeout = 0

    await new Promise<void>((resolve, reject) => {
        server.once('error', reject)
        server.listen(0, '127.0.0.1', () => {
            resolve()
        })
    })
    const address = server.address()
    if (!address || typeof address === 'string') {
        server.close()
        throw new Error('Failed to start the local authorization callback server')
    }

    const authorizationUrl = new URL('https://framer.com/projects/server-api/auth')
    authorizationUrl.searchParams.set('projectId', projectId)
    authorizationUrl.searchParams.set('state', state)
    authorizationUrl.searchParams.set(
        'callback',
        `http://127.0.0.1:${address.port}/callback`,
    )

    const timer = setTimeout(() => {
        rejectKey(new Error('Browser authorization timed out after 5 minutes.'))
    }, AUTH_TIMEOUT_MS)

    return {
        authorizationUrl: authorizationUrl.toString(),
        waitForApiKey: waitForApiKey.finally(() => {
            clearTimeout(timer)
            server.close()
            server.closeAllConnections()
        }),
    }
}

/** Opens a URL with the OS handler. Works without a TTY, unlike goke `openInBrowser`. */
export async function openUrlWithOs(url: string): Promise<boolean> {
    const command = (() => {
        if (process.platform === 'darwin') {
            return `open ${JSON.stringify(url)}`
        }
        if (process.platform === 'win32') {
            return `start "" ${JSON.stringify(url)}`
        }
        return `xdg-open ${JSON.stringify(url)}`
    })()
    return new Promise((resolve) => {
        exec(command, (error) => {
            resolve(!error)
        })
    })
}
