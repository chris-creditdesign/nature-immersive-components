import React from "react"
import { storiesOf } from "@storybook/react"

import YouTube from "./index"

storiesOf("YouTube", module).add("default", () => (
	<YouTube
		id="nature-video-promo"
		placeHolderImgSrc="video/nature-video-promo.jpg"
		alt="Alt text"
		videoId="0ikMHETVJro"
		autoPlay
	/>
))
