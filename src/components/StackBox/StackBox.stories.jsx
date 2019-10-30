import React from "react"
import { storiesOf } from "@storybook/react"

import StackBox from "./index"

storiesOf("StackBox", module)
	.add("default", () => (
		<StackBox
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
	.add("no pic", () => (
		<StackBox
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
		/>
	))
	.add("Extra box space", () => (
		<StackBox
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
			boxSpace="var(--s3)"
			stackSpace="var(--s-1)"
		/>
	))
	.add("Extra stack space", () => (
		<StackBox
			footnote="Footnote"
			headline="Survey"
			href="https://www.nature.com"
			text={
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum. <a href="https://www.nature.com/news">Click here to read more</a>'
			}
			boxSpace="var(--s-1)"
			stackSpace="var(--s3)"
		/>
	))
