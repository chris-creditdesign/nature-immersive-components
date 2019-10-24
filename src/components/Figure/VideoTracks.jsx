import React from "react"
import PropTypes from "prop-types"

const VideoTracks = ({ videoCaptions, url }) => {
	const tracks = Array.from(Object.keys(videoCaptions)).map(key => (
		<track
			key={key}
			label={videoCaptions[key]}
			kind="captions"
			srcLang={key}
			src={`${url.slice(0, -4)}-${key}.vtt`}
			default={key === "en"}
		/>
	))

	return tracks
}

VideoTracks.propTypes = {
	videoCaptions: PropTypes.object.isRequired,
	url: PropTypes.string.isRequired,
}

export default VideoTracks
