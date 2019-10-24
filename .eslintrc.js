module.exports = {
	env: {
		"es6": true,
		"browser": true
	},
	extends: "wesbos",
	plugins: [
		"html",
		"prettier",
		"react-hooks"
	],
	rules: {
		semi: "off",
		"no-tabs": "off",
		"no-console": "warn",
		indent: ["error", "tab"],
		// "react/jsx-indent": ["error", "tab"],
		"react/jsx-indent": "off",
		// "react/jsx-indent-props": ["error", "tab"],
		"react/jsx-indent-props": "off",
		"react/no-danger": "off",
		"comma-dangle": "off",
		"quotes": [2, "double", { "avoidEscape": true }],
		"prettier/prettier": [
			"error",
			{
				trailingComma: "es5",
				printWidth: 120,
				tabWidth: 8,
				useTabs: true,
				semi: false,
			}
		]
	},
	parser: "babel-eslint",
	parserOptions: {
		"allowImportExportEverywhere": true
	}
}
