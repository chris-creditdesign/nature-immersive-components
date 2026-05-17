import React from "react";

import LayoutBox from "./index";

export default {
	title: "Layout components/LayoutBox",
	component: LayoutBox,
};

export const Default = () => (
	<LayoutBox role="article">
		<div className="test-content" />
	</LayoutBox>
);

export const ExtraSpace = () => (
	<LayoutBox boxSpace="var(--s3)">
		<div className="test-content" />
	</LayoutBox>
);

export const NoSpace = () => (
	<LayoutBox boxSpace="none">
		<div className="test-content" />
	</LayoutBox>
);
