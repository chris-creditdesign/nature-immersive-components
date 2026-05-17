import React from "react";

import LayoutStack from "./index";

export default {
	title: "Layout components/LayoutStack",
	component: LayoutStack,
};

export const Default = () => (
	<LayoutStack>
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
	</LayoutStack>
);

export const WidthExtraSpace = () => (
	<LayoutStack stackSpace="var(--s3)">
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
	</LayoutStack>
);
