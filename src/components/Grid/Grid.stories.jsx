import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"

import Grid from "./index"
import Box from "../Box/index"
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

storiesOf("Layout/Grid", module)
	.add("default", () => (
		<Grid className="box">
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
		</Grid>
	))
	.add("with extra space", () => (
		<Box space="var(--s4)" className="box">
			<Grid space="var(--s4)">
				<div className="content"></div>
				<div className="content"></div>
				<div className="content"></div>
				<div className="content"></div>
				<div className="content"></div>
				<div className="content"></div>
				<div className="content"></div>
			</Grid>
		</Box>
	))
	.add("minWidth 100px", () => (
		<Grid className="box" minWidth="100px">
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
			<div className="content"></div>
		</Grid>
	))
	.add("text with extra space with surrounding Box", () => (
		<Box space="var(--s4)">
			<Grid space="var(--s4)">
				<Stack>
					<TestContent />
				</Stack>
				<Stack>
					<TestContent />
				</Stack>
				<Stack>
					<TestContent />
				</Stack>
				<Stack>
					<TestContent />
				</Stack>
			</Grid>
		</Box>
	))
	.add("text in boxes with surrounding Box", () => (
		<Box>
			<Grid>
				<Box className="invert">
					<Stack>
						<TestContent />
					</Stack>
				</Box>
				<Box>
					<Stack>
						<TestContent />
					</Stack>
				</Box>
				<Box>
					<Stack>
						<TestContent />
					</Stack>
				</Box>
				<Box>
					<Stack>
						<TestContent />
					</Stack>
				</Box>
			</Grid>
		</Box>
	))
