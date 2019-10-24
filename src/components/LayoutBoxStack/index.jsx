/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import LayoutStack from "../LayoutStack"
import Box from "../Box"

const LayoutBoxStack = ({
	altText,
	caption,
	footnote,
	headline,
	href,
	srcURL,
	text,
}) => (
	<Box className="invert">
		<LayoutStack
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

LayoutBoxStack.defaultProps = {
	altText: null,
	caption: null,
	footnote: null,
	srcURL: null,
}

LayoutBoxStack.propTypes = {
	altText: PropTypes.string,
	caption: PropTypes.string,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string,
	text: PropTypes.string.isRequired,
}
export default LayoutBoxStack
