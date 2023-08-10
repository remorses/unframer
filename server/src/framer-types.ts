export type FramerTree = {
    v:       number;
    header:  number[];
    version: number;
    hash:    number;
    root:    Root;
}

export type Root = {
    disableBackdropFilters: boolean;
    __class:                string;
    duplicatedFrom:         null;
    id:                     ParentidEnum;
    name:                   null;
    originalid:             null;
    parentid:               null;
    visible:                boolean;
    homePageNodeId:         EID;
    thumbnailNodeId:        string;
    webMetadata:            RootWebMetadata;
    children:               RootChild[];
}

export type RootChild = {
    id:              string;
    parentid:        ParentidEnum;
    name?:           null | string;
    baseVariantId?:  string;
    __class:         PurpleClass;
    webMetadata?:    ChildWebMetadata;
    children:        PurpleChild[];
    variables?:      FluffyVariable[];
    pagePath?:       string;
    dataIdentifier?: string;
}

export type PurpleClass = "WebPageNode" | "ExternalModulesListNode" | "ContentManagementNode" | "ColorStyleTokenListNode" | "StylePresetsListNode" | "LocalModulesListNode" | "SmartComponentNode";

export type PurpleChild = {
    id:                       string;
    __class:                  FluffyClass;
    parentid:                 string;
    name?:                    string;
    width?:                   number;
    height?:                  number;
    fillColor?:               FillImage | string;
    isMaster?:                boolean;
    isVariant?:               boolean;
    isBreakpoint?:            boolean;
    variantTransition?:       TTransition;
    previewSettings?:         PreviewSettings;
    overflow?:                Overflow;
    radiusTopLeft?:           number;
    radiusTopRight?:          number;
    radiusBottomRight?:       number;
    radiusBottomLeft?:        number;
    top?:                     number;
    viewportHeight?:          number;
    left?:                    number;
    layout?:                  Layout;
    gap?:                     number;
    stackAlignment?:          StackAlignment;
    stackDirection?:          StackDirection;
    stackDistribution?:       StackAlignment;
    stackWrapEnabled?:        boolean;
    padding?:                 number;
    paddingPerSide?:          boolean;
    paddingTop?:              number;
    paddingRight?:            number;
    paddingBottom?:           number;
    paddingLeft?:             number;
    heightType?:              number;
    exportOptions?:           ExportOption[];
    children?:                FluffyChild[];
    duplicatedFrom?:          string[];
    originalid?:              string;
    replicaInfo?:             ReplicaInfo;
    title?:                   string;
    intrinsicWidth?:          number;
    annotations?:             Annotations;
    codeComponentIdentifier?: string;
    ownerType?:               OwnerType;
    ownerId?:                 string;
    type?:                    SaveType;
    group?:                   Group;
    updateSaveId?:            string;
    namespaceId?:             string;
    scopeNodeId?:             string;
    intrinsicHeight?:         number;
    variables?:               PurpleVariable[];
    light?:                   string;
    paragraphSpacing?:        number;
    tag?:                     string;
    font?:                    string;
    textColor?:               string;
    fontSize?:                number;
    letterSpacing?:           Array<number | LetterSpacingEnum>;
    lineHeight?:              Array<number | LetterSpacingEnum>;
    textAlignment?:           StackAlignment;
    save?:                    Save;
    borderEnabled?:           boolean;
    borderWidth?:             number;
    borderColor?:             string;
    borderStyle?:             BorderStyle;
    borderPerSide?:           boolean;
    borderTop?:               number;
    borderRight?:             number;
    borderBottom?:            number;
    borderLeft?:              number;
    boxShadows?:              any[];
    fillEnabled?:             boolean;
    locked?:                  boolean;
    widthType?:               number;
    radius?:                  number;
    link?:                    FillImage;
    linkOpenInNewTab?:        boolean;
    linkSmoothScroll?:        boolean;
    aspectRatio?:             number;
    fillType?:                string;
    fillImage?:               FillImage;
    fillImageOriginalName?:   string;
    fillImagePixelWidth?:     number;
    fillImagePixelHeight?:    number;
    centerAnchorX?:           number;
    centerAnchorY?:           number;
    rotation?:                number;
    onAppear?:                On[];
    gridItemFillCellWidth?:   boolean;
    gridItemFillCellHeight?:  boolean;
    bottom?:                  null;
    fillLinearGradient?:      FillLinearGradient;
    fillRadialGradient?:      FillRadialGradient;
    fillConicGradient?:       FillConicGradient;
    right?:                   null;
    onTap?:                   On[];
    $control__ZI8HdU9Ku?:     ControlChy2ICUt;
    $control__WGDgFnn5C?:     ControlChy2ICUt;
    $control__xBIYtOuFC?:     ControlChy2ICUt;
    $control__woCpzEL8i?:     ControlChy2ICUt;
    $control__Chy2ic_Ut?:     ControlChy2ICUt;
    $control__iowmV3HsA?:     ControlChy2ICUt;
    cursor?:                  string;
    scrollTargetEnabled?:     boolean;
    elementId?:               string;
}

export type ControlChy2ICUt = {
    type:  ExpectedTypeEnum;
    value: string;
}

export type ExpectedTypeEnum = "string" | "image" | "enum" | "richtext" | "date" | "color";

export type FluffyClass = "FrameNode" | "ExternalModuleNode" | "CollectionNode" | "ColorStyleTokenNode" | "TextStylePresetNode" | "LocalModuleNode" | "CodeComponentNode";

export type Annotations = {
    framerSupportedLayoutHeight?:         string;
    framerContractVersion:                string;
    framerIntrinsicWidth?:                string;
    framerIntrinsicHeight?:               string;
    framerDisableUnlink?:                 string;
    framerSupportedLayoutWidth?:          string;
    framerCanvasComponentVariantDetails?: string;
}

export type BorderStyle = "solid";

export type FluffyChild = {
    id:                             string;
    __class:                        TentacledClass;
    parentid:                       string;
    codeComponentIdentifier?:       string;
    left?:                          number | null;
    top?:                           number | null;
    centerAnchorX?:                 number;
    centerAnchorY?:                 number;
    widthType?:                     number;
    heightType?:                    number;
    width?:                         number;
    height?:                        number;
    styleAppearEffectEnabled?:      boolean;
    styleAppearEffectThreshold?:    number;
    styleAppearEffectAnimateOnce?:  boolean;
    styleAppearEffectOpacity?:      number;
    styleAppearEffectX?:            number;
    styleAppearEffectY?:            number;
    styleAppearEffectScale?:        number;
    styleAppearEffectTransition?:   TTransition;
    styleAppearEffectRotate?:       number;
    styleAppearEffectRotateX?:      number;
    styleAppearEffectRotateY?:      number;
    styleAppearEffectPerspective?:  number;
    styleAppearEffectLocked?:       boolean;
    styleAppearEffectTrigger?:      StyleAppearEffectTrigger;
    enterEffectEnabled?:            boolean;
    enterEffectOpacity?:            number;
    enterEffectX?:                  number;
    enterEffectY?:                  number;
    enterEffectScale?:              number;
    enterEffectTransition?:         TTransition;
    enterEffectRotate3d?:           boolean;
    enterEffectRotate?:             number;
    enterEffectRotateX?:            number;
    enterEffectRotateY?:            number;
    exitEffectEnabled?:             boolean;
    position?:                      string;
    zIndex?:                        number;
    fillEnabled?:                   boolean;
    layout?:                        Layout;
    gap?:                           number;
    stackAlignment?:                StackAlignment;
    stackDirection?:                StackDirection;
    stackDistribution?:             StackAlignment;
    stackWrapEnabled?:              boolean;
    overflow?:                      Overflow;
    padding?:                       number;
    paddingPerSide?:                boolean;
    paddingTop?:                    number;
    paddingRight?:                  number;
    paddingBottom?:                 number;
    paddingLeft?:                   number;
    name?:                          string;
    children?:                      TentacledChild[];
    duplicatedFrom?:                string[];
    $control__variant?:             ControlChy2ICUt;
    right?:                         number | null;
    bottom?:                        number | null;
    scrollTargetEnabled?:           boolean;
    elementId?:                     string;
    styleAppearEffectScrollTarget?: string;
    exitEffectOpacity?:             number;
    exitEffectX?:                   number;
    exitEffectY?:                   number;
    exitEffectScale?:               number;
    exitEffectRotate?:              number;
    exitEffectRotateX?:             number;
    exitEffectRotateY?:             number;
    exitEffectTransition?:          TTransition;
    visible?:                       boolean;
    constraintsLocked?:             boolean;
    gridItemFillCellWidth?:         boolean;
    gridItemFillCellHeight?:        boolean;
    $control__UxzTntP1p?:           ControlChy2ICUt;
    $control__kwdxCQMk5?:           ControlChy2ICUt;
    $control__tyV7Oyp00?:           ControlChy2ICUt;
    $control__AK9pxkEvJ?:           ControlAK9PxkEvJClass;
    $control__sdqYnPTzC?:           ControlChy2ICUt;
    $control__CmXXJY0n6?:           ControlCMXXJY0N6;
    locked?:                        boolean;
    html?:                          string;
    stylePresetHeading1?:           StylePresetHeading1;
    stylePresetHeading2?:           StylePresetHeading2;
    stylePresetHeading3?:           StylePresetHeading3;
    stylePresetParagraph?:          StylePresetParagraph;
    stylePresetLink?:               StylePresetLink;
    textContent?:                   FillImage;
    stylePresetHeading4?:           StylePresetHeading4;
    stylePresetHeading5?:           StylePresetHeading5;
    borderEnabled?:                 boolean;
    borderWidth?:                   number;
    borderColor?:                   BorderColor;
    borderStyle?:                   BorderStyle;
    borderPerSide?:                 boolean;
    borderTop?:                     number;
    borderRight?:                   number;
    borderBottom?:                  number;
    borderLeft?:                    number;
    boxShadows?:                    BoxShadow[];
    radius?:                        number;
    radiusTopLeft?:                 number;
    radiusTopRight?:                number;
    radiusBottomRight?:             number;
    radiusBottomLeft?:              number;
    fillType?:                      ExpectedTypeEnum;
    fillColor?:                     string;
    fillImageOriginalName?:         string;
    fillImagePixelWidth?:           number;
    fillImagePixelHeight?:          number;
    intrinsicWidth?:                number;
    intrinsicHeight?:               number;
    fillImage?:                     FillImage | string;
    aspectRatio?:                   number | null;
    $control__slots?:               ControlSlots;
    $control__gap?:                 ControlGap;
    $control__padding?:             ControlPadding;
    $control__direction?:           ControlChy2ICUt;
    $control__speed?:               ControlGap;
    originalFilename?:              string;
    svg?:                           string;
    contentHash?:                   number;
    fillImageResize?:               string;
    $control__kYZr0S9qS?:           ControlKYZr0S9QSClass;
    $control__ksLTK3W4O?:           ControlKYZr0S9QSClass;
    $control__IaWp7lx6r?:           ControlKYZr0S9QSClass;
    $control__ecriYSsUC?:           ControlKYZr0S9QSClass;
    $control__moTqfDim_?:           ControlKYZr0S9QSClass;
    $control__UygWIK1Ch?:           ControlKYZr0S9QSClass;
    $control__fadeOptions?:         ControlFadeOptions;
    opacity?:                       number;
    $control__hoverFactor?:         ControlGap;
    $control__woCpzEL8i?:           ControlChy2ICUt;
    $control__xBIYtOuFC?:           ControlChy2ICUt;
    $control__Chy2ic_Ut?:           ControlChy2ICUt;
    isMaster?:                      boolean;
    codeOverrideEnabled?:           boolean;
    codeOverrideIdentifier?:        string;
    codeOverrideFile?:              string;
    codeOverrideName?:              string;
    gridColumnCount?:               number;
    gridRowCount?:                  number;
    gridAlignment?:                 StackAlignment;
    gridColumnWidthType?:           string;
    gridColumnWidth?:               number;
    gridColumnMinWidth?:            number;
    gridRowHeightType?:             string;
    gridRowHeight?:                 number;
    linkTextDecoration?:            string;
    maxWidth?:                      string;
}

export type ControlAK9PxkEvJClass = {
    type:  ExpectedTypeEnum;
    value: string;
    alt:   string;
}

