/* eslint-disable */
'use client';
import './chunk-6C3VEZWH.js';

// https :https://framerusercontent.com/modules/xtnjNhwUCFkZEnWMUsa6/yP9cBABIddxlXhfvw3qN/yS_JadFF6.js
import { Fragment as _Fragment, jsx as _jsx3, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts as addFonts3,
  addPropertyControls as addPropertyControls3,
  ComponentViewportProvider,
  ControlType as ControlType3,
  cx as cx3,
  Floating,
  getFonts as getFonts2,
  RichText as RichText2,
  SVG as SVG2,
  useActiveVariantCallback as useActiveVariantCallback2,
  useComponentViewport,
  useLocaleInfo as useLocaleInfo3,
  useOverlayState,
  useVariantState as useVariantState3,
  withCSS as withCSS3,
  withFX,
} from 'unframer';
import { AnimatePresence, LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3, } from 'unframer';
import * as React3 from 'react';

// https :https://framerusercontent.com/modules/euDwFeSwaU80taen07uo/UqqCE8F1R2yB2rNl3AyN/Vh4Yb6ijq.js
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx as cx2,
  getFonts,
  RichText,
  useActiveVariantCallback,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/0scrOn7O2aLVlhVMWhXF/iFNoOwTuNwQRqVlVVYed/Vv7lXSsrv.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addFonts, addPropertyControls, ControlType, cx, SVG, useLocaleInfo, useVariantState, withCSS, } from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['wnipua7N_', 'BJYJhvClj',];
