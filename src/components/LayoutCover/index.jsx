import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## LayoutCover
 *
 * Layout component to vertically center elements
 */
const LayoutCover = ({ children, className, elem, coverSpace, coverHeight }) =>
	createElement(
		elem,
		{
			className: `cover ${className}`,
			style: {
				"--cover-space": coverSpace,
				"--cover-height": coverHeight,
			},
		},
		children
	)

LayoutCover.defaultProps = {
	className: "",
	elem: "div",
	coverSpace: null,
	coverHeight: null,
}

LayoutCover.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Type of element to create */
	elem: PropTypes.string,
	coverSpace: PropTypes.string,
	coverHeight: PropTypes.string,
}

export default LayoutCover
