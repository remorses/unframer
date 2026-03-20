import { z } from 'zod';
export declare const codeComponentsResourceUri = "mcp://mcp.unframer.co/prompts/how-to-write-framer-code-files.md";
export type McpToolDefinition = {
    description: string;
    input: z.ZodTypeAny;
    output: z.ZodTypeAny;
    outputPrefix?: string;
};
declare const textStylePropertiesSchema: z.ZodObject<{
    tag: z.ZodOptional<z.ZodEnum<{
        h1: "h1";
        h2: "h2";
        h3: "h3";
        h4: "h4";
        h5: "h5";
        h6: "h6";
        p: "p";
    }>>;
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
    color: z.ZodOptional<z.ZodString>;
    font: z.ZodOptional<z.ZodString>;
    boldFont: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    italicFont: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    boldItalicFont: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    decorationColor: z.ZodOptional<z.ZodString>;
    decorationThickness: z.ZodOptional<z.ZodString>;
    decorationStyle: z.ZodOptional<z.ZodEnum<{
        solid: "solid";
        double: "double";
        dotted: "dotted";
        dashed: "dashed";
        wavy: "wavy";
    }>>;
    decorationSkipInk: z.ZodOptional<z.ZodEnum<{
        none: "none";
        auto: "auto";
        all: "all";
    }>>;
    decorationOffset: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const mcpTools: {
    getProjectXml: {
        description: string;
        input: z.ZodObject<{}, z.core.$strip>;
        output: z.ZodAny;
        outputPrefix: string;
    };
    getSelectedNodesXml: {
        description: string;
        input: z.ZodObject<{}, z.core.$strip>;
        output: z.ZodAny;
    };
    zoomIntoView: {
        description: string;
        input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    getNodeXml: {
        description: string;
        input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    updateXmlForNode: {
        description: string;
        input: z.ZodObject<{
            nodeId: z.ZodString;
            xml: z.ZodString;
            zoomIntoView: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    manageColorStyle: {
        description: string;
        input: z.ZodObject<{
            type: z.ZodEnum<{
                create: "create";
                update: "update";
            }>;
            stylePath: z.ZodString;
            properties: z.ZodObject<{
                name: z.ZodOptional<z.ZodString>;
                light: z.ZodOptional<z.ZodString>;
                dark: z.ZodOptional<z.ZodNullable<z.ZodString>>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    manageTextStyle: {
        description: string;
        input: z.ZodObject<{
            type: z.ZodEnum<{
                create: "create";
                update: "update";
            }>;
            stylePath: z.ZodString;
            properties: z.ZodObject<{
                tag: z.ZodOptional<z.ZodEnum<{
                    h1: "h1";
                    h2: "h2";
                    h3: "h3";
                    h4: "h4";
                    h5: "h5";
                    h6: "h6";
                    p: "p";
                }>>;
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
                color: z.ZodOptional<z.ZodString>;
                font: z.ZodOptional<z.ZodString>;
                boldFont: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                italicFont: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                boldItalicFont: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                decorationColor: z.ZodOptional<z.ZodString>;
                decorationThickness: z.ZodOptional<z.ZodString>;
                decorationStyle: z.ZodOptional<z.ZodEnum<{
                    solid: "solid";
                    double: "double";
                    dotted: "dotted";
                    dashed: "dashed";
                    wavy: "wavy";
                }>>;
                decorationSkipInk: z.ZodOptional<z.ZodEnum<{
                    none: "none";
                    auto: "auto";
                    all: "all";
                }>>;
                decorationOffset: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    searchFonts: {
        description: string;
        input: z.ZodObject<{
            query: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    deleteNode: {
        description: string;
        input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    duplicateNode: {
        description: string;
        input: z.ZodObject<{
            nodeId: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    exportReactComponents: {
        description: string;
        input: z.ZodObject<{}, z.core.$strip>;
        output: z.ZodAny;
    };
    createCodeFile: {
        description: string;
        input: z.ZodObject<{
            name: z.ZodString;
            content: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    readCodeFile: {
        description: string;
        input: z.ZodObject<{
            codeFileId: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    updateCodeFile: {
        description: string;
        input: z.ZodObject<{
            codeFileId: z.ZodString;
            content: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    getComponentInsertUrlAndTypes: {
        description: string;
        input: z.ZodObject<{
            id: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodString;
    };
    getProjectWebsiteUrl: {
        description: string;
        input: z.ZodObject<{}, z.core.$strip>;
        output: z.ZodAny;
    };
    getCMSCollections: {
        description: string;
        input: z.ZodObject<{}, z.core.$strip>;
        output: z.ZodAny;
        outputPrefix: string;
    };
    getCMSItems: {
        description: string;
        input: z.ZodObject<{
            collectionId: z.ZodString;
            skip: z.ZodOptional<z.ZodNumber>;
            limit: z.ZodOptional<z.ZodNumber>;
            filter: z.ZodOptional<z.ZodObject<{
                query: z.ZodOptional<z.ZodString>;
                fieldName: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    upsertCMSItem: {
        description: string;
        input: z.ZodObject<{
            collectionId: z.ZodString;
            itemId: z.ZodOptional<z.ZodString>;
            slug: z.ZodOptional<z.ZodString>;
            fieldData: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
                type: z.ZodString;
                value: z.ZodUnknown;
                contentType: z.ZodOptional<z.ZodEnum<{
                    markdown: "markdown";
                    html: "html";
                }>>;
            }, z.core.$loose>>>;
            draft: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    deleteCMSItem: {
        description: string;
        input: z.ZodObject<{
            collectionId: z.ZodString;
            itemId: z.ZodString;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    createCMSCollection: {
        description: string;
        input: z.ZodObject<{
            name: z.ZodString;
            fields: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                name: z.ZodString;
                type: z.ZodEnum<{
                    string: "string";
                    number: "number";
                    boolean: "boolean";
                    date: "date";
                    file: "file";
                    enum: "enum";
                    link: "link";
                    color: "color";
                    image: "image";
                    formattedText: "formattedText";
                    collectionReference: "collectionReference";
                    multiCollectionReference: "multiCollectionReference";
                }>;
                required: z.ZodOptional<z.ZodBoolean>;
                allowedFileTypes: z.ZodOptional<z.ZodArray<z.ZodString>>;
                cases: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodString;
                    name: z.ZodString;
                }, z.core.$strip>>>;
                collectionId: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>>>>;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
    createPage: {
        description: string;
        input: z.ZodObject<{
            name: z.ZodString;
            type: z.ZodEnum<{
                design: "design";
                web: "web";
            }>;
        }, z.core.$strip>;
        output: z.ZodAny;
    };
};
export type McpToolNames = keyof typeof mcpTools;
export type TextStyleProperties = z.infer<typeof textStylePropertiesSchema>;
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
    /**
     * Additional comment to explain what this node represents
     */
    comment?: string;
    /**
     * Disable self-closing tag syntax for this node
     */
    disableSelfClosing?: boolean;
}>;
export type McpCallParam = {
    [K in McpToolNames]: {
        name: K;
        args: z.infer<(typeof mcpTools)[K]['input']> | undefined;
    };
}[McpToolNames];
export {};
//# sourceMappingURL=schema.d.ts.map