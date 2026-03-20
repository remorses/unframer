var __rewriteRelativeImportExtension = (this && this.__rewriteRelativeImportExtension) || function (path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
        });
    }
    return path;
};
import { framer, isComponentInstanceNode, isComponentNode, isFrameNode, isTextNode, supportsAspectRatio, supportsBackgroundColor, supportsBackgroundImage, supportsBorder, supportsBorderRadius, supportsFont, supportsImageRendering, supportsInlineTextStyle, supportsLayout, supportsLink, supportsLocked, supportsName, supportsOpacity, supportsOverflow, supportsPins, supportsPosition, supportsRotation, supportsSize, supportsSizeConstraints, supportsSVG, supportsTextTruncation, supportsVisible, supportsZIndex, } from '#framer-client';
import { Sema } from 'sema4';
import { propCamelCaseJustLikeFramer } from 'unframer';
import { bfsFramerLayersTree } from './tree-utils.js';
let cachedPagePaths = [];
// Helper function to check permissions and throw error if not allowed
function checkPermissions(...methods) {
    // Cast to the expected tuple type for isAllowedTo
    const [first, ...rest] = methods;
    if (!first)
        return;
    if (!framer.isAllowedTo(first, ...rest)) {
        throw new Error(`Missing permissions: ${methods.join(', ')}`);
    }
}
// Generic utility function to sort an array based on the order of IDs in a reference array
function sortArrayLike(array, getItemId, referenceIds) {
    return array.sort((a, b) => {
        const aIndex = referenceIds.indexOf(getItemId(a));
        const bIndex = referenceIds.indexOf(getItemId(b));
        // If not found in reference, maintain current order
        if (aIndex === -1 && bIndex === -1)
            return 0;
        if (aIndex === -1)
            return 1;
        if (bIndex === -1)
            return -1;
        return aIndex - bIndex;
    });
}
// Cache for uploaded images to prevent re-uploading
const uploadedImagesCache = new Map();
// Export a function to clear the cache if needed
export function clearUploadedImagesCache() {
    uploadedImagesCache.clear();
}
async function getPagePaths() {
    if (cachedPagePaths?.length)
        return cachedPagePaths;
    const pages = await framer.getNodesWithType('WebPageNode');
    cachedPagePaths = pages
        .map((x) => x.path)
        .filter((val) => val != null)
        .filter((val) => !val?.includes(':'));
    return cachedPagePaths;
}
export function replaceEnumIdsForControls(controls, propControls) {
    try {
        if (!controls || !propControls)
            return controls;
        controls = { ...controls };
        for (let [k, value] of Object.entries(propControls || {})) {
            if (!value)
                continue;
            const propName = propCamelCaseJustLikeFramer(value.title) || k;
            switch (value.type) {
                case ControlType.Enum: {
                    if (!('optionTitles' in value)) {
                        return '';
                    }
                    const optionTitles = value.optionTitles || value.options;
                    let v = controls[propName] || controls[k];
                    const optionIndex = value.options.indexOf(v);
                    const enumTitle = optionTitles[optionIndex];
                    if (optionIndex !== -1 && enumTitle) {
                        controls[propName] = enumTitle;
                    }
                }
            }
        }
        return controls;
    }
    catch (e) {
        console.error('replaceEnumIdsForControls error:', e);
        return controls;
    }
}
export async function getComponentPropertyControls(url) {
    if (!url)
        return { comments: undefined, propertyControls: undefined };
    try {
        const [res, paths] = await Promise.all([
            import(__rewriteRelativeImportExtension(/* @vite-ignore */ url)),
            getPagePaths(),
        ]);
        const propertyControls = res.default?.propertyControls;
        const comments = getAttributeComments(propertyControls, paths);
        return {
            comments,
            propertyControls,
        };
    }
    catch (e) {
        console.log('failed to import component schema', e);
        return { comments: undefined, propertyControls: undefined };
    }
}
export var ControlType;
(function (ControlType) {
    ControlType["Boolean"] = "boolean";
    ControlType["Number"] = "number";
    ControlType["String"] = "string";
    ControlType["RichText"] = "richtext";
    ControlType["FusedNumber"] = "fusednumber";
    ControlType["Enum"] = "enum";
    ControlType["SegmentedEnum"] = "segmentedenum";
    ControlType["Color"] = "color";
    ControlType["Image"] = "image";
    ControlType["ResponsiveImage"] = "responsiveimage";
    ControlType["File"] = "file";
    ControlType["ComponentInstance"] = "componentinstance";
    ControlType["Array"] = "array";
    ControlType["EventHandler"] = "eventhandler";
    ControlType["Transition"] = "transition";
    ControlType["BoxShadow"] = "boxshadow";
    ControlType["Link"] = "link";
    ControlType["Date"] = "date";
    ControlType["Object"] = "object";
    ControlType["Font"] = "font";
    ControlType["PageScope"] = "pagescope";
    ControlType["ScrollSectionRef"] = "scrollsectionref";
    ControlType["CustomCursor"] = "customcursor";
    ControlType["Border"] = "border";
    ControlType["Cursor"] = "cursor";
    ControlType["Padding"] = "padding";
    ControlType["BorderRadius"] = "borderradius";
    ControlType["CollectionReference"] = "collectionreference";
    ControlType["MultiCollectionReference"] = "multicollectionreference";
})(ControlType || (ControlType = {}));
export function getAttributeComments(controls, availablePagePaths = ['/']) {
    if (!controls) {
        return {};
    }
    const result = {};
    Object.entries(controls || {}).forEach(([key, value]) => {
        if (!value) {
            return;
        }
        const typescriptType = (value) => {
            switch (value.type) {
                case ControlType.Color:
                    return 'color value';
                case ControlType.Boolean:
                    return 'boolean';
                case ControlType.Number:
                    return 'number';
                case ControlType.String:
                    return '';
                case ControlType.Enum: {
                    if (!('optionTitles' in value)) {
                        return '';
                    }
                    const options = value.optionTitles || value.options;
                    return options
                        .map((x, i) => `'${x}' is ${value.options[i]}`)
                        .join(', ');
                }
                case ControlType.File:
                    return 'file';
                case ControlType.Image:
                    return 'image';
                case ControlType.ComponentInstance:
                    return 'component instance';
                    return 'React.ReactNode';
                case ControlType.Array:
                    return `${typescriptType(value.control)}[]`;
                case ControlType.Object:
                    return `{${Object.entries(value.controls)
                        .map(([k, v]) => {
                        return `${k}: ${typescriptType(v)}`;
                    })
                        .join(', ')}}`;
                case ControlType.Date:
                    return 'DateString';
                case ControlType.Link:
                    return `URL string, page path amongst ${JSON.stringify(availablePagePaths)}, or JSON link object {"type":"webPage","webPageId":"<pageNodeId>","scrollSection":{"targetNodeId":"<sectionNodeId>"}} for page+section links`;
                case ControlType.ScrollSectionRef:
                    return `JSON object {"targetNodeId":"<sectionNodeId>"} for scroll section target`;
                case ControlType.ResponsiveImage:
                    return 'responsive image';
                    return `{src: string, srcSet?: string, alt?: string}`;
                case ControlType.FusedNumber:
                    return 'number';
                case ControlType.Transition:
                    return 'transition';
                    return 'any';
                case ControlType.EventHandler:
                    return 'event handler';
                    return 'Function';
                case ControlType.RichText:
                    return 'rich text';
                case ControlType.Font:
                    return 'font';
                case ControlType.BoxShadow:
                    return 'box shadow';
                case ControlType.Padding:
                    return 'padding';
                case ControlType.Border:
                    return 'border';
                case ControlType.BorderRadius:
                    return 'border radius, four px values delimited by space';
                default:
                    return 'any';
            }
        };
        result[key] = typescriptType(value);
        const propName = propCamelCaseJustLikeFramer(value.title);
        if (propName)
            result[propName] = typescriptType(value);
    });
    return result;
}
Object.assign(globalThis, {
    getComponentSchema: getComponentPropertyControls,
});
export function getInstanceComponentId(componentInstance) {
    if (!isComponentInstanceNode(componentInstance)) {
        return;
    }
    if (!componentInstance.componentIdentifier.startsWith('local-module:')) {
        console.log(`component ${componentInstance.name} is not a local module: ${componentInstance.componentIdentifier} `);
        return;
    }
    const regex = /local-module:.*\/(.*):.*/;
    const match = componentInstance.componentIdentifier.match(regex);
    if (!match) {
        console.log(`component ${componentInstance.name} does not match regex to get component id: ${componentInstance.componentIdentifier} `);
        return;
    }
    return match[1];
}
async function getInstanceComponent(componentInstance) {
    const componentId = getInstanceComponentId(componentInstance);
    if (!componentId) {
        return;
    }
    const componentNode = await framer.getNode(componentId);
    if (!componentNode || !isComponentNode(componentNode)) {
        console.log(`could not find component node for ${componentId}`);
        return;
    }
    return componentNode;
}
async function getComponentCodeUrl(componentNode) {
    if (isComponentInstanceNode(componentNode)) {
        return await getComponentCodeUrl(await getInstanceComponent(componentNode));
    }
    if (isComponentNode(componentNode)) {
        let nameEncoding = componentNode.name || '';
        if (!nameEncoding) {
            return;
        }
        nameEncoding = nameEncoding.replace(/ +/g, '-');
        nameEncoding = encodeURIComponent(nameEncoding);
        let id = componentNode.id;
        return `https://framer.com/m/${nameEncoding}-${id}.js`;
    }
}
Object.assign(globalThis, { getComponentCodeUrl });
async function* recurseIntoComponent(componentInstance, encounteredIds) {
    const componentNode = await getInstanceComponent(componentInstance);
    if (!componentNode) {
        return;
    }
    const primary = (await componentNode.getChildren()).find((x) => isFrameNode(x) && !x.isReplica);
    if (!primary) {
        console.log('no primary child for component found');
        return;
    }
    for await (let child of primary.walk()) {
        if (!encounteredIds.has(child.id)) {
            encounteredIds.add(child.id);
            yield child;
            yield* recurseIntoComponent(child, encounteredIds);
        }
    }
}
async function isNodeVisible(node) {
    const parents = await getParentNodesArray(node);
    const isVisible = parents.every((parent) => {
        if (supportsVisible(parent)) {
            return parent.visible;
        }
        return true;
    });
    return isVisible && (!supportsVisible(node) || node.visible);
}
export async function isNodeZoomable(node) {
    if (!(await isNodeVisible(node))) {
        return false;
    }
    return true;
}
async function push({ node, tree, text, nodeId, isRootNode = false, visitedComponents, }) {
    const parents = (await getParentNodesArray(node)).reverse();
    let currentLevel = tree;
    let currentParent = null;
    for (let i = 0; i < parents.length; i++) {
        const parent = parents[i];
        let existingNode = currentLevel.find((item) => item.nodeId === parent.id);
        if (!existingNode) {
            existingNode = {
                nodeId: parent.id,
                name: supportsName(parent) ? parent.name || '' : '',
                isReplica: parent.isReplica,
                children: [],
            };
            currentLevel.push(existingNode);
            // Sort siblings based on parent's children order if we have a parent
            if (currentParent) {
                const parentChildren = await currentParent.getChildren();
                const childIds = parentChildren.map((child) => child.id);
                sortArrayLike(currentLevel, (item) => item.nodeId || '', childIds);
            }
        }
        if (!existingNode.children) {
            existingNode.children = [];
        }
        currentParent = parent;
        currentLevel = existingNode.children;
    }
    let { attributes, attrControlsComments } = await getNodeAttributesForXml(node, visitedComponents);
    // Add comment for root replica nodes
    if (isRootNode && node.isReplica) {
        attrControlsComments = {
            ...attrControlsComments,
            nodeId: 'This is a non-primary variant. To see children inside, call getNodeXml again on this nodeId.',
        };
    }
    const nodeEntry = {
        content: text,
        nodeId,
        name: 'name' in node ? node.name || '' : '',
        attributes,
        attrControlsComments,
        children: [],
        isReplica: node.isReplica,
        disableSelfClosing: isTextNode(node) ? true : undefined,
        // Add comment for replica nodes (variants) where children are skipped
        comment: node.isReplica && !isRootNode
            ? 'This is a non-primary variant. To see children inside, call getNodeXml again on this nodeId.'
            : undefined,
    };
    currentLevel.push(nodeEntry);
    // Sort the final level based on the last parent's children order
    if (currentParent || parents.length === 0) {
        const parentNode = currentParent ||
            (parents.length === 0 && node.getParent
                ? await node.getParent()
                : null);
        if (parentNode) {
            const parentChildren = await parentNode.getChildren();
            const childIds = parentChildren.map((child) => child.id);
            sortArrayLike(currentLevel, (item) => item.nodeId || '', childIds);
        }
    }
    return tree;
}
export async function getFramerTree({ rootNodes, recursive = true, }) {
    const timeId = `getFramerTree-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    console.time(timeId);
    let tree = [];
    // Create semaphore with concurrency limit of 6
    const semaphore = new Sema(6);
    let componentInstanceChildrenSeen = new Set();
    let rootNodeIds = new Set(rootNodes.map((n) => n.id));
    let visitedComponents = new Set();
    async function handleNode(node) {
        if (isTextNode(node)) {
            const isVisible = await isNodeVisible(node);
            if (!isVisible) {
                console.log('node not visible', node.id);
                return;
            }
            const text = await node.getText();
            if (!text) {
                console.log('no text found for node', node.id, node.name);
                return;
            }
            if (text) {
                tree = await push({
                    node,
                    tree: tree,
                    text,
                    nodeId: node.id,
                    isReplica: node.isReplica,
                    isRootNode: rootNodeIds.has(node.id),
                    visitedComponents,
                });
            }
            // Return early for text nodes to avoid duplicate push
            return;
        }
        const isVisible = await isNodeVisible(node);
        if (!isVisible) {
            console.log('node not visible', node.id);
            return;
        }
        tree = await push({
            node,
            tree: tree,
            nodeId: node.id,
            isReplica: node.isReplica,
            isRootNode: rootNodeIds.has(node.id),
            visitedComponents,
        });
    }
    // Collect all nodes to process
    const nodesToProcess = [];
    for (let rootNode of rootNodes) {
        if (!rootNode) {
            continue;
        }
        const isRootReplica = rootNode.isReplica;
        // Custom walk to handle replica children
        async function* walkNode(node, isRoot = false) {
            yield node;
            // Skip children if this is a root replica node
            if (isRoot && isRootReplica) {
                console.log(`Skipping children of root replica node ${node.id} (${'name' in node ? node.name : 'unknown'})`);
                return;
            }
            // Also skip children if this node itself is a replica (not just root replicas)
            if (!isRoot && node.isReplica) {
                console.log(`Skipping children of replica node ${node.id} (${'name' in node ? node.name : 'unknown'})`);
                return;
            }
            const children = await node.getChildren();
            for (const child of children) {
                yield* walkNode(child, false);
            }
        }
        for await (let node of walkNode(rootNode, true)) {
            nodesToProcess.push({ node });
            if (recursive) {
                for await (let child of recurseIntoComponent(node, componentInstanceChildrenSeen)) {
                    nodesToProcess.push({ node: child, fromRecursion: true });
                }
            }
        }
    }
    // Process nodes concurrently with semaphore limiting concurrency
    const processingPromises = nodesToProcess.map(async ({ node }) => {
        await semaphore.acquire();
        try {
            await handleNode(node);
        }
        finally {
            semaphore.release();
        }
    });
    // Wait for all nodes to be processed
    await Promise.all(processingPromises);
    console.timeEnd(timeId);
    return tree;
}
export async function discardFramerChanges({ previousTree: previousTree, }) {
    // Check permissions before proceeding
    checkPermissions('Node.setAttributes', 'TextNode.setText');
    const allNodes = bfsFramerLayersTree(previousTree).filter((x) => x?.nodeId);
    const promises = allNodes.map(async (oldNodeObj) => {
        const { nodeId, content: oldContent, attributes } = oldNodeObj;
        if (!oldContent || !nodeId) {
            console.log('no old content or node id found');
            return Promise.resolve();
        }
        let node = await framer.getNode(nodeId);
        if (isTextNode(node)) {
            return await node.setText(oldContent);
        }
        await applyAttributes(node, attributes).catch((e) => {
            console.error('applyAttributes', e);
            framer.notify(e.message, { variant: 'error' });
        });
    });
    return await Promise.all(promises);
}
// Note: inlineTextStyle attributes are now handled with dot notation
// e.g., inlineTextStyle.fontSize, inlineTextStyle.color, etc.
// Default values for common attributes to reduce XML verbosity
export const ATTRIBUTE_DEFAULTS = {
    opacity: 1,
    visible: true,
    locked: false,
    rotation: 0,
    position: 'relative',
    // Layout defaults
    gap: '0px',
    padding: '0px',
    stackWrap: false,
    // Grid item defaults
    gridFillWidth: true,
    gridFillHeight: true,
    // width: '1fr',
    // height: 'fit-content',
};
async function getNodeAttributesForXml(node, visitedComponents) {
    let attributes = {};
    // Helper to add attribute only if it differs from default
    const addAttribute = (key, value) => {
        if (value !== undefined && value !== null) {
            // Check if this attribute has a default value
            const defaultValue = ATTRIBUTE_DEFAULTS[key];
            // Only add if value differs from default
            if (defaultValue === undefined || value !== defaultValue) {
                attributes[key] = value;
            }
        }
    };
    // Common attributes (DrawableNode)
    if (supportsOpacity(node)) {
        addAttribute('opacity', node.opacity);
    }
    if (supportsVisible(node)) {
        addAttribute('visible', node.visible);
    }
    if (supportsLocked(node)) {
        addAttribute('locked', node.locked);
    }
    // if (supportsName(node)) {
    //     addAttribute('name', node.name)
    // }
    // Position attributes
    if (supportsPosition(node)) {
        addAttribute('position', node.position);
    }
    // Size attributes
    if (supportsSize(node)) {
        addAttribute('width', node.width);
        addAttribute('height', node.height);
    }
    // Rotation
    if (supportsRotation(node)) {
        addAttribute('rotation', node.rotation);
    }
    // Pins (positioning constraints)
    if (supportsPins(node)) {
        if (node.top !== undefined)
            addAttribute('top', node.top);
        if (node.right !== undefined)
            addAttribute('right', node.right);
        if (node.bottom !== undefined)
            addAttribute('bottom', node.bottom);
        if (node.left !== undefined)
            addAttribute('left', node.left);
        if (node.centerX !== undefined)
            addAttribute('centerX', node.centerX);
        if (node.centerY !== undefined)
            addAttribute('centerY', node.centerY);
    }
    // Size constraints
    if (supportsSizeConstraints(node)) {
        if (node.minWidth !== undefined)
            addAttribute('minWidth', node.minWidth);
        if (node.maxWidth !== undefined)
            addAttribute('maxWidth', node.maxWidth);
        if (node.minHeight !== undefined)
            addAttribute('minHeight', node.minHeight);
        if (node.maxHeight !== undefined)
            addAttribute('maxHeight', node.maxHeight);
    }
    // Aspect ratio
    if (supportsAspectRatio(node)) {
        addAttribute('aspectRatio', node.aspectRatio);
    }
    // Link attributes
    if (supportsLink(node)) {
        addAttribute('link', node.link);
        addAttribute('linkOpenInNewTab', node.linkOpenInNewTab);
    }
    // Frame-specific attributes
    if (supportsBackgroundColor(node) && node.backgroundColor) {
        // Check if it's a ColorStyle or a plain color string
        if (typeof node.backgroundColor === 'string') {
            addAttribute('backgroundColor', node.backgroundColor);
        }
        else {
            // It's a ColorStyle, store the path
            addAttribute('backgroundColor', node.backgroundColor.path);
        }
    }
    if (supportsBorderRadius(node)) {
        addAttribute('borderRadius', node.borderRadius);
    }
    if (supportsImageRendering(node)) {
        addAttribute('imageRendering', node.imageRendering);
    }
    if (supportsBackgroundImage(node) && node.backgroundImage) {
        // Store the image URL
        addAttribute('backgroundImage', node.backgroundImage.url);
    }
    // Font attributes (for TextNode)
    if (supportsFont(node) && node.font) {
        // Store only the font ID/selector
        addAttribute('font', node.font.selector);
    }
    // Inline text style handling - always a reference to a TextStyle
    if (supportsInlineTextStyle(node) && node.inlineTextStyle) {
        // Store the path to the text style for easy lookup
        addAttribute('inlineTextStyle', node.inlineTextStyle.path);
    }
    // SVG-specific attributes
    if (supportsSVG(node) && node.svg) {
        addAttribute('svg', node.svg);
    }
    // Border attributes
    if (supportsBorder(node) && node.border) {
        const borderColor = typeof node.border.color === 'string'
            ? node.border.color
            : node.border.color.path;
        addAttribute('borderWidth', node.border.width);
        addAttribute('borderStyle', node.border.style);
        addAttribute('borderColor', borderColor);
    }
    // Z-Index attribute
    if (supportsZIndex(node) && node.zIndex != null) {
        addAttribute('zIndex', node.zIndex);
    }
    // Overflow attributes
    if (supportsOverflow(node)) {
        if (node.overflow != null)
            addAttribute('overflow', node.overflow);
        if (node.overflowX != null)
            addAttribute('overflowX', node.overflowX);
        if (node.overflowY != null)
            addAttribute('overflowY', node.overflowY);
    }
    // Text truncation (line clamp)
    if (supportsTextTruncation(node) && node.textTruncation != null) {
        addAttribute('textTruncation', node.textTruncation);
    }
    // Layout attributes (Frame nodes only)
    if (supportsLayout(node)) {
        // Layout type
        addAttribute('layout', node.layout);
        // Common layout attributes
        addAttribute('gap', node.gap);
        addAttribute('padding', node.padding);
        // Stack-specific attributes
        if (node.layout === 'stack') {
            addAttribute('stackDirection', node.stackDirection);
            addAttribute('stackDistribution', node.stackDistribution);
            addAttribute('stackAlignment', node.stackAlignment);
            addAttribute('stackWrap', node.stackWrapEnabled);
        }
        // Grid-specific attributes
        if (node.layout === 'grid') {
            addAttribute('gridColumns', node.gridColumnCount);
            addAttribute('gridRows', node.gridRowCount);
            addAttribute('gridAlignment', node.gridAlignment);
            addAttribute('gridColumnWidthType', node.gridColumnWidthType);
            addAttribute('gridColumnWidth', node.gridColumnWidth);
            addAttribute('gridColumnMinWidth', node.gridColumnMinWidth);
            addAttribute('gridRowHeightType', node.gridRowHeightType);
            addAttribute('gridRowHeight', node.gridRowHeight);
        }
    }
    // Grid item attributes (for children of grid containers)
    // Check if parent is a grid container
    if ('gridItemFillCellWidth' in node) {
        addAttribute('gridFillWidth', node.gridItemFillCellWidth);
        addAttribute('gridFillHeight', node.gridItemFillCellHeight);
        addAttribute('gridAlignX', node.gridItemHorizontalAlignment);
        addAttribute('gridAlignY', node.gridItemVerticalAlignment);
        addAttribute('gridColumnSpan', node.gridItemColumnSpan);
        addAttribute('gridRowSpan', node.gridItemRowSpan);
    }
    // Create base comments object
    let attrComments = {
        inlineTextStyle: 'project text style path, always starts with /',
        backgroundImage: 'background image URL, if you pass a new image url, the image will be uploaded to Framer',
        backgroundColor: 'background color string or project color style path (if starts with /)',
    };
    // Component instance specific handling
    if (isComponentInstanceNode(node)) {
        // Add componentId attribute
        const componentId = getInstanceComponentId(node);
        if (componentId) {
            addAttribute('componentId', componentId);
            attrComments.componentId = 'the component id this instance uses';
        }
        if (!visitedComponents?.has(componentId || node.id)) {
            if (!node.insertURL) {
                console.log(`no node.insertURL for component instance ${node.name}`);
            }
            const { comments: controlComments } = await getComponentPropertyControls(node.insertURL || undefined);
            if (controlComments) {
                Object.assign(attrComments, controlComments);
                if (visitedComponents && componentId) {
                    visitedComponents.add(componentId);
                }
            }
        }
        // Add all controls as top-level attributes
        if (node.controls) {
            for (const [key, value] of Object.entries(node.controls)) {
                addAttribute(key, value);
            }
        }
    }
    attributes = serializeAttributesForXml(attributes);
    return {
        attributes,
        attrControlsComments: attrComments,
    };
}
Object.assign(globalThis, {
    getNodeAttributesForXml,
    supportsBackgroundColor,
    getAttributesForSelectedNodes: async () => {
        const selectedNodes = await framer.getSelection();
        if (!selectedNodes || !selectedNodes.length) {
            console.log('no nodes selected');
            return;
        }
        const attributesList = [];
        for (const node of selectedNodes) {
            const { attributes: nodeAttrs, attrControlsComments } = await getNodeAttributesForXml(node);
            console.log(node.id, node['name'], JSON.stringify(nodeAttrs, null, 2));
            console.log(JSON.stringify(attrControlsComments, null, 2));
            attributesList.push(nodeAttrs);
        }
        return attributesList;
    },
});
function encodeAttributeValue(value) {
    if (typeof value === 'string') {
        return value;
    }
    return JSON.stringify(value);
}
function isPlainObject(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
}
export function serializeAttributesForXml(attributes) {
    if (!attributes) {
        return {};
    }
    const result = {};
    for (const [key, value] of Object.entries(attributes)) {
        if (value === undefined) {
            continue;
        }
        if (value &&
            typeof value === 'object' &&
            !Array.isArray(value) &&
            !isPlainObject(value)) {
            console.log('skipping non-plain object value for attribute', key, value);
            continue;
        }
        try {
            result[key] = encodeAttributeValue(value);
        }
        catch {
            console.log('skipping non-serializable value for attribute', key);
        }
    }
    return result;
}
function decodeAttributeValueAsJson(value) {
    try {
        return JSON.parse(value);
    }
    catch {
        return value;
    }
}
function onlyChangedKeys(oldObj, newObj) {
    const changes = {};
    for (const [key, newValue] of Object.entries(newObj)) {
        const oldValue = oldObj[key];
        if (JSON.stringify(oldValue) !== JSON.stringify(newValue)) {
            changes[key] = newValue;
        }
    }
    return changes;
}
export async function applyAttributes(node, _attributes) {
    if (!node || !_attributes || !Object.keys(_attributes).length) {
        return;
    }
    // Check permissions before proceeding
    checkPermissions('Node.setAttributes');
    // Decode all attribute values
    const decodedAttrs = {};
    for (const [key, value] of Object.entries(_attributes)) {
        decodedAttrs[key] = decodeAttributeValueAsJson(value);
    }
    // Treat undefined as "not provided" and do not forward it
    for (const [key, value] of Object.entries(decodedAttrs)) {
        if (value === undefined) {
            delete decodedAttrs[key];
        }
    }
    // Handle font selector if present
    if (decodedAttrs.font && supportsFont(node)) {
        const fontSelector = decodedAttrs.font;
        const fonts = await framer.getFonts();
        const font = fonts.find((f) => f.selector === fontSelector);
        if (!font) {
            throw new Error(`Font with selector "${fontSelector}" not found`);
        }
        decodedAttrs.font = font;
    }
    // Handle style references that start with /
    // These could be TextStyle or ColorStyle paths
    for (const [key, value] of Object.entries(decodedAttrs)) {
        if (typeof value === 'string' && value.startsWith('/')) {
            if (key === 'inlineTextStyle') {
                // It's a TextStyle path
                const textStyles = await framer.getTextStyles();
                const textStyle = textStyles.find((ts) => ts.path === value);
                if (!textStyle) {
                    throw new Error(`TextStyle with path "${value}" not found`);
                }
                decodedAttrs[key] = textStyle;
            }
            else if (key === 'backgroundColor') {
                // It's a ColorStyle path
                const colorStyles = await framer.getColorStyles();
                const colorStyle = colorStyles.find((cs) => cs.path === value);
                if (!colorStyle) {
                    throw new Error(`ColorStyle with path "${value}" not found`);
                }
                decodedAttrs[key] = colorStyle;
            }
        }
    }
    const hasBorderWidth = Object.prototype.hasOwnProperty.call(decodedAttrs, 'borderWidth');
    const hasBorderStyle = Object.prototype.hasOwnProperty.call(decodedAttrs, 'borderStyle');
    const hasBorderColor = Object.prototype.hasOwnProperty.call(decodedAttrs, 'borderColor');
    if (supportsBorder(node) && (hasBorderWidth || hasBorderStyle || hasBorderColor)) {
        if (!(hasBorderWidth && hasBorderStyle && hasBorderColor)) {
            throw new Error('borderWidth, borderStyle, and borderColor must be provided together');
        }
        const borderWidth = decodedAttrs.borderWidth;
        const borderStyle = decodedAttrs.borderStyle;
        const borderColor = decodedAttrs.borderColor;
        // Explicit clear semantics: all null means remove border
        if (borderWidth === null && borderStyle === null && borderColor === null) {
            decodedAttrs.border = null;
            delete decodedAttrs.borderWidth;
            delete decodedAttrs.borderStyle;
            delete decodedAttrs.borderColor;
        }
        else {
            if (typeof borderWidth !== 'string' ||
                typeof borderStyle !== 'string' ||
                typeof borderColor !== 'string') {
                throw new Error('borderWidth, borderStyle, and borderColor must all be strings, or all null to clear border');
            }
            let resolvedBorderColor = borderColor;
            if (borderColor.startsWith('/')) {
                const colorStyles = await framer.getColorStyles();
                const colorStyle = colorStyles.find((cs) => cs.path === borderColor);
                if (!colorStyle) {
                    throw new Error(`ColorStyle with path "${borderColor}" not found`);
                }
                resolvedBorderColor = colorStyle;
            }
            decodedAttrs.border = {
                width: borderWidth,
                style: borderStyle,
                color: resolvedBorderColor,
            };
            delete decodedAttrs.borderWidth;
            delete decodedAttrs.borderStyle;
            delete decodedAttrs.borderColor;
        }
    }
    // Handle backgroundImage URL
    if (decodedAttrs.backgroundImage &&
        typeof decodedAttrs.backgroundImage === 'string' &&
        supportsBackgroundImage(node)) {
        const imageUrl = decodedAttrs.backgroundImage;
        // Check if the image needs to be uploaded (not already on framerusercontent.com)
        if (!imageUrl.includes('framerusercontent.com')) {
            // Check cache first
            let imageAsset = uploadedImagesCache.get(imageUrl);
            if (!imageAsset) {
                try {
                    // Upload the image and get the ImageAsset
                    imageAsset = await framer.uploadImage({
                        image: imageUrl,
                        name: 'background-image',
                    });
                }
                catch (error) {
                    throw new Error(`Failed to upload background image from URL "${imageUrl}": ${error}`);
                }
            }
            uploadedImagesCache.set(imageUrl, imageAsset);
            decodedAttrs.backgroundImage = imageAsset;
        }
        // If it's already on framerusercontent.com, leave it as-is for Framer to handle
    }
    // Map XML attribute names to Framer API names for layout attributes
    const attributeMapping = {
        'stackWrap': 'stackWrapEnabled',
        'gridColumns': 'gridColumnCount',
        'gridRows': 'gridRowCount',
        'gridFillWidth': 'gridItemFillCellWidth',
        'gridFillHeight': 'gridItemFillCellHeight',
        'gridAlignX': 'gridItemHorizontalAlignment',
        'gridAlignY': 'gridItemVerticalAlignment',
    };
    // Apply the mapping
    for (const [xmlName, framerName] of Object.entries(attributeMapping)) {
        if (xmlName in decodedAttrs) {
            decodedAttrs[framerName] = decodedAttrs[xmlName];
            delete decodedAttrs[xmlName];
        }
    }
    // For component instances, separate controls from other attributes
    if (isComponentInstanceNode(node)) {
        // Component instances only have these standard node attributes
        const standardNodeAttrs = [
            'opacity',
            'visible',
            'locked',
            'position',
            'width',
            'height',
            'rotation',
            'componentId', // componentId cannot be updated
        ];
        const nodeAttrs = {};
        const controlsAttrs = {};
        for (const [key, value] of Object.entries(decodedAttrs)) {
            if (standardNodeAttrs.includes(key)) {
                nodeAttrs[key] = value;
            }
            else {
                // It's a control property
                controlsAttrs[key] = value;
            }
        }
        // Apply node-level attributes
        const changedNodeAttrs = onlyChangedKeys(node, nodeAttrs);
        if (Object.keys(changedNodeAttrs).length > 0) {
            console.log(`Setting attributes on ${node.__class} (${node.id}):`, changedNodeAttrs);
            await node.setAttributes(changedNodeAttrs);
        }
        // Apply controls
        if (Object.keys(controlsAttrs).length > 0) {
            const changedControls = onlyChangedKeys(node.controls || {}, controlsAttrs);
            if (Object.keys(changedControls).length > 0) {
                const controlsUpdate = {
                    controls: { ...node.controls, ...changedControls },
                };
                console.log(`Setting controls on ${node.__class} (${node.id}):`, controlsUpdate);
                await node.setAttributes(controlsUpdate);
            }
        }
    }
    else {
        // For non-component instance nodes, apply all attributes directly
        const changedNodeAttrs = onlyChangedKeys(node, decodedAttrs);
        if (Object.keys(changedNodeAttrs).length > 0) {
            await node.setAttributes(changedNodeAttrs);
        }
    }
}
// Helper functions that need to be in this package
async function collectGenerator(gen) {
    const result = [];
    for await (const item of gen) {
        if (!item) {
            continue;
        }
        result.push(item);
    }
    return result;
}
export async function getParentNodesArray(node) {
    if (typeof node === 'string') {
        node = await framer.getNode(node);
    }
    if (!node) {
        return [];
    }
    let parent = await node.getParent();
    if (!parent) {
        console.log('no parent found', node.id);
        return [];
    }
    const parentsArray = [];
    const seen = new Set();
    while (parent) {
        if (seen.has(parent.id)) {
            break;
        }
        parentsArray.push(parent);
        seen.add(parent.id);
        const newParent = await parent.getParent();
        if (!newParent) {
            // console.log('no parent found, last one was', parent)
            break;
        }
        parent = newParent;
    }
    return parentsArray;
}
//# sourceMappingURL=framer.js.map