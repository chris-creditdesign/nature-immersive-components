import React from "react"
import PropTypes from "prop-types"

import LayoutFrame from "../LayoutFrame"

const ImageFrame = ({
	frameNumerator,
	frameDenominator,
	src,
	alt,
	width,
	height,
}) => (
	<LayoutFrame
		frameNumerator={frameNumerator}
		frameDenominator={frameDenominator}
	>
		<img
			src={src}
			alt={alt}
			width={width}
			height={height}
			loading="lazy"
		/>
	</LayoutFrame>
)

ImageFrame.propTypes = {
	frameNumerator: PropTypes.number.isRequired,
	frameDenominator: PropTypes.number.isRequired,
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default ImageFrame
