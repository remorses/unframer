'use client';
import { className, className2, className3, css, css2, css3, fonts, fonts2, fonts3, } from './chunk-SF7ISK24.js';
import './chunk-6C3VEZWH.js';

// https:https://framerusercontent.com/modules/voblns21QvjoNLKdf1Tl/MAdFJXRr0B8qd1VFJisP/eaYqW6xw3.js
import { jsx as _jsx5, jsxs as _jsxs5, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls5,
  ComponentViewportProvider,
  ControlType as ControlType5,
  cx as cx5,
  getFonts as getFonts2,
  RichText as RichText5,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo5,
  useVariantState as useVariantState5,
  withCSS as withCSS5,
} from 'unframer/dist/framer';
import { LayoutGroup as LayoutGroup5, motion as motion5, MotionConfigContext as MotionConfigContext5, } from 'unframer';
import * as React5 from 'react';

// https:https://framerusercontent.com/modules/lag7sUsQW69DzJd7WTvQ/FqKg8FgbkD1HBi1tn2Bb/cRmkgGutV.js
import { fontStore, } from 'unframer/dist/framer';
fontStore.loadWebFontsFromSelectors(['GF;DM Sans-700',],);
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
var css4 = [
  '.framer-OqUSw .framer-styles-preset-19k5lrf:not(.rich-text-wrapper), .framer-OqUSw .framer-styles-preset-19k5lrf.rich-text-wrapper h4 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2px; --framer-line-height: 68px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
  '@media (max-width: 1439px) and (min-width: 810px) { .framer-OqUSw .framer-styles-preset-19k5lrf:not(.rich-text-wrapper), .framer-OqUSw .framer-styles-preset-19k5lrf.rich-text-wrapper h4 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 46px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2px; --framer-line-height: 56px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-OqUSw .framer-styles-preset-19k5lrf:not(.rich-text-wrapper), .framer-OqUSw .framer-styles-preset-19k5lrf.rich-text-wrapper h4 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2px; --framer-line-height: 48px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
];
var className4 = 'framer-OqUSw';

// https:https://framerusercontent.com/modules/naa0ugoTqrGMOULkYjia/aWdZ67n3P4gE06sKrUnR/cwMgH3g_H.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  Image,
  RichText,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer/dist/framer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['TrJsulOOg', 'y5k4iwWcs',];
