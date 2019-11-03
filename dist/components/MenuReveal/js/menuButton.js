"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var menuButton = function menuButton() {
  var btn = document.querySelector(".js-menu-button"); // TODO: Find a better way to do this

  var menu = btn.parentElement.parentElement.nextElementSibling; // Set the initial state for the button and menu once js has loaded

  btn.setAttribute("aria-expanded", false);
  menu.hidden = true;
  btn.addEventListener("click", function () {
    var expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    menu.hidden = !menu.hidden;
  });
};

var _default = menuButton;
exports.default = _default;
//# sourceMappingURL=menuButton.js.map