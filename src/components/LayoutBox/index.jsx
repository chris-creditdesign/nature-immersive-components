import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## LayoutBox
 *
 * Layout component primarily used to add padding around its contents
 */
const LayoutBox = ({ children, className, elem, role, boxSpace }) =>
	createElement(
		elem,
		{
			className: `box ${className}`,
			style: { "--box-space": boxSpace },
			role,
		},
		children
	)

LayoutBox.defaultProps = {
	className: "",
	elem: "div",
	role: null,
	boxSpace: null,
}

LayoutBox.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Type of element to create */
	elem: PropTypes.string,
	/** Optional to add an ARIA role */
	role: PropTypes.string,
	/** Amount of padding to add */
	boxSpace: PropTypes.string,
}

export default LayoutBox
