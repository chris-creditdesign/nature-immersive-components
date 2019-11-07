import createVideo from "./createVideo"
import createButton from "./createButton"
import autoPlayVideo from "./autoPlayVideo"

/**
 * ## updateButtonStatus
 *
 * Update the button to show 'play' or 'pause' with the
 * associated icon - depending on the state of the video
 */
const updateButtonStatus = (btn, video) => {
	btn.innerText = video.paused ? "Play video" : "Pause video"
}

/**
 * ## enhanceVideos
 *
 * 1. Stop if the video has already been 'enhanced'.
 * 2. Find the image element
 * 3. Create the button element to stop and start the video
 * 4. Add the button to the page
 * 5. Get the source url, and alt text from the image element.
 * Remove the img extension ie .png or .jpg
 * 6. Create the video element and add it to the page,
 * replacing the figure.
 * 7. Attempt to autplay the video
 * 8. Add an event listener so the video can be played or paused by clicking on the button
 * 9. Set the status of the button, before its first click
 * 10. Add the `js-loaded` class so that img cannot be 'enhanced' again.
 *
 * @param {*} img The `img` element to be enhanced
 */
const enhanceVideos = elem => {
	// 1.
	if (elem.classList.contains("js-loaded")) return

	// 2.
	const img = elem.querySelector("img")

	// 3.
	const btn = createButton("Play video", [
		"box",
		"box--border",
		"font-family:sans-serif",
		"font-size:small-1",
	])

	// 4.
	const btnContainer = elem.querySelector(".js-button-container")
	btnContainer.appendChild(btn)

	// 5.
	const source = img.src.replace(/-small/, "").slice(0, -4)
	const { alt } = img

	// 6.
	const video = createVideo(source, alt)
	elem.replaceChild(video, img)

	// 7.
	autoPlayVideo(video)

	// 8.
	btn.addEventListener("click", () => {
		// If the video.paused is true call the play method and visa-versa
		video[video.paused ? "play" : "pause"]()
		updateButtonStatus(btn, video)
	})

	// 9.
	updateButtonStatus(btn, video)

	// 10.
	elem.classList.add("js-loaded")
}

export default enhanceVideos
