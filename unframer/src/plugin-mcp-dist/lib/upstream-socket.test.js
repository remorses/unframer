/**
 * Tests upstream socket selection and request/socket matching logic used by the MCP worker.
 */
import { describe, expect, test } from 'vitest';
import { matchesPendingRequestSocket, pickActiveUpstreamSocket, } from './upstream-socket.js';
function createSocket({ attachment, readyState, }) {
    return {
        deserializeAttachment() {
            return attachment;
        },
        readyState,
    };
}
describe('pickActiveUpstreamSocket', () => {
    test('prefers most recently connected ready socket', () => {
        const olderSocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'older',
                connectionOrdinal: 1,
                connectedAt: 10,
                readyAcked: true,
            },
            readyState: 1,
        });
        const newerSocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'newer',
                connectionOrdinal: 2,
                connectedAt: 20,
                readyAcked: true,
            },
            readyState: 1,
        });
        expect(pickActiveUpstreamSocket({
            sockets: [olderSocket, newerSocket],
        })).toBe(newerSocket);
    });
    test('ignores connecting and closed sockets', () => {
        const connectingSocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'connecting',
                connectionOrdinal: 3,
                connectedAt: 30,
                readyAcked: true,
            },
            readyState: 0,
        });
        const closedSocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'closed',
                connectionOrdinal: 4,
                connectedAt: 40,
                readyAcked: true,
            },
            readyState: 3,
        });
        const openSocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'open',
                connectionOrdinal: 2,
                connectedAt: 20,
                readyAcked: true,
            },
            readyState: 1,
        });
        expect(pickActiveUpstreamSocket({
            sockets: [connectingSocket, closedSocket, openSocket],
        })).toBe(openSocket);
    });
    test('ignores sockets that have not completed ready handshake', () => {
        const unackedNewest = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'unacked',
                connectionOrdinal: 3,
                connectedAt: 30,
                readyAcked: false,
            },
            readyState: 1,
        });
        const readyOlder = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'ready',
                connectionOrdinal: 2,
                connectedAt: 20,
                readyAcked: true,
            },
            readyState: 1,
        });
        expect(pickActiveUpstreamSocket({
            sockets: [readyOlder, unackedNewest],
        })).toBe(readyOlder);
    });
    test('treats legacy attachments without readyAcked as usable', () => {
        const legacySocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
            },
            readyState: 1,
        });
        expect(pickActiveUpstreamSocket({
            sockets: [legacySocket],
        })).toBe(legacySocket);
    });
    test('uses connection ordinal when timestamps are identical', () => {
        const olderSocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'older',
                connectionOrdinal: 1,
                connectedAt: 20,
                readyAcked: true,
            },
            readyState: 1,
        });
        const newerSocket = createSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'newer',
                connectionOrdinal: 2,
                connectedAt: 20,
                readyAcked: true,
            },
            readyState: 1,
        });
        expect(pickActiveUpstreamSocket({
            sockets: [olderSocket, newerSocket],
        })).toBe(newerSocket);
    });
});
describe('matchesPendingRequestSocket', () => {
    test('matches by connection id before falling back to timestamps', () => {
        expect(matchesPendingRequestSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'newer',
                connectionOrdinal: 2,
                connectedAt: 20,
                readyAcked: true,
            },
            pendingRequest: {
                upstreamConnectionId: 'newer',
                upstreamConnectedAt: 10,
            },
        })).toBe(true);
        expect(matchesPendingRequestSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'older',
                connectionOrdinal: 1,
                connectedAt: 20,
                readyAcked: true,
            },
            pendingRequest: {
                upstreamConnectionId: 'newer',
                upstreamConnectedAt: 20,
            },
        })).toBe(false);
    });
    test('rejects only requests sent through the closing socket', () => {
        expect(matchesPendingRequestSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'current',
                connectionOrdinal: 2,
                connectedAt: 20,
                readyAcked: true,
            },
            pendingRequest: {
                upstreamConnectionId: 'current',
                upstreamConnectionOrdinal: 2,
                upstreamConnectedAt: 20,
            },
        })).toBe(true);
        expect(matchesPendingRequestSocket({
            attachment: {
                role: 'up',
                ids: ['user'],
                connectionId: 'older',
                connectionOrdinal: 1,
                connectedAt: 10,
                readyAcked: true,
            },
            pendingRequest: {
                upstreamConnectionId: 'current',
                upstreamConnectionOrdinal: 2,
                upstreamConnectedAt: 20,
            },
        })).toBe(false);
    });
});
//# sourceMappingURL=upstream-socket.test.js.map