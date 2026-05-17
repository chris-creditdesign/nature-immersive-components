const { FlatCompat } = require("@eslint/eslintrc");
const babelParser = require("@babel/eslint-parser");
const pluginPrettier = require("eslint-plugin-prettier");
const pluginHtml = require("eslint-plugin-html");
const globals = require("globals");

const compat = new FlatCompat({ baseDirectory: __dirname });

module.exports = [
{ ignores: ["**/*.scss"] },
...compat.extends("airbnb", "prettier"),
{
files: ["**/*.js", "**/*.jsx"],
plugins: {
prettier: pluginPrettier,
html: pluginHtml,
},
languageOptions: {
parser: babelParser,
parserOptions: {
allowImportExportEverywhere: true,
},
globals: {
...globals.browser,
...globals.es2015,
},
},
rules: {
semi: "off",
"no-tabs": "off",
"no-console": "warn",
indent: ["error", "tab"],
"react/jsx-indent": "off",
"react/jsx-indent-props": "off",
"react/no-danger": "off",
"comma-dangle": "off",
quotes: [2, "double", { avoidEscape: true }],
"prettier/prettier": [
"error",
{
trailingComma: "es5",
printWidth: 80,
tabWidth: 8,
useTabs: true,
semi: false,
},
],
},
},
];
