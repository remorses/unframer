import { propCamelCaseJustLikeFramer } from './compat.js'
import { ControlDescription, ControlType, PropertyControls } from './framer.js'

export function componentCamelCase(str: string) {
    str = str?.replace(/\.jsx?$/, '')
    if (!str) {
        return 'FramerComponent'
    }
    // Use all path segments to avoid collisions like card/work-card vs cards/work-card
    const segments = str.split('/').filter(Boolean)

    // Replace all non-alphanumeric characters with space in each segment
    // This handles spaces, special chars, underscores, hyphens, etc.
    const words = segments
        .flatMap((segment) =>
            segment.replace(/[^a-zA-Z0-9]+/g, ' ').trim().split(/\s+/).filter(Boolean),
        )
    if (words.length === 0) {
        return 'FramerComponent'
    }

    let result = words
        .map((word) => {
            return word[0].toUpperCase() + word.slice(1)
        })
        .join('')

    // If component name starts with a number, add prefix 'Framer'
    if (/^[0-9]/.test(result)) {
        result = 'Framer' + result
    }

    result = result + 'FramerComponent'
    return result
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
    includeLocaleTypes = false,
}: {
    propertyControls: PropertyControls
    componentImportedName: string
    locales?: Array<{ slug: string }>
    logger: any
    includeLocaleTypes?: boolean
}) {
    try {
        const types = Object.entries(
            propertyControls || ({} as PropertyControls),
        )
            .map(([key, value]) => {
                if (!value) {
                    return
                }

                const typescriptType = (value: ControlDescription<any>): string => {
                    if (!value?.type) {
                        return 'any'
                    }
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
                            return `${typescriptType(value.control)}[]`
                        case ControlType.Object:
                            return `{${Object.entries(value.controls)
                                .map(([k, v]) => {
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
                        default:
                            return 'any'
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
            includeLocaleTypes ? ' * locale?: Locale' : null,
            ' * style?: React.CSSProperties',
            ' * className?: string',
            ' * id?: string',
            ' * ref?: any',
            ' * width?: any',
            ' * height?: any',
            ' * layoutId?: string',
        ]
            .filter(Boolean)
            .join('\n')

        // Generate header comment with type definitions
        let headerComment = ''

        if (includeLocaleTypes) {
            headerComment += '/**\n'
            headerComment += ' * @typedef Locale\n'

            // Generate union type from locales if available
            const localeType = (() => {
                if (locales && Array.isArray(locales) && locales.length > 0) {
                    return locales
                        .map((locale) => `'${locale.slug}'`)
                        .join(' | ')
                }
                return 'string'
            })()

            headerComment += ` * ${localeType}\n`
            headerComment += ' */\n\n'
        }

        headerComment += '/**\n'
        headerComment += ' * @typedef {{\n'
        headerComment += defaultPropsJsDoc

        if (types) {
            headerComment += '\n' + types
        }
        headerComment += `\n}} Props\n`
        headerComment += '\n */'

        // Generate responsive comment
        let responsiveComment = '/**\n'
        responsiveComment +=
            ' * @type {import("unframer").UnframerBreakpoint}\n'
        responsiveComment +=
            ' * Represents a responsive breakpoint for unframer.\n'
        responsiveComment += ' */\n\n'
        responsiveComment += '/**\n'
        responsiveComment += ' * @typedef VariantsMap\n'
        responsiveComment +=
            " * Partial record of UnframerBreakpoint to Props.variant, with a mandatory 'base' key.\n"
        responsiveComment +=
            " * { [key in UnframerBreakpoint]?: Props['variant'] } & { base: Props['variant'] }\n"
        responsiveComment += ' */\n\n'
        responsiveComment += `/**\n * Renders ${componentName} for all breakpoints with a variants map. Variant prop is inferred per breakpoint.\n * @function\n * @param {Omit<Props, 'variant'> & {variants?: VariantsMap}} props\n * @returns {any}\n */`

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
