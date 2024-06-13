/// <reference types="react" />

import type { AnimationPlaybackControls } from 'framer-motion';
import { ComponentType } from 'react';
import { ForwardRefExoticComponent } from 'react';
import type { HTMLMotionProps } from 'framer-motion';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { DeprecatedLayoutGroupContext as LayoutGroupContext } from 'framer-motion';
import { MotionProps } from 'framer-motion';
import type { MotionStyle } from 'framer-motion';
import type { MotionTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import { PanInfo } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import { PropsWithoutRef } from 'react';
import { default as React_2 } from 'react';
import type { ReactNode } from 'react';
import { RefAttributes } from 'react';
import type { SpringOptions as SpringOptions_2 } from 'framer-motion';
import type { TapHandlers } from 'framer-motion';
import type { TargetAndTransition } from 'framer-motion';
import type { Transition } from 'framer-motion';
import { useDeprecatedAnimatedState as useAnimatedState } from 'framer-motion';
import { useDeprecatedInvertedScale as useInvertedScale } from 'framer-motion';
import type { ValueAnimationTransition } from 'framer-motion';
import type { VariantLabels } from 'framer-motion';

/** @public */
export declare function addFonts(component: React_2.ComponentType<unknown>, passedFonts: (ComponentFontV1 | ComponentFontBundle)[], flags?: {
    supportsExplicitInterCodegen?: boolean;
}): void;

/**
 * Extends component with property controls
 *
 * ```typescript
 * export const MyComponent = props => <h1>{props.header}</h1>
 *
 * addPropertyControls(MyComponent, {
 *   header:  { type: ControlType.String, title: "Header" },
 * })
 *
 * ```
 * @public
 */
export declare function addPropertyControls<Props = any>(component: React_2.ComponentType<Props> | React_2.ForwardRefExoticComponent<Props> | HigherOrderComponent<Props>, propertyControls: PropertyControls<Props>): void;

declare type Alignment = "start" | "center" | "end";

/**
 * @public
 * @deprecated Use {@link useMotionValue} instead
 */
declare interface Animatable_2<Value> extends UpdateObserver<Value> {
    /**
     * Get the current value out of this Animatable object
     * @remarks
     * ```jsx
     * const a = Animatable(0)
     * a.get() // returns 0
     * await animate(a, 42)
     * a.get() // returns 42
     * ```
     * @returns Current value
     * @public
     */
    get(): Value;
    /**
     * Set a new value to a animatable object
     * @remarks
     * The passed value can be an Animatable value too
     * ```jsx
     * const a = Animatable(0)
     * const b = Animatable(100)
     * a.set(42)
     * a.get() // returns 42
     * a.set(b)
     * a.get() // returns 100
     * ```
     * @param value - New value to set to the animatable
     * @public
     */
    set(value: Value | Animatable_2<Value>): void;
    /**
     * @public
     */
    set(value: Value | Animatable_2<Value>, transaction?: TransactionId): void;

}

/**
 * @public
 */
declare const Animatable_2: {
    <Value>(value: Value | Animatable_2<Value>): Animatable_2<Value>;

    /**
     * @public
     */
    getNumber(value: number | Animatable_2<number> | null | undefined, defaultValue?: number): number;


};
export { Animatable_2 as Animatable }

/** @public */
export declare type AnimatableObject<T> = {
    [K in keyof T]: ToAnimatableOrValue<T[K]>;
};

/**
 * @public
 * @deprecated Use the {@link MotionProps.animate} prop on {@link Frame} instead.
 */
export declare const animate: {
    <Value, Options>(from: DeprecatedAnimationTarget<Value>, to: Value, animator?: AnimatorClass<Value, Options>, options?: Partial<Options & DeprecatedAnimationOptions<Value>>): FramerAnimation<Value, Options>;
    <V>(from: MotionValue<V> | V, to: V | V[], transition?: Transition & AnimationPlaybackLifecycles<V>): AnimationPlaybackControls;
    /**
     * Animate value with a spring curve
     * @remarks
     * ```jsx
     * const value = Animatable(0)
     * animate.spring(value, 100, {tension: 100, friction: 100})
     *
     * animate.spring(value, 100, {dampingRatio: 0.5, duration: 1})
     * ```
     * @param from - Value to animate
     * @param to - Value to animate to
     * @param options - Options for the spring
     * These can be either `tension`, `friction`, `velocity` and `tolerance` _or_ `dampingRatio`, `duration`, `velocity` and `mass`
     * @returns Instance of {@link FramerAnimation} that can be used to control the animation
     * @deprecated Use {@link MotionProps.animate} on {@link Frame} instead.
     */
    spring<Value_1>(from: DeprecatedAnimationTarget<Value_1>, to: Value_1, options?: Partial<SpringOptions & DeprecatedAnimationOptions<Value_1>> | undefined): FramerAnimation<Value_1, SpringOptions>;
    /**
     * Animate value with a bezier curve
     * @remarks
     * ```jsx
     * const value = Animatable(0)
     * animate.bezier(value, 100, {duration: 1, curve: Bezier.EaseIn})
     *
     * animate.bezier(value, 100, {duration: 1, curve: [0.3, 0.1, 0.4, 1]})
     * ```
     * @param from - Value to animate
     * @param to - Value to animate to
     * @param options - Options for the bezier curve
     *
     * - `duration` Duration of the animation
     * - `curve` One of the `Bezier` enum values or an array with 4 control points
     *
     * @returns Instance of {@link FramerAnimation} that can be used to control the animation
     * @deprecated Use {@link MotionProps.animate} on {@link Frame} instead.
     */
    bezier<Value_2>(from: DeprecatedAnimationTarget<Value_2>, to: Value_2, options?: Partial<BezierOptions & DeprecatedAnimationOptions<Value_2>> | undefined): FramerAnimation<Value_2, BezierOptions>;
    /**
     * Animate value with a linear animation
     * @remarks
     * ```jsx
     * const value = Animatable(0)
     * animate.linear(value, 100)
     *
     * animate.linear(value, 100, {duration: 1})
     * ```
     * @param from  - Value to animate
     * @param to - Value to animate to
     * @param options - The options for the animation
     *
     * - `duration` - Duration of the animation
     *
     * @returns Instance of {@link FramerAnimation} that can be used to control the animation
     * @deprecated Use {@link MotionProps.animate} on {@link Frame} instead.
     */
    linear<Value_3>(from: DeprecatedAnimationTarget<Value_3>, to: Value_3, options?: Partial<EaseOptions & DeprecatedAnimationOptions<Value_3>> | undefined): FramerAnimation<Value_3, BezierOptions>;
    /**
     * Animate value with a ease animation
     * @remarks
     * ```jsx
     * const value = Animatable(0)
     * animate.ease(value, 100)
     *
     * animate.ease(value, 100, {duration: 1})
     * ```
     * @param from  - Value to animate
     * @param to - Value to animate to
     * @param options - The options for the animation
     *
     * - `duration` - Duration of the animation
     *
     * @returns Instance of {@link FramerAnimation} that can be used to control the animation
     * @deprecated Use {@link MotionProps.animate} on {@link Frame} instead.
     */
    ease<Value_4>(from: DeprecatedAnimationTarget<Value_4>, to: Value_4, options?: Partial<EaseOptions & DeprecatedAnimationOptions<Value_4>> | undefined): FramerAnimation<Value_4, BezierOptions>;
    /**
     * Animate value with a ease in animation
     * @remarks
     * ```jsx
     * const value = Animatable(0)
     * animate.easeIn(value, 100)
     *
     * animate.easeIn(value, 100, {duration: 1})
     * ```
     * @param from  - Value to animate
     * @param to - Value to animate to
     * @param options - The options for the animation
     *
     * - `duration` - Duration of the animation
     *
     * @returns Instance of {@link FramerAnimation} that can be used to control the animation
     * @deprecated Use {@link MotionProps.animate} on {@link Frame} instead.
     */
    easeIn<Value_5>(from: DeprecatedAnimationTarget<Value_5>, to: Value_5, options?: Partial<EaseOptions & DeprecatedAnimationOptions<Value_5>> | undefined): FramerAnimation<Value_5, BezierOptions>;
    /**
     * Animate value with a ease out animation
     * @remarks
     * ```jsx
     * const value = Animatable(0)
     * animate.easeOut(value, 100)
     *
     * animate.easeOUt(value, 100, {duration: 1})
     * ```
     * @param from  - Value to animate
     * @param to - Value to animate to
     * @param options - The options for the animation
     *
     * - `duration` - Duration of the animation
     *
     * @returns Instance of {@link FramerAnimation} that can be used to control the animation
     * @deprecated Use {@link MotionProps.animate} on {@link Frame} instead.
     */
    easeOut<Value_6>(from: DeprecatedAnimationTarget<Value_6>, to: Value_6, options?: Partial<EaseOptions & DeprecatedAnimationOptions<Value_6>> | undefined): FramerAnimation<Value_6, BezierOptions>;
    /**
     * Animate value with a ease in out animation
     * @remarks
     * ```jsx
     * const value = Animatable(0)
     * animate.easeInOut(value, 100)
     *
     * animate.easeInOut(value, 100, {duration: 1})
     * ```
     * @param from  - Value to animate
     * @param to - Value to animate to
     * @param options - The options for the animation
     *
     * - `duration` - Duration of the animation
     *
     * @returns Instance of {@link FramerAnimation} that can be used to control the animation
     * @deprecated Use {@link MotionProps.animate} on {@link Frame} instead.
     */
    easeInOut<Value_7>(from: DeprecatedAnimationTarget<Value_7>, to: Value_7, options?: Partial<EaseOptions & DeprecatedAnimationOptions<Value_7>> | undefined): FramerAnimation<Value_7, BezierOptions>;
};

/**
 * @public
 * @deprecated Since Framer Motion 5 AnimateSharedLayout is no longer required for shared layout transitions.
 * You can use the `layoutId` prop and components will animate from one to another.
 * If you need to group components that affect each other's layout or scope shared layout animation, consider using `LayoutGroup` instead.
 */
export declare const AnimateSharedLayout: (props: any) => any;

/**
 * @public
 */
declare interface AnimationInterface {

    cancel(): void;

    isFinished(): boolean;
}

declare interface AnimationPlaybackLifecycles<V> {
    onUpdate?: (latest: V) => void;
    onPlay?: () => void;
    onComplete?: () => void;
    onRepeat?: () => void;
    onStop?: () => void;
}

/**
 * @public
 * @deprecated  Use the `transition` prop instead
 */
declare interface AnimatorClass<Value, Options = any> {

}

/** @public */
export declare interface ArrayControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Array;
    control: ArrayItemControlDescription<P>;
    /** @deprecated This property has been renamed to control. */
    propertyControl?: ArrayItemControlDescription<P>;
    maxCount?: number;
    defaultValue?: any[];
}

/**
 * Array sub type
 * @public
 */
export declare type ArrayItemControlDescription<P = any> = Omit<NumberControlDescription<P>, "hidden" | "description"> | Omit<EnumControlDescription<P>, "hidden" | "description"> | Omit<BooleanControlDescription<P>, "hidden" | "description"> | Omit<StringControlDescription<P>, "hidden" | "description"> | Omit<RichTextControlDescription<P>, "hidden" | "description"> | Omit<ColorControlDescription<P>, "hidden" | "description" | "optional"> | Omit<SegmentedEnumControlDescription<P>, "hidden" | "description"> | Omit<ImageControlDescription<P>, "hidden" | "description"> | Omit<ResponsiveImageControlDescription<P>, "hidden" | "description"> | Omit<FileControlDescription<P>, "hidden" | "description"> | Omit<ComponentInstanceDescription<P>, "hidden" | "description"> | Omit<TransitionControlDescription<P>, "hidden" | "description"> | Omit<LinkControlDescription<P>, "hidden" | "description"> | Omit<DateControlDescription<P>, "hidden" | "description"> | Omit<ObjectControlDescription<P>, "hidden" | "description" | "optional"> | Omit<ScrollSectionRefControlDescription<P>, "hidden" | "description"> | Omit<CustomCursorControlDescription<P>, "hidden" | "description"> | Omit<BorderControlDescription<P>, "hidden" | "description"> | Omit<CursorControlDescription<P>, "hidden" | "description">;

/**
 * Enable or disable the automatic generation of layout ids for canvas layers.
 * By default layout ids are generated for all layers created on the Framer
 * canvas. However, layout ids are not generated for any layer that is a
 * descendant of a code component. Sometimes you will want to enable layout id
 * generation for descendants of your code components when they use children,
 * slots, or import design components, and you want those layers to animate with
 * magic motion transitions.
 *
 * You can enable that behavior by wrapping your code component like this
 * ```typescript
 * <AutomaticLayoutIds enabled>
 *  <YourComponent/>
 * </AutomaticLayoutIds>
 * ```
 * @public
 */
export declare function AutomaticLayoutIds({ enabled, ...props }: React_2.PropsWithChildren<{
    enabled?: boolean;
}>): JSX_2.Element;

/** @public */
export declare type Background = Color | Gradient | BackgroundImage | MotionValue<string> | string;

/** @public */
export declare interface BackgroundFilterProperties {
    backgroundBlur: number;
}

/** @public */
export declare interface BackgroundImage {
    src: string | undefined;
    alt?: string;
    srcSet?: string;
    sizes?: string;
    pixelWidth?: number;
    pixelHeight?: number;
    intrinsicWidth?: number;
    intrinsicHeight?: number;
    positionX?: "left" | "center" | "right" | RelativeNumber;
    positionY?: "top" | "center" | "bottom" | RelativeNumber;
    fit?: ImageFit;
    backgroundSize?: number;
    loading?: "lazy" | "eager";
}

/** @public */
export declare const BackgroundImage: {
    isImageObject: (image: any) => image is object & BackgroundImage;
};

/** @public */
declare interface BackgroundImageProps extends ImageAltProps {
    background: BackgroundImage;
}

/** @public */
export declare interface BackgroundProperties {
    /**
     * Set the background of a `Frame`. Supports color strings, color objects and images by using `src`. Set to a semi-transparent blue color by default.
     * This will override the values set by the `image` property. To use a color and a image, use `backgroundColor` instead
     * ```jsx
     * <Frame background="#09F"/>
     * <Frame background={Color({r: 255, g: 0, b: 102})} />
     * <Frame background={{ alpha: 1, angle: 75, start: "#09F", end: "#F09"}} />
     * <Frame background={{ src: "https://example.com/logo.png"}} />
     * ```
     * @public
     */
    background: Background | null;
    /**
     * Set the background color of a `Frame`. Supports color strings and objects. Use this property to set a background color alongside the `image` property.
     * ```jsx
     * <Frame backgroundColor="#09F"/>
     * <Frame backgroundColor={Color({r: 255, g: 0, b: 102})} />
     * ```
     * @public
     */
    backgroundColor: string | Color;
    /**
     * Sets a background image of a `Frame`. Will wrap the passed value in a `url('')` if needed.
     * @remarks
     * ```jsx
     * <Frame image="https://source.unsplash.com/random" />
     * ```
     * @public
     */
    image: string;
}

/** @public */
export declare interface BaseControlDescription<P = any> {
    title?: string;
    description?: string;
    hidden?(props: P, rootProps: any): boolean;
}

/**
 * @remarks do no use separately from FrameProps
 * @public
 * */
export declare interface BaseFrameProps {
    /**
     * Add a name to the Frame. This property does not change the behaviour of a Frame, but makes it easier to identify it in your code.
     * @remarks
     * The name will be rendered in the `data-framer-name` attribute of the outputted div, so the Frame is recognizable in the HTML DOM too.
     * ```jsx
     * <Frame name={"Button"} />
     * ```
     * @public
     */
    name: string;


}

/**
 * @public
 */
declare enum Bezier {
    Linear = "linear",
    Ease = "ease",
    EaseIn = "ease-in",
    EaseOut = "ease-out",
    EaseInOut = "ease-in-out"
}

declare interface BezierOptions {
    curve: Curve;
    duration: number;
}

/** @public */
export declare type BlendingMode = "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";

/** @public */
export declare interface BlendingProperties {
    blendingMode: BlendingMode;
}

/** @public */
export declare interface BooleanControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Boolean;
    defaultValue?: boolean;
    /**
     * @deprecated No longer recommended because it should be clear what happens when assigning a
     * boolean variable.
     */
    disabledTitle?: string;
    /**
     * @deprecated No longer recommended because it should be clear what happens when assigning a
     * boolean variable.
     */
    enabledTitle?: string;
}

