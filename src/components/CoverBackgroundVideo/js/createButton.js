/**
 * ## createButton
 *
 * Create a button element to stop start the CoverBackgroundVideo
 *
 * 1. Create the button element
 * 2. Add the classes used for styling the element
 * 3. Set the type attribute
 * 4. Set the contents of the button
 * 4. Return the btn element
 *
 * @return {object} The button element to add to the page
 */

const createButton = (innerHTML, classList = []) => {
	// 1.
	const btn = document.createElement("button")

	// 2.
	btn.classList.add(...classList)

	// 3.
	btn.setAttribute("type", "button")

	// 4.
	btn.innerHTML = innerHTML

	// 5.
	return btn
}

export default createButton
