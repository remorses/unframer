import pico from 'picocolors'

import { marked } from 'marked'
import { markedTerminal } from 'marked-terminal'
import { createSpinner } from 'nanospinner'

export const spinner = createSpinner('Downloading Framer Components') as any

marked.use(markedTerminal())

export function terminalMarkdown(markdown: string) {
    return marked(markdown)
}

const shouldDebugUnframer = !!process.env.DEBUG_UNFRAMER

const prefix = '[unframer]'
export const logger = {
    debug: shouldDebugUnframer,
    log(...args) {
        if (!logger.debug) {
            return
        }
        console.log(prefix, ...args)
    },
    green(...args) {
        console.log([prefix, ...args].map((x) => pico.green(x)).join(' '))
    },
    error(...args) {
        console.error([prefix, ...args].map((x) => pico.red(x)).join(' '))
    },
}

export async function componentNameToPath(name: string) {
    const { default: kebabCase } = await import('just-kebab-case')
    return name
        .split('/')
        .filter(Boolean)
        .map((part) => kebabCase(part))
        .join('/')
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
