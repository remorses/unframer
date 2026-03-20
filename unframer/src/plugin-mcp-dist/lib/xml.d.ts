import type { FramerLayersTree } from './schema.js';
export declare function rewriteXmlContentForTests({ xml: xml, newContent, }: {
    xml: string;
    newContent: {
        nodeId: string;
        newContent?: string;
    }[];
}): string;
export declare const TEMP_NODE_ID_PREFIX = "_temp_";
export type NodeType = 'Frame' | 'Text' | 'SVG' | 'ComponentInstance';
export type NewExtractedNode = {
    nodeId: string;
    nodeType?: NodeType;
    newContent: string;
    attributes: Record<string, string>;
    parentId?: string;
    beforeNodeId?: string;
    afterNodeId?: string;
};
export declare function extractObjectsFromXmlContent(xml: string, options?: {
    enableNodeCreation?: boolean;
}): NewExtractedNode[];
export declare function xmlToFramerLayersTree(xml: string): FramerLayersTree;
export declare function framerLayersTreeToXml(tree: FramerLayersTree, options?: {
    shouldAddNodeIdAlways?: boolean;
    indent?: string;
    showReplicaChildren?: boolean;
    maxCharacters?: number;
    currentDepth?: number;
    currentCharCount?: number;
}): string;
export declare function addNodeCount(tree: FramerLayersTree): FramerLayersTree;
//# sourceMappingURL=xml.d.ts.map