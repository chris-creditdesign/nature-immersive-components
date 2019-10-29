/**
 * ## observeGrid
 *
 * 1. Feature detect ResizeObserver.
 * 2. Get the min value from data-min='[min]'.
 * 3. Create a proxy element to measure and convert
 * the `min` value (which might be em, rem, etc) to `px`.
 * 4. Get the element's current dimensions.
 * 5. `true` if the container is wider than the minimum
 * 6. Toggle the `aboveMin` class conditionally
 *
 * @param {*} gridNode Dom element with class grid
 */
const observeGrid = gridNode => {
	// 1.
	if ("ResizeObserver" in window) {
		// 2.
		const { min } = gridNode.dataset
		// 3.
		const test = document.createElement("div")
		test.style.width = min
		gridNode.appendChild(test)
		const minToPixels = test.offsetWidth
		gridNode.removeChild(test)

		const ro = new ResizeObserver(entries => {
			for (const entry of entries) {
				// 4.
				const cr = entry.contentRect
				// 5.
				const isWide = cr.width > minToPixels
				// 6.
				gridNode.classList.toggle("aboveMin", isWide)
			}
		})

		ro.observe(gridNode)
	}
}

const loadGrids = () => {
	const grids = document.querySelectorAll("[data-min].js-grid")
	const gridsArray = Array.from(grids)

	gridsArray.forEach(grid => observeGrid(grid))
}

export default loadGrids