export type ControlCMXXJY0N6 = {
    type:  ControlCMXXJY0N6Type;
    value: ControlCMXXJY0N6Value;
}

export type ControlCMXXJY0N6Type = "string" | "image" | "link" | "boolean" | "eventhandler" | "color" | "controlReference";

export type ControlCMXXJY0N6Value = {
    webPageId:     string;
    pathVariables: ValuePathVariables;
    type:          PurpleType;
}

export type ValuePathVariables = {
    kwdxCQMk5: KwdxCQMk5;
}

export type KwdxCQMk5 = {
    identifier:       string;
    collectionItemId: string;
    key:              string;
    value:            string;
}

export type PurpleType = "webPage" | "url";

export type ControlKYZr0S9QSClass = {
    type:  ControlCMXXJY0N6Type;
    value: FillImage;
}

export type FillImage = {
    type:       FillImageType;
    id:         string;
    providerId: string;
}

export type FillImageType = "variableReference" | "computedValue";

export type ControlFadeOptions = {
    type:  string;
    value: ControlFadeOptionsValue;
}

export type ControlFadeOptionsValue = {
    fadeContent: FadeContent;
    overflow:    FadeContent;
    fadeWidth:   ControlGap;
    fadeInset:   ControlGap;
    fadeAlpha:   ControlGap;
}

export type ControlGap = {
    type:  ControlGapType;
    value: number;
}

export type ControlGapType = "number" | "enum";

export type FadeContent = {
    type:  ControlCMXXJY0N6Type;
    value: boolean;
}

export type ControlPadding = {
    type:    string;
    isFused: boolean;
    value:   ControlPaddingValue;
}

export type ControlPaddingValue = {
    single: number;
    fused:  number[];
}

export type ControlSlots = {
    type:  string;
    value: ValueElement[];
}

export type ValueElement = {
    id:    string;
    value: string;
    type:  FluffyType;
}

export type FluffyType = "componentinstance";

export type TentacledClass = "CodeComponentNode" | "FrameNode" | "CollectionItemNode" | "RichTextNode" | "SVGNode" | "ShapeContainerNode" | "PathNode" | "TextNode";

export type BorderColor = "rgb(0, 0, 0)" | "rgba(0, 0, 0, 0.10000000149011612)";

export type BoxShadow = {
    __class:   BoxShadowClass;
    id:        string;
    type:      BoxShadowType;
    color:     Color;
    x:         number;
    y:         number;
    inset:     boolean;
    blur:      number;
    spread:    number;
    diffusion: number;
    focus:     number;
}

export type BoxShadowClass = "BoxShadow";

export type Color = "rgba(20, 33, 67, 0.08)" | "rgba(0, 0, 0, 0.08)" | "rgba(0,0,0,0.25)";

export type BoxShadowType = "box";

export type TentacledChild = {
    id:                             string;
    __class:                        StickyClass;
    parentid:                       string;
    fillEnabled?:                   boolean;
    layout?:                        Layout;
    gap?:                           number;
    stackAlignment?:                StackAlignment;
    stackDirection?:                StackDirection;
    stackDistribution?:             StackAlignment;
    stackWrapEnabled?:              boolean;
    overflow?:                      Overflow;
    padding?:                       number;
    paddingPerSide?:                boolean;
    paddingTop?:                    number;
    paddingRight?:                  number;
    paddingBottom?:                 number;
    paddingLeft?:                   number;
    left?:                          number | null;
    top?:                           number | null;
    centerAnchorX?:                 number;
    centerAnchorY?:                 number;
    width:                          number;
    height:                         number;
    constraintsLocked?:             boolean;
    heightType?:                    number;
    name?:                          string;
    right?:                         number | null;
    children?:                      StickyChild[];
    fillColor?:                     string;
    gridItemFillCellWidth?:         boolean;
    gridItemFillCellHeight?:        boolean;
    radius?:                        number;
    isVariant?:                     boolean;
    isBreakpoint?:                  boolean;
    variantTransition?:             TTransition;
    scrollTargetEnabled?:           boolean;
    elementId?:                     string;
    codeComponentIdentifier?:       string;
    styleAppearEffectEnabled?:      boolean;
    styleAppearEffectThreshold?:    number;
    styleAppearEffectAnimateOnce?:  boolean;
    styleAppearEffectOpacity?:      number;
    styleAppearEffectX?:            number;
    styleAppearEffectY?:            number;
    styleAppearEffectScale?:        number;
    styleAppearEffectTransition?:   TTransition;
    styleAppearEffectRotate?:       number;
    styleAppearEffectRotateX?:      number;
    styleAppearEffectRotateY?:      number;
    styleAppearEffectPerspective?:  number;
    styleAppearEffectLocked?:       boolean;
    styleAppearEffectTrigger?:      StyleAppearEffectTrigger;
    enterEffectEnabled?:            boolean;
    enterEffectOpacity?:            number;
    enterEffectX?:                  number;
    enterEffectY?:                  number;
    enterEffectScale?:              number;
    enterEffectTransition?:         TTransition;
    enterEffectRotate3d?:           boolean;
    enterEffectRotate?:             number;
    enterEffectRotateX?:            number;
    enterEffectRotateY?:            number;
    exitEffectEnabled?:             boolean;
    widthType?:                     number;
    duplicatedFrom?:                string[];
    gridColumnCount?:               number;
    gridRowCount?:                  number;
    gridAlignment?:                 StackAlignment;
    gridColumnWidthType?:           string;
    gridColumnWidth?:               number;
    gridColumnMinWidth?:            number;
    gridRowHeightType?:             string;
    gridRowHeight?:                 number;
    styleAppearEffectScrollTarget?: string;
    exitEffectOpacity?:             number;
    exitEffectX?:                   number;
    exitEffectY?:                   number;
    exitEffectScale?:               number;
    exitEffectRotate?:              number;
    exitEffectRotateX?:             number;
    exitEffectRotateY?:             number;
    exitEffectTransition?:          TTransition;
    $control__pYL1xVNX3?:           ControlChy2ICUt;
    $control__lVo775Ew6?:           ControlChy2ICUt;
    $control__WHdVx1_03?:           ControlChy2ICUt;
    $control__N0qBbEQPa?:           ControlChy2ICUt;
    $control__WrqXM8L8J?:           ControlChy2ICUt;
    borderEnabled?:                 boolean;
    borderWidth?:                   number;
    borderColor?:                   string;
    borderStyle?:                   BorderStyle;
    borderPerSide?:                 boolean;
    borderTop?:                     number;
    borderRight?:                   number;
    borderBottom?:                  number;
    borderLeft?:                    number;
    $control__zhpizE_qy?:           ControlChy2ICUt;
    $control__J5ecvVtpH?:           ControlChy2ICUt;
    $control__zbYWV9U8o?:           ControlCAph44CGClass;
    $control__CAph44_Cg?:           ControlCAph44CGClass;
    $control__p9EjTus8T?:           ControlCAph44CGClass;
    $control__uAuD9CQ27?:           ControlCAph44CGClass;
    bottom?:                        number | null;
    aspectRatio?:                   number;
    fillType?:                      string;
    fillImage?:                     FillImage | string;
    fillImageOriginalName?:         string;
    fillImagePixelWidth?:           number;
    fillImagePixelHeight?:          number;
    intrinsicWidth?:                number;
    intrinsicHeight?:               number;
    visible?:                       boolean | FillImage;
    locked?:                        boolean;
    html?:                          string;
    stylePresetHeading1?:           StylePresetHeading1;
    stylePresetHeading2?:           StylePresetHeading2;
    stylePresetHeading3?:           StylePresetHeading3;
    stylePresetParagraph?:          string;
    stylePresetLink?:               StylePresetLink;
    textContent?:                   FillImage;
    stylePresetHeading4?:           StylePresetHeading4;
    stylePresetHeading5?:           StylePresetHeading5;
    boxShadows?:                    BoxShadow[];
    radiusTopLeft?:                 number;
    radiusTopRight?:                number;
    radiusBottomRight?:             number;
    radiusBottomLeft?:              number;
    pathBoolean?:                   number;
    strokeEnabled?:                 boolean;
    strokeAlignment?:               StackAlignment;
    strokeWidth?:                   number;
    strokeColor?:                   StrokeColor;
    lineJoin?:                      LineJoin;
    lineCap?:                       LineCap;
    strokeMiterLimit?:              number;
    strokeDashArray?:               string;
    strokeDashOffset?:              number;
    x?:                             number;
    y?:                             number;
    pathSegments?:                  PathSegment[];
    pathClosed?:                    boolean;
    fillLinearGradient?:            FillLinearGradient;
    fillRadialGradient?:            FillRadialGradient;
    $control__IaWp7lx6r?:           PurpleControl;
    $control__ecriYSsUC?:           PurpleControl;
    $control__variant?:             ControlChy2ICUt;
    $control__SPRj6A3tJ?:           ControlSPRj6A3TJ;
    $control__moTqfDim_?:           PurpleControl;
    $control__UygWIK1Ch?:           PurpleControl;
    opacity?:                       number;
    $control__SU5SHTAmT?:           FadeContent;
    radiusPerCorner?:               boolean;
    linkTextColor?:                 string;
    linkTextDecoration?:            string;
    $control__Es9VoLD6A?:           ControlChy2ICUt;
}

export type ControlCAph44CGClass = {
    type:  ControlCMXXJY0N6Type;
    value: LinkClass;
}

export type LinkClass = {
    webPageId: EID;
    type:      PurpleType;
}

export type EID = "augiA20Il" | "XCpKyV6kk";

export type PurpleControl = {
    type:  ExpectedTypeEnum;
    value: FillImage | string;
}

export type ControlSPRj6A3TJ = {
    type:  ControlCMXXJY0N6Type;
    value: boolean | FillImage;
}

export type StickyClass = "FrameNode" | "CodeComponentNode" | "RichTextNode" | "BooleanShapeNode" | "PathNode";

