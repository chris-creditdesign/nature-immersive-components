import React from "react"
import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Box
 *
 * Layout component primarily used to add padding around its contents
 */
const Box = ({ children, className, space, elem }) => {
	const style = css`
		padding: ${space};
	`
	return jsx(elem, { css: style, className }, children)
}

Box.defaultProps = {
	className: "",
	space: "var(--s-1)",
	elem: "div",
}

Box.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Amount of padding to add */
	space: PropTypes.string,
	/** HTML element to render on the page */
	elem: PropTypes.string,
}

export default Box
