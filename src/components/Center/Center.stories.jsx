import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"

import Center from "./index"
import Stack from "../Stack/index"

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

storiesOf("Layout/Center", module)
	.add("default", () => (
		<Center className="box">
			<div className="content" />
		</Center>
	))
	.add("with text in a Stack", () => (
		<Center>
			<Stack>
				<TestContent />
			</Stack>
		</Center>
	))
