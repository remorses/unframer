---
'unframer': patch
---

Fix responsive component hydration in Next.js, Astro and Remix. Keep server-rendered
variants intact until React hydrates them, then let React remove inactive variants.
Existing breakpoint CSS shows the correct variant from first paint, without flashing
the wrong layout or forcing React to rebuild the server-rendered tree.

Fixes #53