var variantClassNames = { TrJsulOOg: 'framer-v-1jux976', y5k4iwWcs: 'framer-v-1y53r9x', };
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
var humanReadableVariantMap = { 'with Border': 'TrJsulOOg', 'without Border': 'y5k4iwWcs', };
var getProps = ({ feature, height, id, image, width, ...props },) => {
  var ref, _variant, ref1, ref2;
  return {
    ...props,
    Pb0KMdHqc: (ref = feature !== null && feature !== void 0 ? feature : props.Pb0KMdHqc) !== null && ref !== void 0
      ? ref
      : 'Phone & Priorty Support ',
    variant:
      (ref1 = (_variant = humanReadableVariantMap[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
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
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className: className6, layoutId, variant, Pb0KMdHqc, WEOMLUXiC, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'TrJsulOOg',
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const defaultLayoutId = React.useId();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(motion.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx('framer-TUl5A', className3, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsxs(motion.div, {
          ...restProps,
          className: cx('framer-1jux976', className6,),
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
          ...addPropertyOverrides({ y5k4iwWcs: { 'data-framer-name': 'without Border', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsx(Image, {
              background: {
                alt: '',
                fit: 'fill',
                intrinsicHeight: 20,
                intrinsicWidth: 20,
                pixelHeight: 20,
                pixelWidth: 20,
                sizes: '20px',
                ...toResponsiveImage(WEOMLUXiC,),
              },
              className: 'framer-1klhtdr',
              'data-framer-name': 'input_search',
              layoutDependency,
              layoutId: 'gNJpH_mhg',
            },),
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
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
var css5 = [
  '.framer-TUl5A [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-TUl5A .framer-gbjkul { display: block; }',
  '.framer-TUl5A .framer-1jux976 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 0px 12px 0px; position: relative; width: 293px; }',
  '.framer-TUl5A .framer-1klhtdr { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }',
  '.framer-TUl5A .framer-911ud3 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-TUl5A .framer-1jux976 { gap: 0px; } .framer-TUl5A .framer-1jux976 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-TUl5A .framer-1jux976 > :first-child { margin-left: 0px; } .framer-TUl5A .framer-1jux976 > :last-child { margin-right: 0px; } }',
  ...css3,
];
var FramercwMgH3g_H = withCSS(Component, css5, 'framer-TUl5A',);
var stdin_default = FramercwMgH3g_H;
FramercwMgH3g_H.displayName = 'Pricing Feature Item';
FramercwMgH3g_H.defaultProps = { height: 50, width: 293, };
addPropertyControls(FramercwMgH3g_H, {
  variant: {
    options: ['TrJsulOOg', 'y5k4iwWcs',],
    optionTitles: ['with Border', 'without Border',],
    title: 'Variant',
    type: ControlType.Enum,
  },
  Pb0KMdHqc: { defaultValue: 'Phone & Priorty Support ', displayTextArea: false, title: 'Feature', type: ControlType.String, },
  WEOMLUXiC: {
    __defaultAssetReference: 'data:framer/asset-reference,RDKpVNqV8WkmRY9WzAzpnJVkkI.svg?originalFilename=check.svg&preferredSize=auto',
    title: 'Image',
    type: ControlType.ResponsiveImage,
  },
},);
addFonts(FramercwMgH3g_H, [...fonts3,],);

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
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React3 from 'react';

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
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
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
      className: cx2('framer-8PUKw', className2, classNames,),
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
  ...css2,
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
addFonts2(FramerN3BIRIlrO, [...fonts2,],);

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
      className: cx3('framer-fSX7h', className4, className, classNames,),
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
  ...css4,
  ...css,
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
addFonts3(FramerimqCP4fEz, [...TagFonts, ...fonts4, ...fonts,],);

// https:https://framerusercontent.com/modules/1gobdaiETEZYApPHkFW8/RAQ43YyjZfCUTli605Pd/j1CXYH1vu.js
import { jsx as _jsx4, jsxs as _jsxs4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls4,
  ControlType as ControlType4,
  cx as cx4,
  Image as Image3,
  Link,
  RichText as RichText4,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState4,
  withCSS as withCSS4,
} from 'unframer/dist/framer';
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4, } from 'unframer';
import * as React4 from 'react';

// https:https://framerusercontent.com/modules/irtADPc9MsWpaOZ5xWct/Cqtyndb7HgebXowgH7mP/tr0U97vbW.js
import { fontStore as fontStore2, } from 'unframer/dist/framer';
fontStore2.loadWebFontsFromSelectors(['GF;DM Sans-500',],);
var fonts5 = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/tr0U97vbW:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrOB-sClQX6Cg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriAWCrOB-sClQX6Cg.ttf',
  weight: '500',
},];
var css8 = [
  '.framer-lY2DH .framer-styles-preset-1ege25p:not(.rich-text-wrapper), .framer-lY2DH .framer-styles-preset-1ege25p.rich-text-wrapper p { --framer-font-family: "DM Sans", sans-serif; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-weight: 500; --framer-letter-spacing: -0.2px; --framer-line-height: 26px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: #ffffff; --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className5 = 'framer-lY2DH';

// https:https://framerusercontent.com/modules/1gobdaiETEZYApPHkFW8/RAQ43YyjZfCUTli605Pd/j1CXYH1vu.js
var enabledGestures = { BM6EYWPbP: { hover: true, }, MHKwcgpiE: { hover: true, }, nvj6GRWIN: { hover: true, }, };
var cycleOrder4 = ['nvj6GRWIN', 'BM6EYWPbP', 'MHKwcgpiE',];
var serializationHash = 'framer-CxqYs';
var variantClassNames4 = { BM6EYWPbP: 'framer-v-1vkpx8j', MHKwcgpiE: 'framer-v-1fbf01a', nvj6GRWIN: 'framer-v-1skui0i', };
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
var Variants = motion4(React4.Fragment,);
var humanReadableVariantMap3 = { 'Primary Smaller': 'MHKwcgpiE', Primary: 'nvj6GRWIN', Secondary: 'BM6EYWPbP', };
var getProps4 = ({ height, id, leftIcon, link, rightIcon, showLeftIcon, showRightIcon, tap, title, width, ...props },) => {
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
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null &&
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
var createLayoutDependency4 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component4 = /* @__PURE__ */ React4.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo4();
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
  } = getProps4(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState4({
    cycleOrder: cycleOrder4,
    defaultVariant: 'nvj6GRWIN',
    enabledGestures,
    transitions: transitions4,
    variant,
    variantClassNames: variantClassNames4,
  },);
  const layoutDependency = createLayoutDependency4(props, variants,);
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
  const ref1 = React4.useRef(null,);
  const defaultLayoutId = React4.useId();
  const sharedStyleClassNames = [className5, className2,];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx4(LayoutGroup4, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx4(Transition4, {
        value: transition,
        children: /* @__PURE__ */ _jsx4(Link, {
          href: Xf0re2Pc_,
          openInNewTab: false,
          smoothScroll: true,
          children: /* @__PURE__ */ _jsx4(motion4.a, {
            ...restProps,
            className: `${cx4(serializationHash, ...sharedStyleClassNames, 'framer-1skui0i', className6, classNames,)} framer-1oe6d9m`,
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
            ...addPropertyOverrides3(
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
            children: /* @__PURE__ */ _jsxs4(motion4.div, {
              className: 'framer-1n0h1yt',
              'data-framer-name': 'Button Content',
              layoutDependency,
              layoutId: 'I1:843;54:6377',
              style: { borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, },
              children: [
                JRpxGFjwH && /* @__PURE__ */
                _jsx4(Image3, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 9,
                    intrinsicWidth: 9,
                    pixelHeight: 18,
                    pixelWidth: 18,
                    sizes: '18px',
                    ...toResponsiveImage4(gT8MXhd7P,),
                  },
                  className: 'framer-12eesxg',
                  'data-framer-name': 'Left Icon',
                  layoutDependency,
                  layoutId: 'k5dhxG_In',
                },),
                /* @__PURE__ */ _jsx4(RichText4, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                    children: /* @__PURE__ */ _jsx4(motion4.p, {
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
                  ...addPropertyOverrides3(
                    {
                      BM6EYWPbP: {
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion4.p, {
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
                        children: /* @__PURE__ */ _jsx4(React4.Fragment, {
                          children: /* @__PURE__ */ _jsx4(motion4.p, {
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
                wsxRD5u41 && /* @__PURE__ */ _jsx4(Image3, {
                  background: {
                    alt: '',
                    fit: 'fill',
                    intrinsicHeight: 9,
                    intrinsicWidth: 9,
                    pixelHeight: 18,
                    pixelWidth: 18,
                    sizes: '18px',
                    ...toResponsiveImage4(BQ8KjTU41,),
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
                  ...addPropertyOverrides3(
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
                          ...toResponsiveImage4(BQ8KjTU41,),
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
var css9 = [
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
  ...css8,
  ...css2,
];
var Framerj1CXYH1vu = withCSS4(Component4, css9, 'framer-CxqYs',);
var stdin_default4 = Framerj1CXYH1vu;
Framerj1CXYH1vu.displayName = 'Button';
Framerj1CXYH1vu.defaultProps = { height: 58, width: 209, };
addPropertyControls4(Framerj1CXYH1vu, {
  variant: {
    options: ['nvj6GRWIN', 'BM6EYWPbP', 'MHKwcgpiE',],
    optionTitles: ['Primary', 'Secondary', 'Primary Smaller',],
    title: 'Variant',
    type: ControlType4.Enum,
  },
  FOdt_Q22J: { defaultValue: 'Get started now', displayTextArea: false, title: 'Title', type: ControlType4.String, },
  BQ8KjTU41: {
    __defaultAssetReference:
      'data:framer/asset-reference,QDgxMHJz2vKvFSMvhZpA6xplIBM.svg?originalFilename=nav-arrow-right.svg&preferredSize=auto',
    title: 'Right Icon',
    type: ControlType4.ResponsiveImage,
  },
  gT8MXhd7P: {
    __defaultAssetReference:
      'data:framer/asset-reference,QDgxMHJz2vKvFSMvhZpA6xplIBM.svg?originalFilename=nav-arrow-right.svg&preferredSize=auto',
    title: 'Left Icon',
    type: ControlType4.ResponsiveImage,
  },
  JRpxGFjwH: { defaultValue: false, title: 'Show Left Icon', type: ControlType4.Boolean, },
  wsxRD5u41: { defaultValue: true, title: 'Show Right Icon', type: ControlType4.Boolean, },
  Xf0re2Pc_: { title: 'Link', type: ControlType4.Link, },
  HihQ7sLzJ: { title: 'Tap', type: ControlType4.EventHandler, },
},);
addFonts4(Framerj1CXYH1vu, [...fonts5, ...fonts2,],);

// https:https://framerusercontent.com/modules/voblns21QvjoNLKdf1Tl/MAdFJXRr0B8qd1VFJisP/eaYqW6xw3.js
var SectionTitleFonts = getFonts2(stdin_default3,);
var PricingFeatureItemFonts = getFonts2(stdin_default,);
var ButtonFonts = getFonts2(stdin_default4,);
var cycleOrder5 = ['zh6iZCw8V', 'u5_tNBeHP', 'pSo3PWwjp', 'J3GQSL2SF',];
var serializationHash2 = 'framer-GFuVw';
var variantClassNames5 = {
  J3GQSL2SF: 'framer-v-db1puy',
  pSo3PWwjp: 'framer-v-udog3d',
  u5_tNBeHP: 'framer-v-9kj5bm',
  zh6iZCw8V: 'framer-v-1xab13y',
};
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions5 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var addImageAlt = (image, alt,) => {
  if (!image || typeof image !== 'object') {
    return;
  }
  return { ...image, alt, };
};
var Transition5 = ({ value, children, },) => {
  const config = React5.useContext(MotionConfigContext5,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx5(MotionConfigContext5.Provider, { value: contextValue, children, },);
};
var Variants2 = motion5(React5.Fragment,);
var humanReadableVariantMap4 = { 'Desktop 1': 'zh6iZCw8V', 'Mobile 1': 'pSo3PWwjp', 'Mobile 2': 'J3GQSL2SF', 'Tablet 1': 'u5_tNBeHP', };
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
        : 'zh6iZCw8V',
  };
};
var createLayoutDependency5 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component5 = /* @__PURE__ */ React5.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo5();
  const { style, className: className6, layoutId, variant, Gt9H5QhVm, ...restProps } = getProps5(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: 'zh6iZCw8V',
    transitions: transitions5,
    variant,
    variantClassNames: variantClassNames5,
  },);
  const layoutDependency = createLayoutDependency5(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const tapsqqhvp = activeVariantCallback(async (...args) => {
    if (Gt9H5QhVm) {
      const res = await Gt9H5QhVm(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React5.useRef(null,);
  const defaultLayoutId = React5.useId();
  const sharedStyleClassNames = [className2, className4,];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx5(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx5(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx5(Transition5, {
        value: transition,
        children: /* @__PURE__ */ _jsxs5(motion5.div, {
          ...restProps,
          className: cx5(serializationHash2, ...sharedStyleClassNames, 'framer-1xab13y', className6, classNames,),
          'data-framer-name': 'Desktop 1',
          layoutDependency,
          layoutId: 'zh6iZCw8V',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides4(
            {
              J3GQSL2SF: { 'data-framer-name': 'Mobile 2', },
              pSo3PWwjp: { 'data-framer-name': 'Mobile 1', },
              u5_tNBeHP: { 'data-framer-name': 'Tablet 1', },
            },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx5(motion5.div, {
              className: 'framer-2c0smr',
              'data-framer-name': 'Title',
              layoutDependency,
              layoutId: 'Dh0JiFKyL',
              children: /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                children: /* @__PURE__ */ _jsx5(motion5.div, {
                  className: 'framer-1i5t3df-container',
                  layoutDependency,
                  layoutId: 'nwWkRQ5Qg-container',
                  children: /* @__PURE__ */ _jsx5(stdin_default3, {
                    description: 'Pricing that scale with your usage',
                    height: '100%',
                    id: 'nwWkRQ5Qg',
                    layoutId: 'nwWkRQ5Qg',
                    showBullet: false,
                    showDescription: true,
                    showTitle: true,
                    style: { width: '100%', },
                    tagText: '',
                    title: 'Pricing',
                    variant: 'fMLzDPiVJ',
                    width: '100%',
                  },),
                },),
              },),
            },),
            /* @__PURE__ */ _jsxs5(motion5.div, {
              className: 'framer-y11zbv',
              'data-framer-name': 'Pricing Table',
              layoutDependency,
              layoutId: 'DeR3viv7T',
              style: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24, },
              children: [
                /* @__PURE__ */ _jsx5(motion5.div, {
                  className: 'framer-190qkqs',
                  'data-border': true,
                  'data-framer-name': 'Left',
                  layoutDependency,
                  layoutId: 'eePdrJGQB',
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
                    J3GQSL2SF: { '--border-right-width': '1px', borderBottomRightRadius: 24, borderTopRightRadius: 24, },
                    pSo3PWwjp: { '--border-right-width': '1px', borderBottomRightRadius: 24, borderTopRightRadius: 24, },
                    u5_tNBeHP: { '--border-right-width': '1px', borderBottomRightRadius: 24, borderTopRightRadius: 24, },
                  },
                  children: /* @__PURE__ */ _jsxs5(motion5.div, {
                    className: 'framer-1tv94z2',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'nWqO9Rsiu',
                    children: [
                      /* @__PURE__ */ _jsxs5(motion5.div, {
                        className: 'framer-19fdawl',
                        'data-framer-name': 'Prize',
                        layoutDependency,
                        layoutId: 'G8UqfWzAF',
                        children: [
                          /* @__PURE__ */ _jsx5(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion5.p, {
                                className: 'framer-styles-preset-tdptso',
                                'data-styles-preset': 'Q4kC2bTJ2',
                                children: 'Starts at',
                              },),
                            },),
                            className: 'framer-1fa216d',
                            'data-framer-name': 'Starts at',
                            layoutDependency,
                            layoutId: 'syZdcFOqi',
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                          /* @__PURE__ */ _jsx5(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion5.h4, {
                                className: 'framer-styles-preset-19k5lrf',
                                'data-styles-preset': 'cRmkgGutV',
                                style: {
                                  '--framer-text-alignment': 'left',
                                  '--framer-text-color': 'var(--extracted-1eung3n, rgb(0, 0, 0))',
                                },
                                children: '$14',
                              },),
                            },),
                            className: 'framer-yge2h0',
                            'data-framer-name': '$50',
                            layoutDependency,
                            layoutId: 'VtggDYFWW',
                            style: { '--extracted-1eung3n': 'rgb(0, 0, 0)', },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                J3GQSL2SF: {
                                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                    children: /* @__PURE__ */ _jsx5(motion5.h4, {
                                      className: 'framer-styles-preset-19k5lrf',
                                      'data-styles-preset': 'cRmkgGutV',
                                      style: { '--framer-text-alignment': 'left', },
                                      children: '$69',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx5(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion5.p, {
                                className: 'framer-styles-preset-tdptso',
                                'data-styles-preset': 'Q4kC2bTJ2',
                                style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 0, 0))', },
                                children: '/ per month',
                              },),
                            },),
                            className: 'framer-k1u79n',
                            'data-framer-name': '/month based',
                            layoutDependency,
                            layoutId: 'fyCMuQi9Z',
                            style: { '--extracted-r6o4lv': 'rgb(0, 0, 0)', },
                            variants: {
                              J3GQSL2SF: { '--extracted-r6o4lv': 'var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6))', },
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                J3GQSL2SF: {
                                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                    children: /* @__PURE__ */ _jsx5(motion5.p, {
                                      className: 'framer-styles-preset-tdptso',
                                      'data-styles-preset': 'Q4kC2bTJ2',
                                      style: {
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
                      /* @__PURE__ */ _jsxs5(motion5.div, {
                        className: 'framer-pkku0s',
                        'data-framer-name': 'Features',
                        layoutDependency,
                        layoutId: 't6V6F5Yl4',
                        children: [
                          /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx5(motion5.div, {
                              className: 'framer-xsnt2w-container',
                              layoutDependency,
                              layoutId: 'ghgVq3mLl-container',
                              children: /* @__PURE__ */ _jsx5(stdin_default, {
                                feature: '8k words per month',
                                height: '100%',
                                id: 'ghgVq3mLl',
                                layoutId: 'ghgVq3mLl',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx5(motion5.div, {
                              className: 'framer-nozi2m-container',
                              layoutDependency,
                              layoutId: 'D9PJr1yaj-container',
                              children: /* @__PURE__ */ _jsx5(stdin_default, {
                                feature: 'All voices',
                                height: '100%',
                                id: 'D9PJr1yaj',
                                layoutId: 'D9PJr1yaj',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                        children: /* @__PURE__ */ _jsx5(motion5.div, {
                          className: 'framer-xdyuwh-container',
                          layoutDependency,
                          layoutId: 'OsRPfjkAk-container',
                          children: /* @__PURE__ */ _jsx5(stdin_default4, {
                            height: '100%',
                            id: 'OsRPfjkAk',
                            layoutId: 'OsRPfjkAk',
                            leftIcon: addImageAlt({ src: 'https://framerusercontent.com/images/Nnev6aW8H97M9K6ID2XPXZqd0.svg', }, '',),
                            showLeftIcon: false,
                            showRightIcon: true,
                            style: { width: '100%', },
                            tap: tapsqqhvp,
                            title: 'Get started now',
                            variant: 'nvj6GRWIN',
                            width: '100%',
                          },),
                        },),
                      },),
                    ],
                  },),
                },),
                /* @__PURE__ */ _jsx5(motion5.div, {
                  className: 'framer-1inonl3',
                  'data-border': true,
                  'data-framer-name': 'Center Collapse',
                  layoutDependency,
                  layoutId: 'EOBBtZ53M',
                  style: {
                    '--border-bottom-width': '0px',
                    '--border-color': 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(255, 79, 0)) /* {"name":"Orange"} */',
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
                    J3GQSL2SF: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                    pSo3PWwjp: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                    u5_tNBeHP: {
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                    },
                  },
                  children: /* @__PURE__ */ _jsx5(motion5.div, {
                    className: 'framer-ft3r2s',
                    'data-border': true,
                    'data-framer-name': 'Center',
                    layoutDependency,
                    layoutId: 'rsvwIlV8T',
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
                      J3GQSL2SF: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      pSo3PWwjp: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                      u5_tNBeHP: {
                        borderBottomLeftRadius: 24,
                        borderBottomRightRadius: 24,
                        borderTopLeftRadius: 24,
                        borderTopRightRadius: 24,
                      },
                    },
                    children: /* @__PURE__ */ _jsxs5(motion5.div, {
                      className: 'framer-1x0bjb4',
                      'data-framer-name': 'Content',
                      layoutDependency,
                      layoutId: 'dsoS9i9lu',
                      children: [
                        /* @__PURE__ */ _jsxs5(motion5.div, {
                          className: 'framer-1109iv9',
                          'data-framer-name': 'Price',
                          layoutDependency,
                          layoutId: 'yv8kams0N',
                          children: [
                            /* @__PURE__ */ _jsx5(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                children: /* @__PURE__ */ _jsx5(motion5.p, {
                                  className: 'framer-styles-preset-tdptso',
                                  'data-styles-preset': 'Q4kC2bTJ2',
                                  children: 'Starts at',
                                },),
                              },),
                              className: 'framer-jcrk32',
                              'data-framer-name': 'Starts at',
                              layoutDependency,
                              layoutId: 'Pmmfr2Glt',
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsx5(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                children: /* @__PURE__ */ _jsx5(motion5.h4, {
                                  className: 'framer-styles-preset-19k5lrf',
                                  'data-styles-preset': 'cRmkgGutV',
                                  style: {
                                    '--framer-text-alignment': 'left',
                                    '--framer-text-color': 'var(--extracted-1eung3n, rgb(0, 0, 0))',
                                  },
                                  children: '$29',
                                },),
                              },),
                              className: 'framer-174j8zu',
                              'data-framer-name': '$50',
                              layoutDependency,
                              layoutId: 'Y3YlZwOoR',
                              style: { '--extracted-1eung3n': 'rgb(0, 0, 0)', },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                              ...addPropertyOverrides4(
                                {
                                  J3GQSL2SF: {
                                    children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                      children: /* @__PURE__ */ _jsx5(motion5.h4, {
                                        className: 'framer-styles-preset-19k5lrf',
                                        'data-styles-preset': 'cRmkgGutV',
                                        style: { '--framer-text-alignment': 'left', },
                                        children: '$189',
                                      },),
                                    },),
                                  },
                                },
                                baseVariant,
                                gestureVariant,
                              ),
                            },),
                            /* @__PURE__ */ _jsx5(RichText5, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                children: /* @__PURE__ */ _jsx5(motion5.p, {
                                  className: 'framer-styles-preset-tdptso',
                                  'data-styles-preset': 'Q4kC2bTJ2',
                                  style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 0, 0))', },
                                  children: '/ per month',
                                },),
                              },),
                              className: 'framer-19jhep2',
                              'data-framer-name': '/month based',
                              layoutDependency,
                              layoutId: 'LFS53OdUt',
                              style: { '--extracted-r6o4lv': 'rgb(0, 0, 0)', },
                              variants: {
                                J3GQSL2SF: {
                                  '--extracted-r6o4lv': 'var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6))',
                                },
                              },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                              ...addPropertyOverrides4(
                                {
                                  J3GQSL2SF: {
                                    children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                      children: /* @__PURE__ */ _jsx5(motion5.p, {
                                        className: 'framer-styles-preset-tdptso',
                                        'data-styles-preset': 'Q4kC2bTJ2',
                                        style: {
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
                        /* @__PURE__ */ _jsxs5(motion5.div, {
                          className: 'framer-1o6kqj',
                          'data-framer-name': 'Features',
                          layoutDependency,
                          layoutId: 'AlT70_4yU',
                          children: [
                            /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx5(motion5.div, {
                                className: 'framer-4wnof-container',
                                layoutDependency,
                                layoutId: 'pUjliKXuL-container',
                                children: /* @__PURE__ */ _jsx5(stdin_default, {
                                  feature: '16k words per month',
                                  height: '100%',
                                  id: 'pUjliKXuL',
                                  layoutId: 'pUjliKXuL',
                                  style: { width: '100%', },
                                  variant: 'TrJsulOOg',
                                  width: '100%',
                                },),
                              },),
                            },),
                            /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                              children: /* @__PURE__ */ _jsx5(motion5.div, {
                                className: 'framer-ul956n-container',
                                layoutDependency,
                                layoutId: 'Nl_sZRFGi-container',
                                children: /* @__PURE__ */ _jsx5(stdin_default, {
                                  feature: 'All voices',
                                  height: '100%',
                                  id: 'Nl_sZRFGi',
                                  layoutId: 'Nl_sZRFGi',
                                  style: { width: '100%', },
                                  variant: 'TrJsulOOg',
                                  width: '100%',
                                },),
                              },),
                            },),
                          ],
                        },),
                        /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx5(motion5.div, {
                            className: 'framer-1cyxqky-container',
                            layoutDependency,
                            layoutId: 'sYq3K5b22-container',
                            children: /* @__PURE__ */ _jsx5(stdin_default4, {
                              height: '100%',
                              id: 'sYq3K5b22',
                              layoutId: 'sYq3K5b22',
                              leftIcon: addImageAlt({ src: 'https://framerusercontent.com/images/Nnev6aW8H97M9K6ID2XPXZqd0.svg', }, '',),
                              showLeftIcon: false,
                              showRightIcon: true,
                              style: { width: '100%', },
                              tap: tapsqqhvp,
                              title: 'Get started now',
                              variant: 'nvj6GRWIN',
                              width: '100%',
                            },),
                          },),
                        },),
                      ],
                    },),
                  },),
                },),
                /* @__PURE__ */ _jsx5(motion5.div, {
                  className: 'framer-x1sm26',
                  'data-border': true,
                  'data-framer-name': 'Right',
                  layoutDependency,
                  layoutId: 'l7aKQ8E0F',
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
                    J3GQSL2SF: { '--border-left-width': '1px', borderBottomLeftRadius: 24, borderTopLeftRadius: 24, },
                    pSo3PWwjp: { '--border-left-width': '1px', borderBottomLeftRadius: 24, borderTopLeftRadius: 24, },
                    u5_tNBeHP: { '--border-left-width': '1px', borderBottomLeftRadius: 24, borderTopLeftRadius: 24, },
                  },
                  children: /* @__PURE__ */ _jsxs5(motion5.div, {
                    className: 'framer-1ej1rfd',
                    'data-framer-name': 'Content',
                    layoutDependency,
                    layoutId: 'VX0AzWp5e',
                    children: [
                      /* @__PURE__ */ _jsxs5(motion5.div, {
                        className: 'framer-np55wk',
                        'data-framer-name': 'Price',
                        layoutDependency,
                        layoutId: 'ygZz8gAKg',
                        children: [
                          /* @__PURE__ */ _jsx5(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion5.p, {
                                className: 'framer-styles-preset-tdptso',
                                'data-styles-preset': 'Q4kC2bTJ2',
                                children: 'Starts at',
                              },),
                            },),
                            className: 'framer-12v292v',
                            'data-framer-name': 'Starts at',
                            layoutDependency,
                            layoutId: 'URm_Yq9CV',
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                          },),
                          /* @__PURE__ */ _jsx5(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion5.h4, {
                                className: 'framer-styles-preset-19k5lrf',
                                'data-styles-preset': 'cRmkgGutV',
                                style: {
                                  '--framer-text-alignment': 'left',
                                  '--framer-text-color': 'var(--extracted-1eung3n, rgb(0, 0, 0))',
                                },
                                children: '$99',
                              },),
                            },),
                            className: 'framer-1j7jwbw',
                            'data-framer-name': '$50',
                            layoutDependency,
                            layoutId: 'NWsvFc2Qo',
                            style: { '--extracted-1eung3n': 'rgb(0, 0, 0)', },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                J3GQSL2SF: {
                                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                    children: /* @__PURE__ */ _jsx5(motion5.h4, {
                                      className: 'framer-styles-preset-19k5lrf',
                                      'data-styles-preset': 'cRmkgGutV',
                                      style: { '--framer-text-alignment': 'left', },
                                      children: '$459',
                                    },),
                                  },),
                                },
                              },
                              baseVariant,
                              gestureVariant,
                            ),
                          },),
                          /* @__PURE__ */ _jsx5(RichText5, {
                            __fromCanvasComponent: true,
                            children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                              children: /* @__PURE__ */ _jsx5(motion5.p, {
                                className: 'framer-styles-preset-tdptso',
                                'data-styles-preset': 'Q4kC2bTJ2',
                                style: { '--framer-text-color': 'var(--extracted-r6o4lv, rgb(0, 0, 0))', },
                                children: '/ per month',
                              },),
                            },),
                            className: 'framer-1v2z9t5',
                            'data-framer-name': '/month based',
                            layoutDependency,
                            layoutId: 'xtSDZL5cG',
                            style: { '--extracted-r6o4lv': 'rgb(0, 0, 0)', },
                            variants: {
                              J3GQSL2SF: { '--extracted-r6o4lv': 'var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6))', },
                            },
                            verticalAlignment: 'top',
                            withExternalLayout: true,
                            ...addPropertyOverrides4(
                              {
                                J3GQSL2SF: {
                                  children: /* @__PURE__ */ _jsx5(React5.Fragment, {
                                    children: /* @__PURE__ */ _jsx5(motion5.p, {
                                      className: 'framer-styles-preset-tdptso',
                                      'data-styles-preset': 'Q4kC2bTJ2',
                                      style: {
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
                      /* @__PURE__ */ _jsxs5(motion5.div, {
                        className: 'framer-1cxhcoc',
                        'data-framer-name': 'Features',
                        layoutDependency,
                        layoutId: 'asLmseSO3',
                        children: [
                          /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx5(motion5.div, {
                              className: 'framer-mv6pzv-container',
                              layoutDependency,
                              layoutId: 'bWG2ENf8F-container',
                              children: /* @__PURE__ */ _jsx5(stdin_default, {
                                feature: '80k words per month',
                                height: '100%',
                                id: 'bWG2ENf8F',
                                layoutId: 'bWG2ENf8F',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                          /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                            children: /* @__PURE__ */ _jsx5(motion5.div, {
                              className: 'framer-bpj59o-container',
                              layoutDependency,
                              layoutId: 'wS8rjga6W-container',
                              children: /* @__PURE__ */ _jsx5(stdin_default, {
                                feature: 'All voices',
                                height: '100%',
                                id: 'wS8rjga6W',
                                layoutId: 'wS8rjga6W',
                                style: { width: '100%', },
                                variant: 'TrJsulOOg',
                                width: '100%',
                              },),
                            },),
                          },),
                        ],
                      },),
                      /* @__PURE__ */ _jsx5(ComponentViewportProvider, {
                        children: /* @__PURE__ */ _jsx5(motion5.div, {
                          className: 'framer-1lkfgos-container',
                          layoutDependency,
                          layoutId: 'v6QgE4ZR_-container',
                          children: /* @__PURE__ */ _jsx5(stdin_default4, {
                            height: '100%',
                            id: 'v6QgE4ZR_',
                            layoutId: 'v6QgE4ZR_',
                            leftIcon: addImageAlt({ src: 'https://framerusercontent.com/images/Nnev6aW8H97M9K6ID2XPXZqd0.svg', }, '',),
                            showLeftIcon: false,
                            showRightIcon: true,
                            style: { width: '100%', },
                            tap: tapsqqhvp,
                            title: 'Get started now',
                            variant: 'nvj6GRWIN',
                            width: '100%',
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
  '.framer-GFuVw[data-border="true"]::after, .framer-GFuVw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-GFuVw.framer-7qo2u1, .framer-GFuVw .framer-7qo2u1 { display: block; }',
  '.framer-GFuVw.framer-1xab13y { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 29px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1070px; }',
  '.framer-GFuVw .framer-2c0smr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 156px; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-GFuVw .framer-1i5t3df-container { flex: none; height: auto; position: relative; width: 766px; }',
  '.framer-GFuVw .framer-y11zbv { display: grid; flex: none; gap: 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(200px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1070px; }',
  '.framer-GFuVw .framer-190qkqs, .framer-GFuVw .framer-x1sm26 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 38px 32px 32px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }',
  '.framer-GFuVw .framer-1tv94z2, .framer-GFuVw .framer-1x0bjb4, .framer-GFuVw .framer-1ej1rfd { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-GFuVw .framer-19fdawl, .framer-GFuVw .framer-pkku0s, .framer-GFuVw .framer-1109iv9, .framer-GFuVw .framer-1o6kqj, .framer-GFuVw .framer-np55wk, .framer-GFuVw .framer-1cxhcoc { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-GFuVw .framer-1fa216d, .framer-GFuVw .framer-yge2h0, .framer-GFuVw .framer-k1u79n, .framer-GFuVw .framer-jcrk32, .framer-GFuVw .framer-174j8zu, .framer-GFuVw .framer-19jhep2, .framer-GFuVw .framer-12v292v, .framer-GFuVw .framer-1j7jwbw, .framer-GFuVw .framer-1v2z9t5 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-GFuVw .framer-xsnt2w-container, .framer-GFuVw .framer-nozi2m-container, .framer-GFuVw .framer-xdyuwh-container, .framer-GFuVw .framer-4wnof-container, .framer-GFuVw .framer-ul956n-container, .framer-GFuVw .framer-1cyxqky-container, .framer-GFuVw .framer-mv6pzv-container, .framer-GFuVw .framer-bpj59o-container, .framer-GFuVw .framer-1lkfgos-container { flex: none; height: auto; position: relative; width: 100%; }',
  '.framer-GFuVw .framer-1inonl3 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; justify-self: start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-GFuVw .framer-ft3r2s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 38px 32px 32px 32px; position: relative; width: 357px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GFuVw.framer-1xab13y, .framer-GFuVw .framer-190qkqs, .framer-GFuVw .framer-1tv94z2, .framer-GFuVw .framer-19fdawl, .framer-GFuVw .framer-pkku0s, .framer-GFuVw .framer-1inonl3, .framer-GFuVw .framer-ft3r2s, .framer-GFuVw .framer-1x0bjb4, .framer-GFuVw .framer-1109iv9, .framer-GFuVw .framer-1o6kqj, .framer-GFuVw .framer-x1sm26, .framer-GFuVw .framer-1ej1rfd, .framer-GFuVw .framer-np55wk, .framer-GFuVw .framer-1cxhcoc { gap: 0px; } .framer-GFuVw.framer-1xab13y > * { margin: 0px; margin-bottom: calc(29px / 2); margin-top: calc(29px / 2); } .framer-GFuVw.framer-1xab13y > :first-child, .framer-GFuVw .framer-1tv94z2 > :first-child, .framer-GFuVw .framer-19fdawl > :first-child, .framer-GFuVw .framer-pkku0s > :first-child, .framer-GFuVw .framer-1x0bjb4 > :first-child, .framer-GFuVw .framer-1109iv9 > :first-child, .framer-GFuVw .framer-1o6kqj > :first-child, .framer-GFuVw .framer-1ej1rfd > :first-child, .framer-GFuVw .framer-np55wk > :first-child, .framer-GFuVw .framer-1cxhcoc > :first-child { margin-top: 0px; } .framer-GFuVw.framer-1xab13y > :last-child, .framer-GFuVw .framer-1tv94z2 > :last-child, .framer-GFuVw .framer-19fdawl > :last-child, .framer-GFuVw .framer-pkku0s > :last-child, .framer-GFuVw .framer-1x0bjb4 > :last-child, .framer-GFuVw .framer-1109iv9 > :last-child, .framer-GFuVw .framer-1o6kqj > :last-child, .framer-GFuVw .framer-1ej1rfd > :last-child, .framer-GFuVw .framer-np55wk > :last-child, .framer-GFuVw .framer-1cxhcoc > :last-child { margin-bottom: 0px; } .framer-GFuVw .framer-190qkqs > *, .framer-GFuVw .framer-1inonl3 > *, .framer-GFuVw .framer-ft3r2s > *, .framer-GFuVw .framer-x1sm26 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-GFuVw .framer-190qkqs > :first-child, .framer-GFuVw .framer-1inonl3 > :first-child, .framer-GFuVw .framer-ft3r2s > :first-child, .framer-GFuVw .framer-x1sm26 > :first-child { margin-left: 0px; } .framer-GFuVw .framer-190qkqs > :last-child, .framer-GFuVw .framer-1inonl3 > :last-child, .framer-GFuVw .framer-ft3r2s > :last-child, .framer-GFuVw .framer-x1sm26 > :last-child { margin-right: 0px; } .framer-GFuVw .framer-1tv94z2 > *, .framer-GFuVw .framer-1x0bjb4 > *, .framer-GFuVw .framer-1ej1rfd > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-GFuVw .framer-19fdawl > *, .framer-GFuVw .framer-pkku0s > *, .framer-GFuVw .framer-1109iv9 > *, .framer-GFuVw .framer-1o6kqj > *, .framer-GFuVw .framer-np55wk > *, .framer-GFuVw .framer-1cxhcoc > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }',
  '.framer-GFuVw.framer-v-9kj5bm.framer-1xab13y { gap: 48px; padding: 0px 60px 0px 60px; width: 690px; }',
  '.framer-GFuVw.framer-v-9kj5bm .framer-2c0smr { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 24px; height: min-content; justify-content: center; order: 0; }',
  '.framer-GFuVw.framer-v-9kj5bm .framer-1i5t3df-container, .framer-GFuVw.framer-v-udog3d .framer-1i5t3df-container, .framer-GFuVw.framer-v-db1puy .framer-1i5t3df-container { width: 100%; }',
  '.framer-GFuVw.framer-v-9kj5bm .framer-y11zbv { gap: 20px; grid-template-columns: repeat(2, minmax(200px, 1fr)); order: 1; width: 100%; }',
  '.framer-GFuVw.framer-v-9kj5bm .framer-ft3r2s { flex: 1 0 0px; width: 1px; will-change: var(--framer-will-change-override, transform); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GFuVw.framer-v-9kj5bm.framer-1xab13y, .framer-GFuVw.framer-v-9kj5bm .framer-2c0smr, .framer-GFuVw.framer-v-9kj5bm .framer-y11zbv { gap: 0px; } .framer-GFuVw.framer-v-9kj5bm.framer-1xab13y > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-GFuVw.framer-v-9kj5bm.framer-1xab13y > :first-child, .framer-GFuVw.framer-v-9kj5bm .framer-2c0smr > :first-child { margin-top: 0px; } .framer-GFuVw.framer-v-9kj5bm.framer-1xab13y > :last-child, .framer-GFuVw.framer-v-9kj5bm .framer-2c0smr > :last-child { margin-bottom: 0px; } .framer-GFuVw.framer-v-9kj5bm .framer-2c0smr > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-GFuVw.framer-v-9kj5bm .framer-y11zbv > *, .framer-GFuVw.framer-v-9kj5bm .framer-y11zbv > :first-child, .framer-GFuVw.framer-v-9kj5bm .framer-y11zbv > :last-child { margin: 0px; } }',
  '.framer-GFuVw.framer-v-udog3d.framer-1xab13y, .framer-GFuVw.framer-v-db1puy.framer-1xab13y { gap: 24px; padding: 0px 20px 0px 20px; width: 330px; }',
  '.framer-GFuVw.framer-v-udog3d .framer-2c0smr, .framer-GFuVw.framer-v-db1puy .framer-2c0smr { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 48px; height: min-content; justify-content: center; order: 0; }',
  '.framer-GFuVw.framer-v-udog3d .framer-y11zbv, .framer-GFuVw.framer-v-db1puy .framer-y11zbv { gap: 30px; grid-template-columns: repeat(1, minmax(200px, 1fr)); order: 1; width: 100%; }',
  '.framer-GFuVw.framer-v-udog3d .framer-190qkqs, .framer-GFuVw.framer-v-udog3d .framer-x1sm26, .framer-GFuVw.framer-v-db1puy .framer-190qkqs, .framer-GFuVw.framer-v-db1puy .framer-x1sm26 { padding: 38px 20px 32px 20px; }',
  '.framer-GFuVw.framer-v-udog3d .framer-ft3r2s, .framer-GFuVw.framer-v-db1puy .framer-ft3r2s { flex: 1 0 0px; padding: 38px 20px 32px 20px; width: 1px; will-change: var(--framer-will-change-override, transform); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GFuVw.framer-v-udog3d.framer-1xab13y, .framer-GFuVw.framer-v-udog3d .framer-2c0smr, .framer-GFuVw.framer-v-udog3d .framer-y11zbv { gap: 0px; } .framer-GFuVw.framer-v-udog3d.framer-1xab13y > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-GFuVw.framer-v-udog3d.framer-1xab13y > :first-child, .framer-GFuVw.framer-v-udog3d .framer-2c0smr > :first-child { margin-top: 0px; } .framer-GFuVw.framer-v-udog3d.framer-1xab13y > :last-child, .framer-GFuVw.framer-v-udog3d .framer-2c0smr > :last-child { margin-bottom: 0px; } .framer-GFuVw.framer-v-udog3d .framer-2c0smr > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-GFuVw.framer-v-udog3d .framer-y11zbv > *, .framer-GFuVw.framer-v-udog3d .framer-y11zbv > :first-child, .framer-GFuVw.framer-v-udog3d .framer-y11zbv > :last-child { margin: 0px; } }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-GFuVw.framer-v-db1puy.framer-1xab13y, .framer-GFuVw.framer-v-db1puy .framer-2c0smr, .framer-GFuVw.framer-v-db1puy .framer-y11zbv { gap: 0px; } .framer-GFuVw.framer-v-db1puy.framer-1xab13y > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-GFuVw.framer-v-db1puy.framer-1xab13y > :first-child, .framer-GFuVw.framer-v-db1puy .framer-2c0smr > :first-child { margin-top: 0px; } .framer-GFuVw.framer-v-db1puy.framer-1xab13y > :last-child, .framer-GFuVw.framer-v-db1puy .framer-2c0smr > :last-child { margin-bottom: 0px; } .framer-GFuVw.framer-v-db1puy .framer-2c0smr > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-GFuVw.framer-v-db1puy .framer-y11zbv > *, .framer-GFuVw.framer-v-db1puy .framer-y11zbv > :first-child, .framer-GFuVw.framer-v-db1puy .framer-y11zbv > :last-child { margin: 0px; } }',
  ...css2,
  ...css4,
];
var FramereaYqW6xw3 = withCSS5(Component5, css10, 'framer-GFuVw',);
var stdin_default5 = FramereaYqW6xw3;
FramereaYqW6xw3.displayName = 'Pricing Table';
FramereaYqW6xw3.defaultProps = { height: 589, width: 1070, };
addPropertyControls5(FramereaYqW6xw3, {
  variant: {
    options: ['zh6iZCw8V', 'u5_tNBeHP', 'pSo3PWwjp', 'J3GQSL2SF',],
    optionTitles: ['Desktop 1', 'Tablet 1', 'Mobile 1', 'Mobile 2',],
    title: 'Variant',
    type: ControlType5.Enum,
  },
  Gt9H5QhVm: { title: 'BuyEvent', type: ControlType5.EventHandler, },
},);
addFonts5(FramereaYqW6xw3, [...SectionTitleFonts, ...PricingFeatureItemFonts, ...ButtonFonts, ...fonts2, ...fonts4,],);

// virtual:pricing
import { WithFramerBreakpoints, } from 'unframer/dist/react';
import { jsx, } from 'react/jsx-runtime';
stdin_default5.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default5, ...props, },);
};
var pricing_default = stdin_default5;
export { pricing_default as default, };
