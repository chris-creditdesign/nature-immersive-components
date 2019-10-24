import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Cluster
 *
 * Layout component
 */
const Cluster = ({
	ariaLabel,
	children,
	className,
	elem,
	elemWrapper,
	hidden,
	id,
	justifyContent,
	space,
	splitAfter,
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
			hidden,
			id,
			"aria-label": ariaLabel,
		},
		Wrapper
	)
}

Cluster.defaultProps = {
	ariaLabel: null,
	className: "",
	elem: "div",
	elemWrapper: "div",
	hidden: false,
	id: "",
	justifyContent: "space-between",
	space: "var(--space)",
	splitAfter: ".logo",
}

Cluster.propTypes = {
	/** Optional aria-label attribute */
	ariaLabel: PropTypes.string,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	children: PropTypes.node.isRequired,
	/** HTML element to render on the page */
	elem: PropTypes.string,
	/** HTML element to sit inside the element and wrap the contents
	 * 	Included to insulate adjacent content from the negative margin.
	 */
	elemWrapper: PropTypes.string,
	hidden: PropTypes.bool,
	/** Optional id to add to outermost DOM element */
	id: PropTypes.string,
	/** Flexbox justify-content property to arrange the contents of the Cluster */
	justifyContent: PropTypes.string,
	/** Amount of padding to add */
	space: PropTypes.string,
	splitAfter: PropTypes.string,
}

export default Cluster
