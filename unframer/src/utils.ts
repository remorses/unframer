import pico from 'picocolors'

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
