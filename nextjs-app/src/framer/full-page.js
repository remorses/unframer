'use client';
import { Icon, } from './chunk-NYGXGF5D.js';
import './chunk-KS6IWKVH.js';
import './chunk-6C3VEZWH.js';

// https :https://framerusercontent.com/modules/YPPQaawwYaqGsNWuaEiH/4QsZ7UuPCBwlQefNVCo2/q64yDrOL3.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ComponentViewportProvider,
  ControlType,
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
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var PhosphorFonts = getFonts(Icon,);
var MotionDivWithFX = withFX(motion.div,);
var RichTextWithFX = withFX(RichText,);
var cycleOrder = ['QJ6X5OV2Q', 'jNQqNcpjl',];
var serializationHash = 'framer-wYQyN';
var variantClassNames = { jNQqNcpjl: 'framer-v-tez7sd', QJ6X5OV2Q: 'framer-v-1b5ydyb', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: 'spring', };
var animation = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, x: 0, y: 20, };
var transition2 = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var animation1 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, transition: transition2, x: 0, y: 20, };
var transformTemplate1 = (_, t,) => `perspective(1200px) ${t}`;
var transition3 = { damping: 40, delay: 0.2, mass: 1, stiffness: 400, type: 'spring', };
var animation2 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, transition: transition3, x: 0, y: 20, };
var transition4 = { damping: 40, delay: 0.3, mass: 1, stiffness: 400, type: 'spring', };
var animation3 = { opacity: 0, rotate: 0, rotateX: 0, rotateY: 0, scale: 1, transition: transition4, x: 0, y: 20, };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
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
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
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
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.div, {
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
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-1wzq7ls',
              'data-framer-name': 'Header',
              layoutDependency,
              layoutId: 'OpQ9kJexP',
              children: [
                /* @__PURE__ */ _jsxs(MotionDivWithFX, {
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
                    /* @__PURE__ */ _jsx(Image, {
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
                    /* @__PURE__ */ _jsx(motion.div, {
                      className: 'framer-6eneq3',
                      'data-framer-name': 'Twitter',
                      layoutDependency,
                      layoutId: 'ODS9Kq_Yt',
                      children: /* @__PURE__ */ _jsx(motion.div, {
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
                        children: /* @__PURE__ */ _jsx(ComponentViewportProvider, {
                          children: /* @__PURE__ */ _jsx(motion.div, {
                            className: 'framer-yuqshr-container',
                            layoutDependency,
                            layoutId: 'ZEz3L23bN-container',
                            children: /* @__PURE__ */ _jsx(Icon, {
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
                /* @__PURE__ */ _jsx(RichTextWithFX, {
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
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsxs(motion.h3, {
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
                        /* @__PURE__ */ _jsx(Link, {
                          href: 'https://www.framer.com/',
                          openInNewTab: true,
                          smoothScroll: false,
                          children: /* @__PURE__ */ _jsx(motion.a, { children: 'Framer', },),
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
            /* @__PURE__ */ _jsxs(MotionDivWithFX, {
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
                /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-1of4spd',
                  'data-framer-name': 'Bookmarks',
                  layoutDependency,
                  layoutId: 'fR7JbRnxe',
                  style: { borderBottomLeftRadius: 28, borderBottomRightRadius: 28, borderTopLeftRadius: 28, borderTopRightRadius: 28, },
                  children: [
                    /* @__PURE__ */ _jsx(RichText, {
                      __fromCanvasComponent: true,
                      children: /* @__PURE__ */ _jsx(React.Fragment, {
                        children: /* @__PURE__ */ _jsx(motion.p, {
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
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-e223h2',
                      'data-framer-name': 'Bookmark',
                      layoutDependency,
                      layoutId: 'Bb4DRr77N',
                      children: [
                        /* @__PURE__ */ _jsx(motion.div, {
                          className: 'framer-1xokyxn',
                          layoutDependency,
                          layoutId: 'Qwexip93p',
                          children: /* @__PURE__ */ _jsx(Image, {
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
                        /* @__PURE__ */ _jsx(motion.div, {
                          className: 'framer-47n4du',
                          layoutDependency,
                          layoutId: 'C6uSsaOq2',
                          children: /* @__PURE__ */ _jsxs(motion.div, {
                            className: 'framer-1w2t1oi',
                            layoutDependency,
                            layoutId: 'bdCvztvz2',
                            children: [
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.h3, {
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
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
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
                    /* @__PURE__ */ _jsxs(motion.div, {
                      className: 'framer-vyjk6',
                      'data-framer-name': 'Bookmark Copy',
                      layoutDependency,
                      layoutId: 'ZXyBL3UxK',
                      children: [
                        /* @__PURE__ */ _jsx(motion.div, {
                          className: 'framer-1nnbol7',
                          layoutDependency,
                          layoutId: 'GbsCPfY0X',
                          children: /* @__PURE__ */ _jsx(Image, {
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
                        /* @__PURE__ */ _jsx(motion.div, {
                          className: 'framer-gu1odh',
                          layoutDependency,
                          layoutId: 'diOrHb28Y',
                          children: /* @__PURE__ */ _jsxs(motion.div, {
                            className: 'framer-6jxmdw',
                            layoutDependency,
                            layoutId: 'A4L0BOGT4',
                            children: [
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.h3, {
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
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
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
                /* @__PURE__ */ _jsx(motion.div, {
                  className: 'framer-vadw1i',
                  'data-framer-name': 'Sidebar',
                  layoutDependency,
                  layoutId: 'VzEzxbLPF',
                  children: /* @__PURE__ */ _jsxs(motion.div, {
                    className: 'framer-1ffgcrw',
                    'data-framer-name': 'Friends',
                    layoutDependency,
                    layoutId: 'Wl_VW_8EB',
                    style: { borderBottomLeftRadius: 28, borderBottomRightRadius: 28, borderTopLeftRadius: 28, borderTopRightRadius: 28, },
                    children: [
                      /* @__PURE__ */ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
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
                      /* @__PURE__ */ _jsxs(motion.div, {
                        className: 'framer-1j9mdi3',
                        layoutDependency,
                        layoutId: 'FZhY17jix',
                        children: [
                          /* @__PURE__ */ _jsxs(motion.div, {
                            className: 'framer-1c8di1n',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'Od496hw91',
                            children: [
                              /* @__PURE__ */ _jsx(Image, {
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
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
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
                          /* @__PURE__ */ _jsxs(motion.div, {
                            className: 'framer-kl86d3',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'g2haIhUiP',
                            children: [
                              /* @__PURE__ */ _jsx(Image, {
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
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
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
                          /* @__PURE__ */ _jsxs(motion.div, {
                            className: 'framer-13oeh66',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'c_MNpcuvQ',
                            children: [
                              /* @__PURE__ */ _jsx(Image, {
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
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
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
                          /* @__PURE__ */ _jsxs(motion.div, {
                            className: 'framer-feaqek',
                            'data-framer-name': 'Friend',
                            layoutDependency,
                            layoutId: 'ChX4_mOC8',
                            children: [
                              /* @__PURE__ */ _jsx(Image, {
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
                              /* @__PURE__ */ _jsx(RichText, {
                                __fromCanvasComponent: true,
                                children: /* @__PURE__ */ _jsx(React.Fragment, {
                                  children: /* @__PURE__ */ _jsx(motion.p, {
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
  '.framer-wYQyN.framer-q8o9fw, .framer-wYQyN .framer-q8o9fw { display: block; }',
  '.framer-wYQyN.framer-1b5ydyb { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 0px 0px; position: relative; width: 1200px; }',
  '.framer-wYQyN .framer-1wzq7ls { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 50px 50px 50px 50px; position: relative; width: 1200px; }',
  '.framer-wYQyN .framer-13c6u4s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-wYQyN .framer-emhnvy { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 48px); overflow: visible; position: relative; width: 48px; }',
  '.framer-wYQyN .framer-6eneq3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: min-content; }',
  '.framer-wYQyN .framer-5mjn9m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: visible; padding: 12px 12px 12px 12px; position: relative; width: 48px; }',
  '.framer-wYQyN .framer-yuqshr-container { flex: none; height: 24px; position: relative; width: 24px; }',
  '.framer-wYQyN .framer-6vwca4, .framer-wYQyN .framer-1kjuxs8, .framer-wYQyN .framer-1faomiy, .framer-wYQyN .framer-h892kc, .framer-wYQyN .framer-3pk42e, .framer-wYQyN .framer-1u1nwqz { flex: none; height: auto; overflow: hidden; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }',
  '.framer-wYQyN .framer-18oyuoj { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; max-width: 100%; overflow: visible; padding: 50px 50px 50px 50px; position: relative; width: 1200px; }',
  '.framer-wYQyN .framer-1of4spd { align-content: flex-start; align-items: flex-start; display: flex; flex: 2 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-wYQyN .framer-e223h2, .framer-wYQyN .framer-vyjk6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-wYQyN .framer-1xokyxn, .framer-wYQyN .framer-1nnbol7 { flex: none; height: 52px; overflow: visible; position: relative; width: 52px; }',
  '.framer-wYQyN .framer-10r2vr8, .framer-wYQyN .framer-1pt1hk2 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 52px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }',
  '.framer-wYQyN .framer-47n4du, .framer-wYQyN .framer-gu1odh { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-wYQyN .framer-1w2t1oi, .framer-wYQyN .framer-6jxmdw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-wYQyN .framer-vadw1i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 1px; }',
  '.framer-wYQyN .framer-1ffgcrw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-wYQyN .framer-11pc94f, .framer-wYQyN .framer-12jh62, .framer-wYQyN .framer-15j97pm, .framer-wYQyN .framer-11i4e7y, .framer-wYQyN .framer-ate8gg { flex: none; height: auto; overflow: visible; position: relative; white-space: pre; width: auto; }',
  '.framer-wYQyN .framer-1j9mdi3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-wYQyN .framer-1c8di1n, .framer-wYQyN .framer-kl86d3, .framer-wYQyN .framer-13oeh66, .framer-wYQyN .framer-feaqek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 100%; }',
  '.framer-wYQyN .framer-tgjfdb, .framer-wYQyN .framer-1peibnf, .framer-wYQyN .framer-17a6c1i, .framer-wYQyN .framer-1saurrb { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); overflow: visible; position: relative; width: 32px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wYQyN.framer-1b5ydyb, .framer-wYQyN .framer-1wzq7ls, .framer-wYQyN .framer-6eneq3, .framer-wYQyN .framer-5mjn9m, .framer-wYQyN .framer-18oyuoj, .framer-wYQyN .framer-1of4spd, .framer-wYQyN .framer-e223h2, .framer-wYQyN .framer-47n4du, .framer-wYQyN .framer-1w2t1oi, .framer-wYQyN .framer-vyjk6, .framer-wYQyN .framer-gu1odh, .framer-wYQyN .framer-6jxmdw, .framer-wYQyN .framer-vadw1i, .framer-wYQyN .framer-1ffgcrw, .framer-wYQyN .framer-1j9mdi3, .framer-wYQyN .framer-1c8di1n, .framer-wYQyN .framer-kl86d3, .framer-wYQyN .framer-13oeh66, .framer-wYQyN .framer-feaqek { gap: 0px; } .framer-wYQyN.framer-1b5ydyb > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-wYQyN.framer-1b5ydyb > :first-child, .framer-wYQyN .framer-1wzq7ls > :first-child, .framer-wYQyN .framer-1of4spd > :first-child, .framer-wYQyN .framer-47n4du > :first-child, .framer-wYQyN .framer-1w2t1oi > :first-child, .framer-wYQyN .framer-gu1odh > :first-child, .framer-wYQyN .framer-6jxmdw > :first-child, .framer-wYQyN .framer-vadw1i > :first-child, .framer-wYQyN .framer-1ffgcrw > :first-child, .framer-wYQyN .framer-1j9mdi3 > :first-child { margin-top: 0px; } .framer-wYQyN.framer-1b5ydyb > :last-child, .framer-wYQyN .framer-1wzq7ls > :last-child, .framer-wYQyN .framer-1of4spd > :last-child, .framer-wYQyN .framer-47n4du > :last-child, .framer-wYQyN .framer-1w2t1oi > :last-child, .framer-wYQyN .framer-gu1odh > :last-child, .framer-wYQyN .framer-6jxmdw > :last-child, .framer-wYQyN .framer-vadw1i > :last-child, .framer-wYQyN .framer-1ffgcrw > :last-child, .framer-wYQyN .framer-1j9mdi3 > :last-child { margin-bottom: 0px; } .framer-wYQyN .framer-1wzq7ls > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-wYQyN .framer-6eneq3 > *, .framer-wYQyN .framer-1c8di1n > *, .framer-wYQyN .framer-kl86d3 > *, .framer-wYQyN .framer-13oeh66 > *, .framer-wYQyN .framer-feaqek > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-wYQyN .framer-6eneq3 > :first-child, .framer-wYQyN .framer-5mjn9m > :first-child, .framer-wYQyN .framer-18oyuoj > :first-child, .framer-wYQyN .framer-e223h2 > :first-child, .framer-wYQyN .framer-vyjk6 > :first-child, .framer-wYQyN .framer-1c8di1n > :first-child, .framer-wYQyN .framer-kl86d3 > :first-child, .framer-wYQyN .framer-13oeh66 > :first-child, .framer-wYQyN .framer-feaqek > :first-child { margin-left: 0px; } .framer-wYQyN .framer-6eneq3 > :last-child, .framer-wYQyN .framer-5mjn9m > :last-child, .framer-wYQyN .framer-18oyuoj > :last-child, .framer-wYQyN .framer-e223h2 > :last-child, .framer-wYQyN .framer-vyjk6 > :last-child, .framer-wYQyN .framer-1c8di1n > :last-child, .framer-wYQyN .framer-kl86d3 > :last-child, .framer-wYQyN .framer-13oeh66 > :last-child, .framer-wYQyN .framer-feaqek > :last-child { margin-right: 0px; } .framer-wYQyN .framer-5mjn9m > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-wYQyN .framer-18oyuoj > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-wYQyN .framer-1of4spd > *, .framer-wYQyN .framer-1ffgcrw > *, .framer-wYQyN .framer-1j9mdi3 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-wYQyN .framer-e223h2 > *, .framer-wYQyN .framer-vyjk6 > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-wYQyN .framer-47n4du > *, .framer-wYQyN .framer-gu1odh > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-wYQyN .framer-1w2t1oi > *, .framer-wYQyN .framer-6jxmdw > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-wYQyN .framer-vadw1i > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } }',
  '.framer-wYQyN.framer-v-tez7sd.framer-1b5ydyb { width: 652px; }',
  '.framer-wYQyN.framer-v-tez7sd .framer-18oyuoj { flex-direction: column; }',
  '.framer-wYQyN.framer-v-tez7sd .framer-1of4spd { flex: none; width: 200%; }',
  '.framer-wYQyN.framer-v-tez7sd .framer-vadw1i { flex: none; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-wYQyN.framer-v-tez7sd .framer-18oyuoj { gap: 0px; } .framer-wYQyN.framer-v-tez7sd .framer-18oyuoj > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-wYQyN.framer-v-tez7sd .framer-18oyuoj > :first-child { margin-top: 0px; } .framer-wYQyN.framer-v-tez7sd .framer-18oyuoj > :last-child { margin-bottom: 0px; } }',
  '.framer-wYQyN[data-border="true"]::after, .framer-wYQyN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var Framerq64yDrOL3 = withCSS(Component, css, 'framer-wYQyN',);
var stdin_default = Framerq64yDrOL3;
Framerq64yDrOL3.displayName = 'FullPage';
Framerq64yDrOL3.defaultProps = { height: 593, width: 1200, };
addPropertyControls(Framerq64yDrOL3, {
  variant: { options: ['QJ6X5OV2Q', 'jNQqNcpjl',], optionTitles: ['Desktop', 'Tablet',], title: 'Variant', type: ControlType.Enum, },
},);
addFonts(Framerq64yDrOL3, [{
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
}, ...PhosphorFonts,], { supportsExplicitInterCodegen: true, },);

// virtual:full-page
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var full_page_default = stdin_default;
export { full_page_default as default, };
