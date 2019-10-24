/* eslint-disable jsx-a11y/media-has-caption */
import React from "react"
import PropTypes from "prop-types"
import VideoTracks from "./VideoTracks"

const Video = ({ srcURL, videoCaptions }) => {
	// Get the image's source url and remove '-small'
	const URL = srcURL.replace(/-small/, "")
	const srcWebm = `${URL.slice(0, -4)}.webm`
	const srcMp4 = `${URL.slice(0, -4)}.mp4`
	const fallback = (
		<p>
			Your browser doesn't support HTML5 video. Here is a
			<a href={srcMp4} type="video/mp4">
				link to the video
			</a>
			instead.
		</p>
	)

	return (
		<video
			poster={URL}
			preload="metadata"
			controlsList="nodownload"
			controls
		>
			<source src={srcWebm} type="video/webm" />
			<source src={srcMp4} type="video/mp4" />
			<VideoTracks videoCaptions={videoCaptions} url={URL} />
			{fallback}
		</video>
	)
}

Video.propTypes = {
	videoCaptions: PropTypes.object.isRequired,
	srcURL: PropTypes.string.isRequired,
}

export default Video
