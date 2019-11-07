"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createButton = _interopRequireDefault(require("./createButton"));

var _createVeggieBurgerSVG = _interopRequireDefault(require("./createVeggieBurgerSVG"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## menuButton
 *
 * 1. Create the button and its svg contents and place it on the page
 * 2. Get refernces to the svg paths and the menu
 * 3. Set the initial state for the button and menu once js has loaded
 * 4. Add an event listener to update the button and menu on click
 */
var menuButton = function menuButton() {
  // 1.
  var svg = (0, _createVeggieBurgerSVG.default)();
  var btn = (0, _createButton.default)(svg, ["font-family:sans-serif"]);
  var btnContainer = document.querySelector(".js-menu-button");
  btnContainer.parentNode.replaceChild(btn, btnContainer); // 2.

  var btnOpen = btn.querySelector("#open");
  var btnClosed = btn.querySelector("#closed");
  var menu = document.querySelector(".js-nav-menu"); // 3.

  btn.setAttribute("aria-expanded", false);
  btnOpen.setAttribute("hidden", true);
  menu.hidden = true; // 4.

  btn.addEventListener("click", function () {
    var expanded = btn.getAttribute("aria-expanded") === "true" || false;
    btn.setAttribute("aria-expanded", !expanded);

    if (expanded) {
      btnClosed.removeAttribute("hidden");
      btnOpen.setAttribute("hidden", true);
    } else {
      btnClosed.setAttribute("hidden", true);
      btnOpen.removeAttribute("hidden");
    }

    menu.hidden = !menu.hidden;
  });
};

var _default = menuButton;
exports.default = _default;
//# sourceMappingURL=menuButton.js.map