var variantClassNames = { BJYJhvClj: 'framer-v-qzjjul', wnipua7N_: 'framer-v-u8k4t0', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions = { default: { damping: 40, delay: 0, mass: 1, stiffness: 600, type: 'spring', }, };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap = { Closed: 'wnipua7N_', Open: 'BJYJhvClj', };
var getProps = ({ height, id, width, ...props },) => {
  var _variant, ref;
  return {
    ...props,
    variant:
      (ref = (_variant = humanReadableVariantMap[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref !== void 0
        ? ref
        : 'wnipua7N_',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'wnipua7N_',
    transitions,
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
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
      className: cx('framer-2F7tm', ...sharedStyleClassNames, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsx(motion.div, {
          ...restProps,
          className: cx('framer-u8k4t0', className,),
          'data-framer-name': 'Closed',
          layoutDependency,
          layoutId: 'wnipua7N_',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides({ BJYJhvClj: { 'data-framer-name': 'Open', }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx(motion.div, {
            className: 'framer-12eia36',
            'data-framer-name': 'Frame',
            layoutDependency,
            layoutId: 'GUelqHsD8',
            style: { rotate: 0, },
            variants: { BJYJhvClj: { rotate: -180, }, },
            children: /* @__PURE__ */ _jsx(SVG, {
              className: 'framer-tbg1zr',
              'data-framer-name': 'Icon',
              layout: 'position',
              layoutDependency,
              layoutId: 'VHYQxi0qk',
              opacity: 1,
              svg:
                '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14"><path d="M 3 5.5 L 7 9.5 L 11 5.5" fill="transparent" stroke-width="2" stroke="#aaa" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
              svgContentId: 892255882,
              withExternalLayout: true,
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '.framer-2F7tm [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-2F7tm .framer-1al4e3m { display: block; }',
  '.framer-2F7tm .framer-u8k4t0 { height: 14px; overflow: visible; position: relative; width: 14px; }',
  '.framer-2F7tm .framer-12eia36 { flex: none; height: 14px; left: calc(50.00000000000002% - 14px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 14px; }',
  '.framer-2F7tm .framer-tbg1zr { flex: none; height: 14px; left: calc(50.00000000000002% - 14px / 2); position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 14px; }',
];
var FramerVv7lXSsrv = withCSS(Component, css, 'framer-2F7tm',);
var stdin_default = FramerVv7lXSsrv;
FramerVv7lXSsrv.displayName = 'Caret';
FramerVv7lXSsrv.defaultProps = { height: 14, width: 14, };
addPropertyControls(FramerVv7lXSsrv, {
  variant: { options: ['wnipua7N_', 'BJYJhvClj',], optionTitles: ['Closed', 'Open',], title: 'Variant', type: ControlType.Enum, },
},);
addFonts(FramerVv7lXSsrv, [],);

// https :https://framerusercontent.com/modules/euDwFeSwaU80taen07uo/UqqCE8F1R2yB2rNl3AyN/Vh4Yb6ijq.js
var CaretFonts = getFonts(stdin_default,);
var cycleOrder2 = ['J5O7yazVx', 'HsVzRrSdQ',];
var variantClassNames2 = { HsVzRrSdQ: 'framer-v-ukuyu9', J5O7yazVx: 'framer-v-1w103lv', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions2 = { default: { damping: 40, delay: 0, mass: 1, stiffness: 600, type: 'spring', }, };
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var humanReadableVariantMap2 = { Closed: 'J5O7yazVx', Open: 'HsVzRrSdQ', };
var getProps2 = ({ height, hover, id, title, width, ...props },) => {
  var ref, _variant, ref1;
  return {
    ...props,
    DApvjrdfG: (ref = title !== null && title !== void 0 ? title : props.DApvjrdfG) !== null && ref !== void 0 ? ref : 'Product',
    PWSlWeqS6: hover !== null && hover !== void 0 ? hover : props.PWSlWeqS6,
    variant:
      (ref1 = (_variant = humanReadableVariantMap2[props.variant]) !== null && _variant !== void 0 ? _variant : props.variant) !== null &&
        ref1 !== void 0
        ? ref1
        : 'J5O7yazVx',
  };
};
var createLayoutDependency2 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, } = useLocaleInfo2();
  const { style, className, layoutId, variant, PWSlWeqS6, DApvjrdfG, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'J5O7yazVx',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onMouseEnter1nzhzpa = activeVariantCallback(async (...args) => {
    if (PWSlWeqS6) {
      const res = await PWSlWeqS6(...args,);
      if (res === false) {
        return false;
      }
    }
  },);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
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
      className: cx2('framer-imvz1', ...sharedStyleClassNames, classNames,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ _jsx2(Transition2, {
        value: transition,
        children: /* @__PURE__ */ _jsxs(motion2.div, {
          ...restProps,
          className: cx2('framer-1w103lv', className,),
          'data-framer-name': 'Closed',
          'data-highlight': true,
          layoutDependency,
          layoutId: 'J5O7yazVx',
          onMouseEnter: onMouseEnter1nzhzpa,
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          ...addPropertyOverrides2({ HsVzRrSdQ: { 'data-framer-name': 'Open', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React2.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion2.p, {
                  style: {
                    '--font-selector': 'SW50ZXItTWVkaXVt',
                    '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                    '--framer-font-size': '15px',
                    '--framer-font-weight': '500',
                    '--framer-letter-spacing': '-0.01em',
                    '--framer-line-height': '2em',
                    '--framer-text-alignment': 'left',
                    '--framer-text-color': 'var(--extracted-r6o4lv)',
                  },
                  children: 'Product',
                },),
              },),
              className: 'framer-tggvu4',
              fonts: ['Inter-Medium',],
              layoutDependency,
              layoutId: 'ye0GaXlLd',
              style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
              text: DApvjrdfG,
              variants: { HsVzRrSdQ: { '--extracted-r6o4lv': 'rgb(136, 136, 136)', }, },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx2(motion2.div, {
              className: 'framer-x4u5ef-container',
              layoutDependency,
              layoutId: 'tEjwdPJgr-container',
              children: /* @__PURE__ */ _jsx2(stdin_default, {
                height: '100%',
                id: 'tEjwdPJgr',
                layoutId: 'tEjwdPJgr',
                variant: 'wnipua7N_',
                width: '100%',
                ...addPropertyOverrides2({ HsVzRrSdQ: { variant: 'BJYJhvClj', }, }, baseVariant, gestureVariant,),
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css2 = [
  '.framer-imvz1 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-imvz1 .framer-1riatnq { display: block; }',
  '.framer-imvz1 .framer-1w103lv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 0px 5px 0px; position: relative; width: min-content; }',
  '.framer-imvz1 .framer-tggvu4 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '.framer-imvz1 .framer-x4u5ef-container { flex: none; height: auto; position: relative; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-imvz1 .framer-1w103lv { gap: 0px; } .framer-imvz1 .framer-1w103lv > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-imvz1 .framer-1w103lv > :first-child { margin-left: 0px; } .framer-imvz1 .framer-1w103lv > :last-child { margin-right: 0px; } }',
];
var FramerVh4Yb6ijq = withCSS2(Component2, css2, 'framer-imvz1',);
var stdin_default2 = FramerVh4Yb6ijq;
FramerVh4Yb6ijq.displayName = 'Trigger';
FramerVh4Yb6ijq.defaultProps = { height: 40, width: 74.5, };
addPropertyControls2(FramerVh4Yb6ijq, {
  variant: { options: ['J5O7yazVx', 'HsVzRrSdQ',], optionTitles: ['Closed', 'Open',], title: 'Variant', type: ControlType2.Enum, },
  PWSlWeqS6: { title: 'Hover', type: ControlType2.EventHandler, },
  DApvjrdfG: { defaultValue: 'Product', displayTextArea: false, title: 'Title', type: ControlType2.String, },
},);
addFonts2(FramerVh4Yb6ijq, [...CaretFonts,],);

// https :https://framerusercontent.com/modules/h5NWUr2zThL8mxTuFoiD/NNhehG9sR9GaEUzPOHVB/jjuFZlrlF.js
import { jsx as r, jsxs as e, } from 'react/jsx-runtime';
import {
  addFonts as t,
  addPropertyControls as a,
  ControlType as o,
  cx as i,
  RichText as n,
  SVG as d,
  useLocaleInfo as l,
  useVariantState as m,
  withCSS as f,
} from 'unframer';
import { LayoutGroup as s, motion as p, MotionConfigContext as c, } from 'unframer';
import * as h from 'react';
var x = ['uZCDaH7hQ', 'N0A3PIdNr',];
var u = { N0A3PIdNr: 'framer-v-ir5fyw', uZCDaH7hQ: 'framer-v-1vrlqtt', };
function w(r22, ...e22) {
  let t22 = {};
  return null == e22 || e22.forEach((e32,) => e32 && Object.assign(t22, r22[e32],)), t22;
}
var b = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var v = ({ value: e22, children: t22, },) => {
  let a22 = h.useContext(c,),
    o22 = null != e22 ? e22 : a22.transition,
    i22 = h.useMemo(() => ({ ...a22, transition: o22, }), [JSON.stringify(o22,),],);
  return /* @__PURE__ */ r(c.Provider, { value: i22, children: t22, },);
};
var y = { Desktop: 'uZCDaH7hQ', Phone: 'N0A3PIdNr', };
var k = ({ height: r22, id: e22, width: t22, ...a22 },) => {
  var o22, i22;
  return {
    ...a22,
    variant: null !== (i22 = null !== (o22 = y[a22.variant]) && void 0 !== o22 ? o22 : a22.variant) && void 0 !== i22 ? i22 : 'uZCDaH7hQ',
  };
};
var z = (r22, e22,) => e22.join('-',) + r22.layoutDependency;
var I = /* @__PURE__ */ h.forwardRef(function (t22, a22,) {
  let { activeLocale: o22, } = l(),
    { style: f22, className: c22, layoutId: g2, variant: y22, ...I22 } = k(t22,),
    { baseVariant: B22, classNames: N2, gestureVariant: C2, setGestureState: P2, setVariant: D, transition: A, variants: L2, } = m({
      cycleOrder: x,
      defaultVariant: 'uZCDaH7hQ',
      transitions: b,
      variant: y22,
      variantClassNames: u,
    },),
    j2 = z(t22, L2,),
    R = h.useRef(null,),
    H = h.useId();
  return /* @__PURE__ */ r(s, {
    id: null != g2 ? g2 : H,
    children: /* @__PURE__ */ r(p.div, {
      initial: y22,
      animate: L2,
      onHoverStart: () => P2({ isHovered: true, },),
      onHoverEnd: () => P2({ isHovered: false, },),
      onTapStart: () => P2({ isPressed: true, },),
      onTap: () => P2({ isPressed: false, },),
      onTapCancel: () => P2({ isPressed: false, },),
      className: i('framer-zck3B', ...[], N2,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ r(v, {
        value: A,
        children: /* @__PURE__ */ e(p.div, {
          ...I22,
          className: i('framer-1vrlqtt', c22,),
          'data-framer-name': 'Desktop',
          layoutDependency: j2,
          layoutId: 'uZCDaH7hQ',
          ref: null != a22 ? a22 : R,
          style: {
            backgroundColor: 'rgb(255, 255, 255)',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
            ...f22,
          },
          variants: {
            N0A3PIdNr: {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              boxShadow: 'none',
            },
          },
          ...w({ N0A3PIdNr: { 'data-framer-name': 'Phone', }, }, B22, C2,),
          children: [
            'N0A3PIdNr' === B22 && /* @__PURE__ */ r(n, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ r(h.Fragment, {
                children: /* @__PURE__ */ r(p.p, {
                  style: {
                    '--font-selector': 'SW50ZXItTWVkaXVt',
                    '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                    '--framer-font-size': '10px',
                    '--framer-font-weight': '500',
                    '--framer-letter-spacing': '0.05em',
                    '--framer-line-height': '1.5em',
                    '--framer-text-alignment': 'left',
                    '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))',
                  },
                  children: 'PRODUCT',
                },),
              },),
              className: 'framer-1ve15bk',
              fonts: ['Inter-Medium',],
              layoutDependency: j2,
              layoutId: 'YgJr8HIGk',
              style: { '--extracted-r6o4lv': ' rgba(0, 0, 0, 0.4)', '--framer-paragraph-spacing': '0px', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ e(p.div, {
              className: 'framer-t5xhte',
              'data-framer-name': 'Item',
              layoutDependency: j2,
              layoutId: 'adSWSEkT6',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                N0A3PIdNr: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...w({ N0A3PIdNr: { 'data-border': true, }, }, B22, C2,),
              children: [
                'N0A3PIdNr' !== B22 && /* @__PURE__ */ r(d, {
                  className: 'framer-b2a7hg',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: j2,
                  layoutId: 'iHMnlpftH',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 2 4 C 2 2.895 2.895 2 4 2 L 16 2 C 17.105 2 18 2.895 18 4 L 18 16 C 18 17.105 17.105 18 16 18 L 4 18 C 2.895 18 2 17.105 2 16 Z" id="a1008z"></path><clipPath id="a1009z"><use xlink:href="#a1008z"></use></clipPath></defs><use xlink:href="#a1008z" fill="#eee" clip-path="url(#a1009z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 654800981,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r(n, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r(h.Fragment, {
                    children: /* @__PURE__ */ r(p.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Design',
                    },),
                  },),
                  className: 'framer-1f7mcqi',
                  fonts: ['Inter-Medium',],
                  layoutDependency: j2,
                  layoutId: 'BQg47vdb6',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ e(p.div, {
              className: 'framer-1mmnti7',
              'data-framer-name': 'Item',
              layoutDependency: j2,
              layoutId: 'D5lKV1nSA',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                N0A3PIdNr: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...w({ N0A3PIdNr: { 'data-border': true, }, }, B22, C2,),
              children: [
                'N0A3PIdNr' !== B22 && /* @__PURE__ */ r(d, {
                  className: 'framer-1v0p4j4',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: j2,
                  layoutId: 'sF6u1CBNA',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 1 9.975 C 1 5.004 5.029 0.975 10 0.975 L 10 0.975 C 14.971 0.975 19 5.004 19 9.975 L 19 10.025 C 19 14.996 14.971 19.025 10 19.025 L 10 19.025 C 5.029 19.025 1 14.996 1 10.025 Z" id="a1010z"></path><clipPath id="a1011z"><use xlink:href="#a1010z"></use></clipPath></defs><use xlink:href="#a1010z" fill="#eee" clip-path="url(#a1011z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 4220967846,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r(n, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r(h.Fragment, {
                    children: /* @__PURE__ */ r(p.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Content',
                    },),
                  },),
                  className: 'framer-1l6zf46',
                  fonts: ['Inter-Medium',],
                  layoutDependency: j2,
                  layoutId: 'RWgh0VkIt',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ e(p.div, {
              className: 'framer-1pj2d02',
              'data-framer-name': 'Item',
              layoutDependency: j2,
              layoutId: 'cXS_cszVZ',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                N0A3PIdNr: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...w({ N0A3PIdNr: { 'data-border': true, }, }, B22, C2,),
              children: [
                'N0A3PIdNr' !== B22 && /* @__PURE__ */ r(d, {
                  className: 'framer-kxlg0w',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: j2,
                  layoutId: 'PSnaK9HPU',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 8.293 2.293 C 9.073 1.016 10.927 1.016 11.707 2.293 L 19.14 14.457 C 19.955 15.79 18.996 17.5 17.434 17.5 L 2.566 17.5 C 1.004 17.5 0.045 15.79 0.86 14.457 Z" id="a1012z"></path><clipPath id="a1013z"><use xlink:href="#a1012z"></use></clipPath></defs><use xlink:href="#a1012z" fill="#eee" clip-path="url(#a1013z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 896216945,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r(n, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r(h.Fragment, {
                    children: /* @__PURE__ */ r(p.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Publish',
                    },),
                  },),
                  className: 'framer-cdvttv',
                  fonts: ['Inter-Medium',],
                  layoutDependency: j2,
                  layoutId: 'tFlAIv78L',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var B = [
  '.framer-zck3B [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-zck3B .framer-2lmkri { display: block; }',
  '.framer-zck3B .framer-1vrlqtt { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 15px 15px 15px 15px; position: relative; width: 150px; }',
  '.framer-zck3B .framer-1ve15bk { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-zck3B .framer-t5xhte, .framer-zck3B .framer-1mmnti7, .framer-zck3B .framer-1pj2d02 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-zck3B .framer-b2a7hg, .framer-zck3B .framer-1v0p4j4, .framer-zck3B .framer-kxlg0w { flex: none; height: 20px; position: relative; width: 20px; }',
  '.framer-zck3B .framer-1f7mcqi, .framer-zck3B .framer-1l6zf46, .framer-zck3B .framer-cdvttv { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zck3B .framer-1vrlqtt, .framer-zck3B .framer-t5xhte, .framer-zck3B .framer-1mmnti7, .framer-zck3B .framer-1pj2d02 { gap: 0px; } .framer-zck3B .framer-1vrlqtt > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-zck3B .framer-1vrlqtt > :first-child { margin-top: 0px; } .framer-zck3B .framer-1vrlqtt > :last-child { margin-bottom: 0px; } .framer-zck3B .framer-t5xhte > *, .framer-zck3B .framer-1mmnti7 > *, .framer-zck3B .framer-1pj2d02 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-zck3B .framer-t5xhte > :first-child, .framer-zck3B .framer-1mmnti7 > :first-child, .framer-zck3B .framer-1pj2d02 > :first-child { margin-left: 0px; } .framer-zck3B .framer-t5xhte > :last-child, .framer-zck3B .framer-1mmnti7 > :last-child, .framer-zck3B .framer-1pj2d02 > :last-child { margin-right: 0px; } }',
  '.framer-zck3B.framer-v-ir5fyw .framer-1vrlqtt { gap: 0px; padding: 32px 0px 0px 0px; }',
  '.framer-zck3B.framer-v-ir5fyw .framer-1ve15bk { order: 0; }',
  '.framer-zck3B.framer-v-ir5fyw .framer-t5xhte { height: 56px; order: 1; }',
  '.framer-zck3B.framer-v-ir5fyw .framer-1mmnti7 { height: 56px; order: 2; }',
  '.framer-zck3B.framer-v-ir5fyw .framer-1pj2d02 { height: 56px; order: 3; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-zck3B.framer-v-ir5fyw .framer-1vrlqtt { gap: 0px; } .framer-zck3B.framer-v-ir5fyw .framer-1vrlqtt > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-zck3B.framer-v-ir5fyw .framer-1vrlqtt > :first-child { margin-top: 0px; } .framer-zck3B.framer-v-ir5fyw .framer-1vrlqtt > :last-child { margin-bottom: 0px; } }',
];
var N = f(I, B, 'framer-zck3B',);
var stdin_default3 = N;
N.displayName = 'Links: Product',
  N.defaultProps = { height: 107.5, width: 150, },
  a(N, { variant: { options: ['uZCDaH7hQ', 'N0A3PIdNr',], optionTitles: ['Desktop', 'Phone',], title: 'Variant', type: o.Enum, }, },),
  t(N, [],);

// https :https://framerusercontent.com/modules/hP7GepOZhiRUVDuSMzGA/KSmZYjJTpixl4bS9QqHk/pPmogNY6m.js
import { jsx as r2, jsxs as e2, } from 'react/jsx-runtime';
import {
  addFonts as t2,
  addPropertyControls as a2,
  ControlType as o2,
  cx as n2,
  RichText as i2,
  SVG as m2,
  useLocaleInfo as l2,
  useVariantState as d2,
  withCSS as f2,
} from 'unframer';
import { LayoutGroup as s2, motion as p2, MotionConfigContext as c2, } from 'unframer';
import * as x2 from 'react';
var h2 = ['cunCUFy7w', 'IxOUtnrRD',];
var u2 = { cunCUFy7w: 'framer-v-le8ktu', IxOUtnrRD: 'framer-v-wfxc0e', };
function C(r22, ...e22) {
  let t22 = {};
  return null == e22 || e22.forEach((e32,) => e32 && Object.assign(t22, r22[e32],)), t22;
}
var w2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var y2 = ({ value: e22, children: t22, },) => {
  let a22 = x2.useContext(c2,),
    o22 = null != e22 ? e22 : a22.transition,
    n22 = x2.useMemo(() => ({ ...a22, transition: o22, }), [JSON.stringify(o22,),],);
  return /* @__PURE__ */ r2(c2.Provider, { value: n22, children: t22, },);
};
var b2 = { Desktop: 'cunCUFy7w', Phone: 'IxOUtnrRD', };
var v2 = ({ height: r22, id: e22, width: t22, ...a22 },) => {
  var o22, n22;
  return {
    ...a22,
    variant: null !== (n22 = null !== (o22 = b2[a22.variant]) && void 0 !== o22 ? o22 : a22.variant) && void 0 !== n22 ? n22 : 'cunCUFy7w',
  };
};
var k2 = (r22, e22,) => e22.join('-',) + r22.layoutDependency;
var I2 = /* @__PURE__ */ x2.forwardRef(function (t22, a22,) {
  let { activeLocale: o22, } = l2(),
    { style: f22, className: c22, layoutId: g2, variant: b22, ...I22 } = v2(t22,),
    { baseVariant: P2, classNames: B22, gestureVariant: R, setGestureState: D, setVariant: z2, transition: U, variants: L2, } = d2({
      cycleOrder: h2,
      defaultVariant: 'cunCUFy7w',
      transitions: w2,
      variant: b22,
      variantClassNames: u2,
    },),
    O = k2(t22, L2,),
    N2 = x2.useRef(null,),
    M = x2.useId();
  return /* @__PURE__ */ r2(s2, {
    id: null != g2 ? g2 : M,
    children: /* @__PURE__ */ r2(p2.div, {
      initial: b22,
      animate: L2,
      onHoverStart: () => D({ isHovered: true, },),
      onHoverEnd: () => D({ isHovered: false, },),
      onTapStart: () => D({ isPressed: true, },),
      onTap: () => D({ isPressed: false, },),
      onTapCancel: () => D({ isPressed: false, },),
      className: n2('framer-PCCmB', ...[], B22,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ r2(y2, {
        value: U,
        children: /* @__PURE__ */ e2(p2.div, {
          ...I22,
          className: n2('framer-le8ktu', c22,),
          'data-framer-name': 'Desktop',
          layoutDependency: O,
          layoutId: 'cunCUFy7w',
          ref: null != a22 ? a22 : N2,
          style: {
            backgroundColor: 'rgb(255, 255, 255)',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
            ...f22,
          },
          variants: {
            IxOUtnrRD: {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              boxShadow: 'none',
            },
          },
          ...C({ IxOUtnrRD: { 'data-framer-name': 'Phone', }, }, P2, R,),
          children: [
            'IxOUtnrRD' === P2 && /* @__PURE__ */ r2(i2, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ r2(x2.Fragment, {
                children: /* @__PURE__ */ r2(p2.p, {
                  style: {
                    '--font-selector': 'SW50ZXItTWVkaXVt',
                    '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                    '--framer-font-size': '10px',
                    '--framer-font-weight': '500',
                    '--framer-letter-spacing': '0.05em',
                    '--framer-line-height': '1.5em',
                    '--framer-text-alignment': 'left',
                    '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))',
                  },
                  children: 'RESOURCES',
                },),
              },),
              className: 'framer-5sky4z',
              fonts: ['Inter-Medium',],
              layoutDependency: O,
              layoutId: 'Au64Q7mWN',
              style: { '--extracted-r6o4lv': ' rgba(0, 0, 0, 0.4)', '--framer-paragraph-spacing': '0px', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ e2(p2.div, {
              className: 'framer-nd339s',
              'data-framer-name': 'Item',
              layoutDependency: O,
              layoutId: 'Egk6jMivN',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                IxOUtnrRD: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...C({ IxOUtnrRD: { 'data-border': true, }, }, P2, R,),
              children: [
                'IxOUtnrRD' !== P2 && /* @__PURE__ */ r2(m2, {
                  className: 'framer-p4kas6',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: O,
                  layoutId: 't2533aB4G',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 2 4 C 2 2.895 2.895 2 4 2 L 16 2 C 17.105 2 18 2.895 18 4 L 18 16 C 18 17.105 17.105 18 16 18 L 4 18 C 2.895 18 2 17.105 2 16 Z" id="a1008z"></path><clipPath id="a1009z"><use xlink:href="#a1008z"></use></clipPath></defs><use xlink:href="#a1008z" fill="#eee" clip-path="url(#a1009z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 654800981,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r2(i2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r2(x2.Fragment, {
                    children: /* @__PURE__ */ r2(p2.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Blog',
                    },),
                  },),
                  className: 'framer-ovdd64',
                  fonts: ['Inter-Medium',],
                  layoutDependency: O,
                  layoutId: 'MB49xI3wR',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ e2(p2.div, {
              className: 'framer-1n2jgkk',
              'data-framer-name': 'Item',
              layoutDependency: O,
              layoutId: 'flSEiMqwZ',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                IxOUtnrRD: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...C({ IxOUtnrRD: { 'data-border': true, }, }, P2, R,),
              children: [
                'IxOUtnrRD' !== P2 && /* @__PURE__ */ r2(m2, {
                  className: 'framer-1u8hs7b',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: O,
                  layoutId: 'zv8tYaPKO',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 1 9.975 C 1 5.004 5.029 0.975 10 0.975 L 10 0.975 C 14.971 0.975 19 5.004 19 9.975 L 19 10.025 C 19 14.996 14.971 19.025 10 19.025 L 10 19.025 C 5.029 19.025 1 14.996 1 10.025 Z" id="a1010z"></path><clipPath id="a1011z"><use xlink:href="#a1010z"></use></clipPath></defs><use xlink:href="#a1010z" fill="#eee" clip-path="url(#a1011z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 4220967846,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r2(i2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r2(x2.Fragment, {
                    children: /* @__PURE__ */ r2(p2.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Careers',
                    },),
                  },),
                  className: 'framer-1kdtm5o',
                  fonts: ['Inter-Medium',],
                  layoutDependency: O,
                  layoutId: 'in6XOUe7N',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ e2(p2.div, {
              className: 'framer-1cc1oxf',
              'data-framer-name': 'Item',
              layoutDependency: O,
              layoutId: 'eR_1DftMx',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                IxOUtnrRD: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...C({ IxOUtnrRD: { 'data-border': true, }, }, P2, R,),
              children: [
                'IxOUtnrRD' !== P2 && /* @__PURE__ */ r2(m2, {
                  className: 'framer-1hzxmq1',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: O,
                  layoutId: 'eUdkIodfE',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 8.293 2.293 C 9.073 1.016 10.927 1.016 11.707 2.293 L 19.14 14.457 C 19.955 15.79 18.996 17.5 17.434 17.5 L 2.566 17.5 C 1.004 17.5 0.045 15.79 0.86 14.457 Z" id="a1012z"></path><clipPath id="a1013z"><use xlink:href="#a1012z"></use></clipPath></defs><use xlink:href="#a1012z" fill="#eee" clip-path="url(#a1013z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 896216945,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r2(i2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r2(x2.Fragment, {
                    children: /* @__PURE__ */ r2(p2.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Docs',
                    },),
                  },),
                  className: 'framer-lxs6k3',
                  fonts: ['Inter-Medium',],
                  layoutDependency: O,
                  layoutId: 'qW6t5bF_r',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ e2(p2.div, {
              className: 'framer-bdy45h',
              'data-framer-name': 'Item',
              layoutDependency: O,
              layoutId: 'GhlMJbR4K',
              children: [
                'IxOUtnrRD' !== P2 && /* @__PURE__ */ r2(m2, {
                  className: 'framer-58hs3y',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: O,
                  layoutId: 'yV5oTrNiz',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 2 4 C 2 2.895 2.895 2 4 2 L 16 2 C 17.105 2 18 2.895 18 4 L 18 16 C 18 17.105 17.105 18 16 18 L 4 18 C 2.895 18 2 17.105 2 16 Z" id="a1008z"></path><clipPath id="a1009z"><use xlink:href="#a1008z"></use></clipPath></defs><use xlink:href="#a1008z" fill="#eee" clip-path="url(#a1009z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 654800981,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r2(i2, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r2(x2.Fragment, {
                    children: /* @__PURE__ */ r2(p2.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'About',
                    },),
                  },),
                  className: 'framer-12xd3ff',
                  fonts: ['Inter-Medium',],
                  layoutDependency: O,
                  layoutId: 'BR4oQUmcm',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var P = [
  '.framer-PCCmB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-PCCmB .framer-6gargj { display: block; }',
  '.framer-PCCmB .framer-le8ktu { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 15px 15px 15px 15px; position: relative; width: 150px; }',
  '.framer-PCCmB .framer-5sky4z { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-PCCmB .framer-nd339s, .framer-PCCmB .framer-1n2jgkk, .framer-PCCmB .framer-1cc1oxf, .framer-PCCmB .framer-bdy45h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-PCCmB .framer-p4kas6, .framer-PCCmB .framer-1u8hs7b, .framer-PCCmB .framer-1hzxmq1, .framer-PCCmB .framer-58hs3y { flex: none; height: 20px; position: relative; width: 20px; }',
  '.framer-PCCmB .framer-ovdd64, .framer-PCCmB .framer-1kdtm5o, .framer-PCCmB .framer-lxs6k3, .framer-PCCmB .framer-12xd3ff { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PCCmB .framer-le8ktu, .framer-PCCmB .framer-nd339s, .framer-PCCmB .framer-1n2jgkk, .framer-PCCmB .framer-1cc1oxf, .framer-PCCmB .framer-bdy45h { gap: 0px; } .framer-PCCmB .framer-le8ktu > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-PCCmB .framer-le8ktu > :first-child { margin-top: 0px; } .framer-PCCmB .framer-le8ktu > :last-child { margin-bottom: 0px; } .framer-PCCmB .framer-nd339s > *, .framer-PCCmB .framer-1n2jgkk > *, .framer-PCCmB .framer-1cc1oxf > *, .framer-PCCmB .framer-bdy45h > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-PCCmB .framer-nd339s > :first-child, .framer-PCCmB .framer-1n2jgkk > :first-child, .framer-PCCmB .framer-1cc1oxf > :first-child, .framer-PCCmB .framer-bdy45h > :first-child { margin-left: 0px; } .framer-PCCmB .framer-nd339s > :last-child, .framer-PCCmB .framer-1n2jgkk > :last-child, .framer-PCCmB .framer-1cc1oxf > :last-child, .framer-PCCmB .framer-bdy45h > :last-child { margin-right: 0px; } }',
  '.framer-PCCmB.framer-v-wfxc0e .framer-le8ktu { gap: 0px; padding: 32px 0px 0px 0px; }',
  '.framer-PCCmB.framer-v-wfxc0e .framer-nd339s, .framer-PCCmB.framer-v-wfxc0e .framer-1n2jgkk, .framer-PCCmB.framer-v-wfxc0e .framer-1cc1oxf, .framer-PCCmB.framer-v-wfxc0e .framer-bdy45h { height: 56px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-PCCmB.framer-v-wfxc0e .framer-le8ktu { gap: 0px; } .framer-PCCmB.framer-v-wfxc0e .framer-le8ktu > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-PCCmB.framer-v-wfxc0e .framer-le8ktu > :first-child { margin-top: 0px; } .framer-PCCmB.framer-v-wfxc0e .framer-le8ktu > :last-child { margin-bottom: 0px; } }',
];
var B2 = f2(I2, P, 'framer-PCCmB',);
var stdin_default4 = B2;
B2.displayName = 'Links: Resources',
  B2.defaultProps = { height: 135, width: 150, },
  a2(B2, { variant: { options: ['cunCUFy7w', 'IxOUtnrRD',], optionTitles: ['Desktop', 'Phone',], title: 'Variant', type: o2.Enum, }, },),
  t2(B2, [],);

// https :https://framerusercontent.com/modules/JQRKwZv6rgdZ4OfkcuSU/45PpCkD31n6caHb3DNDn/dQcuWx460.js
import { jsx as r3, jsxs as e3, } from 'react/jsx-runtime';
import {
  addFonts as t3,
  addPropertyControls as a3,
  ControlType as i3,
  cx as o3,
  RichText as n3,
  SVG as f3,
  useLocaleInfo as l3,
  useVariantState as m3,
  withCSS as d3,
} from 'unframer';
import { LayoutGroup as s3, motion as p3, MotionConfigContext as c3, } from 'unframer';
import * as h3 from 'react';
var g = ['Q3MjAIjCQ', 'Y2WpHXJS3',];
var u3 = { Q3MjAIjCQ: 'framer-v-19utmf1', Y2WpHXJS3: 'framer-v-g9ipt1', };
function v3(r22, ...e22) {
  let t22 = {};
  return null == e22 || e22.forEach((e32,) => e32 && Object.assign(t22, r22[e32],)), t22;
}
var w3 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var b3 = ({ value: e22, children: t22, },) => {
  let a22 = h3.useContext(c3,),
    i22 = null != e22 ? e22 : a22.transition,
    o22 = h3.useMemo(() => ({ ...a22, transition: i22, }), [JSON.stringify(i22,),],);
  return /* @__PURE__ */ r3(c3.Provider, { value: o22, children: t22, },);
};
var y3 = { Desktop: 'Q3MjAIjCQ', Phone: 'Y2WpHXJS3', };
var j = ({ height: r22, id: e22, width: t22, ...a22 },) => {
  var i22, o22;
  return {
    ...a22,
    variant: null !== (o22 = null !== (i22 = y3[a22.variant]) && void 0 !== i22 ? i22 : a22.variant) && void 0 !== o22 ? o22 : 'Q3MjAIjCQ',
  };
};
var X = (r22, e22,) => e22.join('-',) + r22.layoutDependency;
var L = /* @__PURE__ */ h3.forwardRef(function (t22, a22,) {
  let { activeLocale: i22, } = l3(),
    { style: d22, className: c22, layoutId: x22, variant: y22, ...L2 } = j(t22,),
    { baseVariant: k22, classNames: I22, gestureVariant: C2, setGestureState: S, setVariant: W, transition: z2, variants: M, } = m3({
      cycleOrder: g,
      defaultVariant: 'Q3MjAIjCQ',
      transitions: w3,
      variant: y22,
      variantClassNames: u3,
    },),
    H = X(t22, M,),
    N2 = h3.useRef(null,),
    D = h3.useId();
  return /* @__PURE__ */ r3(s3, {
    id: null != x22 ? x22 : D,
    children: /* @__PURE__ */ r3(p3.div, {
      initial: y22,
      animate: M,
      onHoverStart: () => S({ isHovered: true, },),
      onHoverEnd: () => S({ isHovered: false, },),
      onTapStart: () => S({ isPressed: true, },),
      onTap: () => S({ isPressed: false, },),
      onTapCancel: () => S({ isPressed: false, },),
      className: o3('framer-f2jLX', ...[], I22,),
      style: { display: 'contents', },
      children: /* @__PURE__ */ r3(b3, {
        value: z2,
        children: /* @__PURE__ */ e3(p3.div, {
          ...L2,
          className: o3('framer-19utmf1', c22,),
          'data-framer-name': 'Desktop',
          layoutDependency: H,
          layoutId: 'Q3MjAIjCQ',
          ref: null != a22 ? a22 : N2,
          style: {
            backgroundColor: 'rgb(255, 255, 255)',
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05)',
            ...d22,
          },
          variants: {
            Y2WpHXJS3: {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              boxShadow: 'none',
            },
          },
          ...v3({ Y2WpHXJS3: { 'data-framer-name': 'Phone', }, }, k22, C2,),
          children: [
            'Y2WpHXJS3' === k22 && /* @__PURE__ */ r3(n3, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ r3(h3.Fragment, {
                children: /* @__PURE__ */ r3(p3.p, {
                  style: {
                    '--font-selector': 'SW50ZXItTWVkaXVt',
                    '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                    '--framer-font-size': '10px',
                    '--framer-font-weight': '500',
                    '--framer-letter-spacing': '0.05em',
                    '--framer-line-height': '1.5em',
                    '--framer-text-alignment': 'left',
                    '--framer-text-color': 'var(--extracted-r6o4lv, rgba(0, 0, 0, 0.4))',
                  },
                  children: 'COMMUNITY',
                },),
              },),
              className: 'framer-1lgw8u',
              fonts: ['Inter-Medium',],
              layoutDependency: H,
              layoutId: 'Eogqh0qIK',
              style: { '--extracted-r6o4lv': ' rgba(0, 0, 0, 0.4)', '--framer-paragraph-spacing': '0px', },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ e3(p3.div, {
              className: 'framer-164ig7f',
              'data-framer-name': 'Item',
              layoutDependency: H,
              layoutId: 'aWUs5ruMr',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                Y2WpHXJS3: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...v3({ Y2WpHXJS3: { 'data-border': true, }, }, k22, C2,),
              children: [
                'Y2WpHXJS3' !== k22 && /* @__PURE__ */ r3(f3, {
                  className: 'framer-1tqbsh7',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: H,
                  layoutId: 'AQNa0SNao',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 2 4 C 2 2.895 2.895 2 4 2 L 16 2 C 17.105 2 18 2.895 18 4 L 18 16 C 18 17.105 17.105 18 16 18 L 4 18 C 2.895 18 2 17.105 2 16 Z" id="a1008z"></path><clipPath id="a1009z"><use xlink:href="#a1008z"></use></clipPath></defs><use xlink:href="#a1008z" fill="#eee" clip-path="url(#a1009z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 654800981,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r3(n3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r3(h3.Fragment, {
                    children: /* @__PURE__ */ r3(p3.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Join',
                    },),
                  },),
                  className: 'framer-1xtasqv',
                  fonts: ['Inter-Medium',],
                  layoutDependency: H,
                  layoutId: 'WLGNsECg7',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ e3(p3.div, {
              className: 'framer-125x0lh',
              'data-framer-name': 'Item',
              layoutDependency: H,
              layoutId: 'dy4X8iLm3',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(0, 0, 0, 0)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '0px',
              },
              variants: {
                Y2WpHXJS3: {
                  '--border-bottom-width': '1px',
                  '--border-color': 'rgb(238, 238, 238)',
                  '--border-left-width': '0px',
                  '--border-right-width': '0px',
                  '--border-style': 'solid',
                  '--border-top-width': '0px',
                },
              },
              ...v3({ Y2WpHXJS3: { 'data-border': true, }, }, k22, C2,),
              children: [
                'Y2WpHXJS3' !== k22 && /* @__PURE__ */ r3(f3, {
                  className: 'framer-2a6x60',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: H,
                  layoutId: 'uWlHDNs96',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 1 9.975 C 1 5.004 5.029 0.975 10 0.975 L 10 0.975 C 14.971 0.975 19 5.004 19 9.975 L 19 10.025 C 19 14.996 14.971 19.025 10 19.025 L 10 19.025 C 5.029 19.025 1 14.996 1 10.025 Z" id="a1010z"></path><clipPath id="a1011z"><use xlink:href="#a1010z"></use></clipPath></defs><use xlink:href="#a1010z" fill="#eee" clip-path="url(#a1011z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 4220967846,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r3(n3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r3(h3.Fragment, {
                    children: /* @__PURE__ */ r3(p3.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Events',
                    },),
                  },),
                  className: 'framer-s9zcxv',
                  fonts: ['Inter-Medium',],
                  layoutDependency: H,
                  layoutId: 'vbSOk1cgp',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ e3(p3.div, {
              className: 'framer-kcl4i2',
              'data-framer-name': 'Item',
              layoutDependency: H,
              layoutId: 'B8BD2khMc',
              children: [
                'Y2WpHXJS3' !== k22 && /* @__PURE__ */ r3(f3, {
                  className: 'framer-y3qvp6',
                  'data-framer-name': 'Icon',
                  layout: 'position',
                  layoutDependency: H,
                  layoutId: 'exO5YZjKv',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20"><g><defs><path d="M 8.293 2.293 C 9.073 1.016 10.927 1.016 11.707 2.293 L 19.14 14.457 C 19.955 15.79 18.996 17.5 17.434 17.5 L 2.566 17.5 C 1.004 17.5 0.045 15.79 0.86 14.457 Z" id="a1012z"></path><clipPath id="a1013z"><use xlink:href="#a1012z"></use></clipPath></defs><use xlink:href="#a1012z" fill="#eee" clip-path="url(#a1013z)" stroke-width="2" stroke="#ccc"></use></g></svg>',
                  svgContentId: 896216945,
                  withExternalLayout: true,
                },),
                /* @__PURE__ */ r3(n3, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ r3(h3.Fragment, {
                    children: /* @__PURE__ */ r3(p3.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter-Medium", "Inter", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '1.5em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                      },
                      children: 'Experts',
                    },),
                  },),
                  className: 'framer-1ig4z3x',
                  fonts: ['Inter-Medium',],
                  layoutDependency: H,
                  layoutId: 'CqjtBaOrJ',
                  style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
          ],
        },),
      },),
    },),
  },);
},);
var k3 = [
  '.framer-f2jLX [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-f2jLX .framer-fe5c7g { display: block; }',
  '.framer-f2jLX .framer-19utmf1 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; padding: 15px 15px 15px 15px; position: relative; width: 150px; }',
  '.framer-f2jLX .framer-1lgw8u { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-f2jLX .framer-164ig7f, .framer-f2jLX .framer-125x0lh, .framer-f2jLX .framer-kcl4i2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-f2jLX .framer-1tqbsh7, .framer-f2jLX .framer-2a6x60, .framer-f2jLX .framer-y3qvp6 { flex: none; height: 20px; position: relative; width: 20px; }',
  '.framer-f2jLX .framer-1xtasqv, .framer-f2jLX .framer-s9zcxv, .framer-f2jLX .framer-1ig4z3x { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-f2jLX .framer-19utmf1, .framer-f2jLX .framer-164ig7f, .framer-f2jLX .framer-125x0lh, .framer-f2jLX .framer-kcl4i2 { gap: 0px; } .framer-f2jLX .framer-19utmf1 > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-f2jLX .framer-19utmf1 > :first-child { margin-top: 0px; } .framer-f2jLX .framer-19utmf1 > :last-child { margin-bottom: 0px; } .framer-f2jLX .framer-164ig7f > *, .framer-f2jLX .framer-125x0lh > *, .framer-f2jLX .framer-kcl4i2 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-f2jLX .framer-164ig7f > :first-child, .framer-f2jLX .framer-125x0lh > :first-child, .framer-f2jLX .framer-kcl4i2 > :first-child { margin-left: 0px; } .framer-f2jLX .framer-164ig7f > :last-child, .framer-f2jLX .framer-125x0lh > :last-child, .framer-f2jLX .framer-kcl4i2 > :last-child { margin-right: 0px; } }',
  '.framer-f2jLX.framer-v-g9ipt1 .framer-19utmf1 { gap: 0px; padding: 32px 0px 0px 0px; }',
  '.framer-f2jLX.framer-v-g9ipt1 .framer-164ig7f, .framer-f2jLX.framer-v-g9ipt1 .framer-125x0lh, .framer-f2jLX.framer-v-g9ipt1 .framer-kcl4i2 { height: 56px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-f2jLX.framer-v-g9ipt1 .framer-19utmf1 { gap: 0px; } .framer-f2jLX.framer-v-g9ipt1 .framer-19utmf1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-f2jLX.framer-v-g9ipt1 .framer-19utmf1 > :first-child { margin-top: 0px; } .framer-f2jLX.framer-v-g9ipt1 .framer-19utmf1 > :last-child { margin-bottom: 0px; } }',
];
var I3 = d3(L, k3, 'framer-f2jLX',);
var stdin_default5 = I3;
I3.displayName = 'Links: Community',
  I3.defaultProps = { height: 107.5, width: 150, },
  a3(I3, { variant: { options: ['Q3MjAIjCQ', 'Y2WpHXJS3',], optionTitles: ['Desktop', 'Phone',], title: 'Variant', type: i3.Enum, }, },),
  t3(I3, [],);

// https :https://framerusercontent.com/modules/xtnjNhwUCFkZEnWMUsa6/yP9cBABIddxlXhfvw3qN/yS_JadFF6.js
var TriggerFonts = getFonts2(stdin_default2,);
var LinksProductFonts = getFonts2(stdin_default3,);
var MotionDivWithFX = withFX(motion3.div,);
var LinksResourcesFonts = getFonts2(stdin_default4,);
var LinksCommunityFonts = getFonts2(stdin_default5,);
var cycleOrder3 = ['yOOfrKCpM', 'QPRMNhp2_', 'hDjcIqUXB',];
var serializationHash = 'framer-hep1K';
var variantClassNames3 = { hDjcIqUXB: 'framer-v-1ginw8b', QPRMNhp2_: 'framer-v-1kmw1up', yOOfrKCpM: 'framer-v-10g55a4', };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var transition2 = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: 'spring', };
var transition3 = { damping: 40, delay: 0, mass: 0.5, stiffness: 600, type: 'spring', };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.95, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0, };
var animation1 = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 0, };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 0.95, skewX: 0, skewY: 0, x: 0, y: 0, };
var Overlay = ({ children, blockDocumentScrolling, enabled = true, },) => {
  const [visible, setVisible,] = useOverlayState({ blockDocumentScrolling, },);
  return children({
    hide: () => setVisible(false,),
    show: () => setVisible(true,),
    toggle: () => setVisible(!visible,),
    visible: enabled && visible,
  },);
};
var Transition3 = ({ value, children, },) => {
  const config = React3.useContext(MotionConfigContext3,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, { value: contextValue, children, },);
};
var Variants = motion3(React3.Fragment,);
var humanReadableVariantMap3 = { 'Phone Open': 'hDjcIqUXB', Desktop: 'yOOfrKCpM', Phone: 'QPRMNhp2_', };
var getProps3 = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap3[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'yOOfrKCpM',
  };
};
var createLayoutDependency3 = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component3 = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo3();
  const { style, className, layoutId, variant, ...restProps } = getProps3(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState3({
    cycleOrder: cycleOrder3,
    defaultVariant: 'yOOfrKCpM',
    variant,
    variantClassNames: variantClassNames3,
  },);
  const layoutDependency = createLayoutDependency3(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback2(baseVariant,);
  const onTap1um06c = activeVariantCallback(async (...args) => {
    setVariant('hDjcIqUXB',);
  },);
  const onTap7w1svt = activeVariantCallback(async (...args) => {
    setVariant('QPRMNhp2_',);
  },);
  const hover1gx595p = (overlay,) =>
    activeVariantCallback(async (...args) => {
      overlay.show();
    },);
  const ref1 = React3.useRef(null,);
  const isDisplayed = () => {
    if (['QPRMNhp2_', 'hDjcIqUXB',].includes(baseVariant,)) {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (['QPRMNhp2_', 'hDjcIqUXB',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const ref2 = React3.useRef(null,);
  const ref3 = React3.useRef(null,);
  const ref4 = React3.useRef(null,);
  const ref5 = React3.useRef(null,);
  const ref6 = React3.useRef(null,);
  const ref7 = React3.useRef(null,);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx3(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition3, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs2(motion3.nav, {
          ...restProps,
          className: cx3(serializationHash, ...sharedStyleClassNames, 'framer-10g55a4', className, classNames,),
          'data-border': true,
          'data-framer-name': 'Desktop',
          'data-hide-scrollbars': true,
          layoutDependency,
          layoutId: 'yOOfrKCpM',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            '--border-bottom-width': '1px',
            '--border-color': 'rgba(0, 0, 0, 0.07)',
            '--border-left-width': '0px',
            '--border-right-width': '0px',
            '--border-style': 'solid',
            '--border-top-width': '0px',
            backgroundColor: 'rgb(255, 255, 255)',
            ...style,
          },
          variants: {
            hDjcIqUXB: {
              '--border-bottom-width': '0px',
              '--border-left-width': '0px',
              '--border-right-width': '0px',
              '--border-top-width': '0px',
            },
          },
          ...addPropertyOverrides3(
            { hDjcIqUXB: { 'data-framer-name': 'Phone Open', }, QPRMNhp2_: { 'data-framer-name': 'Phone', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsxs2(motion3.div, {
              className: 'framer-1pq0gfc',
              'data-framer-name': 'Name',
              layoutDependency,
              layoutId: 'U6qsEJI7c',
              ...addPropertyOverrides3(
                { hDjcIqUXB: { 'data-highlight': true, onTap: onTap7w1svt, }, QPRMNhp2_: { 'data-highlight': true, onTap: onTap1um06c, }, },
                baseVariant,
                gestureVariant,
              ),
              children: [
                /* @__PURE__ */ _jsxs2(motion3.div, {
                  className: 'framer-1ddoafb',
                  'data-framer-name': 'Logo and Name',
                  layoutDependency,
                  layoutId: 'Z_LXdULGA',
                  children: [
                    /* @__PURE__ */ _jsx3(SVG2, {
                      className: 'framer-1sq50sh',
                      'data-framer-name': 'Logo',
                      description: 'An SVG icon of the Framer Logo.',
                      layout: 'position',
                      layoutDependency,
                      layoutId: 'xPvDqkrr_',
                      opacity: 1,
                      svg:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 24"><path d="M 16 0 L 16 8 L 8 8 L 0 0 Z M 0 8 L 8 8 L 16 16 L 8 16 L 8 24 L 0 16 Z" fill="hsl(0, 0%, 0%)"></path></svg>',
                      svgContentId: 1513465887,
                      title: 'Framer Logo',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsx3(SVG2, {
                      className: 'framer-1l9nmrq',
                      'data-framer-name': 'Framer',
                      layout: 'position',
                      layoutDependency,
                      layoutId: 'vTF4F3TL7',
                      opacity: 1,
                      svg:
                        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 52 13"><path d="M -0.052 12 L -0.052 1.09 L 7.171 1.09 L 7.171 2.993 L 2.255 2.993 L 2.255 5.592 L 6.692 5.592 L 6.692 7.494 L 2.255 7.494 L 2.255 12 Z M 8.398 12 L 8.398 3.818 L 10.598 3.818 L 10.598 5.246 L 10.683 5.246 C 10.833 4.738 11.083 4.354 11.434 4.096 C 11.784 3.833 12.212 3.693 12.65 3.7 C 12.89 3.702 13.129 3.728 13.364 3.78 L 13.364 5.793 C 13.219 5.754 13.071 5.725 12.922 5.708 C 12.751 5.684 12.578 5.672 12.405 5.671 C 12.071 5.671 11.773 5.744 11.51 5.889 C 11.25 6.031 11.045 6.23 10.892 6.486 C 10.742 6.742 10.668 7.036 10.668 7.37 L 10.668 12 Z M 17.02 12.133 C 16.398 12.133 15.836 11.973 15.331 11.653 C 14.831 11.331 14.433 10.857 14.138 10.232 C 13.847 9.603 13.701 8.832 13.701 7.92 C 13.701 6.982 13.852 6.203 14.154 5.581 C 14.456 4.956 14.857 4.489 15.358 4.181 C 15.855 3.87 16.429 3.707 17.015 3.711 C 17.473 3.711 17.855 3.79 18.16 3.946 C 18.469 4.099 18.717 4.29 18.905 4.521 C 19.097 4.749 19.243 4.972 19.342 5.192 L 19.412 5.192 L 19.412 3.818 L 21.675 3.818 L 21.675 12 L 19.438 12 L 19.438 10.69 L 19.342 10.69 C 19.224 10.935 19.071 11.163 18.89 11.366 C 18.68 11.599 18.424 11.786 18.138 11.915 C 17.833 12.06 17.46 12.133 17.02 12.133 Z M 17.739 10.327 C 18.105 10.327 18.414 10.228 18.666 10.029 C 18.922 9.827 19.116 9.544 19.252 9.182 C 19.39 8.82 19.459 8.396 19.459 7.909 C 19.459 7.423 19.392 7 19.257 6.641 C 19.122 6.283 18.927 6.006 18.671 5.811 C 18.416 5.615 18.105 5.517 17.739 5.517 C 17.366 5.517 17.052 5.619 16.796 5.821 C 16.541 6.023 16.346 6.304 16.216 6.663 C 16.077 7.064 16.01 7.485 16.018 7.909 C 16.018 8.385 16.084 8.806 16.215 9.172 C 16.351 9.534 16.544 9.818 16.796 10.024 C 17.052 10.226 17.366 10.327 17.739 10.327 Z M 23.391 12 L 23.391 3.818 L 25.554 3.818 L 25.554 5.262 L 25.65 5.262 C 25.82 4.782 26.104 4.404 26.502 4.127 C 26.9 3.85 27.375 3.712 27.929 3.712 C 28.491 3.712 28.969 3.852 29.362 4.132 C 29.757 4.409 30.019 4.786 30.151 5.262 L 30.236 5.262 C 30.403 4.793 30.705 4.418 31.141 4.138 C 31.581 3.854 32.102 3.712 32.702 3.712 C 33.466 3.712 34.085 3.955 34.562 4.442 C 35.041 4.924 35.28 5.61 35.28 6.498 L 35.28 12 L 33.016 12 L 33.016 6.945 C 33.016 6.49 32.896 6.149 32.654 5.922 C 32.409 5.694 32.084 5.572 31.749 5.582 C 31.337 5.582 31.015 5.712 30.785 5.976 C 30.554 6.235 30.438 6.577 30.438 7.004 L 30.438 12 L 28.238 12 L 28.238 6.897 C 28.238 6.496 28.123 6.177 27.892 5.938 C 27.665 5.7 27.365 5.581 26.992 5.581 C 26.74 5.581 26.512 5.645 26.31 5.773 C 26.111 5.897 25.953 6.073 25.836 6.3 C 25.714 6.545 25.653 6.816 25.66 7.089 L 25.66 12 Z M 40.651 12.16 C 39.81 12.16 39.085 11.99 38.478 11.648 C 37.88 11.309 37.395 10.801 37.083 10.188 C 36.756 9.557 36.593 8.809 36.593 7.946 C 36.593 7.105 36.756 6.366 37.083 5.73 C 37.392 5.113 37.871 4.598 38.463 4.244 C 39.059 3.889 39.758 3.712 40.561 3.712 C 41.101 3.712 41.603 3.799 42.068 3.972 C 42.538 4.143 42.946 4.401 43.294 4.745 C 43.645 5.089 43.919 5.523 44.114 6.045 C 44.309 6.563 44.407 7.17 44.407 7.866 L 44.407 8.49 L 37.498 8.49 L 37.498 7.083 L 42.271 7.083 C 42.277 6.78 42.203 6.481 42.058 6.215 C 41.92 5.967 41.714 5.762 41.466 5.624 C 41.202 5.474 40.902 5.399 40.598 5.406 C 40.254 5.406 39.948 5.486 39.682 5.646 C 39.423 5.798 39.21 6.017 39.064 6.279 C 38.913 6.547 38.834 6.85 38.835 7.158 L 38.835 8.495 C 38.835 8.9 38.91 9.25 39.059 9.545 C 39.211 9.839 39.426 10.066 39.703 10.226 C 39.98 10.386 40.309 10.466 40.689 10.466 C 40.941 10.466 41.172 10.43 41.381 10.359 C 41.788 10.228 42.112 9.918 42.26 9.517 L 44.359 9.657 C 44.259 10.147 44.034 10.602 43.704 10.977 C 43.377 11.35 42.954 11.641 42.436 11.851 C 41.921 12.057 41.326 12.16 40.651 12.16 Z M 45.738 12 L 45.738 3.818 L 47.938 3.818 L 47.938 5.246 L 48.023 5.246 C 48.172 4.738 48.423 4.354 48.773 4.096 C 49.123 3.833 49.55 3.694 49.988 3.701 C 50.228 3.703 50.467 3.729 50.702 3.781 L 50.702 5.794 C 50.557 5.755 50.409 5.726 50.26 5.709 C 50.089 5.685 49.916 5.673 49.743 5.672 C 49.409 5.672 49.111 5.745 48.848 5.89 C 48.592 6.029 48.378 6.236 48.231 6.487 C 48.081 6.743 48.007 7.037 48.007 7.371 L 48.007 12 L 45.737 12 Z" fill="rgb(0,0,0)"></path></svg>',
                      svgContentId: 2408771013,
                      withExternalLayout: true,
                    },),
                  ],
                },),
                isDisplayed() && /* @__PURE__ */ _jsxs2(motion3.div, {
                  className: 'framer-1wf04mx',
                  'data-framer-name': 'Icon',
                  layoutDependency,
                  layoutId: 'hZHPViAtF',
                  children: [
                    /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-1f254vm',
                      'data-framer-name': 'Bottom',
                      layoutDependency,
                      layoutId: 'p3GObQ2jz',
                      style: {
                        backgroundColor: 'rgb(153, 153, 153)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        rotate: 0,
                      },
                      variants: { hDjcIqUXB: { rotate: -45, }, },
                    },),
                    /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-4d8cu3',
                      'data-framer-name': 'Top',
                      layoutDependency,
                      layoutId: 'bxWd0dcZT',
                      style: {
                        backgroundColor: 'rgb(153, 153, 153)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        rotate: 0,
                      },
                      variants: { hDjcIqUXB: { rotate: 45, }, },
                    },),
                  ],
                },),
              ],
            },),
            /* @__PURE__ */ _jsx3(Transition3, {
              ...addPropertyOverrides3(
                { hDjcIqUXB: { value: transition2, }, QPRMNhp2_: { value: transition2, }, },
                baseVariant,
                gestureVariant,
              ),
              children: /* @__PURE__ */ _jsxs2(motion3.div, {
                className: 'framer-8k9dyu',
                'data-framer-name': 'Links',
                layoutDependency,
                layoutId: 'HOopjNCVn',
                style: { opacity: 1, },
                variants: { QPRMNhp2_: { opacity: 0, }, },
                children: [
                  isDisplayed1() && /* @__PURE__ */ _jsx3(Overlay, {
                    blockDocumentScrolling: false,
                    children: (overlay,) =>
                      /* @__PURE__ */ _jsx3(_Fragment, {
                        children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsxs2(motion3.div, {
                            className: 'framer-hzqpua-container',
                            'data-framer-name': 'Trigger',
                            id: `${layoutId}-hzqpua`,
                            layoutDependency,
                            layoutId: 'qL45j55az-container',
                            name: 'Trigger',
                            ref: ref2,
                            children: [
                              /* @__PURE__ */ _jsx3(stdin_default2, {
                                height: '100%',
                                hover: hover1gx595p(overlay,),
                                id: 'qL45j55az',
                                layoutId: 'qL45j55az',
                                name: 'Trigger',
                                title: 'Product',
                                variant: overlay.visible ? 'HsVzRrSdQ' : 'J5O7yazVx',
                                width: '100%',
                              },),
                              /* @__PURE__ */ _jsx3(AnimatePresence, {
                                children: overlay.visible && /* @__PURE__ */ _jsx3(Floating, {
                                  alignment: 'center',
                                  anchorRef: ref2,
                                  className: cx3(serializationHash, classNames, ...sharedStyleClassNames,),
                                  collisionDetection: false,
                                  'data-framer-portal-id': `${layoutId}-hzqpua`,
                                  offsetX: 0,
                                  offsetY: 30,
                                  onDismiss: overlay.hide,
                                  placement: 'bottom',
                                  portalSelector: '#overlay',
                                  safeArea: true,
                                  children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                                    children: /* @__PURE__ */ _jsx3(MotionDivWithFX, {
                                      __perspectiveFX: false,
                                      __smartComponentFX: true,
                                      __targetOpacity: 1,
                                      animate: animation1,
                                      className: 'framer-16hxb9w-container',
                                      exit: animation,
                                      initial: animation2,
                                      layoutDependency,
                                      layoutId: 'Cf7nF5oza-container',
                                      ref: ref3,
                                      role: 'dialog',
                                      style: { transformPerspective: 1200, },
                                      children: /* @__PURE__ */ _jsx3(stdin_default3, {
                                        height: '100%',
                                        id: 'Cf7nF5oza',
                                        layoutId: 'Cf7nF5oza',
                                        style: { width: '100%', },
                                        variant: 'uZCDaH7hQ',
                                        width: '100%',
                                      },),
                                    },),
                                  },),
                                },),
                              },),
                            ],
                          },),
                        },),
                      },),
                  },),
                  isDisplayed1() && /* @__PURE__ */ _jsx3(Overlay, {
                    blockDocumentScrolling: false,
                    children: (overlay1,) =>
                      /* @__PURE__ */ _jsx3(_Fragment, {
                        children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsxs2(motion3.div, {
                            className: 'framer-1nzo7y4-container',
                            id: `${layoutId}-1nzo7y4`,
                            layoutDependency,
                            layoutId: 'EyjFwtXlA-container',
                            ref: ref4,
                            children: [
                              /* @__PURE__ */ _jsx3(stdin_default2, {
                                height: '100%',
                                hover: hover1gx595p(overlay1,),
                                id: 'EyjFwtXlA',
                                layoutId: 'EyjFwtXlA',
                                title: 'Resources',
                                variant: overlay1.visible ? 'HsVzRrSdQ' : 'J5O7yazVx',
                                width: '100%',
                              },),
                              /* @__PURE__ */ _jsx3(AnimatePresence, {
                                children: overlay1.visible && /* @__PURE__ */ _jsx3(Floating, {
                                  alignment: 'center',
                                  anchorRef: ref4,
                                  className: cx3(serializationHash, classNames, ...sharedStyleClassNames,),
                                  collisionDetection: false,
                                  'data-framer-portal-id': `${layoutId}-1nzo7y4`,
                                  offsetX: 0,
                                  offsetY: 30,
                                  onDismiss: overlay1.hide,
                                  placement: 'bottom',
                                  portalSelector: '#overlay',
                                  safeArea: true,
                                  children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                                    children: /* @__PURE__ */ _jsx3(MotionDivWithFX, {
                                      __perspectiveFX: false,
                                      __smartComponentFX: true,
                                      __targetOpacity: 1,
                                      animate: animation1,
                                      className: 'framer-1qveo1g-container',
                                      exit: animation,
                                      initial: animation2,
                                      layoutDependency,
                                      layoutId: 'h9mKB4YKc-container',
                                      ref: ref5,
                                      role: 'dialog',
                                      style: { transformPerspective: 1200, },
                                      children: /* @__PURE__ */ _jsx3(stdin_default4, {
                                        height: '100%',
                                        id: 'h9mKB4YKc',
                                        layoutId: 'h9mKB4YKc',
                                        style: { width: '100%', },
                                        variant: 'cunCUFy7w',
                                        width: '100%',
                                      },),
                                    },),
                                  },),
                                },),
                              },),
                            ],
                          },),
                        },),
                      },),
                  },),
                  isDisplayed1() && /* @__PURE__ */ _jsx3(Overlay, {
                    blockDocumentScrolling: false,
                    children: (overlay2,) =>
                      /* @__PURE__ */ _jsx3(_Fragment, {
                        children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsxs2(motion3.div, {
                            className: 'framer-7rmtze-container',
                            id: `${layoutId}-7rmtze`,
                            layoutDependency,
                            layoutId: 'JIPcnQOkG-container',
                            ref: ref6,
                            children: [
                              /* @__PURE__ */ _jsx3(stdin_default2, {
                                height: '100%',
                                hover: hover1gx595p(overlay2,),
                                id: 'JIPcnQOkG',
                                layoutId: 'JIPcnQOkG',
                                title: 'Community',
                                variant: overlay2.visible ? 'HsVzRrSdQ' : 'J5O7yazVx',
                                width: '100%',
                              },),
                              /* @__PURE__ */ _jsx3(AnimatePresence, {
                                children: overlay2.visible && /* @__PURE__ */ _jsx3(Floating, {
                                  alignment: 'center',
                                  anchorRef: ref6,
                                  className: cx3(serializationHash, classNames, ...sharedStyleClassNames,),
                                  collisionDetection: false,
                                  'data-framer-portal-id': `${layoutId}-7rmtze`,
                                  offsetX: 0,
                                  offsetY: 30,
                                  onDismiss: overlay2.hide,
                                  placement: 'bottom',
                                  portalSelector: '#overlay',
                                  safeArea: true,
                                  children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                                    children: /* @__PURE__ */ _jsx3(MotionDivWithFX, {
                                      __perspectiveFX: false,
                                      __smartComponentFX: true,
                                      __targetOpacity: 1,
                                      animate: animation1,
                                      className: 'framer-17tluv9-container',
                                      exit: animation,
                                      initial: animation2,
                                      layoutDependency,
                                      layoutId: 'cgQkLiR1h-container',
                                      ref: ref7,
                                      role: 'dialog',
                                      style: { transformPerspective: 1200, },
                                      children: /* @__PURE__ */ _jsx3(stdin_default5, {
                                        height: '100%',
                                        id: 'cgQkLiR1h',
                                        layoutId: 'cgQkLiR1h',
                                        style: { width: '100%', },
                                        variant: 'Q3MjAIjCQ',
                                        width: '100%',
                                      },),
                                    },),
                                  },),
                                },),
                              },),
                            ],
                          },),
                        },),
                      },),
                  },),
                  /* @__PURE__ */ _jsx3(motion3.div, {
                    className: 'framer-t5v5k9',
                    'data-framer-name': 'Inline Link',
                    layoutDependency,
                    layoutId: 'VdbhkpJR9',
                    style: {
                      '--border-bottom-width': '0px',
                      '--border-color': 'rgba(0, 0, 0, 0)',
                      '--border-left-width': '0px',
                      '--border-right-width': '0px',
                      '--border-style': 'solid',
                      '--border-top-width': '0px',
                    },
                    variants: {
                      hDjcIqUXB: {
                        '--border-bottom-width': '1px',
                        '--border-color': 'rgb(238, 238, 238)',
                        '--border-left-width': '0px',
                        '--border-right-width': '0px',
                        '--border-style': 'solid',
                        '--border-top-width': '0px',
                      },
                      QPRMNhp2_: {
                        '--border-bottom-width': '1px',
                        '--border-color': 'rgb(238, 238, 238)',
                        '--border-left-width': '0px',
                        '--border-right-width': '0px',
                        '--border-style': 'solid',
                        '--border-top-width': '0px',
                      },
                    },
                    ...addPropertyOverrides3(
                      { hDjcIqUXB: { 'data-border': true, }, QPRMNhp2_: { 'data-border': true, }, },
                      baseVariant,
                      gestureVariant,
                    ),
                    children: /* @__PURE__ */ _jsx3(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                        children: /* @__PURE__ */ _jsx3(motion3.p, {
                          style: {
                            '--font-selector': 'SW50ZXItTWVkaXVt',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-size': '15px',
                            '--framer-font-weight': '500',
                            '--framer-letter-spacing': '-0.01em',
                            '--framer-line-height': '2em',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                          },
                          children: 'Changelog',
                        },),
                      },),
                      className: 'framer-70vlo6',
                      fonts: ['Inter-Medium',],
                      layoutDependency,
                      layoutId: 'HgerG3_gx',
                      style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                      ...addPropertyOverrides3(
                        { hDjcIqUXB: { verticalAlignment: 'center', }, QPRMNhp2_: { verticalAlignment: 'center', }, },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  /* @__PURE__ */ _jsx3(motion3.div, {
                    className: 'framer-f8oes1',
                    'data-framer-name': 'Inline Link',
                    layoutDependency,
                    layoutId: 'fgqYNLkOV',
                    children: /* @__PURE__ */ _jsx3(RichText2, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                        children: /* @__PURE__ */ _jsx3(motion3.p, {
                          style: {
                            '--font-selector': 'SW50ZXItTWVkaXVt',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-size': '15px',
                            '--framer-font-weight': '500',
                            '--framer-letter-spacing': '-0.01em',
                            '--framer-line-height': '2em',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(68, 68, 68))',
                          },
                          children: 'Pricing',
                        },),
                      },),
                      className: 'framer-kbcko9',
                      fonts: ['Inter-Medium',],
                      layoutDependency,
                      layoutId: 'GVT5ie4Ik',
                      style: { '--extracted-r6o4lv': 'rgb(68, 68, 68)', '--framer-paragraph-spacing': '0px', },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                      ...addPropertyOverrides3(
                        { hDjcIqUXB: { verticalAlignment: 'center', }, QPRMNhp2_: { verticalAlignment: 'center', }, },
                        baseVariant,
                        gestureVariant,
                      ),
                    },),
                  },),
                  isDisplayed() && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                    children: /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-qpamw7-container',
                      layoutDependency,
                      layoutId: 'vlZXfIVbz-container',
                      children: /* @__PURE__ */ _jsx3(stdin_default3, {
                        height: '100%',
                        id: 'vlZXfIVbz',
                        layoutId: 'vlZXfIVbz',
                        style: { width: '100%', },
                        variant: 'uZCDaH7hQ',
                        width: '100%',
                        ...addPropertyOverrides3(
                          { hDjcIqUXB: { variant: 'N0A3PIdNr', }, QPRMNhp2_: { variant: 'N0A3PIdNr', }, },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed() && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                    children: /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-m6hm9c-container',
                      layoutDependency,
                      layoutId: 'O624gOtQB-container',
                      children: /* @__PURE__ */ _jsx3(stdin_default4, {
                        height: '100%',
                        id: 'O624gOtQB',
                        layoutId: 'O624gOtQB',
                        style: { width: '100%', },
                        variant: 'cunCUFy7w',
                        width: '100%',
                        ...addPropertyOverrides3(
                          { hDjcIqUXB: { variant: 'IxOUtnrRD', }, QPRMNhp2_: { variant: 'IxOUtnrRD', }, },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                  isDisplayed() && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                    children: /* @__PURE__ */ _jsx3(motion3.div, {
                      className: 'framer-uck01s-container',
                      layoutDependency,
                      layoutId: 'bKsNH8o9i-container',
                      children: /* @__PURE__ */ _jsx3(stdin_default5, {
                        height: '100%',
                        id: 'bKsNH8o9i',
                        layoutId: 'bKsNH8o9i',
                        style: { width: '100%', },
                        variant: 'Q3MjAIjCQ',
                        width: '100%',
                        ...addPropertyOverrides3(
                          { hDjcIqUXB: { variant: 'Y2WpHXJS3', }, QPRMNhp2_: { variant: 'Y2WpHXJS3', }, },
                          baseVariant,
                          gestureVariant,
                        ),
                      },),
                    },),
                  },),
                ],
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css3 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-hep1K.framer-f8r10u, .framer-hep1K .framer-f8r10u { display: block; }',
  '.framer-hep1K.framer-10g55a4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 64px; justify-content: flex-start; overflow: visible; padding: 20px; position: relative; width: 1200px; }',
  '.framer-hep1K .framer-1pq0gfc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-hep1K .framer-1ddoafb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-hep1K .framer-1sq50sh { flex: none; height: 24px; position: relative; width: 16px; }',
  '.framer-hep1K .framer-1l9nmrq { flex: none; height: 13px; position: relative; width: 52px; }',
  '.framer-hep1K .framer-1wf04mx { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }',
  '.framer-hep1K .framer-1f254vm { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-hep1K .framer-4d8cu3 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-hep1K .framer-8k9dyu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 1px; }',
  '.framer-hep1K .framer-hzqpua-container, .framer-hep1K .framer-1nzo7y4-container, .framer-hep1K .framer-7rmtze-container { flex: none; height: auto; position: relative; width: auto; }',
  '.framer-hep1K .framer-16hxb9w-container, .framer-hep1K .framer-1qveo1g-container, .framer-hep1K .framer-17tluv9-container { height: auto; position: relative; width: 150px; }',
  '.framer-hep1K .framer-t5v5k9, .framer-hep1K .framer-f8oes1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-hep1K .framer-70vlo6, .framer-hep1K .framer-kbcko9 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '.framer-hep1K .framer-qpamw7-container, .framer-hep1K .framer-m6hm9c-container, .framer-hep1K .framer-uck01s-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hep1K.framer-10g55a4, .framer-hep1K .framer-1pq0gfc, .framer-hep1K .framer-1ddoafb, .framer-hep1K .framer-8k9dyu, .framer-hep1K .framer-t5v5k9, .framer-hep1K .framer-f8oes1 { gap: 0px; } .framer-hep1K.framer-10g55a4 > *, .framer-hep1K .framer-1pq0gfc > *, .framer-hep1K .framer-1ddoafb > *, .framer-hep1K .framer-8k9dyu > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-hep1K.framer-10g55a4 > :first-child, .framer-hep1K .framer-1pq0gfc > :first-child, .framer-hep1K .framer-1ddoafb > :first-child, .framer-hep1K .framer-8k9dyu > :first-child, .framer-hep1K .framer-t5v5k9 > :first-child, .framer-hep1K .framer-f8oes1 > :first-child { margin-left: 0px; } .framer-hep1K.framer-10g55a4 > :last-child, .framer-hep1K .framer-1pq0gfc > :last-child, .framer-hep1K .framer-1ddoafb > :last-child, .framer-hep1K .framer-8k9dyu > :last-child, .framer-hep1K .framer-t5v5k9 > :last-child, .framer-hep1K .framer-f8oes1 > :last-child { margin-right: 0px; } .framer-hep1K .framer-t5v5k9 > *, .framer-hep1K .framer-f8oes1 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }',
  '.framer-hep1K.framer-v-1kmw1up.framer-10g55a4 { flex-direction: column; gap: 0px; overflow: hidden; padding: 0px; width: 390px; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-1pq0gfc, .framer-hep1K.framer-v-1ginw8b .framer-1pq0gfc { cursor: pointer; gap: unset; height: 64px; justify-content: space-between; order: 0; padding: 0px 10px 0px 20px; width: 100%; z-index: 2; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-1ddoafb, .framer-hep1K.framer-v-1ginw8b .framer-1ddoafb { order: 0; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-1wf04mx, .framer-hep1K.framer-v-1ginw8b .framer-1wf04mx { height: 44px; order: 1; width: 44px; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-8k9dyu, .framer-hep1K.framer-v-1ginw8b .framer-8k9dyu { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 0px; justify-content: flex-start; order: 1; padding: 0px 20px 0px 20px; width: 100%; z-index: 2; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-t5v5k9, .framer-hep1K.framer-v-1ginw8b .framer-t5v5k9 { gap: 15px; height: 56px; justify-content: flex-start; order: 4; overflow: hidden; width: 100%; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-f8oes1, .framer-hep1K.framer-v-1ginw8b .framer-f8oes1 { gap: 15px; height: 56px; justify-content: flex-start; order: 5; overflow: hidden; width: 100%; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-qpamw7-container, .framer-hep1K.framer-v-1ginw8b .framer-qpamw7-container { flex: none; order: 3; width: 100%; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-m6hm9c-container, .framer-hep1K.framer-v-1ginw8b .framer-m6hm9c-container { flex: none; order: 6; width: 100%; }',
  '.framer-hep1K.framer-v-1kmw1up .framer-uck01s-container, .framer-hep1K.framer-v-1ginw8b .framer-uck01s-container { flex: none; order: 7; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hep1K.framer-v-1kmw1up.framer-10g55a4, .framer-hep1K.framer-v-1kmw1up .framer-1pq0gfc, .framer-hep1K.framer-v-1kmw1up .framer-8k9dyu, .framer-hep1K.framer-v-1kmw1up .framer-t5v5k9, .framer-hep1K.framer-v-1kmw1up .framer-f8oes1 { gap: 0px; } .framer-hep1K.framer-v-1kmw1up.framer-10g55a4 > *, .framer-hep1K.framer-v-1kmw1up .framer-8k9dyu > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hep1K.framer-v-1kmw1up.framer-10g55a4 > :first-child, .framer-hep1K.framer-v-1kmw1up .framer-8k9dyu > :first-child { margin-top: 0px; } .framer-hep1K.framer-v-1kmw1up.framer-10g55a4 > :last-child, .framer-hep1K.framer-v-1kmw1up .framer-8k9dyu > :last-child { margin-bottom: 0px; } .framer-hep1K.framer-v-1kmw1up .framer-1pq0gfc > *, .framer-hep1K.framer-v-1kmw1up .framer-1pq0gfc > :first-child, .framer-hep1K.framer-v-1kmw1up .framer-1pq0gfc > :last-child { margin: 0px; } .framer-hep1K.framer-v-1kmw1up .framer-t5v5k9 > *, .framer-hep1K.framer-v-1kmw1up .framer-f8oes1 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-hep1K.framer-v-1kmw1up .framer-t5v5k9 > :first-child, .framer-hep1K.framer-v-1kmw1up .framer-f8oes1 > :first-child { margin-left: 0px; } .framer-hep1K.framer-v-1kmw1up .framer-t5v5k9 > :last-child, .framer-hep1K.framer-v-1kmw1up .framer-f8oes1 > :last-child { margin-right: 0px; } }',
  '.framer-hep1K.framer-v-1ginw8b.framer-10g55a4 { flex-direction: column; gap: 0px; height: auto; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; padding: 0px 0px 120px 0px; width: 390px; }',
  '.framer-hep1K.framer-v-1ginw8b .framer-1f254vm, .framer-hep1K.framer-v-1ginw8b .framer-4d8cu3 { top: calc(50.00000000000002% - 2px / 2); }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-hep1K.framer-v-1ginw8b.framer-10g55a4, .framer-hep1K.framer-v-1ginw8b .framer-1pq0gfc, .framer-hep1K.framer-v-1ginw8b .framer-8k9dyu, .framer-hep1K.framer-v-1ginw8b .framer-t5v5k9, .framer-hep1K.framer-v-1ginw8b .framer-f8oes1 { gap: 0px; } .framer-hep1K.framer-v-1ginw8b.framer-10g55a4 > *, .framer-hep1K.framer-v-1ginw8b .framer-8k9dyu > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hep1K.framer-v-1ginw8b.framer-10g55a4 > :first-child, .framer-hep1K.framer-v-1ginw8b .framer-8k9dyu > :first-child { margin-top: 0px; } .framer-hep1K.framer-v-1ginw8b.framer-10g55a4 > :last-child, .framer-hep1K.framer-v-1ginw8b .framer-8k9dyu > :last-child { margin-bottom: 0px; } .framer-hep1K.framer-v-1ginw8b .framer-1pq0gfc > *, .framer-hep1K.framer-v-1ginw8b .framer-1pq0gfc > :first-child, .framer-hep1K.framer-v-1ginw8b .framer-1pq0gfc > :last-child { margin: 0px; } .framer-hep1K.framer-v-1ginw8b .framer-t5v5k9 > *, .framer-hep1K.framer-v-1ginw8b .framer-f8oes1 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-hep1K.framer-v-1ginw8b .framer-t5v5k9 > :first-child, .framer-hep1K.framer-v-1ginw8b .framer-f8oes1 > :first-child { margin-left: 0px; } .framer-hep1K.framer-v-1ginw8b .framer-t5v5k9 > :last-child, .framer-hep1K.framer-v-1ginw8b .framer-f8oes1 > :last-child { margin-right: 0px; } }',
  '.framer-hep1K[data-border="true"]::after, .framer-hep1K [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '.framer-hep1K[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-hep1K [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }',
  '.framer-hep1K[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-hep1K [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }',
];
var FrameryS_JadFF6 = withCSS3(Component3, css3, 'framer-hep1K',);
var stdin_default6 = FrameryS_JadFF6;
FrameryS_JadFF6.displayName = 'Navigation';
FrameryS_JadFF6.defaultProps = { height: 64, width: 1200, };
addPropertyControls3(FrameryS_JadFF6, {
  variant: {
    options: ['yOOfrKCpM', 'QPRMNhp2_', 'hDjcIqUXB',],
    optionTitles: ['Desktop', 'Phone', 'Phone Open',],
    title: 'Variant',
    type: ControlType3.Enum,
  },
},);
addFonts3(FrameryS_JadFF6, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
      url: 'https://app.framerstatic.com/Inter-Medium.cyrillic-ext-M4WHNGTS.woff2',
      weight: '500',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
      url: 'https://app.framerstatic.com/Inter-Medium.cyrillic-JVU2PANX.woff2',
      weight: '500',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+1F00-1FFF',
      url: 'https://app.framerstatic.com/Inter-Medium.greek-ext-4KCQBEIZ.woff2',
      weight: '500',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0370-03FF',
      url: 'https://app.framerstatic.com/Inter-Medium.greek-DPOQGN7L.woff2',
      weight: '500',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
      url: 'https://app.framerstatic.com/Inter-Medium.latin-ext-J4DBSW7F.woff2',
      weight: '500',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
      url: 'https://app.framerstatic.com/Inter-Medium.latin-Y3IVPL46.woff2',
      weight: '500',
    }, {
      family: 'Inter',
      source: 'framer',
      style: 'normal',
      unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
      url: 'https://app.framerstatic.com/Inter-Medium.vietnamese-PJV76O4P.woff2',
      weight: '500',
    },],
  },
  ...TriggerFonts,
  ...LinksProductFonts,
  ...LinksResourcesFonts,
  ...LinksCommunityFonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:framerNav
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default6.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default6, ...props, },);
};
var framerNav_default = stdin_default6;
export { framerNav_default as default, };
