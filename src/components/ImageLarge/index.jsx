import React from "react"
import PropTypes from "prop-types"

const ImageLarge = ({
	altText,
	caption,
	srcURL,
	className,
	captionSpace,
	width,
	height,
}) => (
	<figure
		className={`js-lazyload-img-large ${className}`}
		style={{ "--caption-space": captionSpace }}
	>
		<picture>
			<img
				src={srcURL}
				alt={altText}
				intrinsicsize={`${width} x ${height}`}
				style={{ width: "100%" }}
				loading="lazy"
			/>
		</picture>
		<figcaption
			className="font-size:small-1 font-family:sans-serif"
			dangerouslySetInnerHTML={{ __html: caption }}
		></figcaption>
	</figure>
)

ImageLarge.defaultProps = {
	className: "",
	caption: "",
	captionSpace: "none",
}

ImageLarge.propTypes = {
	className: PropTypes.string,
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string,
	srcURL: PropTypes.string.isRequired,
	captionSpace: PropTypes.string,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
}

export default ImageLarge
