import enhanceVideos from "./enhanceVideos"

/**
 * ## intersectionCallback
 *
 * When the observed elements enter the screen, call `enhanceVideos` on each of them.
 *
 * 1. Only call `enchanceVideos` if the entry is on screen AND the class `js-loaded` is not present.
 *
 * @param {array} entries Array of dom elements
 */
const intersectionCallback = entries => {
	entries.forEach(entry => {
		// 1.
		if (
			entry.isIntersecting &&
			!entry.target.classList.contains("js-loaded")
		) {
			enhanceVideos(entry.target)
		}
	})
}

export default intersectionCallback
