import { defineCollection, z } from "astro:content";

const localeSchema = z.enum(["en", "he"]);

const siteCollection = defineCollection({
    type: "content",
    schema: z.object({
        locale: localeSchema,
        seo: z.object({
            title: z.string(),
            description: z.string(),
        }),
        name: z.string(),
        nav: z.object({
            about: z.string(),
            skills: z.string(),
            experience: z.string(),
            projects: z.string(),
            education: z.string(),
        }),
        journal: z.object({
            title: z.string(),
        }),
        contact_me: z.string(),
        hero: z.object({
            title: z.string(),
            subtitle: z.string(),
            view_work: z.string(),
            see_skills: z.string(),
        }),
        about: z.object({
            title: z.string(),
            subtitle: z.string(),
            text: z.string(),
        }),
        skills: z.object({
            title: z.string(),
            subtitle: z.string(),
            engines: z.string(),
            languages: z.string(),
            backend: z.string(),
            levels: z.object({
                expert: z.string(),
                advanced: z.string(),
                proficient: z.string(),
            }),
        }),
        experience: z.object({
            title: z.string(),
            subtitle: z.string(),
            exp1: z.object({
                date: z.string(),
                title: z.string(),
                desc: z.string(),
            }),
            exp2: z.object({
                date: z.string(),
                title: z.string(),
                desc: z.string(),
            }),
        }),
        projects: z.object({
            title: z.string(),
            subtitle: z.string(),
            proj1: z.object({
                title: z.string(),
                desc: z.string(),
            }),
            proj2: z.object({
                title: z.string(),
                desc: z.string(),
            }),
            proj3: z.object({
                title: z.string(),
                desc: z.string(),
            }),
        }),
        education: z.object({
            title: z.string(),
            subtitle: z.string(),
            edu1: z.object({
                date: z.string(),
                title: z.string(),
                school: z.string(),
                desc: z.string(),
            }),
            edu2: z.object({
                date: z.string(),
                title: z.string(),
                school: z.string(),
                desc: z.string(),
            }),
        }),
        footer: z.object({
            title: z.string(),
            subtitle: z.string(),
            copy: z.string(),
        }),
    }),
});

const projectCollection = defineCollection({
    type: "content",
    schema: z.object({
        id: z.string(),
        locale: localeSchema,
        order: z.number().int().nonnegative(),
        title: z.string(),
        extension: z.enum(["sysX", "dbin", "build"]),
        date: z.string(),
        description: z.string(),
        visual: z.object({
            type: z.enum(["image", "video", "embed"]),
            src: z.string(),
        }),
        tech: z.array(z.string()),
        links: z
            .object({
                github: z.string().url().optional(),
                live: z.string().url().optional(),
            })
            .optional(),
    }),
});

export const collections = {
    site: siteCollection,
    projects: projectCollection,
};
