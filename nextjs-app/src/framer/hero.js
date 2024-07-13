// @ts-nocheck
/* eslint-disable */
'use client';
import { className, className2, className3, css, css2, css3, fonts, fonts2, fonts3, } from './chunk-L46B732H.js';
import './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/3pXrWBKq12hHUtkesa7O/1NkKyZrVuYXGqc3W1LCy/eaL2rwfV9.js
import { jsx as _jsx7, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts5,
  addPropertyControls as addPropertyControls3,
  ControlType as ControlType3,
  cx as cx5,
  getFonts as getFonts2,
  RichText as RichText3,
  useLocaleInfo as useLocaleInfo4,
  useVariantState as useVariantState5,
  withCSS as withCSS5,
} from 'unframer';
import { LayoutGroup as LayoutGroup5, motion as motion7, MotionConfigContext as MotionConfigContext4, } from 'unframer';
import * as React5 from 'react';

// https :https://framerusercontent.com/modules/wG3YWBlnMEy1hKfcXuby/HUpR1XxEarbMnFEDoFym/Test_2.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { motion, } from 'unframer';
import { useEffect, useState, } from 'react';
function withCountUp50speed50(Component6,) {
  return (props,) => {
    const [count, setCount,] = useState(0,);
    useEffect(() => {
      if (count < 16) {
        const intervalId = setInterval(() => {
          setCount((prevCount,) => prevCount + 1);
        }, 90,);
        return () => clearInterval(intervalId,);
      }
    }, [count,],);
    return /* @__PURE__ */ _jsx(Component6, { ...props, text: `${count}`, },);
  };
}

// https :https://framerusercontent.com/modules/jcPFAQWGaONPqPbVInRU/ohk9CNdxjpIgzk7Nh895/Test.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import { motion as motion2, } from 'unframer';
import { useEffect as useEffect2, useState as useState2, } from 'react';
function withCountUp50speed502(Component6,) {
  return (props,) => {
    const [count, setCount,] = useState2(0,);
    useEffect2(() => {
      if (count < 28) {
        const intervalId = setInterval(() => {
          setCount((prevCount,) => prevCount + 1);
        }, 90,);
        return () => clearInterval(intervalId,);
      }
    }, [count,],);
    return /* @__PURE__ */ _jsx2(Component6, { ...props, text: `${count}`, },);
  };
}

// https :https://framerusercontent.com/modules/jPZc4kIpXwA3A0T4XadM/zTYWUK52YjkLFCk3XxRD/jRlNrjZfR.js
import { fontStore, } from 'unframer';
fontStore.loadWebFontsFromSelectors(['GF;DM Sans-700',],);
var fonts4 = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/jRlNrjZfR:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
  weight: '700',
},];
var css4 = [
  '.framer-HNAxs .framer-styles-preset-eqqs84:not(.rich-text-wrapper), .framer-HNAxs .framer-styles-preset-eqqs84.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -1.4px; --framer-line-height: 40px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
];
var className4 = 'framer-HNAxs';

// https :https://framerusercontent.com/modules/cxD5eSzAs0tNpvGdn2nJ/2vsxoaX4sNoSzJsJfeTQ/ZSzgV3xdi.js
import { fontStore as fontStore2, } from 'unframer';
fontStore2.loadWebFontsFromSelectors(['GF;DM Sans-700',],);
var fonts5 = [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:css/ZSzgV3xdi:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
  weight: '700',
},];
var css5 = [
  '.framer-GjzcW .framer-styles-preset-122ys87:not(.rich-text-wrapper), .framer-GjzcW .framer-styles-preset-122ys87.rich-text-wrapper h1 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2.4px; --framer-line-height: 78px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; }',
  '@media (max-width: 1439px) and (min-width: 810px) { .framer-GjzcW .framer-styles-preset-122ys87:not(.rich-text-wrapper), .framer-GjzcW .framer-styles-preset-122ys87.rich-text-wrapper h1 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 62px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2.4px; --framer-line-height: 78px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
  '@media (max-width: 809px) and (min-width: 0px) { .framer-GjzcW .framer-styles-preset-122ys87:not(.rich-text-wrapper), .framer-GjzcW .framer-styles-preset-122ys87.rich-text-wrapper h1 { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-weight: 700; --framer-letter-spacing: -2.4px; --framer-line-height: 52px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff); --framer-text-decoration: none; --framer-text-transform: none; } }',
];
var className5 = 'framer-GjzcW';

