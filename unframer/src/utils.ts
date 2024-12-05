import pico from 'picocolors'

import { marked } from 'marked'
import { markedTerminal } from 'marked-terminal'

marked.use(markedTerminal())

export function terminalMarkdown(markdown: string) {
    return marked(markdown)
}

const prefix = '[unframer]'
export const logger = {
    log(...args) {
        console.log(prefix, ...args)
    },
    green(...args) {
        console.log([prefix, ...args].map((x) => pico.green(x)).join(' '))
    },
    error(...args) {
        console.error([prefix, ...args].map((x) => pico.red(x)).join(' '))
    },
}
