import * as BabelTypes from '@babel/types'

import { PluginObj } from '@babel/core'
import { ImportDeclaration, ImportSpecifier, Identifier } from '@babel/types'

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
                        const modMap = importAliasMap.get(source)
                        const consolidatedName = importName
                        addImport({
                            source,
                            local: specifier.local.name,
                            importName,
                            consolidated: consolidatedName,
                            path,
                        })
                    } else if (
                        t.isImportDefaultSpecifier(specifier) ||
                        t.isImportNamespaceSpecifier(specifier)
                    ) {
                        const importName = 'default'
                        const modMap = importAliasMap.get(source)
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
                    for (const [source, modMap] of importAliasMap) {
                        // rename import names to consolidated names
                        for (let [local, { consolidated, path: p }] of modMap) {
                            path.scope.rename(local, consolidated)
                        }
                    }
                    const importDecs = path.node.body.filter((node) =>
                        t.isImportDeclaration(node),
                    ) as ImportDeclaration[]

                    const definedImports = new Set<string>()
                    for (let importDec of importDecs) {
                        const source = importDec.source.value

                        const specifiers = importDec.specifiers
                        for (let specifier of specifiers) {
                            if (
                                BabelTypes.isImportSpecifier(specifier) ||
                                BabelTypes.isImportDefaultSpecifier(specifier)
                            ) {
                                let importName = ''
                                if (BabelTypes.isImportSpecifier(specifier)) {
                                    if (
                                        !BabelTypes.isIdentifier(
                                            specifier.imported,
                                        )
                                    ) {
                                        continue
                                    }
                                    importName = specifier.imported.name
                                } else {
                                    importName = 'default'
                                }

                                const str = `${source} - ${importName}`

                                if (definedImports.has(str)) {
                                    console.log(
                                        `removing ${str} from ${source}...`,
                                    )

                                    importDec.specifiers =
                                        importDec.specifiers.filter(
                                            (x) => x !== specifier,
                                        )
                                    if (!importDec.specifiers.length) {
                                        path.node.body = path.node.body.filter(
                                            (x) => x !== importDec,
                                        )
                                    }
                                }
                                definedImports.add(str)
                            }
                        }
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
