export declare function createClient({ url }: { url: string }): Promise<{
    api: {
        plugins: {
            openapi: {
                get: (
                    options?:
                        | {
                              headers?: Record<string, unknown> | undefined
                              query?: Record<string, unknown> | undefined
                              fetch?: RequestInit | undefined
                          }
                        | undefined,
                ) => Promise<
                    import('spiceflow/client').SpiceflowClient.ClientResponse<{
                        [x: number]: any
                        200: any
                    }>
                >
            }
            rewritePlugin: {
                submitReview: {
                    post: (
                        body: {
                            stars: number
                            generationId: number
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200:
                                | {
                                      success: boolean
                                      error?: undefined
                                  }
                                | {
                                      success: boolean
                                      error: string
                                  }
                        }>
                    >
                }
                rephrase: {
                    post: (
                        body: {
                            url: string
                            oldText: import('./rewrite').FramerLayersTree
                            sourceHtml: string | null
                            projectName?: string | undefined
                            description?: string | null | undefined
                            pagePath?: string | undefined
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: AsyncGenerator<
                                | {
                                      type: 'chunk'
                                      partialItem: Partial<
                                          import('./xml').NewExtractedNode
                                      > | null
                                      completeObj:
                                          | import('type-fest/source/required-deep').RequiredObjectDeep<
                                                import('./xml').NewExtractedNode
                                            >
                                          | null
                                      fullItem: import('type-fest/source/required-deep').RequiredObjectDeep<
                                          import('./xml').NewExtractedNode
                                      >
                                      generationId?: undefined
                                  }
                                | {
                                      type: 'chunk'
                                      partialItem: Partial<
                                          import('./xml').NewExtractedNode
                                      > | null
                                      completeObj:
                                          | import('type-fest/source/required-deep').RequiredObjectDeep<
                                                import('./xml').NewExtractedNode
                                            >
                                          | null
                                      fullItem: undefined
                                      generationId?: undefined
                                  }
                                | {
                                      type: 'chunk'
                                      partialItem: Partial<
                                          import('./xml').NewExtractedNode
                                      > | null
                                      completeObj:
                                          | import('type-fest/source/required-deep').RequiredObjectDeep<
                                                import('./xml').NewExtractedNode
                                            >
                                          | null
                                      fullXml: string
                                      generationId?: undefined
                                  }
                                | {
                                      type: 'generation'
                                      generationId: any
                                  },
                                void,
                                unknown
                            >
                        }>
                    >
                }
                discardGeneration: {
                    post: (
                        body: {
                            id: number
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200:
                                | {
                                      error: string
                                      success?: undefined
                                  }
                                | {
                                      success: boolean
                                      error?: undefined
                                  }
                        }>
                    >
                }
                getCredits: {
                    post: (
                        body?: unknown,
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: import('./credits').RemainingCredits
                        }>
                    >
                }
                getWebsiteHtml: {
                    post: (
                        body: {
                            domain: string
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                html: string
                                extractedDescription: string
                            }
                        }>
                    >
                }
            }
            markdownPlugin: {
                health: {
                    get: (
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: string
                        }>
                    >
                }
                githubRepoList: {
                    post: (
                        body: {
                            githubAccountLogin: string
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                repos: {
                                    repo: string
                                    owner: string
                                    repoSlug: string
                                    private: boolean
                                    url: string
                                }[]
                            }
                        }>
                    >
                }
                syncsThisMonth: {
                    post: (
                        body: {
                            projectId?: string | undefined
                            projectName?: string | undefined
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: number
                        }>
                    >
                }
                subscriptions: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined
                        query: {
                            projectId?: string | undefined
                        }
                        fetch?: RequestInit | undefined
                    }) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                subs: ({
                                    status: import('db/.prisma/enums').SubscriptionStatus
                                    orgId: string
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    endsAt: Date | null
                                    email: string | null
                                    metadata:
                                        | import('@prisma/client/runtime/library').JsonValue
                                        | null
                                    provider: import('db/.prisma/enums').PaymentProvider
                                    pluginName:
                                        | import('db/.prisma/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null)[]
                                activeSub: {
                                    status: import('db/.prisma/enums').SubscriptionStatus
                                    orgId: string
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    endsAt: Date | null
                                    email: string | null
                                    metadata:
                                        | import('@prisma/client/runtime/library').JsonValue
                                        | null
                                    provider: import('db/.prisma/enums').PaymentProvider
                                    pluginName:
                                        | import('db/.prisma/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null
                                freeSyncs: number
                                manageSubUrl: string | undefined
                            }
                        }>
                    >
                }
                frontmatter: {
                    post: (
                        body: {
                            basePath: string
                            githubAccountLogin: string
                            owner: string
                            repo: string
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                frontMatter: {
                                    properties: Record<
                                        string,
                                        import('./spiceflow-github-sync-plugin').MarkdownPluginFrontMatterProperty
                                    >
                                    order: string[]
                                }
                            }
                        }>
                    >
                }
                syncGithub: {
                    post: (
                        body: {
                            basePath: string
                            projectId: string
                            projectName: string
                            githubAccountLogin: string
                            owner: string
                            repo: string
                            itemIds?: string[] | undefined
                            mapFieldsConfig?:
                                | import('framer-plugin').ManagedCollectionField[]
                                | undefined
                            onlyGetFrontmatter?: boolean | undefined
                            enablePartialUpdate?: boolean | undefined
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                files: {
                                    frontMatter: {
                                        [key: string]: any
                                    }
                                    id: string
                                    slug: string
                                    path: string
                                    pagePath: string
                                    title: any
                                    foundMdx: boolean | {}
                                    sha: string
                                    html?: string | undefined
                                }[]
                                toDelete: string[]
                                idsToDelete: string[]
                            }
                        }>
                    >
                }
                checkBasePath: {
                    post: (
                        body: {
                            basePath: string
                            githubAccountLogin: string
                            owner: string
                            repo: string
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                error: string
                                formattedBasePath: string
                            }
                        }>
                    >
                }
            }
            reactExportPlugin: {
                health: {
                    get: (
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: string
                        }>
                    >
                }
                project: ((params: { projectId: string | number }) => {
                    get: (
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                project: {
                                    orgId: string
                                    projectId: string
                                    fullFramerProjectId: string | null
                                    projectName: string | null
                                    framerUserId: string | null
                                    websiteUrl: string | null
                                    createdAt: Date
                                }
                                components: {
                                    url: string
                                    name: string
                                    projectId: string
                                    id: string
                                    componentIdentifier: string | null
                                }[]
                                framerWebPages: {
                                    path: string
                                    projectId: string
                                    webPageId: string
                                }[]
                                colorStyles: {
                                    name: string | null
                                    projectId: string
                                    id: string
                                    lightColor: string
                                    darkColor: string
                                }[]
                                locales: {
                                    name: string
                                    code: string
                                    id: string
                                    slug: string
                                }[]
                                breakpoints: {
                                    componentId: string
                                    variantId: string
                                    width: number
                                    breakpointName: string
                                }[]
                                componentInstances: {
                                    webPageId: string
                                    componentId: string
                                    pageOrdering: number
                                    nodeDepth: number
                                    controls: import('@prisma/client/runtime/library').JsonValue
                                }[]
                            }
                        }>
                    >
                    publish: {
                        post: (
                            body: {
                                components: {
                                    name: string
                                    url: string
                                    projectId: string
                                    id: string
                                    componentIdentifier: string | null
                                }[]
                            },
                            options?:
                                | {
                                      headers?:
                                          | Record<string, unknown>
                                          | undefined
                                      query?:
                                          | Record<string, unknown>
                                          | undefined
                                      fetch?: RequestInit | undefined
                                  }
                                | undefined,
                        ) => Promise<
                            import('spiceflow/client').SpiceflowClient.ClientResponse<{
                                200: string
                            }>
                        >
                    }
                    subscribe: {
                        get: (
                            options?:
                                | {
                                      headers?:
                                          | Record<string, unknown>
                                          | undefined
                                      query?:
                                          | Record<string, unknown>
                                          | undefined
                                      fetch?: RequestInit | undefined
                                  }
                                | undefined,
                        ) => Promise<
                            import('spiceflow/client').SpiceflowClient.ClientResponse<{
                                200: AsyncGenerator<
                                    | {
                                          type: 'change'
                                          components: import('db').ReactExportComponent[]
                                      }
                                    | {
                                          project: {
                                              orgId: string
                                              projectId: string
                                              fullFramerProjectId: string | null
                                              projectName: string | null
                                              framerUserId: string | null
                                              websiteUrl: string | null
                                              createdAt: Date
                                          }
                                          components: {
                                              url: string
                                              name: string
                                              projectId: string
                                              id: string
                                              componentIdentifier: string | null
                                          }[]
                                          framerWebPages: {
                                              path: string
                                              projectId: string
                                              webPageId: string
                                          }[]
                                          colorStyles: {
                                              name: string | null
                                              projectId: string
                                              id: string
                                              lightColor: string
                                              darkColor: string
                                          }[]
                                          locales: {
                                              name: string
                                              code: string
                                              id: string
                                              slug: string
                                          }[]
                                          breakpoints: {
                                              componentId: string
                                              variantId: string
                                              width: number
                                              breakpointName: string
                                          }[]
                                          componentInstances: {
                                              webPageId: string
                                              componentId: string
                                              pageOrdering: number
                                              nodeDepth: number
                                              controls: import('@prisma/client/runtime/library').JsonValue
                                          }[]
                                          type: 'project'
                                      },
                                    void,
                                    unknown
                                >
                            }>
                        >
                    }
                }) & {}
                subscriptions: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined
                        query: {
                            projectId: string
                            forSubscriptionUpgrade?: boolean | undefined
                        }
                        fetch?: RequestInit | undefined
                    }) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                freeComponents: number
                                subs: ({
                                    status: import('db/.prisma/enums').SubscriptionStatus
                                    orgId: string
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    endsAt: Date | null
                                    email: string | null
                                    metadata:
                                        | import('@prisma/client/runtime/library').JsonValue
                                        | null
                                    provider: import('db/.prisma/enums').PaymentProvider
                                    pluginName:
                                        | import('db/.prisma/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null)[]
                                activeSub: {
                                    status: import('db/.prisma/enums').SubscriptionStatus
                                    orgId: string
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    endsAt: Date | null
                                    email: string | null
                                    metadata:
                                        | import('@prisma/client/runtime/library').JsonValue
                                        | null
                                    provider: import('db/.prisma/enums').PaymentProvider
                                    pluginName:
                                        | import('db/.prisma/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null
                                manageSubUrl: string | undefined
                            }
                        }>
                    >
                }
                upsertProject: {
                    post: (
                        body: {
                            projectId: string
                            components: {
                                name: string
                                url: string
                                projectId: string
                                id: string
                                componentIdentifier: string | null
                            }[]
                            colorStyles: {
                                name: string | null
                                projectId: string
                                id: string
                                lightColor: string
                                darkColor: string
                            }[]
                            fullFramerProjectId?: string | undefined
                            projectName?: string | null | undefined
                            framerUserId?: string | undefined
                            websiteUrl?: string | undefined
                            pages?:
                                | {
                                      path: string
                                      projectId: string
                                      webPageId: string
                                  }[]
                                | undefined
                            locales?:
                                | {
                                      name: string
                                      code: string
                                      projectId: string
                                      id: string
                                      slug: string
                                  }[]
                                | undefined
                            breakpoints?:
                                | {
                                      projectId: string
                                      componentId: string
                                      variantId: string
                                      width: number
                                      breakpointName: string
                                  }[]
                                | undefined
                            componentInstances?:
                                | import('db/.prisma/models').ReactExportComponentInstanceUncheckedCreateInput[]
                                | undefined
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                projectId: string
                            }
                        }>
                    >
                }
            }
            llm: {
                health: {
                    get: (
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: string
                        }>
                    >
                }
                submitReview: {
                    post: (
                        body: {
                            stars: number
                            generationId: number
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200:
                                | {
                                      success: boolean
                                      error?: undefined
                                  }
                                | {
                                      success: boolean
                                      error: string
                                  }
                        }>
                    >
                }
                publish: {
                    post: (
                        body: {
                            randomId: string
                            callId: string
                            tree: import('./rewrite').FramerLayersTree
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: string
                        }>
                    >
                }
                getCredits: {
                    post: (
                        body?: unknown,
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: import('./credits').RemainingCredits
                        }>
                    >
                }
                generate: {
                    post: (
                        body: {
                            description: string
                            randomId: string
                            tree: import('./rewrite').FramerLayersTree
                            projectId?: string | undefined
                            projectName?: string | undefined
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: AsyncGenerator<
                                | {
                                      fullItem: import('type-fest/source/required-deep').RequiredObjectDeep<
                                          import('./xml').NewExtractedNode
                                      >
                                      type: 'fullItem'
                                      partialItem: undefined
                                      nodeId: string
                                  }
                                | {
                                      fullItem: undefined
                                      type: 'partialItem'
                                      partialItem: Partial<
                                          import('./xml').NewExtractedNode
                                      >
                                      nodeId: string
                                  }
                                | {
                                      url: string
                                      type: 'tool-call'
                                      id: string
                                      toolName: 'fetch' | 'duplicate' | 'delete'
                                      callId: string
                                      nodeIds: never[]
                                  }
                                | {
                                      nodeIds: string[]
                                      type: 'tool-call'
                                      id: string
                                      toolName: 'fetch' | 'duplicate' | 'delete'
                                      callId: string
                                  },
                                {
                                    fullXml: string
                                },
                                unknown
                            >
                        }>
                    >
                }
                subscriptions: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined
                        query: {
                            projectId: string
                        }
                        fetch?: RequestInit | undefined
                    }) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                subs: ({
                                    status: import('db/.prisma/enums').SubscriptionStatus
                                    orgId: string
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    endsAt: Date | null
                                    email: string | null
                                    metadata:
                                        | import('@prisma/client/runtime/library').JsonValue
                                        | null
                                    provider: import('db/.prisma/enums').PaymentProvider
                                    pluginName:
                                        | import('db/.prisma/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null)[]
                                activeSub: {
                                    status: import('db/.prisma/enums').SubscriptionStatus
                                    orgId: string
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    endsAt: Date | null
                                    email: string | null
                                    metadata:
                                        | import('@prisma/client/runtime/library').JsonValue
                                        | null
                                    provider: import('db/.prisma/enums').PaymentProvider
                                    pluginName:
                                        | import('db/.prisma/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null
                                manageSubUrl: string | undefined
                            }
                        }>
                    >
                }
            }
            angledScreen: {
                generationsForUser: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined
                        query: {
                            framerUserId: string
                        }
                        fetch?: RequestInit | undefined
                    }) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                generations: number
                                hasLicenseKey: boolean
                                maxFreeGenerations: number
                                shouldBuyLicense: boolean
                                framerUserId: string
                            }
                        }>
                    >
                }
                incrementGenerations: {
                    post: (
                        body: {
                            framerUserId: string
                            userName?: string | undefined
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {}
                        }>
                    >
                }
                activate: {
                    post: (
                        body: {
                            framerUserId: string
                            licenseKey: string
                            userName?: string | undefined
                        },
                        options?:
                            | {
                                  headers?: Record<string, unknown> | undefined
                                  query?: Record<string, unknown> | undefined
                                  fetch?: RequestInit | undefined
                              }
                            | undefined,
                    ) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200:
                                | {
                                      error: string
                                  }
                                | {
                                      error: null
                                  }
                        }>
                    >
                }
            }
            currentOrg: {
                post: (
                    body?: unknown,
                    options?:
                        | {
                              headers?: Record<string, unknown> | undefined
                              query?: Record<string, unknown> | undefined
                              fetch?: RequestInit | undefined
                          }
                        | undefined,
                ) => Promise<
                    import('spiceflow/client').SpiceflowClient.ClientResponse<{
                        200: {
                            orgId: string
                            email: string | null | undefined
                        }
                    }>
                >
            }
            getSessionForKey: {
                post: (
                    body: {
                        projectId?: string | undefined
                        key?: string | undefined
                    },
                    options?:
                        | {
                              headers?: Record<string, unknown> | undefined
                              query?: Record<string, unknown> | undefined
                              fetch?: RequestInit | undefined
                          }
                        | undefined,
                ) => Promise<
                    import('spiceflow/client').SpiceflowClient.ClientResponse<{
                        200:
                            | {
                                  error: string
                                  orgId?: undefined
                                  email?: undefined
                                  key?: undefined
                                  requestData?: undefined
                              }
                            | {
                                  orgId: string
                                  email: string
                                  key: string
                                  requestData:
                                      | string
                                      | number
                                      | true
                                      | import('db/kysely.types').JsonArray
                                      | import('db/kysely.types').JsonObject
                                  error?: undefined
                              }
                    }>
                >
            }
            health: {
                get: (
                    options?:
                        | {
                              headers?: Record<string, unknown> | undefined
                              query?: Record<string, unknown> | undefined
                              fetch?: RequestInit | undefined
                          }
                        | undefined,
                ) => Promise<
                    import('spiceflow/client').SpiceflowClient.ClientResponse<{
                        readonly 200: {
                            ok: boolean
                        }
                    }>
                >
            }
            'sse-test': {
                get: (
                    options?:
                        | {
                              headers?: Record<string, unknown> | undefined
                              query?: Record<string, unknown> | undefined
                              fetch?: RequestInit | undefined
                          }
                        | undefined,
                ) => Promise<
                    import('spiceflow/client').SpiceflowClient.ClientResponse<{
                        200: AsyncGenerator<
                            | 'hello'
                            | {
                                  ok: boolean
                              },
                            never,
                            unknown
                        >
                    }>
                >
            }
            errorExample: {
                get: (
                    options?:
                        | {
                              headers?: Record<string, unknown> | undefined
                              query?: Record<string, unknown> | undefined
                              fetch?: RequestInit | undefined
                          }
                        | undefined,
                ) => Promise<
                    import('spiceflow/client').SpiceflowClient.ClientResponse<{
                        readonly 200: {
                            ok: boolean
                        }
                    }>
                >
            }
        }
    }
}>
