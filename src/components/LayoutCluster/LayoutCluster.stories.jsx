import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutCluster from "./index"

storiesOf("Layout components/LayoutCluster", module)
	.add("default", () => (
		<LayoutCluster>
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutCluster>
	))
	.add("With flex end", () => (
		<LayoutCluster clusterJustifyContent="flex-end">
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutCluster>
	))
	.add("With space between", () => (
		<LayoutCluster clusterJustifyContent="space-between">
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutCluster>
	))
	.add("With space around", () => (
		<LayoutCluster clusterJustifyContent="space-around">
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutCluster>
	))
	.add("With extra space", () => (
		<LayoutCluster clusterSpace="var(--s3)">
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutCluster>
	))
	.add("With class name on inner elem", () => (
		<LayoutCluster innerWrapperElemClassName="just-a-test">
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutCluster>
	))
