import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import astro from "eslint-plugin-astro";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

export default [
    {
        ignores: [
            "dist/**",
            ".astro/**",
            "node_modules/**",
            "public/**",
            "coverage/**",
        ],
    },
    ...astro.configs["flat/recommended"],
    ...svelte.configs["flat/recommended"],
    {
        files: ["**/*.svelte"],
        languageOptions: {
            parserOptions: {
                parser: tsParser,
            },
        },
        rules: {
            "svelte/no-at-html-tags": "off",
            "svelte/require-each-key": "warn",
            "svelte/no-useless-mustaches": "warn",
            "svelte/prefer-svelte-reactivity": "warn",
        },
    },
    {
        files: ["**/*.{ts,tsx,js,mjs,cjs}"],
        plugins: {
            "@typescript-eslint": tseslint,
        },
        languageOptions: {
            parser: tsParser,
            sourceType: "module",
            ecmaVersion: "latest",
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        rules: {
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_",
                },
            ],
        },
    },
];