/**
 * @public
 * Represents a border style.
 * Either borderWidth or the equivalent per-side
 * values (e.g borderTopWidth, borderLeftWidth, borderRightWidth, borderBottomWidth)
 * will be provided.
 */
declare interface Border {
    borderColor?: string;
    borderStyle?: BorderStyle;
    borderWidth?: number;
    borderTopWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    borderBottomWidth?: number;
}

/**
 * @public
 */
export declare interface BorderControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Border;
    defaultValue?: Border;
}

declare interface BorderRadiusControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.BorderRadius;
    defaultValue?: string;
}

/** @public */
export declare type BorderStyle = "solid" | "dashed" | "dotted" | "double";

/** @public */
export declare interface BoxShadow {
    type?: "box" | "realistic";
    inset: boolean;
    color: string;
    x: number;
    y: number;
    blur: number;
    spread: number;
    diffusion: number;
    focus: number;
}

/** @public */
export declare const BoxShadow: {
    is: (shadow: any) => shadow is BoxShadow;
    toCSS: (shadow: BoxShadow) => string;
};

/** @public */
export declare interface BoxShadowControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.BoxShadow;
    defaultValue?: string | readonly BoxShadow[];
}

/** @public */
export declare interface BoxShadowProperties {
    shadows: Readonly<BoxShadow[]>;
}

declare interface BoxShadowProperties_2 {
    shadows: Readonly<BoxShadow[]>;
}

declare type CallbackMap = Record<string, (() => void) | undefined>;

/** @public */
export declare type Cancel = () => void;

declare interface Change<Value> {
    value: Value;
    oldValue?: Value;
}

declare type ClassName = string | false | void | null | 0;

/**
 * @public
 */
declare interface CollectionUtils {
    getSlugByRecordId: (id: string, locale: Locale | undefined) => Promise<string | undefined>;
    getRecordIdBySlug: (slug: string, locale: Locale | undefined) => Promise<string | undefined>;
}

/**
 * @public
 */
export declare interface Color {
    r: number;
    g: number;
    b: number;
    h: number;
    s: number;
    l: number;
    a: number;
    roundA: number;
    format: ColorFormat;
    initialValue?: string;
    isValid?: boolean;
    mix: Mixer | MixerStateful;
    toValue: () => string;
}

/**
 * The Color function can be used to define colors, either as a string value or as an object. All colors
 * are converted to a Color object with `r, g, b`, `h, s, l` and an `a` value.
 * There are also various helpers on the Color function for working with,
 * modifying and detecting colors.
 *
 * ```jsx
 * // HEX
 * const blue = Color("#0099FF")
 *
 * // RGB
 * const blue = Color("rgb(0, 153, 255)")
 * const blue = Color(0, 153, 255)
 * const blue = Color({r: 0, g: 153, b: 255})
 * const blue = Color({r: 0, g: 153, b: 255, a: 1})
 *
 * // HSL
 * const blue = Color("hsl(204, 100%, 50%)")
 * const blue = Color({h: 204, s: 1, l: 0.5})
 * const blue = Color({h: 204, s: 1, l: 0.5, a: 1})
 * ```
 * @public
 */
export declare const Color: {
    (color: IncomingColor | Color | number, r?: number, g?: number, b?: number): Color;
    /**
     * Formats a Color object into a readable string for debugging.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.inspect(blue)
     * ```
     *
     * @param color - The Color object to format
     * @param initialValue - A canonical hex string to be used instead of an rgba() value.
     */
    inspect(color: Color, initialValue?: string): string;
    /**
     * Checks if the value is a valid color object or color string. Returns true or false.
     *
     * @remarks
     * ```jsx
     * Color.isColor("#0099FF") // true
     * Color.isColor(Color("#0099FF")) // true
     * ```
     *
     * @param color - The potential color value to validate
     */
    isColor(color: string | Color): boolean;
    /**
     * Checks if the value is a valid color string. Returns true or false.
     *
     * @remarks
     * ```jsx
     * Color.isColorString("#0099FF") // true
     * ```
     *
     * @param color - A string representing a color
     */
    isColorString(colorString: string | object): boolean;
    /**
     * Checks if the value is a valid Color object. Returns true or false.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.isColorObject(blue) // true
     * Color.isColorObject("#0099FF") // false
     * ```
     *
     * @param color - An object representing a color.
     */
    isColorObject(color: any): color is object & Color;
    /**
     * Formats a Color instance into an RGB string.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toString(blue) // "rgb(0, 153, 255)"
     * ```
     *
     * @param color - The color to format
     */
    toString(color: Color): string;
    /**
     * Formats a Color instance into an hexidecimal value.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toHex(blue) // "0099FF"
     * Color.toHex(Color("#FFAAFF"), true) // "FAF"
     * ```
     *
     * @param color - The color to format
     * @param allow3Char - If true will return short hand colors if possible (defaults to false).
     */
    toHex(color: Color, allow3Char?: boolean): string;
    /**
     * Formats a Color instance into an hexidecimal string.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toHexString(blue) // "#0099FF"
     * Color.toHexString(Color("#FFAAFF"), true) // "#FAF"
     * ```
     *
     * @param color - The color to format
     * @param allow3Char - If true will return short hand colors if possible (defaults to false).
     */
    toHexString(color: Color, allow3Char?: boolean): string;
    /**
     * Formats a Color instance into an RGB string.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toRgbString(blue) // "rgb(0, 153, 255)"
     * ```
     *
     * @param color - The color to format
     */
    toRgbString(color: Color): string;
    /**
     * Formats a Color instance into an HUSL object.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toHusl(blue) // {h: 250, s: 100, l: 50, a: 1}
     * ```
     *
     * @param color - The color to format
     */
    toHusl(color: Color): ColorHSLA;
    /**
     * Formats a Color instance into an HSL string.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toHslString(blue) // "hsl(204, 100%, 50%)"
     * ```
     *
     * @param color - The color to format
     */
    toHslString(color: Color): string;
    /**
     * Formats a Color instance into an HSV object.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toHsv(blue) // {h: 204, s: 1, v: 1, a: 1}"
     * ```
     *
     * @param color - The color to format
     */
    toHsv(color: Color): ColorHSVA;
    /**
     * Formats a Color instance into an HSV string.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toHslString(blue) // "hsv(204, 100%, 50%)"
     * ```
     *
     * @param color - The color to format
     */
    toHsvString(color: Color): string;
    /**
     * Formats a Color instance into {@link https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/ | CSS name}
     * or returns false if unspecified.
     *
     * @remarks
     * ```jsx
     * const green = Color("#8FBC8F")
     *
     * Color.toName(green) // "darkseagreen"
     * ```
     *
     * @param color - The color to format
     */
    toName(color: Color): string | false;
    /**
     * Formats a color into an HSL object.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toHsl(blue) // {h: 204, s: 1, l: 0.5, a: 1}
     * ```
     *
     * @param color - The color to format
     */
    toHsl(color: Color): ColorHSLA;
    /**
     * Formats a color into an RGB object.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * Color.toRgb(blue) // {r: 40, g: 175, b: 250, a: 1}
     * ```
     *
     * @param color - The color to format
     */
    toRgb(color: Color): ColorRGBA;
    /**
     * Returns a brightened color.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     * const brightblue = Color.lighten(blue, 20)
     * ```
     *
     * @param color - The color to brighten
     * @param amount - A number, from 0 to 100. Set to 10 by default.
     */
    brighten(color: Color, amount?: number): Color;
    /**
     * Add white and return a lightened color.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     * const lightblue = Color.lighten(blue, 20)
     * ```
     *
     * @param color - The color to lighten
     * @param amount - A number, from 0 to 100. Set to 10 by default.
     */
    lighten(color: Color, amount?: number): Color;
    /**
     * Add black and return a darkened color.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     * const darkblue = Color.darken(blue, 20)
     * ```
     * @param color - The color to darken.
     * @param amount - A number, from 0 to 100. Set to 10 by default.
     */
    darken(color: Color, amount?: number): Color;
    /**
     * Increase the saturation of a color.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     * const saturated = Color.saturate(blue, 100)
     * ```
     * @param color - The color to modify
     * @param amount - A number from 0 to 100. Set to 10 by default.
     */
    saturate(color: Color, amount?: number): Color;
    /**
     * Decrease the saturation of a color.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     * const desaturated = Color.desaturate(blue, 100)
     * ```
     * @param color - The color to modify
     * @param amount - A number from 0 to 100. Set to 10 by default.
     */
    desaturate(color: Color, amount?: number): Color;
    /**
     * Return a fully desaturated color.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     * const gray = Color.grayscale(blue)
     * ```
     * @param color - The color to convert.
     */
    grayscale(color: Color): Color;
    /**
     * Returns a new color for the rotated hue.
     * @param color - The color to manipulate
     * @param angle - The angle in degrees in which to rotate the hue.
     */
    hueRotate(color: Color, angle: number): Color;
    /**
     * Set the alpha value, also known as opacity, of the color.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * const transparent = Color.alpha(blue, 0.1)
     * ```
     * @param color - The original color to modify.
     * @param alpha - A number from 1 to 0. Set to 1 by default.
     */
    alpha(color: Color, a?: number): Color;
    /**
     * Set the alpha value, also known as opacity, of the color to zero.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     *
     * const transparent = Color.alpha(blue)
     * ```
     * @param color - The original color to modify.
     */
    transparent(color: Color): Color;
    /**
     * Change the alpha value, also know as opacity, by a multiplier.
     *
     * @remarks
     * ```jsx
     * const blue = Color("#0099FF")
     * const transparent = Color.multiplyAlpha(blue, 0.5)
     * ```
     * @param color - The original color to modify.
     * @param alphaValue - A number between 1 and 0, defaults to 1,
     */
    multiplyAlpha(color: Color, alphaValue?: number): Color;
    /**
     * Returns a function that can be used to transition a color from one value
     * to another. By default this will use the RGB `mix` model. Useful for providing to animation tools.
     *
     * ```jsx
     * const blend = Color.interpolate(Color("red"), Color("blue"))
     *
     * blend(0)   // Initial state (red)
     * blend(0.5) // Mid state (purple)
     * blend(1)   // Final state (blue)
     * ```
     * @param colorA - The starting color
     * @param colorB - The final color
     * @param model  - The model to use for the mix. One of {@link ColorMixModelType}
     */
    interpolate(colorA: Color, colorB: Color, model?: ColorMixModelType): ((progress: number) => Color);
    /**
     * Create a function that will mix two colors together and output the result as an rgb string.
     *
     * @param colorA - The starting color
     * @param colorB - The final color
     * @param options - Options for the color mixer
     *
     * - `model`: The model to use for the mix. One of {@link ColorMixModelType}
     *
     * @public
     */
    mix(from: Color, toColor: Color, { model }?: {
        model?: ColorMixModelType | undefined;
    }): (p: number) => string;
    /**
     * Blend two colors together, optionally based on user input. The fraction defines the
     * distribution between the two colors, and is set to 0.5 by default.
     * The `limit` defines if the color can transition beyond its range.
     * @remarks
     * ```jsx
     * // Mix red with yellow
     * const orange = Color.mix("red", "yellow", 0.5)
     * ```
     *
     * ```jsx
     * Color.mix("red", "yellow", 0.5, true, "husl")
     * ```
     *
     * @param colorA   - A color, the first one.
     * @param colorB   - A color, the second one.
     * @param fraction - An optional number, from 0 to 1, set to 0.5 by default.
     * @param limit    - An optional boolean, set to false by default.
     * @param model    - The model to use for the mix. One of {@link ColorMixModelType}
     */
    mixAsColor(colorA: Color, colorB: Color, fraction?: number, limit?: boolean, model?: ColorMixModelType): Color | null;
    /**
     * Returns a Color instance with a random color value set.
     *
     * @remarks
     * ```jsx
     * const random = Color.random()
     * ```
     *
     * @param alphaValue - An optional alpha value, set to 1 by default.
     */
    random(alphaValue?: number): Color;
    /**
     * Creates a greyscale color.
     *
     * @remarks
     * ```jsx
     * const gray = Color.gray(0.5)
     * ```
     *
     * @param amount - A number from 0 to 1 representing the amount of white.
     * @param alphaValue  - A number from 0 to 1 representing the alpha. Set to 1 by default.
     */
    grey(amount?: number, alphaValue?: number): Color;



    /**
     * Calculates the color difference using {@link https://en.wikipedia.org/wiki/Color_difference#Euclidean |
     * Euclidean distance fitting human perception}. Returns a value between 0 and 765
     * @param colorA - A first color.
     * @param colorB - A second color.
     */
    difference(colorA: Color, colorB: Color): number;
    /**
     * Checks whether two Color objects are equal.
     *
     * @remarks
     * ```jsx
     * Color.equal(Color("red"), Color("red"))  // true
     * Color.equal(Color("red"), Color("blue")) // false
     *
     * Color.equal(Color("#0099FF"), Color("009AFF"))    // false
     * Color.equal(Color("#0099FF"), Color("009AFF"), 2) // true
     * ```
     *
     * @param colorA    - The first color
     * @param colorB    - The second color
     * @param tolerance - A tolerance for the difference between rgba values. Set to 0.1 by default.
     */
    equal(colorA: Color, colorB: Color, tolerance?: number): boolean;
    luminance(color: Color): number;
    contrast(a: Color, b: Color): number;
};

/** @public */
export declare interface ColorControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Color;
    defaultValue?: string;
    optional?: boolean;
}

/** @public */
export declare enum ColorFormat {
    RGB = "rgb",
    HSL = "hsl",
    HSV = "hsv",
    HEX = "hex",
    NAME = "name"
}

/** @public */
export declare interface ColorHSL {
    h: number;
    s: number;
    l: number;
}

/** @public */
export declare type ColorHSLA = ColorHSL & {
    a: number;
};

/** @public */
declare interface ColorHSV {
    h: number;
    s: number;
    v: number;
}

/** @public */
export declare type ColorHSVA = ColorHSV & {
    a: number;
};

/**
 * Various Color functions, such as {@link (Color:namespace).mix} and {@link
 * (Color:namespace).interpolate}, take an optional color model that
 * determines how two colors are mixed together.
 *
 * @remarks
 *
 * ```javascript
 * const newColor = Color.mix(Color("red"), Color("blue"), {model: ColorMixModelType.HSL})
 * ```
 *
 * @public
 */
export declare enum ColorMixModelType {
    /**
     * Use the {@link https://en.wikipedia.org/wiki/RGB_color_model | RGB color space} without an alpha value
     *
     * @remarks
     *
     * ```javascript
     * const newColor = Color.mix(Color("red"), Color("blue"), {model: ColorMixModelType.RGB})
     * ```
     *
     * @public
     */
    RGB = "rgb",
    /**
     * Use the {@link https://en.wikipedia.org/wiki/RGB_color_model | RGB color space} color space with an alpha value
     *
     * @remarks
     *
     * ```javascript
     * const newColor = Color.mix(Color("red"), Color("blue"), {model: ColorMixModelType.RGBA})
     * ```
     *
     * @public
     */
    RGBA = "rgba",
    /**
     * Use the {@link https://en.wikipedia.org/wiki/HSL_and_HSV | HSL} color space with an alpha value
     *
     * @remarks
     *
     * ```javascript
     * const newColor = Color.mix(Color("red"), Color("blue"), {model: ColorMixModelType.HSL})
     * ```
     *
     * @public
     */
    HSL = "hsl",
    /**
     * Use the {@link https://en.wikipedia.org/wiki/HSL_and_HSV | HSL} color space with an alpha value
     *
     * @remarks
     *
     * ```javascript
     * const newColor = Color.mix(Color("red"), Color("blue"), {model: ColorMixModelType.HSLA})
     * ```
     *
     * @public
     */
    HSLA = "hsla",
    /**
     * Use the {@link http://www.hsluv.org | HSLuv } human friendly color model
     *
     * @remarks
     *
     * ```javascript
     * const newColor = Color.mix(Color("red"), Color("blue"), {model: ColorMixModelType.HUSL})
     * ```
     *
     * @public
     */
    HUSL = "husl"
}

/** @public */
export declare interface ColorMixOptions {
    model?: ColorMixModelType;
}

declare interface ColorRGB {
    r: number;
    g: number;
    b: number;
}

/** @public */
export declare type ColorRGBA = ColorRGB & {
    a: number;
};

/**
 * Describes a single font used by a component.
 *
 * This should have enough data to construct a corresponding [FontFace] object
 * or a CSS `@font-face` rule.
 *
 * [FontFace]: https://drafts.csswg.org/css-font-loading/#fontface-interface
 *
 * @public
 */
