import React from "react"
import PropTypes from "prop-types"

/**
 * ## Grid
 *
 * Layout component used to arrange contents into a grid, surprisingly.
 */
const LayoutGrid = ({ children, className, space, minWidth }) => (
	<div
		className={`grid js-grid ${className}`}
		style={{ "--space": space, "--min-width": minWidth }}
		data-min={minWidth}
	>
		{children}
	</div>
)

LayoutGrid.defaultProps = {
	className: "",
	space: "var(--space)",
	minWidth: "20rem",
}

LayoutGrid.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Size of the the grid-gap */
	space: PropTypes.string,
	/** Minimum width of columns */
	minWidth: PropTypes.string,
}

export default LayoutGrid
