import React from "react";

import YouTube from "./index";

export default {
	title: "YouTube",
	component: YouTube,
};

export const Default = () => (
	<YouTube
		id="nature-video-promo"
		placeHolderImgSrc="video/nature-video-promo.jpg"
		alt="Alt text"
		videoId="0ikMHETVJro"
		autoPlay
	/>
);
