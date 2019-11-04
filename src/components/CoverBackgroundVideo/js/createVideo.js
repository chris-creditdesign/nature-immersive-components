import setVideoAttributes from "./setVideoAttributes"
import setSourceAttributes from "./setSourceAttributes"

/**
 * Creates a video element to be used as the background for a
 * full-screen-media--video element.
 *
 * @param {string} src The base url for video file
 *
 * @return {object} The video element to add to the page
 */

const createVideo = (src, alt) => {
	// Create the video and the source elements
	const video = document.createElement("video")
	const srcWebm = document.createElement("source")
	const srcMp4 = document.createElement("source")

	// Set the attributes of the video and the source elements
	const videoWithAttributes = setVideoAttributes(video, src, alt)
	const srcWebmWithAttributes = setSourceAttributes(srcWebm, src, "webm")
	const srcMp4WithAttributes = setSourceAttributes(srcMp4, src, "mp4")

	// Append the source elemnets to the video element
	videoWithAttributes.appendChild(srcWebmWithAttributes)
	videoWithAttributes.appendChild(srcMp4WithAttributes)

	// Return the video element
	return videoWithAttributes
}

export default createVideo
