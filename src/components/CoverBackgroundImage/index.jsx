import React from "react"
import PropTypes from "prop-types"

import LayoutCover from "../LayoutCover"

const CoverBackgroundImage = ({
	children,
	src,
	alt,
	elem,
	coverSpace,
	coverHeight,
}) => (
	<LayoutCover
		className="cover--with-background"
		elem={elem}
		coverSpace={coverSpace}
		coverHeight={coverHeight}
	>
		<img
			className="cover__background"
			src={src}
			alt={alt}
			loading="lazy"
		/>
		{children}
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
