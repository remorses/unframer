import { create } from 'zustand';
export const useStore = create((set) => ({
    isConnected: false,
    isSocketOpen: false,
    isExpanded: true,
    isUiHidden: false,
    error: undefined,
}));
//# sourceMappingURL=store.js.map