export type StickyChild = {
    id:                             string;
    __class:                        TentacledClass;
    parentid:                       string;
    fillEnabled?:                   boolean;
    layout?:                        Layout;
    gap?:                           number;
    stackAlignment?:                StackAlignment;
    stackDirection?:                StackDirection;
    stackDistribution?:             StackAlignment;
    stackWrapEnabled?:              boolean;
    overflow?:                      Overflow;
    padding?:                       number;
    paddingPerSide?:                boolean;
    paddingTop?:                    number;
    paddingRight?:                  number;
    paddingBottom?:                 number;
    paddingLeft?:                   number;
    left?:                          number | null;
    top?:                           number | null;
    centerAnchorX?:                 number;
    centerAnchorY?:                 number;
    width:                          number;
    height:                         number;
    heightType?:                    number;
    name?:                          string;
    children?:                      IndigoChild[];
    aspectRatio?:                   number | null;
    boxShadows?:                    BoxShadow[];
    fillType?:                      string;
    fillColor?:                     string;
    fillImage?:                     FillImage | string;
    fillImageOriginalName?:         string;
    fillImagePixelWidth?:           number;
    fillImagePixelHeight?:          number;
    intrinsicWidth?:                number;
    intrinsicHeight?:               number;
    widthType?:                     number;
    radius?:                        number;
    altAttribute?:                  string;
    fillLinearGradient?:            FillLinearGradient;
    fillRadialGradient?:            FillRadialGradient;
    fillImageResize?:               string;
    right?:                         number | null;
    bottom?:                        number | null;
    codeComponentIdentifier?:       string;
    $control__YlFE95LJY?:           ControlYlFE95LJY;
    $control__WLf_RU6cs?:           ControlChy2ICUt;
    $control__GRk91luNX?:           ControlChy2ICUt;
    $control__EOeYOmG0n?:           ControlCAph44CGClass;
    $control__D3Ln_CQ_l?:           ControlChy2ICUt;
    $control__Tz5QpA9L3?:           ControlChy2ICUt;
    $control__uvt8apOWc?:           ControlChy2ICUt;
    gridItemFillCellWidth?:         boolean;
    gridItemFillCellHeight?:        boolean;
    $control__kowOJP8aT?:           ControlChy2ICUt;
    $control__AUGhbEqUS?:           ControlChy2ICUt;
    $control__lP1A7ByZc?:           ControlChy2ICUt;
    duplicatedFrom?:                string[];
    $control__HMBRlmBZ4?:           ControlChy2ICUt;
    scrollTargetEnabled?:           boolean;
    elementId?:                     string;
    styleAppearEffectEnabled?:      boolean;
    styleAppearEffectThreshold?:    number;
    styleAppearEffectAnimateOnce?:  boolean;
    styleAppearEffectOpacity?:      number;
    styleAppearEffectX?:            number;
    styleAppearEffectY?:            number;
    styleAppearEffectScale?:        number;
    styleAppearEffectTransition?:   TTransition;
    styleAppearEffectRotate?:       number;
    styleAppearEffectRotateX?:      number;
    styleAppearEffectRotateY?:      number;
    styleAppearEffectPerspective?:  number;
    styleAppearEffectLocked?:       boolean;
    styleAppearEffectTrigger?:      StyleAppearEffectTrigger;
    enterEffectEnabled?:            boolean;
    enterEffectOpacity?:            number;
    enterEffectX?:                  number;
    enterEffectY?:                  number;
    enterEffectScale?:              number;
    enterEffectTransition?:         TTransition;
    enterEffectRotate3d?:           boolean;
    enterEffectRotate?:             number;
    enterEffectRotateX?:            number;
    enterEffectRotateY?:            number;
    exitEffectEnabled?:             boolean;
    exitEffectOpacity?:             number;
    exitEffectX?:                   number;
    exitEffectY?:                   number;
    exitEffectScale?:               number;
    exitEffectRotate?:              number;
    exitEffectRotateX?:             number;
    exitEffectRotateY?:             number;
    exitEffectTransition?:          TTransition;
    styleAppearEffectScrollTarget?: string;
    $control__IaWp7lx6r?:           ControlChy2ICUt;
    $control__ecriYSsUC?:           ControlChy2ICUt;
    $control__variant?:             ControlChy2ICUt;
    $control__moTqfDim_?:           ControlChy2ICUt;
    locked?:                        boolean;
    svg?:                           string;
    visible?:                       boolean;
    html?:                          string;
    stylePresetHeading1?:           StylePresetHeading1;
    stylePresetHeading2?:           StylePresetHeading2;
    stylePresetHeading3?:           StylePresetHeading3;
    stylePresetParagraph?:          string;
    stylePresetLink?:               StylePresetLink;
    stylePresetHeading4?:           StylePresetHeading4;
    textContent?:                   TextContent;
    stylePresetHeading5?:           StylePresetHeading5;
    pathSegments?:                  PathSegment[];
    pathClosed?:                    boolean;
    x?:                             number;
    y?:                             number;
    borderPerSide?:                 boolean;
    borderTop?:                     number;
    borderRight?:                   number;
    borderBottom?:                  number;
    borderLeft?:                    number;
    radiusTopLeft?:                 number;
    radiusTopRight?:                number;
    radiusBottomRight?:             number;
    radiusBottomLeft?:              number;
    isVariant?:                     boolean;
    isBreakpoint?:                  boolean;
    variantTransition?:             TTransition;
    zIndex?:                        number;
    onTap?:                         OnTap[];
    borderEnabled?:                 boolean;
    borderWidth?:                   number;
    borderColor?:                   string;
    borderStyle?:                   BorderStyle;
    position?:                      string;
    $control__U4mpI1xlv?:           ControlU4MpI1Xlv;
    $control__hPVXDFbeA?:           ControlChy2ICUt;
    opacity?:                       number;
    $control__B2xEeBWwW?:           ControlKYZr0S9QSClass;
    $control__UnM2NP4sM?:           ControlKYZr0S9QSClass;
    radiusPerCorner?:               boolean;
    constraintsLocked?:             boolean;
    linkSmoothScroll?:              boolean;
    link?:                          LinkClass;
    $control__HJzZlQm7p?:           ControlHJzZlQm7PClass;
    $control__b2UEbvjCz?:           ControlChy2ICUt;
    $control__FOdt_Q22J?:           ControlChy2ICUt;
    $control__Xf0re2Pc_?:           ControlHJzZlQm7PClass;
    collectionFilters?:             CollectionFilters;
    dataIdentifier?:                string;
    gridColumnCount?:               number;
    gridRowCount?:                  number;
    gridAlignment?:                 StackAlignment;
    gridColumnWidthType?:           string;
    gridColumnWidth?:               number;
    gridColumnMinWidth?:            number;
    gridRowHeightType?:             string;
    gridRowHeight?:                 number;
    paragraphSpacing?:              number;
    htmlContent?:                   FillImage;
}

export type ControlHJzZlQm7PClass = {
    type:  ControlCMXXJY0N6Type;
    value: ControlHJzZlQm7PValue;
}

export type ControlHJzZlQm7PValue = {
    webPageId?: EID;
    type:       PurpleType;
    url?:       string;
}

export type ControlU4MpI1Xlv = {
    type:  ControlCMXXJY0N6Type;
    value: OnTap[];
}

export type OnTap = {
    identifier:       string;
    actionIdentifier: ActionIdentifier;
    controls:         ValueControls;
    meta?:            Meta;
}

export type ActionIdentifier = "framer/useSetVariant" | "framer/useTriggerEvent";

export type ValueControls = {
    type:      ControlChy2ICUt;
    variantId: ControlChy2ICUt;
}

export type Meta = {
    delay?: number;
}

export type ControlYlFE95LJY = {
    type: ControlCMXXJY0N6Type;
}

export type IndigoChild = {
    id:                             string;
    __class:                        TentacledClass;
    parentid:                       string;
    codeComponentIdentifier?:       string;
    left?:                          number | null;
    top?:                           number | null;
    centerAnchorX?:                 number;
    centerAnchorY?:                 number;
    widthType?:                     number;
    heightType?:                    number;
    width?:                         number;
    height:                         number;
    $control__vf6dzrmtv?:           ControlCAph44CGClass;
    styleAppearEffectEnabled?:      boolean;
    styleAppearEffectThreshold?:    number;
    styleAppearEffectAnimateOnce?:  boolean;
    styleAppearEffectOpacity?:      number;
    styleAppearEffectX?:            number;
    styleAppearEffectY?:            number;
    styleAppearEffectScale?:        number;
    styleAppearEffectTransition?:   TTransition;
    styleAppearEffectRotate?:       number;
    styleAppearEffectRotateX?:      number;
    styleAppearEffectRotateY?:      number;
    styleAppearEffectPerspective?:  number;
    styleAppearEffectLocked?:       boolean;
    styleAppearEffectTrigger?:      StyleAppearEffectTrigger;
    enterEffectEnabled?:            boolean;
    enterEffectOpacity?:            number;
    enterEffectX?:                  number;
    enterEffectY?:                  number;
    enterEffectScale?:              number;
    enterEffectTransition?:         TTransition;
    enterEffectRotate3d?:           boolean;
    enterEffectRotate?:             number;
    enterEffectRotateX?:            number;
    enterEffectRotateY?:            number;
    exitEffectEnabled?:             boolean;
    $control__nC8xzRYN4?:           ControlChy2ICUt;
    duplicatedFrom?:                string[];
    zIndex?:                        number;
    $control__color?:               ControlChy2ICUt;
    $control__font?:                ControlFont;
    $control__cursor?:              ControlChy2ICUt;
    $control__delayType?:           FadeContent;
    $control__delayNumber?:         ControlGap;
    $control__pauseFor?:            ControlGap;
    $control__loop?:                FadeContent;
    $control__text?:                ControlChy2ICUt;
    $control__split?:               FadeContent;
    $control__cursorColor?:         ControlChy2ICUt;
    $control__autoStart?:           FadeContent;
    $control__tag?:                 ControlChy2ICUt;
    right?:                         number | null;
    $control__caretVisibility?:     FadeContent;
    minHeight?:                     string;
    name?:                          string;
    locked?:                        boolean;
    html?:                          string;
    stylePresetHeading1?:           StylePresetHeading1;
    stylePresetHeading2?:           StylePresetHeading2;
    stylePresetHeading3?:           StylePresetHeading3;
    stylePresetParagraph?:          string;
    stylePresetLink?:               StylePresetLink;
    stylePresetHeading4?:           StylePresetHeading4;
    stylePresetHeading5?:           StylePresetHeading5;
    visible?:                       boolean;
    borderEnabled?:                 boolean;
    borderWidth?:                   number;
    borderColor?:                   BorderColor;
    borderStyle?:                   BorderStyle;
    borderPerSide?:                 boolean;
    borderTop?:                     number;
    borderRight?:                   number;
    borderBottom?:                  number;
    borderLeft?:                    number;
    boxShadows?:                    any[];
    fillEnabled?:                   boolean;
    layout?:                        Layout;
    gap?:                           number;
    stackAlignment?:                StackAlignment;
    stackDirection?:                StackDirection;
    stackDistribution?:             StackAlignment;
    overflow?:                      Overflow;
    padding?:                       number;
    paddingPerSide?:                boolean;
    paddingTop?:                    number;
    paddingRight?:                  number;
    paddingBottom?:                 number;
    paddingLeft?:                   number;
    radius?:                        number;
    children?:                      IndecentChild[];
    stackWrapEnabled?:              boolean;
    bottom?:                        number | null;
    $control__CDRCusIHC?:           ControlChy2ICUt;
    aspectRatio?:                   number;
    $control__IaWp7lx6r?:           ControlChy2ICUt;
    $control__ecriYSsUC?:           ControlChy2ICUt;
    $control__variant?:             ControlChy2ICUt;
    $control__moTqfDim_?:           ControlChy2ICUt;
    $control__Xf0re2Pc_?:           ControlHJzZlQm7PClass;
    $control__FOdt_Q22J?:           ControlChy2ICUt;
    $control__JRpxGFjwH?:           FadeContent;
    $control__wsxRD5u41?:           FadeContent;
    $control__gT8MXhd7P?:           ControlChy2ICUt;
    fillType?:                      ExpectedTypeEnum;
    fillImage?:                     string;
    fillImageOriginalName?:         string;
    fillImagePixelWidth?:           number;
    fillImagePixelHeight?:          number;
    intrinsicWidth?:                number;
    intrinsicHeight?:               number;
    rotation?:                      number;
    exitEffectOpacity?:             number;
    exitEffectX?:                   number;
    exitEffectY?:                   number;
    exitEffectScale?:               number;
    exitEffectRotate?:              number;
    exitEffectRotateX?:             number;
    exitEffectRotateY?:             number;
    exitEffectTransition?:          TTransition;
    styleAppearEffectScrollTarget?: string;
    dataIdentifier?:                string;
    collectionFilters?:             CollectionFilters;
    gridColumnCount?:               number;
    gridRowCount?:                  number;
    gridAlignment?:                 StackAlignment;
    gridColumnWidthType?:           string;
    gridColumnWidth?:               number;
    gridColumnMinWidth?:            number;
    gridRowHeightType?:             string;
    gridRowHeight?:                 number;
    constraintsLocked?:             boolean;
    collectionLimit?:               number;
    $control__BSI8Bj20M?:           ControlChy2ICUt;
    $control__DWI0ZMlLS?:           ControlChy2ICUt;
    textContent?:                   FillImage;
    font?:                          string;
    textColor?:                     string;
    fontSize?:                      number;
    letterSpacing?:                 Array<number | LetterSpacingEnum> | number;
    textAlignment?:                 string;
    styledText?:                    StyledText;
    opacity?:                       number;
    userSelect?:                    string;
    fillImageResize?:               string;
    gridItemFillCellWidth?:         boolean;
    gridItemFillCellHeight?:        boolean;
    linkTextColor?:                 string;
    linkTextDecoration?:            string;
    fillColor?:                     string;
    link?:                          Link;
    radiusTopLeft?:                 number;
    radiusTopRight?:                number;
    radiusBottomRight?:             number;
    radiusBottomLeft?:              number;
    $control__kYZr0S9qS?:           ControlChy2ICUt;
    $control__ksLTK3W4O?:           ControlChy2ICUt;
}

export type ControlFont = {
    type:  string;
    value: ControlFontValue;
}

export type ControlFontValue = {
    fontFamily:       ControlChy2ICUt;
    fontSize:         ControlGap;
    fontWeight:       ControlGap;
    textAlign:        ControlChy2ICUt;
    letterSpacing:    ControlGap;
    offset:           ControlGap;
    whiteSpace:       ControlChy2ICUt;
    lineHeight:       ControlGap;
    lineHeightPixels: ControlGap;
    lineHeightType:   FadeContent;
}

