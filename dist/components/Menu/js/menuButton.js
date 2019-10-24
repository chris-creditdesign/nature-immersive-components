"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var menuButton = function menuButton() {
  var btn = document.querySelector(".menu button");
  var menu = btn.nextElementSibling;
  btn.addEventListener("click", function () {
    var expanded = this.getAttribute("aria-expanded") === "true" || false;
    this.setAttribute("aria-expanded", !expanded);
    menu.hidden = !menu.hidden;
  });
};

var _default = menuButton;
exports.default = _default;
//# sourceMappingURL=menuButton.js.map