import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## LayoutFrame
 *
 * Layout component
 */
const LayoutFrame = ({
	children,
	className,
	elem,
	frameNumerator,
	frameDenominator,
}) =>
	createElement(
		elem,
		{
			className: `frame ${className}`,
			style: {
				"--n": frameNumerator,
				"--d": frameDenominator,
			},
		},
		children
	)

LayoutFrame.defaultProps = {
	className: "",
	elem: "div",
}

LayoutFrame.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Type of element to create */
	elem: PropTypes.string,
	frameNumerator: PropTypes.number.isRequired,
	frameDenominator: PropTypes.number.isRequired,
}

export default LayoutFrame
