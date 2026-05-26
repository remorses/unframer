/**
 * Helper functions for picking the active upstream plugin socket and matching
 * in-flight requests to the socket that sent them.
 */
import type { Attachment } from './tunnel.js';
type AttachmentSocket = {
    deserializeAttachment(): Attachment | undefined;
    readyState?: number;
};
type PendingSocketRequest = {
    upstreamConnectionId?: string;
    upstreamConnectionOrdinal?: number;
    upstreamConnectedAt?: number;
};
export declare function getAttachmentConnectionId(attachment?: Attachment): string;
export declare function getAttachmentConnectionOrdinal(attachment?: Attachment): number;
export declare function getAttachmentConnectedAt(attachment?: Attachment): number;
export declare function isAttachmentReadyForRequests(attachment?: Attachment): boolean;
export declare function isSocketUsable(socket: AttachmentSocket): boolean;
export declare function pickActiveUpstreamSocket<T extends AttachmentSocket>({ sockets, }: {
    sockets: T[];
}): T | undefined;
export declare function matchesPendingRequestSocket({ attachment, pendingRequest, }: {
    attachment?: Attachment;
    pendingRequest: PendingSocketRequest;
}): boolean;
export {};
//# sourceMappingURL=upstream-socket.d.ts.map