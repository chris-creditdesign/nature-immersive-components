/**
 * ## checkWidth
 *
 * Each entry should have a `data-id` attribute that
 * matches the id of a generated YouTube iframe.
 *
 * 1. Get the width of the element
 * 2. Get the radio and id from the data attributes
 * 3. Find the iframe with the matching id. If the id is undefined
 * the iframe will be null.
 * 4. If the iframe is found, set its width and height based on the width
 * and ratio of the container.
 *
 * @param {*} entries Array of dom elements
 */
const checkWidth = entries => {
	entries.forEach(entry => {
		// 1.
		const width = parseInt(entry.target.offsetWidth, 10)
		// 2.
		const { ratio, id } = entry.target.dataset
		// 3.
		const iframe = document.getElementById(id)
		// 4.
		if (iframe) {
			iframe.setAttribute("width", width)
			iframe.setAttribute(
				"height",
				parseInt(width * parseFloat(ratio), 10)
			)
		}
	})
}

export default checkWidth
