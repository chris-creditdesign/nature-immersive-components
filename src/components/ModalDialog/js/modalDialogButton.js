const modalDialogButton = () => {
	const openBtn = document.querySelector(
		".modal-dialog-container .button-container button"
	)
	const closeBtn = document.querySelector(
		".modal-dialog-container [role='dialog'] button"
	)
	const dialogBox = document.querySelector(
		".modal-dialog-container [role='dialog']"
	)

	// Set the initial state for the button and menu once js has loaded
	dialogBox.hidden = true

	openBtn.addEventListener("click", () => {
		const expanded =
			openBtn.getAttribute("aria-expanded") === "true" ||
			false
		openBtn.setAttribute("aria-expanded", !expanded)
		dialogBox.hidden = !dialogBox.hidden
	})

	closeBtn.addEventListener("click", () => {
		const expanded =
			openBtn.getAttribute("aria-expanded") === "true" ||
			false
		openBtn.setAttribute("aria-expanded", !expanded)
		dialogBox.hidden = !dialogBox.hidden
	})
}

export default modalDialogButton
