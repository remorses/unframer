import { SpiceflowClient } from 'spiceflow/client';
import type { RouteType } from 'website/src/lib/spiceflow-plugins.server';
export type LoaderReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
export declare const pluginApiClient: SpiceflowClient.Create<RouteType>;
export declare const noop: any;
export declare function isTruthy<T>(val: T | undefined | null | false): val is T;
export declare enum Paths {
    login = "/login",
    main = "/"
}
export declare enum RouteIds {
    root = "root"
}
export declare const globalState: {};
export declare enum LocalStorageKeys {
    sessionId = "framer-mcp-session-id"
}
export declare function getMcpPluginData(): {
    sessionKey: string;
};
export declare function withMode(path: string, params?: Record<string, string>): string;
export declare function sleep(ms: number): Promise<void>;
//# sourceMappingURL=utils.d.ts.map