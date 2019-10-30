import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutGrid from "./index"

storiesOf("Layout components/LayoutGrid", module)
	.add("default", () => (
		<LayoutGrid className="aboveMin">
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
		</LayoutGrid>
	))
	.add("With extra space", () => (
		<LayoutGrid className="aboveMin" gridSpace="var(--s3)">
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
		</LayoutGrid>
	))
	.add("With larger min with", () => (
		<LayoutGrid className="aboveMin" minWidth="30rem">
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
		</LayoutGrid>
	))
	.add("With smaller min with", () => (
		<LayoutGrid className="aboveMin" minWidth="10rem">
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
		</LayoutGrid>
	))
