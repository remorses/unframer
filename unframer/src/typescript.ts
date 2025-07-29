import { propCamelCaseJustLikeFramer } from './compat.js'
import { ControlDescription, ControlType, PropertyControls } from './framer.js'

export function componentCamelCase(str: string) {
    str = str?.replace(/\.jsx?$/, '')
    if (!str) {
        return 'FramerComponent'
    }
    // Take last part after slashes
    str = str.split('/').filter(Boolean).pop() || ''
    str = str.replace(/-([\w])/g, (g) => g[1].toUpperCase())
    str = str.replace(/_([a-z])/g, (g) => g[1].toUpperCase())
    str = str[0].toUpperCase() + str.slice(1)
    // If component name starts with a number, add prefix 'Framer'
    if (/^[0-9]/.test(str)) {
        str = 'Framer' + str
    }
    str = str + 'FramerComponent'
    return str
}

/**
 * Generates TypeDoc comments that will be injected into JSX files
 * instead of generating separate .d.ts files
 */
export function propControlsToTypedocComments({
    locales,
    componentImportedName,
    propertyControls,
    logger,
}: {
    propertyControls: PropertyControls
    componentImportedName: string
    locales?: Array<{ slug: string }>
    logger: any
}) {
    try {
        const types = Object.entries(
            propertyControls || ({} as PropertyControls),
        )
            .map(([key, value]) => {
                if (!value) {
                    return
                }

                const typescriptType = (value: ControlDescription<any>) => {
                    value.type
                    switch (value.type) {
                        case ControlType.Color:
                            return 'string'
                        case ControlType.Boolean:
                            return 'boolean'
                        case ControlType.Number:
                            return 'number'
                        case ControlType.String:
                            return 'string'
                        case ControlType.Enum: {
                            // @ts-expect-error
                            const options = value.optionTitles || value.options
                            return options.map((x) => `'${x}'`).join(' | ')
                        }
                        case ControlType.File:
                            return 'string'
                        case ControlType.Image:
                            return 'string'
                        case ControlType.ComponentInstance:
                            return 'React.ReactNode'
                        case ControlType.Array:
                            // @ts-expect-error
                            return `${typescriptType(value.control)}[]`
                        case ControlType.Object:
                            // @ts-expect-error
                            return `{${Object.entries(value.controls)
                                .map(([k, v]) => {
                                    // @ts-expect-error
                                    return `${k}: ${typescriptType(v)}`
                                })
                                .join(', ')}`
                        case ControlType.Date:
                            return 'string | Date'
                        case ControlType.Link:
                            return 'string'
                        case ControlType.ResponsiveImage:
                            return `{src: string, srcSet?: string, alt?: string}`
                        case ControlType.FusedNumber:
                            return 'number'
                        case ControlType.Transition:
                            return 'any'
                        case ControlType.EventHandler:
                            return 'Function'
                    }
                }
                let name = propCamelCaseJustLikeFramer(value.title || key || '')
                if (!name) {
                    return ''
                }
                return ` * ${name}?: ${typescriptType(value)} // ${value.title || name}`
            })
            .filter(Boolean)
            .join('\n')

        const componentName = componentImportedName

        const defaultPropsJsDoc = [
            ' * children?: React.ReactNode',
            ' * locale?: Locale',
            ' * style?: React.CSSProperties',
            ' * className?: string',
            ' * id?: string',
            ' * ref?: any',
            ' * width?: any',
            ' * height?: any',
            ' * layoutId?: string',
        ].join('\n')

        // Generate header comment with type definitions
        let headerComment = '/**\n'
        headerComment += ' * @typedef Locale\n'

        // Generate union type from locales if available
        const localeType = (() => {
            if (locales && Array.isArray(locales) && locales.length > 0) {
                return locales.map((locale) => `'${locale.slug}'`).join(' | ')
            }
            return 'string'
        })()

        headerComment += ` * ${localeType}\n`
        headerComment += ' */\n\n'
        headerComment += '/**\n'
        headerComment += ' * @typedef {{\n'
        headerComment += defaultPropsJsDoc

        if (types) {
            headerComment += '\n' + types
        }
        headerComment += `\n}} Props\n`
        headerComment += '\n */\n\n'
        headerComment += '/**\n'
        headerComment += ' * @type {import("unframer").UnframerBreakpoint}\n'
        headerComment += ' * Represents a responsive breakpoint for unframer.\n'
        headerComment += ' */\n\n'
        headerComment += '/**\n'
        headerComment += ' * @typedef VariantsMap\n'
        headerComment +=
            " * Partial record of UnframerBreakpoint to Props.variant, with a mandatory 'base' key.\n"
        headerComment +=
            " * { [key in UnframerBreakpoint]?: Props['variant'] } & { base: Props['variant'] }\n"
        headerComment += ' */'

        // Generate responsive comment
        const responsiveComment = `/**\n * Renders ${componentName} for all breakpoints with a variants map. Variant prop is inferred per breakpoint.\n * @function\n * @param {Omit<Props, 'variant'> & {variants?: VariantsMap}} props\n * @returns {any}\n */`

        // Generate default export comment - use inline function type instead of referencing undefined type
        const defaultExportComment = `/** @type {function(Props): any} */`

        return {
            headerComment,
            responsiveComment,
            defaultExportComment,
        }
    } catch (e: any) {
        logger.error(e.message)
        logger.error('cannot generate typedoc comments', e.stack)
        return {
            headerComment: '',
            responsiveComment: '',
            defaultExportComment: '',
        }
    }
}
