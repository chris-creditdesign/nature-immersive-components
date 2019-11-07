import React from "react"
import PropTypes from "prop-types"

import LayoutCover from "../LayoutCover"
import LayoutCluster from "../LayoutCluster"

const CoverBackgroundImage = ({
	alt,
	children,
	coverHeight,
	coverSpace,
	elem,
	src,
}) => (
	<LayoutCover
		className="cover--with-background js-lazyload-cover-background-video"
		elem={elem}
		coverSpace={coverSpace}
		coverHeight={coverHeight}
	>
		<img className="cover__background" src={src} alt={alt} />
		{children}
		<LayoutCluster
			clusterJustifyContent="flex-end"
			innerWrapperElemClassName="js-button-container"
		></LayoutCluster>
	</LayoutCover>
)

CoverBackgroundImage.defaultProps = {
	elem: "div",
	coverSpace: null,
	coverHeight: null,
}

CoverBackgroundImage.propTypes = {
	children: PropTypes.node.isRequired,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	/** Type of element to create */
	elem: PropTypes.string,
	coverSpace: PropTypes.string,
	coverHeight: PropTypes.string,
}

export default CoverBackgroundImage
