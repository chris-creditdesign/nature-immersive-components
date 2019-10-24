import { useEffect, useRef, useState } from "react"
import ResizeObserver from "resize-observer-polyfill"

const onPlayerReady = event => {
	// Get autoplay from parent element
	const parent = event.target.a.parentNode
	const { autoPlay } = parent.dataset
	if (autoPlay === "true") {
		event.target.playVideo()
	}
}

function makePlayer(thisVideoId, thisId, thisRatio, thisContainerWidth) {
	const width = parseInt(thisContainerWidth)
	const height = parseInt(width * parseFloat(thisRatio))
	const player = new window.YT.Player(thisId, {
		height,
		width,
		videoId: thisVideoId,
		events: {
			onReady: onPlayerReady,
		},
	})
	return player
}

const YouTubeLoader = () => {
	// Create an array to keep track of all the videos on page
	// Each video is represented as an object
	const [videos, setVideos] = useState([])
	const [players, setPlayers] = useState([])

	// Get each of the videos on page and add them to the videos array
	// as an object containing their dataset attributes
	useEffect(() => {
		const videosAsObjects = Array.from(
			document.getElementsByClassName("js-load-youtube"),
			video => ({ ...video.dataset, container: video })
		)
		setVideos(videosAsObjects)
	}, [])

	const youTubeIframeApiSrc = "https://www.youtube.com/iframe_api"

	useEffect(() => {
		if (
			process.env.NODE_ENV &&
			typeof YT === "undefined" &&
			typeof window.loadingPlayer === "undefined"
		) {
			// Add the youtube iframe api script tag
			const tag = document.createElement("script")
			tag.src = youTubeIframeApiSrc
			const firstScriptTag = document.getElementsByTagName(
				"script"
			)[0]
			firstScriptTag.parentNode.insertBefore(
				tag,
				firstScriptTag
			)

			// This function runs only once, when the youtube iframe
			// api is loaded
			window.onYouTubeIframeAPIReady = () => {
				const youtubePlayers = videos.map(elem => {
					const width = elem.container.offsetWidth
					const player = makePlayer(
						elem.videoId,
						elem.id,
						elem.ratio,
						width
					)

					return player
				})

				setPlayers(youtubePlayers)
			}
		}
	}, [players, videos])

	const checkWidth = entries => {
		entries.forEach(entry => {
			const width = parseInt(entry.target.offsetWidth, 10)
			const { ratio, id } = entry.target.dataset
			const iframe = document.getElementById(id)
			iframe.setAttribute("width", width)
			iframe.setAttribute(
				"height",
				parseInt(width * parseFloat(ratio), 10)
			)
		})
	}

	// Only create the ResizeObserver if it is available
	// this code is runnig in a Browser.
	const createResizeObserver = () => {
		// False in using ReactDOMServer.renderToString
		// True if running in the browser
		if (process.env.NODE_ENV) {
			return new ResizeObserver(checkWidth)
		}
	}

	// References to keep track of the ResizeObserver function
	const resizeObserverRef = useRef(createResizeObserver())

	useEffect(() => {
		if (resizeObserverRef.current) {
			const resizeObserverRefCurrent =
				resizeObserverRef.current
			videos.forEach(thisVideo => {
				resizeObserverRefCurrent.observe(
					thisVideo.container
				)
			})

			// When the component is unmounted - unobserve the node
			// to prevent memory leaks
			return () => resizeObserverRefCurrent.disconnect()
		}
	}, [players, videos])

	return null
}

export default YouTubeLoader
