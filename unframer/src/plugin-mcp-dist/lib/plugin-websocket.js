import { useStore } from './store.js';
// Global variable to track the active cleanup function
let cleanupFunction = undefined;
// Global WebSocket instance to check connection state
let ws = undefined;
// Track reconnect timeout to cancel it if needed
let reconnectTimeout = undefined;
// Function for handling websocket connection based on session cookie
export async function websocketClientHandling({ handle, websocketId, }) {
    if (typeof window === 'undefined')
        return;
    // Check if we're already connected or connecting using WebSocket state
    if (ws?.readyState === WebSocket.CONNECTING ||
        ws?.readyState === WebSocket.OPEN) {
        console.log('Already connected or connecting (WebSocket state:', ws?.readyState, '), returning existing cleanup function');
        return cleanupFunction;
    }
    const host = new URL(process.env.PUBLIC_URL).host;
    console.log(`using ${host} for websocket url`);
    const websocketUrl = `wss://${host}/_tunnel/upstream?id=${websocketId}`;
    let pingInterval = null;
    let reconnectInterval = 3000;
    let shouldReconnect = true;
    function connect() {
        if (ws?.readyState === WebSocket.CONNECTING ||
            ws?.readyState === WebSocket.OPEN) {
            console.log('Already connected');
            return;
        }
        // Clear any pending reconnect when starting a new connection
        if (reconnectTimeout) {
            clearTimeout(reconnectTimeout);
            reconnectTimeout = undefined;
        }
        console.log('connecting over mcp websocket', websocketUrl);
        ws = new WebSocket(websocketUrl);
        ws.onopen = () => {
            console.log('websocket client connected', websocketId);
            reconnectInterval = 3000;
            if (ws?.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify({ type: 'ready' }));
            }
            useStore.setState({ isSocketOpen: true, error: undefined });
            // Setup ping interval
            if (pingInterval)
                clearInterval(pingInterval);
            pingInterval = setInterval(() => {
                if (ws?.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: 'ping' }));
                }
            }, 5 * 1000);
        };
        ws.onmessage = async (event) => {
            let data;
            try {
                data = JSON.parse(event.data);
            }
            catch {
                console.error(`websocket sent invalid json`, event.data);
                return;
            }
            const { id, payload } = data || {};
            if (!payload?.type) {
                // console.error(`websocket sent invalid data`, event.data)
                return;
            }
            if (payload.type === 'ready') {
                console.log('received ready');
                if (ws?.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: 'ready' }));
                }
                useStore.setState({ isConnected: true, error: undefined });
                return;
            }
            if (payload.type === 'close') {
                useStore.setState({ isConnected: false });
                return;
            }
            console.log(`websocket message received`, payload);
            try {
                const output = await handle(payload);
                console.log(`websocket message handled`, payload.type, output);
                if (ws?.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({
                        id,
                        payload: {
                            input: payload.input,
                            type: payload.type,
                            output,
                        },
                    }));
                }
            }
            catch (e) {
                console.error(`websocket error`, e);
                if (ws?.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({
                        id,
                        error: e instanceof Error ? e.message : String(e),
                    }));
                }
            }
        };
        ws.onerror = (error) => {
            console.error('websocket error', error);
        };
        ws.onclose = (event) => {
            console.log(`websocket client disconnected (${event.code}), reconnecting in ${reconnectInterval}ms`);
            useStore.setState({
                isConnected: false,
                isSocketOpen: false,
                error: undefined,
            });
            if (pingInterval) {
                clearInterval(pingInterval);
                pingInterval = null;
            }
            // Clear connection state
            cleanupFunction = undefined;
            ws = undefined;
            if (event.code === 4009) {
                const errorMessage = 'Another MCP plugin has connected. Please keep only one open. Then try reopening this plugin';
                console.error(errorMessage);
                useStore.setState({
                    isConnected: false,
                    isSocketOpen: false,
                    error: errorMessage,
                });
                // Prevent further reconnect attempts when this error occurs
                shouldReconnect = false;
            }
            if (reconnectTimeout) {
                clearTimeout(reconnectTimeout);
            }
            if (shouldReconnect) {
                reconnectTimeout = setTimeout(() => {
                    reconnectTimeout = undefined;
                    // Only reconnect if WebSocket is not open or connecting
                    if (!ws ||
                        (ws.readyState !== WebSocket.OPEN &&
                            ws.readyState !== WebSocket.CONNECTING)) {
                        connect();
                    }
                }, reconnectInterval);
                // exponential backoff (max 30s)
                reconnectInterval = Math.min(30000, reconnectInterval * 1.1);
            }
        };
    }
    // Start the connection
    connect();
    // Create and store the cleanup function
    cleanupFunction = () => {
        shouldReconnect = false;
        if (reconnectTimeout) {
            clearTimeout(reconnectTimeout);
            reconnectTimeout = undefined;
        }
        if (pingInterval) {
            clearInterval(pingInterval);
            pingInterval = null;
        }
        if (ws?.readyState !== WebSocket.CLOSED) {
            ws?.close();
        }
        cleanupFunction = undefined;
        ws = undefined;
    };
    // Return the cleanup function
    return cleanupFunction;
}
//# sourceMappingURL=plugin-websocket.js.map