export * from 'framer-api';
const allowAllPermissions = () => {
    return true;
};
const noOpNotify = async (message, options) => {
    console.warn('[framer-api server shim notify]', message, options);
};
const emptySelection = async () => {
    return [];
};
const noOpZoomIntoView = async () => {
    return;
};
// The server API has no canvas, so it cannot move the canvas root to another page.
// Callers use navigateTo to load a page scope before structural edits; here it is a
// no-op and those edits fail later with an explicit message instead of a TypeError.
const noOpNavigateTo = async () => {
    return;
};
function getRuntimeFramer() {
    const globalWithFramer = globalThis;
    if (!globalWithFramer.framer) {
        throw new Error('Server runtime framer client is not initialized. Connect first and assign globalThis.framer.');
    }
    return globalWithFramer.framer;
}
export const framer = new Proxy({}, {
    get(_target, property, receiver) {
        const runtimeFramer = getRuntimeFramer();
        const value = Reflect.get(runtimeFramer, property, receiver);
        if (value === undefined) {
            if (property === 'isAllowedTo') {
                return allowAllPermissions;
            }
            if (property === 'notify') {
                return noOpNotify;
            }
            if (property === 'getSelection') {
                return emptySelection;
            }
            if (property === 'zoomIntoView') {
                return noOpZoomIntoView;
            }
            if (property === 'navigateTo') {
                return noOpNavigateTo;
            }
        }
        if (typeof value === 'function') {
            return value.bind(runtimeFramer);
        }
        return value;
    },
});
//# sourceMappingURL=framer-client.server.js.map