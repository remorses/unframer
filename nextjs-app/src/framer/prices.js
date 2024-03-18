'use client';
import { __export, } from './chunk-6C3VEZWH.js';

// https:https://framerusercontent.com/modules/tMbGXwBAf1c0CK3SXCVW/KFQv1DWc0jF947sh48SD/RtV_BGntD.js
import { jsx as _jsx6, jsxs as _jsxs5, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls5,
  ComponentViewportProvider,
  ControlType as ControlType5,
  cx as cx5,
  getFonts as getFonts2,
  ResolveLinks,
  RichText as RichText5,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo5,
  useRouter,
  useVariantState as useVariantState5,
  withCSS as withCSS5,
} from 'unframer/dist/framer';
import { LayoutGroup as LayoutGroup5, motion as motion6, MotionConfigContext as MotionConfigContext5, } from 'framer-motion';
import * as React6 from 'react';

// https:https://framerusercontent.com/modules/1gobdaiETEZYApPHkFW8/RAQ43YyjZfCUTli605Pd/j1CXYH1vu.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  Image,
  Link,
  RichText,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer/dist/framer';
import { LayoutGroup, motion, MotionConfigContext, } from 'framer-motion';
import * as React from 'react';

// https:https://framerusercontent.com/modules/isE4jHYyF7A7RdFya7TS/K3FFIef17dyAez6QnFto/Q4kC2bTJ2.js
import { fontStore, } from 'unframer/dist/framer';
fontStore.loadWebFontsFromSelectors(['GF;DM Sans-500',],);
var fonts = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/Q4kC2bTJ2:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTmf3ZGMZpg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhTmf3ZGMZpg.ttf',
  weight: '500',
},];
var css = [
  '.framer-1aFoR .framer-styles-preset-tdptso:not(.rich-text-wrapper), .framer-1aFoR .framer-styles-preset-tdptso.rich-text-wrapper p { --framer-font-family: "DM Sans", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.4px; --framer-line-height: 22px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, #000000); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className = 'framer-1aFoR';

// https:https://framerusercontent.com/modules/irtADPc9MsWpaOZ5xWct/Cqtyndb7HgebXowgH7mP/tr0U97vbW.js
import { fontStore as fontStore2, } from 'unframer/dist/framer';
fontStore2.loadWebFontsFromSelectors(['GF;DM Sans-500',],);
var fonts2 = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/tr0U97vbW:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrOB-sClQX6Cg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrOB-sClQX6Cg.ttf',
  weight: '500',
},];
var css2 = [
  '.framer-lY2DH .framer-styles-preset-1ege25p:not(.rich-text-wrapper), .framer-lY2DH .framer-styles-preset-1ege25p.rich-text-wrapper p { --framer-font-family: "DM Sans", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.2px; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className2 = 'framer-lY2DH';

// https:https://framerusercontent.com/modules/1gobdaiETEZYApPHkFW8/RAQ43YyjZfCUTli605Pd/j1CXYH1vu.js
var enabledGestures = { BM6EYWPbP: { hover: true, }, MHKwcgpiE: { hover: true, }, nvj6GRWIN: { hover: true, }, };
var cycleOrder = ['nvj6GRWIN', 'BM6EYWPbP', 'MHKwcgpiE',];
var serializationHash = 'framer-CxqYs';
var variantClassNames = { BM6EYWPbP: 'framer-v-1vkpx8j', MHKwcgpiE: 'framer-v-1fbf01a', nvj6GRWIN: 'framer-v-1skui0i', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var toResponsiveImage = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { 'Primary Smaller': 'MHKwcgpiE', Primary: 'nvj6GRWIN', Secondary: 'BM6EYWPbP', };
var getProps = ({ height, id, leftIcon, link, rightIcon, showLeftIcon, showRightIcon, tap, title, width, ...props },) => {
  var _ref, _ref1, _ref2, _humanReadableVariantMap_props_variant, _ref3, _ref4;
  return {
    ...props,
    BQ8KjTU41: (_ref = rightIcon !== null && rightIcon !== void 0 ? rightIcon : props.BQ8KjTU41) !== null && _ref !== void 0
      ? _ref
      : { src: 'https://framerusercontent.com/images/QDgxMHJz2vKvFSMvhZpA6xplIBM.svg', },
    FOdt_Q22J: (_ref1 = title !== null && title !== void 0 ? title : props.FOdt_Q22J) !== null && _ref1 !== void 0
      ? _ref1
      : 'Get started now',
    gT8MXhd7P: (_ref2 = leftIcon !== null && leftIcon !== void 0 ? leftIcon : props.gT8MXhd7P) !== null && _ref2 !== void 0
      ? _ref2
      : { src: 'https://framerusercontent.com/images/QDgxMHJz2vKvFSMvhZpA6xplIBM.svg', },
    HihQ7sLzJ: tap !== null && tap !== void 0 ? tap : props.HihQ7sLzJ,
    JRpxGFjwH: showLeftIcon !== null && showLeftIcon !== void 0 ? showLeftIcon : props.JRpxGFjwH,
    variant:
      (_ref3 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref3 !== void 0
        ? _ref3
        : 'nvj6GRWIN',
    wsxRD5u41: (_ref4 = showRightIcon !== null && showRightIcon !== void 0 ? showRightIcon : props.wsxRD5u41) !== null && _ref4 !== void 0
      ? _ref4
      : true,
    Xf0re2Pc_: link !== null && link !== void 0 ? link : props.Xf0re2Pc_,
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const {
    style,
    className: className6,
    layoutId,
    variant,
    FOdt_Q22J,
    BQ8KjTU41,
    gT8MXhd7P,
    JRpxGFjwH,
    wsxRD5u41,
    Xf0re2Pc_,
    HihQ7sLzJ,
    ...restProps
  } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'nvj6GRWIN',
    enabledGestures,
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTapw8vc2x = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false, },);
    if (HihQ7sLzJ) {
      const res = await HihQ7sLzJ(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx(Link, {
          href: Xf0re2Pc_,
          openInNewTab: false,
          smoothScroll: true,
          children: /* @__PURE__ */ _jsx(motion.a, {
            ...restProps,
            className: `${cx(serializationHash, ...sharedStyleClassNames, 'framer-1skui0i', className6, classNames,)} framer-1oe6d9m`,
            'data-framer-name': 'Primary',
            'data-highlight': true,
            layoutDependency,
            layoutId: 'nvj6GRWIN',
            onHoverEnd: () => setGestureState({ isHovered: false, },),
            onHoverStart: () => setGestureState({ isHovered: true, },),
            onTap: onTapw8vc2x,
            onTapCancel: () => setGestureState({ isPressed: false, },),
            onTapStart: () => setGestureState({ isPressed: true, },),
            ref: ref !== null && ref !== void 0 ? ref : ref1,
            style: {
              '--border-bottom-width': '0px',
              '--border-color': 'rgba(0, 0, 0, 0)',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-style': 'solid',
              '--border-top-width': '0px',
              backgroundColor: 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(12, 64, 233))',
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              ...style,
            },
            variants: {
              'BM6EYWPbP-hover': { '--border-color': 'rgba(0, 0, 0, 0.32)', },
              'MHKwcgpiE-hover': { backgroundColor: 'rgb(0, 0, 0)', },
              'nvj6GRWIN-hover': { backgroundColor: 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(255, 79, 0))', },
              BM6EYWPbP: {
                '--border-bottom-width': '1px',
                '--border-color': 'var(--token-19c4737c-eef7-4396-b22a-028772ac270e, rgba(0, 0, 0, 0.1)) /* {"name":"Outline"} */',
                '--border-left-width': '1px',
                '--border-right-width': '1px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
                backgroundColor: 'var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255))',
              },
            },
            ...addPropertyOverrides(
              {
                'BM6EYWPbP-hover': { 'data-framer-name': void 0, },
                'MHKwcgpiE-hover': { 'data-framer-name': void 0, },
                'nvj6GRWIN-hover': { 'data-framer-name': void 0, },
                BM6EYWPbP: { 'data-border': true, 'data-framer-name': 'Secondary', },
                MHKwcgpiE: { 'data-framer-name': 'Primary Smaller', },
              },
              baseVariant,
              gestureVariant,
            ),
            children: /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-1n0h1yt',
              'data-framer-name': 'Button Content',
              layoutDependency,
              layoutId: 'I1:843;54:6377',
              style: { borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, },
              children: [
                JRpxGFjwH && /* @__PURE__ */
                _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 9,
                    intrinsicWidth: 9,
                    pixelHeight: 18,
                    pixelWidth: 18,
                    sizes: '18px',
                    ...toResponsiveImage(gT8MXhd7P,),
                  },
                  className: 'framer-12eesxg',
                  'data-framer-name': 'Left Icon',
                  layoutDependency,
                  layoutId: 'k5dhxG_In',
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      className: 'framer-styles-preset-1ege25p',
                      'data-styles-preset': 'tr0U97vbW',
                      style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))', },
                      children: 'Get started now',
                    },),
                  },),
                  className: 'framer-quibww',
                  'data-framer-name': 'Button Text',
                  layoutDependency,
                  layoutId: 'I1:843;54:6378',
                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', },
                  text: FOdt_Q22J,
                  variants: { BM6EYWPbP: { '--extracted-r6o4lv': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0))', }, },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      BM6EYWPbP: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            className: 'framer-styles-preset-1ege25p',
                            'data-styles-preset': 'tr0U97vbW',
                            style: {
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                            },
                            children: 'Get started now',
                          },),
                        },),
                      },
                      MHKwcgpiE: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            className: 'framer-styles-preset-tdptso',
                            'data-styles-preset': 'Q4kC2bTJ2',
                            style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))', },
                            children: 'Get started now',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                wsxRD5u41 && /* @__PURE__ */ _jsx(Image, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 9,
                    intrinsicWidth: 9,
                    pixelHeight: 18,
                    pixelWidth: 18,
                    sizes: '18px',
                    ...toResponsiveImage(BQ8KjTU41,),
                  },
                  className: 'framer-1czno15',
                  'data-framer-name': 'Left Icon',
                  layoutDependency,
                  layoutId: 'rwWGdWNHS',
                  style: {
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                  },
                  ...addPropertyOverrides(
                    {
                      MHKwcgpiE: {
                        background: {
                          alt: '',
                          fit: 'fill',
                          intrinsicHeight: 9,
                          intrinsicWidth: 9,
                          pixelHeight: 18,
                          pixelWidth: 18,
                          sizes: '14px',
                          ...toResponsiveImage(BQ8KjTU41,),
                        },
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
              ],
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css3 = [
  '.framer-CxqYs[data-border="true"]::after, .framer-CxqYs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-CxqYs.framer-1oe6d9m, .framer-CxqYs .framer-1oe6d9m { display: block; }',
  '.framer-CxqYs.framer-1skui0i { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 16px 32px 16px 32px; position: relative; text-decoration: none; width: min-content; }',
  '.framer-CxqYs .framer-1n0h1yt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-CxqYs .framer-12eesxg, .framer-CxqYs .framer-1czno15 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); overflow: visible; position: relative; width: 18px; }',
  '.framer-CxqYs .framer-quibww { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CxqYs.framer-1skui0i, .framer-CxqYs .framer-1n0h1yt { gap: 0px; } .framer-CxqYs.framer-1skui0i > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-CxqYs.framer-1skui0i > :first-child, .framer-CxqYs .framer-1n0h1yt > :first-child { margin-left: 0px; } .framer-CxqYs.framer-1skui0i > :last-child, .framer-CxqYs .framer-1n0h1yt > :last-child { margin-right: 0px; } .framer-CxqYs .framer-1n0h1yt > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }',
  '.framer-CxqYs.framer-v-1fbf01a.framer-1skui0i { padding: 8px 16px 8px 16px; }',
  '.framer-CxqYs.framer-v-1fbf01a .framer-1n0h1yt { gap: 4px; }',
  '.framer-CxqYs.framer-v-1fbf01a .framer-1czno15 { height: var(--framer-aspect-ratio-supported, 14px); width: 14px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CxqYs.framer-v-1fbf01a .framer-1n0h1yt { gap: 0px; } .framer-CxqYs.framer-v-1fbf01a .framer-1n0h1yt > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-CxqYs.framer-v-1fbf01a .framer-1n0h1yt > :first-child { margin-left: 0px; } .framer-CxqYs.framer-v-1fbf01a .framer-1n0h1yt > :last-child { margin-right: 0px; } }',
  ...css2,
  ...css,
];
var Framerj1CXYH1vu = withCSS(Component, css3, 'framer-CxqYs',);
var stdin_default = Framerj1CXYH1vu;
Framerj1CXYH1vu.displayName = 'Button';
Framerj1CXYH1vu.defaultProps = { height: 58, width: 209, };
addPropertyControls(Framerj1CXYH1vu, {
  variant: {
    options: ['nvj6GRWIN', 'BM6EYWPbP', 'MHKwcgpiE',],
    optionTitles: ['Primary', 'Secondary', 'Primary Smaller',],
    title: 'Variant',
    type: ControlType.Enum,
  },
  FOdt_Q22J: { defaultValue: 'Get started now', displayTextArea: false, title: 'Title', type: ControlType.String, },
  BQ8KjTU41: {
    __defaultAssetReference:
      'data:framer/asset-reference,QDgxMHJz2vKvFSMvhZpA6xplIBM.svg?originalFilename=nav-arrow-right.svg&preferredSize=auto',
    title: 'Right Icon',
    type: ControlType.ResponsiveImage,
  },
  gT8MXhd7P: {
    __defaultAssetReference:
      'data:framer/asset-reference,QDgxMHJz2vKvFSMvhZpA6xplIBM.svg?originalFilename=nav-arrow-right.svg&preferredSize=auto',
    title: 'Left Icon',
    type: ControlType.ResponsiveImage,
  },
  JRpxGFjwH: { defaultValue: false, title: 'Show Left Icon', type: ControlType.Boolean, },
  wsxRD5u41: { defaultValue: true, title: 'Show Right Icon', type: ControlType.Boolean, },
  Xf0re2Pc_: { title: 'Link', type: ControlType.Link, },
  HihQ7sLzJ: { title: 'Tap', type: ControlType.EventHandler, },
},);
addFonts(Framerj1CXYH1vu, [...fonts2, ...fonts,],);

// https:https://framerusercontent.com/modules/fxMtDUxtbGhI6E06HMtO/xMwiIRCNzFyeeNmnJcMg/imqCP4fEz.js
import { jsx as _jsx3, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType3,
  cx as cx3,
  getFonts,
  RichText as RichText3,
  useLocaleInfo as useLocaleInfo3,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
} from 'unframer/dist/framer';
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3, } from 'framer-motion';
import * as React3 from 'react';

// https:https://framerusercontent.com/modules/dO0XaNyepaB8zJrTob4r/zcGv9PIZQV10xz8UC52a/aLfVqe1FC.js
import { fontStore as fontStore3, } from 'unframer/dist/framer';
fontStore3.loadWebFontsFromSelectors(['GF;DM Sans-regular',],);
var fonts3 = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/aLfVqe1FC:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTmf3ZGMZpg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTmf3ZGMZpg.ttf',
  weight: '400',
},];
var css4 = [
  '.framer-9DKEt .framer-styles-preset-de78pk:not(.rich-text-wrapper), .framer-9DKEt .framer-styles-preset-de78pk.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.2px; --framer-line-height: 30px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className3 = 'framer-9DKEt';

// https:https://framerusercontent.com/modules/lag7sUsQW69DzJd7WTvQ/FqKg8FgbkD1HBi1tn2Bb/cRmkgGutV.js
import { fontStore as fontStore4, } from 'unframer/dist/framer';
fontStore4.loadWebFontsFromSelectors(['GF;DM Sans-700',],);
var fonts4 = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/cRmkgGutV:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
  weight: '700',
},];
var css5 = [
  '.framer-OqUSw .framer-styles-preset-19k5lrf:not(.rich-text-wrapper), .framer-OqUSw .framer-styles-preset-19k5lrf.rich-text-wrapper h4 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2px; --framer-line-height: 68px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
  '@media (max-width: 1439px) and (min-width: 810px) { .framer-OqUSw .framer-styles-preset-19k5lrf:not(.rich-text-wrapper), .framer-OqUSw .framer-styles-preset-19k5lrf.rich-text-wrapper h4 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 46px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2px; --framer-line-height: 56px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-OqUSw .framer-styles-preset-19k5lrf:not(.rich-text-wrapper), .framer-OqUSw .framer-styles-preset-19k5lrf.rich-text-wrapper h4 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2px; --framer-line-height: 48px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
];
var className4 = 'framer-OqUSw';

