export declare function createClient({ url }: {
    url: string;
}): Promise<{
    api: {
        plugins: {
            [x: string]: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                    [x: number]: any;
                    200: any;
                }>>;
            };
            rewritePlugin: {
                submitReview: {
                    post: (request: {
                        stars: number;
                        generationId: number;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            success: boolean;
                            error?: undefined;
                        } | {
                            success: boolean;
                            error: string;
                        };
                    }>>;
                };
                rephrase: {
                    post: (request: {
                        url: string;
                        oldText: import("./rewrite").FramerLayersTree;
                        sourceHtml: string | null;
                        description?: string | null | undefined;
                        projectName?: string | undefined;
                        pagePath?: string | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: AsyncGenerator<{
                            type: "chunk";
                            partialItem: Partial<import("./xml").NewExtractedNode> | null;
                            completeObj: import("type-fest/source/required-deep").RequiredObjectDeep<import("./xml").NewExtractedNode> | null;
                            fullItem: import("type-fest/source/required-deep").RequiredObjectDeep<import("./xml").NewExtractedNode>;
                            generationId?: undefined;
                        } | {
                            type: "chunk";
                            partialItem: Partial<import("./xml").NewExtractedNode> | null;
                            completeObj: import("type-fest/source/required-deep").RequiredObjectDeep<import("./xml").NewExtractedNode> | null;
                            fullItem: undefined;
                            generationId?: undefined;
                        } | {
                            type: "chunk";
                            partialItem: Partial<import("./xml").NewExtractedNode> | null;
                            completeObj: import("type-fest/source/required-deep").RequiredObjectDeep<import("./xml").NewExtractedNode> | null;
                            fullXml: string;
                            generationId?: undefined;
                        } | {
                            type: "generation";
                            generationId: any;
                        }, void, unknown>;
                    }>>;
                };
                discardGeneration: {
                    post: (request: {
                        id: number;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            error: string;
                            success?: undefined;
                        } | {
                            success: boolean;
                            error?: undefined;
                        };
                    }>>;
                };
                getCredits: {
                    post: (request?: unknown, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: import("./credits").RemainingCredits;
                    }>>;
                };
                getWebsiteHtml: {
                    post: (request: {
                        domain: string;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            html: string;
                            extractedDescription: string;
                        };
                    }>>;
                };
            };
            markdownPlugin: {
                health: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: string;
                    }>>;
                };
                githubRepoList: {
                    post: (request: {
                        githubAccountLogin: string;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            repos: {
                                repo: string;
                                owner: string;
                                repoSlug: string;
                                private: boolean;
                                url: string;
                            }[];
                        };
                    }>>;
                };
                syncsThisMonth: {
                    post: (request: {
                        projectId?: string | undefined;
                        projectName?: string | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: number;
                    }>>;
                };
                subscriptions: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            projectId?: string | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            subs: ({
                                createdAt: Date;
                                orgId: string;
                                status: import("db/.prisma/enums").SubscriptionStatus;
                                pluginName: import("db/.prisma/enums").PluginName | null;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("db/.prisma/enums").PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null)[];
                            activeSub: {
                                createdAt: Date;
                                orgId: string;
                                status: import("db/.prisma/enums").SubscriptionStatus;
                                pluginName: import("db/.prisma/enums").PluginName | null;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("db/.prisma/enums").PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null;
                            freeSyncs: number;
                            manageSubUrl: string | undefined;
                        };
                    }>>;
                };
                frontmatter: {
                    post: (request: {
                        basePath: string;
                        repo: string;
                        owner: string;
                        githubAccountLogin: string;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            frontMatter: {
                                properties: Record<string, import("./spiceflow-github-sync-plugin").MarkdownPluginFrontMatterProperty>;
                                order: string[];
                            };
                        };
                    }>>;
                };
                syncGithub: {
                    post: (request: {
                        projectId: string;
                        basePath: string;
                        projectName: string;
                        repo: string;
                        owner: string;
                        githubAccountLogin: string;
                        itemIds?: string[] | undefined;
                        mapFieldsConfig?: import("framer-plugin").ManagedCollectionField[] | undefined;
                        onlyGetFrontmatter?: boolean | undefined;
                        enablePartialUpdate?: boolean | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            files: {
                                frontMatter: {
                                    [key: string]: any;
                                };
                                id: string;
                                slug: string;
                                path: string;
                                pagePath: string;
                                title: any;
                                foundMdx: boolean | {};
                                sha: string;
                                html?: string | undefined;
                            }[];
                            toDelete: string[];
                            idsToDelete: string[];
                        };
                    }>>;
                };
                checkBasePath: {
                    post: (request: {
                        basePath: string;
                        repo: string;
                        owner: string;
                        githubAccountLogin: string;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            error: string;
                            formattedBasePath: string;
                        };
                    }>>;
                };
            };
            reactExportPlugin: {
                health: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: string;
                    }>>;
                };
                project: ((params: {
                    projectId: string | number;
                }) => {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            project: {
                                projectId: string;
                                pageBackgroundColor: string | null;
                                websiteUrl: string | null;
                                createdAt: Date;
                                orgId: string;
                                projectName: string | null;
                                fullFramerProjectId: string | null;
                                framerUserId: string | null;
                                connectedGitHubRepoName: string | null;
                                invitedGitHubRepoUsername: string | null;
                                connectedGitHubRepoAt: Date | null;
                                lastGitHubSyncAt: Date | null;
                            };
                            components: {
                                url: string;
                                projectId: string;
                                name: string;
                                id: string;
                                componentIdentifier: string | null;
                            }[];
                            framerWebPages: {
                                projectId: string;
                                path: string;
                                webPageId: string;
                            }[];
                            colorStyles: {
                                projectId: string;
                                name: string | null;
                                id: string;
                                lightColor: string;
                                darkColor: string;
                            }[];
                            locales: {
                                code: string;
                                name: string;
                                id: string;
                                slug: string;
                            }[];
                            breakpoints: {
                                width: number;
                                variantId: string;
                                componentId: string;
                                breakpointName: string;
                            }[];
                            componentInstances: {
                                controls: import("@prisma/client/runtime/library").JsonValue;
                                webPageId: string;
                                componentId: string;
                                pageOrdering: number;
                                nodeDepth: number;
                            }[];
                        };
                    }>>;
                    publish: {
                        post: (request: {
                            components: {
                                projectId: string;
                                url: string;
                                name: string;
                                id: string;
                                componentIdentifier: string | null;
                            }[];
                        }, options?: {
                            headers?: Record<string, unknown> | undefined;
                            query?: Record<string, unknown> | undefined;
                            fetch?: RequestInit | undefined;
                        } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                            200: string;
                        }>>;
                    };
                    subscribe: {
                        get: (options?: {
                            headers?: Record<string, unknown> | undefined;
                            query?: Record<string, unknown> | undefined;
                            fetch?: RequestInit | undefined;
                        } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                            200: AsyncGenerator<{
                                type: "change";
                                components: import("db").ReactExportComponent[];
                            } | {
                                project: {
                                    projectId: string;
                                    pageBackgroundColor: string | null;
                                    websiteUrl: string | null;
                                    createdAt: Date;
                                    orgId: string;
                                    projectName: string | null;
                                    fullFramerProjectId: string | null;
                                    framerUserId: string | null;
                                    connectedGitHubRepoName: string | null;
                                    invitedGitHubRepoUsername: string | null;
                                    connectedGitHubRepoAt: Date | null;
                                    lastGitHubSyncAt: Date | null;
                                };
                                components: {
                                    url: string;
                                    projectId: string;
                                    name: string;
                                    id: string;
                                    componentIdentifier: string | null;
                                }[];
                                framerWebPages: {
                                    projectId: string;
                                    path: string;
                                    webPageId: string;
                                }[];
                                colorStyles: {
                                    projectId: string;
                                    name: string | null;
                                    id: string;
                                    lightColor: string;
                                    darkColor: string;
                                }[];
                                locales: {
                                    code: string;
                                    name: string;
                                    id: string;
                                    slug: string;
                                }[];
                                breakpoints: {
                                    width: number;
                                    variantId: string;
                                    componentId: string;
                                    breakpointName: string;
                                }[];
                                componentInstances: {
                                    controls: import("@prisma/client/runtime/library").JsonValue;
                                    webPageId: string;
                                    componentId: string;
                                    pageOrdering: number;
                                    nodeDepth: number;
                                }[];
                                type: "project";
                            }, void, unknown>;
                        }>>;
                    };
                }) & {};
                subscriptions: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            projectId: string;
                            forSubscriptionUpgrade?: string | boolean | undefined;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            freeComponents: number;
                            subs: ({
                                createdAt: Date;
                                orgId: string;
                                status: import("db/.prisma/enums").SubscriptionStatus;
                                pluginName: import("db/.prisma/enums").PluginName | null;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("db/.prisma/enums").PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null)[];
                            activeSub: {
                                createdAt: Date;
                                orgId: string;
                                status: import("db/.prisma/enums").SubscriptionStatus;
                                pluginName: import("db/.prisma/enums").PluginName | null;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("db/.prisma/enums").PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null;
                            manageSubUrl: string | undefined;
                            subscriptionStatus: import("db/.prisma/enums").SubscriptionStatus | undefined;
                        };
                    }>>;
                };
                upsertUnframerRepoWithAI: {
                    post: (request: {
                        projectId: string;
                        secret: string;
                        sendEmail?: boolean | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: Response | {
                            success: boolean;
                        };
                    }>>;
                };
                upsertProject: {
                    post: (request: {
                        projectId: string;
                        components: {
                            projectId: string;
                            url: string;
                            name: string;
                            id: string;
                            componentIdentifier: string | null;
                        }[];
                        colorStyles: {
                            projectId: string;
                            name: string | null;
                            id: string;
                            lightColor: string;
                            darkColor: string;
                        }[];
                        pageBackgroundColor?: string | undefined;
                        websiteUrl?: string | undefined;
                        breakpoints?: {
                            projectId: string;
                            width: number;
                            variantId: string;
                            componentId: string;
                            breakpointName: string;
                        }[] | undefined;
                        projectName?: string | null | undefined;
                        fullFramerProjectId?: string | undefined;
                        framerUserId?: string | undefined;
                        pages?: {
                            projectId: string;
                            path: string;
                            webPageId: string;
                        }[] | undefined;
                        locales?: {
                            projectId: string;
                            code: string;
                            name: string;
                            id: string;
                            slug: string;
                        }[] | undefined;
                        componentInstances?: import("db/.prisma/models").ReactExportComponentInstanceUncheckedCreateInput[] | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            projectId: string;
                        };
                    }>>;
                };
            };
            llm: {
                health: {
                    get: (options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: string;
                    }>>;
                };
                submitReview: {
                    post: (request: {
                        stars: number;
                        generationId: number;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            success: boolean;
                            error?: undefined;
                        } | {
                            success: boolean;
                            error: string;
                        };
                    }>>;
                };
                publish: {
                    post: (request: {
                        randomId: string;
                        callId: string;
                        tree: import("./rewrite").FramerLayersTree;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: string;
                    }>>;
                };
                getCredits: {
                    post: (request?: unknown, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: import("./credits").RemainingCredits;
                    }>>;
                };
                generate: {
                    post: (request: {
                        description: string;
                        randomId: string;
                        tree: import("./rewrite").FramerLayersTree;
                        projectId?: string | undefined;
                        projectName?: string | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: AsyncGenerator<{
                            fullItem: import("type-fest/source/required-deep").RequiredObjectDeep<import("./xml").NewExtractedNode>;
                            type: "fullItem";
                            partialItem: undefined;
                            nodeId: string;
                        } | {
                            fullItem: undefined;
                            type: "partialItem";
                            partialItem: Partial<import("./xml").NewExtractedNode>;
                            nodeId: string;
                        } | {
                            url: string;
                            type: "tool-call";
                            id: string;
                            toolName: "delete" | "fetch" | "duplicate";
                            callId: string;
                            nodeIds: never[];
                        } | {
                            nodeIds: string[];
                            type: "tool-call";
                            id: string;
                            toolName: "delete" | "fetch" | "duplicate";
                            callId: string;
                        }, {
                            fullXml: string;
                        }, unknown>;
                    }>>;
                };
                subscriptions: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            projectId: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            subs: ({
                                createdAt: Date;
                                orgId: string;
                                status: import("db/.prisma/enums").SubscriptionStatus;
                                pluginName: import("db/.prisma/enums").PluginName | null;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("db/.prisma/enums").PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null)[];
                            activeSub: {
                                createdAt: Date;
                                orgId: string;
                                status: import("db/.prisma/enums").SubscriptionStatus;
                                pluginName: import("db/.prisma/enums").PluginName | null;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("db/.prisma/enums").PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null;
                            manageSubUrl: string | undefined;
                        };
                    }>>;
                };
            };
            angledScreen: {
                generationsForUser: {
                    get: (options: {
                        headers?: Record<string, unknown> | undefined;
                        query: {
                            framerUserId: string;
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            generations: number;
                            hasLicenseKey: boolean;
                            maxFreeGenerations: number;
                            shouldBuyLicense: boolean;
                            framerUserId: string;
                        };
                    }>>;
                };
                incrementGenerations: {
                    post: (request: {
                        framerUserId: string;
                        userName?: string | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {};
                    }>>;
                };
                activate: {
                    post: (request: {
                        framerUserId: string;
                        licenseKey: string;
                        userName?: string | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            error: string;
                        } | {
                            error: null;
                        };
                    }>>;
                };
            };
            currentOrg: {
                post: (request?: unknown, options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                    200: {
                        orgId: string;
                        email: string | null | undefined;
                    };
                }>>;
            };
            getSessionForKey: {
                post: (request: {
                    projectId?: string | undefined;
                    key?: string | undefined;
                }, options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                    200: {
                        error: string;
                        orgId?: undefined;
                        email?: undefined;
                        key?: undefined;
                        requestData?: undefined;
                    } | {
                        orgId: string;
                        email: string;
                        key: string;
                        requestData: string | number | true | import("db/kysely.types").JsonArray | import("db/kysely.types").JsonObject;
                        error?: undefined;
                    };
                }>>;
            };
            health: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                    readonly 200: {
                        ok: boolean;
                    };
                }>>;
            };
            "sse-test": {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                    200: AsyncGenerator<"hello" | {
                        ok: boolean;
                    }, never, unknown>;
                }>>;
            };
            errorExample: {
                get: (options?: {
                    headers?: Record<string, unknown> | undefined;
                    query?: Record<string, unknown> | undefined;
                    fetch?: RequestInit | undefined;
                } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                    readonly 200: {
                        ok: boolean;
                    };
                }>>;
            };
        };
    };
}>;
