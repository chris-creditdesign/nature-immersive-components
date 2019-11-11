/**
 * ## enhanceImages
 *
 * Add high res-image URL, srcset and an adjacent `source` element
 * to display high-res image.
 *
 * 1. Stop is image has already been 'enhanced'.
 * 2. Stop if the src URL does not contain '-small'.
 * 3. Create the normal URL and add it to the image
 * 4. Add the `js-loaded` class so that img cannot be 'enhanced' again.
 *
 * @param {*} img The `img` element to be enhanced
 */
const enhanceImages = fig => {
	const img = fig.querySelector("img")
	// 1.
	if (fig.classList.contains("js-loaded")) return
	// 2.
	if (!img.src.includes("-small")) return

	// 3.
	const URL = img.src.replace(/-small/, "")
	img.setAttribute("src", URL)

	// 4.
	img.classList.add("js-loaded")
}

export default enhanceImages
