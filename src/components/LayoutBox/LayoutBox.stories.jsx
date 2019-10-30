import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutBox from "./index"

storiesOf("Layout components/LayoutBox", module)
	.add("default", () => (
		<LayoutBox role="article">
			<div className="test-content" />
		</LayoutBox>
	))
	.add("extra space", () => (
		<LayoutBox boxSpace="var(--s3)">
			<div className="test-content" />
		</LayoutBox>
	))
	.add("no space", () => (
		<LayoutBox boxSpace="none">
			<div className="test-content" />
		</LayoutBox>
	))
