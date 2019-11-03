import React from "react"
import { storiesOf } from "@storybook/react"

import LayoutSwitcher from "./index"

storiesOf("Layout components/LayoutSwitcher", module)
	.add("default", () => (
		<LayoutSwitcher>
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutSwitcher>
	))
	.add("With more than 4 items", () => (
		<LayoutSwitcher>
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutSwitcher>
	))
	.add("With large space", () => (
		<LayoutSwitcher switcherSpace="var(--s4)">
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutSwitcher>
	))
	.add("With large min with", () => (
		<LayoutSwitcher switcherMinWidth="var(--measure-big)">
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
			<div className="test-content horizontal" />
		</LayoutSwitcher>
	))
