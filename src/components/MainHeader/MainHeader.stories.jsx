import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"

import MainHeader from "./index"
import DefSVG from "../DefSVG/index"
import articleData from "../../data/content/article-data.json"

storiesOf("MainHeader", module).add("default", () => (
	<Fragment>
		<DefSVG />
		<MainHeader {...articleData} />
	</Fragment>
))
