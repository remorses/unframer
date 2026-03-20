import { addNodeCount } from './xml.js';
export const ITEMS_PER_ITERATION = 30;
export function bfsFramerLayersTree(tree) {
    const result = [];
    const queue = [...tree];
    while (queue.length > 0) {
        const node = queue.shift();
        if (!node)
            continue;
        result.push(node);
        if (node.children) {
            queue.push(...node.children);
        }
    }
    return result;
}
export function mergeCloseChunks(chunks, maxSize) {
    // If we have 1 or fewer chunks, just return them as-is
    if (chunks.length <= 1) {
        return chunks;
    }
    const result = [];
    let currentChunk = chunks[0];
    // Iterate through chunks starting from the second one
    for (let i = 1; i < chunks.length; i++) {
        const nextChunk = chunks[i];
        const combinedSize = getChunkSize(currentChunk) + getChunkSize(nextChunk);
        // If combining the chunks would exceed maxSize,
        // add current chunk to result and start new chunk
        if (combinedSize > maxSize) {
            result.push(currentChunk);
            currentChunk = nextChunk;
        }
        else {
            // Merge the chunks by concatenating their arrays
            currentChunk = [...currentChunk, ...nextChunk];
        }
    }
    // Don't forget to add the last chunk
    result.push(currentChunk);
    return result;
}
export function mergeChunksTooSmall(chunks, maxSize) {
    // If we have 1 or fewer chunks, just return them as-is
    if (chunks.length <= 1) {
        return chunks;
    }
    const minSize = maxSize / 2;
    let result = [...chunks];
    // Keep merging small chunks until no more merges are possible
    let madeChanges = true;
    while (madeChanges) {
        madeChanges = false;
        // Find first small chunk that can be merged
        for (let i = 0; i < result.length; i++) {
            const currentSize = getChunkSize(result[i]);
            if (currentSize < minSize) {
                // Get sizes of previous and next chunks if they exist
                const prevSize = i > 0 ? getChunkSize(result[i - 1]) : Infinity;
                const nextSize = i < result.length - 1
                    ? getChunkSize(result[i + 1])
                    : Infinity;
                // Determine which neighbor is smaller
                if (prevSize <= nextSize && i > 0) {
                    // Merge with previous chunk
                    const combinedSize = currentSize + prevSize;
                    if (combinedSize < maxSize) {
                        result[i - 1] = [...result[i - 1], ...result[i]];
                        result.splice(i, 1);
                        madeChanges = true;
                        break;
                    }
                }
                else if (i < result.length - 1) {
                    // Merge with next chunk
                    const combinedSize = currentSize + nextSize;
                    if (combinedSize < maxSize) {
                        result[i] = [...result[i], ...result[i + 1]];
                        result.splice(i + 1, 1);
                        madeChanges = true;
                        break;
                    }
                }
            }
        }
    }
    return result;
}
// Helper function to calculate total size of a chunk
function getChunkSize(chunk) {
    return chunk.reduce((sum, node) => sum + (node.count || 0), 0);
}
export function splitTreeInChunks(tree, maxChunkTreeSize = ITEMS_PER_ITERATION) {
    addNodeCount(tree);
    const chunks = splitTreeInChunksRecursive(tree, maxChunkTreeSize, []);
    let prevLength = -1;
    let currentChunks = chunks;
    while (currentChunks.length !== prevLength) {
        prevLength = currentChunks.length;
        currentChunks = mergeCloseChunks(currentChunks, maxChunkTreeSize);
    }
    currentChunks = mergeChunksTooSmall(currentChunks, maxChunkTreeSize * 1.2);
    return currentChunks;
}
function findFirstChildrenLayer(tree) {
    let currentLayer = tree;
    let parents = [];
    while (currentLayer.length === 1 && currentLayer[0].children?.length) {
        parents.push({ ...currentLayer[0], children: [] });
        currentLayer = currentLayer[0].children;
    }
    return { layer: currentLayer, parents };
}
function splitTreeInChunksRecursive(tree, maxChunkTreeSize, initialParents) {
    let result = [];
    // Find the first layer with more than one child
    const { layer: currentLayer, parents } = findFirstChildrenLayer(tree);
    const allParents = [...initialParents, ...parents];
    for (const node of currentLayer) {
        if (node.count <= maxChunkTreeSize) {
            const chunk = createChunkWithParents(allParents, [node]);
            result.push(chunk);
        }
        else {
            result.push(...splitTreeInChunksRecursive([node], maxChunkTreeSize, allParents));
        }
    }
    return result;
}
function createChunkWithParents(parents, children) {
    if (parents.length === 0) {
        return children;
    }
    let currentParent = { ...parents[parents.length - 1], children };
    for (let i = parents.length - 2; i >= 0; i--) {
        currentParent = { ...parents[i], children: [currentParent] };
    }
    return addNodeCount([currentParent]);
}
//# sourceMappingURL=tree-utils.js.map