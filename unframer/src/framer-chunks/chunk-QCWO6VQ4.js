// /:https://app.framerstatic.com/chunk.YXhckCOx.mjs
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
function createRGBVariableFallbacks(variables, fallback) {
  return css.variable(...variables.flatMap((variable) => [`${variable}-rgb`, variable]), fallback);
}
var defaultRichTextContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start"
};
var defaultTextFillStyle = { display: "inline-block" };
var defaultImageStyle = { display: "block" };
function selectComponentChild(parentSelector, childSelector) {
  return `${parentSelector} > ${childSelector}, ${parentSelector} > .ssr-variant > ${childSelector}`;
}
var richTextCSSRules = /* @__PURE__ */ (() => [
  `
        [data-framer-component-type="RichTextContainer"] {
            display: ${defaultRichTextContainerStyle.display};
            flex-direction: ${defaultRichTextContainerStyle.flexDirection};
            justify-content: ${defaultRichTextContainerStyle.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
  `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
  `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
  `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
  `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${createRGBVariableFallbacks(["--framer-blockquote-text-color", "--framer-text-color"], "#000")};
                -webkit-text-stroke-color: ${createRGBVariableFallbacks(["--framer-text-stroke-color"], "initial")};
            }

            mark.framer-text {
                background-color: ${createRGBVariableFallbacks(["--framer-blockquote-text-background-color", "--framer-text-background-color"], "initial")};
            }
        }
    `,
  `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
  `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
  `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
  `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
  `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
  `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
  `
        .framer-text[data-text-fill] {
            display: ${defaultTextFillStyle.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
  `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
  `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${createRGBVariableFallbacks([
    "--framer-blockquote-text-color",
    "--framer-code-text-color",
    "--framer-text-color"
  ], "#000")};
            }
        }
    `,
  `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
  `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
  `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
  `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${createRGBVariableFallbacks([
    "--framer-link-text-color",
    "--framer-blockquote-text-color",
    "--framer-text-color"
  ], "#000")};
                background-color: ${createRGBVariableFallbacks(["--framer-link-text-background-color"], "initial")};
                text-decoration-color: ${createRGBVariableFallbacks(["--framer-link-text-decoration-color", "--framer-text-decoration-color"], "currentcolor")};
            }
        }
    `,
  `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
  `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
  `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${createRGBVariableFallbacks([
    "--framer-link-text-color",
    "--framer-blockquote-text-color",
    "--framer-code-text-color",
    "--framer-text-color"
  ], "#000")};
        }
    }
