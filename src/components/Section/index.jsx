import React from "react"
import PropTypes from "prop-types"

import LayoutCenter from "../LayoutCenter"
import LayoutStack from "../LayoutStack"

const Section = ({
	headline,
	className,
	children,
	centerMeasure,
	centerSpace,
	stackSpace,
}) => (
	<LayoutCenter
		elem="section"
		className={className}
		centerSpace={centerSpace}
		centerMeasure={centerMeasure}
	>
		<LayoutStack stackSpace={stackSpace}>
			{headline.length ? (
				<h2 className="border-above">{headline}</h2>
			) : null}
			{children}
		</LayoutStack>
	</LayoutCenter>
)

Section.defaultProps = {
	headline: "",
	className: "",
	centerMeasure: null,
	centerSpace: null,
	stackSpace: null,
}

Section.propTypes = {
	headline: PropTypes.string,
	className: PropTypes.string,
	centerMeasure: PropTypes.string,
	children: PropTypes.node.isRequired,
	centerSpace: PropTypes.string,
	stackSpace: PropTypes.string,
}

export default Section
