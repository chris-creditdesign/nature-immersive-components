import React from "react"
import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Stack
 *
 * Layout component used to space elements vertically.
 */
const Stack = ({ className, children, space, splitBefore, elem }) => {
	const style = css`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;

		& > * {
			margin: 0;
		}

		& > * + * {
			margin-top: ${space};
		}

		${splitBefore} {
			margin-top: auto;
		}
	`
	return jsx(elem, { css: style, className }, children)
}

Stack.defaultProps = {
	className: "",
	space: "var(--s-1)",
	splitBefore: ".footnote",
	elem: "div",
}

Stack.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Amount of margin between elements */
	space: PropTypes.string,
	/** CSS classname. This element will have `margin-top: auto` applied, causing it to be pushed to the bottom of the stack */
	splitBefore: PropTypes.string,
	/** HTML element to render on the page */
	elem: PropTypes.string,
}

export default Stack
