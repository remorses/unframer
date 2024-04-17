/* eslint-disable */
'use client';
import { Icon, } from './chunk-NYGXGF5D.js';
import './chunk-KS6IWKVH.js';
import { Et, } from './chunk-GZE2AZR4.js';
import './chunk-6C3VEZWH.js';

// https :https://framerusercontent.com/modules/YPPQaawwYaqGsNWuaEiH/wGA6N0W2KLqGzirj52m1/q64yDrOL3.js
import { jsx as _jsx2, jsxs as _jsxs2, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider,
  ControlType as ControlType2,
  cx,
  getFonts,
  Image,
  Link,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
  withFX,
} from 'unframer';
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext, } from 'unframer';
import * as React from 'react';

// https :https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/3fgSkLJzAAAU6lAT4hVj/SlideShow.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  Children,
  cloneElement,
  createRef,
  forwardRef,
  useCallback,
  useEffect as useEffect2,
  useLayoutEffect,
  useMemo,
  useRef,
  useState as useState2,
} from 'react';
import { addPropertyControls, ControlType, RenderTarget, } from 'unframer';
import { animate, LayoutGroup, motion, sync, useMotionValue, useTransform, wrap, } from 'unframer';

// https :https://framerusercontent.com/modules/V9ryrjN5Am9WM1dJeyyJ/9mrJHeWj7rhvLTLu7Yzt/UsePageVisibility.js
import { useEffect, useState, } from 'react';
var isBrowser = () => typeof document === 'object';
function getBrowserVisibilityProp() {
  if (!isBrowser()) {
    return;
  }
  if (typeof document.hidden !== 'undefined') {
    return 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    return 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    return 'webkitvisibilitychange';
  }
}
function getBrowserDocumentHiddenProp() {
  if (!isBrowser()) {
    return;
  }
  if (typeof document.hidden !== 'undefined') {
    return 'hidden';
  } else if (typeof document.msHidden !== 'undefined') {
    return 'msHidden';
  } else if (typeof document.webkitHidden !== 'undefined') {
    return 'webkitHidden';
  }
}
function getIsDocumentHidden() {
  if (!isBrowser()) {
    return;
  }
  return !document[getBrowserDocumentHiddenProp()];
}
function usePageVisibility() {
  if (!isBrowser()) {
    return;
  }
  const [isVisible, setIsVisible,] = useState(getIsDocumentHidden(),);
  const onVisibilityChange = () => setIsVisible(getIsDocumentHidden(),);
  useEffect(() => {
    const visibilityChange = getBrowserVisibilityProp();
    document.addEventListener(visibilityChange, onVisibilityChange, false,);
    return () => {
      document.removeEventListener(visibilityChange, onVisibilityChange,);
    };
  },);
  return isVisible;
}

