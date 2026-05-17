const path = require("path")

module.exports = {
	stories: ["../src/components/**/*.stories.@(js|jsx)"],
	addons: ["@storybook/addon-essentials"],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	staticDirs: ["../static"],
	webpackFinal: async config => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "sass-loader"],
			include: path.resolve(__dirname, "../"),
		})

		return config
	},
}