`,
  `
        /* Linked images keep the radius and padding of their image style. */
        a.framer-text:where(:not(.framer-image)):hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
  `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
  `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-color",
    "--framer-link-text-color",
    "--framer-blockquote-text-color",
    "--framer-text-color"
  ], "#000")};
            background-color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-background-color",
    "--framer-link-text-background-color",
    "--framer-text-background-color"
  ], "initial")};
            text-decoration-color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-decoration-color",
    "--framer-link-text-decoration-color",
    "--framer-text-decoration-color"
  ], "currentcolor")};
        }
    }
    `,
  `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
  `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-color",
    "--framer-link-text-color",
    "--framer-blockquote-text-color",
    "--framer-code-text-color",
    "--framer-text-color"
  ], "#000")};
        }
    }
   `,
  `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
  `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
  `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${createRGBVariableFallbacks([
    "--framer-link-current-text-color",
    "--framer-link-text-color",
    "--framer-text-color"
  ], "#000")};
                background-color: ${createRGBVariableFallbacks([
    "--framer-link-current-text-background-color",
    "--framer-link-text-background-color",
    "--framer-text-background-color"
  ], "initial")};
                text-decoration-color: ${createRGBVariableFallbacks([
    "--framer-link-current-text-decoration-color",
    "--framer-link-text-decoration-color",
    "--framer-text-decoration-color"
  ], "currentcolor")};
            }
        }
    `,
  `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
  `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
  `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${createRGBVariableFallbacks([
    "--framer-link-current-text-color",
    "--framer-link-text-color",
    "--framer-code-text-color",
    "--framer-text-color"
  ], "#000")};
                background-color: ${createRGBVariableFallbacks([
    "--framer-link-current-text-background-color",
    "--framer-link-text-background-color",
    "--framer-text-background-color"
  ], "initial")};
            }
        }
    `,
  `
        a.framer-text:where(:not(.framer-image))[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
  `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
  `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-color",
    "--framer-link-current-text-color",
    "--framer-link-text-color",
    "--framer-code-text-color",
    "--framer-text-color"
  ], "#000")};
                background-color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-background-color",
    "--framer-link-current-text-background-color",
    "--framer-link-text-background-color"
  ], "initial")};
                text-decoration-color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-decoration-color",
    "--framer-link-current-text-decoration-color",
    "--framer-link-text-decoration-color",
    "--framer-text-decoration-color"
  ], "currentcolor")};
            }
        }
    `,
  `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
  `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-color",
    "--framer-link-current-text-color",
    "--framer-link-text-color",
    "--framer-code-text-color",
    "--framer-text-color"
  ], "#000")};
                background-color: ${createRGBVariableFallbacks([
    "--framer-link-hover-text-background-color",
    "--framer-link-current-text-background-color",
    "--framer-link-text-background-color"
  ], "initial")};
            }
        }
    `,
  `
        .framer-image.framer-text {
            display: ${defaultImageStyle.display};
            max-width: 100%;
            height: auto;
        }
    `,
  `
        /* A linked image gets its image style on both the link and the image; only the image draws the border and shadow. */
        a.framer-image.framer-text {
            border: none;
            box-shadow: none;
        }
    `,
  `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
  `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
  `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
  `
        li.framer-text {
            counter-increment: list-item;
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
  `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${maxListDigitsProperty}, 1) + 1) * 1ch);
        }
    `,
  `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
  `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "\u2022";
        }
    `,
  `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
  `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
  `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
  `
        ${selectComponentChild('.framer-text-module[data-width="fill"]', ":first-child")} {
            width: 100% !important;
        }
    `
])();
var textTruncationDisplayInlineVariableForSafari16 = "--text-truncation-display-inline-for-safari-16";
var textTruncationDisplayNoneVariableForSafari16 = "--text-truncation-display-none-for-safari-16";
var textTruncationLineBreakVariableForSafari16 = "--text-truncation-line-break-for-safari-16";
var blockLikeElementSelectors = [
  "div.framer-text",
  "p.framer-text",
  "h1.framer-text",
  "h2.framer-text",
  "h3.framer-text",
  "h4.framer-text",
  "h5.framer-text",
  "h6.framer-text",
  "ol.framer-text",
  "ul.framer-text",
  "li.framer-text",
  "blockquote.framer-text",
  ".framer-text.framer-image"
];
var anySafariVersion = "(background: -webkit-named-image(i))";
var safari17OrGreater = "(contain-intrinsic-size: inherit)";
var safari16TextTruncationFix = /* @__PURE__ */ (() => [`@supports ${anySafariVersion} and (not ${safari17OrGreater}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${blockLikeElementSelectors.join(", ")} { display: var(${textTruncationDisplayInlineVariableForSafari16}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${blockLikeElementSelectors.map((selector) => `${selector}::after`).join(", ")} { content: var(${textTruncationLineBreakVariableForSafari16}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${textTruncationDisplayNoneVariableForSafari16}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${textTruncationDisplayInlineVariableForSafari16}, ${defaultTextFillStyle.display}) }
    }`])();

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
  maxListDigitsProperty,
  getMaxListDigits,
  defaultRichTextContainerStyle,
  richTextCSSRules,
  safari16TextTruncationFix
};