export type IndecentChild = {
    id:                            string;
    __class:                       TentacledClass;
    parentid:                      string;
    codeComponentIdentifier?:      TentacledCodeComponentIdentifier;
    left?:                         number | null;
    top?:                          number | null;
    widthType?:                    number;
    heightType?:                   number;
    width:                         number;
    height:                        number;
    $control__Xf0re2Pc_?:          ControlHJzZlQm7PClass;
    name?:                         string;
    $control__FOdt_Q22J?:          ControlChy2ICUt;
    children?:                     HilariousChild[];
    duplicatedFrom?:               string[];
    $control__JRpxGFjwH?:          FadeContent;
    $control__wsxRD5u41?:          FadeContent;
    $control__gT8MXhd7P?:          ControlChy2ICUt;
    $control__variant?:            ControlChy2ICUt;
    boxShadows?:                   any[];
    fillEnabled?:                  boolean;
    locked?:                       boolean;
    overflow?:                     Overflow;
    centerAnchorX?:                number;
    centerAnchorY?:                number;
    layout?:                       Layout;
    gap?:                          number;
    stackAlignment?:               StackAlignment;
    stackDirection?:               StackDirection;
    stackDistribution?:            StackAlignment;
    stackWrapEnabled?:             boolean;
    padding?:                      number;
    paddingPerSide?:               boolean;
    paddingTop?:                   number;
    paddingRight?:                 number;
    paddingBottom?:                number;
    paddingLeft?:                  number;
    styleAppearEffectEnabled?:     boolean;
    styleAppearEffectThreshold?:   number;
    styleAppearEffectAnimateOnce?: boolean;
    styleAppearEffectOpacity?:     number;
    styleAppearEffectX?:           number;
    styleAppearEffectY?:           number;
    styleAppearEffectScale?:       number;
    styleAppearEffectTransition?:  TTransition;
    styleAppearEffectRotate?:      number;
    styleAppearEffectRotateX?:     number;
    styleAppearEffectRotateY?:     number;
    styleAppearEffectPerspective?: number;
    styleAppearEffectLocked?:      boolean;
    styleAppearEffectTrigger?:     StyleAppearEffectTrigger;
    enterEffectEnabled?:           boolean;
    enterEffectOpacity?:           number;
    enterEffectX?:                 number;
    enterEffectY?:                 number;
    enterEffectScale?:             number;
    enterEffectTransition?:        TTransition;
    enterEffectRotate3d?:          boolean;
    enterEffectRotate?:            number;
    enterEffectRotateX?:           number;
    enterEffectRotateY?:           number;
    exitEffectEnabled?:            boolean;
    visible?:                      boolean;
    $control__PD2L3o9wG?:          ControlChy2ICUt;
    $control__U7jZzdJpW?:          ControlChy2ICUt;
    $control__fccsr9hYh?:          ControlChy2ICUt;
    link?:                         Link;
    gridItemFillCellWidth?:        boolean;
    gridItemFillCellHeight?:       boolean;
    fillColor?:                    string;
    borderEnabled?:                boolean;
    borderWidth?:                  number;
    borderColor?:                  BorderColor;
    borderStyle?:                  BorderStyle;
    borderPerSide?:                boolean;
    borderTop?:                    number;
    borderRight?:                  number;
    borderBottom?:                 number;
    borderLeft?:                   number;
    radiusTopLeft?:                number;
    radiusTopRight?:               number;
    radiusBottomRight?:            number;
    radiusBottomLeft?:             number;
    radius?:                       number;
    intrinsicWidth?:               number;
    intrinsicHeight?:              number;
    svg?:                          string;
    opacity?:                      number;
    html?:                         string;
    stylePresetHeading1?:          StylePresetHeading1;
    stylePresetHeading2?:          StylePresetHeading2;
    stylePresetHeading3?:          StylePresetHeading3;
    stylePresetParagraph?:         StylePresetParagraph;
    stylePresetLink?:              StylePresetLink;
    stylePresetHeading5?:          StylePresetHeading5;
    stylePresetHeading4?:          StylePresetHeading4;
    $control__Pb0KMdHqc?:          ControlChy2ICUt;
    fillType?:                     ExpectedTypeEnum;
    fillImage?:                    FillImage;
    bottom?:                       number;
    right?:                        number;
}

export type HilariousChild = {
    id:                       string;
    __class:                  TentacledClass;
    parentid:                 string;
    fillEnabled?:             boolean;
    layout?:                  Layout;
    gap?:                     number;
    stackAlignment?:          StackAlignment;
    stackDirection?:          StackDirection;
    stackDistribution?:       StackAlignment;
    stackWrapEnabled?:        boolean;
    overflow?:                Overflow;
    padding?:                 number;
    paddingPerSide?:          boolean;
    paddingTop?:              number;
    paddingRight?:            number;
    paddingBottom?:           number;
    paddingLeft?:             number;
    top?:                     number | null;
    bottom?:                  number;
    centerAnchorX?:           number;
    centerAnchorY?:           number;
    width:                    number;
    height:                   number;
    heightType?:              number;
    widthType?:               number;
    name?:                    string;
    children?:                AmbitiousChild[];
    duplicatedFrom?:          string[];
    codeComponentIdentifier?: FluffyCodeComponentIdentifier;
    left?:                    number | null;
    $control__IeRmjDLDf?:     ControlAK9PxkEvJClass;
    fillType?:                ExpectedTypeEnum;
    fillImage?:               FillImage;
    radius?:                  number;
    locked?:                  boolean;
    html?:                    string;
    stylePresetHeading1?:     StylePresetHeading1;
    stylePresetHeading2?:     StylePresetHeading2;
    stylePresetHeading3?:     StylePresetHeading3;
    stylePresetParagraph?:    StylePresetParagraph;
    stylePresetLink?:         StylePresetLink;
    stylePresetHeading5?:     StylePresetHeading5;
    stylePresetHeading4?:     StylePresetHeading4;
    $control__Pb0KMdHqc?:     ControlChy2ICUt;
    minWidth?:                number;
    borderEnabled?:           boolean;
    borderWidth?:             number;
    borderColor?:             BorderColor;
    borderStyle?:             BorderStyle;
    borderPerSide?:           boolean;
    borderTop?:               number;
    borderRight?:             number;
    borderBottom?:            number;
    borderLeft?:              number;
    boxShadows?:              any[];
    link?:                    LinkClass;
    right?:                   null;
    $control__variant?:       ControlChy2ICUt;
}

export type AmbitiousChild = {
    id:                     string;
    __class:                TentacledClass;
    parentid:               string;
    name?:                  string;
    locked?:                boolean;
    widthType?:             number;
    heightType?:            number;
    width:                  number;
    height:                 number;
    html?:                  string;
    stylePresetHeading1?:   StylePresetHeading1;
    stylePresetHeading2?:   StylePresetHeading2;
    stylePresetHeading3?:   StylePresetHeading3;
    stylePresetParagraph?:  StylePresetParagraph;
    stylePresetLink?:       StylePresetLink;
    top?:                   number | null;
    centerAnchorX?:         number;
    centerAnchorY?:         number;
    left?:                  null;
    stylePresetHeading4?:   StylePresetHeading4;
    stylePresetHeading5?:   StylePresetHeading5;
    fillEnabled?:           boolean;
    layout?:                Layout;
    gap?:                   number;
    stackAlignment?:        StackAlignment;
    stackDirection?:        StackDirection;
    stackDistribution?:     StackAlignment;
    stackWrapEnabled?:      boolean;
    overflow?:              Overflow;
    padding?:               number;
    paddingPerSide?:        boolean;
    paddingTop?:            number;
    paddingRight?:          number;
    paddingBottom?:         number;
    paddingLeft?:           number;
    bottom?:                number;
    children?:              CunningChild[];
    duplicatedFrom?:        string[];
    minWidth?:              number;
    borderEnabled?:         boolean;
    borderWidth?:           number;
    borderColor?:           BorderColor;
    borderStyle?:           BorderStyle;
    borderPerSide?:         boolean;
    borderTop?:             number;
    borderRight?:           number;
    borderBottom?:          number;
    borderLeft?:            number;
    boxShadows?:            any[];
    radius?:                number;
    textContent?:           TextContent;
    maxHeight?:             string;
    opacity?:               number;
    aspectRatio?:           number;
    fillType?:              ExpectedTypeEnum;
    fillImage?:             string;
    fillImageOriginalName?: string;
    fillImagePixelWidth?:   number;
    fillImagePixelHeight?:  number;
    intrinsicWidth?:        number;
    intrinsicHeight?:       number;
    svg?:                   string;
}

export type CunningChild = {
    id:                     string;
    __class:                TentacledClass;
    parentid:               string;
    fillEnabled?:           boolean;
    overflow?:              Overflow;
    left?:                  null;
    top?:                   number | null;
    centerAnchorX?:         number;
    centerAnchorY?:         number;
    width:                  number;
    height:                 number;
    layout?:                Layout;
    gap?:                   number;
    stackAlignment?:        StackAlignment;
    stackDirection?:        StackDirection;
    stackDistribution?:     StackAlignment;
    stackWrapEnabled?:      boolean;
    padding?:               number;
    paddingPerSide?:        boolean;
    paddingTop?:            number;
    paddingRight?:          number;
    paddingBottom?:         number;
    paddingLeft?:           number;
    widthType?:             number;
    children?:              MagentaChild[];
    name?:                  string;
    locked?:                boolean;
    heightType?:            number;
    html?:                  string;
    stylePresetHeading1?:   StylePresetHeading1;
    stylePresetHeading2?:   StylePresetHeading2;
    stylePresetHeading3?:   StylePresetHeading3;
    stylePresetParagraph?:  StylePresetParagraph;
    stylePresetLink?:       StylePresetLink;
    stylePresetHeading4?:   StylePresetHeading4;
    stylePresetHeading5?:   StylePresetHeading5;
    duplicatedFrom?:        string[];
    textContent?:           TextContent;
    maxHeight?:             string;
    opacity?:               number;
    aspectRatio?:           number;
    fillType?:              ExpectedTypeEnum;
    fillImage?:             string;
    fillImageOriginalName?: string;
    fillImagePixelWidth?:   number;
    fillImagePixelHeight?:  number;
    intrinsicWidth?:        number;
    intrinsicHeight?:       number;
    borderEnabled?:         boolean;
    borderWidth?:           number;
    borderColor?:           BorderColor;
    borderStyle?:           BorderStyle;
    borderPerSide?:         boolean;
    borderTop?:             number;
    borderRight?:           number;
    borderBottom?:          number;
    borderLeft?:            number;
    boxShadows?:            any[];
    radius?:                number;
}

export type MagentaChild = {
    id:                       string;
    __class:                  TentacledClass;
    duplicatedFrom?:          string[];
    parentid:                 string;
    codeOverrideEnabled?:     boolean;
    codeOverrideFile?:        string;
    gridItemFillCellWidth?:   boolean;
    gridItemFillCellHeight?:  boolean;
    linkTextColor?:           string;
    linkTextDecoration?:      string;
    left?:                    number | null;
    top?:                     number | null;
    centerAnchorX:            number;
    centerAnchorY:            number;
    widthType:                number;
    heightType?:              number;
    width:                    number;
    height:                   number;
    html?:                    string;
    stylePresetHeading1?:     string;
    stylePresetHeading2?:     StylePresetHeading2;
    stylePresetHeading3?:     StylePresetHeading3;
    stylePresetParagraph?:    string;
    stylePresetLink?:         string;
    right?:                   null;
    codeOverrideIdentifier?:  string;
    codeOverrideName?:        string;
    stylePresetHeading5?:     StylePresetHeading5;
    codeComponentIdentifier?: PurpleCodeComponentIdentifier;
    $control__k5HhXu7Jn?:     ControlChy2ICUt;
    $control__dhr6Eryk1?:     ControlCAph44CGClass;
}

export type PurpleCodeComponentIdentifier = "local-module:canvasComponent/HboWyb5qi:default";

export type StylePresetHeading2 = "FIstDthqj";

export type StylePresetHeading3 = "uKO_ptksm";

export type StylePresetHeading5 = "oO0T_QVXO";

export type Layout = "stack" | "grid";

export type Overflow = "hidden" | "visible";

export type StackAlignment = "center" | "start" | "end" | "space-between";

export type StackDirection = "horizontal" | "vertical";

