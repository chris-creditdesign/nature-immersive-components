import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutCenter from "./index"
import LayoutStack from "../LayoutStack"

storiesOf("Layout components/LayoutCenter", module)
	.add("default", () => (
		<LayoutCenter>
			<div className="test-content" />
		</LayoutCenter>
	))
	.add("Smaller measure", () => (
		<LayoutCenter centerMeasure="var(--measure-small)">
			<div className="test-content" />
		</LayoutCenter>
	))
	.add("Larger measure", () => (
		<LayoutCenter centerMeasure="var(--measure-big)">
			<div className="test-content" />
		</LayoutCenter>
	))
	.add("Larger space", () => (
		<LayoutCenter centerSpace="var(--s3)">
			<div className="test-content" />
		</LayoutCenter>
	))
	.add("Combined", () => (
		<LayoutStack>
			<div>
				<LayoutCenter centerSpace="var(--s3)">
					<div className="test-content" />
				</LayoutCenter>
			</div>
			<div>
				<LayoutCenter
					centerMeasure="var(--measure-big)"
					centerSpace="none"
				>
					<div className="test-content" />
				</LayoutCenter>
			</div>
			<div>
				<LayoutCenter centerSpace="var(--s3)">
					<div className="test-content" />
				</LayoutCenter>
			</div>
		</LayoutStack>
	))