// https :https://framerusercontent.com/modules/ItFJpuMfOPOPAWALwRev/y79djn5m3Ew9gwLCM6TB/fAeI1HtaF.js
import { jsx as _jsx4, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  cx as cx2,
  getFonts,
  RichText,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion4, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/q5rmi04DimeC8RWfs9r1/KhLdgeGrg37XOtd0N0JU/jijvTv89r.js
import { jsx as _jsx3, } from 'react/jsx-runtime';
import { addFonts, cx, SVG, useComponentViewport, useLocaleInfo, useVariantState, withCSS, } from 'unframer';
import { LayoutGroup, motion as motion3, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['gzT3814Te',];
var serializationHash = 'framer-iInDf';
var variantClassNames = { gzT3814Te: 'framer-v-2vg0ii', };
var transitions = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion3(React.Fragment,);
var getProps = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className6, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'gzT3814Te',
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx3(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx3(motion3.div, {
          ...restProps,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-2vg0ii', className6, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'gzT3814Te',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: /* @__PURE__ */ _jsx3(SVG, {
            className: 'framer-dwclm',
            layout: 'position',
            layoutDependency,
            layoutId: 'ENfCC9TRE',
            opacity: 1,
            svg:
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 34 43"><path d="M 15.747 7.351 C 16.251 6.299 17.749 6.299 18.253 7.351 L 21.677 14.493 C 21.877 14.909 22.269 15.199 22.725 15.267 L 30.447 16.422 C 31.574 16.591 32.031 17.97 31.226 18.778 L 25.588 24.435 C 25.272 24.752 25.128 25.203 25.201 25.645 L 26.525 33.591 C 26.715 34.732 25.51 35.592 24.493 35.042 L 17.662 31.345 C 17.249 31.121 16.751 31.121 16.338 31.345 L 9.507 35.042 C 8.49 35.592 7.285 34.732 7.475 33.591 L 8.799 25.645 C 8.872 25.203 8.728 24.752 8.412 24.435 L 2.774 18.778 C 1.969 17.97 2.426 16.591 3.553 16.422 L 11.275 15.267 C 11.731 15.199 12.123 14.909 12.323 14.493 Z" fill="var(--token-6b0f6268-7b27-460d-9b70-67f2c49e8da5, rgb(242, 199, 41)) /* {&quot;name&quot;:&quot;yellow star&quot;} */"></path></svg>',
            svgContentId: 3990751703,
            withExternalLayout: true,
          },),
        },),
      },),
    },),
  },);
},);
var css6 = [
  '.framer-iInDf[data-border="true"]::after, .framer-iInDf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-iInDf.framer-1rpsl5n, .framer-iInDf .framer-1rpsl5n { display: block; }',
  '.framer-iInDf.framer-2vg0ii { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 31px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-iInDf .framer-dwclm { flex: none; height: 43px; position: relative; width: 34px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-iInDf.framer-2vg0ii { gap: 0px; } .framer-iInDf.framer-2vg0ii > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-iInDf.framer-2vg0ii > :first-child { margin-left: 0px; } .framer-iInDf.framer-2vg0ii > :last-child { margin-right: 0px; } }',
];
var FramerjijvTv89r = withCSS(Component, css6, 'framer-iInDf',);
var stdin_default = FramerjijvTv89r;
FramerjijvTv89r.displayName = 'star';
FramerjijvTv89r.defaultProps = { height: 31, width: 34, };
addFonts(FramerjijvTv89r, [],);

