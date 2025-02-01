# unframer

## 2.19.0

### Minor Changes

- c4fed97: Add support for Astro client router, reset global Framer state on client navigations

### Patch Changes

- 12218a8: Update framer to 2.4.1, update framer motion to 11.11.7

## 2.18.5

### Patch Changes

- e6a05bb: Make unframer work with Node 18, fix --loader bugs

## 2.18.4

### Patch Changes

- 76cd8e6: Disable custom withCSS

## 2.18.3

### Patch Changes

- d32e80d: Fix SVG elements not showing up because of withCSS change

## 2.18.2

### Patch Changes

- f11be35: Update framer to 2.4.1, update framer motion to 11.11.7

## 2.18.1

### Patch Changes

- b7f1411: Update framer to 2.4.1, update framer motion to 11.11.7
- f715183: Add patch to make Framer navigator work with Node 22

## 2.18.0

### Minor Changes

- 4150d97: Add support for Astro client:visible, previously was not working because Responsive components rendered display: contents children

### Patch Changes

- 578cf67: Restore windows support for type generation

## 2.17.1

### Patch Changes

- 48aa28f: add node polyfill plugin

## 2.17.0

### Minor Changes

- 1c62916: Skip formatting outputs

### Patch Changes

- f5d58f1: Update framer to 2.4.1, update framer motion to 11.11.7

## 2.16.2

### Patch Changes

- b0e3932: Fix types generation in windows because of --loader abs path

## 2.16.1

### Patch Changes

- c3b66cc: Fix windows types generation

## 2.16.0

### Minor Changes

- 55ed540: Make variants prop in Responsive component optional, guess the variants breakpoints thanks to the plugin

## 2.15.1

### Patch Changes

- 3c954b6: Update framer to 2.4.1, update framer motion to 11.11.7
- 4416809: Fix types generation on windows, requires using file://

## 2.15.0

### Minor Changes

- 5fcb81e: Add .cursorrules file to ignore js fiels

### Patch Changes

- 7c13502: Update framer to 2.4.1, update framer motion to 11.11.7
- ad85276: Mark all esm.sh dependencies as externals to prevent duplicating react

## 2.14.0

### Minor Changes

- f71d9db: Added --external arg to externalize npm packages

## 2.13.0

### Minor Changes

- 84392a2: Add --unframer prefixed CSS variables, to be reused with Tawilwind

## 2.12.1

### Patch Changes

- d80361a: Update framer to 2.4.1, update framer motion to 11.11.7
- eaab0ce: Do not render a tags twice

## 2.12.0

### Minor Changes

- 9c26943: Make links work in Unframer, by overriding Framer Router component and context

### Patch Changes

- de3e355: Update framer to 2.4.1, update framer motion to 11.11.7

## 2.11.2

### Patch Changes

- 31a7eb0: Update framer to 2.4.1, update framer motion to 11.11.7
- a4eb747: Removed a log

## 2.11.1

### Patch Changes

- 524e5c4: update spiceflow dep

## 2.11.0

### Minor Changes

- c362e9f: Add --watch, to rebuild the files on Framer website publish changes, fix commonjs issues

## 2.10.2

### Patch Changes

- Updated dependencies [ef7eae5]
    - spiceflow@1.4.1

## 2.10.1

### Patch Changes

- Do not format files that are too big, fix hanging

## 2.10.0

### Minor Changes

- Add --debug option, increase esbuild reliability

## 2.9.2

### Patch Changes

- Update esbuild

## 2.9.1

### Patch Changes

- Fix breakpoint selection if not all breakpoints variants are defined

## 2.9.0

### Minor Changes

- 97890f3: - Wrap components with Framer root context, adds support for - fetch - form submission - internationalization via `locale` prop
    - Fix .dark class only valid if on root html. Now you can wrap with dark class on any parent element.

### Patch Changes

- 41e96d4: Update framer to 2.4.1, update framer motion to 11.11.7

## 2.8.0

### Minor Changes

- Handle Framer components with folders, create folders in the filesystem too

## 2.7.11

### Patch Changes

- add border box styling

## 2.7.10

### Patch Changes

- log project name

## 2.7.9

### Patch Changes

