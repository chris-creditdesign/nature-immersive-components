import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## Grid
 *
 * Layout component used to arrange contents into a grid, surprisingly.
 */
const LayoutGrid = ({ children, className, gridSpace, minWidth, elem }) =>
	createElement(
		elem,
		{
			className: `grid js-grid ${className}`,
			style: {
				"--grid-space": gridSpace,
				"--grid-min-width": minWidth,
			},
			"data-min": minWidth,
		},
		children
	)

LayoutGrid.defaultProps = {
	className: "",
	gridSpace: null,
	minWidth: null,
	elem: "div",
}

LayoutGrid.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Size of the the grid-gap */
	gridSpace: PropTypes.string,
	/** Minimum width of columns */
	minWidth: PropTypes.string,
	/** Type of element to create */
	elem: PropTypes.string,
}

export default LayoutGrid
