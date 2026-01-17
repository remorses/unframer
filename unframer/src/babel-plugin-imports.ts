import * as BabelTypes from '@babel/types'

import { PluginObj } from '@babel/core'
import type { ImportDeclaration, ImportSpecifier } from '@babel/types'
import BatchRenamer from './renamer.js'

export function babelPluginDeduplicateImports({
    types: t,
}: {
    types: typeof BabelTypes
}): PluginObj {
    const importAliasMap = new Map<
        string,
        Map<
            string,
            { consolidated: string; importName; path: ImportSpecifier; source }
        >
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
            ?.set(local, { consolidated, importName, path, source })
    }

    function getConsolidatedName({ source, importName, defaultOne }) {
        const allSpecifiers = [...importAliasMap.values()].flatMap((x) => [
            ...x.values(),
        ])
        const first = allSpecifiers.find((x) => {
            if (importName === 'default' || importName === 'namespace') {
                if (source !== x.source) {
                    return false
                }
            }
            return x.importName === importName
        })
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
                    // console.log(`renaming imports...`)
                    for (const [source, modMap] of importAliasMap) {
                        // rename import names to consolidated names
                        for (let [local, { consolidated, path: p }] of modMap) {
                            // logger.log(
                            //     `renaming ${local} to ${consolidated}...`,
                            // )
                        }
                    }

                    const map = new Map<string, string>(
                        [...importAliasMap.values()].flatMap((x) => {
                            return [...x.entries()]
                                .map(([prev, x]) => {
                                    if (prev === x.consolidated) {
                                        return
                                    }
                                    return [prev, x.consolidated]
                                })
                                .filter((x) => x !== undefined) as Array<
                                [string, string]
                            >
                        }),
                    )
                    // console.log([...map.entries()])
                    const renamer = new BatchRenamer(path.scope, map)
                    renamer.rename()

                    const importDecs = path.node.body.filter((node) =>
                        t.isImportDeclaration(node),
                    ) as ImportDeclaration[]

                    const definedImports = new Set<string>()
                    const later = [] as Function[]
                    // console.log(`removing duplicates...`)
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
                            let importKey = ''
                            if (
                                BabelTypes.isImportDefaultSpecifier(specifier)
                            ) {
                                importKey = source + 'default'
                            } else if (
                                BabelTypes.isImportNamespaceSpecifier(specifier)
                            ) {
                                importKey = source + 'namespace'
                            } else {
                                if (
                                    !BabelTypes.isIdentifier(specifier.imported)
                                ) {
                                    continue
                                }
                                importKey = specifier.imported.name
                            }

                            if (definedImports.has(importKey)) {
                                later.push(() => {
                                    // console.log(
                                    //     `removing ${importKey} from ${source}...`,
                                    // )

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
                            definedImports.add(importKey)
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

export function babelPluginRenameExports({
    map,
}: {
    map: Map<string, string>
}) {
    return {
        name: 'rename-exports',
        visitor: {
            ExportNamedDeclaration(path) {
                const { specifiers, declaration } = path.node
                // Handle export specifiers like: export { something as oldName }
                for (const specifier of specifiers) {
                    if (!BabelTypes.isExportSpecifier(specifier)) continue
                    const exported = specifier.exported
                    if (!BabelTypes.isIdentifier(exported)) continue
                    const oldName = exported.name
                    const newName = map.get(oldName)
                    if (newName) {
                        exported.name = newName
                    }
                }
                // Handle function declarations like: export function oldName1() {}
                if (BabelTypes.isFunctionDeclaration(declaration)) {
                    const oldName = declaration.id?.name
                    if (oldName) {
                        const newName = map.get(oldName)
                        if (newName && declaration?.id) {
                            declaration.id.name = newName
                        }
                    }
                }
            },
            ExportDefaultDeclaration(path) {
                const { declaration } = path.node
                if (BabelTypes.isIdentifier(declaration)) {
                    const oldName = declaration.name
                    const newName = map.get(oldName)
                    if (newName) {
                        declaration.name = newName
                    }
                }
            },
        },
    }
}
