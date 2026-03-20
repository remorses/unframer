import { DomHandler, Parser, ElementType } from 'htmlparser2';
import domSerializer from 'dom-serializer';
import camelCase from 'camelcase';
export function rewriteXmlContentForTests({ xml: xml, newContent, }) {
    const handler = new DomHandler((error, dom) => {
        if (error) {
            console.error(error);
        }
        else {
            const dfs = (node) => {
                if (node.type === ElementType.Tag &&
                    node.attribs &&
                    node.attribs.nodeId) {
                    const nodeId = node.attribs.nodeId;
                    const matchingContent = newContent.find((item) => item.nodeId === nodeId);
                    if (matchingContent?.newContent) {
                        node.children.forEach((child) => {
                            if (child.type === 'text') {
                                const initialSpace = child.data.match(/^\s+/)?.toString() || '';
                                const endSpace = child.data.match(/\s+$/)?.toString() || '';
                                const text = matchingContent.newContent || '';
                                child.data = initialSpace + text + endSpace;
                            }
                        });
                    }
                }
                if (node.children) {
                    node.children.forEach(dfs);
                }
            };
            dom.forEach(dfs);
        }
    });
    const parser = new Parser(handler, { xmlMode: true });
    parser.write(xml);
    parser.end();
    const serialized = domSerializer(handler.dom, {
        xmlMode: true,
        encodeEntities: false,
        decodeEntities: false,
    });
    return serialized;
}
function deIndent(str) {
    if (!str) {
        return str;
    }
    const lines = str.split('\n').filter(Boolean);
    if (lines.length === 0) {
        return str;
    }
    const minIndent = Math.min(...lines.map((line) => {
        const match = line.match(/^\s*/);
        return match ? match[0].length : 0;
    }));
    return lines.map((line) => line.slice(minIndent)).join('\n');
}
// Constant for temporary node ID prefix
export const TEMP_NODE_ID_PREFIX = '_temp_';
function determineNodeType(node, attributes) {
    // Check if it has direct text content (Text node)
    if (node.children) {
        const hasDirectText = node.children.some((child) => child.type === 'text' && child.data.trim());
        // If it has text content and no other identifying attributes, it's a Text node
        if (hasDirectText &&
            !attributes.layout &&
            !attributes.svg &&
            !attributes.componentId) {
            return 'Text';
        }
    }
    // Check for component instance
    if (attributes.componentId || attributes.insertUrl) {
        return 'ComponentInstance';
    }
    // Check for SVG
    if (attributes.svg) {
        return 'SVG';
    }
    // Otherwise it's a Frame (including those with layout="stack" or layout="grid")
    return 'Frame';
}
export function extractObjectsFromXmlContent(xml, options) {
    const results = [];
    let tempIdCounter = 0;
    const enableNodeCreation = options?.enableNodeCreation ?? false;
    const handler = new DomHandler((error, dom) => {
        if (error) {
            console.error('error', error);
        }
        else {
            const dfs = (node, lastParentWithId) => {
                let currentParentId = lastParentWithId;
                if (node.type === ElementType.Tag) {
                    let nodeId = node.attribs?.nodeId;
                    const hasExistingId = !!nodeId;
                    // Only process nodes that have an ID or when node creation is enabled
                    if (!hasExistingId && !enableNodeCreation) {
                        // Skip this node but continue processing children
                        if (node.children) {
                            node.children.forEach((child) => dfs(child, lastParentWithId));
                        }
                        return;
                    }
                    // Assign temporary ID for new nodes when creation is enabled
                    if (!nodeId && enableNodeCreation) {
                        nodeId = `${TEMP_NODE_ID_PREFIX}${++tempIdCounter}`;
                    }
                    let text = '';
                    // Only get direct text children, not all descendants
                    if (node.children) {
                        node.children.forEach((child) => {
                            if (child.type === 'text') {
                                text += child.data;
                            }
                        });
                    }
                    const attributes = { ...node.attribs };
                    delete attributes.nodeId;
                    const extractedNode = {
                        nodeId: nodeId,
                        newContent: deIndent(text).trim(),
                        attributes,
                    };
                    // Determine node type for new nodes
                    if (!hasExistingId && enableNodeCreation) {
                        extractedNode.nodeType = determineNodeType(node, attributes);
                    }
                    // Add parent information if available
                    if (lastParentWithId) {
                        extractedNode.parentId = lastParentWithId;
                    }
                    // This node becomes the parent for its children
                    currentParentId = nodeId;
                    results.push(extractedNode);
                }
                if (node.children) {
                    // Pass the current parent ID (either this node's ID or the last parent with ID)
                    node.children.forEach((child) => dfs(child, currentParentId));
                }
            };
            dom.forEach((node) => dfs(node));
            // Group nodes by their parent
            const nodesByParent = new Map();
            results.forEach((node) => {
                const parentId = node.parentId;
                if (!nodesByParent.has(parentId)) {
                    nodesByParent.set(parentId, []);
                }
                nodesByParent.get(parentId).push(node);
            });
            // Calculate siblings for each group
            nodesByParent.forEach((siblings) => {
                siblings.forEach((node, index) => {
                    // Set beforeNodeId if there's a previous sibling
                    if (index > 0) {
                        node.beforeNodeId = siblings[index - 1].nodeId;
                    }
                    // Set afterNodeId if there's a next sibling
                    if (index < siblings.length - 1) {
                        node.afterNodeId = siblings[index + 1].nodeId;
                    }
                });
            });
        }
    });
    const parser = new Parser(handler, { xmlMode: true });
    parser.write(xml);
    parser.end();
    return results;
}
export function xmlToFramerLayersTree(xml) {
    const handler = new DomHandler();
    const parser = new Parser(handler, { xmlMode: true });
    parser.write(xml);
    parser.end();
    function processNode(node) {
        if (node.type !== 'tag') {
            return null;
        }
        const result = {
            name: node.name,
        };
        if (node.attribs) {
            const { nodeId, ...attrs } = node.attribs;
            if (nodeId) {
                result.nodeId = nodeId;
            }
            if (Object.keys(attrs).length > 0) {
                result.attributes = attrs;
            }
        }
        if (node.children) {
            const textNodes = node.children.filter((child) => child.type === 'text');
            if (textNodes.length > 0) {
                result.content = textNodes
                    .map((node) => node.data.trim())
                    .join('\n')
                    .trim();
            }
            const childElements = node.children.filter((child) => child.type === 'tag');
            if (childElements.length > 0) {
                const children = childElements
                    .map(processNode)
                    .filter((n) => n !== null);
                if (children.length > 0) {
                    result.children = children;
                }
            }
        }
        return result;
    }
    const rootNodes = handler.dom
        .filter((node) => node.type === 'tag')
        .map(processNode)
        .filter((n) => n !== null);
    return addNodeCount(rootNodes);
}
export function framerLayersTreeToXml(tree, options = {}) {
    const { shouldAddNodeIdAlways = false, indent = '', maxCharacters = 15000, currentDepth = 0, currentCharCount = 0, } = options;
    let xml = '';
    let charCount = currentCharCount;
    const seenComponentIds = new Set();
    for (const node of tree) {
        if (!node) {
            continue;
        }
        if (node.name === '') {
            if (node.content) {
                const line = `${indent}${escapeXml(node.content)}\n`;
                xml += line;
                charCount += line.length;
            }
            if (node.children && node.children.length > 0) {
                const childXml = framerLayersTreeToXml(node.children, {
                    shouldAddNodeIdAlways,
                    indent,
                    maxCharacters,
                    currentDepth: currentDepth + 1,
                    currentCharCount: charCount,
                });
                xml += childXml;
                charCount += childXml.length;
            }
            continue;
        }
        let name = node.name || 'Container';
        let nodeName = camelCase(name?.replace(/[^a-zA-Z0-9\s_-]+/g, ' ') || 'None', {
            pascalCase: true,
        }) || 'Node';
        let max = 60;
        if (nodeName.length > max) {
            const lastUnderscoreIndex = nodeName.indexOf('_', max);
            if (lastUnderscoreIndex > 0) {
                nodeName = nodeName.substring(0, lastUnderscoreIndex);
            }
            else {
                nodeName = nodeName.substring(0, max);
            }
        }
        const attributes = [];
        let shouldAddNodeId = shouldAddNodeIdAlways || !node?.children?.length;
        if (shouldAddNodeId && node.nodeId) {
            attributes.push(`nodeId="${node.nodeId}"`);
        }
        // Track componentId to avoid duplicate comments
        const componentId = node.attributes?.componentId;
        const shouldShowComments = !componentId || !seenComponentIds.has(componentId);
        if (componentId && shouldShowComments) {
            seenComponentIds.add(componentId);
        }
        let hasComments = false;
        if (node.attributes) {
            for (const [key, value] of Object.entries(node.attributes)) {
                if (value !== undefined && value !== null) {
                    const comment = node.attrControlsComments?.[key];
                    // Only show comments if this is the first instance of this componentId
                    // or if it's not a component-specific attribute comment
                    const isComponentSpecificComment = comment &&
                        ![
                            'componentId',
                            'inlineTextStyle',
                            'backgroundImage',
                            'backgroundColor',
                        ].includes(key);
                    if (comment != null &&
                        comment &&
                        (shouldShowComments || !isComponentSpecificComment)) {
                        hasComments = true;
                        attributes.push(`<!-- ${comment} -->\n${indent}    ${key}="${value}"`);
                    }
                    else {
                        attributes.push(`${key}="${value}"`);
                    }
                }
            }
        }
        const attributesString = attributes.length > 0
            ? hasComments || attributes.length >= 3
                ? '\n' +
                    indent +
                    '    ' +
                    attributes.join('\n' + indent + '    ') +
                    '\n' +
                    indent
                : ' ' + attributes.join(' ')
            : '';
        // Add node comment before the element if present
        if (node.comment) {
            xml += `${indent}<!-- ${node.comment} -->\n`;
        }
        // Check if this should be a self-closing tag
        const hasContent = node.content && node.content.trim() !== '';
        const hasChildren = node.children && node.children.length > 0;
        const isSelfClosing = !hasContent && !hasChildren && !node.disableSelfClosing;
        if (isSelfClosing) {
            const line = `${indent}<${nodeName}${attributesString} />\n`;
            xml += line;
            charCount += line.length;
        }
        else {
            const openTag = `${indent}<${nodeName}${attributesString}>\n`;
            xml += openTag;
            charCount += openTag.length;
            if (node.content) {
                const contentLine = `${indent}  ${escapeXml(node.content)}\n`;
                xml += contentLine;
                charCount += contentLine.length;
            }
            if (node.children && node.children.length > 0) {
                // If we're at depth 1 and we've already exceeded the limit, add comment instead of rendering children
                if (currentDepth === 1 && charCount > maxCharacters) {
                    const comment = `${indent}  <!-- Call getNodeXml on this node to get more details, character limit was reached -->\n`;
                    xml += comment;
                    charCount += comment.length;
                }
                else {
                    // Otherwise render children normally
                    const childXml = framerLayersTreeToXml(node.children, {
                        shouldAddNodeIdAlways,
                        indent: indent + '  ',
                        maxCharacters,
                        currentDepth: currentDepth + 1,
                        currentCharCount: charCount,
                    });
                    xml += childXml;
                    charCount += childXml.length;
                }
            }
            const closeTag = `${indent}</${nodeName}>\n`;
            xml += closeTag;
            charCount += closeTag.length;
        }
    }
    return xml;
}
function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
            case "'":
                return '&apos;';
            case '"':
                return '&quot;';
            default:
                return c;
        }
    });
}
export function addNodeCount(tree) {
    const result = [];
    if (tree?.length === 0)
        return result;
    function countNodes(node) {
        let count = 1;
        if (node.children) {
            for (const child of node.children) {
                count += countNodes(child);
            }
        }
        node.count = count;
        return count;
    }
    for (const rootNode of tree) {
        countNodes(rootNode);
    }
    return tree;
}
//# sourceMappingURL=xml.js.map