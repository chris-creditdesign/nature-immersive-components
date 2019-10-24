import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"

const getImgSrcSet = (srcURL, width) => {
	const med = srcURL.replace(/-small/, "-med")
	const large = srcURL.replace(/-small/, "-large")
	const extraLarge = srcURL.replace(/-small/, "")

	if (width <= 600) {
		return `${med}, ${large} 2x`
	}
	if (width > 600 && width <= 2000) {
		return `${large}, ${extraLarge} 2x`
	}
	if (width > 2000) {
		return extraLarge
	}
}

const HighResImage = ({ srcURL, altText }) => {
	const [imgSrcSet, setImgSrcSet] = useState(srcURL)

	// Function to check if the entry is wider than the minWidth value
	// Passed to the ResizeObzerver. Only runs if the resize observer is used.
	const checkWidth = entries => {
		// There will only be one entry, so take the first elem in the array
		const [entry] = entries
		// Get the width of this element
		const { width } = entry.contentRect
		setImgSrcSet(getImgSrcSet(srcURL, width))
	}

	// Only create the ResizeObserver if it is available
	// this code is runnig in a Browser.
	const createResizeObserver = () => {
		// False in using ReactDOMServer.renderToString
		// True if running in the browser
		if (process.env.NODE_ENV) {
			if ("ResizeObserver" in window) {
				return new ResizeObserver(checkWidth)
			}
		}
		return null
	}

	// References to keep track of the ResizeObserver function
	// and the grid dom element
	const resizeObserverRef = useRef(createResizeObserver())
	const pictureRef = useRef(null)

	useEffect(() => {
		if (resizeObserverRef.current) {
			// Keep a reference to the pictureRef current in a variable
			// This is necessary to unobserve the node - in case the
			// ref has already been removed
			const pictureNode = pictureRef.current
			const resizeObserverRefCurrent =
				resizeObserverRef.current
			// Observe the grid node
			resizeObserverRefCurrent.observe(pictureNode)

			// When the component is unmounted - unobserve the node
			// to prevent memory leaks
			return () =>
				resizeObserverRefCurrent.unobserve(pictureNode)
		}

		// If resizeObserver is not availabel, assume
		// a width of 1200
		setImgSrcSet(getImgSrcSet(srcURL, 1200))
	}, [srcURL])

	return (
		<img
			ref={pictureRef}
			src={srcURL}
			srcSet={imgSrcSet}
			alt={altText}
		/>
	)
}

HighResImage.propTypes = {
	altText: PropTypes.string.isRequired,
	srcURL: PropTypes.string.isRequired,
}

export default HighResImage
