import pico from 'picocolors'

import { marked } from 'marked'
import { markedTerminal } from 'marked-terminal'
import { createSpinner } from 'nanospinner'

export const spinner = createSpinner('Downloading Framer Components')

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

export function componentNameToPath(name: string) {
    return name
        .split('/')
        .filter(Boolean)
        .map((part) => kebabCase(part))
        .join('/')
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

// https://www.npmjs.com/package/just-kebab-case?activeTab=readme
// any combination of spaces and punctuation characters
// thanks to http://stackoverflow.com/a/25575009
var wordSeparators =
    /[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]+/
var capital_plus_lower = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD][a-zà-ÿ]/g
var capitals = /[A-ZÀ-Ý\u00C0-\u00D6\u00D9-\u00DD]+/g

export function kebabCase(str: string) {
    // replace word starts with space + lower case equivalent for later parsing
    // 1) treat cap + lower as start of new word
    str = str.replace(capital_plus_lower, function (match) {
        // match is one caps followed by one non-cap
        return ' ' + (match[0].toLowerCase() || match[0]) + match[1]
    })
    // 2) treat all remaining capitals as words
    str = str.replace(capitals, function (match) {
        // match is a series of caps
        return ' ' + match.toLowerCase()
    })
    return str
        .trim()
        .split(wordSeparators)
        .join('-')
        .replace(/^-/, '')
        .replace(/-\s*$/, '')
}

export function isTruthy<T>(x: T | null | undefined | false | 0 | ''): x is T {
    return Boolean(x)
}

export const stackblitzDemoExample = process.env.STACKBLITZ_DEMO_EXAMPLE