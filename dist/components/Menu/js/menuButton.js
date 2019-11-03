"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var menuButton = function menuButton() {
  var btn = document.querySelector(".js-menu-button");
  var btnOpen = btn.querySelector("#open");
  var btnClosed = btn.querySelector("#closed");
  var menu = document.querySelector(".js-nav-menu"); // Set the initial state for the button and menu once js has loaded

  btn.setAttribute("aria-expanded", false);
  btnOpen.toggleAttribute("hidden", true);
  menu.hidden = true;
  btn.addEventListener("click", function () {
    var expanded = btn.getAttribute("aria-expanded") === "true" || false;
    btn.setAttribute("aria-expanded", !expanded);
    btnOpen.toggleAttribute("hidden", expanded);
    btnClosed.toggleAttribute("hidden", !expanded);
    menu.hidden = !menu.hidden;
  });
};

var _default = menuButton;
exports.default = _default;
//# sourceMappingURL=menuButton.js.map