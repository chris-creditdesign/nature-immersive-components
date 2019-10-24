/* eslint-disable react/no-danger */
const React = require("react")
const PropTypes = require("prop-types")

const Head = ({
	articleURL,
	dataLayer,
	description,
	doi,
	googleTagManager,
	immersiveURL,
	title,
	twitterHandle,
}) => {
	const dataLayerScript = `dataLayer =${JSON.stringify(dataLayer)};`
	const imageURL = `${immersiveURL}${doi}/public/img/${doi}.jpg`
	return (
		<head>
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
			/>

			<title>{title}</title>

			<meta name="description" content={description} />
			<meta
				property="og:url"
				content={`${articleURL}${doi}`}
			/>
			<meta property="og:type" content="article" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageURL} />

			<meta
				name="twitter:card"
				content="summary_large_image"
			/>
			<meta name="twitter:site" content={twitterHandle} />
			<meta name="twitter:title" content={title} />
			<meta
				name="twitter:description"
				content={description}
			/>
			<meta name="twitter:image" content={imageURL} />

			<script
				dangerouslySetInnerHTML={{
					__html: dataLayerScript,
				}}
			/>
			<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" />
			<script
				dangerouslySetInnerHTML={{
					__html: googleTagManager,
				}}
			/>
			<link href="public/css/fonts.css" rel="stylesheet" />
		</head>
	)
}

Head.propTypes = {
	articleURL: PropTypes.string.isRequired,
	dataLayer: PropTypes.array.isRequired,
	description: PropTypes.string.isRequired,
	doi: PropTypes.string.isRequired,
	googleTagManager: PropTypes.string.isRequired,
	immersiveURL: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	twitterHandle: PropTypes.string.isRequired,
}

export default Head
