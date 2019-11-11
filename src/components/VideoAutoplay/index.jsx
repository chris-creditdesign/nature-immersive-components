import React from "react"
import PropTypes from "prop-types"

const VideoAutoplay = ({
	altText,
	caption,
	srcURL,
	className,
	captionSpace,
}) => (
	<figure
		className={`js-lazyload-video-autoplay ${className}`}
		style={{ "--caption-space": captionSpace }}
	>
		<img src={srcURL} alt={altText} />

		{caption.length ? (
			<figcaption
				className="font-size:small-1 font-family:sans-serif"
				dangerouslySetInnerHTML={{ __html: caption }}
			></figcaption>
		) : null}
	</figure>
)

VideoAutoplay.defaultProps = {
	className: "",
	caption: "",
	captionSpace: "none",
}

VideoAutoplay.propTypes = {
	className: PropTypes.string,
	altText: PropTypes.string.isRequired,
	caption: PropTypes.string,
	srcURL: PropTypes.string.isRequired,
	captionSpace: PropTypes.string,
}

export default VideoAutoplay
