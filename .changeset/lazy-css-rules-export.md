---
'unframer': patch
---

Fix the Framer runtime download, which had been broken since Framer wrapped `combinedCSSRules` in a lazy getter.

Framer changed the declaration from a plain array to a `LazyProp` object:

```js
// before
var combinedCSSRules = combineCSSRules(false)              // string[]
// after
var combinedCSSRules = LazyProp(() => combineCSSRules(false))  // { get value(): string[] }
```

Framer's own `getCombinedCSSRules()` reads `combinedCSSRules.value`, so the declaration is now left untouched and the resolved array is re-exported under the public name. The `combinedCSSRules` export stays a `string[]`, so nothing changes for consumers.

Also restores the `webpackIgnore` / `@vite-ignore` comments on the lazy module dynamic import. Framer refactored `initLazyModulesCache` from `const promise = import(url).then` to `preloadLazyModule(hash, () => import(url), url)`, which had silently stopped matching. Without those comments, Vite, webpack, and Turbopack try to statically resolve a runtime url.
