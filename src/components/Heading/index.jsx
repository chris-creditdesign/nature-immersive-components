/* eslint-disable react/no-danger */
import React from "react"
import PropTypes from "prop-types"
import formatDate from "../../utils/format-date"

/**
 * ## Heading
 *
 */
const Heading = ({ author, headline, photographer, publishedAt, publishedAtString, stand }) => {
	const authorOrPhotographerOrDate = author.length || photographer.length || publishedAt

	return (
		<section className="center heading" style={{ "--measure": "none", "--space": "var(--s2)" }}>
			<div className="stack" style={{ "--space": "var(--s2)" }}>
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
						<div className="stack" style={{ "--space": "var(--s-3)" }}>
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
									dateTime={publishedAtString || null}
								>
									{formatDate(publishedAt)}
								</time>
							) : null}
						</div>
					</div>
				) : null}
			</div>
		</section>
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
