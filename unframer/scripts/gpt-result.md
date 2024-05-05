
```diff
-    return createInstantAnimation(
-        instantAnimationState.current
-          ? {
-            ...options,
-            delay: 0,
-          }
-          : options,
-      );
+    return createInstantAnimation(instantAnimationState.current ? { ...options, delay: 0, } : options,