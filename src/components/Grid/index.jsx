import { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { css, jsx } from "@emotion/core"

/**
 * ## Grid
 *
 * Layout component used to arrange contents into a grid, surprisingly.
 *
 * TODO: Accept any string for minWidth, not just a number of pixels
 */
const Grid = ({ children, className, space, minWidth, elem }) => {
	// Value to use for `grid-template-columns` in the CSS
	const [gridTemplateValues, setGridTemplateValues] = useState("100%")

	// Function to check if the entry is wider than the minWidth value
	// Passed to the ResizeObzerver. Only runs if the resize observer is used.
	const checkWidth = entries => {
		// There will only be one entry, so take the first elem in the array
		const [entry] = entries
		// Get the width of this element
		const { width } = entry.contentRect
		// If the width is wider than minWidth `isWideEnough` will be true
		if (width > minWidth) {
			setGridTemplateValues(
				`repeat(auto-fit, minmax(${minWidth}px, 1fr))`
			)
		} else {
			setGridTemplateValues("100%")
		}
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
	const gridRef = useRef(null)

	useEffect(() => {
		if (resizeObserverRef.current) {
			// Keep a reference to the gridRef current in a variable
			// This is necessary to unobserve the node - in case the
			// ref has already been removed
			const gridNode = gridRef.current
			const resizeObserverRefCurrent =
				resizeObserverRef.current
			// Observe the grid node
			resizeObserverRefCurrent.observe(gridNode)

			// When the component is unmounted - unobserve the node
			// to prevent memory leaks
			return () =>
				resizeObserverRefCurrent.unobserve(gridNode)
		}

		// If the `min()` function is available - safari only
		// use that in the CSS instead of the javascript
		if (CSS.supports("width", "min(300px, 100%)")) {
			setGridTemplateValues(
				`repeat(auto-fit, minmax(min(${minWidth}px, 100%), 1fr))`
			)
		}

		// This function will only rerun if minWidth is updated
		// The ResizeObserver function will run each time the gridNode is resized
	}, [minWidth])

	const style = css`
		display: grid;
		grid-gap: ${space};
		grid-template-columns: ${gridTemplateValues};
	`

	const Test = jsx(
		elem,
		{ css: style, className, ref: gridRef },
		children
	)
	return Test
}

Grid.defaultProps = {
	className: "",
	space: "var(--space)",
	minWidth: 300,
	elem: "div",
}

Grid.propTypes = {
	children: PropTypes.node.isRequired,
	/** CSS class to add custom styles */
	className: PropTypes.string,
	/** Size of the the grid-gap */
	space: PropTypes.string,
	/** Minimum width of columns - Must be in pixels */
	minWidth: PropTypes.number,
	/** HTML element to render on the page */
	elem: PropTypes.string,
}

export default Grid