// https:https://framerusercontent.com/modules/xbEU1ZG7Y68ZIKffZz4a/cchwKlqxLlZvcck6NCmM/N3BIRIlrO.js
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx as cx2,
  Image as Image2,
  RichText as RichText2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer/dist/framer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'framer-motion';
import * as React2 from 'react';
var cycleOrder2 = ['I167:27650;111:39602',];
var variantClassNames2 = { 'I167:27650;111:39602': 'framer-v-1wvyaxi', };
var transitions2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var toResponsiveImage2 = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var getProps2 = ({ height, icon, id, title, width, ...props },) => {
  var ref, ref1;
  return {
    ...props,
    ksLTK3W4O: (ref = title !== null && title !== void 0 ? title : props.ksLTK3W4O) !== null && ref !== void 0 ? ref : 'Better View',
    kYZr0S9qS: (ref1 = icon !== null && icon !== void 0 ? icon : props.kYZr0S9qS) !== null && ref1 !== void 0
      ? ref1
      : {
        src:
          new URL(
            'assets/zHERxwL3wT8JCxRZE9cTBQ165k.png',
            'https://framerusercontent.com/modules/xbEU1ZG7Y68ZIKffZz4a/cchwKlqxLlZvcck6NCmM/N3BIRIlrO.js',
          ).href,
      },
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo2();
  const { style, className: className6, layoutId, variant, ksLTK3W4O, kYZr0S9qS, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'I167:27650;111:39602',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const defaultLayoutId = React2.useId();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(motion2.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx2('framer-8PUKw', className, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx2(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          className: cx2('framer-1wvyaxi', className6,),
          'data-border': true,
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'I167:27650;111:39602',
          ref,
          style: {
            '--border-bottom-width': '1px',
            '--border-color': 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(23, 116, 242)) /* {"name":"Orange"} */',
            '--border-left-width': '1px',
            '--border-right-width': '1px',
            '--border-style': 'solid',
            '--border-top-width': '1px',
            borderBottomLeftRadius: 100,
            borderBottomRightRadius: 100,
            borderTopLeftRadius: 100,
            borderTopRightRadius: 100,
            ...style,
          },
          children: [
            /* @__PURE__ */ _jsx2(Image2, {
              background: {
                alt: '',
                fit: 'fill',
                intrinsicHeight: 24,
                intrinsicWidth: 24,
                pixelHeight: 48,
                pixelWidth: 48,
                sizes: '16px',
                ...toResponsiveImage2(kYZr0S9qS,),
              },
              className: 'framer-7laalf',
              'data-framer-name': 'input_search',
              layoutDependency,
              layoutId: 'nDfD3lboE',
            },),
            /* @__PURE__ */ _jsx2(RichText2, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion2.p, {
                  className: 'framer-styles-preset-tdptso',
                  'data-styles-preset': 'Q4kC2bTJ2',
                  style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                  children: 'Better View',
                },),
              },),
              className: 'framer-j1w2op',
              'data-framer-name': 'Tag Text',
              layoutDependency,
              layoutId: 'I167:27650;111:39602;111:39591',
              style: {
                '--extracted-r6o4lv': 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(255, 79, 0)) ',
                '--framer-paragraph-spacing': '0px',
              },
              text: ksLTK3W4O,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css6 = [
  '.framer-8PUKw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-8PUKw .framer-clz89t { display: block; }',
  '.framer-8PUKw .framer-1wvyaxi { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 12px 4px 12px; position: relative; width: min-content; }',
  '.framer-8PUKw .framer-7laalf { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); overflow: visible; position: relative; width: 16px; }',
  '.framer-8PUKw .framer-j1w2op { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8PUKw .framer-1wvyaxi { gap: 0px; } .framer-8PUKw .framer-1wvyaxi > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-8PUKw .framer-1wvyaxi > :first-child { margin-left: 0px; } .framer-8PUKw .framer-1wvyaxi > :last-child { margin-right: 0px; } }',
  ...css,
];
var FramerN3BIRIlrO = withCSS2(Component2, css6, 'framer-8PUKw',);
var stdin_default2 = FramerN3BIRIlrO;
FramerN3BIRIlrO.displayName = 'Tag';
FramerN3BIRIlrO.defaultProps = { height: 30, width: 118, };
addPropertyControls2(FramerN3BIRIlrO, {
  ksLTK3W4O: { defaultValue: 'Better View', displayTextArea: false, title: 'Title', type: ControlType2.String, },
  kYZr0S9qS: {
    __defaultAssetReference:
      'data:framer/asset-reference,zHERxwL3wT8JCxRZE9cTBQ165k.png?originalFilename=input-search.png&preferredSize=auto',
    title: 'Icon',
    type: ControlType2.ResponsiveImage,
  },
},);
addFonts2(FramerN3BIRIlrO, [...fonts,],);

// https:https://framerusercontent.com/modules/fxMtDUxtbGhI6E06HMtO/xMwiIRCNzFyeeNmnJcMg/imqCP4fEz.js
var TagFonts = getFonts(stdin_default2,);
var cycleOrder3 = ['dIBDtF4lr', 'fMLzDPiVJ',];
var variantClassNames3 = { dIBDtF4lr: 'framer-v-46k7fd', fMLzDPiVJ: 'framer-v-106keaj', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions3 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var toResponsiveImage3 = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition3 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap2 = { 'Center Align': 'dIBDtF4lr', 'Left Align': 'fMLzDPiVJ', };
var getProps3 = ({ description, height, id, showBullet, showDescription, showTitle, tagIcon, tagText, title, width, ...props },) => {
  var ref, ref1, ref2, ref3, ref4, ref5, ref6, _variant, ref7;
  return {
    ...props,
    ecriYSsUC: (ref = description !== null && description !== void 0 ? description : props.ecriYSsUC) !== null && ref !== void 0
      ? ref
      : 'Absolute dashboard provides you with a single place to get all your real-time views of your podcasting analytics from multiple sources.',
    IaWp7lx6r: (ref1 = title !== null && title !== void 0 ? title : props.IaWp7lx6r) !== null && ref1 !== void 0
      ? ref1
      : 'A Mac app you\u2019ll \nlove to design with',
    moTqfDim_: (ref2 = tagText !== null && tagText !== void 0 ? tagText : props.moTqfDim_) !== null && ref2 !== void 0
      ? ref2
      : 'Better View',
    RemVozjsi: (ref3 = showBullet !== null && showBullet !== void 0 ? showBullet : props.RemVozjsi) !== null && ref3 !== void 0
      ? ref3
      : true,
    SPRj6A3tJ:
      (ref4 = showDescription !== null && showDescription !== void 0 ? showDescription : props.SPRj6A3tJ) !== null && ref4 !== void 0
        ? ref4
        : true,
    SU5SHTAmT: (ref5 = showTitle !== null && showTitle !== void 0 ? showTitle : props.SU5SHTAmT) !== null && ref5 !== void 0 ? ref5 : true,
    UygWIK1Ch: (ref6 = tagIcon !== null && tagIcon !== void 0 ? tagIcon : props.UygWIK1Ch) !== null && ref6 !== void 0
      ? ref6
      : {
        src:
          new URL(
            'assets/9W7nPDDXdMWukdi8EsLxRpx8orE.svg',
            'https://framerusercontent.com/modules/fxMtDUxtbGhI6E06HMtO/xMwiIRCNzFyeeNmnJcMg/imqCP4fEz.js',
          ).href,
      },
    variant:
      (ref7 = (_variant = humanReadableVariantMap2[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref7 !== void 0
        ? ref7
        : 'dIBDtF4lr',
  };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo3();
  const {
    style,
    className: className6,
    layoutId,
    variant,
    IaWp7lx6r,
    ecriYSsUC,
    SU5SHTAmT,
    SPRj6A3tJ,
    moTqfDim_,
    UygWIK1Ch,
    RemVozjsi,
    ...restProps
  } = getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'dIBDtF4lr',
    transitions: transitions3,
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const isDisplayed = () => {
    if (baseVariant === 'fMLzDPiVJ') {
      return RemVozjsi;
    }
    return true;
  };
  const defaultLayoutId = React3.useId();
  return /* @__PURE__ */ _jsx3(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(motion3.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx3('framer-fSX7h', className4, className3, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx3(Transition3, {
        value: transition,
        children: /* @__PURE__ */ _jsxs3(motion3.div, {
          ...restProps,
          className: cx3('framer-46k7fd', className6,),
          'data-framer-name': 'Center Align',
          layoutDependency,
          layoutId: 'dIBDtF4lr',
          ref,
          style: { ...style, },
          ...addPropertyOverrides2({ fMLzDPiVJ: { 'data-framer-name': 'Left Align', }, }, baseVariant, gestureVariant,),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsx3(motion3.div, {
              className: 'framer-e6g14c-container',
              layoutDependency,
              layoutId: 'b8bk5DVy5-container',
              children: /* @__PURE__ */ _jsx3(stdin_default2, {
                height: '100%',
                icon: toResponsiveImage3(UygWIK1Ch,),
                id: 'b8bk5DVy5',
                layoutId: 'b8bk5DVy5',
                title: moTqfDim_,
                width: '100%',
                ...addPropertyOverrides2({ fMLzDPiVJ: { icon: void 0, }, }, baseVariant, gestureVariant,),
              },),
            },),
            /* @__PURE__ */ _jsxs3(motion3.div, {
              className: 'framer-1ho9p69',
              'data-framer-name': 'Text',
              layoutDependency,
              layoutId: 'I167:27650;111:39594',
              children: [
                SU5SHTAmT && /* @__PURE__ */ _jsx3(RichText3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                    children: /* @__PURE__ */ _jsxs3(motion3.h4, {
                      className: 'framer-styles-preset-19k5lrf',
                      'data-styles-preset': 'cRmkgGutV',
                      children: ['A Mac app you\u2019ll', /* @__PURE__ */ _jsx3(motion3.br, {},), 'love to design with',],
                    },),
                  },),
                  className: 'framer-13dnrer',
                  'data-framer-name': 'Title',
                  layoutDependency,
                  layoutId: 'I167:27650;111:39587',
                  style: { '--framer-paragraph-spacing': '0px', },
                  text: IaWp7lx6r,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides2(
                    {
                      fMLzDPiVJ: {
                        children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                          children: /* @__PURE__ */ _jsxs3(motion3.h4, {
                            className: 'framer-styles-preset-19k5lrf',
                            'data-styles-preset': 'cRmkgGutV',
                            style: { '--framer-text-alignment': 'left', },
                            children: ['A Mac app you\u2019ll', /* @__PURE__ */ _jsx3(motion3.br, {},), 'love to design with',],
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                SPRj6A3tJ && /* @__PURE__ */ _jsx3(RichText3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                    children: /* @__PURE__ */ _jsx3(motion3.p, {
                      className: 'framer-styles-preset-de78pk',
                      'data-styles-preset': 'aLfVqe1FC',
                      style: { '--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv)', },
                      children:
                        'Absolute dashboard provides you with a single place to get all your real-time views of your podcasting analytics from multiple sources.',
                    },),
                  },),
                  className: 'framer-jcpcc7',
                  'data-framer-name': 'Description',
                  layoutDependency,
                  layoutId: 'I167:27650;111:39588',
                  style: { '--extracted-r6o4lv': 'rgba(255, 255, 255, 0.8)', '--framer-paragraph-spacing': '0px', },
                  text: ecriYSsUC,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides2(
                    {
                      fMLzDPiVJ: {
                        children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                          children: /* @__PURE__ */ _jsx3(motion3.p, {
                            className: 'framer-styles-preset-de78pk',
                            'data-styles-preset': 'aLfVqe1FC',
                            style: { '--framer-text-alignment': 'left', '--framer-text-color': 'var(--extracted-r6o4lv)', },
                            children:
                              'Absolute dashboard provides you with a single place to get all your real-time views of your podcasting analytics from multiple sources.',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css7 = [
  '.framer-fSX7h [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-fSX7h .framer-1ctvcq6 { display: block; }',
  '.framer-fSX7h .framer-46k7fd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1070px; }',
  '.framer-fSX7h .framer-e6g14c-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-fSX7h .framer-1ho9p69 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-fSX7h .framer-13dnrer, .framer-fSX7h .framer-jcpcc7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fSX7h .framer-46k7fd, .framer-fSX7h .framer-1ho9p69 { gap: 0px; } .framer-fSX7h .framer-46k7fd > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-fSX7h .framer-46k7fd > :first-child, .framer-fSX7h .framer-1ho9p69 > :first-child { margin-top: 0px; } .framer-fSX7h .framer-46k7fd > :last-child, .framer-fSX7h .framer-1ho9p69 > :last-child { margin-bottom: 0px; } .framer-fSX7h .framer-1ho9p69 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }',
  '.framer-fSX7h.framer-v-106keaj .framer-46k7fd { align-content: flex-start; align-items: flex-start; width: 570px; }',
  '.framer-fSX7h.framer-v-106keaj .framer-1ho9p69 { align-content: flex-start; align-items: flex-start; }',
  ...css5,
  ...css4,
];
var FramerimqCP4fEz = withCSS3(Component3, css7, 'framer-fSX7h',);
var stdin_default3 = FramerimqCP4fEz;
FramerimqCP4fEz.displayName = 'Section Title';
FramerimqCP4fEz.defaultProps = { height: 254, width: 1070, };
addPropertyControls3(FramerimqCP4fEz, {
  variant: {
    options: ['dIBDtF4lr', 'fMLzDPiVJ',],
    optionTitles: ['Center Align', 'Left Align',],
    title: 'Variant',
    type: ControlType3.Enum,
  },
  IaWp7lx6r: {
    defaultValue: 'A Mac app you\u2019ll \nlove to design with',
    displayTextArea: true,
    title: 'Title',
    type: ControlType3.String,
  },
  ecriYSsUC: {
    defaultValue:
      'Absolute dashboard provides you with a single place to get all your real-time views of your podcasting analytics from multiple sources.',
    displayTextArea: true,
    title: 'Description',
    type: ControlType3.String,
  },
  SU5SHTAmT: { defaultValue: true, title: 'Show Title', type: ControlType3.Boolean, },
  SPRj6A3tJ: { defaultValue: true, title: 'Show Description', type: ControlType3.Boolean, },
  moTqfDim_: { defaultValue: 'Better View', displayTextArea: false, title: 'Tag Text', type: ControlType3.String, },
  UygWIK1Ch: {
    __defaultAssetReference:
      'data:framer/asset-reference,9W7nPDDXdMWukdi8EsLxRpx8orE.svg?originalFilename=cable-tag.svg&preferredSize=auto',
    title: 'Tag Icon',
    type: ControlType3.ResponsiveImage,
  },
  RemVozjsi: { defaultValue: true, title: 'showBullet', type: ControlType3.Boolean, },
},);
addFonts3(FramerimqCP4fEz, [...TagFonts, ...fonts4, ...fonts3,],);

// https:https://framerusercontent.com/modules/naa0ugoTqrGMOULkYjia/aWdZ67n3P4gE06sKrUnR/cwMgH3g_H.js
import { jsx as _jsx4, jsxs as _jsxs4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls4,
  ControlType as ControlType4,
  cx as cx4,
  Image as Image3,
  RichText as RichText4,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState4,
  withCSS as withCSS4,
} from 'unframer/dist/framer';
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4, } from 'framer-motion';
import * as React4 from 'react';

// https:https://framerusercontent.com/modules/rSbiLfsnHLTrF3vDy2qI/wwPZkJ3NWmc60aYUIYo1/eshFTHo2K.js
import { fontStore as fontStore5, } from 'unframer/dist/framer';
fontStore5.loadWebFontsFromSelectors(['GF;DM Sans-regular',],);
var fonts5 = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/eshFTHo2K:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTmf3ZGMZpg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhTmf3ZGMZpg.ttf',
  weight: '400',
},];
var css8 = [
  '.framer-kEfpu .framer-styles-preset-1s3kmoj:not(.rich-text-wrapper), .framer-kEfpu .framer-styles-preset-1s3kmoj.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 400; --framer-letter-spacing: -0.2px; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className5 = 'framer-kEfpu';

// https:https://framerusercontent.com/modules/naa0ugoTqrGMOULkYjia/aWdZ67n3P4gE06sKrUnR/cwMgH3g_H.js
var cycleOrder4 = ['TrJsulOOg', 'y5k4iwWcs',];
var variantClassNames4 = { TrJsulOOg: 'framer-v-1jux976', y5k4iwWcs: 'framer-v-1y53r9x', };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions4 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var toResponsiveImage4 = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Transition4 = ({ value, children, },) => {
  const config = React4.useContext(MotionConfigContext4,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext4.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap3 = { 'with Border': 'TrJsulOOg', 'without Border': 'y5k4iwWcs', };
var getProps4 = ({ feature, height, id, image, width, ...props },) => {
  var ref, _variant, ref1, ref2;
  return {
    ...props,
    Pb0KMdHqc: (ref = feature !== null && feature !== void 0 ? feature : props.Pb0KMdHqc) !== null && ref !== void 0
      ? ref
      : 'Phone & Priorty Support ',
    variant:
      (ref1 = (_variant = humanReadableVariantMap3[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref1 !== void 0
        ? ref1
        : 'TrJsulOOg',
    WEOMLUXiC: (ref2 = image !== null && image !== void 0 ? image : props.WEOMLUXiC) !== null && ref2 !== void 0
      ? ref2
      : {
        src:
          new URL(
            'assets/RDKpVNqV8WkmRY9WzAzpnJVkkI.svg',
            'https://framerusercontent.com/modules/naa0ugoTqrGMOULkYjia/aWdZ67n3P4gE06sKrUnR/cwMgH3g_H.js',
          ).href,
      },
  };
};
var createLayoutDependency4 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component4 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo4();
  const { style, className: className6, layoutId, variant, Pb0KMdHqc, WEOMLUXiC, ...restProps } = getProps4(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: 'TrJsulOOg',
    transitions: transitions4,
    variant,
    variantClassNames: variantClassNames4,
  },);
  const layoutDependency = createLayoutDependency4(props, variants,);
  const defaultLayoutId = React4.useId();
  return /* @__PURE__ */ _jsx4(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(motion4.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx4('framer-TUl5A', className5, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx4(Transition4, {
        value: transition,
        children: /* @__PURE__ */ _jsxs4(motion4.div, {
          ...restProps,
          className: cx4('framer-1jux976', className6,),
          'data-border': true,
          'data-framer-name': 'with Border',
          layoutDependency,
          layoutId: 'TrJsulOOg',
          ref,
          style: {
            '--border-bottom-width': '1px',
            '--border-color': 'rgba(0, 0, 0, 0.1)',
            '--border-left-width': '0px',
            '--border-right-width': '0px',
            '--border-style': 'solid',
            '--border-top-width': '0px',
            ...style,
          },
          variants: {
            y5k4iwWcs: {
              '--border-bottom-width': '0px',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-top-width': '0px',
            },
          },
          ...addPropertyOverrides3({ y5k4iwWcs: { 'data-framer-name': 'without Border', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsx4(Image3, {
              background: {
                alt: '',
                fit: 'fill',
                intrinsicHeight: 20,
                intrinsicWidth: 20,
                pixelHeight: 20,
                pixelWidth: 20,
                sizes: '20px',
                ...toResponsiveImage4(WEOMLUXiC,),
              },
              className: 'framer-1klhtdr',
              'data-framer-name': 'input_search',
              layoutDependency,
              layoutId: 'gNJpH_mhg',
            },),
            /* @__PURE__ */ _jsx4(RichText4, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                children: /* @__PURE__ */ _jsx4(motion4.p, {
                  className: 'framer-styles-preset-1s3kmoj',
                  'data-styles-preset': 'eshFTHo2K',
                  style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                  children: 'Phone & Priorty Support ',
                },),
              },),
              className: 'framer-911ud3',
              'data-framer-name': 'Phone & Priorty Support',
              layoutDependency,
              layoutId: 'fcVD3ReUD',
              style: {
                '--extracted-r6o4lv': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)) ',
                '--framer-paragraph-spacing': '0px',
              },
              text: Pb0KMdHqc,
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css9 = [
  '.framer-TUl5A [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-TUl5A .framer-gbjkul { display: block; }',
  '.framer-TUl5A .framer-1jux976 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 0px 12px 0px; position: relative; width: 293px; }',
  '.framer-TUl5A .framer-1klhtdr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }',
  '.framer-TUl5A .framer-911ud3 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TUl5A .framer-1jux976 { gap: 0px; } .framer-TUl5A .framer-1jux976 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-TUl5A .framer-1jux976 > :first-child { margin-left: 0px; } .framer-TUl5A .framer-1jux976 > :last-child { margin-right: 0px; } }',
  ...css8,
];
var FramercwMgH3g_H = withCSS4(Component4, css9, 'framer-TUl5A',);
var stdin_default4 = FramercwMgH3g_H;
FramercwMgH3g_H.displayName = 'Pricing Feature Item';
FramercwMgH3g_H.defaultProps = { height: 50, width: 293, };
addPropertyControls4(FramercwMgH3g_H, {
  variant: {
    options: ['TrJsulOOg', 'y5k4iwWcs',],
    optionTitles: ['with Border', 'without Border',],
    title: 'Variant',
    type: ControlType4.Enum,
  },
  Pb0KMdHqc: { defaultValue: 'Phone & Priorty Support ', displayTextArea: false, title: 'Feature', type: ControlType4.String, },
  WEOMLUXiC: {
    __defaultAssetReference: 'data:framer/asset-reference,RDKpVNqV8WkmRY9WzAzpnJVkkI.svg?originalFilename=check.svg&preferredSize=auto',
    title: 'Image',
    type: ControlType4.ResponsiveImage,
  },
},);
addFonts4(FramercwMgH3g_H, [...fonts5,],);

// https:https://framerusercontent.com/modules/tMbGXwBAf1c0CK3SXCVW/KFQv1DWc0jF947sh48SD/RtV_BGntD-0.js
var RtV_BGntD_0_exports = {};
__export(RtV_BGntD_0_exports, {
  __FramerMetadata__: () => __FramerMetadata__,
  v0: () => v0,
  v1: () => v1,
  v10: () => v10,
  v11: () => v11,
  v12: () => v12,
  v13: () => v13,
  v14: () => v14,
  v15: () => v15,
  v16: () => v16,
  v17: () => v17,
  v18: () => v18,
  v19: () => v19,
  v2: () => v2,
  v3: () => v3,
  v4: () => v4,
  v5: () => v5,
  v6: () => v6,
  v7: () => v7,
  v8: () => v8,
  v9: () => v9,
},);
import { jsx as _jsx5, } from 'react/jsx-runtime';
import { motion as motion5, } from 'framer-motion';
import * as React5 from 'react';
var v0 = 'Prezzo';
var v1 = 'Tariffe che si adattano al tuo utilizzo';
var v2 = 'Prezzo';
var v3 = 'Tariffe che si adattano al tuo utilizzo';
var v4 = 'Prezzo';
var v5 = 'Tariffe che si adattano al tuo utilizzo';
var v6 = 'Prezzo';
var v7 = 'Tariffe che si adattano al tuo utilizzo';
var v8 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v9 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v10 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v11 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v12 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v13 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v14 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v15 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v16 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v17 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v18 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var v19 = /* @__PURE__ */ _jsx5(React5.Fragment, {
  children: /* @__PURE__ */ _jsx5(motion5.p, {
    style: {
      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
      '--framer-font-weight': '500',
      '--framer-letter-spacing': '-0.4px',
      '--framer-line-height': '22px',
      '--framer-text-color': 'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
    },
    children: 'Inizia a',
  },),
},);
var __FramerMetadata__ = {
  'exports': {
    'v16': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v15': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v8': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v6': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v9': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v4': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v14': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v2': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v11': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v5': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v10': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v19': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v18': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v7': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v13': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v0': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v1': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v12': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v3': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    'v17': { 'type': 'variable', 'annotations': { 'framerContractVersion': '1', }, },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};

// https:https://framerusercontent.com/modules/tMbGXwBAf1c0CK3SXCVW/KFQv1DWc0jF947sh48SD/RtV_BGntD.js
var SectionTitleFonts = getFonts2(stdin_default3,);
var PricingFeatureItemFonts = getFonts2(stdin_default4,);
var ButtonFonts = getFonts2(stdin_default,);
var cycleOrder5 = ['owq8_Br0y', 'NFkSOKnao', 'cDuu0Jxy4', 'Up1OBQN7R',];
var serializationHash2 = 'framer-KUZU9';
var variantClassNames5 = {
  cDuu0Jxy4: 'framer-v-dovseb',
  NFkSOKnao: 'framer-v-1vc895s',
  owq8_Br0y: 'framer-v-1sp6nx8',
  Up1OBQN7R: 'framer-v-16jrtdu',
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions5 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var valuesByLocaleId = { j95Se8Jpd: RtV_BGntD_0_exports, };
var getLocalizedValue = (key, locale,) => {
  while (locale) {
    const values = valuesByLocaleId[locale.id];
    if (values) {
      const value = values[key];
      if (value) {
        return value;
      }
    }
    locale = locale.fallback;
  }
};
var addImageAlt = (image, alt,) => {
  if (!image || typeof image !== 'object') {
    return;
  }
  return { ...image, alt, };
};
var Transition5 = ({ value, children, },) => {
  const config = React6.useContext(MotionConfigContext5,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React6.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx6(MotionConfigContext5.Provider, { value: contextValue, children, },);
};
var Variants2 = motion6(React6.Fragment,);
var humanReadableVariantMap4 = { 'Desktop 1': 'owq8_Br0y', 'Mobile 1': 'cDuu0Jxy4', 'Mobile 2': 'Up1OBQN7R', 'Tablet 1': 'NFkSOKnao', };
var getProps5 = ({ buyEvent, height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    Gt9H5QhVm: buyEvent !== null && buyEvent !== void 0 ? buyEvent : props.Gt9H5QhVm,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap4[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'owq8_Br0y',
  };
};
var createLayoutDependency5 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component5 = /* @__PURE__ */ React6.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo5();
  const { style, className: className6, layoutId, variant, Gt9H5QhVm, ...restProps } = getProps5(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: 'owq8_Br0y',
    transitions: transitions5,
    variant,
    variantClassNames: variantClassNames5,
  },);
  const layoutDependency = createLayoutDependency5(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const HihQ7sLzJsqqhvp = activeVariantCallback(async (...args) => {
    if (Gt9H5QhVm) {
      const res = await Gt9H5QhVm(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React6.useRef(null,);
  const router = useRouter();
  const defaultLayoutId = React6.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  var _getLocalizedValue,
    _getLocalizedValue1,
    _getLocalizedValue2,
    _getLocalizedValue3,
    _getLocalizedValue4,
    _getLocalizedValue5,
    _getLocalizedValue6,
    _getLocalizedValue7,
    _getLocalizedValue8,
    _getLocalizedValue9,
    _getLocalizedValue10,
    _getLocalizedValue11,
    _getLocalizedValue12,
    _getLocalizedValue13,
    _getLocalizedValue14,
    _getLocalizedValue15,
    _getLocalizedValue16,
    _getLocalizedValue17,
    _getLocalizedValue18,
    _getLocalizedValue19;
  return /* @__PURE__ */ _jsx6(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx6(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx6(Transition5, {
        value: transition,
        children: /* @__PURE__ */ _jsxs5(motion6.div, {
          ...restProps,
          className: cx5(serializationHash2, ...sharedStyleClassNames, 'framer-1sp6nx8', className6, classNames,),
          'data-framer-name': 'Desktop 1',
          layoutDependency,
          layoutId: 'owq8_Br0y',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides4(
            {
              cDuu0Jxy4: { 'data-framer-name': 'Mobile 1', },
              NFkSOKnao: { 'data-framer-name': 'Tablet 1', },
              Up1OBQN7R: { 'data-framer-name': 'Mobile 2', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx6(motion6.div, {
              className: 'framer-q0ze1u',
              'data-framer-name': 'Title',
              layoutDependency,
              layoutId: 'ZGUn2A6Hv',
              children: /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                children: /* @__PURE__ */ _jsx6(motion6.div, {
                  className: 'framer-f48st9-container',
                  layoutDependency,
                  layoutId: 'vitM1DcpK-container',
                  children: /* @__PURE__ */ _jsx6(stdin_default3, {
                    description: (_getLocalizedValue = getLocalizedValue('v1', activeLocale,)) !== null && _getLocalizedValue !== void 0
                      ? _getLocalizedValue
                      : 'Pricing that scale with your usage',
                    height: '100%',
                    id: 'vitM1DcpK',
                    layoutId: 'vitM1DcpK',
                    showBullet: false,
                    showDescription: true,
                    showTitle: true,
                    style: { width: '100%', },
                    tagText: '',
                    title: (_getLocalizedValue1 = getLocalizedValue('v0', activeLocale,)) !== null && _getLocalizedValue1 !== void 0
                      ? _getLocalizedValue1
                      : 'Pricing',
                    variant: 'fMLzDPiVJ',
                    width: '100%',
                    ...addPropertyOverrides4(
                      {
                        cDuu0Jxy4: {
                          description:
                            (_getLocalizedValue2 = getLocalizedValue('v5', activeLocale,)) !== null && _getLocalizedValue2 !== void 0
                              ? _getLocalizedValue2
                              : 'Pricing that scale with your usage',
                          title: (_getLocalizedValue3 = getLocalizedValue('v4', activeLocale,)) !== null && _getLocalizedValue3 !== void 0
                            ? _getLocalizedValue3
                            : 'Pricing',
                        },
                        NFkSOKnao: {
                          description:
                            (_getLocalizedValue4 = getLocalizedValue('v3', activeLocale,)) !== null && _getLocalizedValue4 !== void 0
                              ? _getLocalizedValue4
                              : 'Pricing that scale with your usage',
                          title: (_getLocalizedValue5 = getLocalizedValue('v2', activeLocale,)) !== null && _getLocalizedValue5 !== void 0
                            ? _getLocalizedValue5
                            : 'Pricing',
                        },
                        Up1OBQN7R: {
                          description:
                            (_getLocalizedValue6 = getLocalizedValue('v7', activeLocale,)) !== null && _getLocalizedValue6 !== void 0
                              ? _getLocalizedValue6
                              : 'Pricing that scale with your usage',
                          title: (_getLocalizedValue7 = getLocalizedValue('v6', activeLocale,)) !== null && _getLocalizedValue7 !== void 0
                            ? _getLocalizedValue7
                            : 'Pricing',
                        },
                      },
                      baseVariant,
                      gestureVariant,
                    ),
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsxs5(motion6.div, {
              className: 'framer-1imp2ad',
              'data-framer-name': 'Pricing Table',
              layoutDependency,
              layoutId: 'a6GMERlG8',
              style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, },
              children: [
                /* @__PURE__ */ _jsx6(motion6.div, {
                  className: 'framer-xv9uvu',
                  'data-border': true,
                  'data-framer-name': 'Left',
                  layoutDependency,
                  layoutId: 'hGu_eYXJb',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'var(--token-19c4737c-eef7-4396-b22a-028772ac270e, rgba(0, 0, 0, 0.1)) /* {"name":"Outline"} */',
                    '--border-left-width': '1px',
                    '--border-right-width': '0px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 0,
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.08)',
                  },
                  variants: {
                    cDuu0Jxy4: { '--border-right-width': '1px', borderBottomRightRadius: 24, borderTopRightRadius: 24, },
                    NFkSOKnao: { '--border-right-width': '1px', borderBottomRightRadius: 24, borderTopRightRadius: 24, },
                    Up1OBQN7R: { '--border-right-width': '1px', borderBottomRightRadius: 24, borderTopRightRadius: 24, },
                  },
                  children: /* @__PURE__ */ _jsxs5(motion6.div, {
                    className: 'framer-xy6qpo',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'oBNKTj0O5',
                    children: [
                      /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-16lih03',
                        'data-framer-name': 'Prize',
                        layoutDependency,
                        layoutId: 'QcVIWt4Ru',
                        children: [
                          /* @__PURE__ */ _jsx6(RichText5, {
                            __fromCanvasComponent: true,
                            children:
                              (_getLocalizedValue8 = getLocalizedValue('v8', activeLocale,)) !== null && _getLocalizedValue8 !== void 0
                                ? _getLocalizedValue8
                                : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion6.p, {
                                    style: {
                                      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '-0.4px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                    },
                                    children: 'Starts at',
                                  },),
                                },),
                            className: 'framer-1fpuc5j',
                            'data-framer-name': 'Starts at',
                            fonts: ['GF;DM Sans-500',],
                            layoutDependency,
                            layoutId: 'yJecqMWOQ',
                            style: { '--extracted-r6o4lv': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0))', },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                cDuu0Jxy4: {
                                  children:
                                    (_getLocalizedValue9 = getLocalizedValue('v10', activeLocale,)) !== null &&
                                      _getLocalizedValue9 !== void 0
                                      ? _getLocalizedValue9
                                      : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion6.p, {
                                          style: {
                                            '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                            '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.4px',
                                            '--framer-line-height': '22px',
                                            '--framer-text-color':
                                              'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                          },
                                          children: 'Starts at',
                                        },),
                                      },),
                                },
                                NFkSOKnao: {
                                  children:
                                    (_getLocalizedValue10 = getLocalizedValue('v9', activeLocale,)) !== null &&
                                      _getLocalizedValue10 !== void 0
                                      ? _getLocalizedValue10
                                      : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion6.p, {
                                          style: {
                                            '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                            '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.4px',
                                            '--framer-line-height': '22px',
                                            '--framer-text-color':
                                              'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                          },
                                          children: 'Starts at',
                                        },),
                                      },),
                                },
                                Up1OBQN7R: {
                                  children:
                                    (_getLocalizedValue11 = getLocalizedValue('v11', activeLocale,)) !== null &&
                                      _getLocalizedValue11 !== void 0
                                      ? _getLocalizedValue11
                                      : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion6.p, {
                                          style: {
                                            '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                            '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.4px',
                                            '--framer-line-height': '22px',
                                            '--framer-text-color':
                                              'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                          },
                                          children: 'Starts at',
                                        },),
                                      },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx6(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion6.h4, {
                                style: {
                                  '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                  '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  '--framer-font-size': '56px',
                                  '--framer-font-weight': '700',
                                  '--framer-letter-spacing': '-2px',
                                  '--framer-line-height': '68px',
                                  '--framer-text-alignment': 'left',
                                },
                                children: '$14',
                              },),
                            },),
                            className: 'framer-jgjr6s',
                            'data-framer-name': '$50',
                            fonts: ['GF;DM Sans-700',],
                            layoutDependency,
                            layoutId: 'vNNDsM4xb',
                            variants: {
                              Up1OBQN7R: {
                                '--extracted-1eung3n': 'var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255))',
                              },
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                Up1OBQN7R: {
                                  children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion6.h4, {
                                      style: {
                                        '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                        '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                        '--framer-font-size': '56px',
                                        '--framer-font-weight': '700',
                                        '--framer-letter-spacing': '-2px',
                                        '--framer-line-height': '68px',
                                        '--framer-text-alignment': 'left',
                                        '--framer-text-color':
                                          'var(--extracted-1eung3n, var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255)))',
                                      },
                                      children: '$69',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx6(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion6.p, {
                                style: {
                                  '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                  '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  '--framer-font-weight': '500',
                                  '--framer-letter-spacing': '-0.4px',
                                  '--framer-line-height': '22px',
                                },
                                children: '/ per month',
                              },),
                            },),
                            className: 'framer-5ktdfn',
                            'data-framer-name': '/month based',
                            fonts: ['GF;DM Sans-500',],
                            layoutDependency,
                            layoutId: 'FYgNDa8uX',
                            variants: {
                              Up1OBQN7R: { '--extracted-r6o4lv': 'var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6))', },
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                Up1OBQN7R: {
                                  children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion6.p, {
                                      style: {
                                        '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                        '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                        '--framer-font-weight': '500',
                                        '--framer-letter-spacing': '-0.4px',
                                        '--framer-line-height': '22px',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6)))',
                                      },
                                      children: '/ monthly',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-kjtzbd',
                        'data-framer-name': 'Features',
                        layoutDependency,
                        layoutId: 'LQmVBYn5y',
                        children: [
                          /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx6(motion6.div, {
                              className: 'framer-1qrd1x0-container',
                              layoutDependency,
                              layoutId: 'tlIVlFaDe-container',
                              children: /* @__PURE__ */ _jsx6(stdin_default4, {
                                feature: '8k words per month',
                                height: '100%',
                                id: 'tlIVlFaDe',
                                layoutId: 'tlIVlFaDe',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx6(motion6.div, {
                              className: 'framer-1rk2qug-container',
                              layoutDependency,
                              layoutId: 'PrQTaYrkV-container',
                              children: /* @__PURE__ */ _jsx6(stdin_default4, {
                                feature: 'All voices',
                                height: '100%',
                                id: 'PrQTaYrkV',
                                layoutId: 'PrQTaYrkV',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsx6(ResolveLinks, {
                        links: [
                          { href: { webPageId: 'qoG9YIQaf', }, implicitPathVariables: void 0, },
                          { href: { webPageId: 'qoG9YIQaf', }, implicitPathVariables: void 0, },
                          { href: { webPageId: 'qoG9YIQaf', }, implicitPathVariables: void 0, },
                          { href: { webPageId: 'qoG9YIQaf', }, implicitPathVariables: void 0, },
                        ],
                        children: (resolvedLinks,) =>
                          /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                            width: '292.6667px',
                            ...addPropertyOverrides4(
                              {
                                cDuu0Jxy4: {
                                  width: `max(max(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 200px) - 40px, 0px)`,
                                },
                                NFkSOKnao: {
                                  width: `max(max((${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 140px) / 2, 200px) - 64px, 0px)`,
                                },
                                Up1OBQN7R: {
                                  width: `max(max(${
                                    (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) ||
                                    '100vw'
                                  } - 40px, 200px) - 40px, 0px)`,
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                            children: /* @__PURE__ */ _jsx6(motion6.div, {
                              className: 'framer-a97s52-container',
                              layoutDependency,
                              layoutId: 'kUECgIZpr-container',
                              children: /* @__PURE__ */ _jsx6(stdin_default, {
                                FOdt_Q22J: 'Get started now',
                                gT8MXhd7P: addImageAlt({ src: 'https://framerusercontent.com/images/Nnev6aW8H97M9K6ID2XPXZqd0.svg', }, '',),
                                height: '100%',
                                HihQ7sLzJ: HihQ7sLzJsqqhvp,
                                id: 'kUECgIZpr',
                                JRpxGFjwH: false,
                                layoutId: 'kUECgIZpr',
                                style: { width: '100%', },
                                variant: 'nvj6GRWIN',
                                width: '100%',
                                wsxRD5u41: true,
                                Xf0re2Pc_: resolvedLinks[0],
                                ...addPropertyOverrides4(
                                  {
                                    cDuu0Jxy4: { Xf0re2Pc_: resolvedLinks[2], },
                                    NFkSOKnao: { Xf0re2Pc_: resolvedLinks[1], },
                                    Up1OBQN7R: { Xf0re2Pc_: resolvedLinks[3], },
                                  },
                                  baseVariant,
                                  gestureVariant,
                                ),
                              },),
                            },),
                          },),
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsx6(motion6.div, {
                  className: 'framer-12y6qtd',
                  'data-border': true,
                  'data-framer-name': 'Center Collapse',
                  layoutDependency,
                  layoutId: 'CUIYLNqg7',
                  style: {
                    '--border-bottom-width': '0px',
                    '--border-color': 'var(--token-ae1535ac-f0ba-4583-9008-4ae98aac6747, rgb(255, 79, 0)) /* {"name":"orange"} */',
                    '--border-left-width': '0px',
                    '--border-right-width': '0px',
                    '--border-style': 'solid',
                    '--border-top-width': '4px',
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.08)',
                  },
                  variants: {
                    cDuu0Jxy4: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                    NFkSOKnao: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                    Up1OBQN7R: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                  },
                  children: /* @__PURE__ */ _jsx6(motion6.div, {
                    className: 'framer-1wnf0i5',
                    'data-border': true,
                    'data-framer-name': 'Center',
                    layoutDependency,
                    layoutId: 'l3_XIg6Kr',
                    style: {
                      '--border-bottom-width': '1px',
                      '--border-color': 'rgba(0, 0, 0, 0.1)',
                      '--border-left-width': '1px',
                      '--border-right-width': '1px',
                      '--border-style': 'solid',
                      '--border-top-width': '1px',
                      backgroundColor: 'rgb(255, 255, 255)',
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    variants: {
                      cDuu0Jxy4: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      NFkSOKnao: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      Up1OBQN7R: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                    },
                    children: /* @__PURE__ */ _jsxs5(motion6.div, {
                      className: 'framer-1s90vne',
                      'data-framer-name': 'Content',
                      layoutDependency,
                      layoutId: 'qZGRzoc47',
                      children: [
                        /* @__PURE__ */ _jsxs5(motion6.div, {
                          className: 'framer-qdn629',
                          'data-framer-name': 'Price',
                          layoutDependency,
                          layoutId: 'wC_CuP3pA',
                          children: [
                            /* @__PURE__ */ _jsx6(RichText5, {
                              __fromCanvasComponent: true,
                              children:
                                (_getLocalizedValue12 = getLocalizedValue('v12', activeLocale,)) !== null && _getLocalizedValue12 !== void 0
                                  ? _getLocalizedValue12
                                  : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion6.p, {
                                      style: {
                                        '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                        '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                        '--framer-font-weight': '500',
                                        '--framer-letter-spacing': '-0.4px',
                                        '--framer-line-height': '22px',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                      },
                                      children: 'Starts at',
                                    },),
                                  },),
                              className: 'framer-zatrq3',
                              'data-framer-name': 'Starts at',
                              fonts: ['GF;DM Sans-500',],
                              layoutDependency,
                              layoutId: 'lfmm9rRtl',
                              style: { '--extracted-r6o4lv': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0))', },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                              ...addPropertyOverrides4(
                                {
                                  cDuu0Jxy4: {
                                    children:
                                      (_getLocalizedValue13 = getLocalizedValue('v14', activeLocale,)) !== null &&
                                        _getLocalizedValue13 !== void 0
                                        ? _getLocalizedValue13
                                        : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                          children: /* @__PURE__ */ _jsx6(motion6.p, {
                                            style: {
                                              '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                              '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                              '--framer-font-weight': '500',
                                              '--framer-letter-spacing': '-0.4px',
                                              '--framer-line-height': '22px',
                                              '--framer-text-color':
                                                'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                            },
                                            children: 'Starts at',
                                          },),
                                        },),
                                  },
                                  NFkSOKnao: {
                                    children:
                                      (_getLocalizedValue14 = getLocalizedValue('v13', activeLocale,)) !== null &&
                                        _getLocalizedValue14 !== void 0
                                        ? _getLocalizedValue14
                                        : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                          children: /* @__PURE__ */ _jsx6(motion6.p, {
                                            style: {
                                              '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                              '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                              '--framer-font-weight': '500',
                                              '--framer-letter-spacing': '-0.4px',
                                              '--framer-line-height': '22px',
                                              '--framer-text-color':
                                                'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                            },
                                            children: 'Starts at',
                                          },),
                                        },),
                                  },
                                  Up1OBQN7R: {
                                    children:
                                      (_getLocalizedValue15 = getLocalizedValue('v15', activeLocale,)) !== null &&
                                        _getLocalizedValue15 !== void 0
                                        ? _getLocalizedValue15
                                        : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                          children: /* @__PURE__ */ _jsx6(motion6.p, {
                                            style: {
                                              '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                              '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                              '--framer-font-weight': '500',
                                              '--framer-letter-spacing': '-0.4px',
                                              '--framer-line-height': '22px',
                                              '--framer-text-color':
                                                'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                            },
                                            children: 'Starts at',
                                          },),
                                        },),
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                            /* @__PURE__ */ _jsx6(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                children: /* @__PURE__ */ _jsx6(motion6.h4, {
                                  style: {
                                    '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                    '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                    '--framer-font-size': '56px',
                                    '--framer-font-weight': '700',
                                    '--framer-letter-spacing': '-2px',
                                    '--framer-line-height': '68px',
                                    '--framer-text-alignment': 'left',
                                  },
                                  children: '$29',
                                },),
                              },),
                              className: 'framer-1r2r1xx',
                              'data-framer-name': '$50',
                              fonts: ['GF;DM Sans-700',],
                              layoutDependency,
                              layoutId: 'MqSCWBGAG',
                              variants: {
                                Up1OBQN7R: {
                                  '--extracted-1eung3n': 'var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255))',
                                },
                              },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                              ...addPropertyOverrides4(
                                {
                                  Up1OBQN7R: {
                                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                      children: /* @__PURE__ */ _jsx6(motion6.h4, {
                                        style: {
                                          '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                          '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                          '--framer-font-size': '56px',
                                          '--framer-font-weight': '700',
                                          '--framer-letter-spacing': '-2px',
                                          '--framer-line-height': '68px',
                                          '--framer-text-alignment': 'left',
                                          '--framer-text-color':
                                            'var(--extracted-1eung3n, var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255)))',
                                        },
                                        children: '$189',
                                      },),
                                    },),
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                            /* @__PURE__ */ _jsx6(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                children: /* @__PURE__ */ _jsx6(motion6.p, {
                                  style: {
                                    '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                    '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                    '--framer-font-weight': '500',
                                    '--framer-letter-spacing': '-0.4px',
                                    '--framer-line-height': '22px',
                                  },
                                  children: '/ per month',
                                },),
                              },),
                              className: 'framer-1q7p6hj',
                              'data-framer-name': '/month based',
                              fonts: ['GF;DM Sans-500',],
                              layoutDependency,
                              layoutId: 'UZSb6eRol',
                              variants: {
                                Up1OBQN7R: {
                                  '--extracted-r6o4lv': 'var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6))',
                                },
                              },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                              ...addPropertyOverrides4(
                                {
                                  Up1OBQN7R: {
                                    children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                      children: /* @__PURE__ */ _jsx6(motion6.p, {
                                        style: {
                                          '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                          '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                          '--framer-font-weight': '500',
                                          '--framer-letter-spacing': '-0.4px',
                                          '--framer-line-height': '22px',
                                          '--framer-text-color':
                                            'var(--extracted-r6o4lv, var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6)))',
                                        },
                                        children: '/ monthly',
                                      },),
                                    },),
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                          ],
                        },),
                        /* @__PURE__ */ _jsxs5(motion6.div, {
                          className: 'framer-g9wlad',
                          'data-framer-name': 'Features',
                          layoutDependency,
                          layoutId: 'zYoB9oA0B',
                          children: [
                            /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx6(motion6.div, {
                                className: 'framer-136smln-container',
                                layoutDependency,
                                layoutId: 'EV2PdT94k-container',
                                children: /* @__PURE__ */ _jsx6(stdin_default4, {
                                  feature: '16k words per month',
                                  height: '100%',
                                  id: 'EV2PdT94k',
                                  layoutId: 'EV2PdT94k',
                                  style: { width: '100%', },
                                  variant: 'TrJsulOOg',
                                  width: '100%',
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx6(motion6.div, {
                                className: 'framer-177dnz7-container',
                                layoutDependency,
                                layoutId: 'dBfoMjDhz-container',
                                children: /* @__PURE__ */ _jsx6(stdin_default4, {
                                  feature: 'All voices',
                                  height: '100%',
                                  id: 'dBfoMjDhz',
                                  layoutId: 'dBfoMjDhz',
                                  style: { width: '100%', },
                                  variant: 'TrJsulOOg',
                                  width: '100%',
                                },),
                              },),
                            },),
                          ],
                        },),
                        /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                          width: '293px',
                          ...addPropertyOverrides4(
                            {
                              cDuu0Jxy4: {
                                width: `max(max(max(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 200px), 0px) - 40px, 0px)`,
                              },
                              NFkSOKnao: {
                                width: `max(max(max((${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 140px) / 2, 200px), 0px) - 64px, 0px)`,
                              },
                              Up1OBQN7R: {
                                width: `max(max(max(${
                                  (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                                } - 40px, 200px), 0px) - 40px, 0px)`,
                              },
                            },
                            baseVariant,
                            gestureVariant,
                          ),
                          children: /* @__PURE__ */ _jsx6(motion6.div, {
                            className: 'framer-102gnd9-container',
                            layoutDependency,
                            layoutId: 'OXjmURZSi-container',
                            children: /* @__PURE__ */ _jsx6(stdin_default, {
                              FOdt_Q22J: 'Get started now',
                              gT8MXhd7P: addImageAlt({ src: 'https://framerusercontent.com/images/Nnev6aW8H97M9K6ID2XPXZqd0.svg', }, '',),
                              height: '100%',
                              HihQ7sLzJ: HihQ7sLzJsqqhvp,
                              id: 'OXjmURZSi',
                              JRpxGFjwH: false,
                              layoutId: 'OXjmURZSi',
                              style: { width: '100%', },
                              variant: 'nvj6GRWIN',
                              width: '100%',
                              wsxRD5u41: true,
                            },),
                          },),
                        },),
                      ],
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx6(motion6.div, {
                  className: 'framer-f2qyn5',
                  'data-border': true,
                  'data-framer-name': 'Right',
                  layoutDependency,
                  layoutId: 'RGOVYCaw3',
                  style: {
                    '--border-bottom-width': '1px',
                    '--border-color': 'var(--token-19c4737c-eef7-4396-b22a-028772ac270e, rgba(0, 0, 0, 0.1)) /* {"name":"Outline"} */',
                    '--border-left-width': '0px',
                    '--border-right-width': '1px',
                    '--border-style': 'solid',
                    '--border-top-width': '1px',
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 24,
                    boxShadow: '0px 1px 1px 0px rgba(0, 0, 0, 0.08)',
                  },
                  variants: {
                    cDuu0Jxy4: { '--border-left-width': '1px', borderBottomLeftRadius: 24, borderTopLeftRadius: 24, },
                    NFkSOKnao: { '--border-left-width': '1px', borderBottomLeftRadius: 24, borderTopLeftRadius: 24, },
                    Up1OBQN7R: { '--border-left-width': '1px', borderBottomLeftRadius: 24, borderTopLeftRadius: 24, },
                  },
                  children: /* @__PURE__ */ _jsxs5(motion6.div, {
                    className: 'framer-1tcv7vv',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'MxmsNidtJ',
                    children: [
                      /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-yiwdv2',
                        'data-framer-name': 'Price',
                        layoutDependency,
                        layoutId: 'mAPyTiEzI',
                        children: [
                          /* @__PURE__ */ _jsx6(RichText5, {
                            __fromCanvasComponent: true,
                            children:
                              (_getLocalizedValue16 = getLocalizedValue('v16', activeLocale,)) !== null && _getLocalizedValue16 !== void 0
                                ? _getLocalizedValue16
                                : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                  children: /* @__PURE__ */ _jsx6(motion6.p, {
                                    style: {
                                      '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                      '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '-0.4px',
                                      '--framer-line-height': '22px',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                    },
                                    children: 'Starts at',
                                  },),
                                },),
                            className: 'framer-yly0f2',
                            'data-framer-name': 'Starts at',
                            fonts: ['GF;DM Sans-500',],
                            layoutDependency,
                            layoutId: 'VNAAUqRO_',
                            style: { '--extracted-r6o4lv': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0))', },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                cDuu0Jxy4: {
                                  children:
                                    (_getLocalizedValue17 = getLocalizedValue('v18', activeLocale,)) !== null &&
                                      _getLocalizedValue17 !== void 0
                                      ? _getLocalizedValue17
                                      : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion6.p, {
                                          style: {
                                            '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                            '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.4px',
                                            '--framer-line-height': '22px',
                                            '--framer-text-color':
                                              'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                          },
                                          children: 'Starts at',
                                        },),
                                      },),
                                },
                                NFkSOKnao: {
                                  children:
                                    (_getLocalizedValue18 = getLocalizedValue('v17', activeLocale,)) !== null &&
                                      _getLocalizedValue18 !== void 0
                                      ? _getLocalizedValue18
                                      : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion6.p, {
                                          style: {
                                            '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                            '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.4px',
                                            '--framer-line-height': '22px',
                                            '--framer-text-color':
                                              'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                          },
                                          children: 'Starts at',
                                        },),
                                      },),
                                },
                                Up1OBQN7R: {
                                  children:
                                    (_getLocalizedValue19 = getLocalizedValue('v19', activeLocale,)) !== null &&
                                      _getLocalizedValue19 !== void 0
                                      ? _getLocalizedValue19
                                      : /* @__PURE__ */ _jsx6(React6.Fragment, {
                                        children: /* @__PURE__ */ _jsx6(motion6.p, {
                                          style: {
                                            '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                            '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                            '--framer-font-weight': '500',
                                            '--framer-letter-spacing': '-0.4px',
                                            '--framer-line-height': '22px',
                                            '--framer-text-color':
                                              'var(--extracted-r6o4lv, var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)))',
                                          },
                                          children: 'Starts at',
                                        },),
                                      },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx6(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion6.h4, {
                                style: {
                                  '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                  '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  '--framer-font-size': '56px',
                                  '--framer-font-weight': '700',
                                  '--framer-letter-spacing': '-2px',
                                  '--framer-line-height': '68px',
                                  '--framer-text-alignment': 'left',
                                },
                                children: '$99',
                              },),
                            },),
                            className: 'framer-1v938it',
                            'data-framer-name': '$50',
                            fonts: ['GF;DM Sans-700',],
                            layoutDependency,
                            layoutId: 'YBwKkGRVS',
                            variants: {
                              Up1OBQN7R: {
                                '--extracted-1eung3n': 'var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255))',
                              },
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                Up1OBQN7R: {
                                  children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion6.h4, {
                                      style: {
                                        '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                        '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                        '--framer-font-size': '56px',
                                        '--framer-font-weight': '700',
                                        '--framer-letter-spacing': '-2px',
                                        '--framer-line-height': '68px',
                                        '--framer-text-alignment': 'left',
                                        '--framer-text-color':
                                          'var(--extracted-1eung3n, var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255)))',
                                      },
                                      children: '$459',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx6(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                              children: /* @__PURE__ */ _jsx6(motion6.p, {
                                style: {
                                  '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                  '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                  '--framer-font-weight': '500',
                                  '--framer-letter-spacing': '-0.4px',
                                  '--framer-line-height': '22px',
                                },
                                children: '/ per month',
                              },),
                            },),
                            className: 'framer-x0khxy',
                            'data-framer-name': '/month based',
                            fonts: ['GF;DM Sans-500',],
                            layoutDependency,
                            layoutId: 'BE4GLkPGw',
                            variants: {
                              Up1OBQN7R: { '--extracted-r6o4lv': 'var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6))', },
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                Up1OBQN7R: {
                                  children: /* @__PURE__ */ _jsx6(React6.Fragment, {
                                    children: /* @__PURE__ */ _jsx6(motion6.p, {
                                      style: {
                                        '--font-selector': 'R0Y7RE0gU2Fucy01MDA=',
                                        '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                        '--framer-font-weight': '500',
                                        '--framer-letter-spacing': '-0.4px',
                                        '--framer-line-height': '22px',
                                        '--framer-text-color':
                                          'var(--extracted-r6o4lv, var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6)))',
                                      },
                                      children: '/ monthly',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsxs5(motion6.div, {
                        className: 'framer-1ujfjj5',
                        'data-framer-name': 'Features',
                        layoutDependency,
                        layoutId: 'P8PlTbmfG',
                        children: [
                          /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx6(motion6.div, {
                              className: 'framer-vq95pf-container',
                              layoutDependency,
                              layoutId: 'Nwgy2r03o-container',
                              children: /* @__PURE__ */ _jsx6(stdin_default4, {
                                feature: '80k words per month',
                                height: '100%',
                                id: 'Nwgy2r03o',
                                layoutId: 'Nwgy2r03o',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx6(motion6.div, {
                              className: 'framer-92ptdy-container',
                              layoutDependency,
                              layoutId: 'Sxb2juOPA-container',
                              children: /* @__PURE__ */ _jsx6(stdin_default4, {
                                feature: 'All voices',
                                height: '100%',
                                id: 'Sxb2juOPA',
                                layoutId: 'Sxb2juOPA',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsx6(ComponentViewportProvider, {
                        width: '292.6667px',
                        ...addPropertyOverrides4(
                          {
                            cDuu0Jxy4: {
                              width: `max(max(${
                                (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                              } - 40px, 200px) - 40px, 0px)`,
                            },
                            NFkSOKnao: {
                              width: `max(max((${
                                (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                              } - 140px) / 2, 200px) - 64px, 0px)`,
                            },
                            Up1OBQN7R: {
                              width: `max(max(${
                                (componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.width) || '100vw'
                              } - 40px, 200px) - 40px, 0px)`,
                            },
                          },
                          baseVariant,
                          gestureVariant,
                        ),
                        children: /* @__PURE__ */ _jsx6(motion6.div, {
                          className: 'framer-po0m4s-container',
                          layoutDependency,
                          layoutId: 'qEm3Vuq2H-container',
                          children: /* @__PURE__ */ _jsx6(stdin_default, {
                            FOdt_Q22J: 'Get started now',
                            gT8MXhd7P: addImageAlt({ src: 'https://framerusercontent.com/images/Nnev6aW8H97M9K6ID2XPXZqd0.svg', }, '',),
                            height: '100%',
                            HihQ7sLzJ: HihQ7sLzJsqqhvp,
                            id: 'qEm3Vuq2H',
                            JRpxGFjwH: false,
                            layoutId: 'qEm3Vuq2H',
                            style: { width: '100%', },
                            variant: 'nvj6GRWIN',
                            width: '100%',
                            wsxRD5u41: true,
                          },),
                        },),
                      },),
                    ],
                  },),
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css10 = [
  '.framer-KUZU9[data-border="true"]::after, .framer-KUZU9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-KUZU9.framer-177e671, .framer-KUZU9 .framer-177e671 { display: block; }',
  '.framer-KUZU9.framer-1sp6nx8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 29px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1070px; }',
  '.framer-KUZU9 .framer-q0ze1u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 156px; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-KUZU9 .framer-f48st9-container { flex: none; height: auto; position: relative; width: 766px; }',
  '.framer-KUZU9 .framer-1imp2ad { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1070px; }',
  '.framer-KUZU9 .framer-xv9uvu, .framer-KUZU9 .framer-f2qyn5 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 38px 32px 32px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-KUZU9 .framer-xy6qpo, .framer-KUZU9 .framer-1s90vne, .framer-KUZU9 .framer-1tcv7vv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-KUZU9 .framer-16lih03, .framer-KUZU9 .framer-kjtzbd, .framer-KUZU9 .framer-qdn629, .framer-KUZU9 .framer-g9wlad, .framer-KUZU9 .framer-yiwdv2, .framer-KUZU9 .framer-1ujfjj5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-KUZU9 .framer-1fpuc5j, .framer-KUZU9 .framer-jgjr6s, .framer-KUZU9 .framer-5ktdfn, .framer-KUZU9 .framer-zatrq3, .framer-KUZU9 .framer-1r2r1xx, .framer-KUZU9 .framer-1q7p6hj, .framer-KUZU9 .framer-yly0f2, .framer-KUZU9 .framer-1v938it, .framer-KUZU9 .framer-x0khxy { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-KUZU9 .framer-1qrd1x0-container, .framer-KUZU9 .framer-1rk2qug-container, .framer-KUZU9 .framer-a97s52-container, .framer-KUZU9 .framer-136smln-container, .framer-KUZU9 .framer-177dnz7-container, .framer-KUZU9 .framer-102gnd9-container, .framer-KUZU9 .framer-vq95pf-container, .framer-KUZU9 .framer-92ptdy-container, .framer-KUZU9 .framer-po0m4s-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-KUZU9 .framer-12y6qtd { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; justify-self: start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-KUZU9 .framer-1wnf0i5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 38px 32px 32px 32px; position: relative; width: 357px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-KUZU9.framer-1sp6nx8, .framer-KUZU9 .framer-xv9uvu, .framer-KUZU9 .framer-xy6qpo, .framer-KUZU9 .framer-16lih03, .framer-KUZU9 .framer-kjtzbd, .framer-KUZU9 .framer-12y6qtd, .framer-KUZU9 .framer-1wnf0i5, .framer-KUZU9 .framer-1s90vne, .framer-KUZU9 .framer-qdn629, .framer-KUZU9 .framer-g9wlad, .framer-KUZU9 .framer-f2qyn5, .framer-KUZU9 .framer-1tcv7vv, .framer-KUZU9 .framer-yiwdv2, .framer-KUZU9 .framer-1ujfjj5 { gap: 0px; } .framer-KUZU9.framer-1sp6nx8 > * { margin: 0px; margin-bottom: calc(29px / 2); margin-top: calc(29px / 2); } .framer-KUZU9.framer-1sp6nx8 > :first-child, .framer-KUZU9 .framer-xy6qpo > :first-child, .framer-KUZU9 .framer-16lih03 > :first-child, .framer-KUZU9 .framer-kjtzbd > :first-child, .framer-KUZU9 .framer-1s90vne > :first-child, .framer-KUZU9 .framer-qdn629 > :first-child, .framer-KUZU9 .framer-g9wlad > :first-child, .framer-KUZU9 .framer-1tcv7vv > :first-child, .framer-KUZU9 .framer-yiwdv2 > :first-child, .framer-KUZU9 .framer-1ujfjj5 > :first-child { margin-top: 0px; } .framer-KUZU9.framer-1sp6nx8 > :last-child, .framer-KUZU9 .framer-xy6qpo > :last-child, .framer-KUZU9 .framer-16lih03 > :last-child, .framer-KUZU9 .framer-kjtzbd > :last-child, .framer-KUZU9 .framer-1s90vne > :last-child, .framer-KUZU9 .framer-qdn629 > :last-child, .framer-KUZU9 .framer-g9wlad > :last-child, .framer-KUZU9 .framer-1tcv7vv > :last-child, .framer-KUZU9 .framer-yiwdv2 > :last-child, .framer-KUZU9 .framer-1ujfjj5 > :last-child { margin-bottom: 0px; } .framer-KUZU9 .framer-xv9uvu > *, .framer-KUZU9 .framer-12y6qtd > *, .framer-KUZU9 .framer-1wnf0i5 > *, .framer-KUZU9 .framer-f2qyn5 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-KUZU9 .framer-xv9uvu > :first-child, .framer-KUZU9 .framer-12y6qtd > :first-child, .framer-KUZU9 .framer-1wnf0i5 > :first-child, .framer-KUZU9 .framer-f2qyn5 > :first-child { margin-left: 0px; } .framer-KUZU9 .framer-xv9uvu > :last-child, .framer-KUZU9 .framer-12y6qtd > :last-child, .framer-KUZU9 .framer-1wnf0i5 > :last-child, .framer-KUZU9 .framer-f2qyn5 > :last-child { margin-right: 0px; } .framer-KUZU9 .framer-xy6qpo > *, .framer-KUZU9 .framer-1s90vne > *, .framer-KUZU9 .framer-1tcv7vv > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-KUZU9 .framer-16lih03 > *, .framer-KUZU9 .framer-kjtzbd > *, .framer-KUZU9 .framer-qdn629 > *, .framer-KUZU9 .framer-g9wlad > *, .framer-KUZU9 .framer-yiwdv2 > *, .framer-KUZU9 .framer-1ujfjj5 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }',
  '.framer-KUZU9.framer-v-1vc895s.framer-1sp6nx8 { gap: 48px; padding: 0px 60px 0px 60px; width: 690px; }',
  '.framer-KUZU9.framer-v-1vc895s .framer-q0ze1u { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; height: min-content; justify-content: center; order: 0; }',
  '.framer-KUZU9.framer-v-1vc895s .framer-f48st9-container, .framer-KUZU9.framer-v-dovseb .framer-f48st9-container, .framer-KUZU9.framer-v-16jrtdu .framer-f48st9-container { width: 100%; }',
  '.framer-KUZU9.framer-v-1vc895s .framer-1imp2ad { gap: 20px; grid-template-columns: repeat(2, minmax(200px, 1fr)); order: 1; width: 100%; }',
  '.framer-KUZU9.framer-v-1vc895s .framer-1wnf0i5 { flex: 1 0 0px; width: 1px; will-change: var(--framer-will-change-override, transform); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-KUZU9.framer-v-1vc895s.framer-1sp6nx8, .framer-KUZU9.framer-v-1vc895s .framer-q0ze1u, .framer-KUZU9.framer-v-1vc895s .framer-1imp2ad { gap: 0px; } .framer-KUZU9.framer-v-1vc895s.framer-1sp6nx8 > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-KUZU9.framer-v-1vc895s.framer-1sp6nx8 > :first-child, .framer-KUZU9.framer-v-1vc895s .framer-q0ze1u > :first-child { margin-top: 0px; } .framer-KUZU9.framer-v-1vc895s.framer-1sp6nx8 > :last-child, .framer-KUZU9.framer-v-1vc895s .framer-q0ze1u > :last-child { margin-bottom: 0px; } .framer-KUZU9.framer-v-1vc895s .framer-q0ze1u > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-KUZU9.framer-v-1vc895s .framer-1imp2ad > *, .framer-KUZU9.framer-v-1vc895s .framer-1imp2ad > :first-child, .framer-KUZU9.framer-v-1vc895s .framer-1imp2ad > :last-child { margin: 0px; } }',
  '.framer-KUZU9.framer-v-dovseb.framer-1sp6nx8, .framer-KUZU9.framer-v-16jrtdu.framer-1sp6nx8 { gap: 24px; padding: 0px 20px 0px 20px; width: 330px; }',
  '.framer-KUZU9.framer-v-dovseb .framer-q0ze1u, .framer-KUZU9.framer-v-16jrtdu .framer-q0ze1u { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 48px; height: min-content; justify-content: center; order: 0; }',
  '.framer-KUZU9.framer-v-dovseb .framer-1imp2ad, .framer-KUZU9.framer-v-16jrtdu .framer-1imp2ad { gap: 30px; grid-template-columns: repeat(1, minmax(200px, 1fr)); order: 1; width: 100%; }',
  '.framer-KUZU9.framer-v-dovseb .framer-xv9uvu, .framer-KUZU9.framer-v-dovseb .framer-f2qyn5, .framer-KUZU9.framer-v-16jrtdu .framer-xv9uvu, .framer-KUZU9.framer-v-16jrtdu .framer-f2qyn5 { padding: 38px 20px 32px 20px; }',
  '.framer-KUZU9.framer-v-dovseb .framer-1wnf0i5, .framer-KUZU9.framer-v-16jrtdu .framer-1wnf0i5 { flex: 1 0 0px; padding: 38px 20px 32px 20px; width: 1px; will-change: var(--framer-will-change-override, transform); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-KUZU9.framer-v-dovseb.framer-1sp6nx8, .framer-KUZU9.framer-v-dovseb .framer-q0ze1u, .framer-KUZU9.framer-v-dovseb .framer-1imp2ad { gap: 0px; } .framer-KUZU9.framer-v-dovseb.framer-1sp6nx8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-KUZU9.framer-v-dovseb.framer-1sp6nx8 > :first-child, .framer-KUZU9.framer-v-dovseb .framer-q0ze1u > :first-child { margin-top: 0px; } .framer-KUZU9.framer-v-dovseb.framer-1sp6nx8 > :last-child, .framer-KUZU9.framer-v-dovseb .framer-q0ze1u > :last-child { margin-bottom: 0px; } .framer-KUZU9.framer-v-dovseb .framer-q0ze1u > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-KUZU9.framer-v-dovseb .framer-1imp2ad > *, .framer-KUZU9.framer-v-dovseb .framer-1imp2ad > :first-child, .framer-KUZU9.framer-v-dovseb .framer-1imp2ad > :last-child { margin: 0px; } }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-KUZU9.framer-v-16jrtdu.framer-1sp6nx8, .framer-KUZU9.framer-v-16jrtdu .framer-q0ze1u, .framer-KUZU9.framer-v-16jrtdu .framer-1imp2ad { gap: 0px; } .framer-KUZU9.framer-v-16jrtdu.framer-1sp6nx8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-KUZU9.framer-v-16jrtdu.framer-1sp6nx8 > :first-child, .framer-KUZU9.framer-v-16jrtdu .framer-q0ze1u > :first-child { margin-top: 0px; } .framer-KUZU9.framer-v-16jrtdu.framer-1sp6nx8 > :last-child, .framer-KUZU9.framer-v-16jrtdu .framer-q0ze1u > :last-child { margin-bottom: 0px; } .framer-KUZU9.framer-v-16jrtdu .framer-q0ze1u > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-KUZU9.framer-v-16jrtdu .framer-1imp2ad > *, .framer-KUZU9.framer-v-16jrtdu .framer-1imp2ad > :first-child, .framer-KUZU9.framer-v-16jrtdu .framer-1imp2ad > :last-child { margin: 0px; } }',
];
var FramerRtV_BGntD = withCSS5(Component5, css10, 'framer-KUZU9',);
var stdin_default5 = FramerRtV_BGntD;
FramerRtV_BGntD.displayName = 'Pricing Table';
FramerRtV_BGntD.defaultProps = { height: 589, width: 1070, };
addPropertyControls5(FramerRtV_BGntD, {
  variant: {
    options: ['owq8_Br0y', 'NFkSOKnao', 'cDuu0Jxy4', 'Up1OBQN7R',],
    optionTitles: ['Desktop 1', 'Tablet 1', 'Mobile 1', 'Mobile 2',],
    title: 'Variant',
    type: ControlType5.Enum,
  },
  Gt9H5QhVm: { title: 'BuyEvent', type: ControlType5.EventHandler, },
},);
addFonts5(FramerRtV_BGntD, [
  {
    family: 'DM Sans',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2',
    weight: '500',
  },
  {
    family: 'DM Sans',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2',
    weight: '700',
  },
  ...SectionTitleFonts,
  ...PricingFeatureItemFonts,
  ...ButtonFonts,
],);

// virtual:prices
import { WithFramerBreakpoints, } from 'unframer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default5.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default5, ...props, },);
};
var prices_default = stdin_default5;
export { prices_default as default, };