export declare interface ComponentFont extends ComponentFontV1 {
    source: FontSourceName;
}

/**
 * Describes a bundle of fonts used by a single component, together with feature
 * flags to indicate which font features that component supported at the time of
 * codegen.
 */
declare type ComponentFontBundle = {
    /**
     * This flag specifies whether the font bundle includes the specific font
     * weights of Framer’s Inter font that the component uses. New smart
     * components do that (which means we can emit CSS only for Inter fonts that
     * are actually used); older smart components don’t (which means some places
     * will emit CSS for all Inter fonts if this flag is not set).
     * https://www.notion.so/framer/RFC-ComponentFont-v2-d5fd3e822fb049ffb6971554ab0e4e42
     */
    explicitInter: boolean;
    fonts: ComponentFont[];
};

/**
 * An older version of ComponentFont that doesn’t include the `source` field.
 * While this version of ComponentFont is not used internally, it may still be
 * passed into `addFonts()` by older versions of smart components.
 */
declare interface ComponentFontV1 {
    url: string;
    family: string;

    style?: string;
    weight?: string;
    stretch?: string;
    unicodeRange?: string;
}

/** @public */
export declare interface ComponentInstanceDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.ComponentInstance;
}

/**
 * @public
 */
declare type ComponentWithPreload<T extends React.ComponentType<any>> = T & {
    preload: () => Promise<T>;
};

declare type ConstraintAuto = "auto";

declare interface ConstraintConfiguration {

}

/**
 * Dimensions can be numbers or strings: percentages, fractions of free space (fr), or auto
 * @public
 */
declare type ConstraintDimension = Animatable_2<number> | number | ConstraintPercentage | ConstraintAuto | ConstraintFreespaceFraction;

declare type ConstraintFreespaceFraction = string;

/** @public */
export declare type ConstraintPercentage = string;

/**
 * These properties are used to layout elements within Framer’s constraint system.
 * @privateRemarks Represents model property values for layout constraints. These may be internally inconsistent. Mask and Values are generated from these.
 * @public
 * */
export declare interface ConstraintProperties extends Partial<WithFractionOfFreeSpace> {

    /**
     * Pinned position from left
     * @public
     */
    left: Animatable_2<number> | number | null;
    /**
     * Pinned position from right
     * @public
     */
    right: Animatable_2<number> | number | null;
    /**
     * Pinned position from top
     * @public
     */
    top: Animatable_2<number> | number | null;
    /**
     * Pinned position from bottom
     * @public
     */
    bottom: Animatable_2<number> | number | null;
    /**
     * Center of horizontal position (X axis)
     * @public
     */
    centerX: ConstraintPercentage;
    /**
     * Center of vertical position (Y axis)
     * @public
     */
    centerY: ConstraintPercentage;
    /**
     * Element width
     * @public
     */
    width: ConstraintDimension;
    /**
     * Element height
     * @public
     */
    height: ConstraintDimension;
    /**
     * Aspect Ratio to keep when resizing
     * @public
     */
    aspectRatio: number | null;
    /**
     * //TODO What is autoSize for? Internal?
     * @public
     */
    autoSize?: boolean;
}

declare const ConstraintsContext: React_2.Context<{
    parentSize: ParentSize;
}>;

/** @public */
export declare type ControlDescription<P = any> = NumberControlDescription<P> | EnumControlDescription<P> | BooleanControlDescription<P> | StringControlDescription<P> | RichTextControlDescription<P> | ColorControlDescription<P> | FusedNumberControlDescription<P> | SegmentedEnumControlDescription<P> | ImageControlDescription<P> | ResponsiveImageControlDescription<P> | FileControlDescription<P> | ComponentInstanceDescription<P> | ArrayControlDescription<P> | EventHandlerControlDescription<P> | TransitionControlDescription<P> | BoxShadowControlDescription<P> | LinkControlDescription<P> | DateControlDescription<P> | ObjectControlDescription<P> | FontControlDescription<P> | PageScopeControlDescription<P> | ScrollSectionRefControlDescription<P> | CustomCursorControlDescription<P> | BorderControlDescription<P> | CursorControlDescription<P> | PaddingControlDescription<P> | BorderRadiusControlDescription<P>;

declare type ControlPoints = [number, number, number, number];

/**
 * Used by the {@link PropertyControls} and specifies the type of user interface for receiving
 * input. Each field has a distinct set of properties though they all accept `title` and `hidden`
 * properties.
 *
 * @remarks
 * ```javascript
 * export function MyComponent({ title }) {
 *   return <Frame size={"100%"}>{title}</Frame>
 * }
 *
 * addPropertyControls(MyComponent, {
 *   title: {
 *     type: ControlType.String,
 *     title: "Title",
 *     hidden: (props) => true
 *   },
 * }
 * ```
 * @public
 */
export declare enum ControlType {
    /**
     * A control that displays an on / off checkbox. The associated property will be `true` or `false`,
     * depending on the state of the checkbox. Includes an optional `defaultValue`, which is set to `true` by default. You can also customize the labels displayed in the property panel with the `enabledTitle` and `disabledTitle` properties.
     *
     * @remarks
     * ```javascript
     * export function MyComponent(props) {
     *   return <Frame size={"100%"}>{props.showText ? "Hello World" : null}</Frame>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   showText: {
     *     type: ControlType.Boolean,
     *     title: "Show Text",
     *     defaultValue: true,
     *     enabledTitle: "On",
     *     disabledTitle: "Off",
     *   },
     * })
     * ```
     */
    Boolean = "boolean",
    /**
     * A control that accepts any numeric value. This will be provided directly as a property.
     * Will display an input field with a range slider by default. The
     * `displayStepper` option can be enabled to include a stepper control instead.
     *
     * @remarks
     * ```javascript
     * export function MyComponent(props) {
     *   return <Frame rotateZ={props.rotation} size={"100%"}>{rotation}</Frame>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   rotation: {
     *     type: ControlType.Number,
     *     defaultValue: 0,
     *     min: 0,
     *     max: 360,
     *     unit: "deg",
     *     step: 0.1,
     *     displayStepper: true,
     *   },
     * })
     * ```
     */
    Number = "number",
    /**
     * A control that accepts plain text values. This will be provided directly as a property.
     * Will display an input field with an optional placeholder value.
     * If `obscured` attribute is set to true a password input field will be used instead of a regular text input
     * so that the value in the input will be visually obscured, yet still be available as plain text inside the component.
     * `displayTextArea` can be enabled to display a multi-line input area instead.
     *
     * @remarks
     * ```javascript
     * export function MyComponent(props) {
     *   return <Frame>{props.title} — {props.body}</Frame>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   title: {
     *     type: ControlType.String,
     *     defaultValue: "Framer",
     *     placeholder: "Type something…",
     *   },
     *   body: {
     *     type: ControlType.String,
     *     defaultValue: "Lorem ipsum dolor sit amet.",
     *     placeholder: "Type something…",
     *     displayTextArea: true,
     *   },
     * })
     * ```
     */
    String = "string",

    /**
     * Deprecated, please use ControlType.Padding and ControlType.BorderRadius. You should be able
     * to switch to the new control type without data loss. Be aware that these new controls only
     * have a single value (e.g. `10px` or `10px 20px 30px 40px`).
     *
     * A control that can be used to take a single number or four distinct numeric input fields. The
     * typical use case for this control is for visual properties like border, padding or margin. It
     * will display an input field to accept a single value, alongside a segmented control allowing
     * four distinct values to be provided.
     *
     * You can also set the default value for each valueKey as well as the toggleKey by setting
     * their values on `defaultProps`.
     *
     * @deprecated Please use {@link ControlType.Padding} and ${@link ControlType.BorderRadius}. You
     * should be able to switch to the new control type without data loss. Be aware that these new controls only
     * have a single value (e.g. `10px` or `10px 20px 30px 40px`).
     * @remarks
     * ```javascript
     * export function MyComponent({
     *   radius = 50,
     *   topLeft,
     *   topRight,
     *   bottomRight,
     *   bottomLeft,
     *   isMixed = false,
     * }) {
     *   const borderRadius = isMixed
     *     ? `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
     *     : `${radius}px`
     *   return <Frame background={"red"} borderRadius={borderRadius} size={"100%"}></Frame>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   radius: {
     *     type: ControlType.FusedNumber,
     *     title: "Radius",
     *     defaultValue: 50,
     *     toggleKey: "isMixed",
     *     toggleTitles: ["All", "Individual"],
     *     valueKeys: ["topLeft", "topRight", "bottomRight", "bottomLeft"],
     *     valueLabels: ["NW", "NE", "SE", "SW"],
     *     min: 0,
     *   },
     * })
     *
     * // Set the default value for each valueKey as well as the toggleKey by setting their values on `defaultProps`:
     * MyComponent.defaultProps = {
     *     radius: 10,
     *     isMixed: true,
     *     topLeft: 5,
     *     topRight: 15,
     *     bottomRight: 5,
     *     bottomLeft: 15,
     * }
     * ```
     */
    FusedNumber = "fusednumber",
    /**
     * A property control that represents a list of options. The list contains primitive values and each
     * value has to be unique. The selected option will be provided as a property. This control is displayed
     * as a dropdown menu in which a user can select one of the items.
     * `displaySegmentedControl` can be enabled to display a segmented control instead.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   const value = props.value || "a"
     *   const colors = { a: "red", b: "green", c: "blue" }
     *   return <Frame background={colors[value]} size={"100%"}>{value}</Frame>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   value: {
     *     type: ControlType.Enum,
     *     defaultValue: "a",
     *     options: ["a", "b", "c"],
     *     optionTitles: ["Option A", "Option B", "Option C"],
     *   },
     * })
     * ```
     */
    Enum = "enum",
    /**
     * Deprecated, please use {@link ControlType.Enum} and enable displaySegmentedControl.
     *
     * @deprecated Please use {@link ControlType.Enum} and enable displaySegmentedControl.
     * @remarks
     * ```javascript
     * export function MyComponent(props) {
     *   const value = props.value || "a"
     *   const colors = { a: "red", b: "green", c: "blue" }
     *   return <Frame background={colors[value]} size={"100%"}>{value}</Frame>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   value: {
     *     type: ControlType.SegmentedEnum,
     *     defaultValue: "a",
     *     options: ["a", "b", "c"],
     *     optionTitles: ["A", "B", "C"],
     *   },
     * })
     * ```
     */
    SegmentedEnum = "segmentedenum",
    /**
     * A control that represents a color value. It will be included in the component props as a string.
     * This control is displayed as a color field and will provide the selected color in either
     * HEX (`"#fff"`) or HSL (`hsla(203, 87%, 50%, 0.5)`) notation, depending on
     * whether there is an alpha channel.
     *
     * @remarks
     * ```javascript
     * function MyComponent(props) {
     *   return <Frame background={props.background} size={"100%"} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *   background: {
     *     type: ControlType.Color,
     *     defaultValue: "#fff",
     *   },
     * })
     * ```
     */
    Color = "color",
    /**
     * Deprecated, please use {@link ControlType.ResponsiveImage}’s `src` field instead.
     *
     * @deprecated Please use {@link ControlType.ResponsiveImage}’s `src` field instead.
     */
    Image = "image",
    /**
     * A control that allows the user to pick an image resource. Displayed as an image picker
     * with associated file picker.
     *
     * The chosen image will be provided in the component props as an object with `src` and `srcSet` properties:
     * - `src`: a string containing the URL of a full resolution image
     * - `srcSet`: an optional string with scaled down image variants. This is typically passed into [`<img srcSet>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset)
     *   and helps the browser to load a smaller image when a full-size one isn’t necessary.
     * - `alt`: an optional description of the image.
     *
     * @remarks
     * ```javascript
     * function MyComponent(props) {
     *   return <img src={props.image.src} srcSet={props.image.srcSet} alt={props.image.alt} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *   image: {
     *     type: ControlType.ResponsiveImage,
     *   }
     * })
     * ```
     */
    ResponsiveImage = "responsiveimage",
    /**
     * A control that allows the user to pick a file resource. It will be
     * included in the component props as an URL string.
     * Displayed as an file picker that will open a native file browser. The
     * selected file will be provided as a fully qualified URL. The
     * `allowedFileTypes` property must be provided to specify acceptable file
     * types.
     *
     * @remarks
     * ```javascript
     * export function MyComponent(props) {
     *   return (
     *     <Frame size={"100%"}>
     *       <video
     *         style={{ objectFit: "contain", props.width, props.height }}
     *         src={props.filepath}
     *         controls
     *       />
     *     </Frame>
     *   )
     * }
     *
     * addPropertyControls(MyComponent, {
     *   filepath: {
     *     type: ControlType.File,
     *     allowedFileTypes: ["mov"],
     *   },
     * })
     * ```
     */
    File = "file",
    /**
     * A control that references to another component on the canvas,
     * included in the component props as a React node.
     * The component will have an outlet to allow linking to other Frames.
     * Available Frames will also be displayed in a dropdown menu in the
     * properties panel. The component reference will be provided as a property.
     * As a convention, the name for the property is usually just `children`.
     *
     * Multiple components can be linked by combining the `ComponentInstance`
     * type with the {@link ControlType.Array}.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   return <Stack size={"100%"}>{props.children}</Stack>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   children: {
     *     type: ControlType.ComponentInstance,
     *   },
     * })
     * ```
     */
    ComponentInstance = "componentinstance",
    /**
     * A control that allows multiple values per `ControlType`, provided as an
     * array via properties. For most control types this will be displayed as an
     * additional section in the properties panel allowing as many fields to be
     * provided as required.
     *
     * For a {@link ControlType.ComponentInstance} the Frame will also gain an
     * additional outlet control on the Canvas that allows links to be created
     * between frames.
     *
     * Group properties together by using an object control.
     *
     * For multiple {@link ControlType.FusedNumber} values, you can pass in an
     * array of single values as the React default prop.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   const frames = props.images.map(image => <Frame image={image} width={"1fr"} height={"1fr"} />)
     *   return <Stack size={"100%"}>{frames}</Stack>
     * }
     *
     * // Add a repeatable image property control
     * addPropertyControls(MyComponent, {
     *   images: {
     *     type: ControlType.Array,
     *     control: {
     *       type: ControlType.Image
     *     }
     *   },
     *   // Allow up to five items
     *   maxCount: 5,
     * })
     *
     * // Add a multi-connector to your component to connect components on the canvas
     * addPropertyControls(MyComponent, {
     *   children: {
     *     type: ControlType.Array,
     *     control: {
     *       type: ControlType.ComponentInstance
     *     },
     *     maxCount: 5,
     *   },
     * })
     *
     * // Add a list of objects
     * addPropertyControls(MyComponent, {
     *   myArray: {
     *     type: ControlType.Array,
     *     control: {
     *       type: ControlType.Object,
     *       controls: {
     *         title: { type: ControlType.String, defaultValue: "Employee" },
     *         avatar: { type: ControlType.Image },
     *       },
     *     },
     *     defaultValue: [
     *       { title: "Jorn" },
     *       { title: "Koen" },
     *     ],
     *   },
     * })
     *
     * // For multiple values, you can pass in an array of single values as the React default prop.
     * MyComponent.defaultProps = {
     *    paddings: [5, 10, 15],
     * }
     * ```
     *
     */
    Array = "array",
    /**
     * A control that exposes events in the prototyping panel within the Framer UI. When choosing an event from the prototyping panel, you can select from a list of actions to trigger.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   return <Frame onTap={props.onTap} size={"100%"} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *   onTap: {
     *     type: ControlType.EventHandler,
     *   },
     * })
     * ```
     */
    EventHandler = "eventhandler",
    /**
     * A control that allows for editing Framer Motion transition options within the Framer UI.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   return (
     *       <Frame
     *          animate={{ scale: 2 }}
     *          transition={props.transition}
     *       />
     *   )
     * }
     *
     * addPropertyControls(MyComponent, {
     *   transition: {
     *       type: ControlType.Transition,
     *   },
     * })
     * ```
     */
    Transition = "transition",
    /**
     * A control that allows for exposing shadows. The value will be provided as
     * a string with valid CSS box-shadow values.
     *
     * ```javascript
     * export function MyComponent(props) {
     *  return <motion.div style={{boxShadow: props.shadow}} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *  shadow: {
     *      type: ControlType.BoxShadow,
     *  }
     * })
     */
    BoxShadow = "boxshadow",
    /**
     * A control that allows for exposing web links.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   return <a href={props.link}>My Link</a>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   link: {
     *     type: ControlType.Link,
     *   }
     * })
     * ```
     */
    Link = "link",
    /**
     * A control that allows for exposing dates. The value will be provided in toJSON() string format.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   const formattedDate = React.useMemo(() => {
     *     return new Date(props.date).toLocaleDateString()
     *   }, [props.date])
     *   return <div>{formattedDate}</div>
     * }
     *
     * addPropertyControls(MyComponent, {
     *   date: {
     *     type: ControlType.Date,
     *   }
     * })
     * ```
     */
    Date = "date",
    /**
     * A control that allows for grouping multiple properties as an object.
     *
     * ```javascript
     * export function MyComponent(props) {
     *   return <Frame opacity={props.myObject.opacity} background={props.myObject.tint} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *   myObject: {
     *     type: ControlType.Object,
     *     controls: {
     *       opacity: { type: ControlType.Number },
     *       tint: { type: ControlType.Color },
     *     }
     *   }
     * })
     * ```
     */
    Object = "object",




