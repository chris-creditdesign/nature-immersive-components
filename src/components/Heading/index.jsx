/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/format-date"
import LayoutCenter from "../LayoutCenter"
import LayoutStack from "../LayoutStack"

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
	const authorOrPhotographerOrDate =
		author.length || photographer.length || publishedAt

	return (
		<LayoutCenter className="heading" centerSpace="var(--s2)">
			<LayoutStack stackSpace="var(--s2)">
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
					<div>
						<LayoutStack stackSpace="var(--s-3)">
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
						</LayoutStack>
					</div>
				) : null}
			</LayoutStack>
		</LayoutCenter>
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
