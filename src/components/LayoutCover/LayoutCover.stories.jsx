import React from "react";

import LayoutCover from "./index";

export default {
	title: "Layout components/LayoutCover",
	component: LayoutCover,
};

export const Default = () => (
	<LayoutCover>
		<div className="centered test-content" />
	</LayoutCover>
);

export const WithThreeItems = () => (
	<LayoutCover>
		<div className="test-content" />
		<div className="centered test-content" />
		<div className="test-content" />
	</LayoutCover>
);

export const WithTopItem = () => (
	<LayoutCover>
		<div className="test-content" />
		<div className="centered test-content" />
	</LayoutCover>
);

export const WithBottom = () => (
	<LayoutCover>
		<div className="centered test-content" />
		<div className="test-content" />
	</LayoutCover>
);

export const WithNoSpace = () => (
	<LayoutCover coverSpace="none">
		<div className="test-content" />
		<div className="centered test-content" />
		<div className="test-content" />
	</LayoutCover>
);