export type StylePresetHeading1 = "stylesPresetHeading1" | "ZSzgV3xdi";

export type StylePresetHeading4 = "cRmkgGutV";

export type StylePresetLink = "stylesPresetLink";

export type StylePresetParagraph = "stylesPresetParagraph" | "jRlNrjZfR" | "eshFTHo2K" | "Q4kC2bTJ2";

export type TextContent = {
    type:        FillImageType;
    outputType?: ExpectedTypeEnum;
    startValue?: FillImage;
    transforms?: Transform[];
    id?:         string;
    providerId?: string;
}

export type Transform = {
    id:        string;
    type:      string;
    name:      string;
    locale:    string;
    dateStyle: string;
}

export type FluffyCodeComponentIdentifier = "local-module:canvasComponent/rWpbaXaRc:default" | "local-module:canvasComponent/cwMgH3g_H:default";

export type TentacledCodeComponentIdentifier = "local-module:canvasComponent/j1CXYH1vu:default" | "local-module:canvasComponent/UlD_B5dnq:default" | "local-module:canvasComponent/cwMgH3g_H:default";

export type TTransition = {
    type:      VariantTransitionType;
    ease:      number[];
    duration:  number;
    delay:     number;
    stiffness: number;
    damping:   number;
    mass:      number;
}

export type VariantTransitionType = "tween" | "spring";

export type Link = {
    webPageId:     string;
    pathVariables: LinkPathVariables;
    type:          PurpleType;
}

export type LinkPathVariables = {
    kwdxCQMk5: FillImage;
}

export type StyleAppearEffectTrigger = "onMount" | "onScrollTarget";

export type CollectionFilters = {
    filters: any[];
}

export type LetterSpacingEnum = "px" | "em";

export type StyledText = {
    __class:   string;
    blocks:    Block[];
    entityMap: NqmPSALFX;
}

export type Block = {
    text:              string;
    type:              string;
    key:               string;
    inlineStyleRanges: any[];
    depth:             number;
    data:              NqmPSALFX;
    entityRanges:      any[];
}

export type NqmPSALFX = {
}

export type FillLinearGradient = {
    __class: string;
    alpha:   number;
    angle:   number;
    stops:   Stop[];
}

export type Stop = {
    __class:  StopClass;
    value:    string;
    position: number;
    id:       string;
}

export type StopClass = "GradientColorStop";

export type FillRadialGradient = {
    __class:       string;
    alpha:         number;
    widthFactor:   number;
    heightFactor:  number;
    centerAnchorX: number;
    centerAnchorY: number;
    stops:         Stop[];
}

export type PathSegment = {
    __class:         PathSegmentClass;
    x:               number;
    y:               number;
    handleMirroring: HandleMirroring;
    handleOutX:      number;
    handleOutY:      number;
    handleInX:       number;
    handleInY:       number;
    radius:          number;
}

export type PathSegmentClass = "PathSegment";

export type HandleMirroring = "disconnected" | "symmetric" | "straight";

export type LineCap = "butt";

export type LineJoin = "miter";

export type StrokeColor = "rgba(0,0,0,1)";

export type ExportOption = {
    __class:           ExportOptionClass;
    id:                ExportOptionID;
    enabled:           boolean;
    type:              ExportOptionType;
    scale:             number;
    nameExtension:     NameExtension;
    nameExtensionMode: NameExtensionMode;
}

export type ExportOptionClass = "ExportOptions";

export type ExportOptionID = "T6B806bT8";

export type NameExtension = "@2x";

export type NameExtensionMode = "Suffix";

export type ExportOptionType = "png";

export type FillConicGradient = {
    __class:       string;
    alpha:         number;
    angle:         number;
    centerAnchorX: number;
    centerAnchorY: number;
    stops:         Stop[];
}

export type Group = {
    type:     GroupType;
    id:       string;
    name:     string;
    imageURL: null;
}

export type GroupType = "team";

export type On = {
    identifier:       string;
    actionIdentifier: ActionIdentifier;
    controls:         PurpleControls;
    meta?:            Meta;
}

export type PurpleControls = {
    type?:      ControlChy2ICUt;
    variantId?: ControlChy2ICUt;
    id?:        ControlChy2ICUt;
}

export type OwnerType = "project";

export type PreviewSettings = {
    __class:    string;
    responsive: boolean;
    touch:      boolean;
}

export type ReplicaInfo = {
    master:        string;
    overrides:     Overrides;
    inheritsFrom?: string;
}

