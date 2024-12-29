import { createSpiceflowClient } from 'spiceflow/client';
import { env } from 'website/src/lib/env';
export function createClient({ url }) {
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
            };
        },
    });
    return client;
}
export const websiteApiClient = createClient({ url: env.PUBLIC_URL });
//# sourceMappingURL=api-client.js.map