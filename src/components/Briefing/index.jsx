import React from "react"

import LayoutCluster from "../LayoutCluster"

const Briefing = () => (
	<>
		<p>
			Sign up for the daily <em>Nature Briefing</em> email
			newsletter
		</p>

		<p>
			Stay up to date with what matters in science and why,
			handpicked from <em>Nature</em> and other publications
			worldwide.
		</p>

		<LayoutCluster clusterJustifyContent="flex-end">
			<a
				href="https://www.nature.com/briefing/signup/"
				className="box box__link invert font-family:sans-serif"
				data-track="click"
				data-event-category="body links"
				data-event-action="click"
				data-event-label="nature briefing"
			>
				Sign up
			</a>
		</LayoutCluster>
	</>
)

export default Briefing