    /**
     * @public
     * A control that represents a border.
     *
     * @remarks
     * ```javascript
     * function MyComponent(props) {
     *   return <div style={props.border} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *   border: {
     *     type: ControlType.Border,
     *     defaultValue: {
     *       borderWidth: 1,
     *       borderStyle: "solid",
     *       borderColor: "rgba(0, 0, 0, 0.5)",
     *     },
     *   }
     * })
     * ```
     */
    Border = "border",
    /**
     * @public
     * A control that allows specifying a web cursor that should be shown
     * when mousing over the element assigned.
     */
    Cursor = "cursor",
    /**
     * @public
     * A control that represents CSS padding.
     *
     * @remarks
     * ```javascript
     * function MyComponent({ padding }) {
     *   return <div style={{ padding }} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *   padding: {
     *     type: ControlType.Padding,
     *     defaultValue: "8px",
     *   }
     * })
     */
    Padding = "padding",
    /**
     * @public
     * A control that represents CSS border radius.
     *
     * @remarks
     * ```javascript
     * function MyComponent({ borderRadius }) {
     *   return <div style={{ borderRadius }} />
     * }
     *
     * addPropertyControls(MyComponent, {
     *   borderRadius: {
     *     type: ControlType.BorderRadius,
     *     defaultValue: "16px",
     *     title: "Radius",
     *   }
     * })
     */
    BorderRadius = "borderradius"
}

/**
 * @privateRemarks do no use separately from FrameProps
 * @public
 * */
export declare interface CSSTransformProperties extends MotionTransform {
    /**
     * Set the CSS transform `translateX` property.
     * @remarks
     * ```jsx
     * <Frame x={100} />
     * ```
     * @public
     */
    x: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `translateY` property.
     * @remarks
     * ```jsx
     * <Frame y={100} />
     * ```
     * @public
     */
    y: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `translateZ` property.
     * @remarks
     * ```jsx
     * <Frame z={100} />
     * ```
     * @public
     */
    z: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `rotate` property in degrees.
     * @remarks
     * ```jsx
     * <Frame rotate={45}/>
     * ```
     * @public
     */
    rotate: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `rotateX` property in degrees.
     * @remarks
     * ```jsx
     * <Frame rotateX={45}/>
     * ```
     * @public
     */
    rotateX: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `rotateY` property in degrees.
     * @remarks
     * ```jsx
     * <Frame rotateY={45}/>
     * ```
     * @public
     */
    rotateY: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `rotateZ` property in degrees.
     * @remarks
     * ```jsx
     * <Frame rotateZ={45}/>
     * ```
     * @public
     */
    rotateZ: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `scale` property.
     * @remarks
     * ```jsx
     * <Frame scale={1.5} />
     * ```
     * @public
     */
    scale: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `scaleX` property.
     * @remarks
     * ```jsx
     * <Frame scaleX={1.5} />
     * ```
     * @public
     */
    scaleX: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `scaleY` property.
     * @remarks
     * ```jsx
     * <Frame scaleY={2} />
     * ```
     * @public
     */
    scaleY: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `skew` property in degrees.
     * @remarks
     * ```jsx
     * <Frame skew={15} />
     * ```
     * @public
     */
    skew: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `skewX` property in degrees.
     * @remarks
     * ```jsx
     * <Frame skewX={15} />
     * ```
     * @public
     */
    skewX: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `skewY` property in degrees.
     * @remarks
     * ```jsx
     * <Frame skewY={15} />
     * ```
     * @public
     */
    skewY: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `originX` property.
     * @remarks
     * ```jsx
     * <Frame originX={0.5} />
     * ```
     * @public
     */
    originX: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `originY` property.
     * @remarks
     * ```jsx
     * <Frame originY={0.5} />
     * ```
     * @public
     */
    originY: number | string | MotionValue<number | string>;
    /**
     * Set the CSS transform `originZ` property. Defaults to `px` units.
     * @remarks
     * ```jsx
     * <Frame originZ={100} />
     * ```
     * @public
     */
    originZ: number | string | MotionValue<number | string>;
    /**
     * Set the CSS perspective property.
     * @remarks
     * ```jsx
     * <Frame perspective={500} />
     * ```
     * @public
     */
    perspective: number | string | MotionValue<number | string>;
}

/**
 * @public
 */
declare interface CursorControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Cursor;
    defaultValue?: string;
}

declare type Curve = ControlPoints | Bezier;

declare interface CustomConstraintProperties {
    /**
     * Aspect Ratio to keep when resizing
     * @public
     */
    aspectRatio?: number | null;
    /**
     * Used for Text and Graphics containers
     * @public
     */
    autoSize?: boolean;
    /**
     * Use Vekter constraint layout system, disable DOM layout
     * @public
     */
    enabled: boolean;
    intrinsicWidth?: number;
    intrinsicHeight?: number;
}

declare interface CustomCursorControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.CustomCursor;
}

/**
 * Combine values and create a className string. Falsy values are not included.
 *
 * This helper is commonly exported by css-in-js libraries like Linaria, or
 * Emotion as cx. This is the implementation from Linaria:
 * https://github.com/callstack/linaria/blob/master/packages/core/src/cx.ts.
 *
 * We need it here so we can use it in es-modules.
 *
 * @public
 */
export declare function cx(...classNames: ClassName[]): string;

/**
 * Flag setVariantState as cycling variants.
 * @public
 */
export declare const CycleVariantState: unique symbol;

declare interface DampingDurationSpringOptions {
    dampingRatio: number;
    duration: number;
    velocity: number;
    mass: number;
}

export declare const Data: {
    <T extends object = object>(initial?: Partial<T> | object): T;




};

/** @public */
export declare interface DateControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Date;
    defaultValue?: string;
}

/**
 * @deprecated Use {@link FrameProps.transition} instead
 */
declare interface DeprecatedAnimationOptions<Value> extends InterpolationOptions {


}

/**
 * @public
 * @deprecated
 */
export declare type DeprecatedAnimationTarget<Value> = Animatable_2<Value> | AnimatableObject<Value> | MotionValue<Value>;

/** @public */
export declare interface DeprecatedCoreFrameProps extends DeprecatedFrameProperties, LayerProps {
}

/**
 * @public
 */
export declare const DeprecatedFrame: typeof DeprecatedFrameType;

/** @public */
export declare interface DeprecatedFrameProperties extends ConstraintProperties, DeprecatedTransformProperties, DeprecatedVisualProperties {
    /**
     * Determines whether the Frame is current visible. Set to `true` by default.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame visible={false} />
     * }
     * ```
     */
    visible: boolean;
    /**
     * An optional name for the Frame.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame name="MyFrame" />
     * }
     * ```
     */
    name?: string;
    /**
     * Set to `true` to enable backface-visibility.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame backfaceVisibility={true} />
     * }
     * ```
     */
    backfaceVisible?: boolean | Animatable_2<boolean>;
    /**
     * Set the perspective on the z-plane.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame perspective={100px} />
     * }
     * ```
     */
    perspective?: number | Animatable_2<number>;
    /**
     * Set to `true` to preserve 3D.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame preserve3d={true} />
     * }
     * ```
     */
    preserve3d?: boolean | Animatable_2<boolean>;
    /**
     * A border width for the frame. Can be either a single number for all sides or
     * an object describing each side. Set to `0` by default.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame borderWidth={{top: 10, bottom: 10}} />
     * }
     * ```
     */
    borderWidth: number | Partial<{
        top: number;
        bottom: number;
        left: number;
        right: number;
    }>;
    /**
     * A border color for the Frame. Set to `"#222"` by default.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame borderColor="red" />
     * }
     * ```
     */
    borderColor: string;
    /**
     * A border style for the Frame. One of `"solid", "dashed", "dotted"` or `"double"`. Set to `"solid"` by default.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame borderStyle="dotted" />
     * }
     * ```
     */
    borderStyle: BorderStyle;
    /**
     * Additional CSSProperties to apply to the frame. Usage is exactly the same as with the
     * standard React style prop.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame style={{color: "red", backgroundColor: "blue"}} />
     * }
     * ```
     */
    style?: React_2.CSSProperties;
    /**
     * An optional className for the Frame.
     * @remarks
     * ```jsx
     * function App() {
     *   return <Frame className="my-frame" />
     * }
     * ```
     */
    className?: string;

}

declare interface DeprecatedFrameState {
    size: AnimatableObject<Size> | Size | null;
}

declare class DeprecatedFrameType extends Layer<DeprecatedCoreFrameProps, DeprecatedFrameState> {
    context: React_2.ContextType<typeof ConstraintsContext>;
    static supportsConstraints: boolean;
    static defaultFrameSpecificProps: DeprecatedFrameProperties;
    static readonly defaultProps: DeprecatedCoreFrameProps;
    static rect(props: Partial<ConstraintProperties>): Rect;
    get rect(): Rect;
    element: HTMLDivElement | null;
    imageDidChange: boolean;
    state: DeprecatedFrameState;
    static getDerivedStateFromProps(nextProps: Partial<DeprecatedCoreFrameProps>, prevState: DeprecatedFrameState): DeprecatedFrameState | null;
    static updatedSize(props: Partial<DeprecatedCoreFrameProps>, state: DeprecatedFrameState): AnimatableObject<Size> | Size;
    getStyle(): React_2.CSSProperties;
    propsObserver: AnimatableObject<DeprecatedCoreFrameProps>;
    propsObserverCancel?: Cancel;
    sizeObserver: AnimatableObject<Size>;
    sizeObserverCancel?: Cancel;
    layoutChildren(): (React_2.ReactElement<any, string | React_2.JSXElementConstructor<any>> | React_2.FunctionComponentElement<{
        _forwardedOverrides: {
            [key: string]: any;
        };
    }>)[] | null | undefined;
}

/** @public */
export declare const DeprecatedFrameWithEvents: React_2.ComponentClass<Partial<DeprecatedFrameWithEventsProps>>;

/** @public */
export declare type DeprecatedFrameWithEventsProps = DeprecatedCoreFrameProps & WithEventsProperties;

declare interface DeprecatedTransformProperties {
    z: Animatable_2<number> | number;
    rotation: Animatable_2<number> | number;
    rotationX: Animatable_2<number> | number;
    rotationY: Animatable_2<number> | number;
    rotationZ: Animatable_2<number> | number;
    scale: Animatable_2<number> | number;
    scaleX: Animatable_2<number> | number;
    scaleY: Animatable_2<number> | number;
    scaleZ: Animatable_2<number> | number;
    skew: Animatable_2<number> | number;
    skewX: Animatable_2<number> | number;
    skewY: Animatable_2<number> | number;
    originX: Animatable_2<number> | number;
    originY: Animatable_2<number> | number;
    originZ: Animatable_2<number> | number;
}

/** @public */
export declare type DeprecatedVisualProperties = Partial<BackgroundProperties & RadiusProperties & FilterProperties & BackgroundFilterProperties & BlendingProperties & OverflowProperties & BoxShadowProperties_2 & WithOpacity & TextColorProperties>;

/** @public */
export declare interface DOMLayoutProps {



}

declare type DragEventHandler<Draggable> = (event: FramerEvent, draggable: Draggable) => void;

declare interface DragEvents<Draggable> {
    onMove: (point: Point, draggable: Draggable) => void;

    onDragAnimationStart: (animation: {
        x: AnimationInterface;
        y: AnimationInterface;
    }, draggable: Draggable) => void;
    onDragAnimationEnd: (animation: {
        x: AnimationInterface;
        y: AnimationInterface;
    }, draggable: Draggable) => void;
    onDragSessionStart: DragEventHandler<Draggable>;
    onDragSessionMove: DragEventHandler<Draggable>;
    onDragSessionEnd: DragEventHandler<Draggable>;
    onDragStart: DragEventHandler<Draggable>;
    onDragWillMove: DragEventHandler<Draggable>;
    onDragDidMove: DragEventHandler<Draggable>;
    onDragEnd: DragEventHandler<Draggable>;
}

/** @public */
export declare const Draggable: React_2.ComponentClass<Partial<DeprecatedFrameWithEventsProps> & Partial<DraggableProps<typeof DeprecatedFrameWithEvents>>>;

declare interface DraggableProps<Draggable> extends DraggableSpecificProps<Draggable> {
    enabled: boolean;
}

declare interface DraggableSpecificProps<Draggable> extends Partial<DragEvents<Draggable>> {
    momentum: boolean;
    momentumOptions: {
        friction: number;
        tolerance: number;
    };
    momentumVelocityMultiplier: number;
    speedX: number;
    speedY: number;
    bounce: boolean;
    bounceOptions: {
        friction: number;
        tension: number;
        tolerance: number;
    };
    directionLock: boolean;
    directionLockThreshold: {
        x: number;
        y: number;
    };
    overdrag: boolean;
    overdragScale: number;
    pixelAlign: boolean;
    velocityTimeout: number;
    velocityScale: number;
    horizontal: boolean;
    vertical: boolean;
    constraints: Partial<Rect>;
    mouseWheel: boolean;
}

declare type EaseOptions = Omit<BezierOptions, "curve">;

declare type EffectOrMotionProp<T> = (Partial<Record<keyof FXValues, number>> & {
    transition: ValueAnimationTransition<number>;
}) | T;

declare interface EffectScrollTarget {
    ref?: React_2.RefObject<HTMLElement>;
    offset?: number;
    direction?: ScrollDirection;
    target?: TargetAndTransition | VariantLabels;
}

declare interface EffectStyleScrollTarget extends EffectScrollTarget {
    target: StyleEffect;
}

declare interface EffectStyleScrollTarget_2 extends EffectScrollTarget {
    target: Record<keyof FXValues, number>;
}

declare const effectValuesKeys: readonly ["opacity", "x", "y", "scale", "rotate", "rotateX", "rotateY", "skewX", "skewY", "transformPerspective"];

declare interface EffectVariantScrollTarget extends EffectScrollTarget {
    target: string;
}

declare type ElementId = string;

/**
 * @public
 */
declare type Elements = Record<ElementId, string>;

/**
 * @public
 */
export declare type EmulatedScrollProps = {
    native?: false | undefined;
} & Omit<Partial<FrameProps>, "onScroll" | "size" | "overflow"> & ScrollEvents & ScrollConfig;

declare interface EnabledGestures {
    hover: boolean;
    pressed: boolean;
}

declare type EnabledVariantGestures = Record<string, EnabledGestures>;

/** @public */
export declare interface EnumControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Enum;
    defaultValue?: string | boolean | number | undefined | null;
    options: (string | boolean | number | undefined | null)[];
    optionTitles?: string[];
    displaySegmentedControl?: boolean;
    /**  Used when displaySegmentedControl is enabled. If not given defaults to horizontal */
    segmentedControlDirection?: "horizontal" | "vertical";


}

declare type EventDispatcher = (type: string, event: FramerEvent, target: EventTarget) => void;

declare type EventHandler = (event: FramerEvent) => void;

/** @public */
export declare interface EventHandlerControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.EventHandler;
}

/**
 * @public
 */
export declare type FadeTransitionOptions = NavigationTransitionAnimation;

/** @public */
export declare interface FileControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.File;
    allowedFileTypes: string[];
}

/** @public */
export declare interface FilterNumberProperties {
    brightness: number;
    contrast: number;
    grayscale: number;
    hueRotate: number;
    invert: number;
    saturate: number;
    sepia: number;
    blur: number;
}

/** @public */
export declare interface FilterProperties extends FilterNumberProperties {
    dropShadows: Readonly<Shadow[]>;
}

/**
 * @public
 */
declare type FinishFunction = (transaction: TransactionId) => void;

/**
 * @public
 */
export declare interface FlipTransitionOptions extends NavigationTransitionAnimation, NavigationTransitionAppearsFrom {
}

