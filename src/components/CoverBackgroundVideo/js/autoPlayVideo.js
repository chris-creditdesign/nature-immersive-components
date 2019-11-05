/**
 * Attempt to play the full screen video element.
 * Catch an error if this is not possible
 *
 * @param {object} video The video element to play
 */

const autoPlayFullScreenVideo = video => {
	const promise = video.play()
	if (promise !== undefined) {
		promise.then(() => {
			// Auto play started
		}).catch(error => {
			// Autoplay was prevented
			Error(error, "Autoplay was prevented")
		})
	}
}

export default autoPlayFullScreenVideo
