/**
 * Helper functions for picking the active upstream plugin socket and matching
 * in-flight requests to the socket that sent them.
 */
const WS_OPEN = 1;
export function getAttachmentConnectionId(attachment) {
    return attachment?.connectionId || '';
}
export function getAttachmentConnectionOrdinal(attachment) {
    return attachment?.connectionOrdinal || 0;
}
export function getAttachmentConnectedAt(attachment) {
    return attachment?.connectedAt || 0;
}
export function isAttachmentReadyForRequests(attachment) {
    return attachment?.readyAcked !== false;
}
export function isSocketUsable(socket) {
    if (typeof socket.readyState === 'undefined') {
        return true;
    }
    return socket.readyState === WS_OPEN;
}
export function pickActiveUpstreamSocket({ sockets, }) {
    return sockets
        .filter((socket) => {
        return isSocketUsable(socket);
    })
        .filter((socket) => {
        return isAttachmentReadyForRequests(socket.deserializeAttachment());
    })
        .sort((left, right) => {
        const rightOrdinal = getAttachmentConnectionOrdinal(right.deserializeAttachment());
        const leftOrdinal = getAttachmentConnectionOrdinal(left.deserializeAttachment());
        if (rightOrdinal !== leftOrdinal) {
            return rightOrdinal - leftOrdinal;
        }
        return (getAttachmentConnectedAt(right.deserializeAttachment()) -
            getAttachmentConnectedAt(left.deserializeAttachment()));
    })[0];
}
export function matchesPendingRequestSocket({ attachment, pendingRequest, }) {
    const attachmentConnectionId = getAttachmentConnectionId(attachment);
    if (attachmentConnectionId && pendingRequest.upstreamConnectionId) {
        return attachmentConnectionId === pendingRequest.upstreamConnectionId;
    }
    const attachmentConnectionOrdinal = getAttachmentConnectionOrdinal(attachment);
    if (attachmentConnectionOrdinal && pendingRequest.upstreamConnectionOrdinal) {
        return attachmentConnectionOrdinal === pendingRequest.upstreamConnectionOrdinal;
    }
    const attachmentConnectedAt = getAttachmentConnectedAt(attachment);
    const pendingConnectedAt = pendingRequest.upstreamConnectedAt || 0;
    return attachmentConnectedAt === pendingConnectedAt;
}
//# sourceMappingURL=upstream-socket.js.map