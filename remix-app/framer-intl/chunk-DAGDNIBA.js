// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project  "ApiFlow (copy)", do not edit manually */
import { Icon, } from './chunk-NSIORB5W.js';
import { __export, } from './chunk-MLKGABMK.js';

// https :https://framerusercontent.com/modules/u38iMiezf1Itt55PdpAU/8oBS9xxnqCi97bTAdZbo/j0G74AxCR.js
var j0G74AxCR_exports = {};
__export(j0G74AxCR_exports, {
  __FramerMetadata__: () => __FramerMetadata__2,
  default: () => stdin_default2,
},);
import { jsx as _jsx4, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider as ComponentViewportProvider2,
  ControlType as ControlType2,
  cx as cx2,
  getFonts as getFonts2,
  useComponentViewport as useComponentViewport2,
  useLocaleInfo as useLocaleInfo2,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
  withMappedReactProps,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/ObopNXk6Tf3gVopUx5hc/TD8yA77kcQf9Uoiisgy6/SingleToggle.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { useEffect as useEffect2, } from 'react';

// https :https://framer.com/m/framer/store.js@^1.0.0
import { useEffect, useState, } from 'react';
import { Data, useObserveData, } from 'unframer';
function createStore(state1,) {
  const dataStore = Data({ state: Object.freeze({ ...state1, },), },);
  const setDataStore = (newState,) => {
    if (typeof newState === 'function') {
      newState = newState(dataStore.state,);
    }
    dataStore.state = Object.freeze({ ...dataStore.state, ...newState, },);
  };
  let storeState = typeof state1 === 'object' ? Object.freeze({ ...state1, },) : state1;
  const storeSetters = /* @__PURE__ */ new Set();
  const setStoreState = (newState,) => {
    if (typeof newState === 'function') {
      newState = newState(storeState,);
    }
    storeState = typeof newState === 'object' ? Object.freeze({ ...storeState, ...newState, },) : newState;
    storeSetters.forEach((setter,) => setter(storeState,));
  };
  function useStore3() {
    const [state, setState,] = useState(storeState,);
    useEffect(() => {
      storeSetters.add(setState,);
      return () => storeSetters.delete(setState,);
    }, [],);
    if (useObserveData() === true) {
      useObserveData();
      return [dataStore.state, setDataStore,];
    } else {
      return [state, setStoreState,];
    }
  }
  return useStore3;
}

// https :https://framerusercontent.com/modules/ObopNXk6Tf3gVopUx5hc/TD8yA77kcQf9Uoiisgy6/SingleToggle.js
var useStore = createStore({
  // Set the starting theme below, otherwise default to system.
  theme: 'light',
},);
var changeTheme = (theme,) => {
  const htmlElement = document.getElementsByTagName('html',)[0];
  const bodyElement = document.getElementsByTagName('body',)[0];
  htmlElement.setAttribute('toggle-theme', `${theme}`,);
  bodyElement.setAttribute('toggle-theme', `${theme}`,);
  localStorage.setItem('theme', `${theme}`,);
  const event = new Event('themeChange',);
  window.dispatchEvent(event,);
  return;
};
function withSingleToggle(Component3,) {
  return (props,) => {
    const [store, setStore,] = useStore();
    useEffect2(() => {
      if (store.theme !== 'dark' && store.theme !== 'light') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)',);
        let newTheme = mediaQuery.matches ? 'dark' : 'light';
        setStore({ theme: newTheme, },);
        localStorage.setItem('theme', `${newTheme}`,);
      } else {
        localStorage.setItem('theme', `${store.theme}`,);
      }
      const htmlElement = document.getElementsByTagName('html',)[0];
      const bodyElement = document.getElementsByTagName('body',)[0];
      htmlElement && htmlElement.setAttribute('toggle-theme', `${store.theme}`,);
      bodyElement && bodyElement.setAttribute('toggle-theme', `${store.theme}`,);
      let lightThemeTokens = [];
      let darkThemeTokens = [];
      for (let i = 0; i < document.styleSheets.length; i++) {
        const sheet = document.styleSheets[i];
        try {
          for (let rule of sheet.cssRules) {
            if (rule.selectorText === 'body') {
              const style = rule.style;
              for (let j = 0; j < style.length; j++) {
                const propertyName = style[j];
                if (propertyName.includes('--token',)) {
                  const value = style.getPropertyValue(propertyName,);
                  const combinedCssRule = `${propertyName}: ${value};`;
                  lightThemeTokens.push(combinedCssRule,);
                }
              }
              lightThemeTokens = lightThemeTokens.join(' ',);
            } else if (rule.conditionText === '(prefers-color-scheme: dark)') {
              const cssTextIgnore = 'body:not([data-framer-theme])';
              if (!rule.cssText.includes(cssTextIgnore,)) {
                const mediaRulesString = rule.cssRules[0].cssText.replace('body', '',).replace(/\s*{\s*/, '',).replace(/\s*}\s*$/, '',);
                darkThemeTokens = mediaRulesString;
              }
            }
          }
        } catch (e) {
          console.warn('Cannot access stylesheet:', sheet.href,);
        }
      }
      let styleElement = document.createElement('style',);
      styleElement.id = 'toggle-theme';
      const customCssRule =
        `body[toggle-theme="light"] {${lightThemeTokens}} body[toggle-theme="dark"]{${darkThemeTokens}} html[toggle-theme="light"] { color-scheme: light; } html[toggle-theme="dark"] { color-scheme: dark; }`;
      styleElement.textContent = customCssRule;
      document.head.appendChild(styleElement,);
      return () => {
        const existingStyleElement = document.getElementById('toggle-theme',);
        if (existingStyleElement) {
          document.head.removeChild(existingStyleElement,);
        }
        htmlElement && htmlElement.setAttribute('toggle-theme', 'system',);
        bodyElement && bodyElement.setAttribute('toggle-theme', 'system',);
      };
    }, [],);
    const handleClick = () => {
      let newTheme = store.theme === 'light' ? 'dark' : 'light';
      setStore({ theme: newTheme, },);
      changeTheme(newTheme,);
    };
    return /* @__PURE__ */ _jsx(Component3, {
      ...props,
      variant: store.theme === 'light' ? 'Light' : 'Dark',
      whileHover: { scale: 1.1, },
      onClick: handleClick,
    },);
  };
}

