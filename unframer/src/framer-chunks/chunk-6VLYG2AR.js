// /:https://app.framerstatic.com/chunk.DyR0BimO.mjs
import React from "react";
var __unframerWindow = typeof window !== "undefined" ? window : void 0;
var __unframerNavigator = typeof __unframerWindow !== "undefined" ? navigator : void 0;
function encodeSVGForURL(svg) {
  return `data:image/svg+xml,${svg.replaceAll("#", "%23").replaceAll("'", "%27").replaceAll('"', "%22")}`;
}
function isFunction(value) {
  return typeof value === "function";
}
function isBoolean(value) {
  return typeof value === "boolean";
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return Number.isFinite(value);
}
function isArray(value) {
  return Array.isArray(value);
}
function isObject(value) {
  return value !== null && typeof value === "object" && !isArray(value);
}
function isEmptyObject(object) {
  for (const _ in object) return false;
  return true;
}
function isUndefined(value) {
  return typeof value === "undefined";
}
function isNull(value) {
  return value === null;
}
function isNullish(value) {
  return value == null;
}
function isValidDate(value) {
  return value instanceof Date && !Number.isNaN(value.getTime());
}
function isGenerator(value) {
  return isObject(value) && isFunction(value.return);
}
function isPromiseLike(value) {
  return isObject(value) && isFunction(value.then);
}
function isPromise(value) {
  return value instanceof Promise;
}
var noop = () => {
};
var isWindow = typeof __unframerWindow !== "undefined";
var isBot = /* @__PURE__ */ (() => isWindow && (__unframerNavigator.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(__unframerNavigator.userAgent)))();
var supportsRequestIdleCallback = /* @__PURE__ */ (() => isWindow && typeof __unframerWindow.requestIdleCallback === "function")();
var requestIdleCallback = /* @__PURE__ */ (() => supportsRequestIdleCallback ? __unframerWindow.requestIdleCallback : setTimeout)();
function encodeSVGForCSS(svg) {
  return `url('${encodeSVGForURL(svg)}')`;
}
function getPleaseReportMessage(message, error) {
  const formattedError = error instanceof Error ? error.stack ?? error.message : error;
  return `${message ? `${message}
` : ""}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${formattedError ? `:
${formattedError}` : "."}`;
}
var noopSubscribe = () => noop;
var returnTrue = () => true;
var returnFalse = () => false;
function assert(condition, message) {
  if (condition) return;
  if (typeof message === "function") try {
    message = message();
  } catch {
    message = "(assert message threw)";
  }
  if (typeof message === "string" && message.length > 2048) message = message.slice(0, 2048) + "\u2026";
  const e = Error(message ? "Assertion Error: " + message : "Assertion Error");
  if (e.stack) try {
    const lines = e.stack.split("\n");
    if (lines[1]?.includes("assert")) {
      lines.splice(1, 1);
      e.stack = lines.join("\n");
    } else if (lines[0]?.includes("assert")) {
      lines.splice(0, 1);
      e.stack = lines.join("\n");
    }
  } catch {
  }
  throw e;
}
function assertNever(x, error) {
  if (error instanceof Error) throw error;
  if (error !== void 0) throw new Error(String(error));
  throw new Error(x ? `Unexpected value: ${x}` : "Application entered invalid state");
}
var mockWindow = {
  addEventListener: () => {
  },
  removeEventListener: () => {
  },
  dispatchEvent: () => false,
  ResizeObserver: void 0,
  onpointerdown: false,
  onpointermove: false,
  onpointerup: false,
  ontouchstart: false,
  ontouchmove: false,
  ontouchend: false,
  onmousedown: false,
  onmousemove: false,
  onmouseup: false,
  devicePixelRatio: 1,
  scrollX: 0,
  scrollY: 0,
  location: {
    hash: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    search: ""
  },
  document: {
    baseURI: "",
    cookie: "",
    referrer: null
  },
  setTimeout: () => 0,
  clearTimeout: () => {
  },
  setInterval: () => 0,
  clearInterval: () => {
  },
  requestAnimationFrame: () => 0,
  cancelAnimationFrame: () => {
  },
  requestIdleCallback: () => 0,
  getSelection: () => null,
  matchMedia: (query) => {
    return {
      matches: false,
      media: query,
      onchange: () => {
      },
      addEventListener: () => {
      },
      removeEventListener: () => {
      },
      addListener: () => {
      },
      removeListener: () => {
      },
      dispatchEvent: () => false
    };
  },
  innerHeight: 0,
  innerWidth: 0,
  SVGSVGElement: {},
  open: function(_url, _target, _features) {
  },
  __framer_events: []
};
var safeWindow = !isWindow ? mockWindow : __unframerWindow;
function isScreenshotFramerHost() {
  return safeWindow.location.origin === "https://screenshot.framer.invalid";
}
var RenderEnvironment = /* @__PURE__ */ (() => ({
  target: isScreenshotFramerHost() ? "EXPORT" : "PREVIEW",
  zoom: 1
}))();
function executeInRenderEnvironment(customEnvironment, task) {
  const previousEnvironment = Object.assign({}, RenderEnvironment);
  Object.assign(RenderEnvironment, customEnvironment);
  const result = task();
  Object.assign(RenderEnvironment, previousEnvironment);
  return result;
}
function setGlobalRenderEnvironment(environment) {
  Object.assign(RenderEnvironment, environment);
}
function useRenderEnvironment(target, zoom) {
  let willChangeElements = false;
  if (RenderEnvironment.target !== target) {
    RenderEnvironment.target = target;
    willChangeElements = true;
  }
  if (RenderEnvironment.zoom !== zoom) RenderEnvironment.zoom = zoom;
  return { willChangeElements };
}
var RenderTarget = {
  /**
  * The component is to be rendered for the Framer canvas.
  *
  * @remarks
  * ```jsx
  * function App() {
  *   if (RenderTarget.current() === RenderTarget.canvas) {
  *     return <CanvasComponent />
  *   }
  *   return <DefaultComponent />
  * }
  * ```
  */
  canvas: "CANVAS",
  /**
  * The component is to be rendered for export.
  *
  * @remarks
  * ```jsx
  * function App() {
  *   if (RenderTarget.current() === RenderTarget.export) {
  *     return <ExportComponent />
  *   }
  *   return <DefaultComponent />
  * }
  * ```
  */
  export: "EXPORT",
  /**
  * The component is to be rendered as a preview thumbnail, for example in the
  * component panel.
  *
  * @remarks
  * ```jsx
  * function App() {
  *   if (RenderTarget.current() === RenderTarget.thumbnail) {
  *     return <Thumbnail />
  *   }
  *   return <DefaultComponent />
  * }
  * ```
  */
  thumbnail: "THUMBNAIL",
  /**
  * The component is being rendered in the preview window.
  *
  * @remarks
  * ```jsx
  * function App() {
  *   React.useEffect(() => {
  *     if (RenderTarget.current() === RenderTarget.preview) {
  *       // Do something in preview.
  *     }
  *   })
  *   return <DefaultComponent />
  * }
  * ```
  */
  preview: "PREVIEW",
  /**
  * Returns the current `RenderTarget` allowing components to apply
  * different behaviors depending on the environment.
  *
  * @remarks
  * ```jsx
  * function App() {
  *   if (RenderTarget.current() === RenderTarget.thumbnail) {
  *     return <PreviewIcon />
  *   }
  *   return <Frame>...</Frame>
  * }
  * ```
  */
  current: () => RenderEnvironment.target,
  /**
  * Returns true if the current `RenderTarget` has performance restrictions.
  * Use this to avoid doing heavy work in these contexts because they may
  * bail on the rendering if the component takes too long.
  *
  * @remarks
  * ```jsx
  * function App() {
  *   if (RenderTarget.hasRestrictions()) {
  *     return <SomePlaceholder />
  *   }
  *   return <RichPreviewContent />
  * }
  * ```
  */
  hasRestrictions: () => {
    const target = RenderEnvironment.target;
    if (target === "CANVAS") return true;
    if (target === "EXPORT") return true;
    return false;
  }
};
var defaultCache = /* @__PURE__ */ new Set();
var defaultSheet;
function injectCSSRule(cssRule, sheet, cache = defaultCache) {
  if (!cssRule || cache.has(cssRule) || typeof document === "undefined") return;
  cache.add(cssRule);
  if (!sheet) {
    if (!defaultSheet) {
      const styleElement = document.createElement("style");
      styleElement.setAttribute("type", "text/css");
      styleElement.setAttribute("data-framer-css", "true");
      if (!document.head) {
        console.warn("not injecting CSS: the document is missing a <head> element");
        return;
      }
      document.head.appendChild(styleElement);
      if (styleElement.sheet) defaultSheet = styleElement.sheet;
      else {
        console.warn("not injecting CSS: injected <style> element does not have a sheet", styleElement);
        return;
      }
    }
    sheet = defaultSheet;
  }
  try {
    sheet.insertRule(cssRule, sheet.cssRules.length);
  } catch {
  }
}
var FormInputStyleVariableNames = /* @__PURE__ */ (function(FormInputStyleVariableNames2) {
  FormInputStyleVariableNames2["Padding"] = "--framer-input-padding";
  FormInputStyleVariableNames2["BorderRadiusTopLeft"] = "--framer-input-border-radius-top-left";
  FormInputStyleVariableNames2["BorderRadiusTopRight"] = "--framer-input-border-radius-top-right";
  FormInputStyleVariableNames2["BorderRadiusBottomRight"] = "--framer-input-border-radius-bottom-right";
  FormInputStyleVariableNames2["BorderRadiusBottomLeft"] = "--framer-input-border-radius-bottom-left";
  FormInputStyleVariableNames2["CornerShape"] = "--framer-input-corner-shape";
  FormInputStyleVariableNames2["BorderColor"] = "--framer-input-border-color";
  FormInputStyleVariableNames2["BorderTopWidth"] = "--framer-input-border-top-width";
  FormInputStyleVariableNames2["BorderRightWidth"] = "--framer-input-border-right-width";
  FormInputStyleVariableNames2["BorderBottomWidth"] = "--framer-input-border-bottom-width";
  FormInputStyleVariableNames2["BorderLeftWidth"] = "--framer-input-border-left-width";
  FormInputStyleVariableNames2["BorderStyle"] = "--framer-input-border-style";
  FormInputStyleVariableNames2["Background"] = "--framer-input-background";
  FormInputStyleVariableNames2["FontFamily"] = "--framer-input-font-family";
  FormInputStyleVariableNames2["FontWeight"] = "--framer-input-font-weight";
  FormInputStyleVariableNames2["FontSize"] = "--framer-input-font-size";
  FormInputStyleVariableNames2["FontColor"] = "--framer-input-font-color";
  FormInputStyleVariableNames2["FontStyle"] = "--framer-input-font-style";
  FormInputStyleVariableNames2["FontLetterSpacing"] = "--framer-input-font-letter-spacing";
  FormInputStyleVariableNames2["FontTextAlignment"] = "--framer-input-font-text-alignment";
  FormInputStyleVariableNames2["FontLineHeight"] = "--framer-input-font-line-height";
  FormInputStyleVariableNames2["FontOpenType"] = "--framer-input-font-open-type-features";
  FormInputStyleVariableNames2["FontVariationAxes"] = "--framer-input-font-variation-axes";
  FormInputStyleVariableNames2["PlaceholderColor"] = "--framer-input-placeholder-color";
  FormInputStyleVariableNames2["BoxShadow"] = "--framer-input-box-shadow";
  FormInputStyleVariableNames2["FocusedBorderColor"] = "--framer-input-focused-border-color";
  FormInputStyleVariableNames2["FocusedBorderWidth"] = "--framer-input-focused-border-width";
  FormInputStyleVariableNames2["FocusedBorderStyle"] = "--framer-input-focused-border-style";
  FormInputStyleVariableNames2["FocusedBackground"] = "--framer-input-focused-background";
  FormInputStyleVariableNames2["FocusedBoxShadow"] = "--framer-input-focused-box-shadow";
  FormInputStyleVariableNames2["FocusedTransition"] = "--framer-input-focused-transition";
  FormInputStyleVariableNames2["BooleanCheckedBackground"] = "--framer-input-boolean-checked-background";
  FormInputStyleVariableNames2["BooleanCheckedBorderColor"] = "--framer-input-boolean-checked-border-color";
  FormInputStyleVariableNames2["BooleanCheckedBorderWidth"] = "--framer-input-boolean-checked-border-width";
  FormInputStyleVariableNames2["BooleanCheckedBorderStyle"] = "--framer-input-boolean-checked-border-style";
  FormInputStyleVariableNames2["BooleanCheckedBoxShadow"] = "--framer-input-boolean-checked-box-shadow";
  FormInputStyleVariableNames2["BooleanCheckedTransition"] = "--framer-input-boolean-checked-transition";
  FormInputStyleVariableNames2["InvalidTextColor"] = "--framer-input-invalid-text-color";
  FormInputStyleVariableNames2["IconBackgroundImage"] = "--framer-input-icon-image";
  FormInputStyleVariableNames2["IconMaskImage"] = "--framer-input-icon-mask-image";
  FormInputStyleVariableNames2["IconColor"] = "--framer-input-icon-color";
  FormInputStyleVariableNames2["IconContent"] = "--framer-input-icon-content";
  FormInputStyleVariableNames2["WrapperHeight"] = "--framer-input-wrapper-height";
  return FormInputStyleVariableNames2;
})({});
var Var = FormInputStyleVariableNames;
var inputClassName = "framer-form-input";
var inputWrapperClassName = "framer-form-input-wrapper";
var emptyValueClassName = "framer-form-input-empty";
var forcedFocusClassName = "framer-form-input-forced-focus";
var forcedCheckedClassName = "framer-form-input-forced-checked";
function cssValue(value) {
  if (typeof value === "number") return value;
  if (value.startsWith("--")) return css.variable(value);
  if (value === "") return '""';
  return value;
}
var css = /* @__PURE__ */ (() => {
  function css2(selector, declaration) {
    let output = " ";
    for (const key in declaration) {
      const value = declaration[key];
      assert(value !== void 0, "Encountered `undefined` in CSSDeclaration");
      output += `${key.replace(/([A-Z])/gu, "-$1").toLowerCase()}: ${cssValue(value)}; `;
    }
    return selector + " {" + output + "}";
  }
  css2.variable = (...variables) => {
    const lastItem = variables[variables.length - 1];
    assert(lastItem !== void 0, "Zero variables passed to `css.variable`");
    let value = lastItem.startsWith("--") ? `var(${lastItem})` : lastItem;
    for (let index = variables.length - 2; index >= 0; index--) value = `var(${variables[index]}, ${value})`;
    return value;
  };
  return css2;
})();
var sharedInputCSS = /* @__PURE__ */ (() => [css(`.${inputClassName}`, {
  padding: css.variable(Var.Padding),
  background: "transparent",
  fontFamily: css.variable(Var.FontFamily),
  fontWeight: css.variable(Var.FontWeight),
  fontSize: css.variable(Var.FontSize),
  fontStyle: css.variable(Var.FontStyle),
  color: css.variable(Var.FontColor),
  fontFeatureSettings: css.variable(Var.FontOpenType),
  fontVariationSettings: css.variable(Var.FontVariationAxes),
  border: "none",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "100%",
  height: css.variable(Var.WrapperHeight, "100%"),
  letterSpacing: css.variable(Var.FontLetterSpacing),
  textAlign: css.variable(Var.FontTextAlignment),
  lineHeight: css.variable(Var.FontLineHeight)
}), css(`.${inputClassName}:focus-visible`, { outline: "none" })])();
var inputWrapperCSS = /* @__PURE__ */ (() => [css(`.${inputWrapperClassName}`, { overflow: "hidden" })])();
var inputBorderAllSides = /* @__PURE__ */ (() => `var(${Var.BorderTopWidth}) var(${Var.BorderRightWidth}) var(${Var.BorderBottomWidth}) var(${Var.BorderLeftWidth})`)();
var inputBorderCSS = /* @__PURE__ */ (() => [`.${inputWrapperClassName}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Var.BorderRadiusTopLeft});
        border-top-right-radius: var(${Var.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Var.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Var.BorderRadiusBottomLeft});
        corner-shape: var(${Var.CornerShape});
        border-color: var(${Var.BorderColor});
        border-top-width: var(${Var.BorderTopWidth});
        border-right-width: var(${Var.BorderRightWidth});
        border-bottom-width: var(${Var.BorderBottomWidth});
        border-left-width: var(${Var.BorderLeftWidth});
        border-style: var(${Var.BorderStyle});
        transition: var(${Var.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`])();
