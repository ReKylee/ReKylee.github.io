import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
    // Global settings
    { ignores: ["dist"] },

    // Frontend settings
    {
        files: ["frontend/**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: "latest",
                ecmaFeatures: { jsx: true },
                sourceType: "module",
            },
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
        },
        rules: {
            ...js.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true },
            ],
        },
    },

    // Backend settings
    {
        files: ["backend/**/*.{js,ts}"],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.node,
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {},
        rules: {
            ...js.configs.recommended.rules,
            "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
        },
    },
];
