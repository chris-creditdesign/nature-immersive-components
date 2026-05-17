import React from "react";

import ImageFrame from "./index";

export default {
	title: "ImageFrame",
	component: ImageFrame,
};

export const Default = () => (
	<ImageFrame
		frameNumerator={8}
		frameDenominator={12}
		src="img/image.jpg"
		alt="This is the alt text"
		width={1200}
		height={800}
	/>
);
