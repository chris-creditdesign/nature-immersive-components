import React from "react"
import PropTypes from "prop-types"

const YouTube = ({ id, ratio, videoId, placeHolderImgSrc, alt, autoPlay }) => (
	<div
		className="js-load-youtube"
		data-video-id={videoId}
		data-ratio={ratio}
		data-auto-play={autoPlay}
		data-id={id}
	>
		<figure id={id}>
			<img src={placeHolderImgSrc} alt={alt} />
			<figcaption className="font-size:small-1 font-family:sans-serif">
				View the video{" "}
				<a href={`https://youtu.be/${videoId}`}>here</a>
				.
			</figcaption>
		</figure>
	</div>
)

YouTube.defaultProps = {
	ratio: 0.5625,
	autoPlay: false,
}

YouTube.propTypes = {
	id: PropTypes.string.isRequired,
	ratio: PropTypes.number,
	videoId: PropTypes.string.isRequired,
	placeHolderImgSrc: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	autoPlay: PropTypes.bool,
}

export default YouTube