// https :https://framerusercontent.com/modules/zvkTOpMSuRzRhLzZZIwG/3fgSkLJzAAAU6lAT4hVj/SlideShow.js
var OPACITY_0 = 1e-3;
function Slideshow(props,) {
  const {
    slots,
    startFrom,
    direction,
    effectsOptions,
    autoPlayControl,
    dragControl,
    alignment,
    gap,
    padding,
    paddingPerSide,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    itemAmount,
    fadeOptions,
    intervalControl,
    transitionControl,
    arrowOptions,
    borderRadius,
    progressOptions,
    style,
  } = props;
  const { effectsOpacity, effectsScale, effectsRotate, effectsPerspective, effectsHover, } = effectsOptions;
  const { fadeContent, overflow, fadeWidth, fadeInset, fadeAlpha, } = fadeOptions;
  const {
    showMouseControls,
    arrowSize,
    arrowRadius,
    arrowFill,
    leftArrow,
    rightArrow,
    arrowShouldSpace = true,
    arrowShouldFadeIn = false,
    arrowPosition,
    arrowPadding,
    arrowGap,
    arrowPaddingTop,
    arrowPaddingRight,
    arrowPaddingBottom,
    arrowPaddingLeft,
  } = arrowOptions;
  const {
    showProgressDots,
    dotSize,
    dotsInset,
    dotsRadius,
    dotsPadding,
    dotsGap,
    dotsFill,
    dotsBackground,
    dotsActiveOpacity,
    dotsOpacity,
    dotsBlur,
  } = progressOptions;
  const paddingValue = paddingPerSide ? `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px` : `${padding}px`;
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const hasChildren = Children.count(slots,) > 0;
  const isHorizontal = direction === 'left' || direction === 'right';
  const isInverted = direction === 'right' || direction === 'bottom';
  if (!hasChildren) {
    return /* @__PURE__ */ _jsxs('section', {
      style: placeholderStyles,
      children: [
        /* @__PURE__ */ _jsx('div', { style: emojiStyles, children: '\u2B50\uFE0F', },),
        /* @__PURE__ */ _jsx('p', { style: titleStyles, children: 'Connect to Content', },),
        /* @__PURE__ */ _jsx('p', {
          style: subtitleStyles,
          children: 'Add layers or components to make infinite auto-playing slideshows.',
        },),
      ],
    },);
  }
  const parentRef = useRef(null,);
  const childrenRef = useMemo(() => {
    return slots.map((index,) => /* @__PURE__ */ createRef());
  }, [slots,],);
  const timeoutRef = useRef(void 0,);
  const [size, setSize,] = useState2({ parent: null, children: null, item: null, itemWidth: null, itemHeight: null, },);
  const [isHovering, setIsHovering,] = useState2(false,);
  const [shouldPlayOnHover, setShouldPlayOnHover,] = useState2(autoPlayControl,);
  const [isMouseDown, setIsMouseDown,] = useState2(false,);
  const [isResizing, setIsResizing,] = useState2(false,);
  const dupedChildren = [];
  let duplicateBy = 4;
  if (isCanvas) {
    duplicateBy = 1;
  }
  const measure = useCallback(() => {
    sync.read(() => {
      if (hasChildren && parentRef.current) {
        const total = slots.length - 1;
        const parentLength = isHorizontal ? parentRef.current.offsetWidth : parentRef.current.offsetHeight;
        const start = childrenRef[0].current ? isHorizontal ? childrenRef[0].current.offsetLeft : childrenRef[0].current.offsetTop : 0;
        const end = childrenRef[total].current
          ? isHorizontal
            ? childrenRef[total].current.offsetLeft + childrenRef[total].current.offsetWidth
            : childrenRef[total].current.offsetTop + childrenRef[total].current.offsetHeight
          : 0;
        const childrenLength = end - start + gap;
        const itemSize = childrenRef[0].current
          ? isHorizontal ? childrenRef[0].current.offsetWidth : childrenRef[0].current.offsetHeight
          : 0;
        const itemWidth = childrenRef[0].current ? childrenRef[0].current.offsetWidth : 0;
        const itemHeight = childrenRef[0].current ? childrenRef[0].current.offsetHeight : 0;
        setSize({ parent: parentLength, children: childrenLength, item: itemSize, itemWidth, itemHeight, },);
      }
    },);
  }, [hasChildren,],);
  useLayoutEffect(() => {
    if (hasChildren) {
      measure();
    }
  }, [hasChildren, itemAmount,],);
  let initialResize = useRef(true,);
  useEffect2(() => {
    return Et(parentRef.current, ({ contentSize, },) => {
      if (!initialResize.current && (contentSize.width || contentSize.height)) {
        measure();
        setIsResizing(true,);
      }
      initialResize.current = false;
    },);
  }, [],);
  useEffect2(() => {
    if (isResizing) {
      const timer = setTimeout(() => setIsResizing(false,), 500,);
      return () => clearTimeout(timer,);
    }
  }, [isResizing,],);
  const totalItems = slots === null || slots === void 0 ? void 0 : slots.length;
  const childrenSize = isCanvas ? 0 : size === null || size === void 0 ? void 0 : size.children;
  const itemWithGap = (size === null || size === void 0 ? void 0 : size.item) + gap;
  const itemOffset = startFrom * itemWithGap;
  const [currentItem, setCurrentItem,] = useState2(startFrom + totalItems,);
  const [isDragging, setIsDragging,] = useState2(false,);
  const isVisible = usePageVisibility();
  const factor = isInverted ? 1 : -1;
  const xOrY = useMotionValue(childrenSize,);
  const canvasPosition = isHorizontal
    ? -startFrom * ((size === null || size === void 0 ? void 0 : size.itemWidth) + gap)
    : -startFrom * ((size === null || size === void 0 ? void 0 : size.itemHeight) + gap);
  const newPosition = () => factor * currentItem * itemWithGap;
  const wrappedValue = !isCanvas
    ? useTransform(xOrY, (value,) => {
      const wrapped = wrap(-childrenSize, -childrenSize * 2, value,);
      return isNaN(wrapped,) ? 0 : wrapped;
    },)
    : 0;
  const wrappedIndex = wrap(0, totalItems, currentItem,);
  const wrappedIndexInverted = wrap(0, -totalItems, currentItem,);
  useLayoutEffect(() => {
    if ((size === null || size === void 0 ? void 0 : size.children) === null) {
      return;
    }
    if (!initialResize.current && isResizing) {
      xOrY.set(newPosition(),);
    }
  }, [size, childrenSize, factor, itemOffset, currentItem, itemWithGap, isResizing,],);
  const switchPages = () => {
    if (isCanvas || !hasChildren || !size.parent || isDragging) {
      return;
    }
    if (xOrY.get() !== newPosition()) {
      animate(xOrY, newPosition(), transitionControl,);
    }
    if (autoPlayControl && shouldPlayOnHover) {
      timeoutRef.current = setTimeout(() => {
        setCurrentItem(currentItem + 1,);
        switchPages();
      }, intervalControl * 1e3,);
    }
  };
  const setDelta = (delta,) => {
    if (!isInverted) {
      setCurrentItem(currentItem + delta,);
    } else {
      setCurrentItem(currentItem - delta,);
    }
  };
  const setPage = (index,) => {
    const currentItemWrapped = wrap(0, totalItems, currentItem,);
    const currentItemWrappedInvert = wrap(0, -totalItems, currentItem,);
    const goto = index - currentItemWrapped;
    const gotoInverted = index - Math.abs(currentItemWrappedInvert,);
    if (!isInverted) {
      setCurrentItem(currentItem + goto,);
    } else {
      setCurrentItem(currentItem - gotoInverted,);
    }
  };
  const handleDragStart = () => {
    setIsDragging(true,);
  };
  const handleDragEnd = (event, { offset, velocity, },) => {
    setIsDragging(false,);
    const offsetXorY = isHorizontal ? offset.x : offset.y;
    const velocityThreshold = 200;
    const velocityXorY = isHorizontal ? velocity.x : velocity.y;
    const isHalfOfNext = offsetXorY < -size.item / 2;
    const isHalfOfPrev = offsetXorY > size.item / 2;
    const normalizedOffset = Math.abs(offsetXorY,);
    const itemDelta = Math.round(normalizedOffset / size.item,);
    const itemDeltaFromOne = itemDelta === 0 ? 1 : itemDelta;
    if (velocityXorY > velocityThreshold) {
      setDelta(-itemDeltaFromOne,);
    } else if (velocityXorY < -velocityThreshold) {
      setDelta(itemDeltaFromOne,);
    } else {
      if (isHalfOfNext) {
        setDelta(itemDelta,);
      }
      if (isHalfOfPrev) {
        setDelta(-itemDelta,);
      }
    }
  };
  useEffect2(() => {
    if (!isVisible || isResizing) {
      return;
    }
    switchPages();
    return () => timeoutRef.current && clearTimeout(timeoutRef.current,);
  }, [dupedChildren, isVisible, isResizing,],);
  let childCounter = 0;
  let columnOrRowValue = `calc(${100 / itemAmount}% - ${gap}px + ${gap / itemAmount}px)`;
  for (let index = 0; index < duplicateBy; index++) {
    dupedChildren.push(...Children.map(slots, (child, childIndex,) => {
      let ref;
      if (childIndex === 0) {
        ref = childrenRef[0];
      }
      if (childIndex === slots.length - 1) {
        ref = childrenRef[1];
      }
      return /* @__PURE__ */ _jsx(Slide, {
        ref: childrenRef[childIndex],
        slideKey: index + childIndex + 'lg',
        index,
        width: isHorizontal ? itemAmount > 1 ? columnOrRowValue : '100%' : '100%',
        height: !isHorizontal ? itemAmount > 1 ? columnOrRowValue : '100%' : '100%',
        size,
        child,
        numChildren: slots === null || slots === void 0 ? void 0 : slots.length,
        wrappedValue,
        childCounter: childCounter++,
        gap,
        isCanvas,
        isHorizontal,
        effectsOpacity,
        effectsScale,
        effectsRotate,
        children: index + childIndex,
      }, index + childIndex + 'lg',);
    },),);
  }
  const fadeDirection = isHorizontal ? 'to right' : 'to bottom';
  const fadeWidthStart = fadeWidth / 2;
  const fadeWidthEnd = 100 - fadeWidth / 2;
  const fadeInsetStart = clamp(fadeInset, 0, fadeWidthStart,);
  const fadeInsetEnd = 100 - fadeInset;
  const fadeMask =
    `linear-gradient(${fadeDirection}, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetStart}%, rgba(0, 0, 0, 1) ${fadeWidthStart}%, rgba(0, 0, 0, 1) ${fadeWidthEnd}%, rgba(0, 0, 0, ${fadeAlpha}) ${fadeInsetEnd}%)`;
  const dots = [];
  const dotsBlurStyle = {};
  if (showProgressDots) {
    for (let i = 0; i < (slots === null || slots === void 0 ? void 0 : slots.length); i++) {
      dots.push(/* @__PURE__ */ _jsx(Dot, {
        dotStyle: { ...dotStyle, width: dotSize, height: dotSize, backgroundColor: dotsFill, },
        buttonStyle: baseButtonStyles,
        selectedOpacity: dotsActiveOpacity,
        opacity: dotsOpacity,
        onClick: () => setPage(i,),
        wrappedIndex,
        wrappedIndexInverted,
        total: totalItems,
        index: i,
        gap: dotsGap,
        padding: dotsPadding,
        isHorizontal,
        isInverted,
      }, i,),);
    }
    if (dotsBlur > 0) {
      dotsBlurStyle.backdropFilter = dotsBlurStyle.WebkitBackdropFilter = dotsBlurStyle.MozBackdropFilter = `blur(${dotsBlur}px)`;
    }
  }
  const dragProps = dragControl
    ? {
      drag: isHorizontal ? 'x' : 'y',
      onDragStart: handleDragStart,
      onDragEnd: handleDragEnd,
      dragDirectionLock: true,
      values: { x: xOrY, y: xOrY, },
      dragMomentum: false,
    }
    : {};
  const arrowHasTop = arrowPosition === 'top-left' || arrowPosition === 'top-mid' || arrowPosition === 'top-right';
  const arrowHasBottom = arrowPosition === 'bottom-left' || arrowPosition === 'bottom-mid' || arrowPosition === 'bottom-right';
  const arrowHasLeft = arrowPosition === 'top-left' || arrowPosition === 'bottom-left';
  const arrowHasRight = arrowPosition === 'top-right' || arrowPosition === 'bottom-right';
  const arrowHasMid = arrowPosition === 'top-mid' || arrowPosition === 'bottom-mid' || arrowPosition === 'auto';
  return /* @__PURE__ */ _jsxs('section', {
    style: {
      ...containerStyle,
      padding: paddingValue,
      WebkitMaskImage: fadeContent ? fadeMask : void 0,
      MozMaskImage: fadeContent ? fadeMask : void 0,
      maskImage: fadeContent ? fadeMask : void 0,
      opacity: (size === null || size === void 0 ? void 0 : size.item) !== null ? 1 : OPACITY_0,
      userSelect: 'none',
    },
    onMouseEnter: () => {
      setIsHovering(true,);
      if (!effectsHover) {
        setShouldPlayOnHover(false,);
      }
    },
    onMouseLeave: () => {
      setIsHovering(false,);
      if (!effectsHover) {
        setShouldPlayOnHover(true,);
      }
    },
    onMouseDown: (event,) => {
      event.preventDefault();
      setIsMouseDown(true,);
    },
    onMouseUp: () => setIsMouseDown(false,),
    children: [
      /* @__PURE__ */ _jsx('div', {
        style: {
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 'inherit',
          position: 'absolute',
          inset: 0,
          overflow: overflow ? 'visible' : 'hidden',
          borderRadius,
          userSelect: 'none',
          perspective: isCanvas ? 'none' : effectsPerspective,
        },
        children: /* @__PURE__ */ _jsx(motion.ul, {
          ref: parentRef,
          ...dragProps,
          style: {
            ...containerStyle,
            gap,
            placeItems: alignment,
            x: isHorizontal ? isCanvas ? canvasPosition : wrappedValue : 0,
            y: !isHorizontal ? isCanvas ? canvasPosition : wrappedValue : 0,
            flexDirection: isHorizontal ? 'row' : 'column',
            transformStyle: effectsRotate !== 0 && !isCanvas ? 'preserve-3d' : void 0,
            cursor: dragControl ? isMouseDown ? 'grabbing' : 'grab' : 'auto',
            userSelect: 'none',
            ...style,
          },
          children: dupedChildren,
        },),
      },),
      /* @__PURE__ */ _jsxs('fieldset', {
        style: { ...controlsStyles, },
        'aria-label': 'Slideshow pagination controls',
        className: 'framer--slideshow-controls',
        children: [
          /* @__PURE__ */ _jsxs(motion.div, {
            style: {
              position: 'absolute',
              display: 'flex',
              flexDirection: isHorizontal ? 'row' : 'column',
              justifyContent: arrowShouldSpace ? 'space-between' : 'center',
              gap: arrowShouldSpace ? 'unset' : arrowGap,
              opacity: arrowShouldFadeIn ? OPACITY_0 : 1,
              alignItems: 'center',
              inset: arrowPadding,
              top: arrowShouldSpace ? arrowPadding : arrowHasTop ? arrowPaddingTop : 'unset',
              left: arrowShouldSpace ? arrowPadding : arrowHasLeft ? arrowPaddingLeft : arrowHasMid ? 0 : 'unset',
              right: arrowShouldSpace ? arrowPadding : arrowHasRight ? arrowPaddingRight : arrowHasMid ? 0 : 'unset',
              bottom: arrowShouldSpace ? arrowPadding : arrowHasBottom ? arrowPaddingBottom : 'unset',
            },
            animate: arrowShouldFadeIn && { opacity: isHovering ? 1 : OPACITY_0, },
            transition: transitionControl,
            children: [
              /* @__PURE__ */ _jsx(motion.button, {
                type: 'button',
                style: {
                  ...baseButtonStyles,
                  backgroundColor: arrowFill,
                  width: arrowSize,
                  height: arrowSize,
                  borderRadius: arrowRadius,
                  rotate: !isHorizontal ? 90 : 0,
                  display: showMouseControls ? 'block' : 'none',
                  pointerEvents: 'auto',
                },
                onClick: () => setDelta(-1,),
                'aria-label': 'Previous',
                whileTap: { scale: 0.9, },
                transition: { duration: 0.15, },
                children: /* @__PURE__ */ _jsx('img', {
                  width: arrowSize,
                  height: arrowSize,
                  src: leftArrow || 'https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg',
                  alt: 'Back Arrow',
                },),
              },),
              /* @__PURE__ */ _jsx(motion.button, {
                type: 'button',
                style: {
                  ...baseButtonStyles,
                  backgroundColor: arrowFill,
                  width: arrowSize,
                  height: arrowSize,
                  borderRadius: arrowRadius,
                  rotate: !isHorizontal ? 90 : 0,
                  display: showMouseControls ? 'block' : 'none',
                  pointerEvents: 'auto',
                },
                onClick: () => setDelta(1,),
                'aria-label': 'Next',
                whileTap: { scale: 0.9, },
                transition: { duration: 0.15, },
                children: /* @__PURE__ */ _jsx('img', {
                  width: arrowSize,
                  height: arrowSize,
                  src: rightArrow || 'https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg',
                  alt: 'Next Arrow',
                },),
              },),
            ],
          },),
          dots.length > 1
            ? /* @__PURE__ */ _jsx('div', {
              style: {
                ...dotsContainerStyle,
                left: isHorizontal ? '50%' : dotsInset,
                top: !isHorizontal ? '50%' : 'unset',
                transform: isHorizontal ? 'translateX(-50%)' : 'translateY(-50%)',
                flexDirection: isHorizontal ? 'row' : 'column',
                bottom: isHorizontal ? dotsInset : 'unset',
                borderRadius: dotsRadius,
                backgroundColor: dotsBackground,
                userSelect: 'none',
                ...dotsBlurStyle,
              },
              children: dots,
            },)
            : null,
        ],
      },),
    ],
  },);
}
Slideshow.defaultProps = {
  direction: 'left',
  dragControl: false,
  startFrom: 0,
  itemAmount: 1,
  infinity: true,
  gap: 10,
  padding: 10,
  autoPlayControl: true,
  effectsOptions: { effectsOpacity: 1, effectsScale: 1, effectsRotate: 0, effectsPerspective: 1200, effectsHover: true, },
  transitionControl: { type: 'spring', stiffness: 200, damping: 40, },
  fadeOptions: { fadeContent: false, overflow: false, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0, },
  arrowOptions: { showMouseControls: true, arrowShouldFadeIn: false, arrowShouldSpace: true, arrowFill: 'rgba(0,0,0,0.2)', arrowSize: 40, },
  progressOptions: { showProgressDots: true, },
};
addPropertyControls(Slideshow, {
  slots: { type: ControlType.Array, title: 'Content', control: { type: ControlType.ComponentInstance, }, },
  direction: {
    type: ControlType.Enum,
    title: 'Direction',
    options: ['left', 'right', 'top', 'bottom',],
    optionIcons: ['direction-left', 'direction-right', 'direction-up', 'direction-down',],
    optionTitles: ['Left', 'Right', 'Top', 'Bottom',],
    displaySegmentedControl: true,
    defaultValue: Slideshow.defaultProps.direction,
  },
  autoPlayControl: { type: ControlType.Boolean, title: 'Auto Play', defaultValue: true, },
  intervalControl: {
    type: ControlType.Number,
    title: 'Interval',
    defaultValue: 1.5,
    min: 0.5,
    max: 10,
    step: 0.1,
    displayStepper: true,
    unit: 's',
    hidden: (props,) => !props.autoPlayControl,
  },
  dragControl: { type: ControlType.Boolean, title: 'Draggable', defaultValue: false, },
  startFrom: {
    type: ControlType.Number,
    title: 'Current',
    min: 0,
    max: 10,
    displayStepper: true,
    defaultValue: Slideshow.defaultProps.startFrom,
  },
  effectsOptions: {
    type: ControlType.Object,
    title: 'Effects',
    controls: {
      effectsOpacity: {
        type: ControlType.Number,
        title: 'Opacity',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsOpacity,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: true,
      },
      effectsScale: {
        type: ControlType.Number,
        title: 'Scale',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsScale,
        min: 0,
        max: 1,
        step: 0.01,
        displayStepper: true,
      },
      effectsPerspective: {
        type: ControlType.Number,
        title: 'Perspective',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsPerspective,
        min: 200,
        max: 2e3,
        step: 1,
      },
      effectsRotate: {
        type: ControlType.Number,
        title: 'Rotate',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsRotate,
        min: -180,
        max: 180,
        step: 1,
      },
      effectsHover: {
        type: ControlType.Boolean,
        title: 'On Hover',
        enabledTitle: 'Play',
        disabledTitle: 'Pause',
        defaultValue: Slideshow.defaultProps.effectsOptions.effectsHover,
      },
    },
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
  itemAmount: {
    type: ControlType.Number,
    title: 'Items',
    min: 1,
    max: 10,
    displayStepper: true,
    defaultValue: Slideshow.defaultProps.itemAmount,
  },
  gap: { type: ControlType.Number, title: 'Gap', min: 0, },
  padding: {
    title: 'Padding',
    type: ControlType.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: ['Padding', 'Padding per side',],
    defaultValue: 0,
    valueKeys: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft',],
    valueLabels: ['T', 'R', 'B', 'L',],
    min: 0,
  },
  borderRadius: { type: ControlType.Number, title: 'Radius', min: 0, max: 500, displayStepper: true, defaultValue: 0, },
  transitionControl: { type: ControlType.Transition, defaultValue: Slideshow.defaultProps.transitionControl, title: 'Transition', },
  fadeOptions: {
    type: ControlType.Object,
    title: 'Clipping',
    controls: {
      fadeContent: { type: ControlType.Boolean, title: 'Fade', defaultValue: false, },
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
  arrowOptions: {
    type: ControlType.Object,
    title: 'Arrows',
    controls: {
      showMouseControls: { type: ControlType.Boolean, title: 'Show', defaultValue: Slideshow.defaultProps.arrowOptions.showMouseControls, },
      arrowFill: {
        type: ControlType.Color,
        title: 'Fill',
        hidden: (props,) => !props.showMouseControls,
        defaultValue: Slideshow.defaultProps.arrowOptions.arrowFill,
      },
      leftArrow: { type: ControlType.Image, title: 'Previous', hidden: (props,) => !props.showMouseControls, },
      rightArrow: { type: ControlType.Image, title: 'Next', hidden: (props,) => !props.showMouseControls, },
      arrowSize: {
        type: ControlType.Number,
        title: 'Size',
        min: 0,
        max: 200,
        displayStepper: true,
        defaultValue: Slideshow.defaultProps.arrowOptions.arrowSize,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowRadius: {
        type: ControlType.Number,
        title: 'Radius',
        min: 0,
        max: 500,
        defaultValue: 40,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowShouldFadeIn: {
        type: ControlType.Boolean,
        title: 'Fade In',
        defaultValue: false,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowShouldSpace: {
        type: ControlType.Boolean,
        title: 'Distance',
        enabledTitle: 'Space',
        disabledTitle: 'Group',
        defaultValue: Slideshow.defaultProps.arrowOptions.arrowShouldSpace,
        hidden: (props,) => !props.showMouseControls,
      },
      arrowPosition: {
        type: ControlType.Enum,
        title: 'Position',
        options: ['auto', 'top-left', 'top-mid', 'top-right', 'bottom-left', 'bottom-mid', 'bottom-right',],
        optionTitles: ['Center', 'Top Left', 'Top Middle', 'Top Right', 'Bottom Left', 'Bottom Middle', 'Bottom Right',],
        hidden: (props,) => !props.showMouseControls || props.arrowShouldSpace,
      },
      arrowPadding: {
        type: ControlType.Number,
        title: 'Inset',
        min: -100,
        max: 100,
        defaultValue: 20,
        displayStepper: true,
        hidden: (props,) => !props.showMouseControls || !props.arrowShouldSpace,
      },
      arrowPaddingTop: {
        type: ControlType.Number,
        title: 'Top',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'bottom-mid' ||
          props.arrowPosition === 'bottom-left' || props.arrowPosition === 'bottom-right',
      },
      arrowPaddingBottom: {
        type: ControlType.Number,
        title: 'Bottom',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'top-mid' ||
          props.arrowPosition === 'top-left' || props.arrowPosition === 'top-right',
      },
      arrowPaddingRight: {
        type: ControlType.Number,
        title: 'Right',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'top-left' ||
          props.arrowPosition === 'top-mid' || props.arrowPosition === 'bottom-left' || props.arrowPosition === 'bottom-mid',
      },
      arrowPaddingLeft: {
        type: ControlType.Number,
        title: 'Left',
        min: -500,
        max: 500,
        defaultValue: 0,
        displayStepper: true,
        hidden: (props,) =>
          !props.showMouseControls || props.arrowShouldSpace || props.arrowPosition === 'auto' || props.arrowPosition === 'top-right' ||
          props.arrowPosition === 'top-mid' || props.arrowPosition === 'bottom-right' || props.arrowPosition === 'bottom-mid',
      },
      arrowGap: {
        type: ControlType.Number,
        title: 'Gap',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showMouseControls || props.arrowShouldSpace,
      },
    },
  },
  progressOptions: {
    type: ControlType.Object,
    title: 'Dots',
    controls: {
      showProgressDots: { type: ControlType.Boolean, title: 'Show', defaultValue: false, },
      dotSize: {
        type: ControlType.Number,
        title: 'Size',
        min: 1,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsInset: {
        type: ControlType.Number,
        title: 'Inset',
        min: -100,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsGap: {
        type: ControlType.Number,
        title: 'Gap',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsPadding: {
        type: ControlType.Number,
        title: 'Padding',
        min: 0,
        max: 100,
        defaultValue: 10,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsFill: {
        type: ControlType.Color,
        title: 'Fill',
        defaultValue: '#fff',
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsBackground: {
        type: ControlType.Color,
        title: 'Backdrop',
        defaultValue: 'rgba(0,0,0,0.2)',
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsRadius: {
        type: ControlType.Number,
        title: 'Radius',
        min: 0,
        max: 200,
        defaultValue: 50,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsOpacity: {
        type: ControlType.Number,
        title: 'Opacity',
        min: 0,
        max: 1,
        defaultValue: 0.5,
        step: 0.1,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsActiveOpacity: {
        type: ControlType.Number,
        title: 'Current',
        min: 0,
        max: 1,
        defaultValue: 1,
        step: 0.1,
        displayStepper: true,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
      dotsBlur: {
        type: ControlType.Number,
        title: 'Blur',
        min: 0,
        max: 50,
        defaultValue: 0,
        step: 1,
        hidden: (props,) => !props.showProgressDots || props.showScrollbar,
      },
    },
  },
},);
var containerStyle = {
  display: 'flex',
  flexDirection: 'row',
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
var subtitleStyles = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: 'center', };
var baseButtonStyles = {
  border: 'none',
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
  overflow: 'hidden',
  background: 'transparent',
  cursor: 'pointer',
  margin: 0,
  padding: 0,
};
var controlsStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'absolute',
  pointerEvents: 'none',
  userSelect: 'none',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  border: 0,
  padding: 0,
  margin: 0,
};
var clamp = (num, min, max,) => Math.min(Math.max(num, min,), max,);
var Slide = /* @__PURE__ */ forwardRef(function Component(props, ref,) {
  var _child_props, _child_props1;
  const {
    slideKey,
    width,
    height,
    child,
    size,
    gap,
    wrappedValue,
    numChildren,
    childCounter,
    isCanvas,
    effects,
    effectsOpacity,
    effectsScale,
    effectsRotate,
    isHorizontal,
    isLast,
    index,
  } = props;
  const childOffset = ((size === null || size === void 0 ? void 0 : size.item) + gap) * childCounter;
  const scrollRange = [
    -(size === null || size === void 0 ? void 0 : size.item),
    0,
    (size === null || size === void 0 ? void 0 : size.parent) - (size === null || size === void 0 ? void 0 : size.item) + gap,
    size === null || size === void 0 ? void 0 : size.parent,
  ].map((val,) => val - childOffset);
  const rotateY = !isCanvas && useTransform(wrappedValue, scrollRange, [-effectsRotate, 0, 0, effectsRotate,],);
  const rotateX = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsRotate, 0, 0, -effectsRotate,],);
  const opacity = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsOpacity, 1, 1, effectsOpacity,],);
  const scale = !isCanvas && useTransform(wrappedValue, scrollRange, [effectsScale, 1, 1, effectsScale,],);
  const originXorY = !isCanvas && useTransform(wrappedValue, scrollRange, [1, 1, 0, 0,],);
  const isVisible = !isCanvas && useTransform(wrappedValue, (latest,) => latest >= scrollRange[1] && latest <= scrollRange[2],);
  useEffect2(() => {
    if (!isVisible) {
      return;
    }
    return isVisible.onChange((newValue,) => {
      var _ref_current;
      (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.setAttribute('aria-hidden', !newValue,);
    },);
  }, [],);
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    inherit: 'id',
    children: /* @__PURE__ */ _jsx('li', {
      style: { display: 'contents', },
      'aria-hidden': index === 0 ? false : true,
      children: /* @__PURE__ */ cloneElement(child, {
        ref,
        key: slideKey + 'child',
        style: {
          ...(_child_props = child.props) === null || _child_props === void 0 ? void 0 : _child_props.style,
          flexShrink: 0,
          userSelect: 'none',
          width,
          height,
          opacity,
          scale,
          originX: isHorizontal ? originXorY : 0.5,
          originY: !isHorizontal ? originXorY : 0.5,
          rotateY: isHorizontal ? rotateY : 0,
          rotateX: !isHorizontal ? rotateX : 0,
        },
        layoutId: child.props.layoutId ? child.props.layoutId + '-original-' + index : void 0,
      }, (_child_props1 = child.props) === null || _child_props1 === void 0 ? void 0 : _child_props1.children,),
    },),
  },);
},);
function Dot(
  {
    selectedOpacity,
    opacity,
    total,
    index,
    wrappedIndex,
    wrappedIndexInverted,
    dotStyle: dotStyle2,
    buttonStyle,
    gap,
    padding,
    isHorizontal,
    isInverted,
    ...props
  },
) {
  let isSelected = wrappedIndex === index;
  if (isInverted) {
    isSelected = Math.abs(wrappedIndexInverted,) === index;
  }
  const inlinePadding = gap / 2;
  let top = !isHorizontal && index > 0 ? inlinePadding : padding;
  let bottom = !isHorizontal && index !== total - 1 ? inlinePadding : padding;
  let right = isHorizontal && index !== total - 1 ? inlinePadding : padding;
  let left = isHorizontal && index > 0 ? inlinePadding : padding;
  return /* @__PURE__ */ _jsx('button', {
    'aria-label': `Scroll to page ${index + 1}`,
    type: 'button',
    ...props,
    style: { ...buttonStyle, padding: `${top}px ${right}px ${bottom}px ${left}px`, },
    children: /* @__PURE__ */ _jsx(motion.div, {
      style: { ...dotStyle2, },
      initial: false,
      animate: { opacity: isSelected ? selectedOpacity : opacity, },
      transition: { duration: 0.3, },
    },),
  },);
}
var dotsContainerStyle = {
  display: 'flex',
  placeContent: 'center',
  placeItems: 'center',
  overflow: 'hidden',
  position: 'absolute',
  pointerEvents: 'auto',
};
var dotStyle = {
  borderRadius: '50%',
  background: 'white',
  cursor: 'pointer',
  border: 'none',
  placeContent: 'center',
  placeItems: 'center',
  padding: 0,
};

// https :https://framerusercontent.com/modules/YPPQaawwYaqGsNWuaEiH/wGA6N0W2KLqGzirj52m1/q64yDrOL3.js
var PhosphorFonts = getFonts(Icon,);
var MotionDivWithFX = withFX(motion2.div,);
var RichTextWithFX = withFX(RichText,);
var SlideshowFonts = getFonts(Slideshow,);
var cycleOrder = ['QJ6X5OV2Q', 'jNQqNcpjl',];
var serializationHash = 'framer-z3eyC';
var variantClassNames = { jNQqNcpjl: 'framer-v-tez7sd', QJ6X5OV2Q: 'framer-v-1b5ydyb', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20, };
var transition2 = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var animation1 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition2, x: 0, y: 20, };
var transformTemplate1 = (_, t,) => `perspective(1200px) ${t}`;
var transition3 = { damping: 40, delay: 0.2, mass: 1, stiffness: 400, type: 'spring', };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition3, x: 0, y: 20, };
var transition4 = { damping: 40, delay: 0.3, mass: 1, stiffness: 400, type: 'spring', };
var animation3 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, transition: transition4, x: 0, y: 20, };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion2(React.Fragment,);
var humanReadableVariantMap = { Desktop: 'QJ6X5OV2Q', Tablet: 'jNQqNcpjl', };
var getProps = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'QJ6X5OV2Q',
  };
};
var createLayoutDependency = (props, variants,) => variants.join('-',) + props.layoutDependency;
var Component2 = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const { baseVariant, classNames, gestureVariant, setGestureState, setVariant, variants, } = useVariantState({
    cycleOrder,
    defaultVariant: 'QJ6X5OV2Q',
    variant,
    variantClassNames,
  },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup2, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs2(motion2.div, {
          ...restProps,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1b5ydyb', className, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'QJ6X5OV2Q',
          onHoverEnd: () => setGestureState({ isHovered: false, },),
          onHoverStart: () => setGestureState({ isHovered: true, },),
          onTap: () => setGestureState({ isPressed: false, },),
          onTapCancel: () => setGestureState({ isPressed: false, },),
          onTapStart: () => setGestureState({ isPressed: true, },),
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(255, 255, 255)', ...style, },
          ...addPropertyOverrides({ jNQqNcpjl: { 'data-framer-name': 'Tablet', }, }, baseVariant, gestureVariant,),
          children: [
            /* @__PURE__ */ _jsxs2(motion2.div, {
              className: 'framer-1wzq7ls',
              'data-framer-name': 'Header',
              layoutDependency,
              layoutId: 'OpQ9kJexP',
              children: [
                /* @__PURE__ */ _jsxs2(MotionDivWithFX, {
                  __framer__animate: { transition: transition2, },
                  __framer__animateOnce: true,
                  __framer__enter: animation,
                  __framer__exit: animation1,
                  __framer__styleAppearEffectEnabled: true,
                  __framer__threshold: 0.5,
                  __perspectiveFX: false,
                  __smartComponentFX: true,
                  __targetOpacity: 1,
                  className: 'framer-13c6u4s',
                  layoutDependency,
                  layoutId: 'j6rISou1p',
                  transformTemplate: transformTemplate1,
                  children: [
                    /* @__PURE__ */ _jsx2(Image, {
                      background: { alt: '', fit: 'fill', intrinsicHeight: 120, intrinsicWidth: 120, },
                      className: 'framer-emhnvy',
                      layoutDependency,
                      layoutId: 'sI_hMLheh',
                      style: {
                        borderBottomLeftRadius: 41,
                        borderBottomRightRadius: 41,
                        borderTopLeftRadius: 41,
                        borderTopRightRadius: 41,
                      },
                    },),
                    /* @__PURE__ */ _jsx2(motion2.div, {
                      className: 'framer-6eneq3',
                      'data-framer-name': 'Twitter',
                      layoutDependency,
                      layoutId: 'ODS9Kq_Yt',
                      children: /* @__PURE__ */ _jsx2(motion2.div, {
                        className: 'framer-5mjn9m',
                        'data-framer-name': 'Button Icon',
                        layoutDependency,
                        layoutId: 'p3n1GYo2e',
                        style: {
                          backgroundColor: 'var(--token-40c03004-286a-43c1-b36f-58b60663152c, rgb(242, 242, 242))',
                          borderBottomLeftRadius: '50%',
                          borderBottomRightRadius: '50%',
                          borderTopLeftRadius: '50%',
                          borderTopRightRadius: '50%',
                        },
                        children: /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx2(motion2.div, {
                            className: 'framer-yuqshr-container',
                            layoutDependency,
                            layoutId: 'ZEz3L23bN-container',
                            children: /* @__PURE__ */ _jsx2(Icon, {
                              color: 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                              height: '100%',
                              iconSearch: 'House',
                              iconSelection: 'TwitterLogo',
                              id: 'ZEz3L23bN',
                              layoutId: 'ZEz3L23bN',
                              mirrored: false,
                              selectByList: true,
                              style: { height: '100%', width: '100%', },
                              weight: 'fill',
                              width: '100%',
                            },),
                          },),
                        },),
                      },),
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsx2(RichTextWithFX, {
                  __framer__animate: { transition: transition3, },
                  __framer__animateOnce: true,
                  __framer__enter: animation,
                  __framer__exit: animation2,
                  __framer__styleAppearEffectEnabled: true,
                  __framer__threshold: 0.5,
                  __fromCanvasComponent: true,
                  __perspectiveFX: false,
                  __smartComponentFX: true,
                  __targetOpacity: 1,
                  children: /* @__PURE__ */ _jsx2(React.Fragment, {
                    children: /* @__PURE__ */ _jsxs2(motion2.h3, {
                      style: {
                        '--font-selector': 'R0Y7SW50ZXItNjAw',
                        '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                        '--framer-font-size': '20px',
                        '--framer-font-weight': '600',
                        '--framer-letter-spacing': '-0.5px',
                        '--framer-line-height': '1.4em',
                        '--framer-text-alignment': 'left',
                        '--framer-text-color': 'var(--extracted-a0htzi, var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34)))',
                      },
                      children: [
                        'I\'m Dana Parker, a designer at ',
                        /* @__PURE__ */ _jsx2(Link, {
                          href: 'https://www.framer.com/',
                          openInNewTab: true,
                          smoothScroll: false,
                          children: /* @__PURE__ */ _jsx2(motion2.a, { children: 'Framer', },),
                        },),
                        '. I am focusing on creating the best website building tool with my talented team. A high level of craft is very important to me and my work.',
                      ],
                    },),
                  },),
                  className: 'framer-6vwca4',
                  fonts: ['GF;Inter-600',],
                  layoutDependency,
                  layoutId: 'MdIU0iV0K',
                  style: {
                    '--extracted-a0htzi': 'var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))',
                    '--framer-link-hover-text-color': 'var(--token-fcce9699-25b1-4529-9491-d24458dec076, rgb(103, 102, 255))',
                    '--framer-link-text-color': 'rgba(48, 48, 64, 0.7)',
                    '--framer-link-text-decoration': 'none',
                    '--framer-paragraph-spacing': '0px',
                  },
                  transformTemplate: transformTemplate1,
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs2(MotionDivWithFX, {
              __framer__animate: { transition: transition4, },
              __framer__animateOnce: true,
              __framer__enter: animation,
              __framer__exit: animation3,
              __framer__styleAppearEffectEnabled: true,
              __framer__threshold: 0.5,
              __perspectiveFX: false,
              __smartComponentFX: true,
              __targetOpacity: 1,
              className: 'framer-18oyuoj',
              'data-border': true,
              'data-framer-name': 'Entries',
              layoutDependency,
              layoutId: 'Al128SHMh',
              style: {
                '--border-bottom-width': '0px',
                '--border-color': 'rgba(34, 34, 34, 0.05)',
                '--border-left-width': '0px',
                '--border-right-width': '0px',
                '--border-style': 'solid',
                '--border-top-width': '1px',
              },
              transformTemplate: transformTemplate1,
              children: [
                /* @__PURE__ */ _jsxs2(motion2.div, {
                  className: 'framer-1of4spd',
                  'data-framer-name': 'Bookmarks',
                  layoutDependency,
                  layoutId: 'fR7JbRnxe',
                  style: { borderBottomLeftRadius: 28, borderBottomRightRadius: 28, borderTopLeftRadius: 28, borderTopRightRadius: 28, },
                  children: [
                    /* @__PURE__ */ _jsx2(motion2.div, {
                      className: 'framer-1wv7onw',
                      layoutDependency,
                      layoutId: 'xFphDAssR',
                      children: /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
                        children: /* @__PURE__ */ _jsx2(motion2.div, {
                          className: 'framer-96hukh-container',
                          layoutDependency,
                          layoutId: 'rWTuQIzUz-container',
                          children: /* @__PURE__ */ _jsx2(Slideshow, {
                            alignment: 'center',
                            arrowOptions: {
                              arrowFill: 'rgba(0, 0, 0, 0.2)',
                              arrowGap: 10,
                              arrowPadding: 20,
                              arrowPaddingBottom: 0,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 0,
                              arrowPaddingTop: 0,
                              arrowPosition: 'auto',
                              arrowRadius: 40,
                              arrowShouldFadeIn: false,
                              arrowShouldSpace: true,
                              arrowSize: 40,
                              showMouseControls: true,
                            },
                            autoPlayControl: true,
                            borderRadius: 0,
                            direction: 'left',
                            dragControl: false,
                            effectsOptions: {
                              effectsHover: true,
                              effectsOpacity: 1,
                              effectsPerspective: 1200,
                              effectsRotate: 0,
                              effectsScale: 1,
                            },
                            fadeOptions: { fadeAlpha: 0, fadeContent: false, fadeInset: 0, fadeWidth: 25, overflow: false, },
                            gap: 10,
                            height: '100%',
                            id: 'rWTuQIzUz',
                            intervalControl: 1.5,
                            itemAmount: 1,
                            layoutId: 'rWTuQIzUz',
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: false,
                            paddingRight: 0,
                            paddingTop: 0,
                            progressOptions: {
                              dotsActiveOpacity: 1,
                              dotsBackground: 'rgba(0, 0, 0, 0.2)',
                              dotsBlur: 0,
                              dotsFill: 'rgb(255, 255, 255)',
                              dotsGap: 10,
                              dotsInset: 10,
                              dotSize: 10,
                              dotsOpacity: 0.5,
                              dotsPadding: 10,
                              dotsRadius: 50,
                              showProgressDots: true,
                            },
                            slots: [
                              /* @__PURE__ */ _jsx2(Image, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 4160,
                                  intrinsicWidth: 6240,
                                  pixelHeight: 4160,
                                  pixelWidth: 6240,
                                  sizes: '435px',
                                  src: 'https://framerusercontent.com/images/t8dn05EWcQ5LksvCuelH9p3rY.jpg',
                                  srcSet:
                                    'https://framerusercontent.com/images/t8dn05EWcQ5LksvCuelH9p3rY.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/t8dn05EWcQ5LksvCuelH9p3rY.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/t8dn05EWcQ5LksvCuelH9p3rY.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/t8dn05EWcQ5LksvCuelH9p3rY.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/t8dn05EWcQ5LksvCuelH9p3rY.jpg 6240w',
                                },
                                className: 'framer-1fd6q41',
                                layoutDependency,
                                layoutId: 'g5rkVua2x',
                              },),
                              /* @__PURE__ */ _jsx2(Image, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 6240,
                                  intrinsicWidth: 4160,
                                  pixelHeight: 6240,
                                  pixelWidth: 4160,
                                  sizes: '403px',
                                  src: 'https://framerusercontent.com/images/WEtZzJFNrWcAepmbIri7g1cBOsU.jpg',
                                  srcSet:
                                    'https://framerusercontent.com/images/WEtZzJFNrWcAepmbIri7g1cBOsU.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/WEtZzJFNrWcAepmbIri7g1cBOsU.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/WEtZzJFNrWcAepmbIri7g1cBOsU.jpg?scale-down-to=4096 2730w,https://framerusercontent.com/images/WEtZzJFNrWcAepmbIri7g1cBOsU.jpg 4160w',
                                },
                                className: 'framer-1t3btpw',
                                layoutDependency,
                                layoutId: 'rehSGSCZL',
                              },),
                              /* @__PURE__ */ _jsx2(Image, {
                                background: {
                                  alt: '',
                                  fit: 'fill',
                                  intrinsicHeight: 7728,
                                  intrinsicWidth: 5152,
                                  pixelHeight: 7728,
                                  pixelWidth: 5152,
                                  sizes: '456px',
                                  src: 'https://framerusercontent.com/images/ddvWE81zZrZmVDvYR3EaIbyjWOU.jpg',
                                  srcSet:
                                    'https://framerusercontent.com/images/ddvWE81zZrZmVDvYR3EaIbyjWOU.jpg?scale-down-to=1024 682w,https://framerusercontent.com/images/ddvWE81zZrZmVDvYR3EaIbyjWOU.jpg?scale-down-to=2048 1365w,https://framerusercontent.com/images/ddvWE81zZrZmVDvYR3EaIbyjWOU.jpg?scale-down-to=4096 2730w,https://framerusercontent.com/images/ddvWE81zZrZmVDvYR3EaIbyjWOU.jpg 5152w',
                                },
                                className: 'framer-jnsgn6',
                                layoutDependency,
                                layoutId: 'hApXvChVn',
                              },),
                            ],
                            startFrom: 0,
                            style: { height: '100%', width: '100%', },
                            transitionControl: { damping: 40, stiffness: 200, type: 'spring', },
                            width: '100%',
                          },),
                        },),
                      },),
                    },),
                    /* @__PURE__ */ _jsx2(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx2(React.Fragment, {
                        children: /* @__PURE__ */ _jsx2(motion2.p, {
                          style: {
                            '--font-selector': 'R0Y7SW50ZXItNTAw',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-size': '14px',
                            '--framer-font-weight': '500',
                            '--framer-letter-spacing': '0px',
                            '--framer-line-height': '1.5em',
                            '--framer-text-alignment': 'left',
                            '--framer-text-color':
                              'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                          },
                          children: 'Bookmarks',
                        },),
                      },),
                      className: 'framer-1kjuxs8',
                      fonts: ['GF;Inter-500',],
                      layoutDependency,
                      layoutId: 'S0Z6CNkWo',
                      style: {
                        '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                        '--framer-link-hover-text-color':
                          'var(--token-6e365f09-eb16-423f-93f7-5f3b4b83d578, rgb(255, 204, 34)) /* {"name":"Yellow"} */',
                        '--framer-link-text-color': 'rgba(48, 48, 64, 0.7)',
                        '--framer-link-text-decoration': 'none',
                        '--framer-paragraph-spacing': '0px',
                      },
                      verticalAlignment: 'top',
                      withExternalLayout: true,
                    },),
                    /* @__PURE__ */ _jsxs2(motion2.div, {
                      className: 'framer-e223h2',
                      'data-framer-name': 'Bookmark',
                      layoutDependency,
                      layoutId: 'Bb4DRr77N',
                      children: [
                        /* @__PURE__ */ _jsx2(motion2.div, {
                          className: 'framer-1xokyxn',
                          layoutDependency,
                          layoutId: 'Qwexip93p',
                          children: /* @__PURE__ */ _jsx2(Image, {
                            background: { alt: '', fit: 'fill', },
                            className: 'framer-10r2vr8',
                            layoutDependency,
                            layoutId: 'Pg37sPHL_',
                            style: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                          },),
                        },),
                        /* @__PURE__ */ _jsx2(motion2.div, {
                          className: 'framer-47n4du',
                          layoutDependency,
                          layoutId: 'C6uSsaOq2',
                          children: /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: 'framer-1w2t1oi',
                            layoutDependency,
                            layoutId: 'bdCvztvz2',
                            children: [
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.h3, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNjAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '20px',
                                      '--framer-font-weight': '600',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '1.4em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-a0htzi, var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34)))',
                                    },
                                    children: 'Moderat',
                                  },),
                                },),
                                className: 'framer-1faomiy',
                                fonts: ['GF;Inter-600',],
                                layoutDependency,
                                layoutId: 'kAHupbUCf',
                                style: {
                                  '--extracted-a0htzi': 'var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNTAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '0px',
                                      '--framer-line-height': '1.5em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                                    },
                                    children: 'A beautiful clean typeface with punch.',
                                  },),
                                },),
                                className: 'framer-h892kc',
                                fonts: ['GF;Inter-500',],
                                layoutDependency,
                                layoutId: 'PntPawgjh',
                                style: {
                                  '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                        },),
                      ],
                    },),
                    /* @__PURE__ */ _jsxs2(motion2.div, {
                      className: 'framer-vyjk6',
                      'data-framer-name': 'Bookmark Copy',
                      layoutDependency,
                      layoutId: 'ZXyBL3UxK',
                      children: [
                        /* @__PURE__ */ _jsx2(motion2.div, {
                          className: 'framer-1nnbol7',
                          layoutDependency,
                          layoutId: 'GbsCPfY0X',
                          children: /* @__PURE__ */ _jsx2(Image, {
                            background: { alt: '', fit: 'fill', },
                            className: 'framer-1pt1hk2',
                            layoutDependency,
                            layoutId: 'lHK_YQPyU',
                            style: {
                              borderBottomLeftRadius: 12,
                              borderBottomRightRadius: 12,
                              borderTopLeftRadius: 12,
                              borderTopRightRadius: 12,
                            },
                          },),
                        },),
                        /* @__PURE__ */ _jsx2(motion2.div, {
                          className: 'framer-gu1odh',
                          layoutDependency,
                          layoutId: 'diOrHb28Y',
                          children: /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: 'framer-6jxmdw',
                            layoutDependency,
                            layoutId: 'A4L0BOGT4',
                            children: [
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.h3, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNjAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '20px',
                                      '--framer-font-weight': '600',
                                      '--framer-letter-spacing': '-0.5px',
                                      '--framer-line-height': '1.4em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-a0htzi, var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34)))',
                                    },
                                    children: 'Degular',
                                  },),
                                },),
                                className: 'framer-3pk42e',
                                fonts: ['GF;Inter-600',],
                                layoutDependency,
                                layoutId: 'KXEVl56fZ',
                                style: {
                                  '--extracted-a0htzi': 'var(--token-b9c3c957-2c66-49c4-9732-fa196fddac20, rgb(0, 17, 34))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNTAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '0px',
                                      '--framer-line-height': '1.5em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                                    },
                                    children: 'So much character in this one.',
                                  },),
                                },),
                                className: 'framer-1u1nwqz',
                                fonts: ['GF;Inter-500',],
                                layoutDependency,
                                layoutId: 'TmPJB8smR',
                                style: {
                                  '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                        },),
                      ],
                    },),
                  ],
                },),
                /* @__PURE__ */ _jsx2(motion2.div, {
                  className: 'framer-vadw1i',
                  'data-framer-name': 'Sidebar',
                  layoutDependency,
                  layoutId: 'VzEzxbLPF',
                  children: /* @__PURE__ */ _jsxs2(motion2.div, {
                    className: 'framer-1ffgcrw',
                    'data-framer-name': 'Friends',
                    layoutDependency,
                    layoutId: 'Wl_VW_8EB',
                    style: { borderBottomLeftRadius: 28, borderBottomRightRadius: 28, borderTopLeftRadius: 28, borderTopRightRadius: 28, },
                    children: [
                      /* @__PURE__ */ _jsx2(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx2(React.Fragment, {
                          children: /* @__PURE__ */ _jsx2(motion2.p, {
                            style: {
                              '--font-selector': 'R0Y7SW50ZXItNTAw',
                              '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                              '--framer-font-size': '14px',
                              '--framer-font-weight': '500',
                              '--framer-letter-spacing': '0px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color':
                                'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                            },
                            children: 'Friends',
                          },),
                        },),
                        className: 'framer-11pc94f',
                        fonts: ['GF;Inter-500',],
                        layoutDependency,
                        layoutId: 'LrLtNUkIh',
                        style: {
                          '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                          '--framer-link-hover-text-color':
                            'var(--token-6e365f09-eb16-423f-93f7-5f3b4b83d578, rgb(255, 204, 34)) /* {"name":"Yellow"} */',
                          '--framer-link-text-color': 'rgba(48, 48, 64, 0.7)',
                          '--framer-link-text-decoration': 'none',
                          '--framer-paragraph-spacing': '0px',
                        },
                        verticalAlignment: 'top',
                        withExternalLayout: true,
                      },),
                      /* @__PURE__ */ _jsxs2(motion2.div, {
                        className: 'framer-1j9mdi3',
                        layoutDependency,
                        layoutId: 'FZhY17jix',
                        children: [
                          /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: 'framer-1c8di1n',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'Od496hw91',
                            children: [
                              /* @__PURE__ */ _jsx2(Image, {
                                background: { alt: '', fit: 'fill', intrinsicHeight: 400, intrinsicWidth: 400, },
                                className: 'framer-tgjfdb',
                                layoutDependency,
                                layoutId: 'K43T__ES_',
                                style: {
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              },),
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNTAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '0px',
                                      '--framer-line-height': '1.5em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                                    },
                                    children: 'Hunter Caron',
                                  },),
                                },),
                                className: 'framer-12jh62',
                                fonts: ['GF;Inter-500',],
                                layoutDependency,
                                layoutId: 'mRzwaZ_OX',
                                style: {
                                  '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                          /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: 'framer-kl86d3',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'g2haIhUiP',
                            children: [
                              /* @__PURE__ */ _jsx2(Image, {
                                background: { alt: '', fit: 'fill', intrinsicHeight: 400, intrinsicWidth: 400, },
                                className: 'framer-1peibnf',
                                layoutDependency,
                                layoutId: 'bsxC0V4HF',
                                style: {
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              },),
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNTAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '0px',
                                      '--framer-line-height': '1.5em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                                    },
                                    children: 'Benjamin den Boer',
                                  },),
                                },),
                                className: 'framer-15j97pm',
                                fonts: ['GF;Inter-500',],
                                layoutDependency,
                                layoutId: 'UZjrKwJdX',
                                style: {
                                  '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                          /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: 'framer-13oeh66',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'c_MNpcuvQ',
                            children: [
                              /* @__PURE__ */ _jsx2(Image, {
                                background: { alt: '', fit: 'fill', intrinsicHeight: 400, intrinsicWidth: 400, },
                                className: 'framer-17a6c1i',
                                layoutDependency,
                                layoutId: 'fNmbk0fF8',
                                style: {
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              },),
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNTAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '0px',
                                      '--framer-line-height': '1.5em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                                    },
                                    children: 'Edoardo Mercati',
                                  },),
                                },),
                                className: 'framer-11i4e7y',
                                fonts: ['GF;Inter-500',],
                                layoutDependency,
                                layoutId: 'gGrNCSfe4',
                                style: {
                                  '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                          /* @__PURE__ */ _jsxs2(motion2.div, {
                            className: 'framer-feaqek',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'ChX4_mOC8',
                            children: [
                              /* @__PURE__ */ _jsx2(Image, {
                                background: { alt: '', fit: 'fill', intrinsicHeight: 400, intrinsicWidth: 400, },
                                className: 'framer-1saurrb',
                                layoutDependency,
                                layoutId: 'TqtI5Kmc9',
                                style: {
                                  borderBottomLeftRadius: 20,
                                  borderBottomRightRadius: 20,
                                  borderTopLeftRadius: 20,
                                  borderTopRightRadius: 20,
                                },
                              },),
                              /* @__PURE__ */ _jsx2(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx2(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx2(motion2.p, {
                                    style: {
                                      '--font-selector': 'R0Y7SW50ZXItNTAw',
                                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                                      '--framer-font-size': '14px',
                                      '--framer-font-weight': '500',
                                      '--framer-letter-spacing': '0px',
                                      '--framer-line-height': '1.5em',
                                      '--framer-text-alignment': 'left',
                                      '--framer-text-color':
                                        'var(--extracted-r6o4lv, var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102)))',
                                    },
                                    children: 'Anne Lee',
                                  },),
                                },),
                                className: 'framer-ate8gg',
                                fonts: ['GF;Inter-500',],
                                layoutDependency,
                                layoutId: 'H7J8l7wNT',
                                style: {
                                  '--extracted-r6o4lv': 'var(--token-fb4b67b5-91ba-4b73-b4a6-f55417ea1c0c, rgb(102, 102, 102))',
                                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                                  '--framer-link-text-decoration': 'underline',
                                  '--framer-paragraph-spacing': '0px',
                                },
                                verticalAlignment: 'top',
                                withExternalLayout: true,
                              },),
                            ],
                          },),
                        ],
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
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-z3eyC.framer-q8o9fw, .framer-z3eyC .framer-q8o9fw { display: block; }',
  '.framer-z3eyC.framer-1b5ydyb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }',
  '.framer-z3eyC .framer-1wzq7ls { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 50px 50px 50px 50px; position: relative; width: 1200px; }',
  '.framer-z3eyC .framer-13c6u4s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-z3eyC .framer-emhnvy { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); overflow: visible; position: relative; width: 48px; }',
  '.framer-z3eyC .framer-6eneq3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-z3eyC .framer-5mjn9m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 12px 12px 12px 12px; position: relative; width: 48px; }',
  '.framer-z3eyC .framer-yuqshr-container { flex: none; height: 24px; position: relative; width: 24px; }',
  '.framer-z3eyC .framer-6vwca4, .framer-z3eyC .framer-1kjuxs8, .framer-z3eyC .framer-1faomiy, .framer-z3eyC .framer-h892kc, .framer-z3eyC .framer-3pk42e, .framer-z3eyC .framer-1u1nwqz { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-z3eyC .framer-18oyuoj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 50px 50px 50px 50px; position: relative; width: 1200px; }',
  '.framer-z3eyC .framer-1of4spd { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-z3eyC .framer-1wv7onw { flex: none; height: 200px; overflow: visible; position: relative; width: 400px; }',
  '.framer-z3eyC .framer-96hukh-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }',
  '.framer-z3eyC .framer-1fd6q41 { height: 281px; overflow: hidden; position: relative; width: 435px; }',
  '.framer-z3eyC .framer-1t3btpw { height: 337px; overflow: hidden; position: relative; width: 403px; }',
  '.framer-z3eyC .framer-jnsgn6 { height: 319px; overflow: hidden; position: relative; width: 456px; }',
  '.framer-z3eyC .framer-e223h2, .framer-z3eyC .framer-vyjk6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-z3eyC .framer-1xokyxn, .framer-z3eyC .framer-1nnbol7 { flex: none; height: 52px; overflow: visible; position: relative; width: 52px; }',
  '.framer-z3eyC .framer-10r2vr8, .framer-z3eyC .framer-1pt1hk2 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 52px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-z3eyC .framer-47n4du, .framer-z3eyC .framer-gu1odh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-z3eyC .framer-1w2t1oi, .framer-z3eyC .framer-6jxmdw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-z3eyC .framer-vadw1i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-z3eyC .framer-1ffgcrw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-z3eyC .framer-11pc94f, .framer-z3eyC .framer-12jh62, .framer-z3eyC .framer-15j97pm, .framer-z3eyC .framer-11i4e7y, .framer-z3eyC .framer-ate8gg { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }',
  '.framer-z3eyC .framer-1j9mdi3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-z3eyC .framer-1c8di1n, .framer-z3eyC .framer-kl86d3, .framer-z3eyC .framer-13oeh66, .framer-z3eyC .framer-feaqek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-z3eyC .framer-tgjfdb, .framer-z3eyC .framer-1peibnf, .framer-z3eyC .framer-17a6c1i, .framer-z3eyC .framer-1saurrb { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 32px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-z3eyC.framer-1b5ydyb, .framer-z3eyC .framer-1wzq7ls, .framer-z3eyC .framer-6eneq3, .framer-z3eyC .framer-5mjn9m, .framer-z3eyC .framer-18oyuoj, .framer-z3eyC .framer-1of4spd, .framer-z3eyC .framer-e223h2, .framer-z3eyC .framer-47n4du, .framer-z3eyC .framer-1w2t1oi, .framer-z3eyC .framer-vyjk6, .framer-z3eyC .framer-gu1odh, .framer-z3eyC .framer-6jxmdw, .framer-z3eyC .framer-vadw1i, .framer-z3eyC .framer-1ffgcrw, .framer-z3eyC .framer-1j9mdi3, .framer-z3eyC .framer-1c8di1n, .framer-z3eyC .framer-kl86d3, .framer-z3eyC .framer-13oeh66, .framer-z3eyC .framer-feaqek { gap: 0px; } .framer-z3eyC.framer-1b5ydyb > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-z3eyC.framer-1b5ydyb > :first-child, .framer-z3eyC .framer-1wzq7ls > :first-child, .framer-z3eyC .framer-1of4spd > :first-child, .framer-z3eyC .framer-47n4du > :first-child, .framer-z3eyC .framer-1w2t1oi > :first-child, .framer-z3eyC .framer-gu1odh > :first-child, .framer-z3eyC .framer-6jxmdw > :first-child, .framer-z3eyC .framer-vadw1i > :first-child, .framer-z3eyC .framer-1ffgcrw > :first-child, .framer-z3eyC .framer-1j9mdi3 > :first-child { margin-top: 0px; } .framer-z3eyC.framer-1b5ydyb > :last-child, .framer-z3eyC .framer-1wzq7ls > :last-child, .framer-z3eyC .framer-1of4spd > :last-child, .framer-z3eyC .framer-47n4du > :last-child, .framer-z3eyC .framer-1w2t1oi > :last-child, .framer-z3eyC .framer-gu1odh > :last-child, .framer-z3eyC .framer-6jxmdw > :last-child, .framer-z3eyC .framer-vadw1i > :last-child, .framer-z3eyC .framer-1ffgcrw > :last-child, .framer-z3eyC .framer-1j9mdi3 > :last-child { margin-bottom: 0px; } .framer-z3eyC .framer-1wzq7ls > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-z3eyC .framer-6eneq3 > *, .framer-z3eyC .framer-1c8di1n > *, .framer-z3eyC .framer-kl86d3 > *, .framer-z3eyC .framer-13oeh66 > *, .framer-z3eyC .framer-feaqek > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-z3eyC .framer-6eneq3 > :first-child, .framer-z3eyC .framer-5mjn9m > :first-child, .framer-z3eyC .framer-18oyuoj > :first-child, .framer-z3eyC .framer-e223h2 > :first-child, .framer-z3eyC .framer-vyjk6 > :first-child, .framer-z3eyC .framer-1c8di1n > :first-child, .framer-z3eyC .framer-kl86d3 > :first-child, .framer-z3eyC .framer-13oeh66 > :first-child, .framer-z3eyC .framer-feaqek > :first-child { margin-left: 0px; } .framer-z3eyC .framer-6eneq3 > :last-child, .framer-z3eyC .framer-5mjn9m > :last-child, .framer-z3eyC .framer-18oyuoj > :last-child, .framer-z3eyC .framer-e223h2 > :last-child, .framer-z3eyC .framer-vyjk6 > :last-child, .framer-z3eyC .framer-1c8di1n > :last-child, .framer-z3eyC .framer-kl86d3 > :last-child, .framer-z3eyC .framer-13oeh66 > :last-child, .framer-z3eyC .framer-feaqek > :last-child { margin-right: 0px; } .framer-z3eyC .framer-5mjn9m > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-z3eyC .framer-18oyuoj > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-z3eyC .framer-1of4spd > *, .framer-z3eyC .framer-1ffgcrw > *, .framer-z3eyC .framer-1j9mdi3 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-z3eyC .framer-e223h2 > *, .framer-z3eyC .framer-vyjk6 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-z3eyC .framer-47n4du > *, .framer-z3eyC .framer-gu1odh > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-z3eyC .framer-1w2t1oi > *, .framer-z3eyC .framer-6jxmdw > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-z3eyC .framer-vadw1i > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } }',
  '.framer-z3eyC.framer-v-tez7sd.framer-1b5ydyb { width: 652px; }',
  '.framer-z3eyC.framer-v-tez7sd .framer-18oyuoj { flex-direction: column; }',
  '.framer-z3eyC.framer-v-tez7sd .framer-1of4spd { flex: none; width: 200%; }',
  '.framer-z3eyC.framer-v-tez7sd .framer-vadw1i { flex: none; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-z3eyC.framer-v-tez7sd .framer-18oyuoj { gap: 0px; } .framer-z3eyC.framer-v-tez7sd .framer-18oyuoj > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-z3eyC.framer-v-tez7sd .framer-18oyuoj > :first-child { margin-top: 0px; } .framer-z3eyC.framer-v-tez7sd .framer-18oyuoj > :last-child { margin-bottom: 0px; } }',
  '.framer-z3eyC[data-border="true"]::after, .framer-z3eyC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var Framerq64yDrOL3 = withCSS(Component2, css, 'framer-z3eyC',);
var stdin_default = Framerq64yDrOL3;
Framerq64yDrOL3.displayName = 'FullPage';
Framerq64yDrOL3.defaultProps = { height: 749, width: 1200, };
addPropertyControls2(Framerq64yDrOL3, {
  variant: { options: ['QJ6X5OV2Q', 'jNQqNcpjl',], optionTitles: ['Desktop', 'Tablet',], title: 'Variant', type: ControlType2.Enum, },
},);
addFonts(Framerq64yDrOL3, [
  {
    explicitInter: true,
    fonts: [{
      family: 'Inter',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2',
      weight: '600',
    }, {
      family: 'Inter',
      source: 'google',
      style: 'normal',
      url: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2',
      weight: '500',
    },],
  },
  ...PhosphorFonts,
  ...SlideshowFonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:full-page
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var full_page_default = stdin_default;
export { full_page_default as default, };
