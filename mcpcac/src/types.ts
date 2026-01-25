import type { OAuthTokens, OAuthClientInformation } from "@modelcontextprotocol/sdk/shared/auth.js";

/**
 * Persisted OAuth state for file-based storage
 */
export interface McpOAuthState {
  tokens?: OAuthTokens;
  clientInformation?: OAuthClientInformation;
  codeVerifier?: string;
  serverUrl?: string;
}

/**
 * OAuth configuration for addMcpCommands
 */
export interface McpOAuthConfig {
  /** Client name shown during OAuth consent screen */
  clientName: string;

  /**
   * Load persisted OAuth state from storage (e.g., config file)
   */
  load: () => McpOAuthState | undefined;

  /**
   * Save OAuth state to storage. Called after successful auth or token refresh.
   * Pass undefined to clear the state (logout).
   */
  save: (state: McpOAuthState | undefined) => void;

  /**
   * Called with the authorization URL. Default behavior opens the browser.
   * Override to customize (e.g., just print the URL).
   */
  onAuthUrl?: (url: string) => void;

  /**
   * Called on successful authentication
   */
  onAuthSuccess?: () => void;

  /**
   * Called on authentication error
   */
  onAuthError?: (error: string) => void;
}

/**
 * Result of startOAuthFlow
 */
export interface OAuthFlowResult {
  success: boolean;
  state?: McpOAuthState;
  error?: string;
}

/**
 * Options for starting OAuth flow
 */
export interface StartOAuthFlowOptions {
  serverUrl: string;
  clientName: string;
  /** Existing OAuth state (for re-auth scenarios) */
  existingState?: McpOAuthState;
  /** Called with auth URL, default opens browser */
  onAuthUrl?: (url: string) => void;
  /** Timeout in ms waiting for callback, default 5 minutes */
  timeout?: number;
}

/**
 * Options for the local callback server
 */
export interface CallbackServerOptions {
  /** Called when server starts with the redirect URI */
  onReady?: (redirectUri: string) => void;
  /** Timeout in ms, default 5 minutes */
  timeout?: number;
}

/**
 * Result from callback server
 */
export interface CallbackResult {
  code: string;
  state: string;
}
