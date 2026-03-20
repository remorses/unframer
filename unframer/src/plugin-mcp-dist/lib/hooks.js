import { useRef, useEffect, useState } from 'react';
import { useRevalidator, useNavigation } from 'react-router';
export function usePrevious(value) {
    const ref = useRef(null);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
export function useIsDocumentVisibile() {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const handleVisibilityChange = () => {
            console.log('visibility changed');
            setIsVisible(document.visibilityState === 'visible');
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);
    return isVisible;
}
export function useRefreshOnVisible({ enabled = true }) {
    const documentVisible = useIsDocumentVisibile();
    const revalidator = useRevalidator();
    const navigation = useNavigation();
    const previousVisible = usePrevious(documentVisible);
    useEffect(() => {
        if (!enabled) {
            return;
        }
        if (navigation.state !== 'idle') {
            return;
        }
        if (revalidator.state !== 'idle') {
            return;
        }
        if (documentVisible && previousVisible === false) {
            console.log(`document visible again, revalidating`);
            revalidator.revalidate();
        }
    }, [documentVisible, enabled, navigation.state, previousVisible]);
}
//# sourceMappingURL=hooks.js.map