// https :https://framerusercontent.com/modules/ItFJpuMfOPOPAWALwRev/y79djn5m3Ew9gwLCM6TB/fAeI1HtaF.js
var StarFonts = getFonts(stdin_default,);
var cycleOrder2 = ['AOKwt5tx8',];
var variantClassNames2 = { AOKwt5tx8: 'framer-v-30tkrw', };
var transitions2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var getProps2 = ({ height, id, width, ...props },) => {
  return { ...props, };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo2();
  const { style, className: className6, layoutId, variant, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'AOKwt5tx8',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const defaultLayoutId = React2.useId();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(motion4.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx2('framer-UB8A9', className3, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsxs(motion4.div, {
          ...restProps,
          className: cx2('framer-30tkrw', className6,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'AOKwt5tx8',
          ref,
          style: { ...style, },
          children: [
            /* @__PURE__ */ _jsx4(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx4(React2.Fragment, {
                children: /* @__PURE__ */ _jsx4(motion4.p, {
                  className: 'framer-styles-preset-1s3kmoj',
                  'data-styles-preset': 'eshFTHo2K',
                  children: 'Rated 4.7 on TrustPilot',
                },),
              },),
              className: 'framer-1an4kcm',
              layoutDependency,
              layoutId: 'tWMboJy7r',
              style: {
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
                '--framer-paragraph-spacing': '0px',
              },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsxs(motion4.div, {
              className: 'framer-13k96nq',
              layoutDependency,
              layoutId: 'L5qAWwDN2',
              children: [
                /* @__PURE__ */ _jsx4(motion4.div, {
                  className: 'framer-1f0gdlp-container',
                  layoutDependency,
                  layoutId: 'lIQ7JSFYD-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'lIQ7JSFYD',
                    layoutId: 'lIQ7JSFYD',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx4(motion4.div, {
                  className: 'framer-1bd2plr-container',
                  layoutDependency,
                  layoutId: 'QFpErK9SZ-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'QFpErK9SZ',
                    layoutId: 'QFpErK9SZ',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx4(motion4.div, {
                  className: 'framer-cf8nj4-container',
                  layoutDependency,
                  layoutId: 'Mz7KV2YFs-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'Mz7KV2YFs',
                    layoutId: 'Mz7KV2YFs',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx4(motion4.div, {
                  className: 'framer-7mowv1-container',
                  layoutDependency,
                  layoutId: 'vv4bypRl4-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'vv4bypRl4',
                    layoutId: 'vv4bypRl4',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx4(motion4.div, {
                  className: 'framer-mk29cl-container',
                  layoutDependency,
                  layoutId: 'jV_TvD2mx-container',
                  children: /* @__PURE__ */ _jsx4(stdin_default, {
                    height: '100%',
                    id: 'jV_TvD2mx',
                    layoutId: 'jV_TvD2mx',
                    width: '100%',
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
var css7 = [
  '.framer-UB8A9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-UB8A9 .framer-7eahjt { display: block; }',
  '.framer-UB8A9 .framer-30tkrw { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 49px; }',
  '.framer-UB8A9 .framer-1an4kcm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-UB8A9 .framer-13k96nq { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-UB8A9 .framer-1f0gdlp-container, .framer-UB8A9 .framer-1bd2plr-container, .framer-UB8A9 .framer-cf8nj4-container, .framer-UB8A9 .framer-7mowv1-container, .framer-UB8A9 .framer-mk29cl-container { flex: none; height: auto; position: relative; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-UB8A9 .framer-30tkrw, .framer-UB8A9 .framer-13k96nq { gap: 0px; } .framer-UB8A9 .framer-30tkrw > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-UB8A9 .framer-30tkrw > :first-child { margin-top: 0px; } .framer-UB8A9 .framer-30tkrw > :last-child { margin-bottom: 0px; } .framer-UB8A9 .framer-13k96nq > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-UB8A9 .framer-13k96nq > :first-child { margin-left: 0px; } .framer-UB8A9 .framer-13k96nq > :last-child { margin-right: 0px; } }',
  ...css3,
];
var FramerfAeI1HtaF = withCSS2(Component2, css7, 'framer-UB8A9',);
var stdin_default2 = FramerfAeI1HtaF;
FramerfAeI1HtaF.displayName = 'stars';
FramerfAeI1HtaF.defaultProps = { height: 67, width: 49, };
addFonts2(FramerfAeI1HtaF, [...StarFonts, ...fonts3,],);

// https :https://framerusercontent.com/modules/smGVHfsuFu9f45Y8rp5v/si7ZQVFuLRmrxXAnzpGg/r20S5u2K1.js
import { jsx as _jsx5, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls,
  ControlType,
  cx as cx3,
  CycleVariantState,
  Link,
  RichText as RichText2,
  SVG as SVG2,
  useActiveVariantCallback,
  useLocaleInfo as useLocaleInfo3,
  useOnVariantChange,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion5, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React3 from 'react';
var cycleOrder3 = ['qa5zH5jg8',];
var variantClassNames3 = { qa5zH5jg8: 'framer-v-1tbdnh', };
var transitions3 = { default: { delay: 0.2, duration: 0.6, ease: [0.85, -0.15, 0.17, 1.09,], type: 'tween', }, };
var Transition3 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx5(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var getProps3 = ({ height, id, link, showTag, tagText, text, width, ...props },) => {
  var ref, ref1, ref2;
  return {
    ...props,
    nC8xzRYN4: (ref = text !== null && text !== void 0 ? text : props.nC8xzRYN4) !== null && ref !== void 0
      ? ref
      : 'Some dazzling improvements to Absolute you might have missed',
    vf6dzrmtv: link !== null && link !== void 0 ? link : props.vf6dzrmtv,
    YkSA2L2Mw: (ref1 = showTag !== null && showTag !== void 0 ? showTag : props.YkSA2L2Mw) !== null && ref1 !== void 0 ? ref1 : true,
    ZxBjpBldJ: (ref2 = tagText !== null && tagText !== void 0 ? tagText : props.ZxBjpBldJ) !== null && ref2 !== void 0 ? ref2 : 'News',
  };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo3();
  const { style, className: className6, layoutId, variant, YkSA2L2Mw, ZxBjpBldJ, nC8xzRYN4, vf6dzrmtv, ...restProps } = getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'qa5zH5jg8',
    transitions: transitions3,
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onAppear10usw7z = activeVariantCallback(async (...args) => {
    await delay(() => setVariant(CycleVariantState,), 5e3,);
  },);
  useOnVariantChange(baseVariant, { default: onAppear10usw7z, },);
  const defaultLayoutId = React3.useId();
  return /* @__PURE__ */ _jsx5(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx5(motion5.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx3('framer-FXlOT', className2, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx5(Transition3, {
        value: transition,
        children: /* @__PURE__ */ _jsx5(Link, {
          href: vf6dzrmtv,
          openInNewTab: false,
          children: /* @__PURE__ */ _jsx5(motion5.a, {
            ...restProps,
            className: `${cx3('framer-1tbdnh', className6,)} framer-1mqntt4`,
            'data-border': true,
            'data-framer-name': 'Variant 1',
            'data-highlight': true,
            layoutDependency,
            layoutId: 'qa5zH5jg8',
            ref,
            style: {
              '--border-bottom-width': '1px',
              '--border-color': 'rgba(0, 0, 0, 0.1)',
              '--border-left-width': '1px',
              '--border-right-width': '1px',
              '--border-style': 'solid',
              '--border-top-width': '1px',
              backgroundColor: 'rgb(255, 255, 255)',
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              borderTopLeftRadius: 100,
              borderTopRightRadius: 100,
              ...style,
            },
            children: /* @__PURE__ */ _jsxs2(motion5.div, {
              className: 'framer-h0888m',
              'data-framer-name': 'Frame 40638',
              layoutDependency,
              layoutId: 'I1:13925;147:31300',
              children: [
                YkSA2L2Mw && /* @__PURE__ */ _jsx5(motion5.div, {
                  className: 'framer-8t04oi',
                  'data-framer-name': 'Frame 40647',
                  layoutDependency,
                  layoutId: 'I1:13925;147:31301',
                  style: {
                    backgroundColor: 'rgba(69, 88, 115, 0.18)',
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                  },
                  children: /* @__PURE__ */ _jsx5(RichText2, {
                    __fromCanvasComponent: true,
                    children: /* @__PURE__ */ _jsx5(React3.Fragment, {
                      children: /* @__PURE__ */ _jsx5(motion5.p, {
                        className: 'framer-styles-preset-tdptso',
                        'data-styles-preset': 'Q4kC2bTJ2',
                        style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                        children: 'News',
                      },),
                    },),
                    className: 'framer-g6o0na',
                    'data-framer-name': 'News:',
                    layoutDependency,
                    layoutId: 'I1:13925;147:31302',
                    style: {
                      '--extracted-r6o4lv': 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(255, 79, 0)) ',
                      '--framer-paragraph-spacing': '0px',
                    },
                    text: ZxBjpBldJ,
                    verticalAlignment: 'top',
                    withExternalLayout: true,
                  },),
                },),
                /* @__PURE__ */ _jsxs2(motion5.div, {
                  className: 'framer-1oxgr7k',
                  layoutDependency,
                  layoutId: 'wgbrC7oir',
                  children: [
                    /* @__PURE__ */ _jsx5(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx5(React3.Fragment, {
                        children: /* @__PURE__ */ _jsx5(motion5.p, {
                          className: 'framer-styles-preset-tdptso',
                          'data-styles-preset': 'Q4kC2bTJ2',
                          style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                          children: 'Some dazzling improvements to Absolute you might have missed',
                        },),
                      },),
                      className: 'framer-13z8c4j',
                      'data-framer-name': 'Some dazzling improvements to Sketch you might have missed',
                      layoutDependency,
                      layoutId: 'I1:13925;147:31304',
                      style: {
                        '--extracted-r6o4lv': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)) ',
                        '--framer-paragraph-spacing': '0px',
                      },
                      text: nC8xzRYN4,
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx5(SVG2, {
                      className: 'framer-169qpjc',
                      'data-framer-name': 'arrow-right',
                      fill: 'rgba(0,0,0,1)',
                      intrinsicHeight: 16,
                      intrinsicWidth: 16,
                      layoutDependency,
                      layoutId: 'U572aoh7w',
                      svg:
                        '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7.97978 3.64645C7.78452 3.84171 7.78452 4.15829 7.97978 4.35355L11.1262 7.5H4C3.72386 7.5 3.5 7.72386 3.5 8C3.5 8.27614 3.72386 8.5 4 8.5H11.1262L7.97978 11.6464C7.78452 11.8417 7.78452 12.1583 7.97978 12.3536C8.17504 12.5488 8.49163 12.5488 8.68689 12.3536L12.6869 8.35355C12.7807 8.25979 12.8333 8.13261 12.8333 8C12.8333 7.86739 12.7807 7.74021 12.6869 7.64645L8.68689 3.64645C8.49163 3.45118 8.17504 3.45118 7.97978 3.64645Z" fill="#7F7F7F"/>\n</svg>\n',
                      withExternalLayout: true,
                    },),
                  ],
                },),
              ],
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css8 = [
  '.framer-FXlOT [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-FXlOT .framer-1mqntt4 { display: block; }',
  '.framer-FXlOT .framer-1tbdnh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 4px 4px 4px 4px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }',
  '.framer-FXlOT .framer-h0888m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 12px 0px 0px; position: relative; width: min-content; }',
  '.framer-FXlOT .framer-8t04oi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 4px 12px 4px 12px; position: relative; width: min-content; }',
  '.framer-FXlOT .framer-g6o0na, .framer-FXlOT .framer-13z8c4j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-FXlOT .framer-1oxgr7k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 22px; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-FXlOT .framer-169qpjc { flex: none; height: 16px; position: relative; width: 16px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-FXlOT .framer-1tbdnh, .framer-FXlOT .framer-h0888m, .framer-FXlOT .framer-8t04oi, .framer-FXlOT .framer-1oxgr7k { gap: 0px; } .framer-FXlOT .framer-1tbdnh > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-FXlOT .framer-1tbdnh > :first-child { margin-top: 0px; } .framer-FXlOT .framer-1tbdnh > :last-child { margin-bottom: 0px; } .framer-FXlOT .framer-h0888m > *, .framer-FXlOT .framer-1oxgr7k > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-FXlOT .framer-h0888m > :first-child, .framer-FXlOT .framer-8t04oi > :first-child, .framer-FXlOT .framer-1oxgr7k > :first-child { margin-left: 0px; } .framer-FXlOT .framer-h0888m > :last-child, .framer-FXlOT .framer-8t04oi > :last-child, .framer-FXlOT .framer-1oxgr7k > :last-child { margin-right: 0px; } .framer-FXlOT .framer-8t04oi > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } }',
  ...css2,
];
var Framerr20S5u2K1 = withCSS3(Component3, css8, 'framer-FXlOT',);
var stdin_default3 = Framerr20S5u2K1;
Framerr20S5u2K1.displayName = 'Alert';
Framerr20S5u2K1.defaultProps = { height: 38, width: 588, };
addPropertyControls(Framerr20S5u2K1, {
  YkSA2L2Mw: { defaultValue: true, title: 'Show Tag', type: ControlType.Boolean, },
  ZxBjpBldJ: { defaultValue: 'News', displayTextArea: false, title: 'Tag Text', type: ControlType.String, },
  nC8xzRYN4: {
    defaultValue: 'Some dazzling improvements to Absolute you might have missed',
    displayTextArea: false,
    title: 'Text',
    type: ControlType.String,
  },
  vf6dzrmtv: { title: 'Link', type: ControlType.Link, },
},);
addFonts3(Framerr20S5u2K1, [...fonts2,],);

// https :https://framerusercontent.com/modules/8bzLzi9bMy6c8MKTcSp9/UU2W4i5bMHnFcddSjhiU/rWpbaXaRc.js
import { jsx as _jsx6, } from 'react/jsx-runtime';
import {
  addFonts as addFonts4,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx as cx4,
  Image,
  useVariantState as useVariantState4,
  withCSS as withCSS4,
} from 'unframer';
import { LayoutGroup as LayoutGroup4, motion as motion6, } from 'unframer';
import * as React4 from 'react';
var cycleOrder4 = ['L6GyWOWSZ',];
var variantClassNames4 = { L6GyWOWSZ: 'framer-v-i4jn9m', };
var humanReadableVariantMap = {};
var transitions4 = {
  default: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], mass: 1, stiffness: 500, type: 'spring', },
};
var toResponsiveImage = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Component4 = /* @__PURE__ */ React4.forwardRef(
  function (
    {
      id,
      style,
      className: className6,
      width,
      height,
      layoutId,
      variant: outerVariant = 'L6GyWOWSZ',
      image: IeRmjDLDf = {
        src:
          new URL(
            'assets/3kqJNolY4UGh9E4ebvxkzAwgzLI.svg',
            'https://framerusercontent.com/modules/8bzLzi9bMy6c8MKTcSp9/UU2W4i5bMHnFcddSjhiU/rWpbaXaRc.js',
          ).href,
      },
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState4({
      cycleOrder: cycleOrder4,
      defaultVariant: 'L6GyWOWSZ',
      transitions: transitions4,
      variant,
      variantClassNames: variantClassNames4,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const defaultLayoutId = React4.useId();
    return /* @__PURE__ */ _jsx6(LayoutGroup4, {
      id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
      children: /* @__PURE__ */ _jsx6(motion6.div, {
        initial: variant,
        animate: variants,
        onHoverStart: () => setGestureState({ isHovered: true, },),
        onHoverEnd: () => setGestureState({ isHovered: false, },),
        onTapStart: () => setGestureState({ isPressed: true, },),
        onTap: () => setGestureState({ isPressed: false, },),
        onTapCancel: () => setGestureState({ isPressed: false, },),
        className: cx4('framer-7FvTJ', classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsx6(Image, {
          ...restProps,
          background: {
            alt: '',
            fit: 'fill',
            intrinsicHeight: 28,
            intrinsicWidth: 28,
            pixelHeight: 56,
            pixelWidth: 56,
            sizes: '56px',
            ...toResponsiveImage(IeRmjDLDf,),
          },
          className: cx4('framer-i4jn9m', className6,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'L6GyWOWSZ',
          ref,
          style: { ...style, },
          transition,
        },),
      },),
    },);
  },
);
var css9 = [
  '.framer-7FvTJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-7FvTJ .framer-1ntzcl6 { display: block; }',
  '.framer-7FvTJ .framer-i4jn9m { height: 56px; overflow: visible; position: relative; width: 56px; }',
];
var FramerrWpbaXaRc = withCSS4(Component4, css9, 'framer-7FvTJ',);
var stdin_default4 = FramerrWpbaXaRc;
FramerrWpbaXaRc.displayName = 'Avatar';
FramerrWpbaXaRc.defaultProps = { height: 56, width: 56, };
addPropertyControls2(FramerrWpbaXaRc, {
  IeRmjDLDf: {
    __defaultAssetReference: 'data:framer/asset-reference,3kqJNolY4UGh9E4ebvxkzAwgzLI.svg?originalFilename=1.svg&preferredSize=auto',
    title: 'Image',
    type: ControlType2.ResponsiveImage,
  },
},);
addFonts4(FramerrWpbaXaRc, [],);

// https :https://framerusercontent.com/modules/3pXrWBKq12hHUtkesa7O/1NkKyZrVuYXGqc3W1LCy/eaL2rwfV9.js
var AlertFonts = getFonts2(stdin_default3,);
var StarsFonts = getFonts2(stdin_default2,);
var RichTextWithCountUp50speed50 = withCountUp50speed50(RichText3,);
var RichTextWithCountUp50speed501 = withCountUp50speed502(RichText3,);
var AvatarFonts = getFonts2(stdin_default4,);
var cycleOrder5 = ['JHYqOA0j9', 'alcE5oNEy',];
var variantClassNames5 = { alcE5oNEy: 'framer-v-biwlfl', JHYqOA0j9: 'framer-v-1jj4czs', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions5 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var transformTemplate = (_, t,) => `perspective(1200px) ${t}`;
var Transition4 = ({ value, children, },) => {
  const config = React5.useContext(MotionConfigContext4,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React5.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx7(MotionConfigContext4.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap2 = { 'Variant 1': 'JHYqOA0j9', mobile: 'alcE5oNEy', };
var getProps4 = ({ heading, height, id, news, width, ...props },) => {
  var _ref, _humanReadableVariantMap_props_variant, _ref1;
  return {
    ...props,
    t2pe7NWjM: (_ref = heading !== null && heading !== void 0 ? heading : props.t2pe7NWjM) !== null && _ref !== void 0
      ? _ref
      : 'Create realistic voice content in seconds',
    variant:
      (_ref1 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref1 !== void 0
        ? _ref1
        : 'JHYqOA0j9',
    wlFcPAE6Y: news !== null && news !== void 0 ? news : props.wlFcPAE6Y,
  };
};
var createLayoutDependency4 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component5 = /* @__PURE__ */ React5.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo4();
  const { style, className: className6, layoutId, variant, wlFcPAE6Y, t2pe7NWjM, ...restProps } = getProps4(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState5({
    cycleOrder: cycleOrder5,
    defaultVariant: 'JHYqOA0j9',
    transitions: transitions5,
    variant,
    variantClassNames: variantClassNames5,
  },);
  const layoutDependency = createLayoutDependency4(props, variants,);
  const defaultLayoutId = React5.useId();
  return /* @__PURE__ */ _jsx7(LayoutGroup5, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx7(motion7.div, {
      initial: variant,
      animate: variants,
      onHoverStart: () => setGestureState({ isHovered: true, },),
      onHoverEnd: () => setGestureState({ isHovered: false, },),
      onTapStart: () => setGestureState({ isPressed: true, },),
      onTap: () => setGestureState({ isPressed: false, },),
      onTapCancel: () => setGestureState({ isPressed: false, },),
      className: cx5('framer-l70ey', className5, className, className2, className4, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx7(Transition4, {
        value: transition,
        children: /* @__PURE__ */ _jsxs3(motion7.div, {
          ...restProps,
          className: cx5('framer-1jj4czs', className6,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'JHYqOA0j9',
          ref,
          style: { ...style, },
          ...addPropertyOverrides({ alcE5oNEy: { 'data-framer-name': 'mobile', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsxs3(motion7.div, {
              className: 'framer-ujnpzj',
              'data-framer-name': 'Left Side',
              layoutDependency,
              layoutId: 'D688iUIDv',
              children: [
                /* @__PURE__ */ _jsx7(motion7.div, {
                  className: 'framer-ix8kd6-container',
                  layoutDependency,
                  layoutId: 'k79CddoVt-container',
                  transformTemplate,
                  children: /* @__PURE__ */ _jsx7(stdin_default3, {
                    height: '100%',
                    id: 'k79CddoVt',
                    layoutId: 'k79CddoVt',
                    link: wlFcPAE6Y,
                    showTag: true,
                    tagText: 'News',
                    text: 'tiktoktts is now gesserit',
                    width: '100%',
                  },),
                },),
                /* @__PURE__ */ _jsx7(RichText3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx7(motion7.h1, {
                      className: 'framer-styles-preset-122ys87',
                      'data-styles-preset': 'ZSzgV3xdi',
                      style: { '--framer-text-color': 'var(--extracted-gdpscs)', },
                      children: 'Create realistic voice content in seconds',
                    },),
                  },),
                  className: 'framer-1h0030i',
                  layoutDependency,
                  layoutId: 'CbjK6CrcN',
                  style: {
                    '--extracted-gdpscs': 'rgb(255, 255, 255)',
                    '--framer-link-text-color': 'rgb(0, 153, 255)',
                    '--framer-link-text-decoration': 'underline',
                    '--framer-paragraph-spacing': '0px',
                  },
                  text: t2pe7NWjM,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      alcE5oNEy: {
                        children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                          children: /* @__PURE__ */ _jsx7(motion7.h1, {
                            className: 'framer-styles-preset-122ys87',
                            'data-styles-preset': 'ZSzgV3xdi',
                            style: { '--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-gdpscs)', },
                            children: 'Create realistic voice content in seconds',
                          },),
                        },),
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                /* @__PURE__ */ _jsx7(motion7.div, {
                  className: 'framer-xx5pp3-container',
                  layoutDependency,
                  layoutId: 'z1JaI4ZkI-container',
                  transformTemplate,
                  children: /* @__PURE__ */ _jsx7(stdin_default2, {
                    height: '100%',
                    id: 'z1JaI4ZkI',
                    layoutId: 'z1JaI4ZkI',
                    style: { width: '100%', },
                    width: '100%',
                  },),
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs3(motion7.div, {
              className: 'framer-r0lpiw',
              'data-framer-name': 'Right Side',
              layoutDependency,
              layoutId: 'gpGTP2Q1s',
              children: [
                /* @__PURE__ */ _jsx7(RichText3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                    children: /* @__PURE__ */ _jsx7(motion7.p, {
                      className: 'framer-styles-preset-de78pk',
                      'data-styles-preset': 'aLfVqe1FC',
                      style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                      children: 'Create realistic Text to Speech audio in seconds! Choose from all TikTok voices, languages and more',
                    },),
                  },),
                  className: 'framer-1jta4ad',
                  'data-framer-name': 'Description',
                  layoutDependency,
                  layoutId: 'NFb53T7FL',
                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                  transformTemplate,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ _jsxs3(motion7.div, {
                  className: 'framer-19eku5r',
                  'data-framer-name': 'Statistics & Avatars',
                  layoutDependency,
                  layoutId: 'EHOMkqcYH',
                  children: [
                    /* @__PURE__ */ _jsxs3(motion7.div, {
                      className: 'framer-qkupko',
                      'data-framer-name': 'Statistics',
                      layoutDependency,
                      layoutId: 'AuWoS5c3a',
                      transformTemplate,
                      children: [
                        /* @__PURE__ */ _jsxs3(motion7.div, {
                          className: 'framer-wah43v',
                          'data-framer-name': 'Statistic',
                          layoutDependency,
                          layoutId: 'YE_Lb0pkE',
                          children: [
                            /* @__PURE__ */ _jsx7(RichText3, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                                children: /* @__PURE__ */ _jsx7(motion7.p, {
                                  className: 'framer-styles-preset-tdptso',
                                  'data-styles-preset': 'Q4kC2bTJ2',
                                  style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                                  children: 'Audio Created',
                                },),
                              },),
                              className: 'framer-1rovqff',
                              'data-framer-name': 'Active User',
                              layoutDependency,
                              layoutId: 'tkr4omACv',
                              style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsxs3(motion7.div, {
                              className: 'framer-2662xu',
                              layoutDependency,
                              layoutId: 'FX1rwLxeT',
                              children: [
                                /* @__PURE__ */ _jsx7(motion7.div, {
                                  className: 'framer-1hc45mv',
                                  layoutDependency,
                                  layoutId: 'za3I5owDK',
                                  children: /* @__PURE__ */ _jsx7(RichTextWithCountUp50speed50, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                                      children: /* @__PURE__ */ _jsx7(motion7.p, {
                                        style: {
                                          '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                          '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                          '--framer-font-size': '28px',
                                          '--framer-font-weight': '700',
                                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                                        },
                                        children: '120',
                                      },),
                                    },),
                                    className: 'framer-1gv80re',
                                    fonts: ['GF;DM Sans-700',],
                                    layoutDependency,
                                    layoutId: 'S9PaToELN',
                                    style: {
                                      '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                                      '--framer-link-text-decoration': 'underline',
                                      '--framer-paragraph-spacing': '0px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx7(RichText3, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                                    children: /* @__PURE__ */ _jsx7(motion7.p, {
                                      className: 'framer-styles-preset-eqqs84',
                                      'data-styles-preset': 'jRlNrjZfR',
                                      style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                                      children: 'K+',
                                    },),
                                  },),
                                  className: 'framer-125sjzt',
                                  'data-framer-name': 'Main',
                                  layoutDependency,
                                  layoutId: 'T66zFAo58',
                                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                                  verticalAlignment: 'top',
                                  withExternalLayout: true,
                                },),
                              ],
                            },),
                          ],
                        },),
                        /* @__PURE__ */ _jsxs3(motion7.div, {
                          className: 'framer-1t9zhp',
                          'data-framer-name': 'Statistic',
                          layoutDependency,
                          layoutId: 'CpRqH_3nF',
                          children: [
                            /* @__PURE__ */ _jsx7(RichText3, {
                              __fromCanvasComponent: true,
                              children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                                children: /* @__PURE__ */ _jsx7(motion7.p, {
                                  className: 'framer-styles-preset-tdptso',
                                  'data-styles-preset': 'Q4kC2bTJ2',
                                  style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                                  children: 'Hours processed',
                                },),
                              },),
                              className: 'framer-1k783f4',
                              'data-framer-name': 'Active User',
                              layoutDependency,
                              layoutId: 'eg825Q2Pq',
                              style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                              verticalAlignment: 'top',
                              withExternalLayout: true,
                            },),
                            /* @__PURE__ */ _jsxs3(motion7.div, {
                              className: 'framer-y71t0f',
                              layoutDependency,
                              layoutId: 'MbqlzqaT5',
                              children: [
                                /* @__PURE__ */ _jsx7(motion7.div, {
                                  className: 'framer-8r0e83',
                                  layoutDependency,
                                  layoutId: 'IdOU1nbpu',
                                  children: /* @__PURE__ */ _jsx7(RichTextWithCountUp50speed501, {
                                    __fromCanvasComponent: true,
                                    children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                                      children: /* @__PURE__ */ _jsx7(motion7.p, {
                                        style: {
                                          '--font-selector': 'R0Y7RE0gU2Fucy03MDA=',
                                          '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                                          '--framer-font-size': '28px',
                                          '--framer-font-weight': '700',
                                          '--framer-text-color': 'var(--extracted-r6o4lv)',
                                        },
                                        children: '450',
                                      },),
                                    },),
                                    className: 'framer-qyrguk',
                                    fonts: ['GF;DM Sans-700',],
                                    layoutDependency,
                                    layoutId: 'XDhQ589Rr',
                                    style: {
                                      '--extracted-r6o4lv': 'rgb(255, 255, 255)',
                                      '--framer-link-text-color': 'rgb(0, 153, 255)',
                                      '--framer-link-text-decoration': 'underline',
                                      '--framer-paragraph-spacing': '0px',
                                    },
                                    verticalAlignment: 'top',
                                    withExternalLayout: true,
                                  },),
                                },),
                                /* @__PURE__ */ _jsx7(RichText3, {
                                  __fromCanvasComponent: true,
                                  children: /* @__PURE__ */ _jsx7(React5.Fragment, {
                                    children: /* @__PURE__ */ _jsx7(motion7.p, {
                                      className: 'framer-styles-preset-eqqs84',
                                      'data-styles-preset': 'jRlNrjZfR',
                                      style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                                      children: 'K+',
                                    },),
                                  },),
                                  className: 'framer-moofx3',
                                  'data-framer-name': 'Main',
                                  layoutDependency,
                                  layoutId: 'IEvZu7e77',
                                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                                  verticalAlignment: 'top',
                                  withExternalLayout: true,
                                },),
                              ],
                            },),
                          ],
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs3(motion7.div, {
                      className: 'framer-d1g7dw',
                      'data-framer-name': 'Avatars',
                      layoutDependency,
                      layoutId: 'Qd5E1CrNK',
                      transformTemplate,
                      children: [
                        /* @__PURE__ */ _jsx7(motion7.div, {
                          className: 'framer-1jgkeyr-container',
                          layoutDependency,
                          layoutId: 'XG7fvvaIL-container',
                          children: /* @__PURE__ */ _jsx7(stdin_default4, {
                            height: '100%',
                            id: 'XG7fvvaIL',
                            image: {
                              alt: 'Avatar 1',
                              src:
                                new URL(
                                  'assets/69KO7B97LxLjOfoc8fNQNYqNIY.png',
                                  'https://framerusercontent.com/modules/3pXrWBKq12hHUtkesa7O/1NkKyZrVuYXGqc3W1LCy/eaL2rwfV9.js',
                                ).href,
                            },
                            layoutId: 'XG7fvvaIL',
                            style: { height: '100%', width: '100%', },
                            width: '100%',
                          },),
                        },),
                        /* @__PURE__ */ _jsx7(motion7.div, {
                          className: 'framer-1lmv2bl-container',
                          layoutDependency,
                          layoutId: 'miGVZCAvd-container',
                          children: /* @__PURE__ */ _jsx7(stdin_default4, {
                            height: '100%',
                            id: 'miGVZCAvd',
                            image: {
                              alt: 'Avatar 2',
                              src:
                                new URL(
                                  'assets/r0R23H7sGaYIQoJHAe5KAtzubYE.png',
                                  'https://framerusercontent.com/modules/3pXrWBKq12hHUtkesa7O/1NkKyZrVuYXGqc3W1LCy/eaL2rwfV9.js',
                                ).href,
                            },
                            layoutId: 'miGVZCAvd',
                            style: { height: '100%', width: '100%', },
                            width: '100%',
                          },),
                        },),
                        /* @__PURE__ */ _jsx7(motion7.div, {
                          className: 'framer-n7fq14-container',
                          layoutDependency,
                          layoutId: 'STuu8Cyx4-container',
                          children: /* @__PURE__ */ _jsx7(stdin_default4, {
                            height: '100%',
                            id: 'STuu8Cyx4',
                            image: {
                              alt: 'Avatar 3',
                              src:
                                new URL(
                                  'assets/Mfk9CRWQ5mKJOzqKbhkcp1vCc.png',
                                  'https://framerusercontent.com/modules/3pXrWBKq12hHUtkesa7O/1NkKyZrVuYXGqc3W1LCy/eaL2rwfV9.js',
                                ).href,
                            },
                            layoutId: 'STuu8Cyx4',
                            style: { height: '100%', width: '100%', },
                            width: '100%',
                          },),
                        },),
                        /* @__PURE__ */ _jsx7(motion7.div, {
                          className: 'framer-la9i4g-container',
                          layoutDependency,
                          layoutId: 'FGcqm1ZhA-container',
                          children: /* @__PURE__ */ _jsx7(stdin_default4, {
                            height: '100%',
                            id: 'FGcqm1ZhA',
                            image: {
                              alt: 'Avatar 4',
                              src:
                                new URL(
                                  'assets/o8PVZ9WqQBMjInMVZas7NluOrIY.png',
                                  'https://framerusercontent.com/modules/3pXrWBKq12hHUtkesa7O/1NkKyZrVuYXGqc3W1LCy/eaL2rwfV9.js',
                                ).href,
                            },
                            layoutId: 'FGcqm1ZhA',
                            style: { height: '100%', width: '100%', },
                            width: '100%',
                          },),
                        },),
                        /* @__PURE__ */ _jsx7(motion7.div, {
                          className: 'framer-1gog6ko-container',
                          layoutDependency,
                          layoutId: 'b9WwkJtYh-container',
                          children: /* @__PURE__ */ _jsx7(stdin_default4, {
                            height: '100%',
                            id: 'b9WwkJtYh',
                            image: {
                              alt: 'Avatar 5',
                              src:
                                new URL(
                                  'assets/AovI3yHtFzYPSdCNckoopPzfIrU.png',
                                  'https://framerusercontent.com/modules/3pXrWBKq12hHUtkesa7O/1NkKyZrVuYXGqc3W1LCy/eaL2rwfV9.js',
                                ).href,
                            },
                            layoutId: 'b9WwkJtYh',
                            style: { height: '100%', width: '100%', },
                            width: '100%',
                          },),
                        },),
                      ],
                    },),
                  ],
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
  '.framer-l70ey [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-l70ey .framer-pxpii0 { display: block; }',
  '.framer-l70ey .framer-1jj4czs { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1070px; }',
  '.framer-l70ey .framer-ujnpzj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 602px; }',
  '.framer-l70ey .framer-ix8kd6-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-l70ey .framer-1h0030i, .framer-l70ey .framer-1jta4ad { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-l70ey .framer-xx5pp3-container { flex: none; height: auto; position: relative; width: 253px; }',
  '.framer-l70ey .framer-r0lpiw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 323px; }',
  '.framer-l70ey .framer-19eku5r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-l70ey .framer-qkupko { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-l70ey .framer-wah43v { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 114px; }',
  '.framer-l70ey .framer-1rovqff, .framer-l70ey .framer-1gv80re, .framer-l70ey .framer-125sjzt, .framer-l70ey .framer-1k783f4, .framer-l70ey .framer-qyrguk, .framer-l70ey .framer-moofx3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '.framer-l70ey .framer-2662xu, .framer-l70ey .framer-y71t0f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-l70ey .framer-1hc45mv, .framer-l70ey .framer-8r0e83 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 37px; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-l70ey .framer-1t9zhp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-l70ey .framer-d1g7dw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-l70ey .framer-1jgkeyr-container, .framer-l70ey .framer-1lmv2bl-container, .framer-l70ey .framer-n7fq14-container, .framer-l70ey .framer-la9i4g-container, .framer-l70ey .framer-1gog6ko-container { flex: none; height: 56px; position: relative; width: 56px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-l70ey .framer-ujnpzj, .framer-l70ey .framer-r0lpiw, .framer-l70ey .framer-19eku5r, .framer-l70ey .framer-wah43v, .framer-l70ey .framer-2662xu, .framer-l70ey .framer-1hc45mv, .framer-l70ey .framer-1t9zhp, .framer-l70ey .framer-y71t0f, .framer-l70ey .framer-8r0e83, .framer-l70ey .framer-d1g7dw { gap: 0px; } .framer-l70ey .framer-ujnpzj > * { margin: 0px; margin-bottom: calc(34px / 2); margin-top: calc(34px / 2); } .framer-l70ey .framer-ujnpzj > :first-child, .framer-l70ey .framer-r0lpiw > :first-child, .framer-l70ey .framer-19eku5r > :first-child, .framer-l70ey .framer-wah43v > :first-child, .framer-l70ey .framer-1t9zhp > :first-child { margin-top: 0px; } .framer-l70ey .framer-ujnpzj > :last-child, .framer-l70ey .framer-r0lpiw > :last-child, .framer-l70ey .framer-19eku5r > :last-child, .framer-l70ey .framer-wah43v > :last-child, .framer-l70ey .framer-1t9zhp > :last-child { margin-bottom: 0px; } .framer-l70ey .framer-r0lpiw > *, .framer-l70ey .framer-19eku5r > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } .framer-l70ey .framer-wah43v > *, .framer-l70ey .framer-1t9zhp > * { margin: 0px; margin-bottom: calc(2px / 2); margin-top: calc(2px / 2); } .framer-l70ey .framer-2662xu > *, .framer-l70ey .framer-y71t0f > * { margin: 0px; margin-left: calc(3px / 2); margin-right: calc(3px / 2); } .framer-l70ey .framer-2662xu > :first-child, .framer-l70ey .framer-1hc45mv > :first-child, .framer-l70ey .framer-y71t0f > :first-child, .framer-l70ey .framer-8r0e83 > :first-child, .framer-l70ey .framer-d1g7dw > :first-child { margin-left: 0px; } .framer-l70ey .framer-2662xu > :last-child, .framer-l70ey .framer-1hc45mv > :last-child, .framer-l70ey .framer-y71t0f > :last-child, .framer-l70ey .framer-8r0e83 > :last-child, .framer-l70ey .framer-d1g7dw > :last-child { margin-right: 0px; } .framer-l70ey .framer-1hc45mv > *, .framer-l70ey .framer-8r0e83 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-l70ey .framer-d1g7dw > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }',
  '.framer-l70ey.framer-v-biwlfl .framer-1jj4czs { align-content: center; align-items: center; flex-direction: column; gap: 28px; justify-content: center; width: 606px; }',
  '.framer-l70ey.framer-v-biwlfl .framer-ujnpzj { align-content: center; align-items: center; width: 100%; }',
  '.framer-l70ey.framer-v-biwlfl .framer-xx5pp3-container { width: 202px; }',
  '.framer-l70ey.framer-v-biwlfl .framer-r0lpiw { padding: 0px 10px 0px 10px; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-l70ey.framer-v-biwlfl .framer-1jj4czs { gap: 0px; } .framer-l70ey.framer-v-biwlfl .framer-1jj4czs > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-l70ey.framer-v-biwlfl .framer-1jj4czs > :first-child { margin-top: 0px; } .framer-l70ey.framer-v-biwlfl .framer-1jj4czs > :last-child { margin-bottom: 0px; } }',
  ...css5,
  ...css,
  ...css2,
  ...css4,
];
var FramereaL2rwfV9 = withCSS5(Component5, css10, 'framer-l70ey',);
var stdin_default5 = FramereaL2rwfV9;
FramereaL2rwfV9.displayName = 'Header';
FramereaL2rwfV9.defaultProps = { height: 395, width: 1070, };
addPropertyControls3(FramereaL2rwfV9, {
  variant: { options: ['JHYqOA0j9', 'alcE5oNEy',], optionTitles: ['Variant 1', 'mobile',], title: 'Variant', type: ControlType3.Enum, },
  wlFcPAE6Y: { title: 'news', type: ControlType3.Link, },
  t2pe7NWjM: {
    defaultValue: 'Create realistic voice content in seconds',
    displayTextArea: true,
    placeholder: '',
    title: 'heading',
    type: ControlType3.String,
  },
},);
addFonts5(FramereaL2rwfV9, [
  {
    family: 'DM Sans',
    moduleAsset: {
      localModuleIdentifier: 'local-module:canvasComponent/eaL2rwfV9:default',
      url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
    },
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/dmsans/v14/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthTmf3ZGMZpg.ttf',
    weight: '700',
  },
  ...AlertFonts,
  ...StarsFonts,
  ...AvatarFonts,
  ...fonts5,
  ...fonts,
  ...fonts2,
  ...fonts4,
],);

// virtual:hero
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default5.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default5, ...props, },);
};
var hero_default = stdin_default5;
export { hero_default as default, };
