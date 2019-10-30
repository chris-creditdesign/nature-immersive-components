import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## LayoutCenter
 *
 * Layout component to center content
 */
const LayoutCenter = ({
	children,
	className,
	centerSpace,
	centerMeasure,
	elem,
}) =>
	createElement(
		elem,
		{
			className: `center ${className}`,
			style: {
				"--center-space": centerSpace,
				"--center-measure": centerMeasure,
			},
		},
		children
	)

LayoutCenter.defaultProps = {
	centerMeasure: null,
	centerSpace: null,
	className: "",
	elem: "div",
}

LayoutCenter.propTypes = {
	centerMeasure: PropTypes.string,
	children: PropTypes.node.isRequired,
	centerSpace: PropTypes.string,
	className: PropTypes.string,
	elem: PropTypes.string,
}

export default LayoutCenter
