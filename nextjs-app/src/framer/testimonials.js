/* eslint-disable */
'use client';
import { Et, } from './chunk-O2PC5PVC.js';
import './chunk-6C3VEZWH.js';

// https :https://framerusercontent.com/modules/x8WfR2mmsYC4TzrEQxEJ/pFHJcXf7QsonfQGgrFdg/LnQMzmpqJ.js
import { jsx as _jsx3, jsxs as _jsxs3, } from 'react/jsx-runtime';
import {
  addFonts as addFonts2,
  addPropertyControls as addPropertyControls3,
  ComponentViewportProvider,
  ControlType as ControlType3,
  cx as cx2,
  getFonts,
  useComponentViewport,
  useLocaleInfo,
  useVariantState as useVariantState2,
  withCSS as withCSS2,
} from 'unframer';
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext, } from 'unframer';
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/B2xAlJLcN0gOnt11mSPw/72O11ApITvgaMZRvyQex/Ticker.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import { Children, cloneElement, createRef, useCallback, useEffect, useMemo, useRef, useState, } from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'unframer';
import { frame, LayoutGroup, motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion, useTransform, wrap, } from 'unframer';
var MAX_DUPLICATED_ITEMS = 100;
var directionTransformers = {
  left: (offset,) => `translateX(-${offset}px)`,
  right: (offset,) => `translateX(${offset}px)`,
  top: (offset,) => `translateY(-${offset}px)`,
  bottom: (offset,) => `translateY(${offset}px)`,
};
var supportsAcceleratedAnimations = typeof Animation !== 'undefined' && typeof Animation.prototype.updatePlaybackRate === 'function';
function Ticker(props,) {
  let {
    slots,
    gap,
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    speed,
    hoverFactor,
    direction,
    alignment,
    sizingOptions,
    fadeOptions,
    style,
  } = props;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha, } = fadeOptions;
  const { widthType, heightType, } = sizingOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const numChildren = Children.count(slots,);
  const hasChildren = numChildren > 0;
  if (direction === true) {
    direction = 'left';
  }
  const isHorizontal = direction === 'left' || direction === 'right';
  const offset = useMotionValue(0,);
  const transformer = directionTransformers[direction];
  const transform = useTransform(offset, transformer,);
  const parentRef = useRef(null,);
  const childrenRef = useMemo(() => {
    return [/* @__PURE__ */ createRef(), /* @__PURE__ */ createRef(),];
  }, [],);
  const [size, setSize,] = useState({ parent: null, children: null, },);
  let clonedChildren = [];
  let dupedChildren = [];
  let duplicateBy = 0;
  let opacity = 0;
  if (isCanvas) {
    duplicateBy = numChildren ? Math.floor(10 / numChildren,) : 0;
    opacity = 1;
  }
  if (!isCanvas && hasChildren && size.parent) {
    duplicateBy = Math.round(size.parent / size.children * 2,) + 1;
    duplicateBy = Math.min(duplicateBy, MAX_DUPLICATED_ITEMS,);
    opacity = 1;
  }
  const measure = useCallback(() => {
    if (hasChildren && parentRef.current) {
      const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
      const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
      const end = childrenRef[1].current
        ? isHorizontal
          ? childrenRef[1].current.offsetLeft + childrenRef[1].current.offsetWidth
          : childrenRef[1].current.offsetTop + childrenRef[1].current.offsetHeight
        : 0;
      const childrenLength = end - start + gap;
      setSize({ parent: parentLength, children: childrenLength, },);
    }
  }, [],);
  const childrenStyles = isCanvas ? { contentVisibility: 'auto', } : {};
  if (hasChildren) {
    if (!isCanvas) {
      let initialResize = useRef(true,);
      useEffect(() => {
        frame.read(measure,);
        return Et(parentRef.current, ({ contentSize, },) => {
          if (!initialResize.current && (contentSize.width || contentSize.height)) {
            frame.read(measure,);
          }
          initialResize.current = false;
        },);
      }, [],);
    }
    clonedChildren = Children.map(slots, (child, index,) => {
      var _child_props, _child_props1, _child_props2, _child_props3;
      let ref;
      if (index === 0) {
        ref = childrenRef[0];
      }
      if (index === slots.length - 1) {
        ref = childrenRef[1];
      }
      const size2 = {
        width: widthType ? (_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.width : '100%',
        height: heightType ? (_child_props1 = child.props) === null || _child_props1 === void 0 ? void 0 : _child_props1.height : '100%',
      };
      return /* @__PURE__ */ _jsx(LayoutGroup, {
        inherit: 'id',
        children: /* @__PURE__ */ _jsx('li', {
          ref,
          style: size2,
          children: /* @__PURE__ */ cloneElement(child, {
            style: {
              ...(_child_props2 = child.props) === null || _child_props2 === void 0 ? void 0 : _child_props2.style,
              ...size2,
              flexShrink: 0,
              ...childrenStyles,
            },
            layoutId: child.props.layoutId ? child.props.layoutId + '-original-' + index : void 0,
          }, (_child_props3 = child.props) === null || _child_props3 === void 0 ? void 0 : _child_props3.children,),
        },),
      },);
    },);
  }
  if (!isCanvas) {
    for (let i = 0; i < duplicateBy; i++) {
      dupedChildren = [
        ...dupedChildren,
        ...Children.map(slots, (child, childIndex,) => {
          var _child_props, _child_props1, _child_props2, _child_props3, _child_props4, _child_props5;
          const size2 = {
            width: widthType ? (_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.width : '100%',
            height: heightType
              ? (_child_props1 = child.props) === null || _child_props1 === void 0 ? void 0 : _child_props1.height
              : '100%',
            willChange: 'transform',
          };
          return /* @__PURE__ */ _jsx(LayoutGroup, {
            inherit: 'id',
            children: /* @__PURE__ */ _jsx('li', {
              style: size2,
              'aria-hidden': true,
              children: /* @__PURE__ */ cloneElement(child, {
                key: i + ' ' + childIndex,
                style: {
                  ...(_child_props2 = child.props) === null || _child_props2 === void 0 ? void 0 : _child_props2.style,
                  width: widthType
                    ? (_child_props3 = child.props) === null || _child_props3 === void 0 ? void 0 : _child_props3.width
                    : '100%',
                  height: heightType
                    ? (_child_props4 = child.props) === null || _child_props4 === void 0 ? void 0 : _child_props4.height
                    : '100%',
                  flexShrink: 0,
                  ...childrenStyles,
                },
                layoutId: child.props.layoutId ? child.props.layoutId + '-dupe-' + i : void 0,
              }, (_child_props5 = child.props) === null || _child_props5 === void 0 ? void 0 : _child_props5.children,),
            }, i + 'li' + childIndex,),
          }, i + 'lg' + childIndex,);
        },),
      ];
    }
  }
  const animateToValue = size.children + size.children * Math.round(size.parent / size.children,);
  const initialTime = useRef(null,);
  const prevTime = useRef(null,);
  const xOrY = useRef(0,);
  const isHover = useRef(false,);
  const isReducedMotion = useReducedMotion();
  const listRef = useRef(null,);
  const animationRef = useRef(null,);
  if (!isCanvas) {
    const isInView = useInView(parentRef,);
    if (supportsAcceleratedAnimations) {
      useEffect(() => {
        if (isReducedMotion || !animateToValue || !speed) {
          return;
        }
        animationRef.current = listRef.current.animate({ transform: [transformer(0,), transformer(animateToValue,),], }, {
          duration: Math.abs(animateToValue,) / speed * 1e3,
          iterations: Infinity,
          easing: 'linear',
        },);
        return () => animationRef.current.cancel();
      }, [hoverFactor, animateToValue, speed,],);
      useEffect(() => {
        if (!animationRef.current) {
          return;
        }
        if (isInView && animationRef.current.playState === 'paused') {
          animationRef.current.play();
        } else if (!isInView && animationRef.current.playState === 'running') {
          animationRef.current.pause();
        }
      }, [isInView,],);
    } else {
      useAnimationFrame((t,) => {
        if (!animateToValue || isReducedMotion || supportsAcceleratedAnimations) {
          return;
        }
        if (initialTime.current === null) {
          initialTime.current = t;
        }
        t = t - initialTime.current;
        const timeSince = prevTime.current === null ? 0 : t - prevTime.current;
        let delta = timeSince * (speed / 1e3);
        if (isHover.current) {
          delta *= hoverFactor;
        }
        xOrY.current += delta;
        xOrY.current = wrap(0, animateToValue, xOrY.current,);
        prevTime.current = t;
        if (!isInView) {
          return;
        }
        offset.set(xOrY.current,);
      },);
    }
  }
  const fadeDirection = isHorizontal ? 'to right' : 'to bottom';
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart,);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask =
    `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs('section', {
      style: placeholderStyles,
      children: [
        /* @__PURE__ */ _jsx('div', { style: emojiStyles, children: '\u2728', },),
        /* @__PURE__ */ _jsx('p', { style: titleStyles, children: 'Connect to Content', },),
        /* @__PURE__ */ _jsx('p', { style: subtitleStyles, children: 'Add layers or components to infinitely loop on your page.', },),
      ],
    },);
  }
  return /* @__PURE__ */ _jsx('section', {
    style: {
      ...containerStyle,
      opacity,
      WebkitMaskImage: fadeContent ? fadeMask : void 0,
      MozMaskImage: fadeContent ? fadeMask : void 0,
      maskImage: fadeContent ? fadeMask : void 0,
      overflow: overflow ? 'visible' : 'hidden',
      padding: paddingValue,
    },
    ref: parentRef,
    children: /* @__PURE__ */ _jsxs(motion.ul, {
      ref: listRef,
      style: {
        ...containerStyle,
        gap,
        top: direction === 'bottom' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        left: direction === 'right' && isValidNumber(animateToValue,) ? -animateToValue : void 0,
        placeItems: alignment,
        position: 'relative',
        flexDirection: isHorizontal ? 'row' : 'column',
        ...style,
        transform: supportsAcceleratedAnimations ? void 0 : transform,
        willChange: isCanvas ? 'auto' : 'transform',
      },
      onMouseEnter: () => {
        isHover.current = true;
        if (animationRef.current) {
          animationRef.current.playbackRate = hoverFactor;
        }
      },
      onMouseLeave: () => {
        isHover.current = false;
        if (animationRef.current) {
          animationRef.current.playbackRate = 1;
        }
      },
      children: [clonedChildren, dupedChildren,],
    },),
  },);
}
Ticker.defaultProps = {
  gap: 10,
  padding: 10,
  sizingOptions: { widthType: true, heightType: true, },
  fadeOptions: { fadeContent: true, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0, },
  direction: true,
};
addPropertyControls(Ticker, {
  slots: { type: ControlType.Array, title: 'Children', control: { type: ControlType.ComponentInstance, }, },
  speed: { type: ControlType.Number, title: 'Speed', min: 0, max: 1e3, defaultValue: 100, unit: '%', displayStepper: true, step: 5, },
  direction: {
    type: ControlType.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom',],
    optionIcons: ['direction-left', 'direction-right', 'direction-up', 'direction-down',],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom',],
    defaultValue: 'left',
    displaySegmentedControl: true,
  },
  alignment: {
    type: ControlType.Enum,
    title: 'Align',
    options: ['flex-start', 'center', 'flex-end',],
    optionIcons: {
      direction: {
        right: ['align-top', 'align-middle', 'align-bottom',],
        left: ['align-top', 'align-middle', 'align-bottom',],
        top: ['align-left', 'align-center', 'align-right',],
        bottom: ['align-left', 'align-center', 'align-right',],
      },
    },
    defaultValue: 'center',
    displaySegmentedControl: true,
  },
  gap: { type: ControlType.Number, title: 'Gap', },
  padding: {
    title: 'Padding',
    type: ControlType.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side',],
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',],
    valueLabels: ['T', 'R', 'B', 'L',],
    min: 0,
  },
  sizingOptions: {
    type: ControlType.Object,
    title: 'Sizing',
    controls: {
      widthType: { type: ControlType.Boolean, title: 'Width', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
      heightType: { type: ControlType.Boolean, title: 'Height', enabledTitle: 'Auto', disabledTitle: 'Stretch', defaultValue: true, },
    },
  },
  fadeOptions: {
    type: ControlType.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: ControlType.Boolean, title: 'Fade', defaultValue: true, },
      overflow: {
        type: ControlType.Boolean,
        title: 'Overflow',
        enabledTitle: 'Show',
        disabledTitle: 'Hide',
        defaultValue: false,
        hidden(props,) {
          return props.fadeContent === true;
        },
      },
      fadeWidth: {
        type: ControlType.Number,
        title: 'Width',
        defaultValue: 25,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeInset: {
        type: ControlType.Number,
        title: 'Inset',
        defaultValue: 0,
        min: 0,
        max: 100,
        unit: '%',
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
      fadeAlpha: {
        type: ControlType.Number,
        title: 'Opacity',
        defaultValue: 0,
        min: 0,
        max: 1,
        step: 0.05,
        hidden(props,) {
          return props.fadeContent === false;
        },
      },
    },
  },
  hoverFactor: {
    type: ControlType.Number,
    title: 'Hover',
    min: 0,
    max: 1,
    unit: 'x',
    defaultValue: 1,
    step: 0.1,
    displayStepper: true,
    description: 'Slows down the speed while you are hovering.',
  },
},);
var containerStyle = {
  display: 'flex',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  placeItems: 'center',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  textIndent: 'none',
};
var placeholderStyles = {
  display: 'flex',
  width: '100%',
  height: '100%',
  placeContent: 'center',
  placeItems: 'center',
  flexDirection: 'column',
  color: '#96F',
  background: 'rgba(136, 85, 255, 0.1)',
  fontSize: 11,
  overflow: 'hidden',
  padding: '20px 20px 30px 20px',
};
var emojiStyles = { fontSize: 32, marginBottom: 10, };
var titleStyles = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: 'center', };
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: 'center', };
var clamp = (num, min, max,) => Math.min(Math.max(num, min,), max,);
var isValidNumber = (value,) => typeof value === 'number' && !isNaN(value,);

// https :https://framerusercontent.com/modules/obSJiemEnZB4VW3LOEb1/q6mJKqrhWJCzNTVQNqoI/rbf1DFpj4.js
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ControlType as ControlType2,
  cx,
  Image,
  RichText,
  Text,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, } from 'unframer';
import * as React from 'react';

// https :https://framerusercontent.com/modules/k65C5CM4vrnU7z86tm3U/WVmDSbkqq8n5dyKIIdDR/Q4kC2bTJ2.js
import { fontStore, } from 'unframer';
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

// https :https://framerusercontent.com/modules/obSJiemEnZB4VW3LOEb1/q6mJKqrhWJCzNTVQNqoI/rbf1DFpj4.js
var enabledGestures = { q7F_XsaAT: { hover: true, }, };
var cycleOrder = ['q7F_XsaAT',];
var variantClassNames = { q7F_XsaAT: 'framer-v-1sc8lhv', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var humanReadableVariantMap = {};
var transitions = {
  default: { damping: 60, delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1,], mass: 1, stiffness: 500, type: 'spring', },
};
var toResponsiveImage = (value,) => {
  if (typeof value === 'object' && value !== null && typeof value.src === 'string') {
    return value;
  }
  return typeof value === 'string' ? { src: value, } : void 0;
};
var Component = /* @__PURE__ */ React.forwardRef(
  function (
    {
      id,
      style,
      className: className2,
      width,
      height,
      layoutId,
      variant: outerVariant = 'q7F_XsaAT',
      image: WGDgFnn5C,
      name: woCpzEL8i = 'Martin Rosser',
      comment: xBIYtOuFC = 'As a happy user, I could only recomment it. Keep up the good work. \u{1F919}',
      username: Chy2ic_Ut = '@mert',
      ...restProps
    },
    ref,
  ) {
    const outerVariantId = humanReadableVariantMap[outerVariant];
    const variant = outerVariantId || outerVariant;
    const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState({
      cycleOrder,
      defaultVariant: 'q7F_XsaAT',
      enabledGestures,
      transitions,
      variant,
      variantClassNames,
    },);
    const layoutDependency = variants.join('-',) + restProps.layoutDependency;
    const defaultLayoutId = React.useId();
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
        className: cx('framer-ankkr', className, classNames,),
        style: { display: 'contents', },
        children: /* @__PURE__ */ _jsx2(motion2.div, {
          ...restProps,
          className: cx('framer-1sc8lhv', className2,),
          'data-border': true,
          'data-framer-name': 'Variant 1',
          layoutDependency,
          layoutId: 'q7F_XsaAT',
          ref,
          style: {
            '--border-bottom-width': '1px',
            '--border-color': 'var(--token-19c4737c-eef7-4396-b22a-028772ac270e, rgba(0, 0, 0, 0.1)) /* {"name":"Outline"} */',
            '--border-left-width': '1px',
            '--border-right-width': '1px',
            '--border-style': 'solid',
            '--border-top-width': '1px',
            backgroundColor: 'var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(255, 255, 255))',
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
            borderTopLeftRadius: 12,
            borderTopRightRadius: 12,
            ...style,
          },
          transition,
          variants: { 'q7F_XsaAT-hover': { '--border-color': 'rgba(0, 0, 0, 0.24)', }, },
          ...addPropertyOverrides({ 'q7F_XsaAT-hover': { 'data-framer-name': void 0, }, }, baseVariant, gestureVariant,),
          children: /* @__PURE__ */ _jsxs2(motion2.div, {
            className: 'framer-m3c7jl',
            'data-framer-name': 'Frame 464',
            layoutDependency,
            layoutId: 'LtaupzSKm',
            transition,
            children: [
              /* @__PURE__ */ _jsxs2(motion2.div, {
                className: 'framer-lvaafp',
                'data-framer-name': 'Frame 463',
                layoutDependency,
                layoutId: 'lUexc9Oq7',
                transition,
                children: [
                  /* @__PURE__ */ _jsx2(Image, {
                    background: { alt: '', fit: 'fill', sizes: '32px', ...toResponsiveImage(WGDgFnn5C,), },
                    className: 'framer-1a43d2x',
                    'data-framer-name': 'image 62',
                    layoutDependency,
                    layoutId: 'RwoyfMUD6',
                    style: {
                      borderBottomLeftRadius: 76.01,
                      borderBottomRightRadius: 76.01,
                      borderTopLeftRadius: 76.01,
                      borderTopRightRadius: 76.01,
                    },
                    transition,
                  },),
                  /* @__PURE__ */ _jsxs2(motion2.div, {
                    className: 'framer-fsipb9',
                    'data-framer-name': 'Frame 462',
                    layoutDependency,
                    layoutId: 'hVTEogVO_',
                    transition,
                    children: [
                      /* @__PURE__ */ _jsx2(Text, {
                        __fromCanvasComponent: true,
                        alignment: 'left',
                        className: 'framer-snufdk',
                        'data-framer-name': 'Main',
                        fonts: ['GF;DM Sans-700',],
                        layoutDependency,
                        layoutId: 'wDiqJSX1W',
                        rawHTML:
                          '<span style=\'font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit\'><span style=\'font-size: 0\'><span style=\'\'>Martin Rosser</span><br></span></span>',
                        style: {
                          '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                          '--framer-font-size': '14px',
                          '--framer-font-style': 'normal',
                          '--framer-font-weight': 700,
                          '--framer-letter-spacing': '-0.4px',
                          '--framer-line-height': '1.2em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0))',
                          '--framer-text-decoration': 'none',
                          '--framer-text-transform': 'none',
                        },
                        text: woCpzEL8i,
                        transition,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsx2(Text, {
                        __fromCanvasComponent: true,
                        alignment: 'left',
                        className: 'framer-95xo85',
                        'data-framer-name': 'Main',
                        fonts: ['GF;DM Sans-regular',],
                        layoutDependency,
                        layoutId: 'Vavxwke1N',
                        rawHTML:
                          '<span style=\'font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit\'><span style=\'font-size: 0\'><span style=\'\'>@mert</span><br></span></span>',
                        style: {
                          '--framer-font-family': '"DM Sans", "DM Sans Placeholder", sans-serif',
                          '--framer-font-size': '13px',
                          '--framer-font-style': 'normal',
                          '--framer-font-weight': 400,
                          '--framer-letter-spacing': '-0.3px',
                          '--framer-line-height': '1.2em',
                          '--framer-text-alignment': 'left',
                          '--framer-text-color': 'var(--token-eefc1276-32c2-4c77-8e03-3e6e9899c005, rgba(0, 0, 0, 0.6))',
                          '--framer-text-decoration': 'none',
                          '--framer-text-transform': 'none',
                          opacity: 0.7,
                        },
                        text: Chy2ic_Ut,
                        transition,
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                    ],
                  },),
                ],
              },),
              /* @__PURE__ */ _jsx2(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                    className: 'framer-styles-preset-tdptso',
                    'data-styles-preset': 'Q4kC2bTJ2',
                    style: { '--framer-text-color': 'var(--extracted-r6o4lv)', },
                    children: 'As a happy user, I could only recomment it. Keep up the good work. \u{1F919}',
                  },),
                },),
                className: 'framer-1gh7dfz',
                'data-framer-name': 'Main',
                layoutDependency,
                layoutId: 'gxMOjwDxw',
                style: {
                  '--extracted-r6o4lv': 'var(--token-c97db126-8e49-4dfa-8a8a-566d4fa3e425, rgb(0, 0, 0)) ',
                  '--framer-paragraph-spacing': '0px',
                },
                text: xBIYtOuFC,
                transition,
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            ],
          },),
        },),
      },),
    },);
  },
);
var css2 = [
  '.framer-ankkr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-ankkr .framer-mx5nn6 { display: block; }',
  '.framer-ankkr .framer-1sc8lhv { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 32px 32px 32px; position: relative; width: 336px; }',
  '.framer-ankkr .framer-m3c7jl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-ankkr .framer-lvaafp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-ankkr .framer-1a43d2x { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: hidden; position: relative; width: 32px; will-change: transform; }',
  '.framer-ankkr .framer-fsipb9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-ankkr .framer-snufdk, .framer-ankkr .framer-95xo85 { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }',
  '.framer-ankkr .framer-1gh7dfz { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 287px; word-break: break-word; word-wrap: break-word; }',
  '.framer-ankkr .framer-v-1sc8lhv .framer-1sc8lhv { cursor: pointer; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ankkr .framer-1sc8lhv, .framer-ankkr .framer-m3c7jl, .framer-ankkr .framer-lvaafp, .framer-ankkr .framer-fsipb9 { gap: 0px; } .framer-ankkr .framer-1sc8lhv > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-ankkr .framer-1sc8lhv > :first-child, .framer-ankkr .framer-m3c7jl > :first-child, .framer-ankkr .framer-fsipb9 > :first-child { margin-top: 0px; } .framer-ankkr .framer-1sc8lhv > :last-child, .framer-ankkr .framer-m3c7jl > :last-child, .framer-ankkr .framer-fsipb9 > :last-child { margin-bottom: 0px; } .framer-ankkr .framer-m3c7jl > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-ankkr .framer-lvaafp > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-ankkr .framer-lvaafp > :first-child { margin-left: 0px; } .framer-ankkr .framer-lvaafp > :last-child { margin-right: 0px; } .framer-ankkr .framer-fsipb9 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }',
  ...css,
];
var Framerrbf1DFpj4 = withCSS(Component, css2, 'framer-ankkr',);
var stdin_default = Framerrbf1DFpj4;
Framerrbf1DFpj4.displayName = 'Comment';
Framerrbf1DFpj4.defaultProps = { height: 156, width: 336, };
addPropertyControls2(Framerrbf1DFpj4, {
  WGDgFnn5C: { title: 'Image', type: ControlType2.ResponsiveImage, },
  woCpzEL8i: { defaultValue: 'Martin Rosser', displayTextArea: false, placeholder: 'Name', title: 'Name', type: ControlType2.String, },
  xBIYtOuFC: {
    defaultValue: 'As a happy user, I could only recomment it. Keep up the good work. \u{1F919}',
    displayTextArea: true,
    title: 'Comment',
    type: ControlType2.String,
  },
  Chy2ic_Ut: { defaultValue: '@mert', displayTextArea: false, title: 'Username', type: ControlType2.String, },
},);
addFonts(Framerrbf1DFpj4, [{
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:canvasComponent/rbf1DFpj4:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitOB-sClQX6Cg.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Cp2ywxg089UriASitOB-sClQX6Cg.ttf',
  weight: '700',
}, {
  family: 'DM Sans',
  moduleAsset: {
    localModuleIdentifier: 'local-module:canvasComponent/rbf1DFpj4:default',
    url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriOZSCHBeHFl0.ttf',
  },
  style: 'normal',
  url: 'https://fonts.gstatic.com/s/dmsans/v11/rP2Hp2ywxg089UriOZSCHBeHFl0.ttf',
  weight: '400',
}, ...fonts,],);

// https :https://framerusercontent.com/modules/x8WfR2mmsYC4TzrEQxEJ/pFHJcXf7QsonfQGgrFdg/LnQMzmpqJ.js
var CommentFonts = getFonts(stdin_default,);
var TickerFonts = getFonts(Ticker,);
var cycleOrder2 = ['Ss6tBuxYW', 'jbqU_7iL0', 'dGbAdK8tT',];
var serializationHash = 'framer-NBBQP';
var variantClassNames2 = { dGbAdK8tT: 'framer-v-zlhry6', jbqU_7iL0: 'framer-v-1rmafa3', Ss6tBuxYW: 'framer-v-1u3ccvm', };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transitions2 = { default: { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', }, };
var addImageAlt = (image, alt,) => {
  if (!image || typeof image !== 'object') {
    return;
  }
  return { ...image, alt, };
};
var Transition = ({ value, children, },) => {
  const config = React2.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion3(React2.Fragment,);
var humanReadableVariantMap2 = { Desktop: 'Ss6tBuxYW', Mobile: 'dGbAdK8tT', Tablet: 'jbqU_7iL0', };
var getProps = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap2[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'Ss6tBuxYW',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React2.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, transition, variants, } = useVariantState2({
    cycleOrder: cycleOrder2,
    defaultVariant: 'Ss6tBuxYW',
    transitions: transitions2,
    variant,
    variantClassNames: variantClassNames2,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React2.useRef(null,);
  const isDisplayed = () => {
    if (baseVariant === 'dGbAdK8tT') {
      return true;
    }
    return false;
  };
  const isDisplayed1 = () => {
    if (baseVariant === 'dGbAdK8tT') {
      return false;
    }
    return true;
  };
  const isDisplayed2 = () => {
    if (['jbqU_7iL0', 'dGbAdK8tT',].includes(baseVariant,)) {
      return false;
    }
    return true;
  };
  const defaultLayoutId = React2.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx3(LayoutGroup3, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition, {
        value: transition,
        children: /* @__PURE__ */ _jsxs3(motion3.div, {
          ...restProps,
          className: cx2(serializationHash, ...sharedStyleClassNames, 'framer-1u3ccvm', className2, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'Ss6tBuxYW',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { ...style, },
          ...addPropertyOverrides2(
            { dGbAdK8tT: { 'data-framer-name': 'Mobile', }, jbqU_7iL0: { 'data-framer-name': 'Tablet', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            isDisplayed() && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion3.div, {
                className: 'framer-1q8iobv-container',
                layoutDependency,
                layoutId: 'wGQnFEwQa-container',
                children: /* @__PURE__ */ _jsx3(Ticker, {
                  alignment: 'center',
                  direction: 'bottom',
                  fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false, },
                  gap: 12,
                  height: '100%',
                  hoverFactor: 0,
                  id: 'wGQnFEwQa',
                  layoutId: 'wGQnFEwQa',
                  padding: 30,
                  paddingBottom: 30,
                  paddingLeft: 30,
                  paddingPerSide: false,
                  paddingRight: 30,
                  paddingTop: 30,
                  sizingOptions: { heightType: true, widthType: true, },
                  slots: [
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-ipkbaw-container',
                        layoutDependency,
                        layoutId: 'WuOUzfaZAxHz0g1cbc-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'WuOUzfaZAxHz0g1cbc',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/LObrQhnMO9oELHHGZs76rOdUg.svg', }, '',),
                          layoutId: 'WuOUzfaZAxHz0g1cbc',
                          name: 'Maren Baptista',
                          style: { width: '100%', },
                          username: '@marenbaptista',
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-deew5c-container',
                        layoutDependency,
                        layoutId: 'Cj4V3JQtK-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'Cj4V3JQtK',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/3kqJNolY4UGh9E4ebvxkzAwgzLI.svg', }, '',),
                          layoutId: 'Cj4V3JQtK',
                          name: 'Martin Rosser',
                          style: { width: '100%', },
                          username: '@martinn',
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-kkd1pg-container',
                        layoutDependency,
                        layoutId: 'esVi_bC_O-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'esVi_bC_O',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/LObrQhnMO9oELHHGZs76rOdUg.svg', }, '',),
                          layoutId: 'esVi_bC_O',
                          name: 'Haylie Workman',
                          style: { width: '100%', },
                          username: '@haylieworkman',
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-xfjvqk-container',
                        layoutDependency,
                        layoutId: 'gT3LVf0Bt-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment:
                            'Products like salesforce offer you everything but its laborious to get what you want out it and that is not the case with Attio.',
                          height: '100%',
                          id: 'gT3LVf0Bt',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/uZdI0btZ5MokaY4lxJ2MD2zle8k.svg', }, '',),
                          layoutId: 'gT3LVf0Bt',
                          name: 'Maren Baptista',
                          style: { width: '100%', },
                          username: '@marenbaptista',
                          width: '100%',
                        },),
                      },),
                    },),
                  ],
                  speed: 30,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion3.div, {
                className: 'framer-q10t3o-container',
                layoutDependency,
                layoutId: 'NoWVSQ3jR-container',
                children: /* @__PURE__ */ _jsx3(Ticker, {
                  alignment: 'center',
                  direction: 'bottom',
                  fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false, },
                  gap: 30,
                  height: '100%',
                  hoverFactor: 0,
                  id: 'NoWVSQ3jR',
                  layoutId: 'NoWVSQ3jR',
                  padding: 30,
                  paddingBottom: 30,
                  paddingLeft: 30,
                  paddingPerSide: false,
                  paddingRight: 30,
                  paddingTop: 30,
                  sizingOptions: { heightType: true, widthType: true, },
                  slots: [
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-ipkbaw-container',
                        layoutDependency,
                        layoutId: 'WuOUzfaZAxHz0g1cbc-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'WuOUzfaZAxHz0g1cbc',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/LObrQhnMO9oELHHGZs76rOdUg.svg', }, '',),
                          layoutId: 'WuOUzfaZAxHz0g1cbc',
                          name: 'Maren Baptista',
                          style: { width: '100%', },
                          username: '@marenbaptista',
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-deew5c-container',
                        layoutDependency,
                        layoutId: 'Cj4V3JQtK-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'Cj4V3JQtK',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/3kqJNolY4UGh9E4ebvxkzAwgzLI.svg', }, '',),
                          layoutId: 'Cj4V3JQtK',
                          name: 'Martin Rosser',
                          style: { width: '100%', },
                          username: '@martinn',
                          width: '100%',
                        },),
                      },),
                    },),
                  ],
                  speed: 30,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  ...addPropertyOverrides2({ jbqU_7iL0: { gap: 12, }, }, baseVariant, gestureVariant,),
                },),
              },),
            },),
            isDisplayed1() && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion3.div, {
                className: 'framer-1s0uzy2-container',
                layoutDependency,
                layoutId: 'Hu1dk6saa-container',
                children: /* @__PURE__ */ _jsx3(Ticker, {
                  alignment: 'center',
                  direction: 'top',
                  fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false, },
                  gap: 30,
                  height: '100%',
                  hoverFactor: 0,
                  id: 'Hu1dk6saa',
                  layoutId: 'Hu1dk6saa',
                  padding: 30,
                  paddingBottom: 30,
                  paddingLeft: 30,
                  paddingPerSide: false,
                  paddingRight: 30,
                  paddingTop: 30,
                  sizingOptions: { heightType: true, widthType: true, },
                  slots: [
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-kkd1pg-container',
                        layoutDependency,
                        layoutId: 'esVi_bC_O-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'esVi_bC_O',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/LObrQhnMO9oELHHGZs76rOdUg.svg', }, '',),
                          layoutId: 'esVi_bC_O',
                          name: 'Haylie Workman',
                          style: { width: '100%', },
                          username: '@haylieworkman',
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-xfjvqk-container',
                        layoutDependency,
                        layoutId: 'gT3LVf0Bt-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment:
                            'Products like salesforce offer you everything but its laborious to get what you want out it and that is not the case with Attio.',
                          height: '100%',
                          id: 'gT3LVf0Bt',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/uZdI0btZ5MokaY4lxJ2MD2zle8k.svg', }, '',),
                          layoutId: 'gT3LVf0Bt',
                          name: 'Maren Baptista',
                          style: { width: '100%', },
                          username: '@marenbaptista',
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-deew5c-container',
                        layoutDependency,
                        layoutId: 'Cj4V3JQtK-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'Cj4V3JQtK',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/3kqJNolY4UGh9E4ebvxkzAwgzLI.svg', }, '',),
                          layoutId: 'Cj4V3JQtK',
                          name: 'Martin Rosser',
                          style: { width: '100%', },
                          username: '@martinn',
                          width: '100%',
                        },),
                      },),
                    },),
                  ],
                  speed: 30,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                  ...addPropertyOverrides2({ jbqU_7iL0: { gap: 12, }, }, baseVariant, gestureVariant,),
                },),
              },),
            },),
            isDisplayed2() && /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion3.div, {
                className: 'framer-16yuehg-container',
                layoutDependency,
                layoutId: 'grsZQcHZK-container',
                children: /* @__PURE__ */ _jsx3(Ticker, {
                  alignment: 'center',
                  direction: 'bottom',
                  fadeOptions: { fadeAlpha: 0, fadeContent: true, fadeInset: 0, fadeWidth: 25, overflow: false, },
                  gap: 30,
                  height: '100%',
                  hoverFactor: 0,
                  id: 'grsZQcHZK',
                  layoutId: 'grsZQcHZK',
                  padding: 30,
                  paddingBottom: 30,
                  paddingLeft: 30,
                  paddingPerSide: false,
                  paddingRight: 30,
                  paddingTop: 30,
                  sizingOptions: { heightType: true, widthType: true, },
                  slots: [
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-xfjvqk-container',
                        layoutDependency,
                        layoutId: 'gT3LVf0Bt-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment:
                            'Products like salesforce offer you everything but its laborious to get what you want out it and that is not the case with Attio.',
                          height: '100%',
                          id: 'gT3LVf0Bt',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/uZdI0btZ5MokaY4lxJ2MD2zle8k.svg', }, '',),
                          layoutId: 'gT3LVf0Bt',
                          name: 'Maren Baptista',
                          style: { width: '100%', },
                          username: '@marenbaptista',
                          width: '100%',
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
                      children: /* @__PURE__ */ _jsx3(motion3.div, {
                        className: 'framer-deew5c-container',
                        layoutDependency,
                        layoutId: 'Cj4V3JQtK-container',
                        children: /* @__PURE__ */ _jsx3(stdin_default, {
                          comment: '@Absolute I can\u2019t take hubspote any more. I need you only.\n\n#amazingtool #podcastingeasynow',
                          height: '100%',
                          id: 'Cj4V3JQtK',
                          image: addImageAlt({ src: 'https://framerusercontent.com/images/3kqJNolY4UGh9E4ebvxkzAwgzLI.svg', }, '',),
                          layoutId: 'Cj4V3JQtK',
                          name: 'Martin Rosser',
                          style: { width: '100%', },
                          username: '@martinn',
                          width: '100%',
                        },),
                      },),
                    },),
                  ],
                  speed: 30,
                  style: { height: '100%', width: '100%', },
                  width: '100%',
                },),
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css3 = [
  '.framer-NBBQP[data-border="true"]::after, .framer-NBBQP [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-NBBQP.framer-1kssqyy, .framer-NBBQP .framer-1kssqyy { display: block; }',
  '.framer-NBBQP.framer-1u3ccvm { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-NBBQP .framer-1q8iobv-container { flex: none; height: 460px; position: relative; width: 350px; }',
  '.framer-NBBQP .framer-ipkbaw-container, .framer-NBBQP .framer-deew5c-container, .framer-NBBQP .framer-kkd1pg-container, .framer-NBBQP .framer-xfjvqk-container { height: auto; position: relative; width: 336px; }',
  '.framer-NBBQP .framer-q10t3o-container, .framer-NBBQP .framer-1s0uzy2-container, .framer-NBBQP .framer-16yuehg-container { flex: none; height: 460px; position: relative; width: 340px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NBBQP.framer-1u3ccvm { gap: 0px; } .framer-NBBQP.framer-1u3ccvm > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-NBBQP.framer-1u3ccvm > :first-child { margin-left: 0px; } .framer-NBBQP.framer-1u3ccvm > :last-child { margin-right: 0px; } }',
  '.framer-NBBQP.framer-v-1rmafa3.framer-1u3ccvm { gap: 12px; justify-content: flex-start; width: 690px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NBBQP.framer-v-1rmafa3.framer-1u3ccvm { gap: 0px; } .framer-NBBQP.framer-v-1rmafa3.framer-1u3ccvm > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-NBBQP.framer-v-1rmafa3.framer-1u3ccvm > :first-child { margin-left: 0px; } .framer-NBBQP.framer-v-1rmafa3.framer-1u3ccvm > :last-child { margin-right: 0px; } }',
  '.framer-NBBQP.framer-v-zlhry6.framer-1u3ccvm { gap: 12px; width: 348px; }',
  '.framer-NBBQP.framer-v-zlhry6 .framer-1q8iobv-container { order: 0; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NBBQP.framer-v-zlhry6.framer-1u3ccvm { gap: 0px; } .framer-NBBQP.framer-v-zlhry6.framer-1u3ccvm > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-NBBQP.framer-v-zlhry6.framer-1u3ccvm > :first-child { margin-left: 0px; } .framer-NBBQP.framer-v-zlhry6.framer-1u3ccvm > :last-child { margin-right: 0px; } }',
];
var FramerLnQMzmpqJ = withCSS2(Component2, css3, 'framer-NBBQP',);
var stdin_default2 = FramerLnQMzmpqJ;
FramerLnQMzmpqJ.displayName = 'Comments';
FramerLnQMzmpqJ.defaultProps = { height: 460, width: 1080, };
addPropertyControls3(FramerLnQMzmpqJ, {
  variant: {
    options: ['Ss6tBuxYW', 'jbqU_7iL0', 'dGbAdK8tT',],
    optionTitles: ['Desktop', 'Tablet', 'Mobile',],
    title: 'Variant',
    type: ControlType3.Enum,
  },
},);
addFonts2(FramerLnQMzmpqJ, [...CommentFonts, ...TickerFonts,],);

// virtual:testimonials
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default2.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default2, ...props, },);
};
var testimonials_default = stdin_default2;
export { testimonials_default as default, };
