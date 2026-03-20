import { AnyNode } from '#framer-client';
import type { PropertyControls } from 'unframer';
import { FramerLayersTree } from './schema.js';
export declare function clearUploadedImagesCache(): void;
export declare function replaceEnumIdsForControls(controls: any, propControls?: PropertyControls): any;
export declare function getComponentPropertyControls(url?: string | null): Promise<{
    comments: undefined;
    propertyControls: undefined;
} | {
    comments: Record<string, string>;
    propertyControls: PropertyControls<any, any>;
}>;
export declare enum ControlType {
    Boolean = "boolean",
    Number = "number",
    String = "string",
    RichText = "richtext",
    FusedNumber = "fusednumber",
    Enum = "enum",
    SegmentedEnum = "segmentedenum",
    Color = "color",
    Image = "image",
    ResponsiveImage = "responsiveimage",
    File = "file",
    ComponentInstance = "componentinstance",
    Array = "array",
    EventHandler = "eventhandler",
    Transition = "transition",
    BoxShadow = "boxshadow",
    Link = "link",
    Date = "date",
    Object = "object",
    Font = "font",
    PageScope = "pagescope",
    ScrollSectionRef = "scrollsectionref",
    CustomCursor = "customcursor",
    Border = "border",
    Cursor = "cursor",
    Padding = "padding",
    BorderRadius = "borderradius",
    CollectionReference = "collectionreference",
    MultiCollectionReference = "multicollectionreference"
}
export declare function getAttributeComments(controls?: PropertyControls, availablePagePaths?: string[]): Record<string, string>;
export declare function getInstanceComponentId(componentInstance: AnyNode): string | undefined;
export declare function isNodeZoomable(node: AnyNode): Promise<boolean>;
export declare function getFramerTree({ rootNodes, recursive, }: {
    rootNodes: AnyNode[];
    recursive?: boolean;
}): Promise<FramerLayersTree>;
export declare function discardFramerChanges({ previousTree: previousTree, }: {
    previousTree: FramerLayersTree;
}): Promise<void[]>;
export declare const ATTRIBUTE_DEFAULTS: {
    readonly opacity: 1;
    readonly visible: true;
    readonly locked: false;
    readonly rotation: 0;
    readonly position: "relative";
    readonly gap: "0px";
    readonly padding: "0px";
    readonly stackWrap: false;
    readonly gridFillWidth: true;
    readonly gridFillHeight: true;
};
export declare function serializeAttributesForXml(attributes?: Record<string, any>): Record<string, string>;
export declare function applyAttributes(node?: AnyNode | null, _attributes?: Record<string, any>): Promise<void>;
export declare function getParentNodesArray(node: any): Promise<AnyNode[]>;
//# sourceMappingURL=framer.d.ts.map