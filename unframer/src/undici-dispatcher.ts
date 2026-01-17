import { Agent, interceptors, setGlobalDispatcher } from 'undici'
import { FlatCacheStore } from './flat-cache-interceptor.js'
import { version } from './version.js'

export const dispatcher = new Agent({
    keepAliveTimeout: 20,
    keepAliveMaxTimeout: 20,
}).compose(
    interceptors.cache({
        store: new FlatCacheStore({ cacheDir: `.unframer` }),
    }),
)

setGlobalDispatcher(dispatcher)
