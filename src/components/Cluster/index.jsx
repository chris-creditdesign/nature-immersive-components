import React from "react"
import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Cluster
 *
 * Layout component ....
 */
const Cluster = ({
	children,
	elem,
	elemWrapper,
	justifyContent,
	className,
	space,
	splitAfter,
	dataContainer,
	ariaLabel,
}) => {
	const style = css`
		overflow: hidden;

		& > * {
			display: flex;
			flex-wrap: wrap;
			justify-content: ${justifyContent};
			align-items: center;
			margin: calc(${space} / 2 * -1);
		}

		& > * > * {
			margin: calc(${space} / 2);
		}

		${splitAfter} {
			flex-grow: 1;
		}
	`
	const Wrapper = jsx(elemWrapper, {}, children)
	return jsx(
		elem,
		{
			css: style,
			className,
			"data-container": dataContainer,
			"aria-label": ariaLabel,
		},
		Wrapper
	)
}

Cluster.defaultProps = {
	className: "",
	space: "var(--s-1)",
	justifyContent: "space-between",
	splitAfter: ".logo",
	elem: "div",
	elemWrapper: "div",
	dataContainer: null,
	ariaLabel: null,
}

Cluster.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Amount of padding to add */
	space: PropTypes.string,
	/** Flexbox justify-content property to arrange the contents of the Cluster */
	justifyContent: PropTypes.string,
	splitAfter: PropTypes.string,
	/** HTML element to render on the page */
	elem: PropTypes.string,
	/** HTML element to sit inside the element and wrap the contents
	 * 	Included to insulate adjacent content from the negative margin.
	 */
	elemWrapper: PropTypes.string,
	/** Data attribute used for GA link tracking */
	dataContainer: PropTypes.string,
	/** Optional aria-label attribute */
	ariaLabel: PropTypes.string,
}

export default Cluster
