import enhanceImages from "./enhanceImages"

/**
 * ## intersectionCallback
 *
 * When the images enter the screen, call `enhanceImages` on each of them.
 *
 * 1. Only call `enchanceImages` if the entry is on screen AND the class
 *    `js-loaded` is not present.
 * @param {array} entries Array of dom elements
 */
const intersectionCallback = entries => {
	entries.forEach(entry => {
		// 1.
		if (
			entry.isIntersecting &&
			!entry.target.classList.contains("js-loaded")
		) {
			enhanceImages(entry.target)
		}
	})
}

export default intersectionCallback
