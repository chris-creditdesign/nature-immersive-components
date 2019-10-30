/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import Stack from "../Stack"
import LayoutGrid from "../LayoutGrid"
import LayoutBox from "../LayoutBox"
import Image from "../Image"

const SideImageBox = ({
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
	gridSpace,
	stackSpace,
}) => (
	<LayoutBox className="invert" boxSpace={boxSpace}>
		<LayoutGrid gridSpace={gridSpace} className="aboveMin">
			<Image
				altText={altText}
				caption={caption}
				srcURL={srcURL}
				width={width}
				height={height}
			/>

			<Stack
				space={stackSpace}
				headline={headline}
				href={href}
				text={text}
				footnote={footnote}
			/>
		</LayoutGrid>
	</LayoutBox>
)

SideImageBox.defaultProps = {
	footnote: null,
	boxSpace: null,
	gridSpace: null,
	stackSpace: null,
}

SideImageBox.propTypes = {
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	boxSpace: PropTypes.string,
	gridSpace: PropTypes.string,
	stackSpace: PropTypes.string,
}

export default SideImageBox