export declare function Floating({ alignment, placement, safeArea, offsetX, offsetY, anchorRef, className, children, portalSelector, zIndex, collisionDetection, collisionDetectionPadding, onDismiss, ...rest }: React_2.PropsWithChildren<FloatingProps>): React_2.ReactPortal;

declare interface FloatingProps {
    alignment: Alignment;
    placement: Placement;
    offsetX: number;
    offsetY: number;
    anchorRef: React_2.MutableRefObject<HTMLElement | null>;
    safeArea: boolean;
    className: string;
    portalSelector: string;
    zIndex: number | undefined;
    collisionDetection?: boolean;
    collisionDetectionPadding?: number;
    onDismiss: () => void;
}

declare interface FontControlDefaultValue {
    textAlign?: "left" | "right" | "center";
    fontSize?: number;
    letterSpacing?: string | number;
    lineHeight?: string | number;
}

declare interface FontControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Font;
    controls?: "basic" | "extended";
    defaultFontType?: "monospace" | "sans-serif";
    defaultValue?: FontControlDefaultValue;
    displayTextAlignment?: boolean;
    displayFontSize?: boolean;
}

/** @public */
declare type FontSourceName = "local" | "google" | "framer" | "fontshare" | "custom";

/** @public */
export declare const Frame: React_2.ForwardRefExoticComponent<Partial<FrameProps> & React_2.RefAttributes<HTMLDivElement>>;

/**
 * @privateRemarks do no use separately from FrameProps
 * @public
 * */
export declare interface FrameLayoutProperties extends PositionStickyProperties, PositionFixedProperties, PositionAbsoluteProperties {
    /**
     * Distance from the top in pixels. Set to `0` by default.
     * @remarks
     * ```jsx
     * <Frame top={100} />
     * ```
     * @public
     */
    top: number | string | MotionValue<number | string>;
    /**
     * Distance from the right in pixels. Set to `0` by default.
     * @remarks
     * ```jsx
     * <Frame right={100} />
     * ```
     * @public
     */
    right: number | string | MotionValue<number | string>;
    /**
     * Distance from the bottom in pixels. Set to `0` by default.
     * @remarks
     * ```jsx
     * <Frame bottom={100} />
     * ```
     * @public
     */
    bottom: number | string | MotionValue<number | string>;
    /**
     * Distance from the left in pixels. Set to `0` by default.
     * @remarks
     * ```jsx
     * <Frame left={100} />
     * ```
     * @public
     */
    left: number | string | MotionValue<number | string>;
    /**
     * Set the CSS `width` property. Set to `200` by default. Accepts all CSS value types (including pixels, percentages, keywords and more).
     * @remarks
     * ```jsx
     * // Pixels
     * <Frame width={100} />
     *
     * // Percentages
     * <Frame width={"100%"} />
     * ```
     * @public
     */
    width: number | string | MotionValue<number | string>;
    /**
     * Set the CSS `height` property. Set to `200` by default. Accepts all CSS value types (including pixels, percentages, keywords and more).
     * @remarks
     * ```jsx
     * // Pixels
     * <Frame height={100} />
     *
     * // Percentages
     * <Frame height={"100%"} />
     *
     * ```
     * @public
     */
    height: number | string | MotionValue<number | string>;
    /**
     * Set the CSS `position` property. Set to `"absolute"` by default.
     * @remarks
     * ```jsx
     * <Frame position={"relative"} />
     * ```
     * @public
     */
    position: React_2.CSSProperties["position"];
    /**
     * Shortcut for centering Frames.
     * @remarks
     * ```jsx
     * // Center
     * <Frame center />
     *
     * // Center horizontally
     * <Frame center="x" />
     *
     * // Center vertically
     * <Frame center="y" />
     * ```
     * @public
     */
    center: boolean | "x" | "y";
    /**
     * Shortcut for setting the width and height simultaneously.
     * @remarks
     * ```jsx
     * <Frame size={100} />
     * ```
     * @public
     */
    size: number | string;
    /**
     * Set the CSS `min-width` property. Unset by default.
     * @remarks
     * ```jsx
     * <Frame minWidth={200} />
     * ```
     * @public
     */
    minWidth: number | string | MotionValue<number | string>;
    /**
     * Set the CSS `min-height` property. Unset by default.
     * @remarks
     * ```jsx
     * <Frame minHeight={200} />
     * ```
     * @public
     */
    minHeight: number | string | MotionValue<number | string>;
    /**
     * Set the CSS `min-width` property. Unset by default.
     * @remarks
     * ```jsx
     * <Frame minWidth={200} />
     * ```
     * @public
     */
    maxWidth: number | string | MotionValue<number | string>;
    /**
     * Set the CSS `max-height` property. Unset by default.
     * @remarks
     * ```jsx
     * <Frame maxHeight={200} />
     * ```
     * @public
     */
    maxHeight: number | string | MotionValue<number | string>;


}

/** @public */
export declare interface FrameProps extends ImageAltProps, BackgroundProperties, VisualProperties, Omit<MotionDivProps, "color" | "children">, CSSTransformProperties, LayerProps, FrameLayoutProperties, ConstraintConfiguration, BaseFrameProps {
    componentType?: string;
    as?: keyof HTMLElementTagNameMap;



}

/**
 * The animation object returned by the {@link (animate:function)} functions
 * @remarks
 * Can be used to control a animation or wait for it to finish. You never create a FramerAnimation yourself, but store the return type from the animate function.
 * ```jsx
 * const animation = animate.ease(value, 100)
 * await animation.finished()
 * const animation = animate.spring(value, 200)
 * animation.cancel()
 * ```
 * @privateRemarks
 * This could be called just Animation, but it's type would clash with
 * javascript's native Animation: https://developer.mozilla.org/en-US/docs/Web/API/Animation
 * So if you forget the import, you would get weird errors.
 *
 * Also, this class follows the native Animation as much as possible.
 * @public
 * @deprecated Use the {@link useAnimation} hook instead
 */
export declare class FramerAnimation<Value, AnimatorOptions> {












    /**
     * Wait for the animation to be ready to play.
     * @remarks
     * ```jsx
     * const animation = animate.ease(value, 100)
     * animation.ready().then(() => {
     *    // Animation is ready
     * })

     * // async/await syntax
     * const animation = animate.ease(value, 100)
     * await animation.ready()
     * // Animation is ready
     * ```
     * @returns Promise that is resolved when the animation is ready to play
     * @public
     */
    get ready(): Promise<void>;




    /**
     * Wait for the animation to be finished.
     * @remarks
     * ```jsx
     * // async/await syntax
     * const animation = animate.ease(value, 100)
     * await animation.finished()
     * // Animation is finished
     *
     *
     * const animation = animate.ease(value, 100)
     * animation.ready().then(() => {
     *    // Animation is finished
     * })
     * ```
     * @returns Promise that is resolved when the animation is ready to play
     * @public
     */
    get finished(): Promise<void>;

    /**
     * Cancels the animation if it is still running.
     * @remarks
     * ```jsx
     * const animation = animate.ease(value, 100, {duration: 3})
     * setTimeout(() => animation.cancel(), 500)
     * ```
     * @public
     */
    cancel(): void;


}

declare type FramerAnimationState = "idle" | "running" | "finished";

/**
 * @public
 */
export declare class FramerEvent {









    private static eventLikeFromOriginalEvent;



}

/**
 * @deprecated Please use {@link ControlType.Padding} and {@link ControlType.BorderRadius}.
 * @public
 */
export declare interface FusedNumberControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.FusedNumber;
    defaultValue?: number;
    toggleKey: keyof P;
    toggleTitles: [string, string];
    valueKeys: [keyof P, keyof P, keyof P, keyof P];
    valueLabels: [string, string, string, string];
    min?: number;
}

declare type FXProps = Partial<Prefixed<ParallaxTransformOptions & StyleAppearEffectOptions & StyleTransformEffectOptions>> & Partial<MotionProps> & {
    __withFX?: boolean;
    __perspectiveFX?: boolean;
    __targetOpacity?: number;
    __smartComponentFX?: boolean;
} & Record<string, unknown>;

/**
 * All effects that can be composed operate on a single set of motion values, by
 * adding or multiplying their values with other effect values. FXValues is the
 * shared interface that can be animated.
 */
declare type FXValues = Record<(typeof effectValuesKeys)[number], MotionValue<number>>;

declare type GestureHandlers = Pick<TapHandlers & React_2.DOMAttributes<HTMLDivElement>, "onTap" | "onTapStart" | "onTapCancel" | "onMouseEnter" | "onMouseLeave">;

declare type GestureState = Partial<{
    isHovered: boolean;
    isPressed: boolean;
}>;

/** @public */
export declare function getFonts(component: React_2.ComponentType<unknown>): ComponentFontBundle[];

/**
 * @public
 */
export declare type Gradient = LinearGradient | RadialGradient;

/**
 * @public
 */
declare interface GradientColorStop {
    value: string;
    position: number;
}

declare type Hash = ElementId | string;

declare type HigherOrderComponent<Props> = (Component: React_2.ComponentType<Props>, props?: Props) => React_2.ComponentType<Props>;

/** @public */
export declare interface IdentityProps {
    /** An unique id for the layer */
    id?: string;
    duplicatedFrom?: string[];
}

/** @public */
declare const Image_2: React_2.ForwardRefExoticComponent<Partial<ImageProps> & React_2.RefAttributes<HTMLDivElement>>;
export { Image_2 as Image }

declare interface ImageAltProps {
    /**
     * Previously, alt was set on the BackgroundImage object. This caused issues
     * where the entire object would need to be replaced in order to update the
     * alt attribute. Now we provide a specific prop for the alt attribute so it
     * can change even if the background object does not and vice versa. This
     * needs to be optional so that old sites and Smart Components generated
     * with alt in the BackgroundImage object do not error. Those sites and
     * Smart Components will correctly fallback to BackgroundImage.alt.
     */
    alt?: string;
}

/**
 * @deprecated Use {@link ResponsiveImageControlDescription} instead.
 * @public
 */
export declare interface ImageControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Image;
}

/** @public */
export declare type ImageFit = "fill" | "fit" | "stretch" | "tile";

/** @public */
declare interface ImageProps extends MotionDivProps, BackgroundImageProps {
    as?: keyof HTMLElementTagNameMap;
}

/** @public */
export declare type IncomingColor = ColorRGB | ColorHSL | ColorRGBA | ColorHSLA | string;

/**
 * @public
 */
declare interface Interpolation<Value = any> {


}

/**
 * @public
 */
declare const Interpolation: {

};

declare interface InterpolationOptions {
    colorModel: ColorMixModelType;
}

/** @public */
export declare function isRelativeNumber(value: unknown): value is RelativeNumber;

/** @public */
export declare type Layer = InstanceType<typeof Layer>;

/** @public */
export declare const Layer: {
    new <P extends Partial<LayerProps>, S>(props: P): {
        /** @private (Just using `private` breaks compilation unless using `stripInternal`) */
        layerElement: HTMLElement | SVGElement | null;
        setLayerElement: (element: HTMLElement | SVGElement | null) => void;


        context: unknown;
        setState<K extends keyof S>(state: S | ((prevState: Readonly<S>, props: Readonly<P>) => S | Pick<S, K> | null) | Pick<S, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        render(): React_2.ReactNode;
        readonly props: Readonly<P>;
        state: Readonly<S>;
        refs: {
            [key: string]: React_2.ReactInstance;
        };
        componentDidMount?(): void;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React_2.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    };
    new <P extends Partial<LayerProps>, S>(props: P, context: any): {
        /** @private (Just using `private` breaks compilation unless using `stripInternal`) */
        layerElement: HTMLElement | SVGElement | null;
        setLayerElement: (element: HTMLElement | SVGElement | null) => void;


        context: unknown;
        setState<K extends keyof S>(state: S | ((prevState: Readonly<S>, props: Readonly<P>) => S | Pick<S, K> | null) | Pick<S, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        render(): React_2.ReactNode;
        readonly props: Readonly<P>;
        state: Readonly<S>;
        refs: {
            [key: string]: React_2.ReactInstance;
        };
        componentDidMount?(): void;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React_2.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<P>, prevState: Readonly<S>): any;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<P>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<P>, nextState: Readonly<S>, nextContext: any): void;
    };
    readonly defaultProps: LayerProps;
    applyWillChange(props: WillChangeTransformProp, style: MotionStyle, usingMotionStyle: boolean): void;
    contextType?: React_2.Context<any> | undefined;
};

/** @public */
export declare interface LayerProps extends IdentityProps, WillChangeTransformProp, DOMLayoutProps {
    children?: ReactNode;
    key?: React_2.Key;




}

export { LayoutGroupContext }

/**
 * @public
 */
export declare type LinearGradient = LinearGradientBase & (SimpleGradient | MultiStopGradient);

/**
 * @public
 */
export declare const LinearGradient: {
    /**
     * @param value -
     */
    isLinearGradient: (value: any) => value is LinearGradient;


};

/**
 * @public
 */
export declare interface LinearGradientBase {
    alpha: number;
    angle: number;
}

/** @public */
export declare const Link: ForwardRefExoticComponent<Omit<Props, "ref"> & RefAttributes<unknown>>;

/** @public */
declare interface LinkControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Link;
    defaultValue?: string;
}

declare interface LinkProps {
    href: string | LinkToWebPage | undefined;
    /**
     * Which browsing context to display the linked URL. If not provided, the
     * Link component will only open the link in a new tab if the href is an
     * external URL.
     */
    openInNewTab?: boolean;
    smoothScroll?: boolean;
}

declare interface LinkToWebPage {
    webPageId: string;
    hash?: string;
    pathVariables?: Record<string, string>;
    hashVariables?: Record<string, string>;
    unresolvedPathSlugs?: Record<string, UnresolvedSlug>;
    unresolvedHashSlugs?: Record<string, UnresolvedSlug>;
}

/**
 * @public
 * A unique locale with an id, code (e.g. "en-US"), name, slug, and optional fallback.
 */
export declare interface Locale {
    /** Unique id. */
    readonly id: LocaleId;
    /** Language and optional region code (e.g. "en-US"). */
    readonly code: string;
    /** Display name, for example used by the locale picker component. */
    readonly name: string;
    /** Locale slug is inserted as the first path segment when non empty. */
    readonly slug: string;
    /** Optional fallback locale, used when resolving localized values. */
    readonly fallback?: Locale;
}

/**
 * @public
 * A unique id for a locale.
 */
export declare type LocaleId = string;

/**
 * @public
 * The active locale, all of the available locales, and a way to change the active locale.
 */
export declare interface LocaleInfo {
    /** The locale currently active. */
    readonly activeLocale: Locale | null;
    /** All of the available locales. */
    readonly locales: readonly Locale[];
    /** Update the active locale by passing in either a locale or locale id. */
    readonly setLocale: (locale: Locale | LocaleId) => Promise<void>;
}

declare type Mixer = (from: string | Color, toColor: Color, options?: ColorMixOptions) => (p: number) => string;

declare type MixerStateful = (toColor: Color, options?: ColorMixOptions) => (p: number) => string;

/**
 * @public
 */
export declare interface ModalTransitionOptions extends NavigationTransitionAnimation, NavigationTransitionBackdropColor {
}

declare type MotionDivProps = HTMLMotionProps<"div">;

/** @public */
export declare function MotionSetup({ children }: Props_2): JSX_2.Element;

/**
 * @public
 */
declare interface MultiStopGradient {
    stops: readonly GradientColorStop[];
}

/**
 * @public
 */
export declare type NativeScrollProps = {
    native: true;
} & Omit<Partial<FrameProps>, "size" | "overflow"> & Omit<ScrollEvents, "onScroll"> & ScrollConfig & {
    scrollBarVisible?: boolean;
};

/**
 * Provides {@link NavigationInterface} that can be used to start transitions in Framer.
 * @public
 */
export declare const NavigationConsumer: React_2.Consumer<NavigationInterface>;

/**
 * The navigator allows control over the built-in navigation component in Framer.
 * @public
 */
