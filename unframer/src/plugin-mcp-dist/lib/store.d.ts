interface PluginState {
    isConnected: boolean;
    isSocketOpen: boolean;
    isExpanded: boolean;
    isUiHidden: boolean;
    error?: string;
}
export declare const useStore: import("zustand").UseBoundStore<import("zustand").StoreApi<PluginState>>;
export {};
//# sourceMappingURL=store.d.ts.map