- Add react export in loader, handle react/js

## 2.7.8

### Patch Changes

- Resolve react and react dom in the loader, should work even if react is not installed

## 2.7.7

### Patch Changes

- Add support for relative links handling from Framer

## 2.7.6

### Patch Changes

- Fix props with spaces

## 2.7.5

### Patch Changes

- Fix missing .js for node, fix gen even if unframer is not installed

## 2.7.4

### Patch Changes

- Fix types gen even if unframer is not installed

## 2.7.3

### Patch Changes

- Fix node path

## 2.7.2

### Patch Changes

- Add timeout for types extraction

## 2.7.1

### Patch Changes

- c2893b0: much better readme
- Nicer logs

## 2.7.0

### Minor Changes

- Added support for Framer plugin to get the components instead of the json config.

## 2.6.6

### Patch Changes

- 9f6f501: Update framer to 2.4.1, update framer motion to 11.11.7

## 2.6.5

### Patch Changes

- 8aa502c: Update framer to 2.4.1, update framer motion to 11.10.0
- 8d88cb3: Update framer to 2.4.1, update framer motion to 11.11.7
- e47cb83: Update framer to 2.4.1, update framer motion to 11.3.23
- 731c490: Update framer to 2.4.1, update framer motion to 11.3.28
- d303a7f: Update framer to 2.4.1, update framer motion to 11.3.29
- d565496: Update framer to 2.4.1, update framer motion to 11.3.31

## 2.6.4

### Patch Changes

- 3534216: Update framer to 2.4.1, update framer motion to 11.3.23

## 2.6.3

### Patch Changes

- 1bbb850: Update framer to 2.4.1, update framer motion to 11.2.13
- 14a39e7: Update framer to 2.4.1, update framer motion to 11.3.9

## 2.6.2

### Patch Changes

- 8710e3b: Update framer to 2.4.1, update framer motion to 11.2.12
- 5ea52e2: Update framer to 2.4.1, update framer motion to 11.2.13
- Add @ts-nocheck

## 2.6.1

### Patch Changes

- 24b07af: Update framer to 2.4.1, update framer motion to 11.2.10
- e0b0902: Remove pure comments, not supported by rollup

## 2.6.0

### Minor Changes

- Add @vite-ignore comments where there are webpack ignore comments

### Patch Changes

- 0be4ff2: Update framer to 2.4.1, update framer motion to 11.2.10

## 2.5.3

### Patch Changes

- 567edd4: Update framer to 2.4.1, update framer motion to 11.2.10

## 2.5.2

### Patch Changes

- Only add style tags to head if in body

## 2.5.1

### Patch Changes

- 2bd75f7: Update framer to 2.4.1, update framer motion to 11.2.6
- Fix styles injection, Framer now assumes react is 19 so it no longer does it but leaves react to do it

## 2.5.0

### Minor Changes

- Add --version

## 2.4.0

### Minor Changes

- 06c47a8: Use unframer.config.json instead of unframer.json because bundlers sometimes try to import from unframer.json when you do import x from 'unframer'

### Patch Changes

- bc29d8e: Update framer to 2.4.1, update framer motion to 11.0.11-sync.5
- 537db6e: Update framer to 2.4.1, update framer motion to 11.1.9

## 2.3.0

### Minor Changes

- Support custom breakpoints

### Patch Changes

- d263c49: Update framer to 2.4.1, update framer motion to 11.0.11-sync.5
- bff8fb4: Update framer to 2.4.1, update framer motion to 11.1.7

## 2.2.2

### Patch Changes

- 5b8f7f5: Update framer to 2.4.1, update framer motion to 11.0.11-sync.5
- "sideEffects": false

## 2.2.1

### Patch Changes

- 6f5b4ab: Use file urls for import, should work on Windows

## 2.2.0

### Minor Changes

- Use the current Node.js path to extract component types

### Patch Changes

- 994d53d: Fix unframer when running in Windows, fix #12

## 2.1.0

### Minor Changes

- dd49b57: disable eslint for framer generated files
- c09dc3c: styles.css is deterministic

## 2.0.2

### Patch Changes

- 875c212: Update framer to 2.4.1, update framer motion to 11.0.11-sync.5
- c693f54: Add package.json export

