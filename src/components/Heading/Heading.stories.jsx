import React from "react"
import { storiesOf } from "@storybook/react"
import Heading from "./index"

import "./style.scss"

const data = {
	author: "The author",
	headline:
		"Harding headline ipsum dolor sit amet, consectetur adipiscing",
	photographer: "The photographer",
	publishedAt: 1568764800,
	publishedAtString: "2019-09-18",
	stand:
		"Incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporUt enim ad minim veniam, quis nostrud exercitation.",
}

storiesOf("Heading", module).add("default", () => (
	<Heading
		author={data.author}
		headline={data.headline}
		photographer={data.photographer}
		publishedAt={data.publishedAt}
		publishedAtString={data.publishedAtString}
		stand={data.stand}
	/>
))
