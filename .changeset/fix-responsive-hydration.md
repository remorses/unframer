---
'unframer': patch
---

Fix responsive component hydration in Next.js, Astro and Remix, and make it about 2x faster.

Each `.Responsive` component now renders a small inline script after its variants. The
script removes inactive variants while the HTML parses and records which breakpoint it
kept. React then hydrates only that variant, so the DOM matches and no error #418 is
thrown. Breakpoint CSS still shows the correct variant from first paint.

If a Content Security Policy blocks inline scripts, all variants hydrate and React
removes the inactive ones afterwards, with no hydration errors.

Fixes #53
