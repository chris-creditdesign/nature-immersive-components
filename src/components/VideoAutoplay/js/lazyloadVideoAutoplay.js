import createIntersectionObserver from "../../js/createIntersectionObserver"

const enhanceVideos = elem => console.log(elem)

/**
 * ## lazyloadVideoAutoplay
 *
 * Call `enhanceVideos` for elem with the class `js-lazyload-video-autoplay` on the page.
 *
 * 1. Use IntersectionObserver to load the videos when they move into the viewport.
 * 3. The viewport is the root by default.
 * 4. Start loading the video when it is 600px above or below the viewport
 * 5. Intersection observer is not available, so load the video immediately
 * @param {*} root
 * @param {*} rootMargin
 */
const lazyloadVideoAutoplay = () => {
	createIntersectionObserver("js-lazyload-video-autoplay", enhanceVideos)
}

export default lazyloadVideoAutoplay
