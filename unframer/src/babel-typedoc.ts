import type { PluginObj } from '@babel/core'
import type * as BabelTypes from '@babel/types'

/**
 * Babel plugin that injects typed-documentation (typedoc/JSDoc) comments into the
 * generated JSX files.
 *
 * The plugin receives, via its options, the comment blocks that must be added
 * and places them in three different locations:
 *
 *   1. `headerComment` – added **once** at the very top of the file, right after
 *      any `"use client"` / `"use strict"` (directive literals) that may be
 *      present.
 *   2. `responsiveComment` – added immediately **before** the statement that
 *      assigns to the `.Responsive` static member (i.e.
 *      `Component.Responsive = …`).
 *   3. `defaultExportComment` – added **before** the default export declaration
 *      so that the exported value bears the correct `@type` annotation.
 *
 * The actual _content_ of the comments is produced elsewhere
 * (in the logic that previously generated `.d.ts` files) and handed to this
 * plugin through its options, therefore the plugin only concerns itself with
 * finding the right AST nodes and attaching the supplied comments.
 *
 * Because this file lives in `src/`, it is written in ESM and must be imported
 * with the `.js` extension once transpiled.
 */

interface InjectTypedocOptions {
    /** Complete comment block, e.g. `/** … *\/`  */
    headerComment: string
    /** `/** … *\/` that documents the `.Responsive` member. Optional. */
    responsiveComment?: string
    /** `/** … *\/` for the default export. Optional. */
    defaultExportComment?: string
}

function toBlockComment(value: string): BabelTypes.CommentBlock {
    // Ensure we only keep the contents between /** and */
    const cleaned = value
        .trim()
        // drop beginning "/**" (with optional extra *) and any leading whitespace
        .replace(/^\/\*\*+/, '')
        // drop ending "*/"
        .replace(/\*\/$/, '')
    // We deliberately keep the leading '*' characters in each line so Babel
    // prints "/** … */" instead of "/* … */".
    // Add a leading asterisk if none exists to ensure JSDoc-style comments
    const withLeadingAsterisk = cleaned.startsWith('*')
        ? cleaned
        : '*' + cleaned
    return {
        type: 'CommentBlock',
        value: withLeadingAsterisk,
    }
}

export function babelPluginTypedoc(options: InjectTypedocOptions) {
    return function ({ types: t }: { types: typeof BabelTypes }): PluginObj {
        const { headerComment, responsiveComment, defaultExportComment } =
            options

        return {
            name: 'inject-typedoc-comments',
            visitor: {
                Program: {
                    enter(path) {
                        if (!headerComment) return

                        const comment = toBlockComment(headerComment)

                        const body = path.node.body
                        // Find the first non-directive statement. Directives are
                        // ExpressionStatements whose expression is a
                        // StringLiteral and which are placed at the top.
                        const firstNonDirective = body.find(
                            (stmt) =>
                                !(
                                    t.isExpressionStatement(stmt) &&
                                    t.isStringLiteral(stmt.expression)
                                ),
                        )

                        if (firstNonDirective) {
                            firstNonDirective.leadingComments = (
                                firstNonDirective.leadingComments || []
                            ).concat(comment)
                        } else if (body.length) {
                            // Fallback – attach to the very first node
                            body[0].leadingComments = (
                                body[0].leadingComments || []
                            ).concat(comment)
                        } else {
                            // Empty file (unlikely) – create an empty statement
                            const empty = t.emptyStatement()
                            empty.leadingComments = [comment]
                            body.push(empty)
                        }
                    },
                },

                ExpressionStatement(path) {
                    if (!responsiveComment) return
                    const expr = path.node.expression
                    if (
                        t.isAssignmentExpression(expr) &&
                        t.isMemberExpression(expr.left) &&
                        !expr.left.computed &&
                        t.isIdentifier(expr.left.property) &&
                        expr.left.property.name === 'Responsive'
                    ) {
                        path.node.leadingComments = (
                            path.node.leadingComments || []
                        ).concat(toBlockComment(responsiveComment))
                    }
                },

                FunctionDeclaration(path) {
                    if (!defaultExportComment) return
                    // Look for ComponentWithRoot function declaration
                    if (path.node.id?.name === 'ComponentWithRoot') {
                        path.node.leadingComments = (
                            path.node.leadingComments || []
                        ).concat(toBlockComment(defaultExportComment))
                    }
                },
            },
        }
    }
}