export type Overrides = {
    BbrVhW7H3?:              BbrVhW7H3;
    WQLkyLRf1?:              BmiaUHFTm;
    JHYqOA0j9?:              JhYqOa0J9;
    gpGTP2Q1s?:              GpGtp2Q1S;
    hlAssf8uz?:              FaAaHRtMk;
    aEA8bVo0g?:              EazGp5NfF;
    R3GKnxwCF?:              I1672765011139587;
    hmKJoo3n2?:              HecThwTx;
    r2FiTm9eM?:              R2FiTm9EM;
    EazGp5NfF?:              EazGp5NfF;
    WYHQ0ziGo?:              EazGp5NfF;
    tCuiK2vZJ?:              HecThwTx;
    XxFEp7jnf?:              EuJpOz4P;
    SDMHFn0In?:              HecThwTx;
    mRbBdKM8s?:              EuJpOz4P;
    KIEB3fglK?:              Kieb3FglK;
    D688iUIDv?:              D688IUIDv;
    l4jE7Lm4b?:              I1672765011139587;
    wzVNqdbfx?:              I1672765011139587;
    m1ULPeW4F?:              JhYqOa0J9;
    SiA6ZB82F?:              SiA6ZB82F;
    Y51NpPbXa?:              Y51NPPbXa;
    LLf5oc9eZ?:              LLf5Oc9EZ;
    P98YAJFti?:              P98YajFti;
    AOKwt5tx8?:              AoKwt5Tx8;
    EHOMkqcYH?:              Dh0JiFKyL;
    b9WwkJtYh?:              FGcqm1ZhA;
    qaWn5aC9X?:              QAWn5AC9X;
    WYxkOw0Jz?:              HZ8WdWe;
    ZlUzOhdhY?:              BUgAmBqLy;
    EiqmvOzCu?:              BUgAmBqLy;
    a8pq_at7T?:              FaAaHRtMk;
    Md2qdKg8a?:              FaAaHRtMk;
    cSUjkW0AO?:              HzLDd4Qba;
    VZeMVgwqP?:              CzSu2XRs5;
    D9MvfWQ7P?:              D9MvfWq7P;
    lLnQlESGu?:              FaAaHRtMk;
    jRLWbOjL7?:              D688IUIDv;
    bR5prnSzb?:              { [key: string]: ControlChy2ICUt };
    KH8gYKtDl?:              HZ8WdWe;
    SQF9J157z?:              Sqf9J157Z;
    sEgfxpIEZ?:              H72_T8J;
    JuxkUnlTD?:              JuxkUnlTD;
    lG6sq7opN?:              HZ8WdWe;
    vKtJLz2lm?:              Sqf9J157Z;
    HzLDd4Qba?:              HzLDd4Qba;
    EBLVW3tet?:              EBLVW3Tet;
    vogqjT4xS?:              HzLDd4Qba;
    bzhayM78h?:              HZ8WdWe;
    wJ8kiG5Qb?:              Y51NPPbXa;
    O0vs7Oxjj?:              O0Vs7Oxjj;
    kWZYm4j6D?:              Q3U1Q95YZ;
    WKHkAIb7z?:              D9MvfWq7P;
    NFb53T7FL?:              I1672765011139587;
    tkr4omACv?:              A1T0Xtd7M;
    S9PaToELN?:              A1T0Xtd7M;
    T66zFAo58?:              A1T0Xtd7M;
    eg825Q2Pq?:              A1T0Xtd7M;
    XDhQ589Rr?:              A1T0Xtd7M;
    IEvZu7e77?:              A1T0Xtd7M;
    pkJQ1O8lu?:              Jul6OfVzx;
    VcIcWD1HA?:              D9MvfWq7P;
    jvxk8am_e?:              Jvxk8AmE;
    XQtJ3p04n?:              JhYqOa0J9;
    R1A0VC21Z?:              CzSu2XRs5;
    tc2eIPJsc?:              Y51NPPbXa;
    fEbvH1XbJ?:              FCNbrdUct;
    KwtuuqbDB?:              HecThwTx;
    wcQJiXQGW?:              { [key: string]: ControlChy2ICUt };
    avTUZfoLL?:              BvtkCgi7Z;
    x7EpqUQjU?:              BvtkCgi7Z;
    WBwecLfWv?:              BvtkCgi7Z;
    k79CddoVt?:              K79CddoVT;
    RQFwAu3kt?:              HZ8WdWe;
    wSko8jmXT?:              HzLDd4Qba;
    yP_vYyqwl?:              EiPp5NPaN;
    Lj9uuuWmT?:              Lj9UuuWmT;
    gkEv5xSuH?:              Pzo2Kay8E;
    Pzo2kay8E?:              Pzo2Kay8E;
    qRhpZcWmk?:              D9MvfWq7P;
    LGepAuIUs?:              BUgAmBqLy;
    PPLVG9CkX?:              BUgAmBqLy;
    Entfg8muO?:              BUgAmBqLy;
    RUX8u7fg8?:              EuJpOz4P;
    qX8uv4WHI?:              P4IPdvsFb;
    ttaA153w3?:              P4IPdvsFb;
    wLh__N3Aq?:              HRl7Ad2Zu;
    cYSvQ3SBT?:              HRl7Ad2Zu;
    iXeeUfzxM?:              P98YajFti;
    xyq6u1sad?:              Xyq6U1Sad;
    qaPIOtM0S?:              FaAaHRtMk;
    qiFfpi1B4?:              FaAaHRtMk;
    XG7fvvaIL?:              FGcqm1ZhA;
    miGVZCAvd?:              FGcqm1ZhA;
    STuu8Cyx4?:              FGcqm1ZhA;
    FGcqm1ZhA?:              FGcqm1ZhA;
    zk6bYDMbr?:              GqoEXPQw6;
    xfixpzK_H?:              FCNbrdUct;
    H05t2J9Nr?:              H05T2J9Nr;
    ZSzgV3xdi?:              ZSzgV3Xdi;
    cRmkgGutV?:              ZSzgV3Xdi;
    HO1GLUdaI?:              HO1GLUdaI;
    "I1:1295;54:6343"?:      I1;
    nvj6GRWIN?:              Nvj6GRWIN;
    "I1:843;54:6378"?:       I1;
    "I1:843;54:6377"?:       I1843546377;
    rwWGdWNHS?:              FGcqm1ZhA;
    dIBDtF4lr?:              BmiaUHFTm;
    "I167:27650;111:39587"?: I1672765011139587;
    "I167:27650;111:39588"?: I1672765011139587;
    "I167:27650;111:39594"?: I1672765011139594;
    b8bk5DVy5?:              B8Bk5DVy5;
    LKg8Nx3gt?:              LKg8Nx3Gt;
    jPByWXpzO?:              A1T0Xtd7M;
    Wd5zfBO2U?:              Wd5ZfBo2U;
    ILlK56HMu?:              A1T0Xtd7M;
    u9iMtndWM?:              A1T0Xtd7M;
    UgRDJLact?:              P4IPdvsFb;
    zz1JJU7o5?:              P4IPdvsFb;
    e9td2SLG1?:              E9Td2SLG1;
    r8tVVqp_M?:              R8TVVqpM;
    OQZqaQUvu?:              A1T0Xtd7M;
    GgVOs3h4w?:              A1T0Xtd7M;
    qoIY498ax?:              P4IPdvsFb;
    P4iPdvsFb?:              P4IPdvsFb;
    HEC_ThwTx?:              HecThwTx;
    QD2ufOHxT?:              QD2UfOHxT;
    oohzUgKCU?:              BUgAmBqLy;
    HRl7ad2Zu?:              HRl7Ad2Zu;
    HAa8aqRdm?:              HAa8AqRDM;
    GG3fLjVzv?:              GG3FLjVzv;
    OHJNdFtEg?:              HAa8AqRDM;
    cbehj4ojy?:              HAa8AqRDM;
    "I167:34649;127:17117"?: CpwdzfPp5;
    "I167:34649;127:17116"?: A1T0Xtd7M;
    "I167:34649;128:16822"?: HRl7Ad2Zu;
    poCM82T8t?:              WdSes2PRM;
    "I167:34649;127:17110"?: A1T0Xtd7M;
    plJTJl558?:              Wd5ZfBo2U;
    Rj3uxT6s9?:              AwGuV2Z23;
    SbL7JCcP6?:              AwGuV2Z23;
    AWGuV2Z23?:              AwGuV2Z23;
    aOTYgFeiP?:              BmiaUHFTm;
    o59KmntB3?:              O59KmntB3;
    GTwCDkIDg?:              D688IUIDv;
    HgEYWu4KD?:              FaAaHRtMk;
    CPWDZFPp5?:              CpwdzfPp5;
    IYTUlzT0X?:              CpwdzfPp5;
    gnojl9Rux?:              EuJpOz4P;
    ywMHwwcgQ?:              HRl7Ad2Zu;
    FyPtTAJaD?:              A1T0Xtd7M;
    ZfzEJnEQt?:              A1T0Xtd7M;
    S29G5JrbB?:              CpwdzfPp5;
    "I167:34790;107:36061"?: I1673479010736061;
    "I167:34790;107:36056"?: FaAaHRtMk;
    "I167:34790;107:36054"?: I1673479010736054;
    Ss6tBuxYW?:              BmiaUHFTm;
    NoWVSQ3jR?:              Hu1Dk6Saa;
    Hu1dk6saa?:              Hu1Dk6Saa;
    grsZQcHZK?:              HRl7Ad2Zu;
    wGQnFEwQa?:              HRl7Ad2Zu;
    q7F_XsaAT?:              CpwdzfPp5;
    gxMOjwDxw?:              A1T0Xtd7M;
    IAb56gdlD?:              IAb56GdlD;
    hkguCyi4x?:              HkguCyi4X;
    UTShZx47I?:              EuJpOz4P;
    zv1JhgLQu?:              A1T0Xtd7M;
    BIUhDmLpQ?:              A1T0Xtd7M;
    TrJsulOOg?:              CpwdzfPp5;
    fcVD3ReUD?:              A1T0Xtd7M;
    eV12gRH3n?:              EV12GRH3N;
    "I167:27555;107:36109"?: A1T0Xtd7M;
    "I167:27555;107:36112"?: A1T0Xtd7M;
    "I167:27555;107:36113"?: A1T0Xtd7M;
    p4fNiQ8uc?:              MStHhDtVz;
    "I167:27555;107:36108"?: I16727555107361;
    "I167:27555;107:36111"?: I16727555107361;
    LmJxBYafa?:              CpwdzfPp5;
    MhgvEBQyh?:              A1T0Xtd7M;
    g8QQ4t0yJ?:              BmiaUHFTm;
    Z4hX2vv54?:              BmiaUHFTm;
    fEzpssc0a?:              Q3U1Q95YZ;
    cbX4jPZeO?:              P4IPdvsFb;
    P3ztxPgLj?:              A1T0Xtd7M;
    GrepBpolc?:              A1T0Xtd7M;
    XLvTwZvo0?:              P4IPdvsFb;
    iujrdZJo4?:              Q3U1Q95YZ;
    Q3U1q95yZ?:              Q3U1Q95YZ;
    aaoELC8yg?:              BmiaUHFTm;
    sZNw5DD6F?:              P4IPdvsFb;
    msHYgHawY?:              A1T0Xtd7M;
    uyOqRuGfl?:              A1T0Xtd7M;
    Ujd75jQon?:              P4IPdvsFb;
    gSuaTjgjj?:              GSuaTjgjj;
    L0_Zoq0lr?:              BmiaUHFTm;
    pOujLdWQ9?:              D688IUIDv;
    zh6iZCw8V?:              Wd5ZfBo2U;
    bG6g5SHdc?:              F12OPEIwz;
    F12oPeIWZ?:              F12OPEIwz;
    bXTeNn4yC?:              A1T0Xtd7M;
    zgl_3uSVu?:              A1T0Xtd7M;
    sTtfWSRbZ?:              JSLkGBSq;
    xiHYFIl7v?:              A1T0Xtd7M;
    TkX55CUP1?:              I1672765011139587;
    syZdcFOqi?:              A1T0Xtd7M;
    WqoWkmdOx?:              A1T0Xtd7M;
    JqOOD5CJ2?:              A1T0Xtd7M;
    Pmmfr2Glt?:              A1T0Xtd7M;
    lKv4Kvm5A?:              A1T0Xtd7M;
    eJwbQJ9jh?:              A1T0Xtd7M;
    URm_Yq9CV?:              A1T0Xtd7M;
    Y3YlZwOoR?:              A1T0Xtd7M;
    DeR3viv7T?:              DeR3Viv7T;
    eePdrJGQB?:              OAyDbfWk4;
    rsvwIlV8T?:              Bel6Eh36O;
    l7aKQ8E0F?:              OAyDbfWk4;
    EOBBtZ53M?:              EobBTZ53M;
    nwWkRQ5Qg?:              Q3U1Q95YZ;
    Dh0JiFKyL?:              Dh0JiFKyL;
    VtggDYFWW?:              A1T0Xtd7M;
    fyCMuQi9Z?:              A1T0Xtd7M;
    LFS53OdUt?:              A1T0Xtd7M;
    NWsvFc2Qo?:              A1T0Xtd7M;
    xtSDZL5cG?:              A1T0Xtd7M;
    uBVqeKkPF?:              FaAaHRtMk;
    BMIAUhfTm?:              BmiaUHFTm;
    p5uGyoHw_?:              A1T0Xtd7M;
    HnkLQjZKM?:              A1T0Xtd7M;
    A1T0xtd7m?:              A1T0Xtd7M;
    H4DnfYdsf?:              A1T0Xtd7M;
    GR3AfzVP2?:              Gr3AfzVp2;
    Nd5Q0cecK?:              AoKwt5Tx8;
    gPwPwXbDu?:              FaAaHRtMk;
    VKfrbxbtZ?:              VKfrbxbtZ;
    zXCCI3Yt6?:              ZXCCI3Yt6;
    xwBQGw0tJ?:              Q3U1Q95YZ;
    ps7lPis8b?:              Pzo2Kay8E;
    uZsyhXNh5?:              Gr3AfzVp2;
    Fmh_v78uN?:              AoKwt5Tx8;
    lCwLoDLaM?:              LCwLoDLaM;
    aaCkFVFOr?:              BUgAmBqLy;
    EhnHPNmSK?:              BUgAmBqLy;
    aCK3blECX?:              BUgAmBqLy;
    WdSes2prM?:              WdSes2PRM;
    EuJp_OZ4P?:              EuJpOz4P;
    CzSu2XRs5?:              CzSu2XRs5;
    fnNAJ37aB?:              BmiaUHFTm;
    QXrrM6b02?:              HecThwTx;
    yWI_xJFCe?:              YWIXJFCe;
    H_z8WD_we?:              HZ8WdWe;
    roOuQiWs5?:              D9MvfWq7P;
    A6eoop6oh?:              A6Eoop6Oh;
    BvtkCgi7z?:              BvtkCgi7Z;
    OMQ4I__nI?:              BvtkCgi7Z;
    aaIUmXv54?:              BvtkCgi7Z;
    GqoEXpQw6?:              GqoEXPQw6;
    lJwApbzVt?:              EuJpOz4P;
    se8lqMS9B?:              CzSu2XRs5;
    nq1XKC7GR?:              Nq1XKC7GR;
    l6Zxqr_F7?:              HZ8WdWe;
    L1XutU9TS?:              BmiaUHFTm;
    I9IbQ8n55?:              FaAaHRtMk;
    KWsEpJMxj?:              BvtkCgi7Z;
    HUnn7e8yR?:              BvtkCgi7Z;
    wN9bwb0ko?:              BvtkCgi7Z;
    gaKLDIUap?:              GaKLDIUap;
    setghdPTt?:              Q3U1Q95YZ;
    XRtovlTS3?:              Dh0JiFKyL;
    vt8uQXXOS?:              GpGtp2Q1S;
    M8lg8d48c?:              Bel6Eh36O;
    FAAaHRtMK?:              FaAaHRtMk;
    JFrGAlxF_?:              D688IUIDv;
    Nt53ElO25?:              FaAaHRtMk;
    U2P2vsRbj?:              U2P2VsRbj;
    fyKGL9dYu?:              U2P2VsRbj;
    XqhLacvlO?:              Tuwi8Xtnq;
    o96DGFeLy?:              FfeMiflkp;
    ffeMIFLKP?:              FfeMiflkp;
    kN0YKr6ov?:              FaAaHRtMk;
    KY9kfELwI?:              CpwdzfPp5;
    ewe9i_uyF?:              Dhtm13GyI;
    yvFUWt3wa?:              BvtkCgi7Z;
    tzSnDGTvv?:              BvtkCgi7Z;
    IHrI01Y5x?:              EuJpOz4P;
    ELS5YWPTk?:              BUgAmBqLy;
    NqmPsaLfX?:              NqmPSALFX;
    fCNbrdUCT?:              FCNbrdUct;
    pN9yg3BmQ?:              Q3U1Q95YZ;
    fZD8JpwVn?:              CzSu2XRs5;
    dqVbi7Rfs?:              BmiaUHFTm;
    wAJ11U8Lp?:              HecThwTx;
    srrZCIxDo?:              R2FiTm9EM;
    fk1PT0MJ_?:              EazGp5NfF;
    d1aOI7a2H?:              HecThwTx;
    cAPIc8Lyd?:              EuJpOz4P;
    srR1tvLuh?:              Kieb3FglK;
    fIQPLJh9l?:              BUgAmBqLy;
    kthru3JWk?:              CzSu2XRs5;
    QgurMtf5X?:              FaAaHRtMk;
    yaNUhKF1F?:              FaAaHRtMk;
    PNxnRsIT9?:              PNxnRsIT9;
    PB83LHvAG?:              D9MvfWq7P;
    FW5KR9BN7?:              D9MvfWq7P;
    UJbLIjFfM?:              FaAaHRtMk;
    vYoIac5_7?:              D688IUIDv;
    sNeSusL4y?:              { [key: string]: ControlChy2ICUt };
    PVBuL9eQN?:              HZ8WdWe;
    kpv7T4sHu?:              HZ8WdWe;
    PFYv7QXr7?:              PFYv7QXr7;
    AJo4n7u8T?:              AJo4N7U8T;
    YLXHl1PWK?:              AJo4N7U8T;
    UvIQtUMDn?:              UvIQtUMDN;
    BUgAmBQLy?:              BUgAmBqLy;
    Z1Q5h_zov?:              D9MvfWq7P;
    R_wND7aCn?:              CzSu2XRs5;
    fw0XyXlHH?:              HZ8WdWe;
    NlieDO3Vf?:              HzLDd4Qba;
    jul6ofVzx?:              Jul6OfVzx;
    DHTM13GyI?:              Dhtm13GyI;
    Homurel1F?:              BmiaUHFTm;
    wN6JyOGC9?:              Bel6Eh36O;
    Tuwi8xtnq?:              Tuwi8Xtnq;
    XKdC36j7Y?:              XKdC36J7Y;
    gsesMC5ML?:              H72_T8J;
    MStHhDtVz?:              MStHhDtVz;
    H_72t8j__?:              H72_T8J;
    lxbtRRaY6?:              H72_T8J;
    SpmLGeLMf?:              SPMLGeLMF;
    KyEYIB4J6?:              HRl7Ad2Zu;
    EiPp5NPaN?:              EiPp5NPaN;
    y21W91McB?:              GSuaTjgjj;
    NYTLdTJ7c?:              F12OPEIwz;
    jBUztgjAW?:              F12OPEIwz;
    jQVbzoOQ_?:              A1T0Xtd7M;
    oz9kcgzhp?:              A1T0Xtd7M;
    Js_LkGbSQ?:              JSLkGBSq;
    jRp_PVKqR?:              A1T0Xtd7M;
    Wl45KWtTz?:              A1T0Xtd7M;
    ihNB0IIbs?:              A1T0Xtd7M;
    bcShqyajh?:              A1T0Xtd7M;
    s0AsWRxVH?:              I1672765011139587;
    nHYQnGBKk?:              A1T0Xtd7M;
    gVhkuOrdb?:              A1T0Xtd7M;
    ZXxEAT1tu?:              A1T0Xtd7M;
    ZfkmsmQ4k?:              A1T0Xtd7M;
    QbQJ7vIH3?:              A1T0Xtd7M;
    m48ASbITn?:              A1T0Xtd7M;
    lp0o4iGVQ?:              A1T0Xtd7M;
    FndfxRyPi?:              DeR3Viv7T;
    TYw6vTRub?:              OAyDbfWk4;
    Bel6eh36o?:              Bel6Eh36O;
    OAyDBFWk4?:              OAyDbfWk4;
    xbAdfsrsd?:              EobBTZ53M;
    dCaWguTz9?:              Q3U1Q95YZ;
    JXR1TDAFR?:              Dh0JiFKyL;
    XB0SsRKSc?:              A1T0Xtd7M;
    F3IylHu9J?:              A1T0Xtd7M;
    t8edJKJsH?:              A1T0Xtd7M;
    s_Q1rZa1R?:              FaAaHRtMk;
}

