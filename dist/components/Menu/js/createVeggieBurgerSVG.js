"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## createVeggieBurgerSVG
 *
 * 1. Create the svg element and add its attributes
 * 2. Create the title element
 * 3. Create the closed path
 * 4. Create the open path
 * 5. Place these elems inside the svg
 */
var createVeggieBurgerSVG = function createVeggieBurgerSVG() {
  //
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("height", "1.6em");
  svg.setAttribute("viewBox", "0 0 30 30");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-labelledby", "veggie-burger-title"); // 2.

  var title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.setAttribute("id", "veggie-burger-title");
  title.innerHTML = "Show navigation menu"; // 3.

  var closed = document.createElementNS("http://www.w3.org/2000/svg", "path");
  closed.setAttribute("id", "closed");
  closed.setAttribute("d", "M28,6H2C0.9,6,0,5.1,0,4v0c0-1.1,0.9-2,2-2h26c1.1,0,2,0.9,2,2v0C30,5.1,29.1,6,28,6z M30,26L30,26c0-1.1-0.9-2-2-2H2 c-1.1,0-2,0.9-2,2v0c0,1.1,0.9,2,2,2h26C29.1,28,30,27.1,30,26z M30,15L30,15c0-1.1-0.9-2-2-2H2c-1.1,0-2,0.9-2,2v0 c0,1.1,0.9,2,2,2h26C29.1,17,30,16.1,30,15z"); // 4.

  var open = document.createElementNS("http://www.w3.org/2000/svg", "path");
  open.setAttribute("id", "open");
  open.setAttribute("d", "M25.61,22.78c0.78,0.78,0.78,2.05,0,2.83c-0.78,0.78-2.05,0.78-2.83,0L15,17.83l-7.78,7.78C6.83,26,6.32,26.2,5.8,26.2 c-0.51,0-1.02-0.2-1.41-0.59c-0.78-0.78-0.78-2.05,0-2.83L12.17,15L4.39,7.22C4,6.83,3.8,6.32,3.8,5.8c0-0.51,0.2-1.02,0.59-1.41 c0.78-0.78,2.05-0.78,2.83,0L15,12.17l7.78-7.78c0.78-0.78,2.05-0.78,2.83,0c0.78,0.78,0.78,2.05,0,2.83L17.83,15L25.61,22.78z"); // 5.

  svg.appendChild(title);
  svg.appendChild(closed);
  svg.appendChild(open);
  return svg;
};

var _default = createVeggieBurgerSVG;
exports.default = _default;
//# sourceMappingURL=createVeggieBurgerSVG.js.map