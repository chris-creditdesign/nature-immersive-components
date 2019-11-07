/**
 * ## setSourceAttributes
 *
 * Applies the correct attributes to a video source element.
 * Returns the source element with tha attributes applied.
 *
 * @param {object} elem The source element itself
 * @param {string} source The base url for video file
 * @param {string} type The type of the video file. Normally 'mp4' or 'webm'
 *
 * @return {object} elem The sourse element with attributes applide
 */

const setSourceAttributes = (elem, source, type) => {
	elem.setAttribute("src", `${source}.${type}`)
	elem.setAttribute("type", `video/${type}`)

	return elem
}

export default setSourceAttributes
