// <button
// 	type="button"
// 	aria-expanded
// 	aria-controls={btnId}
// 	data-event-category="menu"
// 	data-event-action="click"
// 	data-event-label="button"
// 	className="js-menu-button "
// >
// 	<VeggieBurgerLogoSVG
// 		title={btnTitle}
// 		height={1.6}
// 	/>
// </button>

/**
 * ## createButton
 *
 * Create a button element to stop start the CoverBackgroundVideo
 *
 * 1. Create the button element
 * 2. Add the classes used for styling the element
 * 3. Set the attributes including the data track attributes
 * 4. Set the contents of the button
 * 4. Return the btn element
 *
 * @return {object} The button element to add to the page
 */

const createButton = (svg, classList = []) => {
	// 1.
	const btn = document.createElement("button")

	// 2.
	btn.classList.add(...classList)

	// 3.
	btn.setAttribute("type", "button")
	btn.setAttribute("aria-expanded", true)
	btn.setAttribute("aria-controls", "menu-list")
	btn.setAttribute("data-event-category", "menu")
	btn.setAttribute("data-event-action", "click")
	btn.setAttribute("data-event-label", "button")

	// 4.
	btn.appendChild(svg)

	// 5.
	return btn
}

export default createButton
