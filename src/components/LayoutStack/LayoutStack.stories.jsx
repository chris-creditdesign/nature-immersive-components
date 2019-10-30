import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutStack from "./index"

storiesOf("Layout components/LayoutStack", module)
	.add("default", () => (
		<LayoutStack>
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
		</LayoutStack>
	))
	.add("Width extra space", () => (
		<LayoutStack stackSpace="var(--s3)">
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
			<div className="test-content" />
		</LayoutStack>
	))
