import React from "react";

import LayoutFrame from "./index";

export default {
	title: "Layout components/LayoutFrame",
	component: LayoutFrame,
};

export const Default = () => (
	<LayoutFrame frameNumerator={8} frameDenominator={12}>
		<img
			src="img/image.jpg"
			alt="This is the alt text"
			width="1200"
			height="800"
			loading="lazy"
		/>
	</LayoutFrame>
);
