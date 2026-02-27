import { writable } from "svelte/store";

type Theme = "light" | "dark";
const isBrowser = typeof window !== "undefined";

const createThemeStore = () => {
    const { subscribe, set } = writable<Theme>("light");

    return {
        subscribe,
        setTheme: (theme: Theme) => {
            if (isBrowser) {
                document.documentElement.classList.remove("latte", "mocha");
                document.documentElement.classList.add(
                    theme === "light" ? "latte" : "mocha",
                );
                window.localStorage.setItem("theme", theme);
            }
            set(theme);
        },
        init: () => {
            if (!isBrowser) return;
            const savedTheme = window.localStorage.getItem("theme");
            const systemPrefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            const initialTheme: Theme =
                savedTheme === "dark" || savedTheme === "light"
                    ? savedTheme
                    : systemPrefersDark
                      ? "dark"
                      : "light";
            set(initialTheme);
            document.documentElement.classList.remove("latte", "mocha");
            document.documentElement.classList.add(
                initialTheme === "light" ? "latte" : "mocha",
            );
        },
    };
};

export const theme = createThemeStore();
