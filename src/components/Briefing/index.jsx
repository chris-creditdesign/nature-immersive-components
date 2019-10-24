/* eslint-disable prettier/prettier */
import React from "react"
import LayoutSection from "../LayoutSection"
import Stack from "../Stack/index"
import SideLink from "../SideLink"

const Briefing = () => (
	<LayoutSection headline="Nature Briefing">
		<Stack>
			<p>Sign up for the daily <em>Nature Briefing</em> email newsletter</p>

			<p>Stay up to date with what matters in science and why, handpicked from <em>Nature</em> and other publications worldwide.</p>
		</Stack>

		<SideLink 
			eventLabel="nature briefing"
			href="https://www.nature.com/briefing/signup/"
			text="Sign Up"
		/>
	</LayoutSection>
)

export default Briefing
