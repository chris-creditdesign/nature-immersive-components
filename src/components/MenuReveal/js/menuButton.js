const menuButton = () => {
	const btn = document.querySelector(".js-menu-button")
	// TODO: Find a better way to do this
	const menu = btn.parentElement.parentElement.nextElementSibling

	// Set the initial state for the button and menu once js has loaded
	btn.setAttribute("aria-expanded", false)
	menu.hidden = true

	btn.addEventListener("click", function() {
		const expanded =
			this.getAttribute("aria-expanded") === "true" || false
		this.setAttribute("aria-expanded", !expanded)
		menu.hidden = !menu.hidden
	})
}

export default menuButton
