import React from "react";

import LayoutCenter from "./index";
import LayoutStack from "../LayoutStack";

export default {
	title: "Layout components/LayoutCenter",
	component: LayoutCenter,
};

export const Default = () => (
	<LayoutCenter>
		<div className="test-content" />
	</LayoutCenter>
);

export const SmallerMeasure = () => (
	<LayoutCenter centerMeasure="var(--measure-small)">
		<div className="test-content" />
	</LayoutCenter>
);

export const LargerMeasure = () => (
	<LayoutCenter centerMeasure="var(--measure-big)">
		<div className="test-content" />
	</LayoutCenter>
);

export const LargerSpace = () => (
	<LayoutCenter centerSpace="var(--s3)">
		<div className="test-content" />
	</LayoutCenter>
);

export const Combined = () => (
	<LayoutStack>
		<div>
			<LayoutCenter centerSpace="var(--s3)">
				<div className="test-content" />
			</LayoutCenter>
		</div>
		<div>
			<LayoutCenter centerMeasure="var(--measure-big)" centerSpace="none">
				<div className="test-content" />
			</LayoutCenter>
		</div>
		<div>
			<LayoutCenter centerSpace="var(--s3)">
				<div className="test-content" />
			</LayoutCenter>
		</div>
	</LayoutStack>
);
