import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutCover from "./index"

storiesOf("Layout components/LayoutCover", module)
	.add("default", () => (
		<LayoutCover>
			<div className="centered test-content" />
		</LayoutCover>
	))
	.add("With three items", () => (
		<LayoutCover>
			<div className="test-content" />
			<div className="centered test-content" />
			<div className="test-content" />
		</LayoutCover>
	))
	.add("With top item", () => (
		<LayoutCover>
			<div className="test-content" />
			<div className="centered test-content" />
		</LayoutCover>
	))
	.add("With bottom", () => (
		<LayoutCover>
			<div className="centered test-content" />
			<div className="test-content" />
		</LayoutCover>
	))
	.add("With no space", () => (
		<LayoutCover coverSpace="none">
			<div className="test-content" />
			<div className="centered test-content" />
			<div className="test-content" />
		</LayoutCover>
	))
