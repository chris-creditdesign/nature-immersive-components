import React from "react"
import { storiesOf } from "@storybook/react"

import Figure from "./index"

const figureData = {
	altText: "This is the image alt text",
	caption: "This is the image caption",
	type: "image",
	srcURL: "img/image-small.jpg",
}

storiesOf("Figure", module)
	.add("default", () => (
		<Figure
			altText={figureData.altText}
			caption={figureData.caption}
			type={figureData.type}
			srcURL={figureData.srcURL}
		/>
	))
	.add("with space around caption", () => (
		<Figure
			altText={figureData.altText}
			caption={figureData.caption}
			type={figureData.type}
			srcURL={figureData.srcURL}
			captionSpace="var(--space)"
		/>
	))
	.add("video", () => (
		<Figure
			altText={figureData.altText}
			caption={figureData.caption}
			type="video"
			srcURL="video/sintel-short-small.jpg"
			videoCaptions={{
				en: "English",
				es: "Español",
				de: "Deutsch",
			}}
		/>
	))
