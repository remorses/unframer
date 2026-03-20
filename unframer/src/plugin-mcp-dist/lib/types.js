import { z } from 'zod';
import dedent from 'string-dedent';
/* ──────────────────────────── Schemas ─────────────────────────── */
const NodeId = z.string().min(1);
const Role = z.enum(['background', 'text', 'border']);
/* ──────────────────────────── Tool Definitions ─────────────────────────── */
export const mcpTools = {
    getProjectXml: {
        description: dedent `
        Gets the project pages and components XML, with information of the currently focused page or component.

        The referenced nodeIds can be used with getNodeXml to get the XML of a specific page or component.

        `,
        input: z.object({}),
        output: z.any(),
    },
    getSelectedNodesXml: {
        description: 'Gets the currently selected nodes as xml',
        input: z.object({}),
        output: z.any(),
    },
    zoomIntoView: {
        description: 'Zooms the canvas to center on the given node ID. It will navigate to the right page or component first.',
        input: z.object({
            nodeId: NodeId.describe('The ID of the node to zoom into view'),
        }),
        output: z.any(),
    },
    getNodeXml: {
        description: 'Get a specific Framer node as XML. You first need to get a node id via getProjectXml or call getSelectedNodesXml instead',
        input: z.object({
            nodeId: NodeId.describe('The ID of the node to get as XML'),
        }),
        output: z.any(),
    },
    getProjectColorStyles: {
        description: 'Gets all project-level color styles',
        input: z.object({}),
    },
    getProjectTextStyles: {
        description: 'Gets all project-level text styles',
        input: z.object({}),
        output: z.any(),
    },
    updateXmlForNode: {
        description: dedent `
              Update the XML for a specific node using its nodeId and passing a new XML string. It can be used to update nodes text or attributes.

              You can pass a partial a XML string, there is no need to include the full XML structure, missing nodes will not be updated. You can also omit attributes, omitted attributes will not be updated and will be ignored.

              You can use this tool to
              - Update text for one or multiple text nodes
              - Update attributes of existing nodes

              This tool cannot duplicate or delete nodes.

              `,
        input: z.object({
            nodeId: NodeId.describe('The ID of the node to update'),
            xml: z
                .string()
                .min(1)
                .describe('XML string containing the updates. Can include multiple nodes with their nodeId attributes'),
        }),
        output: z.any(),
    },
    updateColorStyle: {
        description: 'Updates a color style by its path. Can modify the name, light color, and dark color.',
        input: z.object({
            stylePath: z
                .string()
                .describe('The path of the color style to update. Must start with /'),
            updates: z
                .object({
                name: z
                    .string()
                    .optional()
                    .describe('New name for the color style'),
                light: z
                    .string()
                    .optional()
                    .describe('Light theme color in any CSS color format (e.g., "rgb(255, 0, 0)", "#FF0000", "red")'),
                dark: z
                    .string()
                    .nullable()
                    .optional()
                    .describe('Dark theme color in any CSS color format, or null to remove dark variant'),
            })
                .describe('Properties to update on the color style'),
        }),
        output: z.any(),
    },
    updateTextStyle: {
        description: 'Updates a text style by its path. Can modify various typography properties.',
        input: z.object({
            stylePath: z
                .string()
                .describe('The path of the text style to update. Must start with /'),
            updates: z
                .object({
                name: z
                    .string()
                    .optional()
                    .describe('New name for the text style'),
                fontSize: z
                    .string()
                    .optional()
                    .describe('Font size with units (e.g., "16px", "1.5rem")'),
                lineHeight: z
                    .string()
                    .optional()
                    .describe('Line height with units (e.g., "24px", "1.5em", "150%")'),
                letterSpacing: z
                    .string()
                    .optional()
                    .describe('Letter spacing with units (e.g., "0px", "0.05em")'),
                paragraphSpacing: z
                    .number()
                    .optional()
                    .describe('Space between paragraphs in pixels'),
                transform: z
                    .enum(['none', 'uppercase', 'lowercase', 'capitalize'])
                    .optional()
                    .describe('Text transformation'),
                alignment: z
                    .enum(['left', 'center', 'right', 'justify'])
                    .optional()
                    .describe('Text alignment'),
                decoration: z
                    .enum(['none', 'underline', 'line-through'])
                    .optional()
                    .describe('Text decoration'),
                balance: z
                    .boolean()
                    .optional()
                    .describe('Enable balanced text wrapping for better legibility'),
            })
                .describe('Properties to update on the text style'),
        }),
        output: z.any(),
    },
    searchFonts: {
        description: dedent `
            Search for fonts by selector substring. Returns max 20 results. Use specific search terms for better results.

            IMPORTANT: The returned 'selector' field is what you use in XML font attributes:
            <Text font="GF;Inter-600">Bold text</Text>

            NOTE: You can only apply a font attribute to text nodes that do NOT have an inlineTextStyle.
            If a text node has inlineTextStyle="/Heading xl", you must remove it before applying a custom font.
            Text nodes can use EITHER inlineTextStyle (project text style) OR font (custom font), not both.
        `,
        input: z.object({
            query: z
                .string()
                .min(1)
                .describe('Search query to match against font selector (e.g., "Inter", "bold", "italic")'),
        }),
        output: z.any(),
    },
    deleteNode: {
        description: dedent `
            Deletes a Framer node, removing it from the page or component. This permanently removes the node and all its children.

            IMPORTANT: This action cannot be undone. Use with caution.
            Cannot delete certain protected nodes like the root frame of a component or page.
        `,
        input: z.object({
            nodeId: NodeId.describe('The ID of the node to delete'),
        }),
        output: z.any(),
    },
    duplicateNode: {
        description: dedent `
            Duplicate a node in the Framer project. Creates an exact copy of the node and all its children.

            The duplicated node will be placed as a sibling of the original node, slightly offset if it's a visual node.
            Returns the ID of the newly created duplicate node.
        `,
        input: z.object({
            nodeId: NodeId.describe('The ID of the node to duplicate'),
        }),
        output: z.any(),
    },
};
//# sourceMappingURL=types.js.map