export declare function createClient({
    url,
    headers: extraHeaders,
}: {
    url: string
    headers?: Record<string, string>
}): Promise<{
    api: {
        plugins: {
            [x: string]: {
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
                        request: {
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
                        request: {
                            oldText: import('plugin-mcp').FramerLayersTree
                            sourceHtml: string | null
                            url: string
                            description?: string | null | undefined
                            projectName?: string | undefined
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
                                          import('plugin-mcp').NewExtractedNode
                                      > | null
                                      completeObj:
                                          | import('type-fest/source/required-deep').RequiredObjectDeep<
                                                import('plugin-mcp').NewExtractedNode
                                            >
                                          | null
                                      fullItem: import('type-fest/source/required-deep').RequiredObjectDeep<
                                          import('plugin-mcp').NewExtractedNode
                                      >
                                      generationId?: undefined
                                  }
                                | {
                                      type: 'chunk'
                                      partialItem: Partial<
                                          import('plugin-mcp').NewExtractedNode
                                      > | null
                                      completeObj:
                                          | import('type-fest/source/required-deep').RequiredObjectDeep<
                                                import('plugin-mcp').NewExtractedNode
                                            >
                                          | null
                                      fullItem: undefined
                                      generationId?: undefined
                                  }
                                | {
                                      type: 'chunk'
                                      partialItem: Partial<
                                          import('plugin-mcp').NewExtractedNode
                                      > | null
                                      completeObj:
                                          | import('type-fest/source/required-deep').RequiredObjectDeep<
                                                import('plugin-mcp').NewExtractedNode
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
                        request: {
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
                        request?: unknown,
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
                        request: {
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
                        request: {
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
                        request: {
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
                                    orgId: string
                                    email: string | null
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    status: import('db/generated/enums').SubscriptionStatus
                                    endsAt: Date | null
                                    provider: import('db/generated/enums').PaymentProvider
                                    metadata:
                                        | import('@prisma/client/runtime/client').JsonValue
                                        | null
                                    pluginName:
                                        | import('db/generated/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null)[]
                                activeSub: {
                                    orgId: string
                                    email: string | null
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    status: import('db/generated/enums').SubscriptionStatus
                                    endsAt: Date | null
                                    provider: import('db/generated/enums').PaymentProvider
                                    metadata:
                                        | import('@prisma/client/runtime/client').JsonValue
                                        | null
                                    pluginName:
                                        | import('db/generated/enums').PluginName
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
                        request: {
                            owner: string
                            repo: string
                            basePath: string
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
                        request: {
                            owner: string
                            repo: string
                            basePath: string
                            githubAccountLogin: string
                            projectId: string
                            projectName: string
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
                        request: {
                            owner: string
                            repo: string
                            basePath: string
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
                                    projectName: string | null
                                    createdAt: Date
                                    fullFramerProjectId: string | null
                                    websiteUrl: string | null
                                    framerUserId: string | null
                                    pageBackgroundColor: string | null
                                    connectedGitHubRepoAt: Date | null
                                    connectedGitHubRepoName: string | null
                                    invitedGitHubRepoUsername: string | null
                                    lastGitHubSyncAt: Date | null
                                    creationReason: import('db/generated/enums').ReactExportCreationReason
                                }
                                components: {
                                    url: string
                                    name: string
                                    projectId: string
                                    id: string
                                    componentIdentifier: string | null
                                    componentType: import('db/generated/enums').ReactExportComponentType
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
                                    id: string
                                    slug: string
                                    code: string
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
                                    controls: import('@prisma/client/runtime/client').JsonValue
                                }[]
                            }
                        }>
                    >
                    publish: {
                        post: (
                            request: {
                                components: {
                                    name: string
                                    url: string
                                    projectId: string
                                    id: string
                                    componentIdentifier: string | null
                                    componentType: import('db/generated/enums').ReactExportComponentType
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
                                              projectName: string | null
                                              createdAt: Date
                                              fullFramerProjectId: string | null
                                              websiteUrl: string | null
                                              framerUserId: string | null
                                              pageBackgroundColor: string | null
                                              connectedGitHubRepoAt: Date | null
                                              connectedGitHubRepoName:
                                                  | string
                                                  | null
                                              invitedGitHubRepoUsername:
                                                  | string
                                                  | null
                                              lastGitHubSyncAt: Date | null
                                              creationReason: import('db/generated/enums').ReactExportCreationReason
                                          }
                                          components: {
                                              url: string
                                              name: string
                                              projectId: string
                                              id: string
                                              componentIdentifier: string | null
                                              componentType: import('db/generated/enums').ReactExportComponentType
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
                                              id: string
                                              slug: string
                                              code: string
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
                                              controls: import('@prisma/client/runtime/client').JsonValue
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
                            forSubscriptionUpgrade?:
                                | string
                                | boolean
                                | undefined
                        }
                        fetch?: RequestInit | undefined
                    }) => Promise<
                        import('spiceflow/client').SpiceflowClient.ClientResponse<{
                            200: {
                                freeComponents: number
                                subs: ({
                                    orgId: string
                                    email: string | null
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    status: import('db/generated/enums').SubscriptionStatus
                                    endsAt: Date | null
                                    provider: import('db/generated/enums').PaymentProvider
                                    metadata:
                                        | import('@prisma/client/runtime/client').JsonValue
                                        | null
                                    pluginName:
                                        | import('db/generated/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null)[]
                                activeSub: {
                                    orgId: string
                                    email: string | null
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    status: import('db/generated/enums').SubscriptionStatus
                                    endsAt: Date | null
                                    provider: import('db/generated/enums').PaymentProvider
                                    metadata:
                                        | import('@prisma/client/runtime/client').JsonValue
                                        | null
                                    pluginName:
                                        | import('db/generated/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null
                                manageSubUrl: string | undefined
                                subscriptionStatus:
                                    | import('db/generated/enums').SubscriptionStatus
                                    | undefined
                            }
                        }>
                    >
                }
                upsertUnframerRepoWithAI: {
                    post: (
                        request: {
                            secret: string
                            projectId: string
                            sendEmail?: boolean | undefined
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
                                      message: string
                                      success?: undefined
                                      result?: undefined
                                  }
                                | {
                                      success: boolean
                                      result: import('resend').CreateEmailResponse
                                      message?: undefined
                                  },
                                | Response
                                | {
                                      success: boolean
                                      error: string
                                      result?: undefined
                                  }
                                | {
                                      success: boolean
                                      error?: undefined
                                      result?: undefined
                                  }
                                | {
                                      success: boolean
                                      result: import('resend').CreateEmailResponse
                                      error?: undefined
                                  }
                                | undefined,
                                unknown
                            >
                        }>
                    >
                }
                upsertProject: {
                    post: (
                        request: {
                            components: {
                                name: string
                                url: string
                                projectId: string
                                id: string
                                componentIdentifier: string | null
                                componentType: import('db/generated/enums').ReactExportComponentType
                            }[]
                            projectId: string
                            colorStyles: {
                                name: string | null
                                projectId: string
                                id: string
                                lightColor: string
                                darkColor: string
                            }[]
                            breakpoints?:
                                | {
                                      projectId: string
                                      componentId: string
                                      variantId: string
                                      width: number
                                      breakpointName: string
                                  }[]
                                | undefined
                            pages?:
                                | {
                                      path: string
                                      projectId: string
                                      webPageId: string
                                  }[]
                                | undefined
                            fullFramerProjectId?: string | undefined
                            websiteUrl?: string | undefined
                            locales?:
                                | {
                                      name: string
                                      projectId: string
                                      id: string
                                      slug: string
                                      code: string
                                  }[]
                                | undefined
                            projectName?: string | null | undefined
                            framerUserId?: string | undefined
                            pageBackgroundColor?: string | undefined
                            componentInstances?:
                                | import('db').ReactExportComponentInstanceUncheckedCreateInput[]
                                | undefined
                            creationReason?:
                                | 'USER_REQUESTED'
                                | 'MCP_FIRST_OPEN'
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
                        request: {
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
                        request: {
                            randomId: string
                            callId: string
                            tree: import('plugin-mcp').FramerLayersTree
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
                        request?: unknown,
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
                        request: {
                            randomId: string
                            description: string
                            tree: import('plugin-mcp').FramerLayersTree
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
                                          import('plugin-mcp').NewExtractedNode
                                      >
                                      type: 'fullItem'
                                      partialItem: undefined
                                      nodeId: string
                                  }
                                | {
                                      fullItem: undefined
                                      type: 'partialItem'
                                      partialItem: Partial<
                                          import('plugin-mcp').NewExtractedNode
                                      >
                                      nodeId: string
                                  }
                                | {
                                      type: 'tool-call'
                                      id: string
                                      toolName: string
                                      callId: string
                                      nodeIds: never[]
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
                                    orgId: string
                                    email: string | null
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    status: import('db/generated/enums').SubscriptionStatus
                                    endsAt: Date | null
                                    provider: import('db/generated/enums').PaymentProvider
                                    metadata:
                                        | import('@prisma/client/runtime/client').JsonValue
                                        | null
                                    pluginName:
                                        | import('db/generated/enums').PluginName
                                        | null
                                    customerId: string | null
                                } | null)[]
                                activeSub: {
                                    orgId: string
                                    email: string | null
                                    createdAt: Date
                                    variantId: string
                                    subscriptionId: string
                                    orderId: string | null
                                    itemId: string | null
                                    productId: string
                                    variantName: string | null
                                    quantity: number
                                    status: import('db/generated/enums').SubscriptionStatus
                                    endsAt: Date | null
                                    provider: import('db/generated/enums').PaymentProvider
                                    metadata:
                                        | import('@prisma/client/runtime/client').JsonValue
                                        | null
                                    pluginName:
                                        | import('db/generated/enums').PluginName
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
                        request: {
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
                        request: {
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
                    request?: unknown,
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
                    request: {
                        key?: string | undefined
                        projectId?: string | undefined
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
            validateSession: {
                post: (
                    request: {
                        sessionId: string
                        framerUserId: string
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
                            valid: boolean
                            error?: string | undefined
                        }
                    }>
                >
            }
            mcp: {
                createSession: {
                    post: (
                        request: {
                            supabaseUserId: string
                            email?: string | undefined
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
                                sessionToken: string
                                framerUserId: string
                            }
                        }>
                    >
                }
                validateSession: {
                    post: (
                        request: {
                            sessionToken: string
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
                                framerUserId: string
                                userId: string | null
                                email: string
                            }
                        }>
                    >
                }
            }
        }
    }
}>
