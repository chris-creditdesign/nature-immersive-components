import React from "react"
import { storiesOf } from "@storybook/react"

import ImageLarge from "./index"

const imageData = {
	altText: "This is the image alt text",
	caption: "This is the image caption",
	srcURL: "img/image-small.jpg",
	width: 1200,
	height: 800,
}

storiesOf("ImageLarge", module)
	.add("default", () => (
		<ImageLarge
			altText={imageData.altText}
			caption={imageData.caption}
			srcURL={imageData.srcURL}
			width={imageData.width}
			height={imageData.height}
		/>
	))
	.add("with space around caption", () => (
		<ImageLarge
			altText={imageData.altText}
			caption={imageData.caption}
			srcURL={imageData.srcURL}
			width={imageData.width}
			height={imageData.height}
			captionSpace="var(--space)"
		/>
	))
