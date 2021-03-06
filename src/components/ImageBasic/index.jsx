import React from "react"
import PropTypes from "prop-types"

const ImageBasic = ({
	altText,
	caption,
	srcURL,
	className,
	captionSpace,
	width,
	height,
}) => (
	<figure
		className={`js-lazyload-img-basic ${className}`}
		style={{ "--caption-space": captionSpace }}
	>
		<img
			src={srcURL}
			alt={altText}
			intrinsicsize={`${width} x ${height}`}
			loading="lazy"
		/>

		{caption.length ? (
			<figcaption
				className="font-size:small-1 font-family:sans-serif"
				dangerouslySetInnerHTML={{ __html: caption }}
			></figcaption>
		) : null}
	</figure>
)

ImageBasic.defaultProps = {
	className: "",
	caption: "",
	captionSpace: "none",
}

ImageBasic.propTypes = {
	className: PropTypes.string,
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string,
	srcURL: PropTypes.string.isRequired,
	captionSpace: PropTypes.string,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default ImageBasic
