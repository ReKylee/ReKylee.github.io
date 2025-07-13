import { writable, derived } from "svelte/store";
import translations from "$lib/data/i18n";
import { browser } from "$app/environment";

const createLanguageStore = () => {
    const initialValue = browser
        ? window.localStorage.getItem("language") || "en"
        : "en";
    const { subscribe, set } = writable(initialValue);

    return {
        subscribe,
        setLang: (/** @type {string} */ lang) => {
            if (browser) {
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
                localStorage.setItem("language", lang);
            }
            set(lang);
        },
        init: () => {
            if (browser) {
                const savedLang = localStorage.getItem("language") || "en";
                document.documentElement.lang = savedLang;
                document.documentElement.dir =
                    savedLang === "he" ? "rtl" : "ltr";
                set(savedLang);
            }
        },
    };
};

export const language = createLanguageStore();

export const t = derived(
    language,
    ($language) => (/** @type {string} */ key) => {
        const keys = key.split(".");
        let text = translations[/** @type {'en' | 'he'} */ ($language)];
        for (const k of keys) {
            if (text && typeof text === "object" && k in text) {
                text = /** @type {any} */ (text)[k];
            } else {
                return key; // Return key if not found
            }
        }
        return text;
    },
);
