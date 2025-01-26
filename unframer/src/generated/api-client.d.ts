export declare function createClient({ url }: {
    url: string;
}): Promise<{
    api: {
        plugins: {
            openapi: {
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
                    post: (body: {
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
                    post: (body: {
                        url: string;
                        oldText: import("./rewrite").OldTextTree;
                        sourceHtml: string | null;
                        description?: string | null | undefined;
                        pagePath?: string | undefined;
                        projectName?: string | undefined;
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
                            generationId: number;
                        }, void, unknown>;
                    }>>;
                };
                discardGeneration: {
                    post: (body: {
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
                    post: (body?: unknown, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: import("./credits").RemainingCredits;
                    }>>;
                };
                activateLicense: {
                    post: (body: {
                        licenseKey: string;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            valid: boolean;
                            credits: number;
                        };
                    }>>;
                };
                getWebsiteHtml: {
                    post: (body: {
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
                    post: (body: {
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
                    post: (body: {
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
                                orgId: string;
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                createdAt: Date;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null)[];
                            activeSub: {
                                orgId: string;
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                createdAt: Date;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
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
                    post: (body: {
                        basePath: string;
                        githubAccountLogin: string;
                        owner: string;
                        repo: string;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            frontMatter: {
                                properties: Record<string, import("./elysia-markdown-plugin").MarkdownPluginFrontMatterProperty>;
                                order: string[];
                            };
                        };
                    }>>;
                };
                syncGithub: {
                    post: (body: {
                        basePath: string;
                        projectId: string;
                        projectName: string;
                        githubAccountLogin: string;
                        owner: string;
                        repo: string;
                        itemIds?: string[] | undefined;
                        mapFieldsConfig?: import("framer-plugin").CollectionField[] | undefined;
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
                                sha: string | undefined;
                                html?: string | undefined;
                            }[];
                            toDelete: string[];
                            idsToDelete: string[];
                        };
                    }>>;
                };
                checkBasePath: {
                    post: (body: {
                        basePath: string;
                        githubAccountLogin: string;
                        owner: string;
                        repo: string;
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
                                orgId: string;
                                createdAt: Date;
                                projectId: string;
                                projectName: string | null;
                                fullFramerProjectId: string | null;
                                websiteUrl: string | null;
                            };
                            components: {
                                url: string;
                                id: string;
                                name: string;
                                projectId: string;
                                componentIdentifier: string | null;
                            }[];
                            framerWebPages: {
                                path: string;
                                projectId: string;
                                webPageId: string;
                            }[];
                            colorStyles: {
                                id: string;
                                name: string | null;
                                projectId: string;
                                lightColor: string;
                                darkColor: string;
                            }[];
                            locales: {
                                code: string;
                                id: string;
                                name: string;
                                slug: string;
                            }[];
                            breakpoints: {
                                variantId: string;
                                componentId: string;
                                width: number;
                                breakpointName: string;
                            }[];
                        };
                    }>>;
                    publish: {
                        post: (body: {
                            components: {
                                id: string;
                                name: string;
                                projectId: string;
                                url: string;
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
                                components: import("@prisma/client").ReactExportComponent[];
                            } | {
                                project: {
                                    orgId: string;
                                    createdAt: Date;
                                    projectId: string;
                                    projectName: string | null;
                                    fullFramerProjectId: string | null;
                                    websiteUrl: string | null;
                                };
                                components: {
                                    url: string;
                                    id: string;
                                    name: string;
                                    projectId: string;
                                    componentIdentifier: string | null;
                                }[];
                                framerWebPages: {
                                    path: string;
                                    projectId: string;
                                    webPageId: string;
                                }[];
                                colorStyles: {
                                    id: string;
                                    name: string | null;
                                    projectId: string;
                                    lightColor: string;
                                    darkColor: string;
                                }[];
                                locales: {
                                    code: string;
                                    id: string;
                                    name: string;
                                    slug: string;
                                }[];
                                breakpoints: {
                                    variantId: string;
                                    componentId: string;
                                    width: number;
                                    breakpointName: string;
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
                        };
                        fetch?: RequestInit | undefined;
                    }) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: {
                            freeComponents: number;
                            subs: ({
                                orgId: string;
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                createdAt: Date;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null)[];
                            activeSub: {
                                orgId: string;
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                createdAt: Date;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null;
                            manageSubUrl: string | undefined;
                        };
                    }>>;
                };
                upsertProject: {
                    post: (body: {
                        projectId: string;
                        components: {
                            id: string;
                            name: string;
                            projectId: string;
                            url: string;
                            componentIdentifier: string | null;
                        }[];
                        colorStyles: {
                            id: string;
                            name: string | null;
                            projectId: string;
                            lightColor: string;
                            darkColor: string;
                        }[];
                        breakpoints: {
                            variantId: string;
                            projectId: string;
                            componentId: string;
                            width: number;
                            breakpointName: string;
                        }[];
                        projectName?: string | null | undefined;
                        fullFramerProjectId?: string | undefined;
                        websiteUrl?: string | undefined;
                        pages?: {
                            path: string;
                            projectId: string;
                            webPageId: string;
                        }[] | undefined;
                        locales?: {
                            code: string;
                            id: string;
                            name: string;
                            projectId: string;
                            slug: string;
                        }[] | undefined;
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
                    post: (body: {
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
                    post: (body: {
                        randomId: string;
                        callId: string;
                        tree: import("./rewrite").OldTextTree;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: string;
                    }>>;
                };
                getCredits: {
                    post: (body?: unknown, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: import("./credits").RemainingCredits;
                    }>>;
                };
                generate: {
                    post: (body: {
                        randomId: string;
                        tree: import("./rewrite").OldTextTree;
                        description: string;
                        projectId?: string | undefined;
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
                            nodeIds: string[];
                            type: "tool-call";
                            id: string;
                            toolName: "duplicate" | "delete";
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
                                orgId: string;
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                createdAt: Date;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                customerId: string | null;
                                itemId: string | null;
                                quantity: number;
                                endsAt: Date | null;
                            } | null)[];
                            activeSub: {
                                orgId: string;
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                createdAt: Date;
                                orderId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                email: string | null;
                                subscriptionId: string;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
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
            currentOrg: {
                post: (body?: unknown, options?: {
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
                post: (body: {
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
//# sourceMappingURL=api-client.d.ts.map