export declare interface NavigationInterface {
    /**
     * Go back to the previous screen. If a stack of overlays is presented, all overlays are dismissed.
     * @public
     * */
    goBack: () => void;
    /**
     * Show new screen instantly.
     * @param component - The incoming component
     * @public
     */
    instant: (component: React_2.ReactNode) => void;
    /**
     * Fade in new screen.
     * @param component - The incoming component
     * @param options - {@link FadeTransitionOptions}
     * @public
     */
    fade: (component: React_2.ReactNode, options?: FadeTransitionOptions) => void;
    /**
     * Push new screen. Defaults from right to left, the direction can be changed using the {@link NavigationTransitionOptions}.
     * @param component - The incoming component
     * @param options - {@link PushTransitionOptions}
     * @public
     */
    push: (component: React_2.ReactNode, options?: PushTransitionOptions) => void;
    /**
     * Present modal overlay in the center.
     * @param component - The incoming component
     * @param options - {@link ModalTransitionOptions}
     * @public
     */
    modal: (component: React_2.ReactNode, options?: ModalTransitionOptions) => void;
    /**
     * Present overlay from one of four edges. The direction can be changed using the {@link NavigationTransitionOptions}.
     * @param component - The incoming component
     * @param options - {@link OverlayTransitionOptions}
     * @public
     */
    overlay: (component: React_2.ReactNode, options?: OverlayTransitionOptions) => void;
    /**
     * Flip incoming and outgoing screen in 3D. The flip direction can be changed using the {@link NavigationTransitionOptions}.
     * @param component - The incoming component
     * @param options - {@link FlipTransitionOptions}
     * @public
     */
    flip: (component: React_2.ReactNode, options?: FlipTransitionOptions) => void;
    /**
     * Present a screen using a custom {@link NavigationTransition}.
     * @param component - The incoming component
     * @param transition - {@link NavigationTransition}
     * @public
     */
    customTransition: (component: React_2.ReactNode, transition: NavigationTransition_2) => void;
    /**
     * Animate layers with matching magicIds between screens. Layers are assigned matching IDs if they share a name, or were copied from one another.
     * The transition can be changed using a custom {@link NavigationTransition}.
     * @param component - The incoming component
     * @param transition - {@link NavigationTransition}
     * @public
     */
    magicMotion: (component: React_2.ReactNode, transition: NavigationTransition_2) => void;
}

/**
 * Can be used to define a custom navigation transition.
 * @public
 */
declare interface NavigationTransition_2 extends NavigationTransitionAnimation, NavigationTransitionBackdropColor {
    /**
     * Defines the begin state of the incoming screen wrapper.
     */
    enter?: Partial<FrameProps>;
    /**
     * Defines the end state of the outgoing screen wrapper.
     */
    exit?: Partial<FrameProps>;
    /**
     * Defines the position and size of the incoming screen wrapper. Defaults to top, right, bottom, and left of 0.
     */
    position?: NavigationTransitionPosition;
    /**
     * Defines whether the incoming screen should render over the current context, like an overlay or modal. Defaults to false.
     */
    overCurrentContext?: boolean;
    /**
     * Defines whether a tap in the background should dismiss the screen presented over the current context. Defaults to true.
     */
    goBackOnTapOutside?: boolean;
    /**
     * Defines whether the backface of the incoming and outgoing screens should be visible, necessary for certain 3D transitions. Defaults to true.
     */
    backfaceVisible?: boolean;
    /**
     * Defines whether the incoming and outgoing screens should auto animate their children. Defaults to false.
     */
    withMagicMotion?: boolean;
}
export { NavigationTransition_2 as NavigationTransition }

/**
 * @public
 */
export declare interface NavigationTransitionAnimation {
    /**
     * The animation defaults.
     */
    animation?: Transition;
}

/**
 * @public
 */
export declare interface NavigationTransitionAppearsFrom extends NavigationTransitionAnimation {
    /**
     * Defines which side the target will appear from.
     * @remarks
     *
     * - `"left"`
     * - `"right"`
     * - `"top"`
     * - `"bottom"`
     */
    appearsFrom?: NavigationTransitionSide;
}

/**
 * @public
 */
export declare interface NavigationTransitionBackdropColor {
    /**
     * Defines the backdrop color when the incoming screen is rendered over the current context. Defaults to the iOS dim color.
     */
    backdropColor?: string;
}

/**
 * @public
 */
export declare type NavigationTransitionPosition = Partial<Pick<FrameLayoutProperties, "top" | "right" | "bottom" | "left" | "center">>;

/**
 * @public
 */
export declare type NavigationTransitionSide = "left" | "right" | "top" | "bottom";

/** @public */
export declare interface NumberControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Number;
    defaultValue?: number;
    max?: number;
    min?: number;
    unit?: string;
    step?: number;
    displayStepper?: boolean;
}

/**
 * @remarks This feature is still in beta
 * @public
 */
export declare interface ObjectControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Object;
    controls: {
        [key: string]: ObjectPropertyControlDescription;
    };
    defaultValue?: {
        [key: string]: any;
    };
    buttonTitle?: string;
    optional?: boolean;
    icon?: ObjectControlIcon;
}

/**
 * Object Control Icons provided by Framer
 */
declare type ObjectControlIcon = "object" | "effect" | "color" | "interaction" | "boolean";

/**
 * Object sub type
 * Currently not supported: component instance, and event handler.
 * @public
 */
export declare type ObjectPropertyControlDescription<P = any> = NumberControlDescription<P> | EnumControlDescription<P> | BooleanControlDescription<P> | StringControlDescription<P> | RichTextControlDescription<P> | ColorControlDescription<P> | SegmentedEnumControlDescription<P> | ImageControlDescription<P> | ResponsiveImageControlDescription<P> | FileControlDescription<P> | TransitionControlDescription<P> | BoxShadowControlDescription<P> | LinkControlDescription<P> | DateControlDescription<P> | ArrayControlDescription<P> | ObjectControlDescription<P> | FusedNumberControlDescription<P> | FontControlDescription<P> | PageScopeControlDescription<P> | ScrollSectionRefControlDescription<P> | CustomCursorControlDescription<P> | BorderControlDescription<P> | CursorControlDescription<P> | PaddingControlDescription<P> | BorderRadiusControlDescription<P>;

/**
 * @public
 */
declare type Observer<Value> = {
    update: UpdateFunction<Value>;
    finish: FinishFunction;
} | UpdateFunction<Value>;

declare type Overflow = "visible" | "hidden" | "scroll" | "auto";

declare interface OverflowProperties {
    overflow: Overflow;
}

/**
 * @public
 */
export declare interface OverlayTransitionOptions extends NavigationTransitionAnimation, NavigationTransitionAppearsFrom, NavigationTransitionBackdropColor {
}

/** @public */
export declare type Override<T extends object = FrameProps & {
    [key: string]: any;
}> = OverrideObject<T> | OverrideFunction<T>;

/** @public */
export declare type OverrideFunction<P extends object = any> = (props: P) => Partial<P>;

/** @public */
export declare type OverrideObject<T extends object = any> = Partial<T>;

declare interface PaddingControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Padding;
    defaultValue?: string;
}

export declare const Page: ForwardRefExoticComponent<Partial<PageProps> & RefAttributes<HTMLDivElement>>;

/**
 * @public
 */
export declare type PageAlignment = "start" | "center" | "end";

/**
 * @public
 */
declare type PageContentDimension = "auto" | "stretch";

/**
 * @public
 */
declare type PageDirection = "horizontal" | "vertical";

/**
 * Page effects change the behavior of the transition when swiping between pages.
 * By default there is no page effect applied.
 * @remarks
 * ```jsx
 * import React from "react"
 * import { Page, PageEffect } from "framer"
 *
 * export function MyComponent() {
 *  return <Page defaultEffect={"cube"} />
 * }
 * ```
 *
 * `"none"` - No custom effect is applied. This is the default.
 * `"cube"` - Each page is positioned as a 3D cube, connected to the current page.
 * `"coverflow"` - Each page is positioned in 3D, behind the current page.
 * `"wheel"` - Each page is gently titled in 3D, like a wheel.
 * `"pile"` - Each page is stacked behind the current page.
 * @public
 */
export declare type PageEffect = "none" | "cube" | "coverflow" | "wheel" | "pile";

/**
 * Information about the current effect.
 * @public
 */
export declare interface PageEffectInfo {
    /**
     * The offset of this page, in pixels, measured from the left-most part of the container.
     * @public
     */
    offset: number;
    /**
     * The offset of this page, normalised to the page size.
     *
     * For instance, if each page is `200` pixels wide, and we're on page index `1`, the `normalizedOffset` of page index `0` will be `-1`.
     * @public
     */
    normalizedOffset: number;
    /**
     * The `width` and `height` of the page.
     * @public
     */
    size: Size;
    /**
     * The index of the current page. The first page is `0`, the second is `1` and so on.
     * @public
     */
    index: number;
    /**
     * The direction of page scrolling, `"horizontal"` or `"vertical"`
     * @public
     */
    direction: PageDirection;
    /**
     * The gap between each page, in pixels.
     * @public
     */
    gap: number;
    /**
     * The total number of pages.
     *
     * @public
     */
    pageCount: number;
}

/**
 * Information about the current effect.
 * @public
 */
declare interface PageEffectValues {
    [key: string]: string | number | boolean;
}

/**
 * Event callbacks for the Page component, can be used to react to and co-ordinate
 * with other components.
 *
 * @public
 */
export declare interface PageEvents {
    /**
     * A callback that will be invoked when changing the page.
     * @remarks
     * This will be invoked when the drag animation begins or when the page changes
     * programatically. It can be used to co-ordinate with other behaviors.
     *
     * @param currentIndex - The current page number
     * @param previousIndex - The index of the previous page
     * @public
     * @remarks
     * ```jsx
     * <Page
     *     onChangePage={(current, previous) => {
     *         console.log(current, previous)
     *     }}
     * />
     * ```
     */
    onChangePage(currentIndex: number, previousIndex: number): void;
}

/**
 * All properties that can be used with the {@link Page} component it also extends all {@link ScrollProps} properties.
 * ```jsx
 * <Page
 *   direction={"horizontal"}
 *   contentWidth={"stretch"}
 *   contentHeight={"stretch"}
 *   alignment={"center"}
 *   currentPage={0}
 *   animateCurrentPageUpdate={true}
 *   gap={10}
 *   padding={0}
 *   paddingPerSide={true}
 *   paddingTop={0}
 *   paddingRight={0}
 *   paddingBottom={0}
 *   paddingLeft={0}
 *   momentum={false}
 *   dragEnabled={false}
 *   defaultEffect={PageEffect.Cube}>
 *   <Frame background="#19E" />
 *   <Frame background="#5CF" />
 *   <Frame background="#2CD" />
 * </Page>
 * ```
 * @public
 */
export declare interface PageProperties {
    /**
     * Current swipe direction. Either "horizontal" or "vertical". Set to `"horizontal"` by
     * default.
     *
     * @remarks
     * ```jsx
     * <Page direction="horizontal" />
     * ```
     */
    direction: PageDirection;
    /**
     * Width of the pages within the component. Either "auto" or "stretch" or a numeric value. Set
     * to `"stretch"` by default.
     *
     * @remarks
     * ```jsx
     * <Page contentWidth="auto" />
     * ```
     */
    contentWidth: PageContentDimension | number;
    /**
     * Height of the pages within the component. Either "auto" or "stretch" or a numeric value. Set
     * to `"stretch"` by default.
     *
     * @remarks
     * ```jsx
     * <Page contentHeight="auto" />
     * ```
     */
    contentHeight: PageContentDimension | number;
    /**
     * Alignment of the pages within the component. Either "start", "center", or "end". Set to
     * `"start"` by default.
     *
     * @remarks
     * ```jsx
     * <Page alignment="center" />
     * ```
     */
    alignment: PageAlignment;
    /**
     * Index of the current page. Set to `0` by default.
     *
     * @remarks
     * ```jsx
     * <Page currentPage={5} />
     * ```
     */
    currentPage: number;

    /**
     * If `true`, this will lock dragging to the initial direction.
     *
     * @public
     *
     * ```jsx
     * <Page direction="both" directionLock={true} />
     * ```
     */
    directionLock?: boolean;
    /**
     * Enable or disable dragging to scroll. Defaults to `true`.
     *
     * @public
     *
     * ```jsx
     * <Page dragEnabled={false} />
     * ```
     */
    dragEnabled?: boolean;
    /**
     * Enable or disable wheel scroll. Defaults to `false`.
     *
     * @public
     *
     * ```jsx
     * <Page wheelEnabled={true} />
     * ```
     */
    wheelEnabled?: boolean;
    /**
     * Horizontal offset of the scrollable content. Set to `0` by default
     *
     * @remarks
     * ```jsx
     * <Page contentOffsetX={20} />
     * ```
     */
    contentOffsetX?: MotionValue<number> | number;
    /**
     * Vertical offset of the scrollable content. Set to `0` by default.
     *
     * @remarks
     * ```jsx
     * <Page contentOffsetY={20} />
     * ```
     */
    contentOffsetY?: MotionValue<number> | number;
    /**
     * A number describing the gap between the page elements. Set to `10` by default. Can not be negative.
     *
     * @remarks
     * ```jsx
     * <Page gap={0} />
     * ```
     * */
    gap: number;
    /**
     * Padding to be applied to all sides. Set to `0` by default.
     * To specify different padding for each side, provide
     * individual `paddingTop`, `paddingLeft`, `paddingRight` and `paddingBottom` values.
     *
     * ```jsx
     * <Page padding={20} />
     * ```
     */
    padding: number;
    /**
     * Flag to tell the Page to ignore the `padding` prop and apply values per-side.
     *
     * @remarks
     *
     * ```jsx
     * <Page paddingLeft={20}  />
     * ```
     */
    paddingPerSide?: boolean;
    /**
     * Value for the top padding of the container. Set to `0` by default.
     * ```jsx
     * <Page paddingTop={20}  />
     * ```
     */
    paddingTop?: number;
    /**
     * ```jsx
     * <Page paddingRight={20}  />
     * ```
     * Value for the right padding of the container. Set to `0` by default.
     */
    paddingRight?: number;
    /**
     * ```jsx
     * <Page paddingBottom={20}  />
     * ```
     * Value for the bottom padding of the container. Set to `0` by default.
     */
    paddingBottom?: number;
    /**
     * ```jsx
     * <Page paddingLeft={20}  />
     * ```
     * Value for the left padding of the container. Set to `0` by default.
     */
    paddingLeft?: number;
    /**
     * When enabled you can flick through multiple pages at once.
     * @remarks
     *
     * ```jsx
     * <Page momentum />
     * ```
     */
    momentum: boolean;
    /**
     * Pick one of the predefined effects. Either "none", "cube", "coverflow", "wheel" or "pile". Set to `"none"` by default.
     * @remarks
     *
     * ```jsx
     * <Page defaultEffect={"coverflow"} />
     * ```
     */
    defaultEffect: PageEffect;
    /**
     * Allows you to provide a custom transition effect for individual pages.
     *
     * This function is called once for every page, every time the scroll offset changes. It returns a new set of styles for this page.
     *
     * @param info - A {@link PageEffectInfo} object with information about the current effect.
     * @returns should return a new set of Frame properties.
     *
     * @remarks
     * ```jsx
     * function scaleEffect(info) {
     *     const { normalizedOffset } = info
     *     return {
     *         scale: Math.max(0, 1 + Math.min(0, normalizedOffset * -1))
     *     }
     * }
     *
     * return <Page effect={scaleEffect} />
     * ```
     * @public
     */
    effect?: (info: PageEffectInfo) => PageEffectValues;

}

/**
 * @public
 */
export declare type PageProps = Partial<PageProperties> & Partial<Omit<FrameProps, "size" | "onScroll">> & LayerProps & Partial<PageEvents> & Partial<ScrollEvents>;

/**
 * @description Router Component
 * Safari iOS has a weird bug that will make `font-size` scale-up in the presence
 * of a unit width/height + `overflow: hidden` + an element in the DOM that has
 * opacity 0 and is set to opacity 1 in JS, just like in the case of our effects
 * with Motion. We set the width of published sites to auto to fix the issue. It
 * must explicitly be set on published sites because the same fix brakes the
 * preview.
 * Webkit issue: https://bugs.webkit.org/show_bug.cgi?id=240653
 * */
/** @public */
export declare function PageRoot({ RootComponent, isWebsite, routeId, framerSiteId, pathVariables, routes, collectionUtils, notFoundPage, isReducedMotion, includeDataObserver, localeId, locales, preserveQueryParams, enableImproveInpDuringHydration, addHydrationMarkers, }: PageRootProps): JSX_2.Element;

declare interface PageRootProps {
    RootComponent: RouteComponent;
    isWebsite: boolean;
    /**
     * framerSiteId is used by forms to identify the source of the form.
     */
    framerSiteId: string;
    routeId: string;
    pathVariables?: Record<string, unknown>;
    routes: Routes;
    collectionUtils: UtilsByCollectionId;
    notFoundPage?: React_2.ComponentType;
    isReducedMotion?: boolean;
    includeDataObserver?: boolean;
    locales?: Locale[];
    localeId?: LocaleId;
    preserveQueryParams?: boolean;
    /** Is `true` when the improveInpDuringHydration experiment is enabled. To be removed when the experiment is removed. */
    enableImproveInpDuringHydration?: boolean;
    /** Is `true` when the page root is used at the live site and is being hydrated. */
    addHydrationMarkers?: boolean;
}

