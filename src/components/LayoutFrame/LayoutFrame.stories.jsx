import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutFrame from "./index"

storiesOf("Layout components/LayoutFrame", module).add("default", () => (
	<LayoutFrame frameNumerator={8} frameDenominator={12}>
		<img
			src="img/image.jpg"
			alt="This is the alt text"
			width="1200"
			height="800"
			loading="lazy"
		/>
	</LayoutFrame>
))
