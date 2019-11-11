/**
 * ## createIntersectionObserver
 *
 * 1. Use IntersectionObserver to call `enhanceFunc` for elem with the class
 * `classNameToObserve` on the page.
 * 3. The viewport is the root by default.
 * 4. Start loading the video when it is 600px above or below the viewport
 * 5. Intersection observer is not available, so call `enhanceFunc` immediately
 *
 * @param {*} classNameToObserve
 * @param {*} enhanceFunc
 * @param {*} root
 * @param {*} rootMargin
 * @param {*} threshold
 */

const createIntersectionObserver = (
	classNameToObserve,
	enhanceFunc,
	root = null,
	rootMargin = "600px 0px 600px 0px",
	threshold = 1.0
) => {
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
				enhanceFunc(entry.target)
			}
		})
	}

	const elems = document.getElementsByClassName(classNameToObserve)
	const elemsArray = Array.from(elems)

	if ("IntersectionObserver" in window) {
		// 2.
		const observers = []

		const observerOptions = {
			root, // 3.
			rootMargin, // 4.
			threshold,
		}

		elemsArray.forEach((image, index) => {
			observers[index] = new IntersectionObserver(
				intersectionCallback,
				observerOptions
			)
			observers[index].observe(image)
		})
	} else {
		// 5.
		elemsArray.forEach(elem => enhanceFunc(elem))
	}
}

export default createIntersectionObserver
