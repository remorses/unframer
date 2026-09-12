---
'unframer': patch
---

Fix the daily Framer runtime download, which had been failing since Framer started shipping its own `/* @vite-ignore */` comment on the lazy module dynamic import.

The patch that injects the bundler ignore comments matched on `() => import(url`. Framer now emits the comment itself, and the formatter then breaks the call over several lines, so the pattern stopped matching and the download aborted:

```
Error: Failed to patch framer.js: webpackIgnore/@vite-ignore comments on the
lazy module dynamic import. The pattern /\(\) => import\(url/g no longer
matches the Framer bundle, it probably got refactored upstream.
```

The shape in the bundle went from this:

```js
preloadLazyModule(hash, () => import(url), url)
```

to this:

```js
preloadLazyModule(hash, () =>
  import(
    /* @vite-ignore */
    url
  ), url)
```

The patch now matches the whole `import( <any comments> url )` call and rewrites it to a single line carrying both comments, so it survives Framer adding, removing, or reordering its own ignore comments:

```js
import(/* webpackIgnore: true */ /* @vite-ignore */ url)
```

`webpackIgnore` is still required, Framer only ships the Vite one. Without it webpack and Turbopack try to statically resolve a runtime url.
