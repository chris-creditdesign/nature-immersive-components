/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import LayoutBox from "../LayoutBox"
import Stack from "../Stack"

const StackBox = ({
	altText,
	caption,
	footnote,
	headline,
	href,
	srcURL,
	text,
	width,
	height,
	boxSpace,
	stackSpace,
}) => (
	<LayoutBox className="invert" boxSpace={boxSpace}>
		<Stack
			altText={altText}
			caption={caption}
			footnote={footnote}
			headline={headline}
			href={href}
			srcURL={srcURL}
			text={text}
			width={width}
			height={height}
			stackSpace={stackSpace}
		/>
	</LayoutBox>
)

StackBox.defaultProps = {
	altText: "",
	caption: "",
	footnote: "",
	srcURL: "",
	width: 0,
	height: 0,
	boxSpace: null,
	stackSpace: null,
}

StackBox.propTypes = {
	altText: PropTypes.string,
	caption: PropTypes.string,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string,
	text: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	boxSpace: PropTypes.string,
	stackSpace: PropTypes.string,
}

export default StackBox
