/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import LayoutSideImage from "../LayoutSideImage"
import Box from "../Box"

const LayoutBoxSideImage = ({
	altText,
	caption,
	footnote,
	headline,
	href,
	srcURL,
	text,
}) => (
	<Box className="invert">
		<LayoutSideImage
			altText={altText}
			caption={caption}
			footnote={footnote}
			headline={headline}
			href={href}
			srcURL={srcURL}
			text={text}
		/>
	</Box>
)

LayoutBoxSideImage.propTypes = {
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	footnote: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default LayoutBoxSideImage
