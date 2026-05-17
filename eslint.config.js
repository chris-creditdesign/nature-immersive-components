const { FlatCompat } = require("@eslint/eslintrc")
const babelParser = require("@babel/eslint-parser")
const pluginReactHooks = require("eslint-plugin-react-hooks")
const globals = require("globals")

const compat = new FlatCompat({ baseDirectory: __dirname })

module.exports = [
...compat.extends("airbnb", "prettier"),
{
files: ["**/*.js", "**/*.jsx"],
plugins: {
"react-hooks": pluginReactHooks,
},
languageOptions: {
parser: babelParser,
parserOptions: {
allowImportExportEverywhere: true,
requireConfigFile: false,
babelOptions: {
presets: ["@babel/preset-env", "@babel/preset-react"],
},
},
globals: {
...globals.browser,
...globals.es2022,
...globals.jest,
},
},
rules: {
"react-hooks/rules-of-hooks": "error",
"react-hooks/exhaustive-deps": "warn",
semi: "off",
"no-tabs": "off",
"no-console": "warn",
indent: ["error", "tab"],
"react/jsx-indent": "off",
"react/jsx-indent-props": "off",
"react/function-component-definition": "off",
"react/no-danger": "off",
"react/require-default-props": "off",
"react/forbid-prop-types": "off",
"react/no-unescaped-entities": "off",
"react/jsx-curly-brace-presence": "off",
"react/self-closing-comp": "off",
"react/no-unknown-property": "off",
"import/no-extraneous-dependencies": "off",
"no-param-reassign": "off",
"no-restricted-syntax": "off",
"jsx-a11y/control-has-associated-label": "off",
"react/jsx-filename-extension": "off",
"comma-dangle": "off",
quotes: [2, "double", { avoidEscape: true }],
},
},
]
