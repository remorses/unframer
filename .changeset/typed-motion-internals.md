---
'unframer': minor
---

Add official root export types for deterministic renderers that need Framer runtime and Framer Motion frame timing internals.

```ts
import {
  JSAnimation,
  MotionGlobalConfig,
  _injectRuntime,
  frameData,
  frameSteps,
  time,
  visualElementStore,
} from 'unframer'
```
