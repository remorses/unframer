import { ComponentInstanceNode, ComponentNode } from '#framer-client';
export type ComponentInstanceStyles = {
    position?: string | null;
    top?: string | null;
    right?: string | null;
    bottom?: string | null;
    left?: string | null;
    centerX?: string | null;
    centerY?: string | null;
    width?: string | null;
    height?: string | null;
    minWidth?: string | null;
    maxWidth?: string | null;
    minHeight?: string | null;
    maxHeight?: string | null;
    aspectRatio?: number | null;
    rotation?: number | null;
    opacity?: number | null;
};
export interface ReactExportComponentInstance {
    componentId: string;
    controls: Record<string, any>;
    webPageId: string;
    projectId: string;
    nodeDepth: number;
    pageOrdering: number;
    styles: ComponentInstanceStyles;
}
interface ComponentWithBreakpoints {
    component: ComponentNode;
    breakpoints?: Array<{
        variantId: string;
        width: number;
        breakpointName: string;
    }>;
}
export declare function getInstancesWithOrderAndDepth({ allInstances, webPageIds, components, projectId, }: {
    allInstances: ComponentInstanceNode[];
    webPageIds: Set<string>;
    components: ComponentNode[];
    projectId: string;
}): Promise<ReactExportComponentInstance[]>;
export declare function getComponentsWithBreakpoints({ selectedComponentIds, components, allInstances, }: {
    selectedComponentIds: Set<string>;
    components: ComponentNode[];
    allInstances: ComponentInstanceNode[];
}): Promise<ComponentWithBreakpoints[]>;
export declare function processReactExportData({ selectedComponentIds, }: {
    selectedComponentIds: Set<string>;
}): Promise<{
    projectId: string;
    projectName: string;
    fullFramerProjectId: string;
    framerUserId: string;
    websiteUrl: string | undefined;
    pageBackgroundColor: string;
    colorStyles: {
        name: string;
        id: string;
        projectId: string;
        lightColor: string;
        darkColor: string;
    }[];
    components: ({
        name: string;
        id: string;
        url: string;
        projectId: string;
        componentIdentifier: string;
        componentType: "component";
    } | {
        name: string;
        id: string;
        url: string;
        projectId: string;
        componentIdentifier: string;
        componentType: "codeFile";
    })[];
    breakpoints: {
        variantId: string;
        width: number;
        breakpointName: string;
        componentId: string;
        projectId: string;
    }[];
    pages: {
        path: string;
        webPageId: string;
        projectId: string;
    }[];
    locales: {
        id: any;
        name: any;
        slug: any;
        code: any;
        projectId: string;
    }[];
    componentInstances: never[] | ReactExportComponentInstance[];
}>;
export {};
//# sourceMappingURL=react-export.d.ts.map