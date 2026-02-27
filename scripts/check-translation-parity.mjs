import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
/** @type {readonly ("en" | "he")[]} */
const locales = ["en", "he"];

/** @param {string} filePath */
const assertFile = (filePath) => {
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing required locale file: ${filePath}`);
    }
};

/** @param {string} filePath @param {"en" | "he"} expectedLocale */
const assertFrontmatterLocale = (filePath, expectedLocale) => {
    const content = fs.readFileSync(filePath, "utf8");
    const localeMatch = content.match(/^locale:\s*(en|he)\s*$/m);
    if (!localeMatch) {
        throw new Error(`Missing frontmatter locale in ${filePath}`);
    }
    if (localeMatch[1] !== expectedLocale) {
        throw new Error(
            `Locale mismatch in ${filePath}. Expected "${expectedLocale}" but found "${localeMatch[1]}".`,
        );
    }
};

/** @param {string} relativeDir */
const checkPairedFiles = (relativeDir) => {
    const dir = path.join(root, relativeDir);
    /** @type {Map<string, Set<"en" | "he">>} */
    const pairs = new Map();

    for (const locale of locales) {
        const localeDir = path.join(dir, locale);
        if (!fs.existsSync(localeDir)) {
            throw new Error(`Missing locale directory: ${localeDir}`);
        }

        const files = fs
            .readdirSync(localeDir)
            .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"));

        for (const file of files) {
            const stableId = file.replace(/\.mdx?$/, "");
            if (!pairs.has(stableId)) {
                pairs.set(stableId, new Set());
            }
            const localesForId = pairs.get(stableId);
            if (!localesForId) {
                throw new Error(`Failed to build locale pair map for "${stableId}".`);
            }
            localesForId.add(locale);

            const filePath = path.join(localeDir, file);
            const content = fs.readFileSync(filePath, "utf8");
            const localeMatch = content.match(/^locale:\s*(en|he)\s*$/m);
            if (!localeMatch) {
                throw new Error(`Missing frontmatter locale in ${filePath}`);
            }
            if (localeMatch[1] !== locale) {
                throw new Error(
                    `Locale mismatch in ${filePath}. Folder is "${locale}" but frontmatter locale is "${localeMatch[1]}".`,
                );
            }
        }
    }

    const missing = [];
    for (const [stableId, availableLocales] of pairs) {
        for (const locale of locales) {
            if (!availableLocales.has(locale)) {
                missing.push(`${locale}/${stableId}.md`);
            }
        }
    }

    if (missing.length > 0) {
        throw new Error(
            `Missing translation pair files in ${relativeDir}:\n${missing
                .map((item) => `  - ${item}`)
                .join("\n")}`,
        );
    }
};

const siteEnPath = path.join(root, "src/content/site/en/home.md");
const siteHePath = path.join(root, "src/content/site/he/home.md");
assertFile(siteEnPath);
assertFile(siteHePath);
assertFrontmatterLocale(siteEnPath, "en");
assertFrontmatterLocale(siteHePath, "he");
checkPairedFiles("src/content/projects");

console.log("Translation parity check passed.");
