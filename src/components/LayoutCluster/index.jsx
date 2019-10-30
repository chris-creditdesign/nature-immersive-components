import { createElement } from "react"
import PropTypes from "prop-types"

/**
 * ## LayoutCluster
 *
 * Layout component primarily used to add padding around its contents
 */
const LayoutCluster = ({
	children,
	className,
	clusterJustifyContent,
	clusterSpace,
	elem,
	innerWrapperElem,
}) => {
	const innerWrapper = createElement(innerWrapperElem, {}, children)

	return createElement(
		elem,
		{
			className: `cluster ${className}`,
			style: {
				"--cluster-space": clusterSpace,
				"--cluster-justify-content": clusterJustifyContent,
			},
		},
		innerWrapper
	)
}

LayoutCluster.defaultProps = {
	className: "",
	clusterJustifyContent: null,
	clusterSpace: null,
	elem: "div",
	innerWrapperElem: "div",
}

LayoutCluster.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Flexbox justify content property */
	clusterJustifyContent: PropTypes.string,
	/** Amount of margin to add */
	clusterSpace: PropTypes.string,
	/** Type of element to create */
	elem: PropTypes.string,
	/** Type of element to create, to sit inside the cluster */
	innerWrapperElem: PropTypes.string,
}

export default LayoutCluster
