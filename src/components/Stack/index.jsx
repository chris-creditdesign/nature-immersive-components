/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import ImageBasic from "../ImageBasic"
import LayoutStack from "../LayoutStack"

const Stack = ({
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
	stackSpace,
}) => (
	<LayoutStack
		className={`content-stack ${className}`}
		stackSpace={stackSpace}
	>
		{srcURL ? (
			<ImageBasic
				altText={altText}
				caption={caption}
				srcURL={srcURL}
				width={width}
				height={height}
			/>
		) : null}

		<h3>
			<a
				href={href}
				data-track="click"
				data-event-category="body links"
				data-event-action="click"
				data-event-label={headline}
				dangerouslySetInnerHTML={{
					__html: headline,
				}}
			/>
		</h3>

		<p
			dangerouslySetInnerHTML={{
				__html: text,
			}}
		/>

		{footnote ? (
			<p
				className="font-size:small-1 font-family:sans-serif"
				dangerouslySetInnerHTML={{
					__html: footnote,
				}}
			/>
		) : null}
	</LayoutStack>
)

Stack.defaultProps = {
	altText: null,
	caption: null,
	className: "",
	footnote: null,
	srcURL: null,
	width: 0,
	height: 0,
	stackSpace: null,
}

Stack.propTypes = {
	altText: PropTypes.string,
	caption: PropTypes.string,
	className: PropTypes.string,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string,
	text: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	stackSpace: PropTypes.string,
}

export default Stack
