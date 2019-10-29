/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import LayoutStack from "../LayoutStack"

const LayoutBoxStack = ({ altText, caption, footnote, headline, href, srcURL, text, width, height }) => (
	<div className="box invert layout-stack-box">
		<LayoutStack
			altText={altText}
			caption={caption}
			footnote={footnote}
			headline={headline}
			href={href}
			srcURL={srcURL}
			text={text}
			width={width}
			height={height}
		/>
	</div>
)

LayoutBoxStack.defaultProps = {
	altText: null,
	caption: null,
	footnote: null,
	srcURL: null,
	width: 0,
	height: 0,
}

LayoutBoxStack.propTypes = {
	altText: PropTypes.string,
	caption: PropTypes.string,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string,
	text: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
}

export default LayoutBoxStack
