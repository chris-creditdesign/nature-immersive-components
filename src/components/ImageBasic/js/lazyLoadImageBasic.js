import enhanceImages from "./enhanceImages"
import intersectionCallback from "./intersectionCallback"

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
const lazyloadImageBasic = (
	root = null,
	rootMargin = "600px 0px 600px 0px"
) => {
	const images = document.getElementsByClassName("js-lazyload-img-basic")
	const imagesArray = Array.from(images)

	if ("loading" in HTMLImageElement.prototype) {
		// 1.
		imagesArray.forEach(image => enhanceImages(image))
	} else if ("IntersectionObserver" in window) {
		// 2.
		const observers = []

		const observerOptions = {
			root, // 3.
			rootMargin, // 4.
		}

		imagesArray.forEach((image, index) => {
			observers[index] = new IntersectionObserver(
				intersectionCallback,
				observerOptions
			)
			observers[index].observe(image)
		})
	} else {
		// 5.
		imagesArray.forEach(image => enhanceImages(image))
	}
}

export default lazyloadImageBasic
