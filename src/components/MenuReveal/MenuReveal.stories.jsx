import React from "react"
import { storiesOf } from "@storybook/react"

import MenuReveal from "./index"
import "./style.scss"

const menuLinks = [
	{ text: "View animation", href: "#" },
	{ text: "Controls", href: "#" },
	{ text: "Replay intro", href: "#" },
	{
		text: "About Nature 150",
		href: "#",
	},
	{ text: "Credits", href: "#" },
	{ text: "Download data", href: "dat/data.zip" },
]

storiesOf("MenuReveal", module).add("default", () => (
	<MenuReveal
		menuLinks={menuLinks}
		labelText="Label Text"
		btnText="Button text"
	/>
))
