import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## LayoutSwitcher
 *
 * Layout component primarily used to ....
 */
const LayoutSwitcher = ({
	children,
	className,
	id,
	switcherSpace,
	switcherMinWidth,
	elem,
	innerWrapperElem,
}) => {
	const innerWrapper = createElement(innerWrapperElem, {}, children)

	return createElement(
		elem,
		{
			className: `switcher ${className}`,
			id,
			style: {
				"--switcher-space": switcherSpace,
				"--switcher-min-width": switcherMinWidth,
			},
		},
		innerWrapper
	)
}

LayoutSwitcher.defaultProps = {
	className: "",
	id: "",
	switcherSpace: null,
	switcherMinWidth: null,
	elem: "div",
	innerWrapperElem: "div",
}

LayoutSwitcher.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	id: PropTypes.string,
	/** Amount of margin to add */
	switcherSpace: PropTypes.string,
	switcherMinWidth: PropTypes.string,
	/** Type of element to create */
	elem: PropTypes.string,
	/** Type of element to create, to sit inside the cluster */
	innerWrapperElem: PropTypes.string,
}

export default LayoutSwitcher
