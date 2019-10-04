import React from "react"
import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Grid
 *
 * Layout component used to arrange contents into a grid, surprisingly.
 *
 * TODO: A javascript solution for instances where the screen width is
 * smaller than the minWidth value. In this case the grid contents will
 * push off the screen.
 */
const Grid = ({ children, className, space, minWidth, elem }) => {
	const style = css`
		display: grid;
		grid-gap: ${space};
		grid-template-columns: ${`repeat(auto-fit, minmax(${minWidth}, 1fr))`};
	`

	return jsx(elem, { css: style, className }, children)
}

Grid.defaultProps = {
	className: "",
	space: "var(--s-1)",
	minWidth: "300px",
	elem: "div",
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Size of the the grid-gap */
	space: PropTypes.string,
	/** Minimum width of columns */
	minWidth: PropTypes.string,
	/** HTML element to render on the page */
	elem: PropTypes.string,
}

export default Grid
