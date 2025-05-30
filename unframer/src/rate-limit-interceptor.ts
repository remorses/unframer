import { Sema, RateLimit } from 'async-sema'
import assert from 'node:assert'
import { Dispatcher } from 'undici/types'

type Opts = {
    requestsPerSecond: number
}

class RateLimiterInterceptor implements Dispatcher.DispatchHandler {
    private semaphore: () => any
    private opts: Opts
    private handler: any
    private acquired: boolean

    static buildDispatch(dispatcher: any, options: any) {
        if (
            options?.maxConcurrent != null &&
            (!Number.isInteger(options.maxConcurrent) ||
                options.maxConcurrent < 1)
        ) {
            throw new Error('maxConcurrent must be a positive number')
        }

        const dispatch = dispatcher.dispatch.bind(dispatcher)
        return (opts: any, originalHandler: any) =>
            dispatch(opts, new RateLimiterInterceptor(opts, originalHandler))
    }

    constructor(opts: Opts, handler: any) {
        this.semaphore = RateLimit(opts.requestsPerSecond)
        this.opts = opts
        this.handler = handler
        this.acquired = false
    }

    async onRequestStart(controller: any, context: any) {
        await this.semaphore()
        this.acquired = true
        this.handler.onRequestStart?.(controller, context)
    }

    onRequestUpgrade(
        controller: any,
        statusCode: any,
        headers: any,
        socket: any,
    ) {
        this.handler.onRequestUpgrade?.(controller, statusCode, headers, socket)
    }

    onResponseStart(
        controller: any,
        statusCode: any,
        headers: any,
        statusMessage: any,
    ) {
        this.handler.onResponseStart?.(
            controller,
            statusCode,
            headers,
            statusMessage,
        )
    }

    onResponseData(controller: any, chunk: any) {
        this.handler.onResponseData?.(controller, chunk)
    }

    onResponseEnd(controller: any, trailers: any) {
        if (this.acquired) {
            this.acquired = false
        }
        this.handler.onResponseEnd?.(controller, trailers)
    }

    onResponseError(controller: any, error: any) {
        if (this.acquired) {
            this.acquired = false
        }
        this.handler.onResponseError?.(controller, error)
    }
}

export function rateLimitInterceptor({ requestsPerSecond }) {
    return (dispatch) => {
        return function Intercept(opts, handler) {
            // if (maxRedirections == null || maxRedirections === 0) {
            //     return dispatch(opts, handler)
            // }

            const handlerNew = new RateLimiterInterceptor(
                { requestsPerSecond },
                handler,
            )
            return dispatch({}, handlerNew)
        }
    }
}
