import React from "react"
import { storiesOf } from "@storybook/react"

import SideLink from "./index"

storiesOf("SideLink", module).add("default", () => (
	<SideLink
		eventLabel="nature briefing"
		href="https://www.nature.com/briefing/signup/"
		text="Sign Up"
	/>
))
