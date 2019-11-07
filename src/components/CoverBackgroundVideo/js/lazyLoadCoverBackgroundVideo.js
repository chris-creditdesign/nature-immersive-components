import intersectionCallback from "./intersectionCallback"
import enhanceVideos from "./enhanceVideos"

/**
 * ## lazyLoadCoverBackgroundVideo
 *
 * Call `enhanceImages` for elem with the class `js-lazyload-cover-background-video` on the page.
 *
 * 1. Create an array of all the videos
 * 2. If IntersectionObsverver is available, enhance each of the videos as they
 * come into view
 * 3. Otherwise, enhance them straight away
 *
 * @param {*} root
 * @param {*} rootMargin
 */
const lazyLoadCoverBackgroundVideo = (
	root = null,
	rootMargin = "600px 0px 600px 0px"
) => {
	// 1.
	const videos = document.getElementsByClassName(
		"js-lazyload-cover-background-video"
	)
	const videosArray = Array.from(videos)

	// 2.
	if ("IntersectionObserver" in window) {
		const observers = []

		const observerOptions = {
			root, // 3.
			rootMargin, // 4.
		}

		videosArray.forEach((video, index) => {
			observers[index] = new IntersectionObserver(
				intersectionCallback,
				observerOptions
			)
			observers[index].observe(video)
		})
	} else {
		// 3.
		videosArray.forEach(image => enhanceVideos(image))
	}
}

export default lazyLoadCoverBackgroundVideo
