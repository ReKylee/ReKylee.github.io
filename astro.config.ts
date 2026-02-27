import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import svg from "@poppanator/sveltekit-svg";

export default defineConfig({
    site: "https://rekylee.github.io",
    output: "static",
    base: process.env.BASE_PATH,
    i18n: {
        locales: ["en", "he"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: false,
        },
    },
    integrations: [svelte(), sitemap()],
    vite: {
        resolve: {
            alias: {
                $lib: fileURLToPath(new URL("./src/lib", import.meta.url)),
            },
        },
        plugins: [
            tailwindcss(),
            svg({
                includePaths: ["./src/lib/icons/"],
                svgoOptions: {
                    multipass: true,
                    plugins: [
                        {
                            name: "preset-default",
                            params: { overrides: { removeViewBox: false } },
                        },
                        { name: "removeAttrs", params: { attrs: "(fill|stroke)" } },
                    ],
                },
            }),
            svg({
                includePaths: ["./src/lib/assets/"],
                svgoOptions: {
                    multipass: true,
                    plugins: [
                        {
                            name: "preset-default",
                            params: { overrides: { removeViewBox: false } },
                        },
                    ],
                },
            }),
        ],
    },
});
