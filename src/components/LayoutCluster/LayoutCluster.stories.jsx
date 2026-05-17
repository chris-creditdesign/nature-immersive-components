import React from "react";

import LayoutCluster from "./index";

export default {
	title: "Layout components/LayoutCluster",
	component: LayoutCluster,
};

export const Default = () => (
	<LayoutCluster>
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutCluster>
);

export const WithFlexEnd = () => (
	<LayoutCluster clusterJustifyContent="flex-end">
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutCluster>
);

export const WithSpaceBetween = () => (
	<LayoutCluster clusterJustifyContent="space-between">
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutCluster>
);

export const WithSpaceAround = () => (
	<LayoutCluster clusterJustifyContent="space-around">
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutCluster>
);

export const WithExtraSpace = () => (
	<LayoutCluster clusterSpace="var(--s3)">
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutCluster>
);

export const WithClassNameOnInnerElem = () => (
	<LayoutCluster innerWrapperElemClassName="just-a-test">
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutCluster>
);
