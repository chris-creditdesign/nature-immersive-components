import React from "react"
import PropTypes from "prop-types"
import { css } from "@emotion/core"
import formatDate from "../../utils/format-date"
import Stack from "../Stack/index"
import Center from "../Center/index"

/**
 * ## Heading
 *
 */
const Heading = ({
	author,
	headline,
	photographer,
	publishedAt,
	publishedAtString,
	stand,
}) => {
	const style = css`
		text-align: center;

		& > * {
			margin-left: auto;
			margin-right: auto;
		}

		h1 {
			/* Smaller measure for headlines*/
			max-width: 20ch;
		}

		time {
			font-family: var(--sans-serif-font);
			font-size: var(--s-1);
			text-transform: uppercase;
			letter-spacing: 0.05em;
			/* Even out the line height for the date */
			line-height: 1rem;
		}
	`
	const authorOrPhotographerOrDate =
		author.length || photographer.length || publishedAt

	return (
		<Center measure="none" space="var(--s2)">
			<Stack css={style} space="var(--s2)">
				<h1
					dangerouslySetInnerHTML={{
						__html: headline,
					}}
				/>
				{stand.length ? (
					<p
						dangerouslySetInnerHTML={{
							__html: stand,
						}}
					/>
				) : null}

				{authorOrPhotographerOrDate ? (
					<Stack space="var(--s-3)">
						{author.length ? (
							<p
								className="font-weight:bold"
								dangerouslySetInnerHTML={{
									__html: author,
								}}
							/>
						) : null}

						{photographer.length ? (
							<p
								className="font-weight:bold"
								dangerouslySetInnerHTML={{
									__html: photographer,
								}}
							/>
						) : null}

						{publishedAt ? (
							<time
								itemProp="datePublished"
								dateTime={
									publishedAtString ||
									null
								}
							>
								{formatDate(
									publishedAt
								)}
							</time>
						) : null}
					</Stack>
				) : null}
			</Stack>
		</Center>
	)
}

Heading.defaultProps = {
	author: "",
	photographer: "",
	publishedAt: 0,
	publishedAtString: "",
	stand: "",
}

Heading.propTypes = {
	author: PropTypes.string,
	headline: PropTypes.string.isRequired,
	photographer: PropTypes.string,
	publishedAt: PropTypes.number,
	publishedAtString: PropTypes.string,
	stand: PropTypes.string,
}

export default Heading
