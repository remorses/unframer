export function createWebsocketHandling({ ws, defaultTimeout = 1000 * 5, }) {
    const pendingRequests = new Map();
    const usedIdempotenceIds = new Set();
    const send = async ({ idempotenceKey, payload, }) => {
        if (!ws || ws.readyState !== WebSocket.OPEN) {
            throw new Error('WebSocket instance not open.');
        }
        const id = crypto.randomUUID();
        const message = {
            id,
            payload,
        };
        return new Promise((resolve, reject) => {
            // If idempotenceKey is specified and already used, return resolved promise immediately
            if (idempotenceKey && usedIdempotenceIds.has(idempotenceKey)) {
                console.log(`Idempotence ID ${idempotenceKey} already used, skipping docs payload set payload`);
                return Promise.resolve(undefined);
            }
            const timeout = setTimeout(() => {
                pendingRequests.delete(id);
                reject(new Error(`Request ${id} timed out after ${defaultTimeout}ms`));
            }, defaultTimeout);
            pendingRequests.set(id, { resolve, reject, timeout });
            ws.send(JSON.stringify(message));
            if (idempotenceKey) {
                usedIdempotenceIds.add(idempotenceKey);
            }
        });
    };
    function onMessage(event) {
        let msg;
        try {
            // Handle both string and Blob data
            if (typeof event.data === 'string') {
                msg = JSON.parse(event.data);
            }
            else if (event.data instanceof Blob) {
                // Skip binary data
                return;
            }
        }
        catch (err) {
            // ignore parse errors
            return;
        }
        if (!msg)
            return;
        const { id, payload, error } = msg;
        if (!id)
            return;
        const pending = pendingRequests.get(id);
        if (!pending)
            return;
        pendingRequests.delete(id);
        clearTimeout(pending.timeout);
        if (error) {
            pending.reject(new Error(error));
        }
        else {
            pending.resolve(payload?.output ?? null);
        }
    }
    // Attach ws 'message' event handler
    ws.addEventListener('message', onMessage);
    const cleanup = async () => {
        ws.removeEventListener('message', onMessage);
        send({
            payload: { type: 'close' },
        });
        // Clean up any pending requests
        for (const [id, pending] of Array.from(pendingRequests)) {
            clearTimeout(pending.timeout);
            pending.reject(new Error('RPC client cleanup'));
        }
        pendingRequests.clear();
        usedIdempotenceIds.clear();
        ws.close();
    };
    // Register cleanup on ws close
    ws.addEventListener('close', () => {
        cleanup();
    });
    return {
        send,
    };
}
//# sourceMappingURL=websocket-server.js.map