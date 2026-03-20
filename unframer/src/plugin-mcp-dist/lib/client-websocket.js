import { useStore } from "./store.js";
// Function for handling websocket connection based on session cookie
export async function websocketClientHandling({ handle, websocketId, }) {
    if (typeof window === 'undefined')
        return;
    const websocketUrl = `wss://unframer.co/_tunnel/upstream?id=${websocketId}`;
    let ws;
    let pingInterval = null;
    let reconnectInterval = 1000;
    let shouldReconnect = true;
    function connect() {
        console.log('connecting over mcp websocketId', websocketId);
        ws = new WebSocket(websocketUrl);
        ws.onopen = () => {
            console.log('websocket client connected', websocketId);
            reconnectInterval = 1000; // reset backoff
            ws.send(JSON.stringify({ type: 'ready' }));
            // Setup ping interval
            if (pingInterval)
                clearInterval(pingInterval);
            pingInterval = setInterval(() => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify({ type: 'ping' }));
                }
            }, 1000);
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
                console.error(`websocket sent invalid data`, event.data);
                return;
            }
            if (payload.type === 'ready') {
                ws.send(JSON.stringify({ type: 'ready' }));
                useStore.setState({ isConnected: true });
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
                if (ws.readyState === WebSocket.OPEN) {
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
                if (ws.readyState === WebSocket.OPEN) {
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
            useStore.setState({ isConnected: false });
            if (pingInterval) {
                clearInterval(pingInterval);
                pingInterval = null;
            }
            if (shouldReconnect) {
                setTimeout(connect, reconnectInterval);
                // exponential backoff (max 30s)
                reconnectInterval = Math.min(30000, reconnectInterval * 1.5);
            }
        };
    }
    // Start the connection
    connect();
    // Return a cleanup function to close connection
    return () => {
        shouldReconnect = false;
        if (pingInterval)
            clearInterval(pingInterval);
        ws.close();
    };
}
//# sourceMappingURL=client-websocket.js.map