export declare interface PageScopeControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.PageScope;
}

declare interface ParallaxTransformOptions {
    speed: number;
    adjustPosition: boolean;
    offset: number;
    parallaxTransformEnabled: boolean | undefined;
}

declare type Placement = "top" | "right" | "bottom" | "left";

/**
 * @public
 */
export declare function Point(x: number, y: number): Point;

/**
 * @public
 */
export declare interface Point {
    x: number;
    y: number;
}

/**
 * @public
 */
export declare namespace Point {










    /** @public */
    const isEqual: (a: Point, b: Point) => boolean;




}

declare interface PositionAbsoluteProperties {

}

declare interface PositionFixedProperties {

}

/** @public */
export declare interface PositionStickyProperties {





}

declare const prefix = "__framer__";

declare type Prefixed<Type extends object> = {
    [Property in keyof Type as `${typeof prefix}${string & Property}`]: Type[Property];
};

declare interface PresenceEffectOptions {
    initial?: EffectOrMotionProp<MotionProps["initial"]>;
    animate?: EffectOrMotionProp<MotionProps["animate"]>;
    exit?: EffectOrMotionProp<MotionProps["exit"]>;
    presenceInitial?: EffectOrMotionProp<MotionProps["initial"]>;
    presenceAnimate?: EffectOrMotionProp<MotionProps["animate"]>;
    presenceExit?: EffectOrMotionProp<MotionProps["exit"]>;
}

/**
 * Prints to the console.
 *
 * @param args - Arguments to print
 * @public
 */
declare function print_2(...args: any[]): void;
export { print_2 as print }

/** @public */
export declare type PropertyControls<ComponentProps = any, ArrayTypes = any> = {
    [K in keyof ComponentProps]?: ControlDescription<Partial<ComponentProps>>;
};

declare type Props = PropsWithChildren<LinkProps> & RefAttributes<unknown>;

declare interface Props_2 {
    children: React_2.ReactNode;
}

declare type Props_3<T> = Omit<T, "animate" | "initial" | "exit"> & Pick<PresenceEffectOptions, "animate" | "exit" | "initial">;

/**
 * @public
 */
export declare interface PushTransitionOptions extends NavigationTransitionAnimation, NavigationTransitionAppearsFrom {
}

/**
 * @public
 */
export declare type RadialGradient = RadialGradientBase & (SimpleGradient | MultiStopGradient);

/**
 * @public
 */
export declare const RadialGradient: {
    /**
     * @param value -
     * @public
     */
    isRadialGradient: (value: any) => value is RadialGradient;


};

/**
 * @public
 */
export declare interface RadialGradientBase {
    alpha: number;
    widthFactor: number;
    heightFactor: number;
    centerAnchorX: number;
    centerAnchorY: number;
}

/** @public */
export declare interface RadiusProperties {
    radius: RadiusValue | Partial<{
        topLeft: RadiusValue;
        topRight: RadiusValue;
        bottomLeft: RadiusValue;
        bottomRight: RadiusValue;
    }>;
}

declare type RadiusValue = number | Animatable_2<number> | string;

/**
 * @public
 */
export declare interface Rect extends Point, Size {
}

/**
 * @public
 */
export declare const Rect: {
    /**
     *
     * @param rect -
     * @param other -
     * @returns if the input rectangles are equal in size and position
     * @public
     */
    equals: (rect: Rect | null, other: Rect | null) => boolean;























    /** Takes a rect and transforms it by a matrix, resulting in the bounding rectangle of the
     * rotated and/or translated original.
     * @param rect - rectangle to transform
     * @param matrix - matrix to transform by
     * @returns The bounding rectangle of the rotated and/or translated rect.
     */
    transform: (rect: Rect, matrix: DOMMatrixReadOnly) => Rect;

    /**
     * Returns wether a rect contains another rect entirely
     * @param rectA -
     * @param rectB -
     * @returns true if rectA contains rectB
     */
    containsRect: (rectA: Rect, rectB: Rect) => boolean;






    /**
     *
     * @param rectA -
     * @param rectB -
     * @returns if the input rectangles are equal in size and position
     * @public
     * @deprecated: please use Rect.equals instead
     */
    isEqual: (rectA: Rect | null, rectB: Rect | null) => boolean;




    delta: (a: Rect, b: Rect) => Point;




};

/** @public */
export declare type RelativeNumber = `${number}%`;

/**
 * The `RenderTarget` represents the current environment in which a component
 * is running. This is most commonly either the editor canvas in Framer or in
 * the generated preview window.
 *
 * @remarks
 * Code components can use the `RenderTarget.current()` method to check for
 * the environment within their components and vary rendering accordingly. The
 * most common case would be to improve performance while rendering in the
 * Framer canvas where components that take too long to render will be replaced
 * with a placeholder. The `RenderTarget.hasRestrictions()` method can be used
 * to check explicitly for this case.
 *
 * @privateRemarks
 * This is a read-only equivalent of RenderEnvironment.target that is exposed
 * to components for context-dependent rendering
 *
 * @public
 */
export declare type RenderTarget = RenderTargetName;

export declare const RenderTarget: {
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
    canvas: RenderTargetName;
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
    export: RenderTargetName;
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
    thumbnail: RenderTargetName;
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
    preview: RenderTargetName;
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
    current: () => RenderTargetName;
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
    hasRestrictions: () => boolean;
};

declare enum RenderTargetName {
    canvas = "CANVAS",
    export = "EXPORT",
    thumbnail = "THUMBNAIL",
    preview = "PREVIEW"
}

/** @public */
export declare function resolveLink(href: LinkToWebPage | string | undefined, router: Partial<RouterAPI>, implicitPathVariables?: Record<string, unknown>): string | undefined;

/** @public */
declare interface ResponsiveImageControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.ResponsiveImage;
}

/** @public */
declare interface RichTextControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.RichText;
    defaultValue?: string;
    placeholder?: string;

}

/**
 * @public
 */
declare interface Route extends RouteInfo {
    page: RouteComponent;
}

/**
 * @public
 */
declare type RouteComponent<P = any> = React.ReactElement<P> | React.ComponentType<P> | ComponentWithPreload<React.ComponentType<P>>;

declare type RouteId = string;

/**
 * @public
 */
declare interface RouteInfo {
    path?: RoutePath;
    elements?: Elements;
    collectionId?: string;
    includedLocales?: LocaleId[];
}

declare type RoutePath = string;

/**
 * @public
 */
declare type Routes = Record<RouteId, Route>;

/**
 * @public
 */
export declare const Scroll: React_2.ForwardRefExoticComponent<ScrollProps & React_2.RefAttributes<HTMLDivElement>>;

/**
 * The properties for the {@link Scroll} component, which are also available within other components, like {@link Page}.
 * @public
 */
export declare interface ScrollConfig {
    /**
     * Controls the axis of drag-scrolling.
     * Defaults to `"vertical"` for vertical scrolling.
     *
     * @remarks
     * Set `"horizontal"` or `"vertical"` to only drag in a specific direction.
     * Set `"both"` to drag both directions.
     *
     * ```jsx
     * // Horizontal
     * <Scroll direction="horizontal" />
     *
     * // Vertical
     * <Scroll direction="vertical" />
     *
     * // Locked
     * <Scroll direction="locked" />
     *
     * // Both directions
     * <Scroll direction="both" />
     * ```
     *
     * @public
     */
    direction?: "horizontal" | "vertical" | "both";
    /**
     * If `true`, this will lock dragging to the initial direction.
     *
     * @public
     *
     * ```jsx
     * <Scroll direction="both" directionLock={true} />
     * ```
     */
    directionLock?: boolean;
    /**
     * Enable or disable dragging to scroll. Defaults to `true`.
     *
     * @public
     *
     * ```jsx
     * <Scroll dragEnabled={false} />
     * ```
     */
    dragEnabled?: boolean;
    /**
     * Enable or disable wheel scroll. Defaults to `true`.
     *
     * @public
     *
     * ```jsx
     * <Scroll wheelEnabled={false} />
     * ```
     */
    wheelEnabled?: boolean;
    /**
     * Horizontal offset of the scrollable content. Set to `0` by default
     *
     * @remarks
     * ```jsx
     * <Scroll contentOffsetX={20} />
     * ```
     */
    contentOffsetX?: MotionValue<number> | number;
    /**
     * Vertical offset of the scrollable content. Set to `0` by default.
     *
     * @remarks
     * ```jsx
     * <Scroll contentOffsetY={20} />
     * ```
     */
    contentOffsetY?: MotionValue<number> | number;
    /**
     * Width of the scrollable content.
     *
     * @remarks
     * ```jsx
     * <Scroll contentWidth={500} />
     * ```
     */
    contentWidth?: number;
    /**
     * Height of the scrollable content.
     *
     * @remarks
     * ```jsx
     * <Scroll contentHeight={500} />
     * ```
     */
    contentHeight?: number;
    /**
     * Add a custom control for the scroll animation.
     * @remarks
     * ```jsx
     * const controls = useAnimation()
     * controls.start({ y: -50 })
     * <Scroll scrollAnimate={controls} />
     * ```
     * @public
     * */
    scrollAnimate?: FrameProps["animate"];
    /**
     * Flag the scroll component to reset it's scroll offset when it becomes
     * visible in Framer.
     *
     * @remarks
     * ```jsx
     * <Scroll resetOffset={true} />
     * ```
     * @public
     * */
    resetOffset?: boolean;
    /**
     * Flag the scroll component to emulate device overdrag.
     *
     * @remarks
     * ```jsx
     * <Scroll overdragEnabled={false} />
     * ```
     * @public
     * */
    overdragEnabled?: boolean;


}

declare type ScrollDirection = "up" | "down";

/**
 * @public
 */
export declare interface ScrollEvents {
    /**
     * Called when scrolling starts.
     *
     * @remarks
     * ```jsx
     * function onScrollStart(info) {
     *   console.log(info.offset, info.velocity)
     * }
     *
     * <Scroll onScrollStart={onScrollStart} />
     * ```
     * @param info - An {@link PanInfo} object containing `x` and `y` values for:
     *
     *   - `point`: Relative to the device or page.
     *   - `delta`: Distance moved since the last event.
     *   - `offset`: Offset from the original pan event.
     *   - `velocity`: Current velocity of the pointer.
     * @public
     */
    onScrollStart?(info: PanInfo): void;
    /**
     * Called periodically during scrolling.
     *
     * @remarks
     * ```jsx
     * function onScroll(info) {
     *   console.log(info.offset, info.velocity)
     * }
     *
     * <Scroll onScroll={onScroll} />
     * ```
     * @param info - An {@link PanInfo} object containing `x` and `y` values for:
     *
     *   - `point`: Relative to the device or page.
     *   - `delta`: Distance moved since the last event.
     *   - `offset`: Offset from the original pan event.
     *   - `velocity`: Current velocity of the pointer.
     * @public
     */
    onScroll?(info: PanInfo): void;
    /**
     * Called when scrolling ends.
     *
     * @remarks
     * ```jsx
     * function onScrollEnd(info) {
     *   console.log(info.offset, info.velocity)
     * }
     *
     * <Scroll onScrollEnd={onScrollEnd} />
     * ```
     * @param info - An {@link PanInfo} object containing `x` and `y` values for:
     *
     *   - `point`: Relative to the device or page.
     *   - `delta`: Distance moved since the last event.
     *   - `offset`: Offset from the original pan event.
     *   - `velocity`: Current velocity of the pointer.
     * @public
     */
    onScrollEnd?(info: PanInfo): void;
}

/**
 * @public
 */
export declare type ScrollProps = EmulatedScrollProps | NativeScrollProps;

declare interface ScrollSectionRefControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.ScrollSectionRef;
}

/**
 * @deprecated Use {@link EnumControlDescription} instead, and enable displaySegmentedControl.
 * @public
 */
export declare interface SegmentedEnumControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.SegmentedEnum;
    defaultValue?: string;
    options: string[];
    optionTitles?: string[];
}

/** @public */
export declare interface Shadow {
    color: string;
    x: number;
    y: number;
    blur: number;
}

/** @public */
export declare const Shadow: {
    is: (shadow: any) => shadow is Shadow;
};

/**
 * @public
 */
declare interface SimpleGradient {
    start: string;
    end: string;
}

/**
 * @public
 */
export declare interface Size {
    width: number;
    height: number;
}

export declare const Size: {
    (width: number, height: number): Size;



    /**
     * @public
     */
    zero: Size;
    /**
     * Checks if the size has a zero width and zero height
     * @param size - size to check
     * @public
     */
    isZero(size: Size): boolean;

};

declare type SpringOptions = TensionFrictionSpringOptions | DampingDurationSpringOptions;

/**
 * @public
 * @deprecated The `Stack` component is being deprecated and will no longer be maintained in future releases. We recommend using flexbox instead for layout needs: {@link https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox}
 */
export declare const Stack: React_2.ForwardRefExoticComponent<Partial<StackProperties> & React_2.RefAttributes<HTMLElement | HTMLDivElement>>;

/**
 * @public
 */
export declare type StackAlignment = "start" | "center" | "end";

/**
 * @public
 */
export declare type StackDirection = "horizontal" | "vertical";

/**
 * @public
 */
export declare type StackDistribution = "start" | "center" | "end" | "space-between" | "space-around" | "space-evenly";

/**
 * The Stack component will automatically distribute its contents based on its
 * properties. The Stack component takes the same props as the {@link Frame} component
 * as well as a few additional interface defined below.
 *
 * @remarks
 * ```jsx
 * function MyComponent() {
 *   return (
 *     <Stack>
 *       <Frame />
 *       <Frame />
 *       <Frame />
 *     </Stack>
 *   )
 * }
 * ```
 * @public
 * @deprecated
 */
export declare interface StackProperties extends StackSpecificProps, FrameProps, WillChangeTransformProp {
    as?: keyof HTMLElementTagNameMap;
    children?: React_2.ReactNode;

    className?: string;
    useFlexboxGap?: boolean;
}

/**
 * @public
 */
export declare interface StackSpecificProps {
    /**
     * Defines the flow direction of the stack contents, either `"vertical"` or `"horizontal"`. Set
     * to `"vertical"` by default.
     *
     * @remarks
     * ```jsx
     * // Vertical
     * <Stack direction="vertical" />
     *
     * // Horizontal
     * <Stack direction="horizontal" />
     * ```
     */
    direction: StackDirection;
    /**
     * Defines the distribution of the stack contents. Set to `"space-around"` by default, which makes the contents spread evenly across the container.
     * @remarks
     *
     * - `"start"` — from the leading edge of the container.
     * - `"center"` — centered within the container.
     * - `"end"` — from the trailing edge of the container.
     * - `"space-between"` — spread evenly in the container.
     * - `"space-around"` — spread evenly with excess applied at the start / end.
     * - `"space-evenly"` — spread with equal padding between contents.
     *
     * ```jsx
     * // Default
     * <Stack distribution="space-around" />
     *
     * // Start
     * <Stack distribution="start" />
     *
     * // Center
     * <Stack distribution="center" />
     *
     * // End
     * <Stack distribution="end" />
     *
     * // Space Between
     * <Stack distribution="space-between" />
     *
     * // Space Around
     * <Stack distribution="space-around" />
     *
     * // Space Evenly
     * <Stack distribution="space-evenly" />
     * ```
     */
    distribution: StackDistribution;
    /**
     * Defines the distribution of the stack contents on the alternative axis to the direction. Can
     * be one of `"start"`, `"end",` or `"center"`. Set to `"center"` by default.
     *
     * @remarks
     * ```jsx
     * <Stack alignment="end" />
     * ```
     */
    alignment: StackAlignment;
    /**
     * The gap between items in the stack. Set to `10` by default.
     * @remarks
     * ```jsx
     * <Stack gap={120} />
     * ```
     */
    gap: number;
    /**
     * Padding to be applied to all sides of container. Set to `0` by default.
     * @remarks
     * To specify different padding for each side you can provide
     * individual `paddingTop`, `paddingLeft`, `paddingRight` and `paddingBottom` values.
     *
     * ```jsx
     * <Stack padding={20} />
     * ```
     */
    padding: number;
    /**
     * Flag to tell the Stack to ignore the `padding` prop and apply values per-side.
     *
     * @remarks
     *
     * ```jsx
     * <Stack paddingPerSide paddingLeft={20} paddingBottom={20} />
     * ```
     */
    paddingPerSide: boolean;
    /**
     * Value for the top padding of the container. Set to `0` by default.
     *
     * @remarks
     *
     * ```jsx
     * <Stack paddingTop={20} />
     * ```
     */
    paddingTop: number;
    /**
     * Value for the right padding of the container. Set to `0` by default.
     * @remarks
     *
     * ```jsx
     * <Stack paddingRight={20} />
     * ```
     */
    paddingRight: number;
    /**
     * Value for the left padding of the container. Set to `0` by default.
     *       @remarks
     *
     * ```jsx
     * <Stack paddingLeft={20} />
     * ```
     */
    paddingLeft: number;
    /**
     * Value for the bottom padding of the container. Set to `0` by default.
     * @remarks
     *
     * ```jsx
     * <Stack paddingBottom={20} />
     * ```
     */
    paddingBottom: number;
    /**
     * Value for wrapping items when they don't fit on the row / column.
     * @remarks
     *
     * ```jsx
     * <Stack wrap />
     * ```
     */
    wrap: boolean;


}

