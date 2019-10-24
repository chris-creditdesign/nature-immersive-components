/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import LayoutStack from "../LayoutStack"
import Figure from "../Figure"
import Grid from "../Grid"

const LayoutSideImage = ({
	altText,
	caption,
	footnote,
	headline,
	href,
	srcURL,
	text,
}) => (
	<Grid space="var(--s0)">
		<Figure
			altText={altText}
			caption={caption}
			type="image"
			srcURL={srcURL}
		/>

		<LayoutStack
			headline={headline}
			href={href}
			text={text}
			footnote={footnote}
		/>
	</Grid>
)

LayoutSideImage.defaultProps = {
	footnote: null,
}

LayoutSideImage.propTypes = {
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
}

export default LayoutSideImage