// https :https://framerusercontent.com/modules/G5tIJGpmeZHQJprL3Tba/rk14lUp70JkiQCLCLdyY/Theme_Switcher.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import { useEffect as useEffect3, } from 'react';
var useStore2 = createStore({
  // Set the starting theme below, otherwise default to system.
  theme: 'default',
},);
var changeTheme2 = (theme,) => {
  const htmlElement = document.getElementsByTagName('html',)[0];
  const bodyElement = document.getElementsByTagName('body',)[0];
  htmlElement.setAttribute('toggle-theme', `${theme}`,);
  bodyElement.setAttribute('toggle-theme', `${theme}`,);
  localStorage.setItem('theme', `${theme}`,);
  const event = new Event('themeChange',);
  window.dispatchEvent(event,);
  return;
};
function withSingleToggle2(Component3,) {
  return (props,) => {
    const [store, setStore,] = useStore2();
    useEffect3(() => {
      if (store.theme !== 'dark' && store.theme !== 'light') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)',);
        let newTheme = mediaQuery.matches ? 'dark' : 'light';
        setStore({ theme: newTheme, },);
        localStorage.setItem('theme', `${newTheme}`,);
      } else {
        localStorage.setItem('theme', `${store.theme}`,);
      }
      const htmlElement = document.getElementsByTagName('html',)[0];
      const bodyElement = document.getElementsByTagName('body',)[0];
      htmlElement && htmlElement.setAttribute('toggle-theme', `${store.theme}`,);
      bodyElement && bodyElement.setAttribute('toggle-theme', `${store.theme}`,);
      let lightThemeTokens = [];
      let darkThemeTokens = [];
      for (let i = 0; i < document.styleSheets.length; i++) {
        const sheet = document.styleSheets[i];
        try {
          for (let rule of sheet.cssRules) {
            if (rule.selectorText === 'body') {
              const style = rule.style;
              for (let j = 0; j < style.length; j++) {
                const propertyName = style[j];
                if (propertyName.includes('--token',)) {
                  const value = style.getPropertyValue(propertyName,);
                  const combinedCssRule = `${propertyName}: ${value};`;
                  lightThemeTokens.push(combinedCssRule,);
                }
              }
              lightThemeTokens = lightThemeTokens.join(' ',);
            } else if (rule.conditionText === '(prefers-color-scheme: dark)') {
              const cssTextIgnore = 'body:not([data-framer-theme])';
              if (!rule.cssText.includes(cssTextIgnore,)) {
                const mediaRulesString = rule.cssRules[0].cssText.replace('body', '',).replace(/\s*{\s*/, '',).replace(/\s*}\s*$/, '',);
                darkThemeTokens = mediaRulesString;
              }
            }
          }
        } catch (e) {
          console.warn('Cannot access stylesheet:', sheet.href,);
        }
      }
      let styleElement = document.createElement('style',);
      styleElement.id = 'toggle-theme';
      const customCssRule =
        `body[toggle-theme="light"] {${lightThemeTokens}} body[toggle-theme="dark"]{${darkThemeTokens}} html[toggle-theme="light"] { color-scheme: light; } html[toggle-theme="dark"] { color-scheme: dark; }`;
      styleElement.textContent = customCssRule;
      document.head.appendChild(styleElement,);
      return () => {
        const existingStyleElement = document.getElementById('toggle-theme',);
        if (existingStyleElement) {
          document.head.removeChild(existingStyleElement,);
        }
        htmlElement && htmlElement.setAttribute('toggle-theme', 'system',);
        bodyElement && bodyElement.setAttribute('toggle-theme', 'system',);
      };
    }, [],);
    const handleClick = () => {
      let newTheme = store.theme === 'light' ? 'dark' : 'light';
      setStore({ theme: newTheme, },);
      changeTheme2(newTheme,);
    };
    return /* @__PURE__ */ _jsx2(Component3, {
      ...props,
      variant: store.theme === 'light' ? 'Light' : 'Dark',
      whileHover: { scale: 1.1, },
      onClick: handleClick,
    },);
  };
}

