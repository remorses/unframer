import { FramerLayersTree } from './schema.js';
export declare const ITEMS_PER_ITERATION = 30;
export declare function bfsFramerLayersTree(tree: FramerLayersTree): {
    content?: string;
    isReplica?: boolean;
    nodeId?: string;
    name?: string;
    children?: FramerLayersTree;
    attributes?: Record<string, string>;
    attrControlsComments?: Record<string, string>;
    count?: number;
    comment?: string;
    disableSelfClosing?: boolean;
}[];
export declare function mergeCloseChunks(chunks: FramerLayersTree[], maxSize: number): FramerLayersTree[];
export declare function mergeChunksTooSmall(chunks: FramerLayersTree[], maxSize: number): FramerLayersTree[];
export declare function splitTreeInChunks(tree: FramerLayersTree, maxChunkTreeSize?: number): FramerLayersTree[];
//# sourceMappingURL=tree-utils.d.ts.map