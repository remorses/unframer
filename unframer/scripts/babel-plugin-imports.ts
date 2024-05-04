import * as BabelTypes from '@babel/types'

import { PluginObj } from '@babel/core'
import { ImportDeclaration, ImportSpecifier, Identifier } from '@babel/types'
import BatchRenamer from './renamer'

export function babelPluginDeduplicateImports({
    types: t,
}: {
    types: typeof BabelTypes
}): PluginObj {
    const importAliasMap = new Map<
        string,
        Map<string, { consolidated: string; importName; path: ImportSpecifier }>
    >()

    function addImport({
        source,
        local,
        consolidated,
        importName,
        path,
    }: {
        source: string
        local: string
        consolidated: string
        importName: string
        path
    }) {
        if (!importAliasMap.has(source)) {
            importAliasMap.set(source, new Map())
        }
        importAliasMap
            .get(source)
            ?.set(local, { consolidated, importName, path })
    }

    function getConsolidatedName({ source, importName, defaultOne }) {
        const modMap = importAliasMap.get(source)
        if (!modMap) {
            return defaultOne
        }
        const first = [...modMap.values()].find(
            (x) => x.importName === importName,
        )
        return first?.consolidated || defaultOne
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
                        const importName = specifier.imported.name

                        const consolidatedName = importName
                        addImport({
                            source,
                            local: specifier.local.name,
                            importName,
                            consolidated: consolidatedName,
                            path,
                        })
                    } else if (t.isImportDefaultSpecifier(specifier)) {
                        const importName = 'default'

                        const consolidatedName = getConsolidatedName({
                            source,
                            importName,
                            defaultOne: specifier.local.name,
                        })
                        addImport({
                            source,
                            local: specifier.local.name,
                            importName,
                            consolidated: consolidatedName,
                            path,
                        })
                    } else if (t.isImportNamespaceSpecifier(specifier)) {
                        const importName = 'namespace'

                        const consolidatedName = getConsolidatedName({
                            source,
                            importName,
                            defaultOne: specifier.local.name,
                        })
                        addImport({
                            source,
                            local: specifier.local.name,
                            importName,
                            consolidated: consolidatedName,
                            path,
                        })
                    }
                })

                // Remove the current import declaration to later add the consolidated one
                // path.remove()
            },
            Program: {
                exit(path) {
                    console.log(`renaming imports...`)
                    for (const [source, modMap] of importAliasMap) {
                        // rename import names to consolidated names
                        for (let [local, { consolidated, path: p }] of modMap) {
                            console.log(
                                `renaming ${local} to ${consolidated}...`,
                            )
                        }
                    }

                    const map = new Map<string, string>(
                        Object.values(importAliasMap).map((x) => [
                            x.importName,
                            x.consolidated,
                        ]),
                    )
                    const renamer = new BatchRenamer(path.scope, map)
                    renamer.rename()

                    const importDecs = path.node.body.filter((node) =>
                        t.isImportDeclaration(node),
                    ) as ImportDeclaration[]

                    const definedImports = new Set<string>()
                    const later = [] as Function[]
                    console.log(`removing duplicates...`)
                    for (let importDec of importDecs) {
                        const source = importDec.source.value

                        const specifiers = importDec.specifiers
                        for (let specifier of specifiers) {
                            if (
                                !BabelTypes.isImportSpecifier(specifier) &&
                                !BabelTypes.isImportDefaultSpecifier(
                                    specifier,
                                ) &&
                                !BabelTypes.isImportNamespaceSpecifier(
                                    specifier,
                                )
                            ) {
                                continue
                            }
                            let importName = ''
                            if (
                                BabelTypes.isImportDefaultSpecifier(specifier)
                            ) {
                                importName = 'default'
                            } else if (
                                BabelTypes.isImportNamespaceSpecifier(specifier)
                            ) {
                                importName = 'namespace'
                            } else {
                                if (
                                    !BabelTypes.isIdentifier(specifier.imported)
                                ) {
                                    continue
                                }
                                importName = specifier.imported.name
                            }

                            if (definedImports.has(importName)) {
                                later.push(() => {
                                    console.log(
                                        `removing ${importName} from ${source}...`,
                                    )

                                    importDec.specifiers =
                                        importDec.specifiers.filter(
                                            (x) => x !== specifier,
                                        )
                                    if (!importDec.specifiers.length) {
                                        const index = path.node.body.findIndex(
                                            (x) => x === importDec,
                                        )
                                        path.node.body.splice(index, 1)
                                    }
                                })
                            }
                            definedImports.add(importName)
                        }
                    }
                    for (let fn of later) {
                        fn()
                    }
                },
            },
            // Identifier(path) {
            //     const name = path.node.name
            //     const binding = path.scope.getBinding(name)

            //     if (binding && t.isImportSpecifier(binding.path.node)) {
            //         const source = (binding.path.parent as ImportDeclaration)
            //             .source.value
            //         const localName = getLocalImportName(source, name)

            //         if (localName && localName !== name) {
            //             path.node.name = localName
            //         }
            //     }
            // },
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
