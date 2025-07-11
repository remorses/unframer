// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 080b0b6d577bdc21 "Unframer Simplicity demo", do not edit manually */
"use client";

/**
 * @typedef Locale
 * string
 */

/**
 * @typedef {{
 * children?: React.ReactNode
 * locale?: Locale
 * style?: React.CSSProperties
 * className?: string
 * id?: string
 * ref?: any
 * width?: any
 * height?: any
 * layoutId?: string
 * variant?: 'Create in Seconds (Desktop)' | 'Organize with Ease (Desktop)' | 'Sync Across Devices (Desktop)' | 'Create in Seconds (Mobile)' | 'Organize with Ease (Mobile)' | 'Sync Across Devices (Mobile)' // Variant
}} Props

 */

/**
 * @type {import("unframer").UnframerBreakpoint}
 * Represents a responsive breakpoint for unframer.
 */

/**
 * @typedef VariantsMap
 * Partial record of UnframerBreakpoint to Props.variant, with a mandatory 'base' key.
 * { [key in UnframerBreakpoint]?: Props['variant'] } & { base: Props['variant'] }
 */
import { stdin_default } from "../chunks/chunk-W7Z4VVDG.js";
import "../chunks/chunk-H3WDA3QT.js";
import "../chunks/chunk-HHDHZ6TZ.js";
import "../chunks/chunk-SFTTTBUM.js";
import "../chunks/chunk-BPH5BCDR.js";
import { routes } from "../chunks/chunk-HEB6EHGG.js";

// virtual:sections/features-container
import { Fragment } from "react";
import { ContextProviders } from "unframer";
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
	base: "SZ4WQIvQT",
	xl: "G9YxcgYmG",
};
/** @type {function(Props): any} */
function ComponentWithRoot({ locale, ...rest }) {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"080b0b6d577bdc210bd0cd32f7edde6108e985399928f17be1208fac1508931c"
			}
			locale={locale}
			locales={locales}
		>
			{jsx(stdin_default, {
				...rest,
			})}
		</ContextProviders>
	);
}
/**
 * Renders FeaturesContainerFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
 * @function
 * @param {Omit<Props, 'variant'> & {variants?: VariantsMap}} props
 * @returns {any}
 */
ComponentWithRoot.Responsive = ({ locale, ...rest }) => {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"080b0b6d577bdc210bd0cd32f7edde6108e985399928f17be1208fac1508931c"
			}
			locale={locale}
			locales={locales}
		>
			<WithFramerBreakpoints
				Component={stdin_default}
				variants={defaultResponsiveVariants}
				{...rest}
			/>
		</ContextProviders>
	);
};
Object.assign(ComponentWithRoot, stdin_default);
var features_container_default = ComponentWithRoot;
export { features_container_default as default };
