export const LOCALES = ["en", "he"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const isLocale = (value: string): value is Locale =>
    LOCALES.includes(value as Locale);

export const getDir = (locale: Locale) => (locale === "he" ? "rtl" : "ltr");
