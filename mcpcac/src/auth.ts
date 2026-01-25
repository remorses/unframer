import { auth } from "@modelcontextprotocol/sdk/client/auth.js";
import { FileOAuthProvider } from "./oauth-provider.js";
import { startCallbackServer } from "./local-callback-server.js";
import type { McpOAuthState, OAuthFlowResult, StartOAuthFlowOptions } from "./types.js";

/**
 * Open a URL in the default browser.
 * Uses platform-specific commands.
 */
async function openBrowser(url: string): Promise<void> {
  const { exec } = await import("node:child_process");
  const { promisify } = await import("node:util");
  const execAsync = promisify(exec);

  const platform = process.platform;
  const command = (() => {
    if (platform === "darwin") {
      return `open "${url}"`;
    }
    if (platform === "win32") {
      return `start "" "${url}"`;
    }
    // Linux and others
    return `xdg-open "${url}"`;
  })();

  await execAsync(command);
}

/**
 * Start the OAuth flow for an MCP server.
 * This is an internal function - consumers should not call this directly.
 * It is automatically triggered by addMcpCommands when a 401 error occurs.
 *
 * This function:
 * 1. Starts a local callback server on a random port
 * 2. Initiates OAuth with the MCP server
 * 3. Opens the browser for user authorization
 * 4. Waits for the callback with the authorization code
 * 5. Exchanges the code for tokens
 * 6. Returns the OAuth state for persistence
 */
export async function startOAuthFlow(options: StartOAuthFlowOptions): Promise<OAuthFlowResult> {
  const { serverUrl, clientName, existingState, onAuthUrl, timeout } = options;

  // Start local callback server on random port
  const callbackServer = await startCallbackServer({ timeout });
  const { redirectUri, waitForCallback, close } = callbackServer;

  try {
    // Create OAuth provider with the dynamic redirect URI
    const oauthProvider = new FileOAuthProvider({
      serverUrl,
      redirectUri,
      clientName,
      tokens: existingState?.tokens,
      clientInformation: existingState?.clientInformation,
      codeVerifier: existingState?.codeVerifier,
    });

    // Start the OAuth flow - this will trigger dynamic client registration
    // and set the authorization URL on the provider
    const authResult = await auth(oauthProvider, { serverUrl });

    if (authResult !== "REDIRECT") {
      // Auth succeeded without redirect (had valid tokens)
      close();
      return {
        success: true,
        state: oauthProvider.getState(),
      };
    }

    // Get the authorization URL
    const authUrl = oauthProvider.redirectStartAuthUrl;
    if (!authUrl) {
      close();
      return {
        success: false,
        error: "No authorization URL returned from OAuth flow",
      };
    }

    // Open browser or call custom handler
    const authUrlString = authUrl.toString();
    if (onAuthUrl) {
      onAuthUrl(authUrlString);
    } else {
      await openBrowser(authUrlString);
    }

    // Wait for the callback
    const callback = await waitForCallback();

    // Complete the OAuth flow by exchanging the code for tokens
    const finalResult = await auth(oauthProvider, {
      serverUrl,
      authorizationCode: callback.code,
    });

    if (finalResult === "REDIRECT") {
      return {
        success: false,
        error: "Unexpected redirect after code exchange",
      };
    }

    return {
      success: true,
      state: oauthProvider.getState(),
    };
  } catch (err) {
    close();
    return {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * Check if an error indicates authentication is required.
 * Internal function used by addMcpCommands.
 */
export function isAuthRequiredError(err: unknown): boolean {
  if (!(err instanceof Error)) {
    return false;
  }
  const message = err.message.toLowerCase();
  return (
    message.includes("401") ||
    message.includes("unauthorized") ||
    message.includes("authentication required") ||
    message.includes("not authenticated") ||
    message.includes("invalid_token") ||
    message.includes("missing or invalid access token")
  );
}
