import setVideoAttributes from "./setVideoAttributes"
import setSourceAttributes from "./setSourceAttributes"

/**
 * ## createVideo
 *
 * Creates a video element to be used as the background for a
 * full-screen-media--video element.
 *
 * 1. Create the video and the source elements
 * 2. Set the attributes of the video and the source elements
 * 3. Append the source elemnets to the video element
 * 4. Return the video element
 *
 * @param {string} src The base url for video file
 * @param {string} alt
 *
 * @return {object} The video element to add to the page
 */

const createVideo = (src, alt) => {
	// 1.
	const video = document.createElement("video")
	const srcWebm = document.createElement("source")
	const srcMp4 = document.createElement("source")

	// 2.
	const videoWithAttributes = setVideoAttributes(video, src, alt)
	const srcWebmWithAttributes = setSourceAttributes(srcWebm, src, "webm")
	const srcMp4WithAttributes = setSourceAttributes(srcMp4, src, "mp4")

	// 3.
	videoWithAttributes.appendChild(srcWebmWithAttributes)
	videoWithAttributes.appendChild(srcMp4WithAttributes)

	// 4.
	return videoWithAttributes
}

export default createVideo