/** @public */
export declare interface StringControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.String;
    defaultValue?: string;
    placeholder?: string;
    obscured?: boolean;
    displayTextArea?: boolean;

}

declare interface StyleAppearEffectOptions {
    styleAppearEffectEnabled: boolean | undefined;
    threshold: number | undefined;
    animateOnce: boolean;
    /**
     * Because we are using framer-motion variants with an `initial` value to
     * allow us to avoid problems with static generation, we need to know what
     * the target opacity or rotate should be, since it may not always be 1, and can't be
     * read from the DOM. This is because the DOM will have already been written
     * with the above `opacity` value at mount.
     */
    targetOpacity: number | undefined;
    opacity: number | undefined;
    x: number | undefined;
    y: number | undefined;
    scale: number | undefined;
    transition: Transition | undefined;
    rotate: number | undefined;
    rotateX: number | undefined;
    rotateY: number | undefined;
    perspective: number | undefined;
    enter: Readonly<StyleEffect>;
    exit: Readonly<StyleEffect>;
    animate: Partial<Readonly<StyleEffect>>;
    targets?: EffectStyleScrollTarget[];
    scrollDirection?: EffectStyleScrollTarget;
}

declare interface StyleEffect extends Record<keyof FXValues, number> {
    transition?: Transition;
}

declare interface StyleTransformEffectOptions {
    styleTransformEffectEnabled: boolean | undefined;
    transformViewportThreshold: number | undefined;
    spring: SpringOptions_2;
    transformTrigger: "onScroll" | "onInView" | "onScrollTarget" | undefined;
    transformTargets: EffectStyleScrollTarget_2[] | undefined;
}

declare interface TensionFrictionSpringOptions {
    tension: number;
    friction: number;
    tolerance: number;
    velocity: number;
}

/** @public */
export declare interface TextColorProperties {
    color: Color | string;
}

declare type ToAnimatableOrValue<PossiblyAnimatable> = PossiblyAnimatable extends Animatable_2<infer Value> ? Value | Animatable_2<Value> : PossiblyAnimatable | Animatable_2<PossiblyAnimatable>;

/**
 * @public
 */
declare type TransactionId = number;

/** @public */
export declare function transformTemplate(center?: boolean | "x" | "y"): (_: any, generated: string) => string;

/** @public */
export declare interface TransitionControlDescription<P = any> extends BaseControlDescription<P> {
    type: ControlType.Transition;
    defaultValue?: null | Transition;
}

declare interface UnresolvedSlug {
    collectionId: string;
    collectionItemId: string;
}

/**
 * @public
 */
declare type UpdateFunction<Value> = (change: Change<Value> | undefined, transaction?: TransactionId) => void;

/**
 * @public
 */
declare interface UpdateObserver<Value> {
    onUpdate(handler: Observer<Value>): Cancel;
}

/**
 * Create callbacks that can be cancelled if the component is unmounted, the
 * active variant changes, or the component moves out of the target screen in a
 * Framer prototype.
 *
 * @public
 */
export declare function useActiveVariantCallback(baseVariant: string | undefined): {
    /**
     * Create a callback that can be cancelled if the base variant changes.
     */
    activeVariantCallback: (callback: (...args: any[]) => Promise<boolean | void>) => (...args: any[]) => Promise<unknown>;
    /**
     * Execute a callback after a defined period of time. The callback will not
     * be called if pending events are cancelled because the timeout will be
     * cancelled.
     */
    delay: (callback: () => void, msDelay: number) => Promise<void>;
};

/**
 * Returns combines React props from a hash map based on the active variants.
 *
 * @public
 */
export declare function useAddVariantProps(baseVariant: string | undefined, gestureVariant: string | undefined, variantProps: VariantProps): (id: string) => Record<string, unknown>;

export { useAnimatedState }

export declare function useConstant<T>(init: () => T): T;

export declare function useDynamicRefs<T>(): (key: string) => React_2.RefObject<T>;

/**
 * Register a callback to be executed when a gamepad button is pressed and the
 * registering component is in the current Framer navigation target. Optionally
 * provide a specific gamepad mapping, or flag the hook to operate on keyup.
 *
 *  @public
 */
export declare function useGamepad(input: string, callback: () => void, { mapping, on }?: {
    mapping?: string;
    on?: "keyup" | "keydown";
}): void;

export { useInvertedScale }

/**
 * Used to know if a code component is a child of the current screen.
 * This can be useful for resetting timers or interactions that need to trigger on every navigation.
 * @public
 */
export declare function useIsInCurrentNavigationTarget(): boolean;

/**
 * Returns a constant value based on whether the caller is mounted in a Framer
 * Canvas environment.
 *
 * @public
 */
export declare function useIsOnFramerCanvas(): boolean;

/**
 * @public
 * @returns The current locale code, which is a combination of the language and optional region,
 * e.g. "en-US".
 */
export declare function useLocaleCode(): string;

/**
 * @public
 * @returns The active locale, all of the available locales, and a way to change the active locale.
 */
export declare function useLocaleInfo(): LocaleInfo;

/**
 * @returns NavigationInterface {@link NavigationInterface}
 * @public
 */
export declare function useNavigation(): NavigationInterface;

/**
 * Makes the component re-render when `Data` changes
 * @returns `true` if observing succeeds (context is provided), `false` when it fails
 * @public
 */
export declare function useObserveData(): boolean;

/**
 * Executes a callback when the base variant changes. Events will not be
 * executed on the Framer canvas.
 *
 * @public
 */
export declare function useOnVariantChange(variant: string, callbackMap: CallbackMap): void;

/**
 * When managing hiding/showing overlays, we want to prevent accidental body
 * scrolling beneath the overlay. This hook decorates a normal React useState
 * hook with solving this problem.
 *
 * @public
 */
export declare function useOverlayState({ blockDocumentScrolling }?: {
    blockDocumentScrolling?: boolean;
}): readonly [boolean, (show: boolean) => void];

/** @public */
export declare const useProvidedWindow: () => (Window & typeof globalThis) | null | undefined;

/**
 * Handle stateful logic in Framer Canvas Components.
 *
 * @public
 */
export declare function useVariantState({ variant, defaultVariant: externalDefaultVariant, transitions: externalTransitions, enabledGestures: externalEnabledGestures, cycleOrder: externalCycleOrder, variantProps, variantClassNames, }: {
    defaultVariant: string;
    cycleOrder: string[];
    variant?: string;
    transitions?: Record<string, Partial<Transition>>;
    enabledGestures?: EnabledVariantGestures;
    variantProps?: VariantProps;
    variantClassNames?: Record<string, string>;
}): VariantState;

/**
 * @public
 */
declare type UtilsByCollectionId = Record<string, () => Promise<CollectionUtils | undefined>>;

declare interface VariantAppearEffectOptions {
    visibleVariantId: string | undefined;
    obscuredVariantId: string | undefined;
    threshold: number | undefined;
    animateOnce: boolean;
    variantAppearEffectEnabled: true | undefined;
    targets?: EffectVariantScrollTarget[];
    exitTarget?: boolean;
    scrollDirection?: EffectVariantScrollTarget;
}

declare type VariantNames = string[];

/**
 * Variant / Node Id / React Prop / Val
 *
 * @public
 */
declare type VariantProps = Record<string, Record<string, Record<string, unknown>>>;

declare interface VariantState {
    variants: VariantNames;
    baseVariant: string | undefined;
    gestureVariant: string | undefined;
    classNames: string;
    transition: Partial<Transition> | undefined;
    gestureHandlers: GestureHandlers;
    setVariant: (variant: string | typeof CycleVariantState) => void;
    setGestureState: (gestureState: GestureState) => void;
    addVariantProps?: (id: string) => Record<string, unknown>;
}

/**
 * @public
 */
export declare const version: string;

/**
 * @privateRemarks do no use separately from FrameProps
 * @public
 * */
export declare interface VisualProperties {
    /**
     * Defines whether or not the `Frame` is visible. Unlike `opacity`, this property cannot be animated. Set to `true` by default. Maps to CSS.
     * @remarks
     * ```jsx
     * <Frame visible={false} />
     * ```
     * @public
     */
    visible: boolean;
    /**
     * Set the opacity value, which allows you to make elements semi-transparent or entirely hidden. Useful for show-and-hide animations.
     * Set to `1` by default.
     * @remarks
     * ```jsx
     * <Frame opacity={0.5} />
     * ```
     * @public
     */
    opacity: number | MotionValue<number>;
    /**
     * Set the CSS border property, which accepts width, style and color.
     * Set to `"none"` by default.
     * @remarks
     * ```jsx
     * <Frame border="1px solid #09F" />
     * ```
     * @public
     */
    border: string | MotionValue<string>;
    /**
     * Set the CSS border-radius property, in pixels or percentages.
     * Set to `0` by default.
     * @remarks
     * ```jsx
     * // Radius with pixels
     * <Frame radius={10} />
     *
     * // Radius with percentages
     * <Frame radius="50%" />
     * ```
     * @public
     */
    radius: number | string | MotionValue<number | string>;
    /**
     * Set the CSS border-radius property, in pixels or percentages. Alias for `radius`
     * Set to `0` by default.
     * @remarks
     * ```jsx
     * // Radius with pixels
     * <Frame borderRadius={10} />
     *
     * // Radius with percentages
     * <Frame borderRadius="50%" />
     * ```
     * @public
     */
    borderRadius: number | string | MotionValue<number | string>;
    /**
     * Set the color for text elements inside of a `Frame`. By default, text within Frames will be rendered in black.
     * @remarks
     * ```jsx
     * <Frame color="#09F" />
     * ```
     * @public
     */
    color: string | MotionValue<string>;
    /**
     * Set the CSS overflow property. Set to `"visible"` by default.
     * @remarks
     * ```jsx
     * <Frame overflow="hidden" />
     * ```
     * @public
     */
    overflow: "visible" | "hidden" | "auto";
    /**
     * Set the CSS box-shadow property.
     * @remarks
     * ```jsx
     * <Frame shadow="10px 5px 5px black" />
     * ```
     * @public
     */
    shadow: string | MotionValue<string>;
    /**
     * Position the children of the frame in 3D space. Set to `false` by default.
     * @remarks
     * ```jsx
     * <Frame preserve3d={true} />
     * ```
     * @public
     */
    preserve3d: boolean;
    /**
     * Sets whether the back face is visible when turned towards the user. Set to `true` by default.
     * @remarks
     * ```jsx
     * <Frame backfaceVisible={true} />
     * ```
     * @public
     */
    backfaceVisible: boolean;
}

declare interface WillChangeTransformProp {
    willChangeTransform?: boolean;
}

/** @public */
export declare const WindowContext: React_2.Context<(Window & typeof globalThis) | null | undefined>;

/**
 * Render a React component with css that will be injected into the document's
 * head when the component is first rendered. The escapedCSS argument can either
 * be a string where each line is a css rule, or an array of css rule strings.
 *
 * @public
 */
export declare const withCSS: <T extends object>(Component: React_2.ComponentType<T>, escapedCSS: string | string[], componentSerializationId?: string) => React_2.ForwardRefExoticComponent<React_2.PropsWithoutRef<T> & React_2.RefAttributes<unknown>>;

declare interface WithEventsProperties extends WithPanHandlers, WithTapHandlers, WithMouseHandlers, WithMouseWheelHandler {
}

/**
 * @public
 */
export declare interface WithFractionOfFreeSpace {


}

export declare const withFX: <T extends FXProps>(Component: React_2.ComponentType<T>) => React_2.ForwardRefExoticComponent<React_2.PropsWithoutRef<T> & React_2.RefAttributes<HTMLElement>>;

/**
 * Smart Component instances are code-generated with immutable react property
 * keys. This ensures that renaming or reordering variables in Framer, doesn't
 * cause dependents of the Smart Component to provide incorrect values to the
 * new component.
 *
 * However, when a user adds a code override to a smart component, they expect
 * to be able to reference the props by their human readable name. To allow
 * that, this HOC can be wrapped around all of the override HOCs, and when
 * provided an object with ids that map to the human readable property, will
 * remap the props so that those human readable keys are used instead of the
 * immutable ids, and this remapped version of props can be consumed by all user
 * overrides.
 */
export declare function withMappedReactProps<T extends object>(Component: React_2.ComponentType<T>, info: Record<string, unknown>): (rawProps: T) => JSX_2.Element;

declare interface WithMouseHandlers {
    onMouseDown: EventHandler;
    onClick: EventHandler;
    onMouseUp: EventHandler;
    onMouseEnter: EventHandler;
    onMouseLeave: EventHandler;
}

declare interface WithMouseWheelHandler {
    onMouseWheelStart: EventHandler;
    onMouseWheel: EventHandler;
    onMouseWheelEnd: EventHandler;
}

/** @public */
export declare interface WithOpacity {
    opacity: number | Animatable_2<number>;
}

declare interface WithPanHandlers {
    onPanStart: EventHandler;
    onPan: EventHandler;
    onPanEnd: EventHandler;
}

/**
 * @public
 * @deprecated
 */
export declare const withParallaxTransform: <T extends Partial<Prefixed<ParallaxTransformOptions & StyleAppearEffectOptions & StyleTransformEffectOptions>> & Partial<MotionProps> & {
    __withFX?: boolean | undefined;
    __perspectiveFX?: boolean | undefined;
    __targetOpacity?: number | undefined;
    __smartComponentFX?: boolean | undefined;
} & Record<string, unknown>>(Component: ComponentType<T>) => ForwardRefExoticComponent<PropsWithoutRef<T> & RefAttributes<HTMLElement>>;

/**
 * @public
 * @deprecated
 */
export declare const withStyleAppearEffect: <T extends Partial<Prefixed<ParallaxTransformOptions & StyleAppearEffectOptions & StyleTransformEffectOptions>> & Partial<MotionProps> & {
    __withFX?: boolean | undefined;
    __perspectiveFX?: boolean | undefined;
    __targetOpacity?: number | undefined;
    __smartComponentFX?: boolean | undefined;
} & Record<string, unknown>>(Component: ComponentType<T>) => ForwardRefExoticComponent<PropsWithoutRef<T> & RefAttributes<HTMLElement>>;

declare interface WithTapHandlers {
    onTapStart: EventHandler;
    onTap: EventHandler;
    onTapEnd: EventHandler;
}

/**
 * @public
 */
export declare const withVariantAppearEffect: <T extends {
    variant?: string | undefined;
} & object>(Component: React_2.ComponentType<T>) => React_2.ForwardRefExoticComponent<React_2.PropsWithoutRef<Prefixed<VariantAppearEffectOptions> & T> & React_2.RefAttributes<HTMLElement>>;

/**
 * Allow motion elements inside of a Smart Component, which uses `animate`
 * inheritance to update visual variants, to perform presence animations without
 * breaking inheritance of the active variant for descendants.
 *
 * @deprecated - This component was used before we generally supported effects
 * in smart components, when we supported appear effects for relative overlays.
 * It is now no longer code-generated, and replaced with withFX. This does not
 * mean we can remove this code. Code generated by Framer may still import it.
 */
export declare const withVariantFX: <T extends MotionProps>(Component: React_2.ComponentType<T>) => React_2.ForwardRefExoticComponent<React_2.PropsWithoutRef<Props_3<T>> & React_2.RefAttributes<HTMLElement>>;




export { }
export declare const combinedCSSRules: string[]

export * from 'real-framer-motion'