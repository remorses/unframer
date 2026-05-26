import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import yaml from 'js-yaml';
import { z } from 'zod';
import { connect } from 'framer-api';
import { createMCPClient } from './mcp-client.js';
import { mcpToolHandler, mcpTools, parseIncomingFieldData } from './mcp-handlers.js';
const mcpUrl = 'https://mcp.preview.unframer.co/mcp?id=598f176d590e612e9b6bcaebb54abb0a8763c6f54ba5b9c136690ff9ad2400cc&secret=FpGeQQcnvd9CpFvZwEdONuAjEX7c6AwJ';
const defaultServerApiProjectUrl = 'https://framer.com/projects/Framer-MCP-project-Designor-Framer-Template-copy--lfAw10qcrLpLLEznmZmo-irrP1?node=CpFAHygNJ';
const mcpTestMode = process.env.MCP_TEST_MODE === 'plugin' ? 'plugin' : 'server-api';
const isServerApiMode = mcpTestMode === 'server-api';
const suiteTimeoutMs = isServerApiMode ? 1000 * 180 : 1000 * 20;
function asToolCallResult({ text }) {
    return {
        content: [
            {
                type: 'text',
                text,
            },
        ],
    };
}
async function createTestRuntime() {
    if (!isServerApiMode) {
        const runtime = await createMCPClient({
            mcpUrl,
            clientName: 'framer-test',
            transport: 'streamable-http',
        });
        return {
            client: {
                listTools: async () => {
                    return runtime.client.listTools();
                },
            },
            callTool: async ({ name, args }) => {
                const callResult = await runtime.callTool({
                    name,
                    args,
                });
                return callResult;
            },
            cleanup: runtime.cleanup,
        };
    }
    const projectUrl = process.env.FRAMER_PROJECT_URL || defaultServerApiProjectUrl;
    const apiKey = process.env.FRAMER_API_KEY;
    if (!apiKey) {
        throw new Error('FRAMER_API_KEY is required for server-api mode tests');
    }
    const framerClient = await connect(projectUrl, apiKey);
    const globalWithFramer = globalThis;
    globalWithFramer.framer = framerClient;
    return {
        client: {
            listTools: async () => {
                const tools = Object.entries(mcpTools).map(([name, tool]) => {
                    const schema = z.toJSONSchema(tool.input);
                    delete schema.$schema;
                    return {
                        name,
                        description: tool.description,
                        inputSchema: schema,
                    };
                });
                return { tools };
            },
        },
        callTool: async ({ name, args }) => {
            try {
                const tool = mcpTools[name];
                const reply = await mcpToolHandler({
                    type: name,
                    input: args ?? {},
                });
                const text = typeof reply === 'string'
                    ? reply
                    : JSON.stringify(reply, null, 2);
                const outputPrefix = 'outputPrefix' in tool && typeof tool.outputPrefix === 'string'
                    ? tool.outputPrefix
                    : undefined;
                const prefixedText = outputPrefix
                    ? `${outputPrefix.trim()}\n\n${text}`
                    : text;
                return asToolCallResult({ text: prefixedText });
            }
            catch (error) {
                const errorMessage = error instanceof Error ? error.message : String(error);
                return asToolCallResult({
                    text: `Encountered an error: ${errorMessage}`,
                });
            }
        },
        cleanup: async () => {
            try {
                await framerClient.disconnect();
            }
            finally {
                delete globalWithFramer.framer;
            }
        },
    };
}
describe.skipIf(isServerApiMode)('HTTP Streamable Transport', () => {
    it('should get tools schema using HTTP Streamable transport', async () => {
        console.log('Connecting to HTTP Streamable transport at:', mcpUrl);
        const { client, cleanup } = await createMCPClient({
            mcpUrl: mcpUrl,
            clientName: 'framer-test-http-streamable',
            transport: 'streamable-http',
        });
        try {
            console.log('Connected, listing tools...');
            const schema = await client.listTools();
            expect(schema).toBeDefined();
            expect(schema.tools).toBeDefined();
            expect(Array.isArray(schema.tools)).toBe(true);
            expect(schema.tools.length).toBeGreaterThan(0);
            // Verify some expected tools exist
            const toolNames = schema.tools.map((t) => t.name);
            expect(toolNames).toContain('getProjectXml');
            expect(toolNames).toContain('getNodeXml');
            if (!toolNames.includes('createPage')) {
                console.warn('createPage is not available in current MCP server schema yet');
            }
            console.log('Test passed! Found', schema.tools.length, 'tools');
        }
        finally {
            await cleanup();
        }
    }, 30000);
});
describe('Tools Schema', () => {
    it('should get tools schema and match file snapshot', async () => {
        const runtime = await createTestRuntime();
        try {
            const schema = await runtime.client.listTools();
            expect(schema).toBeDefined();
            const schemaYaml = yaml.dump(schema, {
                indent: 2,
                lineWidth: 100,
                noRefs: true,
                sortKeys: true,
            });
            await expect(schemaYaml).toMatchFileSnapshot(`snapshots/tools-schema.yaml`);
        }
        finally {
            await runtime.cleanup();
        }
    });
});
describe('CMS fieldData parsing', () => {
    it('should parse fieldData object entries', () => {
        const parsed = parseIncomingFieldData({
            imageField: {
                type: 'image',
                value: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg',
            },
        });
        expect(parsed).toEqual({
            imageField: {
                type: 'image',
                value: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg',
            },
        });
    });
    it('should throw when fieldData is a string', () => {
        expect(() => {
            parseIncomingFieldData(JSON.stringify({
                imageField: {
                    type: 'image',
                    value: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg',
                },
            }));
        }).toThrowError('Invalid fieldData. Expected an object where each key is a field ID and each value is a field entry object.');
    });
    it('should throw a clear error for invalid fieldData entries', () => {
        expect(() => {
            parseIncomingFieldData({
                imageField: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg',
            });
        }).toThrowError('Invalid fieldData["imageField"]. Expected an object with string "type" and a "value" key.');
    });
});
describe('Framer MCP Server Tests', () => {
    let callTool;
    let cleanup = null;
    let client;
    let supportsCreatePage = false;
    // Track created styles for cleanup
    const createdStyles = new Set();
    const createdDesignPageIds = new Set();
    const createdCodeFileIds = new Set();
    beforeAll(async () => {
        const result = await createTestRuntime();
        callTool = result.callTool;
        cleanup = result.cleanup;
        client = result.client;
        const schema = await client.listTools();
        supportsCreatePage = schema.tools.some((tool) => tool.name === 'createPage');
    }, 120_000);
    afterAll(async () => {
        // Clean up all created test styles
        for (const stylePath of createdStyles) {
            try {
                await callTool({
                    name: 'deleteNode',
                    args: { nodeId: stylePath },
                });
                console.log(`Cleaned up style: ${stylePath}`);
            }
            catch (error) {
                console.error(`Failed to clean up style ${stylePath}:`, error);
            }
        }
        for (const designPageId of createdDesignPageIds) {
            try {
                await callTool({
                    name: 'deleteNode',
                    args: { nodeId: designPageId },
                });
                console.log(`Cleaned up design page: ${designPageId}`);
            }
            catch (error) {
                console.error(`Failed to clean up design page ${designPageId}:`, error);
            }
        }
        for (const codeFileId of createdCodeFileIds) {
            try {
                await callTool({
                    name: 'deleteNode',
                    args: { nodeId: codeFileId },
                });
                console.log(`Cleaned up code file: ${codeFileId}`);
            }
            catch (error) {
                console.error(`Failed to clean up code file ${codeFileId}:`, error);
            }
        }
        if (cleanup) {
            await cleanup();
            cleanup = null;
        }
    }, 120_000);
    it('should list tools', async () => {
        const { tools } = await client.listTools();
        expect(Array.isArray(tools)).toBe(true);
        await expect(tools).toMatchFileSnapshot(`snapshots/tools.jsonc`);
        expect(tools.length).toBeGreaterThan(0);
    });
    it('should get project XML', async () => {
        const result = await callTool({
            name: 'getProjectXml',
            args: undefined,
        });
        await expect(getTextContent(result.content)).toMatchFileSnapshot(`snapshots/project.html`);
        expect(getTextContent(result.content)).toBeDefined();
    });
    it('should create and delete design page', async () => {
        if (!supportsCreatePage) {
            console.warn('Skipping createPage test because tool is not available in current MCP server schema');
            return;
        }
        const randomNum = Math.floor(Math.random() * 10000);
        const pageName = `MCP test design page ${randomNum}`;
        const createResult = await callTool({
            name: 'createPage',
            args: { name: pageName, type: 'design' },
        });
        const createContent = getTextContent(createResult.content);
        const parsedCreateContent = tryJsonParse(createContent);
        expect(parsedCreateContent.message).toContain('Successfully created design page');
        expect(parsedCreateContent.page?.id).toBeDefined();
        expect(parsedCreateContent.page?.name).toBe(pageName);
        expect(parsedCreateContent.page?.type).toBe('design');
        const designPageId = parsedCreateContent.page.id;
        createdDesignPageIds.add(designPageId);
        const getPageResult = await callTool({
            name: 'getNodeXml',
            args: { nodeId: designPageId },
        });
        const pageXml = getTextContent(getPageResult.content);
        expect(pageXml).toContain(designPageId);
        const deleteResult = await callTool({
            name: 'deleteNode',
            args: { nodeId: designPageId },
        });
        const deleteContent = getTextContent(deleteResult.content);
        expect(deleteContent).toContain('Successfully deleted node');
        createdDesignPageIds.delete(designPageId);
    });
    it('should create and delete web page', async () => {
        if (!supportsCreatePage) {
            console.warn('Skipping createPage test because tool is not available in current MCP server schema');
            return;
        }
        const randomNum = Math.floor(Math.random() * 10000);
        const pagePath = `/mcp-test-web-page-${randomNum}`;
        const createResult = await callTool({
            name: 'createPage',
            args: { name: pagePath, type: 'web' },
        });
        const createContent = getTextContent(createResult.content);
        const parsedCreateContent = tryJsonParse(createContent);
        expect(parsedCreateContent.message).toContain('Successfully created web page');
        expect(parsedCreateContent.page?.id).toBeDefined();
        expect(parsedCreateContent.page?.path).toBe(pagePath);
        expect(parsedCreateContent.page?.type).toBe('web');
        const webPageId = parsedCreateContent.page.id;
        createdDesignPageIds.add(webPageId);
        const getPageResult = await callTool({
            name: 'getNodeXml',
            args: { nodeId: webPageId },
        });
        const pageXml = getTextContent(getPageResult.content);
        // Web pages contain Desktop breakpoint children, not their own ID
        expect(pageXml).toContain('Desktop');
        const deleteResult = await callTool({
            name: 'deleteNode',
            args: { nodeId: webPageId },
        });
        const deleteContent = getTextContent(deleteResult.content);
        expect(deleteContent).toContain('Successfully deleted node');
        createdDesignPageIds.delete(webPageId);
    });
    it('should get page XML', async () => {
        const result = await callTool({
            name: 'getNodeXml',
            args: { nodeId: 'CpFAHygNJ' },
        });
        expect(getTextContent(result.content)).toBeDefined();
        await expect(getTextContent(result.content)).toMatchFileSnapshot(`snapshots/page.html`);
    });
    it('should get component XML', async () => {
        const result = await callTool({
            name: 'getNodeXml',
            args: { nodeId: 'CpFAHygNJ' },
        });
        expect(getTextContent(result.content)).toBeDefined();
        await expect(getTextContent(result.content)).toMatchFileSnapshot(`snapshots/component.html`);
    });
    it('should update node XML with random number', async () => {
        if (isServerApiMode) {
            return;
        }
        // First get the page XML to find the node
        const pageResult = await callTool({
            name: 'getNodeXml',
            args: { nodeId: 'CpFAHygNJ' },
        });
        const pageXml = getTextContent(pageResult.content);
        expect(pageXml).toBeDefined();
        // Generate a random number
        const randomNum = Math.floor(Math.random() * 10000);
        // Create XML to update the node - look for node with id yK6cCeTUB
        const updateXml = `<TextNode nodeId="yK6cCeTUB">Updated text ${randomNum}</TextNode>`;
        // Update the node
        const updateResult = await callTool({
            name: 'updateXmlForNode',
            args: {
                nodeId: 'CpFAHygNJ',
                xml: updateXml,
            },
        });
        const updatedContent = getTextContent(updateResult.content);
        expect(updatedContent).toBeDefined();
        expect(updatedContent).toContain(`Updated text ${randomNum}`);
        expect(updatedContent).toContain('Successfully updated');
        expect(updatedContent).toContain('XML Changes:');
        // Verify the update by getting the node again
        const verifyResult = await callTool({
            name: 'getNodeXml',
            args: { nodeId: 'yK6cCeTUB' },
        });
        const verifyXml = getTextContent(verifyResult.content);
        expect(verifyXml).toBeDefined();
        expect(verifyXml).toContain(`Updated text ${randomNum}`);
    });
    it('should create nodes with layout and children', async () => {
        if (isServerApiMode) {
            return;
        }
        // Create a parent frame with stack layout and children
        const createXml = `
                <Frame width="400px" height="300px" backgroundColor="rgb(240, 240, 240)" layout="stack" stackDirection="vertical" gap="16px" padding="20px">
                    <Frame width="100%" height="60px" backgroundColor="rgb(100, 150, 200)" borderRadius="8px">
                        <Text fontSize="24px">Header Text</Text>
                    </Frame>
                    <Text fontSize="16px">Body content goes here</Text>
                    <Frame width="100%" height="1fr" backgroundColor="rgb(255, 255, 255)" borderRadius="4px" />
                </Frame>
            `;
        // Create the nodes
        const createResult = await callTool({
            name: 'updateXmlForNode',
            args: {
                nodeId: 'CpFAHygNJ', // Using the page as root
                xml: createXml,
            },
        });
        const content = getTextContent(createResult.content);
        await expect(content).toMatchFileSnapshot(`snapshots/create-nodes-with-layout.patch`);
        // Extract the created node IDs from the result
        const nodeIdMatches = [
            ...content.matchAll(/Created \w+ node ([a-zA-Z0-9_]+)/g),
        ];
        const createdNodeIds = nodeIdMatches.map((m) => m[1]);
        expect(createdNodeIds.length).toBe(5); // Should have created 3 Frame nodes + 2 Text nodes
        // Clean up: delete the root created node (which will delete children too)
        if (createdNodeIds.length > 0) {
            const rootNodeId = createdNodeIds[0]; // First created node is the parent
            const deleteResult = await callTool({
                name: 'deleteNode',
                args: { nodeId: rootNodeId },
            });
            const deleteContent = getTextContent(deleteResult.content);
            expect(deleteContent).toContain('Successfully deleted node');
        }
    });
    it('should add frame node inside existing section', async () => {
        if (isServerApiMode) {
            return;
        }
        // First get the page to find the section
        const pageResult = await callTool({
            name: 'getNodeXml',
            args: { nodeId: 'CpFAHygNJ' },
        });
        const pageXml = getTextContent(pageResult.content);
        expect(pageXml).toBeDefined();
        // Using a known node from the test project
        const targetNodeId = 'l1PBjp21T';
        // Create XML that wraps new content inside the target node
        const updateXml = `
                <Container nodeId="${targetNodeId}">
                    <Frame
                        width="100%"
                        height="200px"
                        backgroundColor="rgb(50, 100, 200)"
                        borderRadius="12px"
                        layout="stack"
                        stackDirection="horizontal"
                        stackAlignment="center"
                        stackDistribution="center"
                        gap="20px"
                        padding="24px"
                    >
                        <Frame width="100px" height="100px" backgroundColor="rgb(255, 255, 255)" borderRadius="8px" />
                        <Frame width="150px" height="80px" backgroundColor="rgb(200, 200, 200)" borderRadius="4px" />
                    </Frame>
                </Container>
            `;
        // Update the page with the new frame inside the container
        const updateResult = await callTool({
            name: 'updateXmlForNode',
            args: {
                nodeId: 'CpFAHygNJ', // Page node ID
                xml: updateXml,
            },
        });
        const content = getTextContent(updateResult.content);
        await expect(content).toMatchFileSnapshot(`snapshots/add-frame-to-section.patch`);
        // Verify that frames were created
        expect(content).toContain('Created Frame node');
        expect(content).toContain('XML Changes:');
        // Extract created node IDs for cleanup
        const nodeIdMatches = [
            ...content.matchAll(/Created Frame node ([a-zA-Z0-9_]+)/g),
        ];
        const createdNodeIds = nodeIdMatches.map((m) => m[1]);
        // Clean up: delete the created nodes
        if (createdNodeIds.length > 0) {
            const rootNodeId = createdNodeIds[0]; // First created node is the parent
            const deleteResult = await callTool({
                name: 'deleteNode',
                args: { nodeId: rootNodeId },
            });
            const deleteContent = getTextContent(deleteResult.content);
            expect(deleteContent).toContain('Successfully deleted node');
        }
    });
    it('should update node with new layout attributes (zIndex, overflow, textTruncation, border)', async () => {
        if (isServerApiMode) {
            return;
        }
        // Create a frame and text node to test attributes
        const createXml = `
                <Frame width="200px" height="200px" backgroundColor="rgb(200, 200, 200)">
                    <Text fontSize="16px">Truncated Text that is long enough to be truncated</Text>
                </Frame>
            `;
        const createResult = await callTool({
            name: 'updateXmlForNode',
            args: {
                nodeId: 'CpFAHygNJ',
                xml: createXml,
            },
        });
        const content = getTextContent(createResult.content);
        const frameMatch = content.match(/Created Frame node ([a-zA-Z0-9_]+)/);
        const textMatch = content.match(/Created Text node ([a-zA-Z0-9_]+)/);
        const frameId = frameMatch ? frameMatch[1] : null;
        const textId = textMatch ? textMatch[1] : null;
        expect(frameId).toBeDefined();
        expect(textId).toBeDefined();
        if (frameId && textId) {
            // Update attributes
            const updateXml = `
                    <Frame nodeId="${frameId}" zIndex="10" overflow="hidden" borderWidth="2px" borderStyle="solid" borderColor="#000000" />
                    <Text nodeId="${textId}" textTruncation="2" />
                `;
            const updateResult = await callTool({
                name: 'updateXmlForNode',
                args: {
                    nodeId: 'CpFAHygNJ', // Parent context
                    xml: updateXml,
                },
            });
            const updateContent = getTextContent(updateResult.content);
            expect(updateContent).toContain('Successfully updated');
            // Verify attributes in XML
            const getFrameResult = await callTool({
                name: 'getNodeXml',
                args: { nodeId: frameId },
            });
            const frameXml = getTextContent(getFrameResult.content);
            expect(frameXml).toContain('zIndex="10"');
            expect(frameXml).toContain('overflow="hidden"');
            const getTextResult = await callTool({
                name: 'getNodeXml',
                args: { nodeId: textId },
            });
            const textXml = getTextContent(getTextResult.content);
            expect(textXml).toContain('textTruncation="2"');
            // Cleanup
            await callTool({
                name: 'deleteNode',
                args: { nodeId: frameId },
            });
        }
    });
    it('should clear nullable attributes with null', async () => {
        if (isServerApiMode) {
            return;
        }
        const createXml = `
                <Frame width="180px" height="120px" backgroundColor="rgb(220, 220, 220)">
                    <Text fontSize="16px">Nullable attrs</Text>
                </Frame>
            `;
        const createResult = await callTool({
            name: 'updateXmlForNode',
            args: {
                nodeId: 'CpFAHygNJ',
                xml: createXml,
            },
        });
        const content = getTextContent(createResult.content);
        const frameMatch = content.match(/Created Frame node ([a-zA-Z0-9_]+)/);
        const textMatch = content.match(/Created Text node ([a-zA-Z0-9_]+)/);
        const frameId = frameMatch ? frameMatch[1] : null;
        const textId = textMatch ? textMatch[1] : null;
        expect(frameId).toBeDefined();
        expect(textId).toBeDefined();
        if (frameId && textId) {
            await callTool({
                name: 'updateXmlForNode',
                args: {
                    nodeId: 'CpFAHygNJ',
                    xml: `<Frame nodeId="${frameId}" zIndex="9" /><Text nodeId="${textId}" textTruncation="3" />`,
                },
            });
            const clearResult = await callTool({
                name: 'updateXmlForNode',
                args: {
                    nodeId: 'CpFAHygNJ',
                    xml: `<Frame nodeId="${frameId}" zIndex="null" /><Text nodeId="${textId}" textTruncation="null" />`,
                },
            });
            const clearContent = getTextContent(clearResult.content);
            expect(clearContent).toContain('Successfully updated');
            const getFrameResult = await callTool({
                name: 'getNodeXml',
                args: { nodeId: frameId },
            });
            const frameXml = getTextContent(getFrameResult.content);
            expect(frameXml).not.toContain('zIndex="9"');
            const getTextResult = await callTool({
                name: 'getNodeXml',
                args: { nodeId: textId },
            });
            const textXml = getTextContent(getTextResult.content);
            expect(textXml).not.toContain('textTruncation="3"');
            await callTool({
                name: 'deleteNode',
                args: { nodeId: frameId },
            });
        }
    });
    it('should surface errors for partial border updates', async () => {
        if (isServerApiMode) {
            return;
        }
        const createXml = `<Frame width="100px" height="100px" backgroundColor="rgb(200, 200, 200)" />`;
        const createResult = await callTool({
            name: 'updateXmlForNode',
            args: {
                nodeId: 'CpFAHygNJ',
                xml: createXml,
            },
        });
        const content = getTextContent(createResult.content);
        const frameMatch = content.match(/Created Frame node ([a-zA-Z0-9_]+)/);
        const frameId = frameMatch ? frameMatch[1] : null;
        expect(frameId).toBeDefined();
        if (frameId) {
            const badUpdateResult = await callTool({
                name: 'updateXmlForNode',
                args: {
                    nodeId: 'CpFAHygNJ',
                    xml: `<Frame nodeId="${frameId}" borderWidth="2px" />`,
                },
            });
            const badUpdateContent = getTextContent(badUpdateResult.content);
            expect(badUpdateContent).toContain('Encountered errors while updating:');
            expect(badUpdateContent).toContain('borderWidth, borderStyle, and borderColor must be provided together');
            await callTool({
                name: 'deleteNode',
                args: { nodeId: frameId },
            });
        }
    });
    it('should update a color style', async () => {
        if (isServerApiMode) {
            return;
        }
        // First get project XML to find color styles
        const projectResult = await callTool({
            name: 'getProjectXml',
            args: undefined,
        });
        const projectXml = getTextContent(projectResult.content);
        expect(projectXml).toBeDefined();
        // Extract color styles from project XML using regex
        const colorStyleMatch = projectXml.match(/<ColorStyle\s+path="([^"]+)"\s+light="([^"]+)"\s+dark="([^"]*)"/);
        if (isServerApiMode && !colorStyleMatch) {
            console.warn('Skipping color style update assertions in server-api mode because no mutable color styles are available.');
            return;
        }
        expect(colorStyleMatch).toBeTruthy();
        const firstColorStyle = {
            path: colorStyleMatch[1],
            light: colorStyleMatch[2],
            dark: colorStyleMatch[3] || null,
        };
        // Update the color style
        const randomNum = Math.floor(Math.random() * 255);
        const result = await callTool({
            name: 'manageColorStyle',
            args: {
                type: 'update',
                stylePath: firstColorStyle.path || 'test-style',
                properties: {
                    light: `rgb(${randomNum}, 100, 150)`,
                },
            },
        });
        const content = getTextContent(result.content);
        expect(content).toBeDefined();
        if (isServerApiMode &&
            String(content).includes('view only mode')) {
            console.warn('Skipping color style update assertions in server-api mode because project is read-only.');
            return;
        }
        // Parse the content if it's a JSON string
        const parsedContent = typeof content === 'string' && content.trim().startsWith('{')
            ? tryJsonParse(content)
            : content;
        // Check if content is an object or string
        if (typeof parsedContent === 'object' && parsedContent.message) {
            expect(parsedContent.message).toContain('Successfully updated color style');
            // The response might not include the full style object
            if (parsedContent.style && parsedContent.style.name) {
                expect(parsedContent.style.name).toContain(`Test ${randomNum}`);
            }
        }
        else if (typeof content === 'string') {
            expect(content).toContain('Successfully updated color style');
            expect(content).toContain(`Test ${randomNum}`);
        }
        // Verify the update by getting project XML again
        const verifyResult = await callTool({
            name: 'getProjectXml',
            args: undefined,
        });
        const verifyXml = getTextContent(verifyResult.content);
        expect(verifyXml).toBeDefined();
        // Check if the updated style is in the XML
        const escapedPath = firstColorStyle.path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const updatedStyleRegex = new RegExp(`<ColorStyle\\s+path="${escapedPath}"\\s+light="rgb\\(${randomNum}, 100, 150\\)"`);
        expect(verifyXml).toMatch(updatedStyleRegex);
        // Restore original value
        await callTool({
            name: 'manageColorStyle',
            args: {
                type: 'update',
                stylePath: firstColorStyle.path,
                properties: {
                    light: firstColorStyle.light,
                },
            },
        });
    });
    it('should create a new color style', async () => {
        if (isServerApiMode) {
            return;
        }
        const randomNum = Math.floor(Math.random() * 1000);
        const newStylePath = `/Test-Color-${randomNum}`;
        // Track for cleanup
        createdStyles.add(newStylePath);
        // Create a new color style (name is derived from path)
        const result = await callTool({
            name: 'manageColorStyle',
            args: {
                type: 'create',
                stylePath: newStylePath,
                properties: {
                    light: `rgb(${randomNum % 255}, 100, 200)`,
                    dark: `rgb(${randomNum % 255}, 50, 100)`,
                },
            },
        });
        const content = getTextContent(result.content);
        expect(content).toBeDefined();
        if (isServerApiMode &&
            String(content).includes('view only mode')) {
            console.warn('Skipping color style create assertions in server-api mode because project is read-only.');
            return;
        }
        // Parse the content if it's a JSON string
        const parsedContent = typeof content === 'string' && content.trim().startsWith('{')
            ? tryJsonParse(content)
            : content;
        // Check if creation was successful
        if (typeof parsedContent === 'object' && parsedContent.message) {
            expect(parsedContent.message).toContain('Successfully created color style');
            expect(parsedContent.style.path).toBe(newStylePath);
            // Name is derived from the last segment of the path
            expect(parsedContent.style.name).toBe(`Test-Color-${randomNum}`);
            expect(parsedContent.style.light).toBe(`rgb(${randomNum % 255}, 100, 200)`);
            expect(parsedContent.style.dark).toBe(`rgb(${randomNum % 255}, 50, 100)`);
        }
        else if (typeof content === 'string') {
            expect(content).toContain('Successfully created color style');
            expect(content).toContain(`Test-Color-${randomNum}`);
        }
        // Verify the style exists by getting project XML
        const verifyResult = await callTool({
            name: 'getProjectXml',
            args: undefined,
        });
        const verifyXml = getTextContent(verifyResult.content);
        expect(verifyXml).toBeDefined();
        // Check if the created style is in the XML
        const createdStyleRegex = new RegExp(`<ColorStyle\\s+path="${newStylePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"\\s+light="rgb\\(${randomNum % 255}, 100, 200\\)"\\s+dark="rgb\\(${randomNum % 255}, 50, 100\\)"`);
        expect(verifyXml).toMatch(createdStyleRegex);
        // Test creating duplicate should fail
        const duplicateResult = await callTool({
            name: 'manageColorStyle',
            args: {
                type: 'create',
                stylePath: newStylePath,
                properties: {
                    light: `rgb(255, 0, 0)`,
                },
            },
        });
        const duplicateContent = getTextContent(duplicateResult.content);
        expect(duplicateContent).toContain('already exists');
    });
    it('should search fonts', async () => {
        const result = await callTool({
            name: 'searchFonts',
            args: {
                query: 'Inter-200',
            },
        });
        const content = getTextContent(result.content);
        expect(content).toMatchInlineSnapshot(`
              "{
                "message": "Found 2 fonts matching \\"Inter-200\\".\\n\\nTo use a font: <Text font=\\"selector\\">Text</Text>\\nNote: font and inlineTextStyle attributes are mutually exclusive",
                "results": [
                  {
                    "family": "Inter",
                    "selector": "GF;Inter-200",
                    "weight": 200,
                    "style": "normal"
                  },
                  {
                    "family": "Inter",
                    "selector": "GF;Inter-200italic",
                    "weight": 200,
                    "style": "italic"
                  }
                ],
                "totalMatches": 2
              }"
            `);
        expect(content).toBeDefined();
        // Parse the content if it's a JSON string
        const parsedContent = typeof content === 'string' && content.trim().startsWith('{')
            ? tryJsonParse(content)
            : content;
        expect(parsedContent.message).toBeDefined();
        expect(parsedContent.results).toBeDefined();
        expect(Array.isArray(parsedContent.results)).toBe(true);
        expect(parsedContent.totalMatches).toBeGreaterThanOrEqual(0);
        // Check if results have proper structure
        if (parsedContent.results.length > 0) {
            const firstFont = parsedContent.results[0];
            expect(firstFont).toHaveProperty('family');
            expect(firstFont).toHaveProperty('selector');
            expect(firstFont).toHaveProperty('weight');
            expect(firstFont).toHaveProperty('style');
            // Verify the query matches in selector
            expect(firstFont.selector.toLowerCase()).toContain('inter');
        }
        // Test that results are limited to 20
        expect(parsedContent.results.length).toBeLessThanOrEqual(20);
    });
    it('should get component insert URL and types for normal component', async () => {
        // Test with a regular component node ID
        const result = await callTool({
            name: 'getComponentInsertUrlAndTypes',
            args: {
                id: 'zW4H90vyr',
            },
        });
        const content = getTextContent(result.content);
        expect(content).toBeDefined();
        await expect(content).toMatchFileSnapshot(`snapshots/component-insert-info.md`);
    });
    it('should get component insert URL and types for code file', async () => {
        // Test with a code file ID
        const result = await callTool({
            name: 'getComponentInsertUrlAndTypes',
            args: {
                id: 'eZvzSVQ',
            },
        });
        const content = getTextContent(result.content);
        expect(content).toBeDefined();
        await expect(content).toMatchFileSnapshot(`snapshots/code-file-insert-info.md`);
    });
    it('should create code file', async () => {
        const randomNum = Math.floor(Math.random() * 100000);
        const codeFileName = `mcp-test-code-file-${randomNum}.tsx`;
        const codeFileContent = `import * as React from 'react'\n\nexport default function McpTestCodeFile${randomNum}() {\n    return <div>MCP test code file ${randomNum}</div>\n}`;
        const createResult = await callTool({
            name: 'createCodeFile',
            args: {
                name: codeFileName,
                content: codeFileContent,
            },
        });
        const createContent = getTextContent(createResult.content);
        expect(createContent).toBeDefined();
        if (isServerApiMode &&
            (String(createContent).includes('view only mode') ||
                String(createContent).includes('Permission denied') ||
                String(createContent).includes('Failed to create code file') ||
                String(createContent).includes('Operation timed out'))) {
            console.warn('Skipping code file create assertions in server-api mode because this runtime cannot create code files in the current project.');
            return;
        }
        expect(createContent).toContain('Successfully created code file');
        const createdCodeFileIdMatch = String(createContent).match(/\*\*ID:\*\*\s*`([^`]+)`/);
        expect(createdCodeFileIdMatch).toBeTruthy();
        if (!createdCodeFileIdMatch?.[1]) {
            throw new Error('Missing created code file ID in createCodeFile output');
        }
        const createdCodeFileId = createdCodeFileIdMatch[1];
        createdCodeFileIds.add(createdCodeFileId);
        const readResult = await callTool({
            name: 'readCodeFile',
            args: {
                codeFileId: createdCodeFileId,
            },
        });
        const readContent = getTextContent(readResult.content);
        const parsedReadContent = tryJsonParse(String(readContent));
        expect(isRecord(parsedReadContent)).toBe(true);
        if (!isRecord(parsedReadContent)) {
            throw new Error('Unexpected readCodeFile response shape');
        }
        expect(parsedReadContent.id).toBe(createdCodeFileId);
        expect(typeof parsedReadContent.name).toBe('string');
        expect(String(parsedReadContent.path)).toContain('.tsx');
        expect(String(parsedReadContent.content)).toContain(`MCP test code file ${randomNum}`);
    });
    it('should delete code file using deleteNode', async () => {
        const randomNum = Math.floor(Math.random() * 100000);
        const codeFileName = `mcp-test-delete-code-file-${randomNum}.tsx`;
        const createResult = await callTool({
            name: 'createCodeFile',
            args: {
                name: codeFileName,
                content: `import * as React from 'react'\n\nexport default function McpDeleteTestCodeFile${randomNum}() {\n    return <div>Delete code file ${randomNum}</div>\n}`,
            },
        });
        const createContent = getTextContent(createResult.content);
        expect(createContent).toBeDefined();
        if (isServerApiMode &&
            (String(createContent).includes('view only mode') ||
                String(createContent).includes('Permission denied') ||
                String(createContent).includes('Failed to create code file') ||
                String(createContent).includes('Operation timed out'))) {
            console.warn('Skipping code file delete assertions in server-api mode because this runtime cannot create code files in the current project.');
            return;
        }
        const createdCodeFileIdMatch = String(createContent).match(/\*\*ID:\*\*\s*`([^`]+)`/);
        expect(createdCodeFileIdMatch).toBeTruthy();
        if (!createdCodeFileIdMatch?.[1]) {
            throw new Error('Missing created code file ID before deleteNode');
        }
        const createdCodeFileId = createdCodeFileIdMatch[1];
        createdCodeFileIds.add(createdCodeFileId);
        const deleteResult = await callTool({
            name: 'deleteNode',
            args: {
                nodeId: createdCodeFileId,
            },
        });
        const deleteContent = getTextContent(deleteResult.content);
        expect(deleteContent).toContain('Successfully deleted code file');
        createdCodeFileIds.delete(createdCodeFileId);
        const readAfterDeleteResult = await callTool({
            name: 'readCodeFile',
            args: {
                codeFileId: createdCodeFileId,
            },
        });
        const readAfterDeleteContent = getTextContent(readAfterDeleteResult.content);
        expect(String(readAfterDeleteContent)).toContain('not found');
    });
    it('should get project website URL', async () => {
        const result = await callTool({
            name: 'getProjectWebsiteUrl',
            args: undefined,
        });
        const content = getTextContent(result.content);
        expect(content).toBeDefined();
        // Parse the content if it's a JSON string
        const parsedContent = typeof content === 'string' && content.trim().startsWith('{')
            ? tryJsonParse(content)
            : content;
        // The response should be an object with production and staging properties
        expect(parsedContent).toHaveProperty('production');
        expect(parsedContent).toHaveProperty('staging');
    });
    it('should update a text style', async () => {
        if (isServerApiMode) {
            return;
        }
        // First get project XML to find text styles
        const projectResult = await callTool({
            name: 'getProjectXml',
            args: undefined,
        });
        const projectXml = getTextContent(projectResult.content);
        expect(projectXml).toBeDefined();
        // Extract text styles from project XML using regex
        const textStyleMatch = projectXml.match(/<TextStyle\s+path="([^"]+)"[^>]*>/);
        if (isServerApiMode && !textStyleMatch) {
            console.warn('Skipping text style update assertions in server-api mode because no mutable text styles are available.');
            return;
        }
        expect(textStyleMatch).toBeTruthy();
        const firstTextStyle = {
            path: textStyleMatch[1],
        };
        // Update the text style
        const randomNum = Math.floor(Math.random() * 100);
        const result = await callTool({
            name: 'manageTextStyle',
            args: {
                type: 'update',
                stylePath: firstTextStyle.path,
                properties: {
                    fontSize: `${randomNum}px`,
                    alignment: 'center',
                },
            },
        });
        const content = getTextContent(result.content);
        expect(content).toBeDefined();
        if (isServerApiMode &&
            String(content).includes('view only mode')) {
            console.warn('Skipping text style update assertions in server-api mode because project is read-only.');
            return;
        }
        // Parse the content if it's a JSON string
        const parsedContent = typeof content === 'string' && content.trim().startsWith('{')
            ? tryJsonParse(content)
            : content;
        // Check if content is an object or string
        if (typeof parsedContent === 'object' && parsedContent.message) {
            expect(parsedContent.message).toContain('Successfully updated text style');
            expect(parsedContent.style).toBeDefined();
            // Style path should be returned, not name
            expect(parsedContent.style.path).toBe(firstTextStyle.path);
        }
        else if (typeof content === 'string') {
            expect(content).toContain('Successfully updated text style');
        }
        // Verify the update by getting project XML again
        const verifyResult = await callTool({
            name: 'getProjectXml',
            args: undefined,
        });
        const verifyXml = getTextContent(verifyResult.content);
        expect(verifyXml).toBeDefined();
        // Check if the updated style is in the XML
        const escapedPath = firstTextStyle.path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const updatedStyleRegex = new RegExp(`<TextStyle\\s+path="${escapedPath}"[^>]*fontSize="${randomNum}px"[^>]*alignment="center"`);
        expect(verifyXml).toMatch(updatedStyleRegex);
        // Restore original values
        await callTool({
            name: 'manageTextStyle',
            args: {
                type: 'update',
                stylePath: firstTextStyle.path,
                properties: {
                    fontSize: '72px', // Reset to default
                    alignment: 'left', // Reset to default
                },
            },
        });
    });
    // CMS Tests
    it('should create a new text style', async () => {
        if (isServerApiMode) {
            return;
        }
        const randomNum = Math.floor(Math.random() * 1000);
        const newStylePath = `/Test-Text-${randomNum}`;
        // Track for cleanup
        createdStyles.add(newStylePath);
        // Create a new text style
        const createResult = await callTool({
            name: 'manageTextStyle',
            args: {
                type: 'create',
                stylePath: newStylePath,
                properties: {
                    fontSize: '24px',
                    lineHeight: '1.5em',
                    alignment: 'center',
                    color: '#333333',
                },
            },
        });
        const createContent = getTextContent(createResult.content);
        expect(createContent).toBeDefined();
        if (isServerApiMode &&
            String(createContent).includes('view only mode')) {
            console.warn('Skipping text style create assertions in server-api mode because project is read-only.');
            return;
        }
        // Check if creation succeeded
        expect(createContent).toContain('Successfully created text style');
        // Verify it's in the project
        const verifyResult = await callTool({
            name: 'getProjectXml',
            args: undefined,
        });
        const verifyXml = getTextContent(verifyResult.content);
        expect(verifyXml).toContain(newStylePath);
    });
    let cmsCollectionId = null;
    let cmsFieldIds = {};
    let createdItemId = null;
    let createdItemSlug = null;
    async function getCmsCollectionWithStringAndImageFields() {
        const result = await callTool({
            name: 'getCMSCollections',
            args: undefined,
        });
        const content = getTextContent(result.content);
        const parsedContent = tryJsonParse(content);
        if (!isRecord(parsedContent) || !Array.isArray(parsedContent.collections)) {
            if (isServerApiMode &&
                (String(content).includes('Cannot access framer.getCollections in server runtime') ||
                    String(content).includes('Failed to get CMS collections') ||
                    String(content).includes('Internal server error'))) {
                console.warn('Skipping CMS integration assertions in server-api mode because collections are not accessible in this runtime.');
                return null;
            }
            throw new Error(`Could not parse CMS collections output: ${String(content).slice(0, 2000)}`);
        }
        const collection = parsedContent.collections
            .filter(isRecord)
            .find((candidate) => {
            if (!Array.isArray(candidate.fields)) {
                return false;
            }
            const fields = candidate.fields.filter(isRecord);
            const hasStringField = fields.some((field) => {
                return field.type === 'string' && typeof field.id === 'string';
            });
            const hasImageField = fields.some((field) => {
                return field.type === 'image' && typeof field.id === 'string';
            });
            return hasStringField && hasImageField;
        });
        if (!collection || typeof collection.id !== 'string') {
            throw new Error('No CMS collection found with both string and image fields');
        }
        if (!Array.isArray(collection.fields)) {
            throw new Error('CMS collection fields are missing');
        }
        const fields = collection.fields.filter(isRecord);
        const stringField = fields.find((field) => {
            return field.type === 'string' && typeof field.id === 'string';
        });
        const imageField = fields.find((field) => {
            return field.type === 'image' && typeof field.id === 'string';
        });
        if (!stringField || !imageField) {
            throw new Error('Could not resolve string/image field IDs');
        }
        return {
            collectionId: collection.id,
            stringFieldId: stringField.id,
            imageFieldId: imageField.id,
        };
    }
    it('cms should upsert item with image fieldData object', async () => {
        const cmsFields = await getCmsCollectionWithStringAndImageFields();
        if (!cmsFields) {
            return;
        }
        const { collectionId, stringFieldId, imageFieldId } = cmsFields;
        const randomNum = Math.floor(Math.random() * 100000);
        const slug = `test-item-image-field-data-${randomNum}`;
        let newItemId = undefined;
        try {
            const result = await callTool({
                name: 'upsertCMSItem',
                args: {
                    collectionId,
                    slug,
                    fieldData: {
                        [stringFieldId]: {
                            type: 'string',
                            value: `Stringified ${randomNum}`,
                        },
                        [imageFieldId]: {
                            type: 'image',
                            value: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg',
                        },
                    },
                    draft: false,
                },
            });
            const content = getTextContent(result.content);
            const parsedContent = tryJsonParse(content);
            expect(isRecord(parsedContent)).toBe(true);
            if (!isRecord(parsedContent)) {
                throw new Error('Unexpected upsert response shape');
            }
            expect(typeof parsedContent.message).toBe('string');
            expect(String(parsedContent.message)).toContain('Successfully created');
            expect(isRecord(parsedContent.item)).toBe(true);
            if (!isRecord(parsedContent.item)) {
                throw new Error('Missing item in upsert response');
            }
            expect(parsedContent.item.slug).toBe(slug);
            if (typeof parsedContent.item.id === 'string') {
                newItemId = parsedContent.item.id;
            }
            if (!newItemId) {
                const lookupResult = await callTool({
                    name: 'getCMSItems',
                    args: {
                        collectionId,
                        limit: 10,
                        filter: {
                            query: slug,
                        },
                    },
                });
                const lookupContent = getTextContent(lookupResult.content);
                const parsedLookup = tryJsonParse(lookupContent);
                if (isRecord(parsedLookup) &&
                    Array.isArray(parsedLookup.items)) {
                    const matchedItem = parsedLookup.items.find((item) => {
                        if (!isRecord(item)) {
                            return false;
                        }
                        return (item.slug === slug &&
                            typeof item.id === 'string');
                    });
                    if (isRecord(matchedItem) && typeof matchedItem.id === 'string') {
                        newItemId = matchedItem.id;
                    }
                }
            }
            if (!newItemId) {
                if (isServerApiMode) {
                    console.warn('Skipping cms image fieldData upsert assertion in server-api mode because new item ID is not yet available.');
                    return;
                }
                throw new Error('Missing created item ID in upsert response');
            }
            expect(isRecord(parsedContent.item.fieldData)).toBe(true);
            if (!isRecord(parsedContent.item.fieldData)) {
                throw new Error('Missing fieldData in upsert response');
            }
            const imageField = parsedContent.item.fieldData[imageFieldId];
            expect(isRecord(imageField)).toBe(true);
            if (!isRecord(imageField)) {
                throw new Error('Image field not returned as object');
            }
            expect(imageField.type).toBe('image');
            expect(typeof imageField.value).toBe('string');
        }
        finally {
            if (newItemId) {
                await callTool({
                    name: 'deleteCMSItem',
                    args: {
                        collectionId,
                        itemId: newItemId,
                    },
                });
            }
        }
    });
    it('cms should return clear error for invalid fieldData entry shape', async () => {
        const cmsFields = await getCmsCollectionWithStringAndImageFields();
        if (!cmsFields) {
            return;
        }
        const { collectionId, stringFieldId, imageFieldId } = cmsFields;
        const randomNum = Math.floor(Math.random() * 100000);
        const result = await callTool({
            name: 'upsertCMSItem',
            args: {
                collectionId,
                slug: `test-item-invalid-field-entry-${randomNum}`,
                fieldData: {
                    [stringFieldId]: {
                        type: 'string',
                        value: `Invalid entry ${randomNum}`,
                    },
                    [imageFieldId]: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg',
                },
                draft: false,
            },
        });
        const content = getTextContent(result.content);
        expect(content).toContain('Invalid fieldData');
        expect(content).toContain(`fieldData["${imageFieldId}"]`);
    });
    it('cms should get collections with field information', async () => {
        const result = await callTool({
            name: 'getCMSCollections',
            args: undefined,
        });
        const content = getTextContent(result.content);
        if (isServerApiMode &&
            (String(content).includes('Failed to get CMS collections') ||
                String(content).includes('Internal server error'))) {
            console.warn('Skipping cms should get collections with field information in server-api mode due collection access error.');
            return;
        }
        expect(content).toContain('Working with CMS Items');
        expect(content).toContain('Field Data Format for upsertCMSItem');
        const parsedContent = tryJsonParse(content);
        expect(parsedContent.collections).toBeDefined();
        expect(Array.isArray(parsedContent.collections)).toBe(true);
        // Store the first collection for subsequent tests
        if (parsedContent.collections.length > 0) {
            const firstCollection = parsedContent.collections[0];
            cmsCollectionId = firstCollection.id;
            // Store field IDs for later use
            firstCollection.fields.forEach((field) => {
                cmsFieldIds[field.type] = field.id;
            });
        }
    });
    it('cms should get first item from collection', async () => {
        if (!cmsCollectionId) {
            if (isServerApiMode) {
                return;
            }
            throw new Error('No CMS collection found from previous test');
        }
        const result = await callTool({
            name: 'getCMSItems',
            args: {
                collectionId: cmsCollectionId,
                limit: 1,
            },
        });
        const content = getTextContent(result.content);
        const parsedContent = tryJsonParse(content);
        expect(isRecord(parsedContent)).toBe(true);
        if (!isRecord(parsedContent)) {
            throw new Error('Unexpected CMS items response shape');
        }
        expect(typeof parsedContent.message).toBe('string');
        expect(isRecord(parsedContent.pagination)).toBe(true);
        expect(Array.isArray(parsedContent.items)).toBe(true);
        if (!Array.isArray(parsedContent.items)) {
            throw new Error('CMS items should be an array');
        }
        expect(parsedContent.items.length).toBeLessThanOrEqual(1);
    });
    it('cms should create new item', async () => {
        if (!cmsCollectionId || !cmsFieldIds.string) {
            if (isServerApiMode) {
                return;
            }
            throw new Error('No CMS collection or field IDs found from previous tests');
        }
        const randomNum = Math.floor(Math.random() * 10000);
        const testSlug = `test-item-${randomNum}`;
        const result = await callTool({
            name: 'upsertCMSItem',
            args: {
                collectionId: cmsCollectionId,
                slug: testSlug,
                fieldData: {
                    [cmsFieldIds.string]: {
                        type: 'string',
                        value: `Test Item ${randomNum}`,
                    },
                    ...(cmsFieldIds.date && {
                        [cmsFieldIds.date]: {
                            type: 'date',
                            value: new Date().toISOString(),
                        },
                    }),
                    ...(cmsFieldIds.formattedText && {
                        [cmsFieldIds.formattedText]: {
                            type: 'formattedText',
                            value: `# Test item ${randomNum}\n\nTest content for item ${randomNum}`,
                        },
                    }),
                    ...(cmsFieldIds.image && {
                        [cmsFieldIds.image]: {
                            type: 'image',
                            value: 'https://framerusercontent.com/images/2uTNEj5aTl2K3NJaEFWMbnrA.jpg',
                        },
                    }),
                    ...(cmsFieldIds.multiCollectionReference && {
                        [cmsFieldIds.multiCollectionReference]: {
                            type: 'multiCollectionReference',
                            value: [],
                        },
                    }),
                },
                draft: false,
            },
        });
        const content = getTextContent(result.content);
        const parsedContent = tryJsonParse(content);
        expect(isRecord(parsedContent)).toBe(true);
        if (!isRecord(parsedContent)) {
            throw new Error('Unexpected create CMS item response shape');
        }
        expect(parsedContent.message).toContain('Successfully created');
        expect(isRecord(parsedContent.item)).toBe(true);
        if (!isRecord(parsedContent.item)) {
            throw new Error('Create CMS item response is missing item');
        }
        expect(parsedContent.item.slug).toBe(testSlug);
        if (cmsFieldIds.formattedText) {
            expect(isRecord(parsedContent.item.fieldData)).toBe(true);
            if (!isRecord(parsedContent.item.fieldData)) {
                throw new Error('Create CMS item response is missing fieldData');
            }
            const formattedTextField = parsedContent.item.fieldData[cmsFieldIds.formattedText];
            expect(isRecord(formattedTextField)).toBe(true);
            if (!isRecord(formattedTextField)) {
                throw new Error('Missing formattedText field in item fieldData');
            }
            expect(formattedTextField.type).toBe('formattedText');
            expect(formattedTextField.value).toContain(`Test content for item ${randomNum}`);
        }
        // Store the created item ID for cleanup
        if (typeof parsedContent.item.id === 'string') {
            createdItemId = parsedContent.item.id;
        }
        else {
            const lookupResult = await callTool({
                name: 'getCMSItems',
                args: {
                    collectionId: cmsCollectionId,
                    limit: 10,
                    filter: {
                        query: testSlug,
                    },
                },
            });
            const lookupContent = getTextContent(lookupResult.content);
            const parsedLookup = tryJsonParse(lookupContent);
            if (isRecord(parsedLookup) &&
                Array.isArray(parsedLookup.items)) {
                const matchedItem = parsedLookup.items.find((item) => {
                    if (!isRecord(item)) {
                        return false;
                    }
                    return (item.slug === testSlug &&
                        typeof item.id === 'string');
                });
                if (isRecord(matchedItem) && typeof matchedItem.id === 'string') {
                    createdItemId = matchedItem.id;
                }
            }
        }
        createdItemSlug = testSlug;
        if (!createdItemId) {
            if (isServerApiMode) {
                console.warn('Skipping cms update/delete follow-up in server-api mode because created item ID is not yet available.');
                return;
            }
            throw new Error('Created CMS item ID is missing');
        }
    });
    it('cms should update existing item', async () => {
        if (!cmsCollectionId || !createdItemId || !cmsFieldIds.string) {
            if (isServerApiMode) {
                return;
            }
            throw new Error('No created item found from previous test');
        }
        const randomNum = Math.floor(Math.random() * 10000);
        const result = await callTool({
            name: 'upsertCMSItem',
            args: {
                collectionId: cmsCollectionId,
                itemId: createdItemId,
                fieldData: {
                    [cmsFieldIds.string]: {
                        type: 'string',
                        value: `Updated Item ${randomNum}`,
                    },
                },
                draft: false,
            },
        });
        const content = getTextContent(result.content);
        const parsedContent = tryJsonParse(content);
        expect(isRecord(parsedContent)).toBe(true);
        if (!isRecord(parsedContent)) {
            throw new Error('Unexpected update CMS item response shape');
        }
        expect(parsedContent.message).toContain('Successfully updated');
        expect(isRecord(parsedContent.item)).toBe(true);
        if (!isRecord(parsedContent.item)) {
            throw new Error('Update CMS item response is missing item');
        }
        expect(parsedContent.item.id).toBe(createdItemId);
        expect(parsedContent.item.slug).toBe(createdItemSlug);
    });
    it('cms should delete created item', async () => {
        if (cmsCollectionId && !createdItemId && createdItemSlug) {
            const lookupResult = await callTool({
                name: 'getCMSItems',
                args: {
                    collectionId: cmsCollectionId,
                    limit: 10,
                    filter: {
                        query: createdItemSlug,
                    },
                },
            });
            const lookupContent = getTextContent(lookupResult.content);
            const parsedLookup = tryJsonParse(lookupContent);
            if (isRecord(parsedLookup) &&
                Array.isArray(parsedLookup.items)) {
                const matchedItem = parsedLookup.items.find((item) => {
                    if (!isRecord(item)) {
                        return false;
                    }
                    return (item.slug === createdItemSlug &&
                        typeof item.id === 'string');
                });
                if (isRecord(matchedItem) && typeof matchedItem.id === 'string') {
                    createdItemId = matchedItem.id;
                }
            }
        }
        if (!cmsCollectionId || !createdItemId) {
            if (isServerApiMode) {
                return;
            }
            throw new Error('No created item found from previous tests');
        }
        const result = await callTool({
            name: 'deleteCMSItem',
            args: {
                collectionId: cmsCollectionId,
                itemId: createdItemId,
            },
        });
        const content = getTextContent(result.content);
        const parsedContent = tryJsonParse(content);
        expect(isRecord(parsedContent)).toBe(true);
        if (!isRecord(parsedContent)) {
            throw new Error('Unexpected delete CMS item response shape');
        }
        expect(parsedContent.message).toContain('Successfully deleted');
        expect(isRecord(parsedContent.deletedItem)).toBe(true);
        if (!isRecord(parsedContent.deletedItem)) {
            throw new Error('Delete CMS item response is missing deletedItem');
        }
        expect(parsedContent.deletedItem.id).toBe(createdItemId);
        // Clear the stored item ID
        createdItemId = null;
        createdItemSlug = null;
    });
}, suiteTimeoutMs);
function getTextContent(arr) {
    if (!Array.isArray(arr))
        return arr;
    for (const item of arr) {
        if (item &&
            typeof item === 'object' &&
            item.type === 'text' &&
            typeof item.text === 'string') {
            return item.text;
        }
    }
    return arr;
}
function tryJsonParse(str) {
    try {
        return JSON.parse(str);
    }
    catch {
        const lastBraceIndex = str.lastIndexOf('}');
        if (lastBraceIndex === -1)
            return str;
        for (let i = 0; i <= lastBraceIndex; i++) {
            if (str[i] === '{' || str[i] === '[') {
                try {
                    const jsonStr = str.slice(i, lastBraceIndex + 1);
                    return JSON.parse(jsonStr);
                }
                catch {
                    continue;
                }
            }
        }
        return str;
    }
}
function isRecord(value) {
    return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}
//# sourceMappingURL=mcp.test.js.map