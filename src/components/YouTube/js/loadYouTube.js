import makePlayer from "./makePlayer"
import checkWidth from "./checkWidth"

/**
 * ## loadYouTube
 *
 * 1. Create an array to keep track of all the youtube players on page
 * 2. Create the ResizeObserver and add pass in the `checkWidth` function
 * 3. Load the IFrame Player API code asynchronously.
 * 4. Get each of the videos on page and add them to the `videosAsObjects` array
 * as an object containing their dataset attributes
 * 5. This function runs only once, it is called by the youtube iframe
 * api once it is loaded. Create a youtube player for each video in the `videosAsObjects`
 * array and push them into the `players` array.
 * 6. Observe each of the video's containers. When the contanier's size changes this should
 * trigger `checkWidth` to update the size of the video's iframe.
 *
 */
const loadYouTube = () => {
	// 1.
	const players = []
	// 2.
	const observer =
		"ResizeObserver" in window
			? new ResizeObserver(checkWidth)
			: null
	// 3.
	const tag = document.createElement("script")
	tag.src = "https://www.youtube.com/iframe_api"
	const firstScriptTag = document.getElementsByTagName("script")[0]
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

	// 4.
	const videosAsObjects = Array.from(
		document.getElementsByClassName("js-load-youtube"),
		video => {
			const { videoId, ratio, autoPlay, id } = video.dataset
			return {
				videoId,
				ratio,
				autoPlay,
				id,
				container: video,
			}
		}
	)

	// 5.
	window.onYouTubeIframeAPIReady = () => {
		const youtubePlayers = videosAsObjects.map(elem => {
			const width = parseInt(elem.container.offsetWidth, 10)
			const player = makePlayer({
				videoId: elem.videoId,
				id: elem.id,
				ratio: elem.ratio,
				width,
			})

			return player
		})

		youtubePlayers.forEach(player => players.push(player))

		// players.push(...youtubePlayers)
	}

	// 6.
	videosAsObjects.forEach(thisVideo => {
		if (observer) observer.observe(thisVideo.container)
	})
}

export default loadYouTube
