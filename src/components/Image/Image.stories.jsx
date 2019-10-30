import React from "react"
import { storiesOf } from "@storybook/react"

import Image from "./index"

const imageData = {
	altText: "This is the image alt text",
	caption: "This is the image caption",
	srcURL: "img/image-small.jpg",
	width: 1200,
	height: 800,
}

storiesOf("Image", module)
	.add("default", () => (
		<Image
			altText={imageData.altText}
			caption={imageData.caption}
			srcURL={imageData.srcURL}
			width={imageData.width}
			height={imageData.height}
		/>
	))
	.add("with space around caption", () => (
		<Image
			altText={imageData.altText}
			caption={imageData.caption}
			srcURL={imageData.srcURL}
			width={imageData.width}
			height={imageData.height}
			captionSpace="var(--space)"
		/>
	))
