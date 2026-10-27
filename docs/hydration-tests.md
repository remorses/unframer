---
title: Responsive hydration regression checks
description: Check SSR first paint, hydration and resizing in the three example apps.
---

# Responsive hydration

**Build sequentially.** Each app uses the same `unframer/dist` output.

```sh
pnpm --filter nextjs-app build
pnpm --filter astro-app build
pnpm --filter remix-app build
```

**Serve production builds** in separate terminals, from the repo root:

```sh
pnpm --filter nextjs-app exec next start --port 5544
pnpm --filter astro-app exec astro preview --port 4322
PORT=5546 pnpm --filter remix-app exec react-router-serve ./build/server/index.js
```

**Run the check** with a headless Playwriter session. Use the printed session ID:

```sh
playwriter session new --browser headless
playwriter -s <id> -f unframer/scripts/check-hydration.ts --timeout 120000
```

The script holds JavaScript requests until SSR and CSS are ready. It checks mobile,
tablet and desktop first paint, keeps the visible SSR navigation node through hydration,
samples painted navigation variants, hydrates Astro's lazy islands, and resizes across
every breakpoint edge. React recovery errors and uncaught page errors fail the check.
