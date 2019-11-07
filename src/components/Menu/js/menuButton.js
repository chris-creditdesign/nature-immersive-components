import createButton from "./createButton"
import createVeggieBurgerSVG from "./createVeggieBurgerSVG"

/**
 * ## menuButton
 *
 * 1. Create the button and its svg contents and place it on the page
 * 2. Get refernces to the svg paths and the menu
 * 3. Set the initial state for the button and menu once js has loaded
 * 4. Add an event listener to update the button and menu on click
 */
const menuButton = () => {
	// 1.
	const svg = createVeggieBurgerSVG()
	const btn = createButton(svg, ["font-family:sans-serif"])
	const btnContainer = document.querySelector(".js-menu-button")
	btnContainer.parentNode.replaceChild(btn, btnContainer)

	// 2.
	const btnOpen = btn.querySelector("#open")
	const btnClosed = btn.querySelector("#closed")
	const menu = document.querySelector(".js-nav-menu")

	// 3.
	btn.setAttribute("aria-expanded", false)
	btnOpen.setAttribute("hidden", true)
	menu.hidden = true

	// 4.
	btn.addEventListener("click", () => {
		const expanded =
			btn.getAttribute("aria-expanded") === "true" || false
		btn.setAttribute("aria-expanded", !expanded)

		if (expanded) {
			btnClosed.removeAttribute("hidden")
			btnOpen.setAttribute("hidden", true)
		} else {
			btnClosed.setAttribute("hidden", true)
			btnOpen.removeAttribute("hidden")
		}
		menu.hidden = !menu.hidden
	})
}

export default menuButton
