/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { HydrationOverlay } from '@builder.io/react-hydration-overlay'



window.BUILDER_HYDRATION_OVERLAY = {};

window.addEventListener("error", (event) => {
  const msg = event.message.toLowerCase();
  const isHydrationMsg = msg.includes("hydration") || msg.includes("hydrating");

  if (isHydrationMsg) {
    window.BUILDER_HYDRATION_OVERLAY.ERROR = true;
    let appRootEl = document.querySelector(
      window.BUILDER_HYDRATION_OVERLAY.APP_ROOT_SELECTOR
    );

    if (appRootEl) {
      window.BUILDER_HYDRATION_OVERLAY.CSR_HTML = appRootEl.innerHTML;
    }
  }
});

let BUILDER_HYDRATION_OVERLAY_ELEMENT = document.querySelector(
  window.BUILDER_HYDRATION_OVERLAY.APP_ROOT_SELECTOR
);
if (BUILDER_HYDRATION_OVERLAY_ELEMENT) {
  window.BUILDER_HYDRATION_OVERLAY.SSR_HTML =
    BUILDER_HYDRATION_OVERLAY_ELEMENT.innerHTML;
}


startTransition(() => {
    hydrateRoot(
        document,

        <HydrationOverlay>
            <RemixBrowser />
        </HydrationOverlay>,
    )
})
