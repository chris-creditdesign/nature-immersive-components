import React from "react"
import { storiesOf } from "@storybook/react"

import ImageFrame from "./index"

storiesOf("ImageFrame", module).add("default", () => (
	<ImageFrame
		frameNumerator={8}
		frameDenominator={12}
		src="img/image.jpg"
		alt="This is the alt text"
		width={1200}
		height={800}
	/>
))
