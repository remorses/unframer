import http from "node:http";
import net from "node:net";
import type { CallbackResult, CallbackServerOptions } from "./types.js";

const DEFAULT_TIMEOUT = 5 * 60 * 1000; // 5 minutes

/**
 * Find a random available port by letting the OS assign one.
 */
async function findAvailablePort(): Promise<number> {
  return new Promise((resolve, reject) => {
    const server = net.createServer();
    server.on("error", reject);
    server.listen(0, () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Failed to get port from server"));
        return;
      }
      const port = address.port;
      server.close(() => {
        resolve(port);
      });
    });
  });
}

/**
 * Generate HTML response for the callback page
 */
function generateCallbackHtml(success: boolean, message: string): string {
  const color = success ? "#22c55e" : "#ef4444";
  const icon = success ? "✓" : "✗";

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${success ? "Authentication Successful" : "Authentication Failed"}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      margin: 0;
      background-color: #f5f5f5;
    }
    .container {
      background: white;
      padding: 3rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      max-width: 400px;
    }
    .icon {
      font-size: 4rem;
      color: ${color};
      margin-bottom: 1rem;
    }
    h1 {
      color: #1f2937;
      margin-bottom: 0.5rem;
    }
    p {
      color: #6b7280;
      margin-bottom: 1.5rem;
    }
    .hint {
      font-size: 0.875rem;
      color: #9ca3af;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">${icon}</div>
    <h1>${success ? "Authentication Successful" : "Authentication Failed"}</h1>
    <p>${message}</p>
    <p class="hint">You can close this window and return to your terminal.</p>
  </div>
  <script>
    // Try to close the window after a short delay
    setTimeout(() => { window.close(); }, 2000);
  </script>
</body>
</html>`;
}

/**
 * Start a local HTTP server to receive OAuth callbacks.
 * Uses a random available port to avoid conflicts.
 *
 * @returns Object with port, redirectUri, waitForCallback promise, and close function
 */
export async function startCallbackServer(options: CallbackServerOptions = {}): Promise<{
  port: number;
  redirectUri: string;
  waitForCallback: () => Promise<CallbackResult>;
  close: () => void;
}> {
  const timeout = options.timeout ?? DEFAULT_TIMEOUT;
  const port = await findAvailablePort();
  const redirectUri = `http://localhost:${port}/callback`;

  let resolveCallback: ((result: CallbackResult) => void) | undefined;
  let rejectCallback: ((error: Error) => void) | undefined;
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const callbackPromise = new Promise<CallbackResult>((resolve, reject) => {
    resolveCallback = resolve;
    rejectCallback = reject;
  });

  const server = http.createServer((req, res) => {
    const url = new URL(req.url || "/", `http://localhost:${port}`);

    // Only handle the callback path
    if (url.pathname !== "/callback") {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    }

    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const error = url.searchParams.get("error");
    const errorDescription = url.searchParams.get("error_description");

    if (error) {
      const message = errorDescription || error;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(generateCallbackHtml(false, message));
      rejectCallback?.(new Error(`OAuth error: ${message}`));
      return;
    }

    if (!code) {
      res.writeHead(400, { "Content-Type": "text/html" });
      res.end(generateCallbackHtml(false, "Missing authorization code"));
      rejectCallback?.(new Error("Missing authorization code"));
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(generateCallbackHtml(true, "You have been authenticated successfully."));
    resolveCallback?.({ code, state: state || "" });
  });

  server.listen(port, () => {
    options.onReady?.(redirectUri);
  });

  // Set up timeout
  timeoutId = setTimeout(() => {
    rejectCallback?.(new Error(`OAuth callback timed out after ${timeout / 1000} seconds`));
    server.close();
  }, timeout);

  const close = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    server.close();
  };

  const waitForCallback = async (): Promise<CallbackResult> => {
    try {
      return await callbackPromise;
    } finally {
      close();
    }
  };

  return {
    port,
    redirectUri,
    waitForCallback,
    close,
  };
}
