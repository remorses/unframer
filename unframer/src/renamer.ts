// original https://github.com/babel/babel/blob/9c77558234c87b9220604fbc1519089e2d6334e2/packages/babel-traverse/src/scope/lib/renamer.ts#L61
import splitExportDeclaration from '@babel/helper-split-export-declaration'
import type { Scope } from '@babel/traverse'
import { visitors } from '@babel/traverse'
import { traverseNode } from '@babel/traverse/lib/traverse-node'

import * as t from '@babel/types'

import { NodePath, Visitor } from '@babel/core'
import type { Identifier } from '@babel/types'
import { logger } from './utils'

const renameVisitor: Visitor<BatchRenamer> = {
    ReferencedIdentifier({ node }, state) {
        for (let [oldName, newName] of state.map) {
            // console.log(node.name, oldName, newName)
            if (node.name === oldName) {
                node.name = newName
            }
        }
    },

    // Scope(path, state) {
    //     if (
    //         !path.scope.bindingIdentifierEquals(
    //             state.oldName,
    //             state.binding.identifier,
    //         )
    //     ) {
    //         path.skip()
    //         if (path.isMethod()) {
    //             requeueComputedKeyAndDecorators(path)
    //         }
    //     }
    // },

    ObjectProperty({ node, scope }, state) {
        const { name } = node.key as Identifier
        if (
            node.shorthand &&
            // In destructuring the identifier is already renamed by the
            // AssignmentExpression|Declaration|VariableDeclarator visitor,
            // while in object literals it's renamed later by the
            // ReferencedIdentifier visitor.
            // (name === state.oldName || name === state.newName) &&
            (state.map.has(name) || inverseMap(state.map).has(name)) &&
            // Ignore shadowed bindings
            [...state.map.keys()].some(
                (oldName) =>
                    state.scope.getBindingIdentifier(oldName) ===
                    scope.getBindingIdentifier(name),
            )
        ) {
            node.shorthand = false
            if (node.extra?.shorthand) node.extra.shorthand = false
        }
    },

    // @ts-ignore
    'AssignmentExpression|Declaration|VariableDeclarator'(
        path: NodePath<
            t.AssignmentPattern | t.Declaration | t.VariableDeclarator
        >,
        state,
    ) {
        if (path.isVariableDeclaration()) return
        const ids = path.getOuterBindingIdentifiers()

        for (const name in ids) {
            for (let [oldName, newName] of state.map) {
                // console.log(name, oldName, newName)
                if (name === oldName) ids[name].name = newName
            }
        }
    },
}

let cache = new WeakMap()
function inverseMap(map: Map<string, string>) {
    if (cache.has(map)) return cache.get(map)
    const inverse = new Map()
    for (let [key, value] of map) {
        inverse.set(value, key)
    }
    cache.set(map, inverse)
    return inverse
}

export default class BatchRenamer {
    constructor(scope: Scope, map: Map<string, string>) {
        this.map = map
        this.scope = scope
    }

    declare map: Map<string, string>

    declare scope: Scope

    maybeConvertFromExportDeclaration(parentDeclar: NodePath) {
        const maybeExportDeclar = parentDeclar.parentPath

        if (!maybeExportDeclar?.isExportDeclaration()) {
            return
        }

        if (maybeExportDeclar.isExportDefaultDeclaration()) {
            const { declaration } = maybeExportDeclar.node
            if (t.isDeclaration(declaration) && !declaration.id) {
                return
            }
        }

        if (maybeExportDeclar.isExportAllDeclaration()) {
            return
        }

        splitExportDeclaration(
            maybeExportDeclar as NodePath<
                Exclude<t.ExportDeclaration, t.ExportAllDeclaration>
            >,
        )
    }

    maybeConvertFromClassFunctionExpression(path: NodePath) {
        return path
    }

    rename(/* Babel 7 - block?: t.Pattern | t.Scopable */) {
        const { scope, map } = this

        for (let binding of [...map.keys()].map((name) =>
            scope.getBinding(name),
        )) {
            if (!binding) {
                continue
            }
            const path = binding!.path
            const parentDeclar = path.find(
                (path) =>
                    path.isDeclaration() ||
                    path.isFunctionExpression() ||
                    path.isClassExpression(),
            )
            if (parentDeclar) {
                const bindingIds = parentDeclar.getOuterBindingIdentifiers()
                const oldNames = Object.keys(bindingIds)
                for (let oldName of oldNames) {
                    const binding = scope.getBinding(oldName)
                    if (binding && bindingIds[oldName] === binding.identifier) {
                        // When we are renaming an exported identifier, we need to ensure that
                        // the exported binding keeps the old name.
                        this.maybeConvertFromExportDeclaration(parentDeclar)
                    }
                }
            }
        }

        traverseNode(
            scope.block,
            visitors.explode(renameVisitor),
            scope,
            this,
            scope.path,
            // When blockToTraverse is a SwitchStatement, the discriminant
            // is not part of the current scope and thus should be skipped.
            { discriminant: true },
        )

        for (let [oldName, newName] of map) {
            if (oldName === newName) continue

            if (!arguments[0]) {
                scope.removeOwnBinding(oldName)
                const binding = scope.getBinding(oldName)
                if (binding) {
                    binding.identifier.name = newName
                    scope.bindings[newName] = binding
                } else {
                    // logger.log(`binding not found for ${oldName}`)
                }
            }
        }
    }
}