## 2.0.1

### Patch Changes

- 23c8d91: Update framer to 2.4.1, update framer motion to 11.0.11-sync.5

## 2.0.0

### Major Changes

- Added commonjs support, remove ./dist exports from package.json

### Patch Changes

- 895255a: Update framer to 2.4.1, update framer motion to 11.0.11-sync.2

## 1.7.1

### Patch Changes

- Remove native deps from react export

## 1.7.0

### Minor Changes

- 6cecaa5: Show where each font comes from in the styles

## 1.6.0

### Minor Changes

- Generate styles.css file with all the necessary styles and fonts

### Patch Changes

- abc122e: Update framer to 2.4.1, update framer motion to 11.0.11-sync.2

## 1.5.0

### Minor Changes

- give names to framer components

## 1.4.0

### Minor Changes

- tell user if there are broken Framer links

## 1.3.0

### Minor Changes

- Output the tokens css with comments

## 1.2.2

### Patch Changes

- extract component types only after i have written the files on disk

## 1.2.1

### Patch Changes

- Support comments in config file

## 1.2.0

### Minor Changes

- Added init command

### Patch Changes

- e2d334a: Update framer to 2.4.1, update framer motion to 11.0.11-sync.2

## 1.1.2

### Patch Changes

- 3301e77: Update framer to 2.4.1, update framer motion to 11.0.7

## 1.1.1

### Patch Changes

- 7615df6: Update framer to 2.4.1, update framer motion to 11.0.7
- e5cc18b: Remove postinstall script

## 1.1.0

### Minor Changes

- 9ddc21d: Fix .json files in components
- 72602a7: Added --watch option to watch for Framer or config changes

### Patch Changes

- 4537169: remove additional LayoutGroup component, use the one already inside the Fremer component

## 1.0.1

### Patch Changes

- eddf196: Update framer to 2.4.1, update framer motion to 11.0.7

## 1.0.0

### Major Changes

- Use tailwind style breaking points instead of Desktop etc

## 0.7.1

### Patch Changes

- Module not found: Default condition should be last one

## 0.7.0

### Minor Changes

- Added index export. Export framer-motion from unframer, prevent mismatches by using unframer instead of framer-motion

## 0.6.3

### Patch Changes

- Fix url redirect for root url

## 0.6.2

### Patch Changes

- Render all variants at the same time again, nextjs was bugging

## 0.6.1

### Patch Changes

- Fix layout animations getting triggered on mount, disable layout animations during hydration

## 0.6.0

### Minor Changes

- Renamed to unframer from installable-framer

## 0.5.1

### Patch Changes

- Fix variants types, don't render variants that are not in the current breakpoint on client, only do it on server thanks to useSyncExternalStore

## 0.5.0

### Minor Changes

- a9d22e5: Added --watch option

## 0.4.1

### Patch Changes

- defd822: fixed installable framer deadlock because of dprint

## 0.4.0

### Minor Changes

- Use latest framer package bundle, should work with latest components

## 0.3.7

### Patch Changes

- Added useLocaleCode export, fix #2

## 0.3.6

### Patch Changes

- Fix missing dependency

## 0.3.5

### Patch Changes

- update framer

## 0.3.4

### Patch Changes

- fix expty defs

## 0.3.3

### Patch Changes

- fix json handling in transform

## 0.3.2

### Patch Changes

- Fix json handling again

## 0.3.1

### Patch Changes

- support importing json files

## 0.3.0

### Minor Changes

- Added Component.Responsive shortcut

## 0.2.1

### Patch Changes

- fix semicolons syntax errors

## 0.2.0

### Minor Changes

- Added more react utilities, format outputs

### Patch Changes

- Added breakpoints styles

## 0.1.3

### Patch Changes

- export framer styles to make ssr work

## 0.1.2

### Patch Changes

- Fix components without props controls

## 0.1.1

### Patch Changes

- remove deps

## 0.1.0

### Minor Changes

- Better prop controls extraction

## 0.0.3

### Patch Changes

- Added outDir option

## 0.0.2

### Patch Changes

- Update framer fixed

## 0.0.1

### Patch Changes

- Initial
