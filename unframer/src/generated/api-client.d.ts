export declare function createClient({ url }: {
    url: string;
}): {
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
                        projectName?: string | undefined;
                        pagePath?: string | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: AsyncGenerator<{
                            partialItem: Partial<{
                                nodeId?: string | undefined;
                                reasoning?: string | undefined;
                                newContent?: string | undefined;
                            }>;
                            completeObj: undefined;
                            finalObject?: undefined;
                            type: "chunk";
                            generationId?: undefined;
                        } | {
                            completeObj: import("type-fest/source/required-deep").RequiredObjectDeep<{
                                nodeId?: string | undefined;
                                reasoning?: string | undefined;
                                newContent?: string | undefined;
                            }>;
                            finalObject: undefined;
                            partialItem?: undefined;
                            type: "chunk";
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
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null)[];
                            activeSub: {
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null;
                            freeSyncs: number;
                            manageSubUrl: string | undefined;
                        };
                    }>>;
                };
                frontmatter: {
                    post: (body: {
                        owner: string;
                        repo: string;
                        basePath: string;
                        githubAccountLogin: string;
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
                        projectId: string;
                        owner: string;
                        projectName: string;
                        repo: string;
                        basePath: string;
                        githubAccountLogin: string;
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
                        owner: string;
                        repo: string;
                        basePath: string;
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
                                orgId: string;
                                projectId: string;
                                projectName: string | null;
                                createdAt: Date;
                                fullFramerProjectId: string | null;
                            };
                            components: {
                                url: string;
                                name: string;
                                projectId: string;
                                id: string;
                                componentIdentifier: string | null;
                            }[];
                            framerWebPages: {
                                projectId: string;
                                path: string;
                                webPageId: string;
                            }[];
                            colorStyles: {
                                name: string | null;
                                projectId: string;
                                id: string;
                                lightColor: string;
                                darkColor: string;
                            }[];
                            locales: {
                                name: string;
                                id: string;
                                code: string;
                                slug: string;
                            }[];
                        };
                    }>>;
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
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null)[];
                            activeSub: {
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null;
                            manageSubUrl: string | undefined;
                        };
                    }>>;
                };
                upsertProject: {
                    post: (body: {
                        projectId: string;
                        components: {
                            name: string;
                            url: string;
                            projectId: string;
                            id: string;
                            componentIdentifier: string | null;
                        }[];
                        colorStyles: {
                            name: string | null;
                            projectId: string;
                            id: string;
                            lightColor: string;
                            darkColor: string;
                        }[];
                        projectName?: string | null | undefined;
                        fullFramerProjectId?: string | undefined;
                        pages?: {
                            projectId: string;
                            path: string;
                            webPageId: string;
                        }[] | undefined;
                        locales?: {
                            name: string;
                            projectId: string;
                            id: string;
                            code: string;
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
};
export declare const websiteApiClient: {
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
                        projectName?: string | undefined;
                        pagePath?: string | undefined;
                    }, options?: {
                        headers?: Record<string, unknown> | undefined;
                        query?: Record<string, unknown> | undefined;
                        fetch?: RequestInit | undefined;
                    } | undefined) => Promise<import("spiceflow/client").SpiceflowClient.ClientResponse<{
                        200: AsyncGenerator<{
                            partialItem: Partial<{
                                nodeId?: string | undefined;
                                reasoning?: string | undefined;
                                newContent?: string | undefined;
                            }>;
                            completeObj: undefined;
                            finalObject?: undefined;
                            type: "chunk";
                            generationId?: undefined;
                        } | {
                            completeObj: import("type-fest/source/required-deep").RequiredObjectDeep<{
                                nodeId?: string | undefined;
                                reasoning?: string | undefined;
                                newContent?: string | undefined;
                            }>;
                            finalObject: undefined;
                            partialItem?: undefined;
                            type: "chunk";
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
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null)[];
                            activeSub: {
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null;
                            freeSyncs: number;
                            manageSubUrl: string | undefined;
                        };
                    }>>;
                };
                frontmatter: {
                    post: (body: {
                        owner: string;
                        repo: string;
                        basePath: string;
                        githubAccountLogin: string;
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
                        projectId: string;
                        owner: string;
                        projectName: string;
                        repo: string;
                        basePath: string;
                        githubAccountLogin: string;
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
                        owner: string;
                        repo: string;
                        basePath: string;
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
                                orgId: string;
                                projectId: string;
                                projectName: string | null;
                                createdAt: Date;
                                fullFramerProjectId: string | null;
                            };
                            components: {
                                url: string;
                                name: string;
                                projectId: string;
                                id: string;
                                componentIdentifier: string | null;
                            }[];
                            framerWebPages: {
                                projectId: string;
                                path: string;
                                webPageId: string;
                            }[];
                            colorStyles: {
                                name: string | null;
                                projectId: string;
                                id: string;
                                lightColor: string;
                                darkColor: string;
                            }[];
                            locales: {
                                name: string;
                                id: string;
                                code: string;
                                slug: string;
                            }[];
                        };
                    }>>;
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
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null)[];
                            activeSub: {
                                status: import("@prisma/client").$Enums.SubscriptionStatus;
                                orgId: string;
                                email: string | null;
                                pluginName: import("@prisma/client").$Enums.PluginName;
                                metadata: import("@prisma/client/runtime/library").JsonValue | null;
                                provider: import("@prisma/client").$Enums.PaymentProvider;
                                createdAt: Date;
                                subscriptionId: string;
                                orderId: string | null;
                                itemId: string | null;
                                variantId: string;
                                productId: string;
                                variantName: string | null;
                                quantity: number;
                                endsAt: Date | null;
                                customerId: string | null;
                            } | null;
                            manageSubUrl: string | undefined;
                        };
                    }>>;
                };
                upsertProject: {
                    post: (body: {
                        projectId: string;
                        components: {
                            name: string;
                            url: string;
                            projectId: string;
                            id: string;
                            componentIdentifier: string | null;
                        }[];
                        colorStyles: {
                            name: string | null;
                            projectId: string;
                            id: string;
                            lightColor: string;
                            darkColor: string;
                        }[];
                        projectName?: string | null | undefined;
                        fullFramerProjectId?: string | undefined;
                        pages?: {
                            projectId: string;
                            path: string;
                            webPageId: string;
                        }[] | undefined;
                        locales?: {
                            name: string;
                            projectId: string;
                            id: string;
                            code: string;
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
};
//# sourceMappingURL=api-client.d.ts.map