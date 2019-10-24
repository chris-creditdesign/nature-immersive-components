import React from "react"
import { storiesOf } from "@storybook/react"

import Box from "./index"

storiesOf("Layout/Box", module)
	.add("default", () => (
		<Box className="box" role="article">
			<div className="content" />
		</Box>
	))
	.add("extra space", () => (
		<Box className="box" space="var(--s3)">
			<div className="content" />
		</Box>
	))
	.add("no space", () => (
		<Box className="box" space="none">
			<div className="content" />
		</Box>
	))
