/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import Figure from "../Figure"
import GALink from "../GALink"
import Stack from "../Stack"

const LayoutStack = ({
	altText,
	caption,
	footnote,
	headline,
	href,
	srcURL,
	text,
}) => {
	const style = css`
		color: inherit !important;

		h3 {
			margin: 0;
		}
	`

	return (
		<Stack>
			{srcURL ? (
				<Figure
					altText={altText}
					caption={caption}
					type="image"
					srcURL={srcURL}
				/>
			) : null}

			<GALink
				eventCategory="external links"
				eventLabel={headline}
				href={href}
				style={style}
			>
				<h3>{headline}</h3>
			</GALink>
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
		</Stack>
	)
}

LayoutStack.defaultProps = {
	altText: null,
	caption: null,
	footnote: null,
	srcURL: null,
}

LayoutStack.propTypes = {
	altText: PropTypes.string,
	caption: PropTypes.string,
	footnote: PropTypes.string,
	headline: PropTypes.string.isRequired,
	href: PropTypes.string.isRequired,
	srcURL: PropTypes.string,
	text: PropTypes.string.isRequired,
}

export default LayoutStack
