"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

// <button
// 	type="button"
// 	aria-expanded
// 	aria-controls={btnId}
// 	data-event-category="menu"
// 	data-event-action="click"
// 	data-event-label="button"
// 	className="js-menu-button "
// >
// 	<VeggieBurgerLogoSVG
// 		title={btnTitle}
// 		height={1.6}
// 	/>
// </button>

/**
 * ## createButton
 *
 * Create a button element to stop start the CoverBackgroundVideo
 *
 * 1. Create the button element
 * 2. Add the classes used for styling the element
 * 3. Set the attributes including the data track attributes
 * 4. Set the contents of the button
 * 4. Return the btn element
 *
 * @return {object} The button element to add to the page
 */
var createButton = function createButton(svg) {
  var _btn$classList;

  var classList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // 1.
  var btn = document.createElement("button"); // 2.

  (_btn$classList = btn.classList).add.apply(_btn$classList, _toConsumableArray(classList)); // 3.


  btn.setAttribute("type", "button");
  btn.setAttribute("aria-expanded", true);
  btn.setAttribute("aria-controls", "menu-list");
  btn.setAttribute("data-event-category", "menu");
  btn.setAttribute("data-event-action", "click");
  btn.setAttribute("data-event-label", "button"); // 4.

  btn.appendChild(svg); // 5.

  return btn;
};

var _default = createButton;
exports.default = _default;
//# sourceMappingURL=createButton.js.map