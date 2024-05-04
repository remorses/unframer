import * as BabelTypes from '@babel/types'

import { PluginObj } from '@babel/core'
import { ImportDeclaration, ImportSpecifier, Identifier } from '@babel/types'

export function babelPluginDeduplicateImports({
    types: t,
}: {
    types: typeof BabelTypes
}): PluginObj {
    const importAliasMap = new Map<string, Map<string, string>>()

    function addImport(source: string, imported: string, local: string) {
        if (!importAliasMap.has(source)) {
            importAliasMap.set(source, new Map())
        }
        importAliasMap.get(source)?.set(imported, local)
    }

    function getLocalImportName(source: string, imported: string) {
        return importAliasMap.get(source)?.get(imported)
    }

    return {
        visitor: {
            ImportDeclaration(path) {
                const source = path.node.source.value
                path.node.specifiers.forEach((specifier) => {
                    if (
                        t.isImportSpecifier(specifier) &&
                        BabelTypes.isIdentifier(specifier.imported)
                    ) {
                        addImport(
                            source,
                            specifier.imported.name,
                            specifier.local.name,
                        )
                    } else if (
                        t.isImportDefaultSpecifier(specifier) ||
                        t.isImportNamespaceSpecifier(specifier)
                    ) {
                        addImport(source, 'default', specifier.local.name)
                    }
                })

                // Remove the current import declaration to later add the consolidated one
                path.remove()
            },
            Program: {
                exit(path) {
                    const consolidatedImports = new Map<
                        string,
                        ImportDeclaration
                    >()

                    importAliasMap.forEach((aliases, source) => {
                        const specifiers: ImportSpecifier[] = []
                        aliases.forEach((local, imported) => {
                            specifiers.push(
                                t.importSpecifier(
                                    t.identifier(local),
                                    t.identifier(imported),
                                ),
                            )
                        })
                        consolidatedImports.set(
                            source,
                            t.importDeclaration(
                                specifiers,
                                t.stringLiteral(source),
                            ),
                        )
                    })

                    consolidatedImports.forEach((importDeclaration) => {
                        path.unshiftContainer('body', importDeclaration)
                    })
                },
            },
            Identifier(path) {
                const name = path.node.name
                const binding = path.scope.getBinding(name)

                if (binding && t.isImportSpecifier(binding.path.node)) {
                    const source = (binding.path.parent as ImportDeclaration)
                        .source.value
                    const localName = getLocalImportName(source, name)

                    if (localName && localName !== name) {
                        path.node.name = localName
                    }
                }
            },
        },
    }
}
