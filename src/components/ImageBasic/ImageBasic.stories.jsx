import React from "react";

import ImageBasic from "./index";

const imageData = {
	altText: "This is the image alt text",
	caption: "This is the image caption",
	srcURL: "img/image-small.jpg",
	width: 1200,
	height: 800,
};

export default {
	title: "ImageBasic",
	component: ImageBasic,
};

export const Default = () => (
	<ImageBasic
		altText={imageData.altText}
		caption={imageData.caption}
		srcURL={imageData.srcURL}
		width={imageData.width}
		height={imageData.height}
	/>
);

export const WithSpaceAroundCaption = () => (
	<ImageBasic
		altText={imageData.altText}
		caption={imageData.caption}
		srcURL={imageData.srcURL}
		width={imageData.width}
		height={imageData.height}
		captionSpace="var(--space)"
	/>
);
