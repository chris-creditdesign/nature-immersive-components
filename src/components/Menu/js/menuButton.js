const menuButton = () => {
	const btn = document.querySelector(".js-menu-button")
	const btnOpen = btn.querySelector("#open")
	const btnClosed = btn.querySelector("#closed")
	const menu = document.querySelector(".js-nav-menu")

	// Set the initial state for the button and menu once js has loaded
	btn.setAttribute("aria-expanded", false)
	btnOpen.setAttribute("hidden", true)
	menu.hidden = true

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
