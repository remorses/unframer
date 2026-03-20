import { redirect } from 'react-router';
import { createSpiceflowClient } from 'spiceflow/client';
const PUBLIC_URL = process.env.PUBLIC_URL || 'https://unframer.co';
export const pluginApiClient = createSpiceflowClient(PUBLIC_URL, {
    async onResponse(response) {
        if (response.status === 401) {
            console.log('clearing session because api returned 401');
            localStorage.removeItem(LocalStorageKeys.sessionId);
            throw redirect(withMode(Paths.login));
        }
    },
    async onRequest() {
        const { sessionKey } = getMcpPluginData();
        return {
            headers: {
                sessionKey,
            },
        };
    },
});
export const noop = () => { };
export function isTruthy(val) {
    return Boolean(val);
}
export var Paths;
(function (Paths) {
    Paths["login"] = "/login";
    Paths["main"] = "/";
})(Paths || (Paths = {}));
export var RouteIds;
(function (RouteIds) {
    RouteIds["root"] = "root";
})(RouteIds || (RouteIds = {}));
export const globalState = {};
export var LocalStorageKeys;
(function (LocalStorageKeys) {
    LocalStorageKeys["sessionId"] = "framer-mcp-session-id";
})(LocalStorageKeys || (LocalStorageKeys = {}));
export function getMcpPluginData() {
    const sessionKey = localStorage.getItem(LocalStorageKeys.sessionId);
    return {
        sessionKey: sessionKey || '',
    };
}
export function withMode(path, params) {
    const searchParams = new URLSearchParams(params);
    return `${path}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
}
export function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=utils.js.map