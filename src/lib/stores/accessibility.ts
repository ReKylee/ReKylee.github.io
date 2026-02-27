import { writable } from "svelte/store";

export interface AccessibilityState {
    crtStrength: number;
    reducedMotion: boolean;
    reducedMotionMode: "system" | "manual";
    highContrast: boolean;
    uiScale: "default" | "large";
}

const STORAGE_KEY = "accessibility-options";
const isBrowser = typeof window !== "undefined";
let mediaQueryList: MediaQueryList | null = null;
let removeMediaQueryListener: (() => void) | null = null;

const getDefaultState = (): AccessibilityState => {
    const prefersReducedMotion =
        isBrowser &&
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    return {
        crtStrength: 0.15,
        reducedMotion: Boolean(prefersReducedMotion),
        reducedMotionMode: "system",
        highContrast: false,
        uiScale: "default",
    };
};

const applyToDocument = (state: AccessibilityState) => {
    if (!isBrowser) return;

    const root = document.documentElement;
    root.style.setProperty("--harshness", state.crtStrength.toString());
    root.setAttribute("data-reduced-motion-mode", state.reducedMotionMode);
    root.classList.toggle("a11y-reduced-motion", state.reducedMotion);
    root.classList.toggle("a11y-high-contrast", state.highContrast);
    root.classList.toggle("a11y-scale-large", state.uiScale === "large");
};

const persistState = (state: AccessibilityState) => {
    if (!isBrowser) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const loadState = (): AccessibilityState => {
    const defaults = getDefaultState();
    if (!isBrowser) return defaults;

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return defaults;
        const parsed = JSON.parse(raw) as Partial<AccessibilityState>;
        return {
            crtStrength:
                typeof parsed.crtStrength === "number"
                    ? parsed.crtStrength
                    : defaults.crtStrength,
            reducedMotion:
                typeof parsed.reducedMotion === "boolean"
                    ? parsed.reducedMotion
                    : defaults.reducedMotion,
            highContrast:
                typeof parsed.highContrast === "boolean"
                    ? parsed.highContrast
                    : defaults.highContrast,
            reducedMotionMode:
                parsed.reducedMotionMode === "manual" ? "manual" : "system",
            uiScale: parsed.uiScale === "large" ? "large" : "default",
        };
    } catch {
        return defaults;
    }
};

const createAccessibilityStore = () => {
    const { subscribe, set, update } = writable<AccessibilityState>(getDefaultState());

    const commit = (next: AccessibilityState, persist = true) => {
        applyToDocument(next);
        if (persist) {
            persistState(next);
        }
        return next;
    };

    const setupReducedMotionListener = () => {
        if (!isBrowser || !window.matchMedia) return;
        removeMediaQueryListener?.();
        mediaQueryList = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onSystemMotionChanged = (event: MediaQueryListEvent) => {
            update((current) => {
                if (current.reducedMotionMode !== "system") return current;
                return commit(
                    {
                        ...current,
                        reducedMotion: event.matches,
                    },
                    false,
                );
            });
        };
        mediaQueryList.addEventListener("change", onSystemMotionChanged);
        removeMediaQueryListener = () => {
            mediaQueryList?.removeEventListener("change", onSystemMotionChanged);
        };
    };

    return {
        subscribe,
        init: () => {
            const state = loadState();
            commit(state, false);
            set(state);
            setupReducedMotionListener();
        },
        setCrtStrength: (value: number) => {
            update((state) => {
                return commit({
                    ...state,
                    crtStrength: Number(value.toFixed(2)),
                });
            });
        },
        toggleReducedMotion: () => {
            update((state) => {
                return commit({
                    ...state,
                    reducedMotion: !state.reducedMotion,
                    reducedMotionMode: "manual" as const,
                });
            });
        },
        toggleHighContrast: () => {
            update((state) => {
                return commit({
                    ...state,
                    highContrast: !state.highContrast,
                });
            });
        },
        toggleUiScale: () => {
            update((state) => {
                return commit({
                    ...state,
                    uiScale: state.uiScale === "default" ? "large" : "default",
                });
            });
        },
    };
};

export const accessibility = createAccessibilityStore();
