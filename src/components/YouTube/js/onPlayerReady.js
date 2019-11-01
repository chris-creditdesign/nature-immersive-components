/**
 * ## onPlayerReady
 *
 * 1. Get autoplay attribute from parent element - should be 'true' or 'false'
 * 2. If true, attempt to play the video
 *
 * @param {*} event onReady event called by the YouTube api
 */
const onPlayerReady = event => {
	// 1.
	const parent = event.target.a.parentNode
	const { autoPlay } = parent.dataset
	// 2.
	if (autoPlay === "true") {
		event.target.playVideo()
	}
}

export default onPlayerReady