// https :https://framerusercontent.com/modules/SkKN2hCFVsFJKaSL1T3z/FiuDngBH1FwL3nQTJqt6/QUeqHSmx1.js
var QUeqHSmx1_exports = {};
__export(QUeqHSmx1_exports, {
  __FramerMetadata__: () => __FramerMetadata__,
  default: () => stdin_default,
},);
import { jsx as _jsx3, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
  cx,
  getFonts,
  getPropertyControls,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var PhosphorFonts = getFonts(Icon,);
var PhosphorControls = getPropertyControls(Icon,);
var cycleOrder = ['fEK3tJNwU', 'DZYGJlw5t',];
var serializationHash = 'framer-P17Ku';
var variantClassNames = { DZYGJlw5t: 'framer-v-glw0mu', fEK3tJNwU: 'framer-v-ppjx8h', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableEnumMap = { Bold: 'bold', Duotone: 'duotone', Fill: 'fill', Light: 'light', Regular: 'regular', Thin: 'thin', };
var humanReadableVariantMap = { Dark: 'fEK3tJNwU', Light: 'DZYGJlw5t', };
var getProps = ({ height, iconColor, iconDark, iconLight, id, weight, width, ...props },) => {
  var _ref, _ref1, _humanReadableEnumMap_weight, _ref2, _ref3, _ref4, _humanReadableVariantMap_props_variant, _ref5;
  return {
    ...props,
    AeO5PLd9q: (_ref = iconColor !== null && iconColor !== void 0 ? iconColor : props.AeO5PLd9q) !== null && _ref !== void 0
      ? _ref
      : 'var(--token-fa6255fa-1747-4bc3-894a-8375bc25f0bd, rgb(28, 28, 28))',
    fle84VlOx: (_ref1 = iconLight !== null && iconLight !== void 0 ? iconLight : props.fle84VlOx) !== null && _ref1 !== void 0
      ? _ref1
      : 'Sun',
    njtQOvFbC:
      (_ref3 = (_ref2 = (_humanReadableEnumMap_weight = humanReadableEnumMap[weight]) !== null && _humanReadableEnumMap_weight !== void 0
                  ? _humanReadableEnumMap_weight
                  : weight) !== null && _ref2 !== void 0
            ? _ref2
            : props.njtQOvFbC) !== null && _ref3 !== void 0
        ? _ref3
        : 'bold',
    pdO6Nm4lI: (_ref4 = iconDark !== null && iconDark !== void 0 ? iconDark : props.pdO6Nm4lI) !== null && _ref4 !== void 0
      ? _ref4
      : 'Moon',
    variant:
      (_ref5 =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref5 !== void 0
        ? _ref5
        : 'fEK3tJNwU',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, AeO5PLd9q, pdO6Nm4lI, fle84VlOx, njtQOvFbC, ...restProps } = getProps(props,);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants,
  } = useVariantState({ cycleOrder, defaultVariant: 'fEK3tJNwU', variant, variantClassNames, },);
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
        value: transition1,
        children: /* @__PURE__ */ _jsx3(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-ppjx8h', className, classNames,),
          'data-framer-name': 'Dark',
          layoutDependency,
          layoutId: 'fEK3tJNwU',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides({ DZYGJlw5t: { 'data-framer-name': 'Light', }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
            children: /* @__PURE__ */ _jsx3(motion.div, {
              className: 'framer-14wnnsq-container',
              layoutDependency,
              layoutId: 'tuCGdCCPL-container',
              children: /* @__PURE__ */ _jsx3(Icon, {
                color: AeO5PLd9q,
                height: '100%',
                iconSearch: 'House',
                iconSelection: pdO6Nm4lI,
                id: 'tuCGdCCPL',
                layoutId: 'tuCGdCCPL',
                mirrored: false,
                selectByList: true,
                style: { height: '100%', width: '100%', },
                weight: njtQOvFbC,
                width: '100%',
                ...addPropertyOverrides({ DZYGJlw5t: { iconSelection: fle84VlOx, }, }, baseVariant, gestureVariant,),
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-P17Ku.framer-11eglpq, .framer-P17Ku .framer-11eglpq { display: block; }',
  '.framer-P17Ku.framer-ppjx8h { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; padding: 0px; position: relative; width: 40px; }',
  '.framer-P17Ku .framer-14wnnsq-container { flex: none; height: 20px; position: relative; width: 20px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-P17Ku.framer-ppjx8h { gap: 0px; } .framer-P17Ku.framer-ppjx8h > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-P17Ku.framer-ppjx8h > :first-child { margin-left: 0px; } .framer-P17Ku.framer-ppjx8h > :last-child { margin-right: 0px; } }',
];
var FramerQUeqHSmx1 = withCSS(Component, css, 'framer-P17Ku',);
var stdin_default = FramerQUeqHSmx1;
FramerQUeqHSmx1.displayName = 'Navigation/Single';
FramerQUeqHSmx1.defaultProps = { height: 40, width: 40, };
addPropertyControls(FramerQUeqHSmx1, {
  variant: { options: ['fEK3tJNwU', 'DZYGJlw5t',], optionTitles: ['Dark', 'Light',], title: 'Variant', type: ControlType.Enum, },
  AeO5PLd9q: {
    defaultValue: 'var(--token-fa6255fa-1747-4bc3-894a-8375bc25f0bd, rgb(28, 28, 28)) /* {"name":"font/active"} */',
    title: 'IconColor',
    type: ControlType.Color,
  },
  pdO6Nm4lI: (PhosphorControls === null || PhosphorControls === void 0 ? void 0 : PhosphorControls['iconSelection']) &&
    { ...PhosphorControls['iconSelection'], defaultValue: 'Moon', description: void 0, hidden: void 0, title: 'IconDark', },
  fle84VlOx: (PhosphorControls === null || PhosphorControls === void 0 ? void 0 : PhosphorControls['iconSelection']) &&
    { ...PhosphorControls['iconSelection'], defaultValue: 'Sun', description: void 0, hidden: void 0, title: 'IconLight', },
  njtQOvFbC: (PhosphorControls === null || PhosphorControls === void 0 ? void 0 : PhosphorControls['weight']) &&
    { ...PhosphorControls['weight'], defaultValue: 'bold', description: void 0, hidden: void 0, title: 'Weight', },
},);
addFonts(FramerQUeqHSmx1, [{ explicitInter: true, fonts: [], }, ...PhosphorFonts,], { supportsExplicitInterCodegen: true, },);
var __FramerMetadata__ = {
  'exports': {
    'Props': { 'type': 'tsType', 'annotations': { 'framerContractVersion': '1', }, },
    'default': {
      'type': 'reactComponent',
      'name': 'FramerQUeqHSmx1',
      'slots': [],
      'annotations': {
        'framerDisplayContentsDiv': 'false',
        'framerComponentViewportWidth': 'true',
        'framerContractVersion': '1',
        'framerIntrinsicWidth': '40',
        'framerIntrinsicHeight': '40',
        'framerImmutableVariables': 'true',
        'framerVariables': '{"AeO5PLd9q":"iconColor","pdO6Nm4lI":"iconDark","fle84VlOx":"iconLight","njtQOvFbC":"weight"}',
        'framerCanvasComponentVariantDetails':
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"DZYGJlw5t":{"layout":["fixed","fixed"]}}}',
      },
    },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};

// https :https://framerusercontent.com/modules/u38iMiezf1Itt55PdpAU/8oBS9xxnqCi97bTAdZbo/j0G74AxCR.js
var NavigationSingleFonts = getFonts2(stdin_default,);
var NavigationSingleWithSingleToggleWithMappedReactProps1p41an2 = withMappedReactProps(
  withSingleToggle(stdin_default,),
  QUeqHSmx1_exports,
);
var MotionDivWithSingleToggle1 = withSingleToggle2(motion2.div,);
var cycleOrder2 = ['WNajuqop1',];
var serializationHash2 = 'framer-eihud';
var variantClassNames2 = { WNajuqop1: 'framer-v-1wqs43e', };
var transition12 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var Transition2 = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext2,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx4(MotionConfigContext2.Provider, { value: contextValue, children, },);
};
var Variants2 = motion2(React2.Fragment,);
var getProps2 = ({ height, iconColor, id, width, ...props },) => {
  var _ref;
  return {
    ...props,
    Tib6Q7ZnQ: (_ref = iconColor !== null && iconColor !== void 0 ? iconColor : props.Tib6Q7ZnQ) !== null && _ref !== void 0
      ? _ref
      : 'var(--token-fa6255fa-1747-4bc3-894a-8375bc25f0bd, rgb(28, 28, 28))',
  };
};
var createLayoutDependency2 = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo2();
  const { style, className, layoutId, variant, Tib6Q7ZnQ, ixZIJysro, d0DRJtbRf, LTl4MmErQ, socYxGJRP, ...restProps } = getProps2(props,);
  const { baseVariant, classNames, gestureHandlers, gestureVariant, setGestureState, setVariant, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'WNajuqop1',
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency2(props, variants,);
  const ref1 = React2.useRef(null,);
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport2();
  return /* @__PURE__ */ _jsx4(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx4(Variants2, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx4(Transition2, {
        value: transition12,
        children: /* @__PURE__ */ _jsx4(MotionDivWithSingleToggle1, {
          ...restProps,
          ...gestureHandlers,
          className: cx2(serializationHash2, ...sharedStyleClassNames, 'framer-1wqs43e', className, classNames,),
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'WNajuqop1',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          children: /* @__PURE__ */ _jsx4(ComponentViewportProvider2, {
            width: '40px',
            children: /* @__PURE__ */ _jsx4(motion2.div, {
              className: 'framer-1j66vu-container',
              layoutDependency,
              layoutId: 'DvRbsdlRh-container',
              children: /* @__PURE__ */ _jsx4(NavigationSingleWithSingleToggleWithMappedReactProps1p41an2, {
                AeO5PLd9q: Tib6Q7ZnQ,
                fle84VlOx: LTl4MmErQ,
                height: '100%',
                id: 'DvRbsdlRh',
                layoutId: 'DvRbsdlRh',
                njtQOvFbC: ixZIJysro,
                pdO6Nm4lI: d0DRJtbRf,
                style: { height: '100%', width: '100%', },
                variant: socYxGJRP,
                width: '100%',
              },),
            },),
          },),
        },),
      },),
    },),
  },);
},);
var css2 = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-eihud.framer-92pstm, .framer-eihud .framer-92pstm { display: block; }',
  '.framer-eihud.framer-1wqs43e { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }',
  '.framer-eihud .framer-1j66vu-container { flex: none; height: 40px; position: relative; width: 40px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eihud.framer-1wqs43e { gap: 0px; } .framer-eihud.framer-1wqs43e > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-eihud.framer-1wqs43e > :first-child { margin-left: 0px; } .framer-eihud.framer-1wqs43e > :last-child { margin-right: 0px; } }',
];
var Framerj0G74AxCR = withCSS2(Component2, css2, 'framer-eihud',);
var stdin_default2 = Framerj0G74AxCR;
Framerj0G74AxCR.displayName = 'Navigation/SingleToggle';
Framerj0G74AxCR.defaultProps = { height: 40, width: 40, };
addPropertyControls2(Framerj0G74AxCR, {
  Tib6Q7ZnQ: {
    defaultValue: 'var(--token-fa6255fa-1747-4bc3-894a-8375bc25f0bd, rgb(28, 28, 28)) /* {"name":"font/active"} */',
    title: 'IconColor',
    type: ControlType2.Color,
  },
},);
addFonts2(Framerj0G74AxCR, [{ explicitInter: true, fonts: [], }, ...NavigationSingleFonts,], { supportsExplicitInterCodegen: true, },);
var __FramerMetadata__2 = {
  'exports': {
    'default': {
      'type': 'reactComponent',
      'name': 'Framerj0G74AxCR',
      'slots': [],
      'annotations': {
        'framerImmutableVariables': 'true',
        'framerIntrinsicWidth': '40',
        'framerIntrinsicHeight': '40',
        'framerCanvasComponentVariantDetails': '{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]}}}',
        'framerVariables': '{"Tib6Q7ZnQ":"iconColor"}',
        'framerComponentViewportWidth': 'true',
        'framerDisplayContentsDiv': 'false',
        'framerContractVersion': '1',
      },
    },
    'Props': { 'type': 'tsType', 'annotations': { 'framerContractVersion': '1', }, },
    '__FramerMetadata__': { 'type': 'variable', },
  },
};

export { createStore, j0G74AxCR_exports, stdin_default2 as stdin_default, };