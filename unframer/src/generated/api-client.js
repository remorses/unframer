export async function createClient({ url, headers: extraHeaders }) {
    const { createSpiceflowClient } = await import('spiceflow/client');
    const client = createSpiceflowClient(url, {
        // async fetch(input, requestInit) {
        //     const res = await fetch(input, requestInit)
        //     if (!res.ok) {
        //         throw new Error(await res.text())
        //     }
        //     return res
        // },
        // async onResponse(response) {
        //     if (!response.ok) {
        //         throw new Error(await response.text())
        //     }
        //     return response
        // },
        headers() {
            return {
                // Cookie: `sb-${supabaseRef}-auth-token=${encodeURIComponent(JSON.stringify(session))}`,
                ...extraHeaders,
            };
        },
    });
    return client;
}
// export const websiteApiClient = createClient({ url: process.env.PUBLIC_URL! })
