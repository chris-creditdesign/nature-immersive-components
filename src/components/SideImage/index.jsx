/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import Stack from "../Stack"
import LayoutGrid from "../LayoutGrid"
import Image from "../Image"

const SideImage = ({
	altText,
	caption,
	footnote,
	gridSpace,
	headline,
	height,
	href,
	srcURL,
	text,
	width,
}) => (
	<LayoutGrid gridSpace={gridSpace} className="aboveMin">
		<Image
			altText={altText}
			caption={caption}
			srcURL={srcURL}
			width={width}
			height={height}
		/>

		<Stack
			headline={headline}
			href={href}
			text={text}
			footnote={footnote}
		/>
	</LayoutGrid>
)

SideImage.defaultProps = {
	footnote: null,
	gridSpace: null,
}

SideImage.propTypes = {
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	gridSpace: PropTypes.string,
}

export default SideImage