var customValidityKey = "customError";
var validKey = "valid";
function isRelevantValidityStateKey(key) {
  return key !== customValidityKey && key !== validKey;
}
function isInvalid(validity) {
  for (const key in validity) {
    if (!isRelevantValidityStateKey(key)) continue;
    if (validity?.[key] === true) return true;
  }
  return false;
}
function useCustomValidity(onValid, onInvalid, onChange, onBlur, onFocus) {
  const isValidRef = React.useRef(null);
  const handleInvalid = React.useCallback((e) => {
    if (!onInvalid) return;
    if (isValidRef.current === false) return;
    isValidRef.current = false;
    e.currentTarget.setCustomValidity(" ");
    e.currentTarget.reportValidity();
    onInvalid(e);
  }, [onInvalid]);
  const handleChange = React.useCallback((e) => {
    onChange?.(e);
    if (!onInvalid && !onValid) return;
    const validity = e.target.validity;
    if (isValidRef.current === false && !isInvalid(validity)) {
      e.currentTarget.setCustomValidity("");
      e.target.reportValidity();
      isValidRef.current = true;
      onValid?.();
    }
  }, [
    onInvalid,
    onValid,
    onChange
  ]);
  const handleBlur = React.useCallback((e) => {
    if (!onInvalid) {
      onBlur?.(e);
      return;
    }
    if (isValidRef.current === false) return;
    const validity = e.currentTarget.validity;
    if (isInvalid(validity)) {
      handleInvalid(e);
      return;
    }
    onBlur?.(e);
  }, [
    handleInvalid,
    onBlur,
    onInvalid
  ]);
  return React.useMemo(() => {
    return {
      onInvalid: handleInvalid,
      onChange: handleChange,
      onBlur: handleBlur,
      onFocus
    };
  }, [
    handleInvalid,
    handleChange,
    handleBlur,
    onFocus
  ]);
}
var iconImageCSS = /* @__PURE__ */ (() => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: `${16}px`,
  maskRepeat: "no-repeat",
  maskSize: `${16}px`,
  backgroundColor: css.variable(Var.IconColor)
}))();
var inputIconCSSDeclaration = /* @__PURE__ */ (() => ({
  content: "",
  display: "block",
  position: "absolute",
  right: 0,
  top: 0,
  bottom: 0,
  width: `${16}px`,
  boxSizing: "content-box",
  padding: css.variable(Var.Padding),
  border: "none",
  pointerEvents: "none",
  ...iconImageCSS
}))();
var defaultRichTextContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
};
var maxListDigitsProperty = "--max-list-digits";
function getMaxListDigits(start, itemCount, listStyleType) {
  const lastListNumber = start + Math.max(itemCount, 1) - 1;
  switch (listStyleType) {
    case "decimal":
      return decimalMaxListDigits(lastListNumber);
    case "lower-alpha":
    case "upper-alpha":
    case "lower-latin":
    case "upper-latin":
      return alphaMaxListDigits(lastListNumber);
    case "lower-roman":
    case "upper-roman":
      return romanMaxListDigits(lastListNumber);
    default:
      return decimalMaxListDigits(lastListNumber);
  }
}
function decimalMaxListDigits(lastListNumber) {
  return String(lastListNumber).length;
}
function alphaMaxListDigits(lastListNumber) {
  let nextCharacters = 1;
  while (letterPermutations(nextCharacters) < lastListNumber) nextCharacters++;
  return nextCharacters;
}
function letterPermutations(characters) {
  let permutations = 0;
  for (let i = 0; i < characters; i++) permutations += 26 ** (i + 1);
  return permutations;
}
var romanNumeralLengthThresholds = [
  1,
  2,
  3,
  8,
  18,
  28,
  38,
  88,
  188,
  288,
  388,
  888
];
function romanMaxListDigits(lastListNumber) {
  let maxLength = 0;
  for (const threshold of romanNumeralLengthThresholds) {
    if (lastListNumber < threshold) return maxLength;
    maxLength++;
  }
  const thousands = Math.floor((lastListNumber - 888) / 1e3);
  if (thousands >= 1) return Math.max(maxLength, thousands + 12);
  return maxLength;
}

export {
  isFunction,
  isBoolean,
  isString,
  isNumber,
  isArray,
  isObject,
  isEmptyObject,
  isUndefined,
  isNull,
  isNullish,
  isValidDate,
  isGenerator,
  isPromiseLike,
  isPromise,
  noop,
  isWindow,
  isBot,
  supportsRequestIdleCallback,
  requestIdleCallback,
  encodeSVGForCSS,
  getPleaseReportMessage,
  noopSubscribe,
  returnTrue,
  returnFalse,
  assert,
  assertNever,
  safeWindow,
  isScreenshotFramerHost,
  RenderEnvironment,
  executeInRenderEnvironment,
  setGlobalRenderEnvironment,
  useRenderEnvironment,
  RenderTarget,
  injectCSSRule,
  inputClassName,
  inputWrapperClassName,
  emptyValueClassName,
  forcedFocusClassName,
  forcedCheckedClassName,
  css,
  sharedInputCSS,
  inputWrapperCSS,
  inputBorderAllSides,
  inputBorderCSS,
  useCustomValidity,
  iconImageCSS,
  inputIconCSSDeclaration,
  defaultRichTextContainerStyle,
  maxListDigitsProperty,
  getMaxListDigits
};
