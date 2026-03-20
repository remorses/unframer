import { z } from 'zod';
export declare const mcpTools: {
    readonly getProjectXml: {
        readonly description: any;
        readonly input: z.ZodObject<{}, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly getSelectedNodesXml: {
        readonly description: "Gets the currently selected nodes as xml";
        readonly input: z.ZodObject<{}, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly zoomIntoView: {
        readonly description: "Zooms the canvas to center on the given node ID. It will navigate to the right page or component first.";
        readonly input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly getNodeXml: {
        readonly description: "Get a specific Framer node as XML. You first need to get a node id via getProjectXml or call getSelectedNodesXml instead";
        readonly input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly getProjectColorStyles: {
        readonly description: "Gets all project-level color styles";
        readonly input: z.ZodObject<{}, z.core.$strip>;
    };
    readonly getProjectTextStyles: {
        readonly description: "Gets all project-level text styles";
        readonly input: z.ZodObject<{}, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly updateXmlForNode: {
        readonly description: any;
        readonly input: z.ZodObject<{
            nodeId: z.ZodString;
            xml: z.ZodString;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly updateColorStyle: {
        readonly description: "Updates a color style by its path. Can modify the name, light color, and dark color.";
        readonly input: z.ZodObject<{
            stylePath: z.ZodString;
            updates: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                light: z.ZodOptional<z.ZodString>;
                dark: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly updateTextStyle: {
        readonly description: "Updates a text style by its path. Can modify various typography properties.";
        readonly input: z.ZodObject<{
            stylePath: z.ZodString;
            updates: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                fontSize: z.ZodOptional<z.ZodString>;
                lineHeight: z.ZodOptional<z.ZodString>;
                letterSpacing: z.ZodOptional<z.ZodString>;
                paragraphSpacing: z.ZodOptional<z.ZodNumber>;
                transform: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    uppercase: "uppercase";
                    lowercase: "lowercase";
                    capitalize: "capitalize";
                }>>;
                alignment: z.ZodOptional<z.ZodEnum<{
                    left: "left";
                    center: "center";
                    right: "right";
                    justify: "justify";
                }>>;
                decoration: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    underline: "underline";
                    "line-through": "line-through";
                }>>;
                balance: z.ZodOptional<z.ZodBoolean>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly searchFonts: {
        readonly description: any;
        readonly input: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly deleteNode: {
        readonly description: any;
        readonly input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
    readonly duplicateNode: {
        readonly description: any;
        readonly input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        readonly output: z.ZodAny;
    };
};
export type McpToolNames = keyof typeof mcpTools;
type McpToolMsg<T extends McpToolNames> = {
    type: T;
    input: z.infer<(typeof mcpTools)[T]['input']>;
    output?: any;
};
export type McpToolWebsocketPayload = {
    [K in McpToolNames]: McpToolMsg<K>;
}[McpToolNames];
export type FramerLayersTree = Array<{
    /**
     * The text of the node, if this is a text node.
     */
    content?: string;
    isReplica?: boolean;
    nodeId?: string;
    name?: string;
    children?: FramerLayersTree;
    attributes?: Record<string, string>;
    attrControlsComments?: Record<string, string>;
    count?: number;
}>;
export type McpCallParam = {
    [K in McpToolNames]: {
        name: K;
        args: z.infer<(typeof mcpTools)[K]['input']> | undefined;
    };
}[McpToolNames];
export {};
//# sourceMappingURL=types.d.ts.map