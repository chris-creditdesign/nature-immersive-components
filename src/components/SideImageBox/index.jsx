/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import Stack from "../Stack"
import LayoutGrid from "../LayoutGrid"
import LayoutBox from "../LayoutBox"
import ImageBasic from "../ImageBasic"

const SideImageBox = ({
	altText,
	caption,
	className,
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
	<LayoutBox className={`invert ${className}`} boxSpace={boxSpace}>
		<LayoutGrid gridSpace={gridSpace} className="aboveMin">
			<a
				href={href}
				data-track="click"
				data-event-category="body links"
				data-event-action="click"
			>
				<ImageBasic
					altText={altText}
					caption={caption}
					srcURL={srcURL}
					width={width}
					height={height}
				/>
			</a>

			<Stack
				stackSpace={stackSpace}
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
	caption: "",
	className: "",
}

SideImageBox.propTypes = {
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
	boxSpace: PropTypes.string,
	gridSpace: PropTypes.string,
	stackSpace: PropTypes.string,
}

export default SideImageBox
