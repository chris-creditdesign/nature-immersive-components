"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var modalDialogButton = function modalDialogButton() {
  var openBtn = document.querySelector(".modal-dialog-container .button-container button");
  var closeBtn = document.querySelector(".modal-dialog-container [role='dialog'] button");
  var dialogBox = document.querySelector(".modal-dialog-container [role='dialog']"); // Set the initial state for the button and menu once js has loaded

  dialogBox.hidden = true;
  openBtn.addEventListener("click", function () {
    var expanded = openBtn.getAttribute("aria-expanded") === "true" || false;
    openBtn.setAttribute("aria-expanded", !expanded);
    dialogBox.hidden = !dialogBox.hidden;
  });
  closeBtn.addEventListener("click", function () {
    var expanded = openBtn.getAttribute("aria-expanded") === "true" || false;
    openBtn.setAttribute("aria-expanded", !expanded);
    dialogBox.hidden = !dialogBox.hidden;
  });
};

var _default = modalDialogButton;
exports.default = _default;
//# sourceMappingURL=modalDialogButton.js.map