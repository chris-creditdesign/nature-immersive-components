import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/format-date"
import StyledHeader from "./styles"

/**
 * Heading
 *
 * @param {*} param0
 */
const Heading = ({
	author,
	headline,
	photographer,
	publishedAt,
	publishedAtString,
	stand,
}) => (
	<StyledHeader>
		<h1 dangerouslySetInnerHTML={{ __html: headline }} />
		<p dangerouslySetInnerHTML={{ __html: stand }} />

		{author.length ? (
			<p dangerouslySetInnerHTML={{ __html: author }} />
		) : null}

		{photographer.length ? (
			<p
				dangerouslySetInnerHTML={{
					__html: photographer,
				}}
			/>
		) : null}

		{publishedAt ? (
			<time
				itemProp="datePublished"
				dateTime={publishedAtString || null}
			>
				{formatDate(publishedAt)}
			</time>
		) : null}
	</StyledHeader>
)

Heading.propTypes = {
	author: PropTypes.string.isRequired,
	headline: PropTypes.string.isRequired,
	photographer: PropTypes.string.isRequired,
	publishedAt: PropTypes.number.isRequired,
	publishedAtString: PropTypes.string.isRequired,
	stand: PropTypes.string.isRequired,
}

export default Heading
