import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## LayoutStack
 *
 * Layout component to stack content
 */
const LayoutStack = ({ children, className, stackSpace, elem }) =>
	createElement(
		elem,
		{
			className: `stack ${className}`,
			style: { "--stack-space": stackSpace },
		},
		children
	)

LayoutStack.defaultProps = {
	stackSpace: null,
	className: "",
	elem: "div",
}

LayoutStack.propTypes = {
	children: PropTypes.node.isRequired,
	stackSpace: PropTypes.string,
	className: PropTypes.string,
	elem: PropTypes.string,
}

export default LayoutStack
