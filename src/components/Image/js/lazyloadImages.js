/**
 * ## enhanceImages
 *
 * Add high res-image URL, srcset and an adjacent `source` element
 * to display high-res image.
 *
 * 1. Stop is image has already been 'enhanced'.
 * 2. Stop if the src URL does not contain '-small'.
 * 3. Find the parent picture element.
 * 4. Create the normal, large and medium urls.
 * 5. Create a source element to serve screens below 600px wide.
 * 6. Insert the new source element before the existing img element, inside the picture element.
 * 7. Add the `js-loaded` class so that img cannot be 'enhanced' again.
 *
 * @param {*} img The `img` element to be enhanced
 */
const enhanceImages = img => {
	// 1.
	if (img.classList.contains("js-loaded")) return
	// 2.
	if (!img.src.includes("-small")) return

	// 3.
	const pic = img.parentElement

	// 4.
	const largeURL = img.src.replace(/-small/, "-large")
	const medURL = img.src.replace(/-small/, "-med")
	const URL = img.src.replace(/-small/, "")

	img.setAttribute("src", largeURL)
	img.setAttribute("srcset", `${largeURL}, ${URL} 2x`)

	// 5.
	const source = document.createElement("source")
	source.setAttribute("media", "(max-width: 600px)")
	source.setAttribute("srcset", `${medURL}, ${largeURL} 2x`)

	// 6.
	pic.insertBefore(source, img)

	// 7.
	img.classList.add("js-loaded")
}

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
		if (entry.isIntersecting && !entry.target.classList.contains("js-loaded")) {
			enhanceImages(entry.target)
		}
	})
}

/**
 * ## lazyloadImages
 *
 * Call `enhanceImages` for each `img[loading="lazy"]` on the page.
 *
 * 1. The images can natively lazyload, so no need for the IntersectionObserver.
 * Call `enhanceImages` straight away.
 * 2. Use IntersectionObserver to load the images when they move into the viewport.
 * 3. The viewport is the root by default.
 * 4. Start loading the image when it is 600px above or below the viewport
 * 5. No lazy loading options are available so pop all the high res images onto the page.
 * @param {*} root
 * @param {*} rootMargin
 */
const lazyloadImages = (root = null, rootMargin = "600px 0px 600px 0px") => {
	const images = document.querySelectorAll('img[loading="lazy"]')
	const imagesArray = Array.from(images)

	if ("loading" in HTMLImageElement.prototype) {
		// 1.
		images.forEach(image => enhanceImages(image))
	} else if (window.IntersectionObserver) {
		// 2.
		const observers = []

		const observerOptions = {
			root, // 3.
			rootMargin, // 4.
		}

		imagesArray.forEach((image, index) => {
			observers[index] = new IntersectionObserver(intersectionCallback, observerOptions)
			observers[index].observe(image)
		})
	} else {
		// 5.
		imagesArray.forEach(image => enhanceImages(image))
	}
}

export default lazyloadImages
