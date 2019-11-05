/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import Stack from "../Stack"
import LayoutGrid from "../LayoutGrid"
import ImageBasic from "../ImageBasic"

const SideImage = ({
	altText,
	caption,
	className,
	footnote,
	gridSpace,
	headline,
	height,
	href,
	srcURL,
	text,
	width,
	stackSpace,
}) => (
	<LayoutGrid className={className} gridSpace={gridSpace}>
		<ImageBasic
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
			stackSpace={stackSpace}
		/>
	</LayoutGrid>
)

SideImage.defaultProps = {
	footnote: null,
	gridSpace: null,
	stackSpace: null,
	className: "",
	caption: "",
}

SideImage.propTypes = {
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string,
	className: PropTypes.string,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	gridSpace: PropTypes.string,
	stackSpace: PropTypes.string,
}

export default SideImage
