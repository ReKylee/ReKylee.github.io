import { getCollection } from "astro:content";
import type { CollectionEntry } from "astro:content";
import type { Locale } from "$lib/i18n";

export type SiteContent = Awaited<ReturnType<typeof getSiteContent>>;
export type ProjectContent = Awaited<ReturnType<typeof getProjectsForLocale>>[number];

export const getSiteContent = async (locale: Locale) => {
    const entries = await getCollection("site");
    const entry =
        entries.find((item: CollectionEntry<"site">) => item.id === `${locale}/home`) ??
        entries.find(
            (item: CollectionEntry<"site">) =>
                item.id.startsWith(`${locale}/home.`) && item.data.locale === locale,
        ) ??
        entries.find((item: CollectionEntry<"site">) => item.data.locale === locale);
    if (!entry) {
        throw new Error(`Missing site content for locale "${locale}".`);
    }
    return entry.data;
};

export const getProjectsForLocale = async (locale: Locale) => {
    const entries = await getCollection("projects", (entry: CollectionEntry<"projects">) => {
        const { id, data } = entry;
        const localeByPath = id.split("/")[0];
        return localeByPath === locale && data.locale === locale;
    });

    return entries
        .sort(
            (a: CollectionEntry<"projects">, b: CollectionEntry<"projects">) =>
                a.data.order - b.data.order,
        )
        .map((entry: CollectionEntry<"projects">) => entry.data);
};
