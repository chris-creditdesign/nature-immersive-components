import onPlayerReady from "./onPlayerReady"

/**
 * #makePlayer
 *
 * Given an object taining a YouTube id, DOM id, width and ratio of width
 * to height call the `YT.Player function to create the Youtube player iframe
 * on page.
 *
 * 1. Check if the YouTube api has been loaded
 * 2. When the player is ready call the `onPlayerReady` function
 *
 * @param {*} param0 Object containing { videoId, id, ratio, width }
 */
const makePlayer = ({ videoId, id, ratio, width }) => {
	const height = parseInt(width * parseFloat(ratio), 10)
	let player = {}

	// 1.
	if ("YT" in window) {
		player = new window.YT.Player(id, {
			height,
			width,
			videoId,
			events: {
				// 2.
				onReady: onPlayerReady,
			},
		})
	}

	return player
}

export default makePlayer
