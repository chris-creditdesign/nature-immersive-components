import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"

import YouTube from "./index"
import YouTubeLoader from "./YouTubeLoader"

storiesOf("YouTube", module).add("default", () => (
	<Fragment>
		<YouTubeLoader />
		<YouTube
			id="nature-video-promo"
			placeHolderImgSrc="video/nature-video-promo.jpg"
			alt="Alt text"
			videoId="0ikMHETVJro"
			autoPlay
		/>
	</Fragment>
))
