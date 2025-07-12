import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import svg from "@poppanator/sveltekit-svg";

export default defineConfig({
    plugins: [
        sveltekit(),
        tailwindcss(),
        svg({
            // Process SVG files in this directory as icons
            includePaths: ["./src/lib/icons/"],
            svgoOptions: {
                multipass: true,
                plugins: [
                    {
                        name: "preset-default",
                        // Keep the viewBox attribute for proper scaling
                        params: { overrides: { removeViewBox: false } },
                    },
                    // This plugin removes all fill and stroke attributes from the SVG,
                    // which is crucial for allowing us to color them with CSS.
                    { name: "removeAttrs", params: { attrs: "(fill|stroke)" } },
                ],
            },
        }),
    ],
    base: process.env.BASE_PATH,
});
