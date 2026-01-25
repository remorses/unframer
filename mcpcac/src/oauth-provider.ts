import type { OAuthClientProvider } from "@modelcontextprotocol/sdk/client/auth.js";
import type {
  OAuthClientInformation,
  OAuthClientInformationFull,
  OAuthClientMetadata,
  OAuthTokens,
} from "@modelcontextprotocol/sdk/shared/auth.js";
import type { McpOAuthState } from "./types.js";

export interface FileOAuthProviderOptions {
  serverUrl: string;
  redirectUri: string;
  clientName: string;
  tokens?: OAuthTokens;
  clientInformation?: OAuthClientInformation;
  codeVerifier?: string;
  /**
   * Called when tokens are updated (initial save or refresh).
   * Use this to persist the new state.
   */
  onStateUpdated?: (state: McpOAuthState) => void;
}

/**
 * File-based OAuth provider implementation for CLI usage.
 * Implements the OAuthClientProvider interface from MCP SDK.
 *
 * Unlike server-based implementations that use a database,
 * this stores state in memory and calls onStateUpdated for persistence.
 */
export class FileOAuthProvider implements OAuthClientProvider {
  private _clientInformation: OAuthClientInformation | undefined;
  private _codeVerifier: string | undefined;
  private _tokens: OAuthTokens | undefined;
  private _redirectStartAuthUrl: URL | undefined;

  private readonly serverUrl: string;
  private readonly redirectUri: string;
  private readonly clientName: string;
  private readonly onStateUpdated?: (state: McpOAuthState) => void;

  constructor(options: FileOAuthProviderOptions) {
    this.serverUrl = options.serverUrl;
    this.redirectUri = options.redirectUri;
    this.clientName = options.clientName;
    this._tokens = options.tokens;
    this._clientInformation = options.clientInformation;
    this._codeVerifier = options.codeVerifier;
    this.onStateUpdated = options.onStateUpdated;
  }

  get redirectUrl(): string {
    return this.redirectUri;
  }

  /**
   * The authorization URL to redirect the user to.
   * Set by redirectToAuthorization().
   */
  get redirectStartAuthUrl(): URL | undefined {
    return this._redirectStartAuthUrl;
  }

  async clientInformation(): Promise<OAuthClientInformation | undefined> {
    return this._clientInformation;
  }

  async saveClientInformation(clientInformation: OAuthClientInformationFull): Promise<void> {
    this._clientInformation = clientInformation;
    this.notifyStateUpdated();
  }

  async codeVerifier(): Promise<string> {
    if (!this._codeVerifier) {
      throw new Error("Code verifier not set");
    }
    return this._codeVerifier;
  }

  async saveCodeVerifier(codeVerifier: string): Promise<void> {
    this._codeVerifier = codeVerifier;
    this.notifyStateUpdated();
  }

  get clientMetadata(): OAuthClientMetadata {
    return {
      redirect_uris: [this.redirectUri],
      client_name: this.clientName,
    };
  }

  /**
   * Called by the MCP SDK when the user needs to be redirected to authorize.
   * We store the URL so the CLI can open it in the browser.
   */
  redirectToAuthorization(authorizationUrl: URL): void {
    this._redirectStartAuthUrl = authorizationUrl;
  }

  async tokens(): Promise<OAuthTokens | undefined> {
    return this._tokens;
  }

  async saveTokens(tokens: OAuthTokens): Promise<void> {
    this._tokens = tokens;
    this.notifyStateUpdated();
  }

  /**
   * Get the current state for persistence
   */
  getState(): McpOAuthState {
    return {
      tokens: this._tokens,
      clientInformation: this._clientInformation,
      codeVerifier: this._codeVerifier,
      serverUrl: this.serverUrl,
    };
  }

  private notifyStateUpdated(): void {
    if (this.onStateUpdated) {
      this.onStateUpdated(this.getState());
    }
  }
}

/**
 * Create a FileOAuthProvider for use with MCP transports.
 * This is the simpler factory function for common use cases.
 */
export function createFileOAuthProvider(options: FileOAuthProviderOptions): FileOAuthProvider {
  return new FileOAuthProvider(options);
}
