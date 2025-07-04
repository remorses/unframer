import type * as BabelTypes from '@babel/types'
import type { PluginObj } from '@babel/core'

const noContainerTypes = new Set([
    'JSXElement',
    // 'StringLiteral',
    'NumericLiteral',
])

export function removeJsxExpressionContainer({
    types: t,
}: {
    types: typeof BabelTypes
}): PluginObj {
    const plugin: PluginObj = {
        name: 'remove-jsx-expression-container',
        visitor: {
            JSXExpressionContainer: {
                exit(path) {
                    const expr = path.node.expression
                    const parent = path.parentPath
                    const isChildren =
                        parent &&
                        parent.isJSXElement() &&
                        Array.isArray(parent.node?.children) &&
                        parent.node?.children?.includes(path.node)
                    if (!isChildren) {
                        return
                    }
                    if (t.isJSXElement(expr) || t.isJSXFragment(expr)) {
                        path.replaceWith(expr)
                    } else if (t.isArrayExpression(expr)) {
                        // Check if array contains only JSX elements/fragments
                        const allJsx = expr.elements.every(
                            (element) =>
                                element &&
                                (t.isJSXElement(element) ||
                                    t.isJSXFragment(element)),
                        )
                        if (allJsx && 'elements' in expr && expr.elements) {
                            try {
                                const fragment: BabelTypes.JSXFragment = {
                                    type: 'JSXFragment',
                                    openingFragment: {
                                        type: 'JSXOpeningFragment',
                                    },
                                    closingFragment: {
                                        type: 'JSXClosingFragment',
                                    },
                                    children: expr.elements.filter(
                                        isTruthy,
                                    ) as any,
                                }
                                path.replaceWith(fragment)
                            } catch (e) {
                                console.error(
                                    `cannot remove expression container for`,
                                    expr,
                                    e,
                                )
                            }
                        }
                    }
                },
            },
        },
    }
    return plugin
}

function isTruthy<T>(value: T): value is NonNullable<T> {
    return value != null
}

export function babelPluginJsxTransform({
    types: t,
}: {
    types: typeof BabelTypes
}) {
    const jsxFunctions = new Set<string>()

    return {
        name: 'jsx-transform',
        visitor: {
            ImportDeclaration(path) {
                const source = path.node.source.value

                // Track React JSX runtime imports
                if (
                    source === 'react/jsx-runtime' ||
                    source === 'react/jsx-dev-runtime'
                ) {
                    path.node.specifiers.forEach((specifier) => {
                        if (
                            t.isImportSpecifier(specifier) &&
                            t.isIdentifier(specifier.imported)
                        ) {
                            const importName = specifier.imported.name
                            const localName = specifier.local.name

                            // Track common JSX runtime functions
                            if (
                                importName === 'jsx' ||
                                importName === 'jsxs' ||
                                importName === 'Fragment'
                            ) {
                                jsxFunctions.add(localName)
                            }
                        }
                    })
                }

                // Track React imports that could be JSX functions
                if (source === 'react') {
                    path.node.specifiers.forEach((specifier) => {
                        if (
                            t.isImportSpecifier(specifier) &&
                            t.isIdentifier(specifier.imported)
                        ) {
                            const importName = specifier.imported.name
                            const localName = specifier.local.name

                            // Track createElement and other JSX-related functions
                            if (
                                importName === 'createElement' ||
                                importName === 'Fragment'
                            ) {
                                jsxFunctions.add(localName)
                            }
                        }
                    })
                }
            },
            CallExpression(path) {
                // Check if it's a JSX function call
                if (
                    !path.node.callee ||
                    !path.node.callee.name ||
                    !jsxFunctions.has(path.node.callee.name)
                ) {
                    return
                }

                // Remove /* @__PURE__ */ comments
                if (path.node.leadingComments) {
                    path.node.leadingComments =
                        path.node.leadingComments.filter(
                            (comment) => !comment.value.includes('@__PURE__'),
                        )
                }

                const [elementArg, propsArg] = path.node.arguments

                // Get the element type name
                let elementName = ''
                if (elementArg.type === 'MemberExpression') {
                    elementName = `${elementArg.object.name}.${elementArg.property.name}`
                } else if (elementArg.type === 'StringLiteral') {
                    elementName = elementArg.value
                } else if (elementArg.type === 'Identifier') {
                    if (!canRenderAsJsx(elementArg.name)) {
                        return
                    }
                    elementName = elementArg.name
                } else {
                    // Skip if we can't determine element name
                    return
                }

                // Convert to JSX element
                const jsxElement: BabelTypes.JSXElement = {
                    type: 'JSXElement',
                    openingElement: {
                        type: 'JSXOpeningElement',
                        name: {
                            type: 'JSXIdentifier',
                            name: elementName,
                        },
                        attributes: [],
                        selfClosing: !propsArg.properties?.find(
                            (p) => p.key?.name === 'children',
                        ),
                    },
                    closingElement: propsArg.properties?.find(
                        (p) => p.key?.name === 'children',
                    )
                        ? {
                              type: 'JSXClosingElement',
                              name: {
                                  type: 'JSXIdentifier',
                                  name: elementName,
                              },
                          }
                        : null,
                    children: [],
                }

                // Add attributes
                if (propsArg && propsArg.properties) {
                    propsArg.properties.forEach((prop) => {
                        if (prop.type === 'SpreadElement') {
                            jsxElement.openingElement.attributes.push({
                                type: 'JSXSpreadAttribute',
                                argument: prop.argument,
                            })
                        } else if (prop.key?.name === 'children') {
                            if (prop.value.type === 'ArrayExpression') {
                                jsxElement.children = prop.value.elements.map(
                                    (element) => {
                                        if (
                                            noContainerTypes.has(element.type)
                                        ) {
                                            return element
                                        }
                                        return {
                                            type: 'JSXExpressionContainer',
                                            expression: element,
                                        }
                                    },
                                )
                            } else {
                                if (noContainerTypes.has(prop.value.type)) {
                                    jsxElement.children = [prop.value]
                                } else {
                                    jsxElement.children = [
                                        {
                                            type: 'JSXExpressionContainer',
                                            expression: prop.value,
                                        },
                                    ]
                                }
                            }
                        } else {
                            let attrName = prop.key?.name
                            if (
                                !attrName &&
                                prop.key?.type === 'StringLiteral'
                            ) {
                                attrName = prop.key.value
                            }
                            if (!attrName) {
                                console.log(
                                    `no prop.key?.name for ${JSON.stringify(
                                        prop,
                                    )}`,
                                )
                                return
                            }

                            jsxElement.openingElement.attributes.push({
                                type: 'JSXAttribute',
                                name: {
                                    type: 'JSXIdentifier',
                                    name: attrName,
                                },
                                value: {
                                    type: 'JSXExpressionContainer',
                                    expression: prop.value,
                                },
                            })
                        }
                    })
                }

                path.replaceWith(jsxElement)
            },
        },
    }
}

function jsonStringifyWithMaps(map) {
    return JSON.stringify(
        [...map],
        (key, value) => (value instanceof Map ? [...value] : value),
        2,
    )
}

function canRenderAsJsx(name: string): boolean {
    // 1. Valid JS identifier?
    const isIdentifier = /^[$A-Za-z_][$\w]*$/.test(name)
    if (!isIdentifier) return false

    // 2. First char not lowercase letter?
    const first = name[0]
    return first.toUpperCase() === first
}
