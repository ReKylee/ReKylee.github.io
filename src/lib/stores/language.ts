import { derived, writable } from "svelte/store";
import type { Locale } from "$lib/i18n";
import { getDir, isLocale } from "$lib/i18n";

type TranslationTree = Record<string, unknown>;

const localeStore = writable<Locale>("en");
const translationStore = writable<TranslationTree>({});
const translationBundles: Partial<Record<Locale, TranslationTree>> = {};

const isBrowser = typeof window !== "undefined";

const applyLocaleAttrs = (locale: Locale) => {
    if (!isBrowser) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = getDir(locale);
};

const buildLocalizedPath = (nextLocale: Locale) => {
    if (!isBrowser) return `/${nextLocale}`;
    const url = new URL(window.location.href);
    const parts = url.pathname.split("/").filter(Boolean);

    const localeIndex = parts.findIndex((part) => isLocale(part));
    if (localeIndex >= 0) {
        parts[localeIndex] = nextLocale;
    } else {
        parts.push(nextLocale);
    }
    const trailingSlash = url.pathname.endsWith("/") ? "/" : "";
    return `/${parts.join("/")}${trailingSlash}${url.search}${url.hash}`;
};

export const registerTranslations = (locale: Locale, translations: TranslationTree) => {
    translationBundles[locale] = translations;
};

export const language = {
    subscribe: localeStore.subscribe,
    init: (locale: Locale) => {
        localeStore.set(locale);
        if (translationBundles[locale]) {
            translationStore.set(translationBundles[locale]);
        }
        applyLocaleAttrs(locale);
        if (isBrowser) {
            window.localStorage.setItem("language", locale);
        }
    },
    setLang: (locale: Locale) => {
        localeStore.set(locale);
        if (translationBundles[locale]) {
            translationStore.set(translationBundles[locale]);
        }
        applyLocaleAttrs(locale);
        if (isBrowser) {
            window.localStorage.setItem("language", locale);
            window.history.pushState({}, "", buildLocalizedPath(locale));
        }
    },
};

export const setTranslations = (translations: TranslationTree) => {
    translationStore.set(translations);
};

export const t = derived(
    translationStore,
    ($translations) => (key: string) => {
        const keys = key.split(".");
        let cursor: unknown = $translations;
        for (const token of keys) {
            if (
                cursor !== null &&
                typeof cursor === "object" &&
                token in (cursor as Record<string, unknown>)
            ) {
                cursor = (cursor as Record<string, unknown>)[token];
            } else {
                return key;
            }
        }
        return typeof cursor === "string" ? cursor : key;
    },
);
