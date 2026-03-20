// MCP Tool Handlers
//
// This file contains all MCP tool handler logic extracted from App.tsx.
// Moved here to allow sharing between browser plugin and server-api modes.
import { framer, isTextNode, isComponentNode, isColorStyle, isImageAsset, isFileAsset, } from '#framer-client';
import dedent from 'string-dedent';
import { createPatch } from 'diff';
import { createSpiceflowClient } from 'spiceflow/client';
import { framerLayersTreeToXml, extractObjectsFromXmlContent, TEMP_NODE_ID_PREFIX, } from './xml.js';
import { getFramerTree, applyAttributes, getComponentPropertyControls } from './framer.js';
import { processReactExportData } from './react-export.js';
import { propControlsToTypedocComments, componentCamelCase } from 'unframer';
import { codeComponentsResourceUri, mcpTools } from './schema.js';
export { mcpTools };
const PUBLIC_URL = process.env.PUBLIC_URL || 'https://unframer.co';
const MCP_SESSION_ID_STORAGE_KEY = 'framer-mcp-session-id';
const pluginApiClient = createSpiceflowClient(PUBLIC_URL, {
    async onRequest() {
        const sessionKey = typeof localStorage === 'undefined'
            ? ''
            : localStorage.getItem(MCP_SESSION_ID_STORAGE_KEY) || '';
        return {
            headers: {
                sessionKey,
            },
        };
    },
});
// Field type documentation for CMS collections
const CMS_FIELD_TYPE_COMMENTS = {
    string: 'JSON string - Plain text value (e.g., "Hello World")',
    number: 'JSON number - Numeric value without quotes (e.g., 42 or 3.14)',
    boolean: 'JSON boolean - true or false without quotes',
    color: 'JSON string - Hex color (e.g., "#FF0000") or color style path (e.g., "/Primary")',
    date: 'JSON string - ISO 8601 date (e.g., "2025-08-20T10:00:00.000Z")',
    image: 'JSON string or null - Image URL (e.g., "https://example.com/image.jpg")',
    link: 'JSON string or null - URL (e.g., "https://example.com" or "/page-path")',
    formattedText: 'JSON string - Markdown or HTML. If you omit contentType, Markdown is assumed unless the value looks like HTML (starts with <).',
    file: 'JSON string or null - File URL (e.g., "https://example.com/file.pdf")',
    enum: 'JSON string - One of the predefined enum case IDs',
    collectionReference: 'JSON string or null - ID of an item from the referenced collection',
    multiCollectionReference: 'JSON array - Array of item ID strings (e.g., ["id1", "id2"])',
    array: 'JSON array - Array of objects with nested field data',
};
// Helper function to clean all field data in an object
function cleanFieldData(fieldData) {
    return Object.fromEntries(Object.entries(fieldData).map(([fieldId, fieldValue]) => [
        fieldId,
        cleanCMSFieldValue(fieldValue),
    ]));
}
function isRecord(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
function isFieldDataEntryLike(value) {
    if (!isRecord(value)) {
        return false;
    }
    const hasValue = Object.prototype.hasOwnProperty.call(value, 'value');
    return typeof value.type === 'string' && hasValue;
}
export function parseIncomingFieldData(fieldData) {
    if (fieldData === undefined) {
        return {};
    }
    if (!isRecord(fieldData)) {
        throw new Error('Invalid fieldData. Expected an object where each key is a field ID and each value is a field entry object.');
    }
    return Object.fromEntries(Object.entries(fieldData).map(([fieldId, fieldValue]) => {
        if (!isFieldDataEntryLike(fieldValue)) {
            throw new Error(`Invalid fieldData["${fieldId}"]. Expected an object with string "type" and a "value" key.`);
        }
        return [fieldId, fieldValue];
    }));
}
// Helper function to normalize incoming user fieldData
// Adds contentType: 'markdown' for formattedText fields from MCP input
function normalizeIncomingFieldData(fieldData) {
    return Object.fromEntries(Object.entries(fieldData).map(([fieldId, fieldValue]) => {
        // If it's a formattedText field, add contentType: 'markdown'
        const isFormattedTextField = isRecord(fieldValue) && fieldValue.type === 'formattedText';
        if (isFormattedTextField && !fieldValue.contentType) {
            const value = fieldValue.value;
            const valueString = typeof value === 'string' ? value.trim() : '';
            const looksLikeHtml = valueString.startsWith('<');
            // Heuristic: allow passing raw HTML without being interpreted as markdown.
            // If it looks like HTML, default to html; otherwise default to markdown.
            return [
                fieldId,
                {
                    ...fieldValue,
                    contentType: looksLikeHtml ? 'html' : 'markdown',
                },
            ];
        }
        return [fieldId, fieldValue];
    }));
}
// Type-safe utility function to clean field values for API compatibility
// Converts FieldDataEntry (from existing data) to FieldDataEntryInput (for API)
function cleanCMSFieldValue(fieldValue) {
    // Handle field types that need special cleaning
    switch (fieldValue.type) {
        case 'image':
            // ImageAsset -> string | null
            return {
                type: fieldValue.type,
                value: isImageAsset(fieldValue.value)
                    ? fieldValue.value.url
                    : (fieldValue.value ?? null),
            };
        case 'file':
            // FileAsset -> string | null
            return {
                type: fieldValue.type,
                value: isFileAsset(fieldValue.value)
                    ? fieldValue.value.url
                    : (fieldValue.value ?? null),
            };
        case 'color':
            // ColorStyle | string -> string | null
            // If it's a ColorStyle object, extract the light value
            if (isColorStyle(fieldValue.value)) {
                return {
                    type: fieldValue.type,
                    value: fieldValue.value.light,
                };
            }
            // It's already a string
            return {
                type: fieldValue.type,
                value: fieldValue.value,
            };
        case 'array':
            // ArrayItem[] -> ArrayItemInput[]
            // Array items only support image fields
            return {
                type: fieldValue.type,
                value: fieldValue.value.map((item) => ({
                    id: item.id,
                    fieldData: Object.fromEntries(Object.entries(item.fieldData).map(([key, imgField]) => {
                        const imageField = imgField;
                        return [
                            key,
                            {
                                type: 'image',
                                value: isImageAsset(imageField.value)
                                    ? imageField.value.url
                                    : null,
                            },
                        ];
                    })),
                })),
            };
        case 'formattedText':
            // FormattedText has valueByLocale which we can drop for input
            // Don't change contentType of existing data - preserve its original format
            return {
                type: fieldValue.type,
                value: fieldValue.value,
            };
        case 'string':
            // String has valueByLocale which we can drop for input
            return {
                type: fieldValue.type,
                value: fieldValue.value,
            };
        case 'link':
            // Link has valueByLocale which we can drop for input
            return {
                type: fieldValue.type,
                value: fieldValue.value ?? null,
            };
        default:
            // For other field types (boolean, number, date, enum, collectionReference, multiCollectionReference)
            // they should be compatible as-is
            return fieldValue;
    }
}
// Helper function to strip version hash from insert URLs
function stripVersionFromUrl(url) {
    if (!url)
        return url;
    // Remove @ and everything after it
    const atIndex = url.indexOf('@');
    return atIndex !== -1 ? url.substring(0, atIndex) : url;
}
// Helper function to get XML for a node
async function getNodeXml(nodeId, maxCharacters = 15000) {
    const node = await framer.getNode(nodeId);
    if (!node) {
        return null;
    }
    const tree = await getFramerTree({
        rootNodes: [node],
        recursive: false,
    });
    const xml = framerLayersTreeToXml(tree, {
        shouldAddNodeIdAlways: true,
        maxCharacters,
    });
    return { xml, isReplica: node.isReplica };
}
// Helper function to detect nodes added during an operation
async function getAddedNodesDuring(callback) {
    // Clear selection first
    await framer.setSelection([]);
    // Get canvas root and its children before operation
    const canvasRoot = await framer.getCanvasRoot();
    const childrenBefore = await canvasRoot.getChildren();
    const idsBefore = new Set(childrenBefore.map((child) => child.id));
    // Execute the callback
    await callback();
    // Get children after operation
    const childrenAfter = await canvasRoot.getChildren();
    // Find new nodes (those that weren't in the before set)
    const newNodes = childrenAfter.filter((child) => !idsBefore.has(child.id));
    return newNodes;
}
// Helper function to create a new Framer node based on its type
async function createFramerNode({ extractedNode, parentId, }) {
    const { nodeType, attributes, newContent } = extractedNode;
    switch (nodeType) {
        case 'Frame': {
            const newFrame = await framer.createFrameNode(attributes, parentId);
            return newFrame ? { id: newFrame.id, type: 'Frame' } : null;
        }
        case 'Text': {
            // Text nodes need special handling
            const text = newContent || '';
            const newNodes = await getAddedNodesDuring(async () => {
                await framer.addText(text, { tag: 'p' });
            });
            const newNodeId = newNodes[0]?.id;
            if (newNodeId) {
                // Move to correct parent
                await framer.setParent(newNodeId, parentId);
                // Apply attributes if any
                if (Object.keys(attributes).length > 0) {
                    const node = await framer.getNode(newNodeId);
                    await applyAttributes(node, attributes);
                }
                return { id: newNodeId, type: 'Text' };
            }
            return null;
        }
        case 'SVG': {
            const svg = attributes.svg || '<svg></svg>';
            const name = attributes.name;
            const newNodes = await getAddedNodesDuring(async () => {
                await framer.addSVG({ svg, name });
            });
            const newNodeId = newNodes[0]?.id;
            if (newNodeId) {
                // Move to correct parent
                await framer.setParent(newNodeId, parentId);
                // Apply remaining attributes
                const remainingAttrs = { ...attributes };
                delete remainingAttrs.svg;
                delete remainingAttrs.name;
                if (Object.keys(remainingAttrs).length > 0) {
                    const node = await framer.getNode(newNodeId);
                    await applyAttributes(node, remainingAttrs);
                }
                return { id: newNodeId, type: 'SVG' };
            }
            return null;
        }
        case 'ComponentInstance': {
            let insertUrl = attributes.insertUrl;
            // If no insertUrl, try to find it from componentId
            if (!insertUrl && attributes.componentId) {
                // First try to get it as a component node
                const node = await framer.getNode(attributes.componentId);
                if (node && isComponentNode(node) && node.insertURL) {
                    insertUrl = node.insertURL;
                }
                // If still not found, try to get it as a code file
                if (!insertUrl) {
                    const codeFiles = await framer.getCodeFiles();
                    const codeFile = codeFiles.find((f) => f.id === attributes.componentId);
                    if (codeFile) {
                        // Check if the default export is a component
                        const defaultExport = codeFile.exports.find((e) => e.name === 'default');
                        if (defaultExport &&
                            defaultExport.type === 'component') {
                            insertUrl = defaultExport.insertURL;
                        }
                    }
                }
            }
            if (!insertUrl) {
                throw new Error('Cannot create component instance without insertUrl or valid componentId attributes');
            }
            // Check if detached mode is requested via query parameter
            const url = new URL(insertUrl, 'https://framer.com');
            const isDetached = url.searchParams.get('detached') === 'true';
            // Remove query parameters from insertUrl
            const cleanInsertUrl = insertUrl.split('?')[0];
            // Prepare attributes without insertUrl/componentId
            const instanceAttributes = { ...attributes };
            delete instanceAttributes.insertUrl;
            delete instanceAttributes.componentId;
            let nodeId;
            let nodeType;
            if (isDetached) {
                // Use addDetachedComponentLayers for detached mode
                const detachedFrame = await framer.addDetachedComponentLayers({
                    url: cleanInsertUrl,
                    layout: true,
                    attributes: instanceAttributes,
                });
                if (!detachedFrame?.id) {
                    throw new Error('Failed to create detached component layers');
                }
                nodeId = detachedFrame.id;
                nodeType = 'Frame'; // addDetachedComponentLayers returns a FrameNode
            }
            else {
                // Use addComponentInstance for linked mode
                const instance = await framer.addComponentInstance({
                    url: cleanInsertUrl,
                    attributes: instanceAttributes,
                });
                if (!instance?.id) {
                    throw new Error('Failed to create component instance');
                }
                nodeId = instance.id;
                nodeType = 'ComponentInstance';
            }
            // Move to correct parent
            await framer.setParent(nodeId, parentId);
            return { id: nodeId, type: nodeType };
        }
        default:
            return null;
    }
}
// Initialize websocket connection (will be moved to authenticated component)
let cleanup;
// Track current websocket ID to prevent duplicate connections for same user
let currentWebsocketId;
// Helper function to check permissions and return error message if not allowed
function checkPermissions(...methods) {
    // Cast to the expected tuple type for isAllowedTo
    const [first, ...rest] = methods;
    if (!first)
        return null;
    if (!framer.isAllowedTo(first, ...rest)) {
        const methodList = methods.length > 1
            ? `Your Framer user account lacks the following permissions for this project: ${methods.join(', ')}`
            : `Your Framer user account lacks the "${methods[0]}" permission for this project.`;
        return `Permission denied. ${methodList}\n\nPlease ask the project owner to grant you the necessary permissions.`;
    }
    return null;
}
// Websocket handler function
export async function mcpToolHandler({ input, type, }) {
    switch (type) {
        case 'getNodeXml': {
            const { nodeId } = input;
            // Check if this looks like a style path
            if (nodeId.startsWith('/')) {
                return `Cannot use getNodeXml with style paths. Style data is displayed in 'getProjectXml' under the <ColorStyles> and <TextStyles> sections. Use that tool to view all styles.`;
            }
            const isCodeFile = await framer.getCodeFile(nodeId);
            if (isCodeFile) {
                return `Cannot use getNodeXml with code files. Use 'readCodeFile' tool instead to read code file with ID: ${nodeId}`;
            }
            const result = await getNodeXml(nodeId);
            if (!result) {
                return `Node with ID ${nodeId} not found.`;
            }
            let response = `Node xml:\n${result.xml}`;
            if (result.isReplica) {
                response = `WARNING: This is a replica node (variant). It's recommended to update the original component instead to maintain consistency. Only update a few attributes on variants. These attributes will no longer inherit the primary variant values.\n\n${response}`;
            }
            return response;
        }
        case 'getSelectedNodesXml': {
            const selectedNodes = await framer.getSelection();
            if (!selectedNodes || selectedNodes.length === 0) {
                return 'No nodes are currently selected.';
            }
            const tree = await getFramerTree({
                rootNodes: selectedNodes,
                recursive: false,
            });
            const xml = framerLayersTreeToXml(tree, {
                shouldAddNodeIdAlways: true,
            });
            // Check if any selected nodes are replicas
            const replicaCount = selectedNodes.filter((node) => node.isReplica).length;
            let response = `Selected nodes XML:\n${xml}`;
            if (replicaCount > 0) {
                const warning = replicaCount === 1
                    ? "WARNING: One of the selected nodes is a replica (variant). It's recommended to update the original component instead."
                    : `WARNING: ${replicaCount} of the selected nodes are replicas (variants). It's recommended to update the original components instead.`;
                response = `${warning}\n\n${response}`;
            }
            return response;
        }
        case 'getProjectXml': {
            const pages = await framer.getNodesWithType('WebPageNode');
            const designPages = await framer.getNodesWithType('DesignPageNode');
            const components = await framer.getNodesWithType('ComponentNode');
            const codeFiles = await framer.getCodeFiles();
            const colorStyles = await framer.getColorStyles();
            const textStyles = await framer.getTextStyles();
            // Separate code files by export type
            const codeComponents = codeFiles.filter((file) => file.exports.some((exp) => exp.type === 'component'));
            const codeOverrides = codeFiles.filter((file) => file.exports.some((exp) => exp.type === 'override'));
            const tree = [
                {
                    name: 'Project',
                    comment: 'Root node containing all pages, components, and code files in the project',
                    children: [
                        {
                            name: 'Pages',
                            comment: 'Web pages that are published to the website. Use getNodeXml with a page nodeId to see its contents',
                            children: pages.map((page) => ({
                                name: 'Page',
                                id: page.id,
                                attributes: {
                                    nodeId: page.id,
                                    path: page.path || '',
                                },
                                children: [],
                            })),
                        },
                        {
                            name: 'DesignPages',
                            comment: 'Design pages for components, prototypes, and explorations. Use createPage with type="design" to add new ones',
                            children: designPages.map((page) => ({
                                name: 'DesignPage',
                                id: page.id,
                                attributes: {
                                    nodeId: page.id,
                                    name: page.name || '',
                                },
                                children: [],
                            })),
                        },
                        {
                            name: 'Components',
                            comment: 'Reusable components. Use getNodeXml with a component nodeId to see its structure',
                            children: components.map((component) => ({
                                name: 'Component',
                                id: component.id,
                                attributes: {
                                    nodeId: component.id,
                                    name: component.componentName || '',
                                },
                                children: [],
                            })),
                        },
                        {
                            name: 'CodeComponents',
                            comment: 'Code components written in React/TypeScript. Use readCodeFile to see the code',
                            children: codeComponents.map((file) => {
                                const componentExport = file.exports.find((exp) => exp.type === 'component');
                                return {
                                    name: 'CodeComponent',
                                    id: file.id,
                                    attributes: {
                                        codeFileId: file.id,
                                        path: file.path,
                                    },
                                    children: [],
                                };
                            }),
                        },
                        {
                            name: 'CodeOverrides',
                            comment: 'Code override files that modify component behavior. Use readCodeFile to see the code',
                            children: codeOverrides.map((file) => ({
                                name: 'CodeOverride',
                                id: file.id,
                                attributes: {
                                    codeFileId: file.id,
                                    path: file.path,
                                },
                                children: [],
                            })),
                        },
                        {
                            name: 'ColorStyles',
                            comment: 'Project color styles. Reference these in XML attributes like backgroundColor="/StylePath"',
                            children: colorStyles.map((style) => ({
                                name: 'ColorStyle',
                                attributes: {
                                    path: style.path,
                                    light: style.light,
                                    dark: style.dark || '',
                                },
                                children: [],
                            })),
                        },
                        {
                            name: 'TextStyles',
                            comment: 'Project text styles. Reference these in XML attributes like inlineTextStyle="/StylePath"',
                            children: textStyles.map((style) => ({
                                name: 'TextStyle',
                                attributes: {
                                    path: style.path,
                                    font: style.font?.selector || '',
                                    fontSize: style.fontSize || '',
                                    lineHeight: style.lineHeight || '',
                                    letterSpacing: style.letterSpacing || '',
                                    paragraphSpacing: String(style.paragraphSpacing || 0),
                                    transform: style.transform || 'none',
                                    alignment: style.alignment || 'left',
                                    decoration: style.decoration || 'none',
                                    balance: String(style.balance || false),
                                    tag: style.tag || 'p',
                                },
                                children: [],
                            })),
                        },
                    ],
                },
            ];
            const xml = framerLayersTreeToXml(tree, {
                shouldAddNodeIdAlways: true,
            });
            // Get current root node (focused page, design page, or component)
            const rootNode = await framer.getCanvasRoot();
            const rootNodeType = (() => {
                if (rootNode.__class === 'WebPageNode')
                    return 'page';
                if (rootNode.__class === 'DesignPageNode')
                    return 'design page';
                return 'component';
            })();
            const rootNodeInfo = rootNode
                ? `The currently focused ${rootNodeType} ID is: \`${rootNode.id}\`, call getNodeXml with this ID to get more specific XML of the current focused ${rootNodeType} layers.`
                : 'No page, design page, or component is currently focused';
            // Check if user has permission to modify nodes
            const canModifyNodes = framer.isAllowedTo('Node.setAttributes');
            const permissionMessage = canModifyNodes
                ? ''
                : '\n\nIMPORTANT! You have read-only access to this project. You cannot modify nodes, create new elements. If asked to make modifications, please inform the user that you only have read-only permissions.';
            return dedent `
            # Project structure:

            ${xml}

            ${rootNodeInfo}

            When you create a ComponentInstance via updateXmlForNode, it will be inserted into this focused page or component.

            If you need to create or edit a Framer code file ALWAYS read the MCP resource ${codeComponentsResourceUri} first.${permissionMessage}
            `;
        }
        case 'updateXmlForNode': {
            const { nodeId: rootNodeId, xml, zoomIntoView = true } = input;
            // Check all required permissions at once
            const permissionError = checkPermissions('Node.setAttributes', 'TextNode.setText', 'setParent', 'createFrameNode', 'addText', 'addSVG', 'addComponentInstance');
            if (permissionError)
                return permissionError;
            // Check if this is a code file ID
            const codeFiles = await framer.getCodeFiles();
            const isCodeFile = codeFiles.some((file) => file.id === rootNodeId);
            if (isCodeFile) {
                return `Cannot use updateXmlForNode with code files. Use 'updateCodeFile' tool instead to modify code file with ID: ${rootNodeId}`;
            }
            // Check if this looks like a style path
            if (rootNodeId.startsWith('/')) {
                return `Node ID cannot start with a slash. It should be a valid node ID, not a color style or text path. To update styles use 'manageColorStyle' or 'manageTextStyle' tools.`;
            }
            // Zoom into the node before making changes if requested
            if (zoomIntoView) {
                try {
                    await framer.zoomIntoView(rootNodeId, { maxZoom: 0.9 });
                }
                catch (error) {
                    // Don't fail the entire operation if zooming fails
                    console.warn('Failed to zoom into view:', error);
                }
            }
            // Get the original XML before making changes
            const originalResult = await getNodeXml(rootNodeId, Infinity);
            const originalXml = originalResult?.xml || '';
            // Extract nodes from the provided XML with node creation enabled
            const extractedNodes = extractObjectsFromXmlContent(xml, {
                enableNodeCreation: true,
            });
            const results = [];
            const nodesToReorder = [];
            // Phase 0: Create new nodes (nodes with temp IDs)
            const tempIdToRealId = new Map();
            for (const extractedNode of extractedNodes) {
                // Check if this is a new node (has temp ID)
                if (extractedNode.nodeId.startsWith(TEMP_NODE_ID_PREFIX)) {
                    try {
                        // Resolve parent ID (might be a temp ID that needs mapping)
                        let parentId = extractedNode.parentId || rootNodeId;
                        if (parentId.startsWith(TEMP_NODE_ID_PREFIX)) {
                            parentId =
                                tempIdToRealId.get(parentId) || rootNodeId;
                        }
                        // Create the node based on its type
                        const newNode = await createFramerNode({
                            extractedNode,
                            parentId,
                        });
                        if (newNode) {
                            // Map temp ID to real ID
                            tempIdToRealId.set(extractedNode.nodeId, newNode.id);
                            // Update the extractedNode with real ID for later phases
                            const oldTempId = extractedNode.nodeId;
                            extractedNode.nodeId = newNode.id;
                            // Update parent references for other nodes
                            extractedNodes.forEach((node) => {
                                if (node.parentId === oldTempId) {
                                    node.parentId = newNode.id;
                                }
                                // Update sibling references
                                if (node.beforeNodeId === oldTempId) {
                                    node.beforeNodeId = newNode.id;
                                }
                                if (node.afterNodeId === oldTempId) {
                                    node.afterNodeId = newNode.id;
                                }
                            });
                            // Check if this was a detached component
                            const wasDetached = extractedNode.nodeType === 'ComponentInstance' &&
                                extractedNode.attributes.insertUrl?.includes('?detached=true');
                            if (wasDetached && newNode.type === 'Frame') {
                                results.push(`Created detached component as Frame node ${newNode.id}. IMPORTANT: Call getNodeXml on this node or its parent to inspect the internal structure (Text, Frame, SVG nodes, etc.) that was created from the component definition.`);
                            }
                            else {
                                results.push(`Created ${newNode.type} node ${newNode.id}`);
                            }
                        }
                    }
                    catch (error) {
                        const errorMessage = error instanceof Error
                            ? error.message
                            : 'Unknown error';
                        // Notify user of the error
                        await framer.notify(`Failed to create ${extractedNode.nodeType || 'node'}: ${errorMessage}`, {
                            variant: 'error',
                        });
                        // Rollback all created nodes using tempIdToRealId values
                        for (const nodeId of tempIdToRealId.values()) {
                            try {
                                const node = await framer.getNode(nodeId);
                                if (node) {
                                    await node.remove();
                                }
                            }
                            catch (rollbackError) {
                                console.error(`Failed to rollback node ${nodeId}:`, rollbackError);
                            }
                        }
                        // Throw error to stop execution
                        throw new Error(`Node creation failed: ${errorMessage}`);
                    }
                }
            }
            // Phase 1: Update content, attributes, and move nodes to correct parents
            for (const extractedNode of extractedNodes) {
                // Skip temp nodes that weren't successfully created
                if (extractedNode.nodeId.startsWith(TEMP_NODE_ID_PREFIX)) {
                    continue;
                }
                const targetNodeId = extractedNode.nodeId || rootNodeId;
                try {
                    const node = await framer.getNode(targetNodeId);
                    if (!node) {
                        results.push(`Node with ID ${targetNodeId} not found.`);
                        continue;
                    }
                    // Update text content for text nodes
                    if (extractedNode.newContent && isTextNode(node)) {
                        await node.setText(extractedNode.newContent);
                        results.push(`Updated text for node ${targetNodeId}`);
                    }
                    // Apply attributes
                    if (extractedNode.attributes &&
                        Object.keys(extractedNode.attributes).length > 0) {
                        await applyAttributes(node, extractedNode.attributes);
                        results.push(`Updated attributes for node ${targetNodeId}`);
                    }
                    // Check if parent needs to change
                    if (extractedNode.parentId && node.getParent) {
                        const currentParent = await node.getParent();
                        const currentParentId = currentParent?.id;
                        if (currentParentId !== extractedNode.parentId) {
                            // Move to new parent without specifying position yet
                            await framer.setParent(targetNodeId, extractedNode.parentId);
                            results.push(`Moved node ${targetNodeId} from parent ${currentParentId || 'none'} to ${extractedNode.parentId}`);
                        }
                        // Queue for reordering if sibling info is provided
                        if (extractedNode.beforeNodeId ||
                            extractedNode.afterNodeId) {
                            nodesToReorder.push({
                                nodeId: targetNodeId,
                                parentId: extractedNode.parentId,
                                beforeNodeId: extractedNode.beforeNodeId,
                                afterNodeId: extractedNode.afterNodeId,
                            });
                        }
                    }
                }
                catch (error) {
                    results.push(`Failed to process node ${targetNodeId}: ${error instanceof Error ? error.message : 'Unknown error'}`);
                }
            }
            // Phase 2: Reorder nodes within their parents
            // This must be done in a separate pass to ensure all nodes are in their correct parents first.
            // Otherwise, sibling references (beforeNodeId/afterNodeId) might not be found if they haven't
            // been moved yet, and index calculations would be incorrect during the moving process.
            for (const reorderInfo of nodesToReorder) {
                try {
                    const parent = await framer.getNode(reorderInfo.parentId);
                    if (!parent)
                        continue;
                    const siblings = await parent.getChildren();
                    let targetIndex;
                    if (reorderInfo.beforeNodeId) {
                        // Place after the beforeNode
                        const beforeIndex = siblings.findIndex((s) => s.id === reorderInfo.beforeNodeId);
                        if (beforeIndex !== -1) {
                            targetIndex = beforeIndex + 1;
                        }
                    }
                    else if (reorderInfo.afterNodeId) {
                        // Place before the afterNode
                        const afterIndex = siblings.findIndex((s) => s.id === reorderInfo.afterNodeId);
                        if (afterIndex !== -1) {
                            targetIndex = afterIndex;
                        }
                    }
                    if (targetIndex !== undefined) {
                        // Get current index
                        const currentIndex = siblings.findIndex((s) => s.id === reorderInfo.nodeId);
                        // Only reorder if position needs to change
                        if (currentIndex !== -1 &&
                            currentIndex !== targetIndex) {
                            // When reordering within the same parent (moving a node forward), we need to adjust the target index.
                            // This is because setParent internally removes the node first, then inserts it.
                            // Example: Moving node from index 1 to index 3 in array [A, B, C, D]:
                            // - After removal: [A, C, D] (B is removed)
                            // - Original index 3 is now index 2
                            // - So we need to insert at index 2, not 3
                            // Note: This only applies when reordering within the same parent, not when moving between parents
                            if (currentIndex < targetIndex) {
                                targetIndex -= 1;
                            }
                            await framer.setParent(reorderInfo.nodeId, reorderInfo.parentId, targetIndex);
                            results.push(`Reordered node ${reorderInfo.nodeId} within parent ${reorderInfo.parentId} to index ${targetIndex}`);
                        }
                    }
                }
                catch (error) {
                    results.push(`Failed to reorder node ${reorderInfo.nodeId}: ${error instanceof Error ? error.message : 'Unknown error'}`);
                }
            }
            // Get the updated XML for the primary node
            const updatedResult = await getNodeXml(rootNodeId, Infinity);
            const updatedXml = updatedResult?.xml || '';
            // Check if there were actual changes by comparing XML
            const hasChanges = originalXml.trim() !== updatedXml.trim();
            if (hasChanges && updatedResult) {
                const resultMessage = results.length > 0
                    ? `Successfully updated:\n${results.join('\n')}`
                    : 'Successfully updated';
                // Create a diff patch showing the changes with more context
                const patch = createPatch('node.xml', originalXml, updatedXml, 'Before', 'After', { context: 20 });
                // Add note about disabling zoom if enabled
                const zoomNote = zoomIntoView
                    ? '\n\nNote: Set zoomIntoView=false if you want to use Framer app while MCP is working.'
                    : '';
                return `${resultMessage}\n\nXML Changes:\n${patch}${zoomNote}`;
            }
            const hasErrors = results.some((r) => r.startsWith('Failed '));
            if (hasErrors) {
                return `Encountered errors while updating:\n${results.join('\n')}`;
            }
            return 'No changes were made! Make sure you are not using made up attributes, follow the outlined attributes only.';
        }
        case 'zoomIntoView': {
            const { nodeId } = input;
            const node = await framer.getNode(nodeId);
            if (!node) {
                return `Node with ID ${nodeId} not found.`;
            }
            await framer.zoomIntoView(nodeId, { maxZoom: 0.9 });
            return `Zoomed into view for node ${nodeId}`;
        }
        case 'manageColorStyle': {
            const { type, stylePath, properties } = input;
            // Check permissions based on type
            const permissionError = checkPermissions(type === 'create'
                ? 'createColorStyle'
                : 'ColorStyle.setAttributes');
            if (permissionError)
                return permissionError;
            if (!stylePath.startsWith('/')) {
                return `Color style path must start with /. Got: ${stylePath}`;
            }
            // Get all color styles and check if it exists
            const colorStyles = await framer.getColorStyles();
            const existingStyle = colorStyles.find((style) => style.path === stylePath);
            if (type === 'create') {
                if (existingStyle) {
                    return `Color style with path ${stylePath} already exists. Use type: "update" to modify it.`;
                }
                // Validate required fields for create
                if (!properties.light) {
                    return `Light color is required when creating a new color style.`;
                }
                // Filter out name property as Framer derives it from the path
                const { name, ...propertiesWithoutName } = properties;
                const attributes = {
                    ...propertiesWithoutName,
                    path: stylePath,
                };
                try {
                    const result = await framer.createColorStyle(attributes);
                    if (!result) {
                        return `Failed to create color style at ${stylePath}.`;
                    }
                    return {
                        message: `Successfully created color style: ${result.name}`,
                        style: {
                            path: result.path,
                            name: result.name,
                            light: result.light,
                            dark: result.dark,
                        },
                    };
                }
                catch (error) {
                    return `Failed to create color style: ${error instanceof Error ? error.message : 'Unknown error'}`;
                }
            }
            else {
                // type === 'update'
                if (!existingStyle) {
                    return `Color style with path ${stylePath} not found. Use type: "create" to make a new style.`;
                }
                const result = await existingStyle.setAttributes(properties);
                if (!result) {
                    return `Failed to update color style ${stylePath}.`;
                }
                return {
                    message: `Successfully updated color style: ${result.name}`,
                    style: {
                        path: result.path,
                        light: result.light,
                        dark: result.dark,
                    },
                };
            }
        }
        case 'manageTextStyle': {
            const { type, stylePath, properties } = input;
            // Check permissions based on type
            const permissionError = checkPermissions(type === 'create'
                ? 'createTextStyle'
                : 'TextStyle.setAttributes');
            if (permissionError)
                return permissionError;
            if (!stylePath.startsWith('/')) {
                return `Text style path must start with /. Got: ${stylePath}`;
            }
            // Get all text styles and check if it exists
            const textStyles = await framer.getTextStyles();
            const existingStyle = textStyles.find((style) => style.path === stylePath);
            // Get fonts if font property is provided
            const fonts = properties.font ? await framer.getFonts() : [];
            // Get color styles once if needed
            const needsColorStyles = (typeof properties.color === 'string' &&
                properties.color.startsWith('/')) ||
                (typeof properties.decorationColor === 'string' &&
                    properties.decorationColor.startsWith('/'));
            const colorStyles = needsColorStyles
                ? await framer.getColorStyles()
                : [];
            // Helper function to process attributes
            const processAttributes = (attrs) => {
                const processed = { ...attrs };
                // Convert font selector string to Font instance
                if (attrs.font && typeof attrs.font === 'string') {
                    const font = fonts.find((f) => f.selector === attrs.font);
                    if (!font) {
                        throw new Error(`Font with selector "${attrs.font}" not found. Use searchFonts tool to find available fonts.`);
                    }
                    processed.font = font;
                }
                // Handle color style paths for color field
                if (typeof attrs.color === 'string' &&
                    attrs.color.startsWith('/')) {
                    const colorStyle = colorStyles.find((style) => style.path === attrs.color);
                    if (!colorStyle) {
                        throw new Error(`Color style with path ${attrs.color} not found.`);
                    }
                    processed.color = colorStyle;
                }
                // Handle color style paths for decorationColor field
                if (typeof attrs.decorationColor === 'string' &&
                    attrs.decorationColor.startsWith('/')) {
                    const colorStyle = colorStyles.find((style) => style.path === attrs.decorationColor);
                    if (!colorStyle) {
                        throw new Error(`Color style with path ${attrs.decorationColor} not found.`);
                    }
                    processed.decorationColor = colorStyle; // TODO weirdly decorationColor needs ColorStyleData but ColorStyleData is not something frame API exposes
                }
                return processed;
            };
            if (type === 'create') {
                if (existingStyle) {
                    return `Text style with path ${stylePath} already exists. Use type: "update" to modify it.`;
                }
                // Filter out name property as Framer derives it from the path
                const { name, ...propertiesWithoutName } = properties;
                try {
                    const attributes = {
                        ...processAttributes(propertiesWithoutName),
                        path: stylePath,
                    };
                    const result = await framer.createTextStyle(attributes);
                    if (!result) {
                        return `Failed to create text style at ${stylePath}.`;
                    }
                    return {
                        message: `Successfully created text style: ${result.name}`,
                        style: {
                            path: result.path,
                            name: result.name,
                            fontSize: result.fontSize,
                            lineHeight: result.lineHeight,
                            letterSpacing: result.letterSpacing,
                            paragraphSpacing: result.paragraphSpacing,
                            transform: result.transform,
                            alignment: result.alignment,
                            decoration: result.decoration,
                            balance: result.balance,
                            tag: result.tag,
                        },
                    };
                }
                catch (error) {
                    return `Failed to create text style: ${error instanceof Error ? error.message : 'Unknown error'}`;
                }
            }
            else {
                // type === 'update'
                if (!existingStyle) {
                    return `Text style with path ${stylePath} not found. Use type: "create" to make a new style.`;
                }
                try {
                    const attributes = processAttributes(properties);
                    const result = await existingStyle.setAttributes(attributes);
                    if (!result) {
                        return `Failed to update text style ${stylePath}.`;
                    }
                    return {
                        message: `Successfully updated text style: ${result.name}`,
                        style: {
                            path: result.path,
                            name: result.name,
                            fontSize: result.fontSize,
                            lineHeight: result.lineHeight,
                            letterSpacing: result.letterSpacing,
                            paragraphSpacing: result.paragraphSpacing,
                            transform: result.transform,
                            alignment: result.alignment,
                            decoration: result.decoration,
                            balance: result.balance,
                            tag: result.tag,
                        },
                    };
                }
                catch (error) {
                    return `Failed to update text style: ${error instanceof Error ? error.message : 'Unknown error'}`;
                }
            }
        }
        case 'searchFonts': {
            const { query } = input;
            // Get all fonts from Framer
            const allFonts = await framer.getFonts();
            // Filter fonts that contain the query substring in their selector
            const matchingFonts = allFonts.filter((font) => font.selector.toLowerCase().includes(query.toLowerCase()));
            // Limit to 20 results
            const limitedFonts = matchingFonts.slice(0, 20);
            // Return formatted results
            const results = limitedFonts.map((font) => ({
                family: font.family,
                selector: font.selector,
                weight: font.weight,
                style: font.style,
            }));
            const baseMessage = matchingFonts.length > 20
                ? `Found ${matchingFonts.length} fonts matching "${query}". Showing first 20. Use a more specific search term to narrow results.`
                : `Found ${matchingFonts.length} fonts matching "${query}".`;
            const message = `${baseMessage}\n\nTo use a font: <Text font="selector">Text</Text>\nNote: font and inlineTextStyle attributes are mutually exclusive`;
            return {
                message,
                results,
                totalMatches: matchingFonts.length,
            };
        }
        case 'deleteNode': {
            const { nodeId } = input;
            // First check if this is a style path (starts with /)
            if (nodeId.startsWith('/')) {
                // Try to delete as color style first
                const colorStyles = await framer.getColorStyles();
                const colorStyle = colorStyles.find((style) => style.path === nodeId);
                if (colorStyle) {
                    const permissionError = checkPermissions('ColorStyle.remove');
                    if (permissionError)
                        return permissionError;
                    await colorStyle.remove();
                    return `Successfully deleted color style ${nodeId}.`;
                }
                // Try to delete as text style
                const textStyles = await framer.getTextStyles();
                const textStyle = textStyles.find((style) => style.path === nodeId);
                if (textStyle) {
                    const permissionError = checkPermissions('TextStyle.remove');
                    if (permissionError)
                        return permissionError;
                    await textStyle.remove();
                    return `Successfully deleted text style ${nodeId}.`;
                }
                return `Style with path ${nodeId} not found.`;
            }
            // Check if this is a code file ID
            const codeFiles = await framer.getCodeFiles();
            const codeFile = codeFiles.find((file) => file.id === nodeId);
            if (codeFile) {
                const permissionError = checkPermissions('CodeFile.remove');
                if (permissionError)
                    return permissionError;
                await codeFile.remove();
                return `Successfully deleted code file ${nodeId}.`;
            }
            // Regular node deletion
            const permissionError = checkPermissions('Node.remove');
            if (permissionError)
                return permissionError;
            const node = await framer.getNode(nodeId);
            if (!node) {
                return `Node with ID ${nodeId} not found.`;
            }
            await node.remove();
            return `Successfully deleted node ${nodeId}.`;
        }
        case 'duplicateNode': {
            const { nodeId } = input;
            // Check permissions
            const permissionError = checkPermissions('Node.clone', 'setParent');
            if (permissionError)
                return permissionError;
            const node = await framer.getNode(nodeId);
            if (!node) {
                return `Node with ID ${nodeId} not found.`;
            }
            try {
                const parent = await node.getParent();
                if (!parent) {
                    throw new Error('No parent found for node');
                }
                let cloned = await node.clone();
                if (!cloned) {
                    throw new Error('No new node cloned found');
                }
                await framer.setParent(cloned.id, parent.id);
                if (!cloned) {
                    return `Failed to duplicate node ${nodeId}: The operation returned null.`;
                }
                return `Here is the new node XML:\n\n` + getNodeXml(cloned.id);
            }
            catch (error) {
                return `Failed to duplicate node ${nodeId}: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        case 'exportReactComponents': {
            try {
                // Get all available components and code files
                const components = await framer.getNodesWithType('ComponentNode');
                const codeFiles = await framer.getCodeFiles();
                const selectedComponentIds = new Set();
                // Add all component nodes with insertURL
                for (const component of components) {
                    if (component.id && component.insertURL) {
                        selectedComponentIds.add(component.id);
                    }
                }
                // Add all code files with component exports
                for (const file of codeFiles) {
                    if (file.exports.some((exp) => exp.type === 'component' && exp.isDefaultExport)) {
                        selectedComponentIds.add(file.id);
                    }
                }
                if (selectedComponentIds.size === 0) {
                    return `No components or code files found to export.`;
                }
                // Process the export data
                const data = await processReactExportData({
                    selectedComponentIds,
                });
                // Get the API client and submit the export
                const { error, data: responseData } = await pluginApiClient.api.plugins.reactExportPlugin.upsertProject.post(data);
                if (error) {
                    throw new Error(error.message || 'Export failed');
                }
                const projectId = responseData.projectId;
                const exportedNodeIds = Array.from(selectedComponentIds);
                return dedent `
                  Components successfully exported!

                  **Exported ${JSON.stringify(exportedNodeIds)} components**

                  To create a complete example app with all your components:

                  \`npx -y unframer example-app --outDir ./example-framer-app ${projectId}\`

                  This will create a folder example-framer-app with a vite app with tailwind and the Framer components already downloaded as .jsx file and the packages already installed (node_modules already present)

                  After that you can go inside the directory with \`cd example-framer-app\` and tell the user to run the development server with npm run dev. Then visit the localhost url to see the live preview of the website.

                  If you already created the example app you can just run \`npx -y unframer --outDir src/framer ${projectId}\` inside the example app folder do download the Framer components locally as .jsx files. The example app also has a script you can run with \`npm run framer\` that does the same, without need for npx.

                  Running this command will update the .jsx files with the latest changes made in Framer. Notice that if the user adds Framer variables in the components you can customize these using React props in the code, for example the user can use a Framer variable for a link and give it the name ctaLink, then you will be able to customize this url with a React prop ctaLink. You can see available props reading the generated .jsx files first 100 lines, the available props are described with a typedoc typescript comment on a type Props at the start of the file.

                  You can run \`npx -y unframer --help\` for more available options.

                  If you install unframer locally in the project you won't need to use npx. Install it as a dependency and not a devDependency to use it in production builds. (ntice the example-app command does all of this already)

                  `;
            }
            catch (error) {
                return `Failed to export components: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        case 'createCodeFile': {
            const { name, content } = input;
            // Check permission
            const permissionError = checkPermissions('createCodeFile');
            if (permissionError)
                return permissionError;
            // Validate file name
            if (!name.endsWith('.tsx')) {
                return `Code file name must end with .tsx extension. Got: ${name}`;
            }
            try {
                const codeFile = await framer.createCodeFile(name, content);
                if (!codeFile) {
                    return `Failed to create code file ${name}.`;
                }
                const componentExport = codeFile.exports.find((x) => x.type === 'component');
                // if (componentExport) {
                //     await framer.addComponentInstance({
                //         url: componentExport.insertURL,
                //         attributes: {},
                //     })
                // }
                const insertUrl = stripVersionFromUrl(componentExport?.insertURL);
                const typecheckResult = await codeFile.typecheck();
                return dedent `
                ## Successfully created code file: \`${codeFile.path}\`

                **Code file details:**

                - **ID:** \`${codeFile.id}\`
                - **Name:** \`${codeFile.name}\`
                - **Path:** \`${codeFile.path}\`
                - **Component Insert URL:** \`${insertUrl}\`

                ${insertUrl ? `Use updateXmlForNode with a ComponentInstance node using insertUrl: \`${insertUrl}\` to add this component to the canvas.` : 'No component export found in this code file.'}

                **Typecheck result:**
                \`\`\`json
                ${JSON.stringify(typecheckResult, null, 2)}
                \`\`\`
                `;
            }
            catch (error) {
                return `Failed to create code file: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        case 'readCodeFile': {
            const { codeFileId } = input;
            try {
                const codeFile = await framer.getCodeFile(codeFileId);
                if (!codeFile) {
                    return `Code file with ID ${codeFileId} not found.`;
                }
                return {
                    id: codeFile.id,
                    name: codeFile.name,
                    path: codeFile.path,
                    content: codeFile.content,
                    exports: codeFile.exports,
                };
            }
            catch (error) {
                return `Failed to read code file: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        case 'updateCodeFile': {
            const { codeFileId, content } = input;
            // Check permission
            const permissionError = checkPermissions('CodeFile.setFileContent');
            if (permissionError)
                return permissionError;
            try {
                const codeFile = await framer.getCodeFile(codeFileId);
                if (!codeFile) {
                    return `Code file with ID ${codeFileId} not found.`;
                }
                // Update the content
                await codeFile.setFileContent(content);
                const typecheckResult = await codeFile.typecheck();
                return {
                    message: `Successfully updated code file: ${codeFile.name}`,
                    codeFile: {
                        id: codeFile.id,
                        name: codeFile.name,
                        path: codeFile.path,
                        exports: codeFile.exports,
                    },
                    typecheck: typecheckResult,
                };
            }
            catch (error) {
                return `Failed to update code file: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        case 'getComponentInsertUrlAndTypes': {
            const { id } = input;
            try {
                // Build array of component info objects
                const components = [];
                // First try as component node
                const node = await framer.getNode(id);
                if (node) {
                    // Check if it's a component node
                    if (!isComponentNode(node)) {
                        return `Node ${id} is not a component node. This tool only works with component nodes.`;
                    }
                    components.push({
                        name: node.name || 'Component',
                        insertUrl: stripVersionFromUrl(node.insertURL || undefined),
                        importName: componentCamelCase(node.componentName || node.name || 'Component'),
                    });
                }
                else {
                    // Try as code file
                    const codeFile = await framer.getCodeFile(id);
                    if (codeFile) {
                        const componentExports = codeFile.exports.filter((exp) => exp.type === 'component');
                        if (componentExports.length === 0) {
                            return `Code file ${codeFile.name} does not export any components.`;
                        }
                        // Add all component exports
                        for (const componentExport of componentExports) {
                            components.push({
                                name: componentExport.name,
                                insertUrl: stripVersionFromUrl(componentExport.insertURL),
                                importName: componentExport.name,
                                isCodeFile: true,
                            });
                        }
                    }
                    else {
                        return `ID ${id} not found. Make sure it's a valid component node ID or code file ID from getProjectXml.`;
                    }
                }
                // Generate unified markdown output
                let message = '';
                // Add header based on type
                if (components[0]?.isCodeFile) {
                    const codeFile = await framer.getCodeFile(id);
                    message = `## Code File: ${codeFile.name}\n\n`;
                    message += `This code file exports ${components.length} component(s):\n\n`;
                }
                else {
                    message = `## Component: ${components[0].name}\n\n`;
                }
                // Process each component with property controls
                for (const component of components) {
                    if (components.length > 1) {
                        message += `### ${component.name}\n\n`;
                    }
                    if (!component.insertUrl) {
                        message += `⚠️ No insert URL available for this component.\n\n`;
                        continue;
                    }
                    message += `**Insert URL:** \`${component.insertUrl}\`\n\n`;
                    // Get property controls and generate TypeScript documentation
                    const { propertyControls } = await getComponentPropertyControls(component.insertUrl);
                    // Create the import statement
                    const importStatement = `import ${component.importName} from "${component.insertUrl}"`;
                    message += `**Import Statement:**\n\`\`\`js\n${importStatement}\n\`\`\``;
                    if (propertyControls) {
                        const typedocComments = propControlsToTypedocComments({
                            propertyControls,
                            logger: console,
                            componentImportedName: component.importName,
                        });
                        if (typedocComments.headerComment) {
                            message += `\n\n**Props (can be used as XML attributes):**\n\`\`\`js\n${typedocComments.headerComment}\`\`\``;
                        }
                    }
                    if (components.length > 1) {
                        message += `\n\n`;
                    }
                }
                // Add footer note
                message += `\n\nThese props can be used as attributes when updating ${components.length > 1 ? 'component instances' : 'the component instance'} with \`updateXmlForNode\`.`;
                return message;
            }
            catch (error) {
                return `Failed to get component insert URL and types: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        // Commented out: Use updateXmlForNode with insertUrl attribute instead, which supports all attributes in one step
        // case 'insertComponentInCanvas': {
        //     const { insertUrl } = input
        //
        //     // Check permission
        //     const permissionError = checkPermissions('addComponentInstance')
        //     if (permissionError) return permissionError
        //
        //     try {
        //         // Get the current root node (page or component)
        //         const rootNode = await framer.getCanvasRoot()
        //         if (!rootNode) {
        //             return `No page or component is currently focused. Please open a page or component in Framer first.`
        //         }
        //
        //         // Insert the component
        //         const newNode = await framer.addComponentInstance({
        //             url: insertUrl,
        //             attributes: {},
        //         })
        //
        //         if (!newNode) {
        //             return `Failed to insert component with URL: ${insertUrl}`
        //         }
        //
        //         // Get the XML for the new node
        //         const nodeXml = await getNodeXml(newNode.id)
        //         if (!nodeXml) {
        //             return `Component inserted but failed to get XML for node ${newNode.id}`
        //         }
        //
        //         return dedent`
        //         ## Component Successfully Inserted
        //
        //         **New Node ID:** \`${newNode.id}\`
        //
        //         **Current Root:** ${rootNode.__class} \`${rootNode.id}\`
        //
        //         **Component XML:**
        //         \`\`\`xml
        //         ${nodeXml.xml}
        //         \`\`\`
        //
        //         ### IMPORTANT: Component Placement Required
        //
        //         The component has been inserted into the canvas but is NOT yet inside the page/component content. You MUST use \`updateXmlForNode\` to place it inside the ${rootNode.__class} structure.
        //
        //         1. First, use \`getNodeXml\` on the root node ID \`${rootNode.id}\` to see the current structure
        //
        //         2. Then use \`updateXmlForNode\` with the root node ID to add the component as a child with styling attributes:
        //            \`\`\`xml
        //            <${rootNode.__class} nodeId="${rootNode.id}">
        //                <!-- existing children -->
        //                <ComponentInstance
        //                    nodeId="${newNode.id}"
        //                    width="200px"
        //                    height="100px"
        //                    position="relative"
        //                    <!-- add component-specific props here -->
        //                />
        //            </${rootNode.__class}>
        //            \`\`\`
        //
        //         3. To customize the component instance:
        //            - Use \`getComponentInsertUrlAndTypes\` with the component's nodeId to see available props/attributes
        //            - Add standard attributes: width, height, position, opacity, etc.
        //            - Add component-specific attributes based on its property controls
        //            - Example: For a Button component, you might add \`text="Click me"\` \`variant="primary"\`
        //
        //         4. The component can be placed:
        //            - As a direct child of the root
        //            - Inside a specific Frame or Stack
        //            - At any position among siblings
        //
        //         Without this placement step, the component will not be visible in the canvas.
        //         `
        //     } catch (error) {
        //         return `Failed to insert component: ${error instanceof Error ? error.message : 'Unknown error'}`
        //     }
        // }
        case 'getProjectWebsiteUrl': {
            try {
                const publishInfo = await framer.getPublishInfo();
                return publishInfo || { production: null, staging: null };
            }
            catch (error) {
                return `Failed to get project website URL: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        case 'getCMSCollections': {
            try {
                const collections = await framer.getCollections();
                // For each collection, get its field definitions
                const collectionsWithFields = await Promise.all(collections.map(async (collection) => {
                    const canEdit = collection.managedBy === 'thisPlugin';
                    const fields = await collection.getFields();
                    return {
                        id: collection.id,
                        name: collection.name,
                        managedBy: collection.managedBy,
                        readonly: collection.readonly,
                        fields: fields.map((field) => {
                            const baseField = {
                                id: field.id,
                                name: field.name,
                                type: field.type,
                            };
                            // Add field-specific properties if they exist
                            const result = { ...baseField };
                            // Add comment explaining what value type is expected
                            const comment = CMS_FIELD_TYPE_COMMENTS[field.type];
                            if (comment) {
                                result.comment = comment;
                            }
                            // Common properties
                            if ('required' in field)
                                result.required = field.required || false;
                            // FileField specific properties
                            if ('allowedFileTypes' in field &&
                                field.allowedFileTypes)
                                result.allowedFileTypes =
                                    field.allowedFileTypes;
                            // EnumField specific properties
                            if ('cases' in field && field.cases) {
                                result.cases = field.cases.map((enumCase) => ({
                                    id: enumCase.id,
                                    name: enumCase.name,
                                }));
                                // Update comment for enum to be more specific
                                if (result.cases.length > 0) {
                                    const caseIds = result.cases
                                        .map((c) => `"${c.id}"`)
                                        .join(', ');
                                    result.comment = `JSON string - One of: ${caseIds}`;
                                }
                            }
                            // CollectionReferenceField and MultiCollectionReferenceField specific properties
                            if ('collectionId' in field) {
                                result.collectionId = field.collectionId;
                                // Make comment more specific for references
                                const collectionName = collections.find((c) => c.id === field.collectionId)?.name;
                                if (collectionName) {
                                    if (field.type === 'collectionReference') {
                                        result.comment = `JSON string or null - ID of an item from the "${collectionName}" collection`;
                                    }
                                    else if (field.type ===
                                        'multiCollectionReference') {
                                        result.comment = `JSON array - Array of item IDs from the "${collectionName}" collection (e.g., ["id1", "id2"])`;
                                    }
                                }
                            }
                            // Legacy support for generic options/defaultValue/multiline properties
                            if ('options' in field && field.options)
                                result.options = field.options;
                            if ('defaultValue' in field &&
                                field.defaultValue !== undefined)
                                result.defaultValue = field.defaultValue;
                            if ('multiline' in field &&
                                field.multiline !== undefined)
                                result.multiline = field.multiline;
                            return result;
                        }),
                    };
                }));
                return {
                    message: `Found ${collections.length} CMS collection(s)`,
                    collections: collectionsWithFields,
                };
            }
            catch (error) {
                return `Failed to get CMS collections: ${error instanceof Error ? error.message : 'Unknown error'}`;
            }
        }
        case 'getCMSItems': {
            const { collectionId, skip = 0, limit = 100, filter } = input;
            const collection = await framer.getCollection(collectionId);
            if (!collection) {
                return `CMS collection with ID ${collectionId} not found`;
            }
            // Get all items from the collection
            let items = await collection.getItems();
            // Apply filtering if provided
            if (filter) {
                if (filter.query) {
                    const query = filter.query.toLowerCase();
                    items = items.filter((item) => {
                        // Search in slug
                        if (item.slug.toLowerCase().includes(query)) {
                            return true;
                        }
                        // Search in specific field or all text fields
                        if (filter.fieldName) {
                            const fieldValue = item.fieldData[filter.fieldName];
                            if (fieldValue &&
                                typeof fieldValue === 'object' &&
                                'value' in fieldValue) {
                                const value = String(fieldValue.value).toLowerCase();
                                return value.includes(query);
                            }
                        }
                        else {
                            // Search in all string/text fields
                            for (const [fieldName, fieldValue,] of Object.entries(item.fieldData)) {
                                if (fieldValue &&
                                    typeof fieldValue === 'object' &&
                                    'value' in fieldValue) {
                                    const value = fieldValue.value;
                                    if (typeof value === 'string' &&
                                        value.toLowerCase().includes(query)) {
                                        return true;
                                    }
                                }
                            }
                        }
                        return false;
                    });
                }
            }
            // Apply pagination
            const totalItems = items.length;
            const paginatedItems = items.slice(skip, skip + limit);
            return {
                message: `Retrieved ${paginatedItems.length} of ${totalItems} item(s) from collection "${collection.name}"`,
                pagination: {
                    total: totalItems,
                    skip,
                    limit,
                    returned: paginatedItems.length,
                },
                items: paginatedItems.map((item) => ({
                    id: item.id,
                    slug: item.slug,
                    draft: item.draft,
                    fieldData: cleanFieldData(item.fieldData),
                })),
            };
        }
        case 'upsertCMSItem': {
            const { collectionId, itemId, slug, fieldData, draft = false, } = input;
            // Check permissions
            const permissionError = checkPermissions('Collection.addItems');
            if (permissionError)
                return permissionError;
            const collection = await framer.getCollection(collectionId);
            if (!collection) {
                return `CMS collection with ID ${collectionId} not found`;
            }
            // Prepare the item data
            // Normalize incoming fieldData to use markdown for formattedText fields
            const hasIncomingFieldData = fieldData !== undefined;
            const incomingFieldData = parseIncomingFieldData(fieldData);
            const normalizedFieldData = normalizeIncomingFieldData(incomingFieldData);
            const itemData = {
                draft,
                fieldData: normalizedFieldData,
            };
            if (itemId) {
                // Update existing item
                itemData.id = itemId;
                if (slug !== undefined) {
                    itemData.slug = slug;
                }
                // Get the existing item to merge field data
                const existingItems = await collection.getItems();
                const existingItem = existingItems.find((item) => item.id === itemId);
                if (!existingItem) {
                    return `CMS item with ID ${itemId} not found in collection ${collectionId}`;
                }
                // For updates, merge with existing field data (partial update support)
                if (hasIncomingFieldData) {
                    // Clean existing field data to ensure proper format for API validation
                    // Then overlay with the normalized incoming field data
                    itemData.fieldData = {
                        ...cleanFieldData(existingItem.fieldData),
                        ...normalizedFieldData,
                    };
                }
                else {
                    itemData.fieldData = cleanFieldData(existingItem.fieldData);
                }
                await collection.addItems([itemData]);
                // Get the updated item to return cleaned field data
                const updatedItems = await collection.getItems();
                const updatedItem = updatedItems.find((item) => item.id === itemId);
                return {
                    message: `Successfully updated CMS item "${existingItem.slug}" in collection "${collection.name}"`,
                    item: {
                        id: itemId,
                        slug: slug || existingItem.slug,
                        draft,
                        fieldData: updatedItem
                            ? cleanFieldData(updatedItem.fieldData)
                            : itemData.fieldData,
                    },
                };
            }
            else {
                // Create new item
                if (!slug) {
                    return `Slug is required when creating a new CMS item`;
                }
                itemData.slug = slug;
                // Check if slug already exists
                const existingItems = await collection.getItems();
                const existingItem = existingItems.find((item) => item.slug === slug);
                if (existingItem) {
                    return `CMS item with slug "${slug}" already exists in collection ${collectionId}. Use itemId to update it instead.`;
                }
                await collection.addItems([itemData]);
                // Get the newly created item to return its ID
                const updatedItems = await collection.getItems();
                const newItem = updatedItems.find((item) => item.slug === slug);
                return {
                    message: `Successfully created new CMS item "${slug}" in collection "${collection.name}"`,
                    item: {
                        id: newItem?.id,
                        slug,
                        draft,
                        fieldData: newItem
                            ? cleanFieldData(newItem.fieldData)
                            : itemData.fieldData,
                    },
                };
            }
        }
        case 'deleteCMSItem': {
            const { collectionId, itemId } = input;
            // Check permission
            const permissionError = checkPermissions('Collection.removeItems');
            if (permissionError)
                return permissionError;
            const collection = await framer.getCollection(collectionId);
            if (!collection) {
                return `CMS collection with ID ${collectionId} not found`;
            }
            // Verify the item exists
            const items = await collection.getItems();
            const itemToDelete = items.find((item) => item.id === itemId);
            if (!itemToDelete) {
                return `CMS item with ID ${itemId} not found in collection ${collectionId}`;
            }
            await collection.removeItems([itemId]);
            return {
                message: `Successfully deleted CMS item "${itemToDelete.slug}" from collection "${collection.name}"`,
                deletedItem: {
                    id: itemId,
                    slug: itemToDelete.slug,
                },
            };
        }
        case 'createCMSCollection': {
            const { name, fields = [] } = input;
            // Check permissions for creating managed collections
            const permissionError = checkPermissions('createManagedCollection');
            if (permissionError)
                return permissionError;
            // Create the managed collection
            const collection = await framer.createManagedCollection(name);
            if (!collection) {
                return `Failed to create collection "${name}"`;
            }
            // If fields are provided, set them on the collection
            if (fields.length > 0) {
                // Convert input fields to ManagedCollectionFieldInput format
                const fieldInputs = fields.map((field) => {
                    const baseField = {
                        id: field.id,
                        name: field.name,
                    };
                    // Add type-specific properties
                    switch (field.type) {
                        case 'file':
                            return {
                                ...baseField,
                                type: 'file',
                                allowedFileTypes: field.allowedFileTypes || [],
                                required: field.required,
                            };
                        case 'enum':
                            return {
                                ...baseField,
                                type: 'enum',
                                cases: field.cases?.map((c) => ({
                                    id: c.id,
                                    name: c.name,
                                })) || [],
                            };
                        case 'collectionReference':
                            return {
                                ...baseField,
                                type: 'collectionReference',
                                collectionId: field.collectionId || '',
                                required: field.required,
                            };
                        case 'multiCollectionReference':
                            return {
                                ...baseField,
                                type: 'multiCollectionReference',
                                collectionId: field.collectionId || '',
                                required: field.required,
                            };
                        case 'string':
                            return {
                                ...baseField,
                                type: 'string',
                                required: field.required,
                            };
                        case 'formattedText':
                            return {
                                ...baseField,
                                type: 'formattedText',
                                required: field.required,
                            };
                        case 'image':
                            return {
                                ...baseField,
                                type: 'image',
                                required: field.required,
                            };
                        case 'link':
                            return {
                                ...baseField,
                                type: 'link',
                                required: field.required,
                            };
                        case 'date':
                            return {
                                ...baseField,
                                type: 'date',
                                required: field.required,
                            };
                        case 'number':
                            return {
                                ...baseField,
                                type: 'number',
                            };
                        case 'boolean':
                            return {
                                ...baseField,
                                type: 'boolean',
                            };
                        case 'color':
                            return {
                                ...baseField,
                                type: 'color',
                            };
                        default:
                            return {
                                ...baseField,
                                type: field.type,
                            };
                    }
                });
                await collection.setFields(fieldInputs);
            }
            // Get the created fields to return their IDs
            const createdFields = await collection.getFields();
            return {
                message: `Successfully created CMS collection "${name}" with ${createdFields.length} field(s)`,
                collection: {
                    id: collection.id,
                    name: collection.name,
                    managedBy: collection.managedBy,
                },
                fields: createdFields.map((f) => ({
                    id: f.id,
                    name: f.name,
                    type: f.type,
                })),
            };
        }
        case 'createPage': {
            const { name, type: pageType } = input;
            if (pageType === 'design') {
                // Check permissions for creating design pages
                const permissionError = checkPermissions('createDesignPage');
                if (permissionError)
                    return permissionError;
                // Create the design page
                const designPage = await framer.createDesignPage(name);
                if (!designPage) {
                    return `Failed to create design page "${name}"`;
                }
                return {
                    message: `Successfully created design page "${name}"`,
                    page: {
                        id: designPage.id,
                        name: designPage.name,
                        type: 'design',
                    },
                    hint: 'Use getNodeXml with this page ID to see its contents, or updateXmlForNode to add content to it.',
                };
            }
            else {
                // Check permissions for creating web pages
                const permissionError = checkPermissions('createWebPage');
                if (permissionError)
                    return permissionError;
                // Validate path starts with /
                if (!name.startsWith('/')) {
                    return `Web page path must start with "/". Got: "${name}"`;
                }
                // Create the web page
                const webPage = await framer.createWebPage(name);
                if (!webPage) {
                    return `Failed to create web page "${name}"`;
                }
                return {
                    message: `Successfully created web page "${name}"`,
                    page: {
                        id: webPage.id,
                        path: webPage.path,
                        type: 'web',
                    },
                    hint: 'Use getNodeXml with this page ID to see its contents, or updateXmlForNode to add content to it.',
                };
            }
        }
        default:
            throw new Error(`Unknown tool type: ${type}`);
    }
}
//# sourceMappingURL=mcp-handlers.js.map