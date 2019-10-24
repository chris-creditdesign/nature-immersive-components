import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Center
 *
 * Layout component to horrizontally center contents.
 * Padding can added be added left and right to stop the contents
 * pressing up against the screen sides when screen width is less
 * than the min width / measure.
 */
const Center = ({ children, className, measure, space, elem }) => {
	const style = css`
		box-sizing: content-box;
		margin-left: auto;
		margin-right: auto;
		max-width: ${measure};
		padding-left: ${space};
		padding-right: ${space};
	`

	return jsx(elem, { css: style, className }, children)
}

Center.defaultProps = {
	className: "",
	measure: "var(--measure)",
	space: "var(--space)",
	elem: "div",
}

Center.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Amount of padding to add left and right */
	space: PropTypes.string,
	/** The maximum width of the content */
	measure: PropTypes.string,
	/** HTML element to render on the page */
	elem: PropTypes.string,
}

export default Center