export type A1T0Xtd7M = {
    stylePresetHeading2?:  StylePresetHeading2;
    stylePresetHeading3?:  StylePresetHeading3;
    stylePresetHeading5?:  StylePresetHeading5;
    visible?:              boolean;
    html?:                 string;
    stylePresetParagraph?: string;
}

export type A6Eoop6Oh = {
    stylePresetHeading5: StylePresetHeading5;
    html?:               string;
}

export type AJo4N7U8T = {
    paddingBottom:                 number;
    styleAppearEffectScrollTarget: string;
    stackDirection?:               StackDirection;
}

export type AoKwt5Tx8 = {
    stackDirection?: StackDirection;
    width?:          number;
    widthType?:      number;
    visible?:        boolean;
}

export type AwGuV2Z23 = {
    $control__variant?:   ControlChy2ICUt;
    $control__U4mpI1xlv?: ControlU4MpI1Xlv;
}

export type BmiaUHFTm = {
    top?:               number | null;
    left?:              number;
    right?:             number | null;
    bottom?:            number | null;
    centerAnchorX?:     number;
    centerAnchorY?:     number;
    name?:              string;
    width?:             number;
    widthType?:         number;
    stackDirection?:    StackDirection;
    heightType?:        number;
    paddingPerSide?:    boolean;
    paddingBottom?:     number;
    height?:            number;
    radius?:            number;
    aspectRatio?:       null;
    viewportHeight?:    number;
    paddingTop?:        number;
    stackDistribution?: StackAlignment;
    gap?:               number;
    itemsOrder?:        string[];
    fillColor?:         string;
    stackAlignment?:    StackAlignment;
}

export type BUgAmBqLy = {
    $control__variant?:   ControlChy2ICUt;
    width?:               number;
    widthType?:           number;
    $control__PD2L3o9wG?: ControlChy2ICUt;
    $control__IaWp7lx6r?: ControlChy2ICUt;
}

export type BbrVhW7H3 = {
    $control__variant: ControlChy2ICUt;
    centerAnchorY?:    number;
    top?:              number;
    widthType?:        number;
    width?:            number;
}

export type Bel6Eh36O = {
    radius?:       number;
    width:         number;
    widthType:     number;
    paddingRight?: number;
    paddingLeft?:  number;
    paddingTop?:   number;
    gap?:          number;
}

export type BvtkCgi7Z = {
    stylePresetHeading5: StylePresetHeading5;
}

export type CpwdzfPp5 = {
    top:                    number;
    left:                   number;
    right:                  null;
    bottom:                 null;
    centerAnchorX:          number;
    centerAnchorY:          number;
    name?:                  string;
    fillImage?:             string;
    fillImageOriginalName?: string;
    onTap?:                 OnTap[];
    gesture?:               string;
    _deleted?:              string[];
    borderColor?:           string;
}

export type CzSu2XRs5 = {
    heightType?:                    number;
    widthType?:                     number;
    width?:                         number;
    right?:                         null;
    $control__variant?:             ControlChy2ICUt;
    styleAppearEffectScrollTarget?: string;
    maxWidth?:                      string;
}

export type D688IUIDv = {
    widthType:   number;
    width:       number;
    gap?:        number;
    paddingTop?: number;
}

export type D9MvfWq7P = {
    $control__variant?:             ControlChy2ICUt;
    width?:                         number;
    widthType?:                     number;
    heightType?:                    number;
    maxWidth?:                      string;
    styleAppearEffectScrollTarget?: string;
    $control__PD2L3o9wG?:           ControlChy2ICUt;
}

export type Dhtm13GyI = {
    paddingPerSide: boolean;
    paddingRight:   number;
    paddingLeft:    number;
    gap?:           number;
}

export type DeR3Viv7T = {
    gridColumnCount: number;
    padding:         number;
    paddingTop:      number;
    paddingRight:    number;
    paddingBottom:   number;
    paddingLeft:     number;
    gap:             number;
    width:           number;
    widthType:       number;
}

export type Dh0JiFKyL = {
    stackDirection:     StackDirection;
    heightType?:        number;
    stackDistribution?: StackAlignment;
    gap?:               number;
    stackAlignment?:    StackAlignment;
}

export type EBLVW3Tet = {
    heightType:     number;
    bottom:         null;
    width:          number;
    widthType:      number;
    right:          null;
    paddingPerSide: boolean;
    paddingLeft:    number;
    paddingRight:   number;
    maxWidth?:      string;
    gap?:           number;
}

export type EobBTZ53M = {
    widthType: number;
    width:     number;
    radius:    number;
}

export type EazGp5NfF = {
    stackDirection:                 StackDirection;
    gap:                            number;
    width:                          number;
    widthType:                      number;
    paddingBottom?:                 number;
    paddingRight?:                  number;
    paddingLeft?:                   number;
    stackWrapEnabled?:              boolean;
    stackDistribution?:             StackAlignment;
    maxWidth?:                      string;
    stackAlignment?:                StackAlignment;
    styleAppearEffectScrollTarget?: string;
}

export type EiPp5NPaN = {
    visible?:       boolean;
    centerAnchorX?: number;
    centerAnchorY?: number;
    bottom?:        number | null;
    left?:          number | null;
}

export type EuJpOz4P = {
    $control__variant: ControlChy2ICUt;
}

export type F12OPEIwz = {
    centerAnchorX?: number;
    left?:          number;
    right?:         null;
    width?:         number;
    widthType?:     number;
    onTap?:         OnTap[];
}

export type FaAaHRtMk = {
    width:     number;
    widthType: number;
}

export type FGcqm1ZhA = {
    aspectRatio?: number;
    width?:       number;
    height?:      number;
    widthType?:   number;
    heightType?:  number;
    visible?:     boolean;
    radius?:      number;
}

export type GG3FLjVzv = {
    _deleted:  string[];
    fillColor: string;
}

export type Gr3AfzVp2 = {
    visible: boolean;
    onTap:   OnTap[];
}

export type GqoEXPQw6 = {
    paddingRight: number;
    paddingLeft:  number;
    paddingTop:   number;
    gap?:         number;
}

export type H05T2J9Nr = {
    left:  number;
    right: number;
}

export type HAa8AqRDM = {
    borderPerSide: boolean;
    borderLeft:    number;
    borderTop:     number;
    borderRight:   number;
    borderBottom:  number;
    fillColor:     string;
}

export type HecThwTx = {
    width?:                         number;
    widthType?:                     number;
    paddingPerSide?:                boolean;
    paddingRight?:                  number;
    paddingLeft?:                   number;
    gap?:                           number;
    gridColumnCount?:               number;
    right?:                         null;
    stackDirection?:                StackDirection;
    maxWidth?:                      string;
    heightType?:                    number;
    stackAlignment?:                StackAlignment;
    styleAppearEffectScrollTarget?: string;
}

export type HO1GLUdaI = {
    top:                number;
    left:               number;
    right:              null;
    bottom:             null;
    centerAnchorX:      number;
    centerAnchorY:      number;
    gesture?:           string;
    fillEnabled:        boolean;
    fillColor?:         string;
    name?:              string;
    stackDistribution?: StackAlignment;
}

export type HRl7Ad2Zu = {
    visible: boolean;
}

export type H72_T8J = {
    height?:            number;
    centerAnchorX?:     number;
    centerAnchorY?:     number;
    top?:               number | null;
    bottom?:            number | null;
    left?:              number | null;
    right?:             number | null;
    heightType?:        number;
    html?:              string;
    width?:             number;
    widthType?:         number;
    _deleted?:          H72T8JDeleted[];
    visible?:           boolean;
    name?:              string;
    onAppear?:          OnTap[];
    onTap?:             any[];
    fillEnabled?:       boolean;
    fillColor?:         string;
    constraintsLocked?: boolean;
}

export type H72T8JDeleted = "textContent";

export type HZ8WdWe = {
    paddingBottom:   number;
    stackDirection?: StackDirection;
}

export type Hu1Dk6Saa = {
    $control__gap: ControlGap;
    visible?:      boolean;
}

export type HzLDd4Qba = {
    paddingBottom: number;
}

export type I16727555107361 = {
    centerAnchorY: number;
}

export type I1672765011139587 = {
    html?:                string;
    width?:               number;
    widthType?:           number;
    stylePresetHeading2?: StylePresetHeading2;
    stylePresetHeading3?: StylePresetHeading3;
    stylePresetHeading5?: StylePresetHeading5;
    right?:               null;
}

export type I1672765011139594 = {
    stackAlignment: StackAlignment;
}

export type I1673479010736054 = {
    html: string;
}

export type I1673479010736061 = {
    stackDistribution: StackAlignment;
}

export type I1 = {
    stylePresetParagraph?: string;
    stylePresetHeading1?:  StylePresetHeading1;
    stylePresetHeading4?:  StylePresetHeading4;
    stylePresetHeading2:   StylePresetHeading2;
    stylePresetHeading3:   StylePresetHeading3;
    stylePresetHeading5:   StylePresetHeading5;
    html?:                 string;
}

export type I1843546377 = {
    gap?:              number;
    radius:            number;
    radiusTopLeft:     number;
    radiusTopRight:    number;
    radiusBottomRight: number;
    radiusBottomLeft:  number;
}

export type IAb56GdlD = {
    top:               number;
    left:              number;
    right:             null;
    bottom:            null;
    centerAnchorX:     number;
    centerAnchorY:     number;
    name:              string;
    radius:            number;
    radiusTopLeft:     number;
    radiusTopRight:    number;
    radiusBottomRight: number;
    radiusBottomLeft:  number;
    onTap:             OnTap[];
    variantTransition: TTransition;
}

export type JhYqOa0J9 = {
    stackDirection?:    StackDirection;
    width:              number;
    widthType:          number;
    stackAlignment?:    StackAlignment;
    padding?:           number;
    paddingTop?:        number;
    paddingRight?:      number;
    paddingBottom?:     number;
    paddingLeft?:       number;
    stackDistribution?: StackAlignment;
    gap?:               number;
    paddingPerSide?:    boolean;
    maxWidth?:          string;
    height?:            number;
    heightType?:        number;
    layout?:            Layout;
    stackWrapEnabled?:  boolean;
}

export type JSLkGBSq = {
    onTap?:     OnTap[];
    width?:     number;
    widthType?: number;
}

export type JuxkUnlTD = {
    centerAnchorY:   number;
    top:             number;
    left:            number;
    right:           number | null;
    width:           number;
    widthType:       number;
    paddingPerSide?: boolean;
    paddingLeft?:    number;
    paddingRight?:   number;
    maxWidth?:       string;
    gap?:            number;
}

export type Kieb3FglK = {
    widthType:      number;
    width:          number;
    stackAlignment: StackAlignment;
    height?:        number;
    heightType?:    number;
    gap?:           number;
}

export type LKg8Nx3Gt = {
    top:               number;
    left:              number;
    right:             null;
    bottom:            null;
    centerAnchorX:     number;
    centerAnchorY:     number;
    name:              string;
    fillEnabled:       boolean;
    borderColor:       string;
    onTap:             On[];
    radius:            number;
    radiusTopLeft:     number;
    radiusTopRight:    number;
    radiusBottomRight: number;
    radiusBottomLeft:  number;
}

