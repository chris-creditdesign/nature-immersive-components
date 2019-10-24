import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Box
 *
 * Layout component primarily used to add padding around its contents
 */
const Box = ({ children, className, space, elem, role }) => {
	const style = css`
		padding: ${space};
	`
	return jsx(elem, { css: style, className, role }, children)
}

Box.defaultProps = {
	className: "",
	space: "var(--space)",
	elem: "div",
	role: null,
}

Box.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Amount of padding to add */
	space: PropTypes.string,
	/** HTML element to render on the page */
	elem: PropTypes.string,
	/** Optional add an ARIA role */
	role: PropTypes.string,
}

export default Box
