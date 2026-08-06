---
title: Fixing the daily Framer download workflow
description: How to triage and fix the "Downlod Framer script" GitHub Actions workflow when it starts failing, including refreshing the FRAMER_SESSION cookie with playwriter and patching framer.js after Framer refactors its runtime.
---

# Fixing the daily Framer download workflow

The `Downlod Framer script` workflow runs every day at 12:30 UTC. It downloads the latest Framer runtime, patches it, commits the result as `New Framer Release`, and triggers `release.yml` to publish.

- Workflow file: `.github/workflows/download-framer.yml`
- Script: `unframer/scripts/download.ts`
- Runs: https://github.com/remorses/unframer/actions/workflows/download-framer.yml

When it goes red, there are only **two** possible causes. Triage tells them apart in seconds.

## Triage: auth or runtime change?

Read the failed run log and look for this line:

```
framer.js size is 1.96 Mb
```

| Log reaches `framer.js size is …`? | Cause | Fix |
|---|---|---|
| **no** | expired `FRAMER_SESSION` cookie | refresh the cookie, see below |
| **yes** | Framer refactored its runtime | patch `download.ts`, see below |

The size line is printed at the very end of `fixFramerCode()`, long after the session cookie is used. If you see it, authentication worked fine and the cookie is **not** your problem.

An expired cookie fails much earlier, with one of:

```
Error: Failed to fetch framer project: 401
Error: Failed to extract framer script src
```

<details>
<summary>Why this matters</summary>

In Aug 2026 the workflow was red for weeks with `TypeError: combinedCSSRules.map is not a function`. The obvious guess was an expired cookie. It was not: the cookie from Oct 2025 was still valid, and refreshing it changed nothing. The real cause was Framer wrapping `combinedCSSRules` in a `LazyProp` getter. Always triage before touching secrets.

</details>

## Refreshing the FRAMER_SESSION cookie

The cookie is just the `session` cookie on `.framer.com`, a plain UUID. Grab it from your logged-in Chrome with playwriter.

**1. Open framer.com in your browser**

```bash
playwriter session new
playwriter -s <id> -e 'state.page = context.pages().find((p) => p.url() === "about:blank") ?? (await context.newPage()); await state.page.goto("https://framer.com/projects/", { waitUntil: "domcontentloaded" }); console.log("URL:", state.page.url())'
```

If the URL redirects to a login page, log in in Chrome first and retry.

**2. Read the `session` cookie**

```bash
playwriter -s <id> -e 'const cdp = await getCDPSession({ page: state.page }); const { cookies } = await cdp.send("Network.getCookies", { urls: ["https://framer.com"] }); const s = cookies.find((c) => c.name === "session"); console.log(JSON.stringify({ value: s.value, expiresISO: new Date(s.expires * 1000).toISOString() }))'
```

Use `Network.getCookies` on the **page** CDP session. `Storage.getCookies` is a root-session command and fails through the playwriter relay.

**3. Verify it can reach the source project before swapping it in**

The cookie must belong to an account with access to the `unframer-source` Framer project. Check it resolves the runtime URL:

```bash
S=<the-uuid>
curl -s -H "cookie: session=$S;" \
  "https://framer.com/projects/unframer-source--XOxwdyyCrFEE9uKnKFPq-6gX7n" \
  | grep -oE 'library: "[^"]+"'
# library: "https://app.framerstatic.com/framer.VZC743RP.mjs"
```

No output means the cookie is wrong or the account lacks access. Do not update the secrets.

**4. Run the download locally with it**

```bash
cd unframer
FRAMER_SESSION=<the-uuid> pnpm download-framer
```

**5. Update both secret stores**

Keep GitHub Actions and Doppler in sync, they hold the same credential:

```bash
gh secret set FRAMER_SESSION --repo remorses/unframer --body '<the-uuid>'
doppler secrets set FRAMER_SESSION='<the-uuid>' --no-interactive   # run from the monorepo root
```

## Patching framer.js after a Framer refactor

`fixFramerCode()` in `unframer/scripts/download.ts` rewrites the bundled runtime. Framer ships a new bundle **every day** and regularly renames or restructures the exact code we patch.

Every patch goes through `replaceOrThrow()`, which throws when its pattern stops matching:

```ts
codeAfter = replaceOrThrow({
    code: codeAfter,
    find: /\(\) => import\(url/g,
    replace: '() => import(/* webpackIgnore: true */ /* @vite-ignore */ url',
    what: 'webpackIgnore/@vite-ignore comments on the lazy module dynamic import',
})
```

**Never** go back to a bare `.replace()`. A patch that silently stops matching does not fail the workflow; it ships a subtly broken `framer.js` that only blows up much later in someone's exported site.

### Fixing a thrown patch

The error names the pattern and what it was for. To see what Framer changed, download the raw bundle and read it. It is public, no cookie needed:

```bash
# the URL is printed in the log as [FETCH] https://app.framerstatic.com/framer.XXXXXXXX.mjs
curl -s -o /tmp/framer-new.mjs https://app.framerstatic.com/framer.XXXXXXXX.mjs
grep -n 'combinedCSSRules' /tmp/framer-new.mjs
```

Compare against the committed `unframer/src/framer.js` to see the old shape, then update the pattern.

Note the raw bundle is **pre-dprint**. `fixFramerCode()` patches the output *after* `dprint.format()`, which adds trailing commas (`combineCSSRules(false,)`). Write patterns loose enough to survive that, then verify against the real regenerated `src/framer.js`.

### Patch internals, never the declarations Framer reads

The `combinedCSSRules` patch is the cautionary example. Framer declares:

```js
var combinedCSSRules = /* @__PURE__ */ LazyProp(() => combineCSSRules(false));
```

and reads it back through the getter:

```js
function getCombinedCSSRules() {
  return RenderTarget.current() === RenderTarget.preview
    ? combinedCSSRulesForPreview.value : combinedCSSRules.value
}
```

Rewriting that declaration into a plain array makes `getCombinedCSSRules()` return `undefined` and **silently kills all CSS injection in every exported site**. So the script leaves the declaration alone and appends an aliased export instead:

```js
const unframerCombinedCSSRules = combinedCSSRules.value
export { unframerCombinedCSSRules as combinedCSSRules }
```

This keeps the public export a `string[]`, which is what `src/react.tsx`, `src/framer.d.ts`, and the `styles/framer.css` generation all expect.

## Verifying a fix end to end

```bash
cd unframer
doppler run -- pnpm download-framer          # regenerates src/framer.js + src/styles/framer.css

cd unframer                                   # the package folder
grep -c webpackIgnore src/framer.js           # must be 1
grep -n 'as combinedCSSRules' src/framer.js   # the aliased export must exist
head -c 200 src/styles/framer.css             # must be real css, not empty

pnpm build                                    # typechecks react.tsx against framer.d.ts
pnpm test --run

cd ../nextjs-app
pnpm framer-simplicity                        # full export against a real Framer project
```

Then check `git diff unframer/src/styles/framer.css`. Rules disappearing is normal when Framer drops legacy CSS, but a diff that empties the file means a patch went wrong.

## Known cosmetic issue

`extractFramerMotionVersion()` matches `this.version = '…'`, which Framer removed long ago. Changesets are therefore always named `<framerVersion>-.md` and say `framer-motion@` with nothing after it. Harmless, and unrelated to any workflow failure.