export type LLf5Oc9EZ = {
    heightType:      number;
    centerAnchorX:   number;
    centerAnchorY:   number;
    top:             number;
    left:            number | null;
    right:           null;
    width:           number;
    height:          number;
    widthType:       number;
    padding:         number;
    paddingTop:      number;
    paddingRight:    number;
    paddingBottom:   number;
    paddingLeft:     number;
    paddingPerSide?: boolean;
    radius?:         number;
}

export type Lj9UuuWmT = {
    widthType:          number;
    width:              number;
    stackAlignment?:    StackAlignment;
    paddingPerSide?:    boolean;
    paddingRight?:      number;
    paddingLeft?:       number;
    stackDistribution?: StackAlignment;
    heightType?:        number;
    height?:            number;
    gap?:               number;
}

export type MStHhDtVz = {
    centerAnchorX:      number;
    centerAnchorY:      number;
    top:                number | null;
    bottom:             number | null;
    left?:              number | null;
    right:              number | null;
    fillColor?:         string;
    width?:             number;
    widthType?:         number;
    _deleted?:          string[];
    stackDirection?:    StackDirection;
    stackDistribution?: StackAlignment;
    gap?:               number;
    stackAlignment?:    StackAlignment;
    stackWrapEnabled?:  boolean;
    padding?:           number;
    paddingPerSide?:    boolean;
    paddingTop?:        number;
    paddingRight?:      number;
    paddingBottom?:     number;
    paddingLeft?:       number;
    heightType?:        number;
    visible?:           boolean;
    height?:            number;
    fillEnabled?:       boolean;
    overflow?:          Overflow;
    layout?:            Layout;
    itemsOrder?:        string[];
}

export type O0Vs7Oxjj = {
    $control__variant:  ControlChy2ICUt;
    centerAnchorY:      number;
    right?:             null;
    constraintsLocked?: boolean;
    left?:              null;
    widthType?:         number;
    width?:             number;
    maxWidth?:          string;
    position?:          string;
    positionStickyTop?: number;
    zIndex?:            number;
    top?:               number;
    height?:            number;
    heightType?:        number;
}

export type OAyDbfWk4 = {
    radiusPerCorner:    boolean;
    radius:             number;
    borderPerSide:      boolean;
    paddingRight?:      number;
    paddingLeft?:       number;
    paddingTop?:        number;
    radiusBottomRight?: number;
    radiusTopRight?:    number;
}

export type P4IPdvsFb = {
    centerAnchorX?:     number;
    centerAnchorY?:     number;
    right?:             number;
    onTap?:             OnTap[];
    left?:              number | null;
    top?:               number | null;
    constraintsLocked?: boolean;
}

export type P98YajFti = {
    height:        number;
    heightType:    number;
    width:         number;
    widthType:     number;
    centerAnchorX: number;
    centerAnchorY: number;
    bottom:        number | null;
    top:           number | null;
}

export type PFYv7QXr7 = {
    paddingBottom:                 number;
    styleAppearEffectScrollTarget: string;
}

export type PNxnRsIT9 = {
    paddingBottom: number;
    paddingTop:    number;
}

export type Pzo2Kay8E = {
    width:              number;
    widthType:          number;
    stackDistribution?: StackAlignment;
    stackDirection?:    StackDirection;
    height?:            number;
    heightType?:        number;
    gap?:               number;
    right?:             null;
}

export type Q3U1Q95YZ = {
    centerAnchorX:      number;
    centerAnchorY?:     number;
    left:               number;
    right?:             number | null;
    width?:             number;
    widthType?:         number;
    top?:               number;
    $control__variant?: ControlChy2ICUt;
    bottom?:            number | null;
    name?:              string;
    height?:            number;
    heightType?:        number;
    viewportHeight?:    number;
    radius?:            number;
    _deleted?:          string[];
    padding?:           number;
}

export type QD2UfOHxT = {
    stackDirection: StackDirection;
    visible:        boolean;
}

export type Sqf9J157Z = {
    paddingBottom:   number;
    maxWidth?:       string;
    stackDirection?: StackDirection;
}

export type SiA6ZB82F = {
    widthType:  number;
    height:     number;
    heightType: number;
}

export type SPMLGeLMF = {
    fillColor:     string;
    _deleted?:     SPMLGeLMFDeleted[];
    width?:        number;
    height?:       number;
    pathSegments?: PathSegment[];
    x?:            number;
    y?:            number;
    strokeWidth?:  number;
    rotation?:     number;
}

export type SPMLGeLMFDeleted = "strokeDashArray" | "strokeDashOffset";

export type Tuwi8Xtnq = {
    html:                string;
    stylePresetHeading4: StylePresetHeading4;
    stylePresetHeading5: StylePresetHeading5;
}

export type U2P2VsRbj = {
    width:               number;
    widthType:           number;
    stylePresetHeading5: StylePresetHeading5;
}

export type UvIQtUMDN = {
    $control__variant:  ControlChy2ICUt;
    position?:          string;
    positionStickyTop?: number;
    zIndex?:            number;
    centerAnchorY?:     number;
    top?:               number;
    height?:            number;
    heightType?:        number;
}

export type VKfrbxbtZ = {
    rotation:      number;
    top:           null;
    centerAnchorY: number;
}

export type Wd5ZfBo2U = {
    top:                number;
    left:               number;
    right:              null;
    bottom:             null;
    centerAnchorX:      number;
    centerAnchorY:      number;
    name:               string;
    height?:            number;
    heightType?:        number;
    width?:             number;
    widthType?:         number;
    radius?:            number;
    itemsOrder?:        string[];
    onAppear?:          OnTap[];
    gap?:               number;
    paddingRight?:      number;
    paddingLeft?:       number;
    stackAlignment?:    StackAlignment;
    stackDirection?:    StackDirection;
    stackDistribution?: StackAlignment;
    paddingPerSide?:    boolean;
}

export type WdSes2PRM = {
    fillImage:             string;
    fillImageOriginalName: string;
}

export type XKdC36J7Y = {
    centerAnchorX: number;
    centerAnchorY: number;
    width:         number;
    widthType:     number;
}

export type Y51NPPbXa = {
    stackAlignment?: StackAlignment;
    paddingBottom:   number;
    paddingRight?:   number;
    paddingLeft?:    number;
    maxWidth?:       string;
    stackDirection?: StackDirection;
}

export type ZSzgV3Xdi = {
    breakpointWidth: number;
    fontSize:        number;
    lineHeight?:     Array<LetterSpacingEnum | number>;
}

export type B8Bk5DVy5 = {
    $control__kYZr0S9qS: ControlChy2ICUt;
}

export type E9Td2SLG1 = {
    onTap: OnTap[];
}

export type EV12GRH3N = {
    top:           number;
    left:          number;
    right:         null;
    bottom:        null;
    centerAnchorX: number;
    centerAnchorY: number;
    gesture?:      string;
    boxShadows?:   BoxShadow[];
    name?:         string;
    itemsOrder?:   string[];
}

export type FCNbrdUct = {
    paddingRight?:   number;
    paddingLeft?:    number;
    paddingBottom:   number;
    stackDirection?: StackDirection;
    maxWidth?:       string;
}

export type FfeMiflkp = {
    gap: number;
}

export type GSuaTjgjj = {
    top:                number;
    left:               number;
    right:              null;
    bottom:             null;
    centerAnchorX:      number;
    centerAnchorY:      number;
    name:               string;
    stackDirection?:    StackDirection;
    width?:             number;
    widthType?:         number;
    stackDistribution?: StackAlignment;
    gap?:               number;
    paddingPerSide?:    boolean;
    paddingRight?:      number;
    paddingLeft?:       number;
    itemsOrder?:        string[];
    height?:            number;
    heightType?:        number;
}

export type GaKLDIUap = {
    paddingRight: number;
    paddingLeft:  number;
}

export type GpGtp2Q1S = {
    width:              number;
    widthType:          number;
    stackDirection:     StackDirection;
    itemsOrder?:        string[];
    gap:                number;
    stackDistribution?: StackAlignment;
}

export type HkguCyi4X = {
    visible: boolean;
    opacity: number;
}

export type Jul6OfVzx = {
    widthType:            number;
    width:                number;
    $control__IaWp7lx6r?: ControlChy2ICUt;
    $control__ecriYSsUC?: ControlChy2ICUt;
}

export type Jvxk8AmE = {
    gridColumnCount: number;
    width:           number;
    right:           number | null;
    widthType:       number;
    centerAnchorY?:  number;
    height?:         number;
    heightType?:     number;
}

export type K79CddoVT = {
    enterEffectY: number;
}

export type LCwLoDLaM = {
    visible:            boolean;
    stackAlignment?:    StackAlignment;
    stackDistribution?: StackAlignment;
}

export type Nq1XKC7GR = {
    left:         number;
    right:        number;
    paddingRight: number;
    paddingLeft?: number;
    gap?:         number;
}

export type Nvj6GRWIN = {
    top:                number;
    left:               number;
    right:              null;
    bottom:             null;
    centerAnchorX:      number;
    centerAnchorY:      number;
    name?:              string;
    fillColor?:         string;
    stackDistribution?: StackAlignment;
    borderPerSide?:     boolean;
    borderEnabled?:     boolean;
    borderColor?:       string;
    borderWidth?:       number;
    borderStyle?:       BorderStyle;
    radius:             number;
    radiusTopLeft:      number;
    radiusTopRight:     number;
    radiusBottomRight:  number;
    radiusBottomLeft:   number;
    paddingTop?:        number;
    paddingBottom?:     number;
    paddingRight?:      number;
    paddingLeft?:       number;
    gap?:               number;
    gesture?:           string;
    fillEnabled?:       boolean;
    _deleted?:          string[];
}

export type O59KmntB3 = {
    fillImage?:             string;
    fillImageOriginalName?: string;
    fillImageResize?:       string;
    centerAnchorX?:         number;
    centerAnchorY?:         number;
    top?:                   number;
    bottom?:                number;
    height?:                number;
    heightType?:            number;
    width?:                 number;
    widthType?:             number;
}

export type QAWn5AC9X = {
    paddingBottom:   number;
    paddingTop:      number;
    stackDirection?: StackDirection;
}

export type R2FiTm9EM = {
    stackDirection:                 StackDirection;
    widthType:                      number;
    width:                          number;
    stackDistribution:              StackAlignment;
    paddingPerSide:                 boolean;
    paddingLeft:                    number;
    gridRowCount:                   number;
    gridColumnCount:                number;
    paddingRight:                   number;
    maxWidth?:                      string;
    styleAppearEffectScrollTarget?: string;
}

export type R8TVVqpM = {
    fillImage?:             string;
    fillImageOriginalName?: string;
    intrinsicWidth?:        number;
    intrinsicHeight?:       number;
    width?:                 number;
    height?:                number;
    widthType?:             number;
    heightType?:            number;
    radius?:                number;
}

export type Xyq6U1Sad = {
    centerAnchorY: number;
    top:           null;
    bottom:        number;
    height:        number;
    heightType:    number;
}

export type YWIXJFCe = {
    heightType: number;
}

export type ZXCCI3Yt6 = {
    rotation:      number;
    bottom:        null;
    centerAnchorY: number;
}

export type Save = {
    treeVersion: number;
    moduleId:    string;
    saveId:      string;
    imports:     string[];
    title:       string;
    name:        string;
    type:        SaveType;
}

export type SaveType = "screen" | "siteMetadata" | "webPageMetadata" | "config" | "canvasComponent" | "css" | "codeFile" | "collection";

export type PurpleVariable = {
    id:                        string;
    exposeInProps:             boolean;
    type:                      string;
    name:                      string;
    initialValue?:             string;
    associatedStringVariable?: string;
}

export type ParentidEnum = "sn7IXw6X9";

export type FluffyVariable = {
    id:                string;
    exposeInProps:     boolean;
    type:              ControlCMXXJY0N6Type;
    name:              string;
    initialValue?:     boolean | string;
    options?:          Options;
    fallbackValue?:    string;
    entityIdentifier?: string;
    controlKey?:       string;
    expectedType?:     ExpectedTypeEnum;
}

export type Options = {
    displayTextArea: boolean;
    placeholder?:    string;
}

export type ChildWebMetadata = {
    title:        string;
    noIndexSite?: boolean;
    socialImage?: string;
    description?: string;
}

export type RootWebMetadata = {
    title:        string;
    description:  string;
    language:     string;
    canonicalURL: string;
    favicon:      string;
    socialImage:  string;
}
