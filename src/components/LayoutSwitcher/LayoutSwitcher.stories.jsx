import React from "react";

import LayoutSwitcher from "./index";

export default {
	title: "Layout components/LayoutSwitcher",
	component: LayoutSwitcher,
};

export const Default = () => (
	<LayoutSwitcher>
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutSwitcher>
);

export const WithMoreThan4Items = () => (
	<LayoutSwitcher>
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutSwitcher>
);

export const WithLargeSpace = () => (
	<LayoutSwitcher switcherSpace="var(--s4)">
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutSwitcher>
);

export const WithLargeMinWith = () => (
	<LayoutSwitcher switcherMinWidth="var(--measure-big)">
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
		<div className="test-content horizontal" />
	</LayoutSwitcher>
);
