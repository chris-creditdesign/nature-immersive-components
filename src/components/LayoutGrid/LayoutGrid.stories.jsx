import React from "react";

import LayoutGrid from "./index";

export default {
	title: "Layout components/LayoutGrid",
	component: LayoutGrid,
};

export const Default = () => (
	<LayoutGrid className="aboveMin">
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
	</LayoutGrid>
);

export const WithExtraSpace = () => (
	<LayoutGrid className="aboveMin" gridSpace="var(--s3)">
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
	</LayoutGrid>
);

export const WithLargerMinWith = () => (
	<LayoutGrid className="aboveMin" minWidth="30rem">
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
	</LayoutGrid>
);

export const WithSmallerMinWith = () => (
	<LayoutGrid className="aboveMin" minWidth="10rem">
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
		<div className="test-content" />
	</LayoutGrid>
);
