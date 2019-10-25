import React from "react"
import PropTypes from "prop-types"

const ModalDialog = ({ children, title, labelId, dialogId }) => (
	<div className="modal-dialog-container">
		<div className="button-container" aria-expanded aria-controls={dialogId}>
			<button type="button">Graphic Legend</button>
		</div>
		<div
			className="invert box stack"
			style={{ "--space": "var(--s1)" }}
			role="dialog"
			id={dialogId}
			aria-labelledby={labelId}
			aria-modal="true"
			hidden={false}
		>
			<h2 id={labelId}>{title}</h2>
			{children}
			<button type="button">Close</button>
		</div>
	</div>
)

ModalDialog.defaultProps = {
	labelId: "label-id",
	dialogId: "dialog-id",
}

ModalDialog.propTypes = {
	title: PropTypes.string.isRequired,
	labelId: PropTypes.string,
	dialogId: PropTypes.string,
	children: PropTypes.node.isRequired,
}

export default ModalDialog
