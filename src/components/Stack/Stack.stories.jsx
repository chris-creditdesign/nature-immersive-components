import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"

import Stack from "./index"
import Box from "../Box/index"

const TestContent = () => (
	<Fragment>
		<h3>Test</h3>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing
			elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae,
			id quasi neque veniam sequi doloremque, officia
			voluptatibus expedita optio repudiandae quos ad! Aut,
			rerum.
		</p>
		<p className="font-size:small-1 font-family:sans-serif">
			Footnote
		</p>
	</Fragment>
)

storiesOf("Layout/Stack", module)
	.add("default", () => (
		<Stack className="box">
			<div className="content" />
			<div className="content" />
			<div className="content" />
			<div className="content" />
			<div className="content" />
			<div className="content" />
			<div className="content" />
		</Stack>
	))
	.add("text", () => (
		<Stack>
			<TestContent />
		</Stack>
	))
	.add("text in a box", () => (
		<Box>
			<Stack>
				<TestContent />
			</Stack>
		</Box>
	))
	.add("text in a box invert", () => (
		<Box className="invert">
			<Stack>
				<TestContent />
			</Stack>
		</Box>
	))
