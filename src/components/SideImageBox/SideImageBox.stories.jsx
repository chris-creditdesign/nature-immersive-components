import React from "react"
import { storiesOf } from "@storybook/react"

import SideImageBox from "./index"

storiesOf("SideImageBox", module)
	.add("default", () => (
		<SideImageBox
			altText="This is the image alt text"
			caption="This is the image caption"
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			srcURL="img/image-small.jpg"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
			width={1200}
			height={800}
		/>
	))
	.add("With extra grid space", () => (
		<SideImageBox
			altText="This is the image alt text"
			caption="This is the image caption"
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			srcURL="img/image-small.jpg"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
			width={1200}
			height={800}
			gridSpace="var(--s1)"
		/>
	))
	.add("With extra box space", () => (
		<SideImageBox
			altText="This is the image alt text"
			caption="This is the image caption"
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			srcURL="img/image-small.jpg"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
			width={1200}
			height={800}
			boxSpace="var(--s1)"
		/>
	))
