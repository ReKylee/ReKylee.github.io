import type { Locale } from "$lib/i18n";
import { LOCALES } from "$lib/i18n";
import { getProjectsForLocale, getSiteContent } from "$lib/content/loaders";

export const getLocalePageData = async (locale: Locale) => {
    const siteContent = await getSiteContent(locale);
    const projects = await getProjectsForLocale(locale);
    const translationsByLocale = Object.fromEntries(
        await Promise.all(
            LOCALES.map(async (entryLocale) => [
                entryLocale,
                await getSiteContent(entryLocale),
            ]),
        ),
    ) as Record<Locale, Awaited<ReturnType<typeof getSiteContent>>>;
    const projectsByLocale = Object.fromEntries(
        await Promise.all(
            LOCALES.map(async (entryLocale) => [
                entryLocale,
                await getProjectsForLocale(entryLocale),
            ]),
        ),
    ) as Record<Locale, Awaited<ReturnType<typeof getProjectsForLocale>>>;

    return { siteContent, projects, translationsByLocale, projectsByLocale };
};
