import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutStack from "./index"

storiesOf("LayoutStack", module)
	.add("default", () => (
		<LayoutStack
			altText="This is the image alt text"
			caption="This is the image caption"
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			srcURL="img/image-small.jpg"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
		/>
	))
	.add("no pic", () => (
		<LayoutStack
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
		/>
	))
