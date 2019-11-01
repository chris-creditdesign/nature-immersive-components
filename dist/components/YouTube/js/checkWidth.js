"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## checkWidth
 *
 * Each entry should have a `data-id` attribute that
 * matches the id of a generated YouTube iframe.
 *
 * 1. Get the width of the element
 * 2. Get the radio and id from the data attributes
 * 3. Find the iframe with the matching id. If the id is undefined
 * the iframe will be null.
 * 4. If the iframe is found, set its width and height based on the width
 * and ratio of the container.
 *
 * @param {*} entries Array of dom elements
 */
var checkWidth = function checkWidth(entries) {
  entries.forEach(function (entry) {
    // 1.
    var width = parseInt(entry.target.offsetWidth, 10); // 2.

    var _entry$target$dataset = entry.target.dataset,
        ratio = _entry$target$dataset.ratio,
        id = _entry$target$dataset.id; // 3.

    var iframe = document.getElementById(id); // 4.

    if (iframe) {
      iframe.setAttribute("width", width);
      iframe.setAttribute("height", parseInt(width * parseFloat(ratio), 10));
    }
  });
};

var _default = checkWidth;
exports.default = _default;
//# sourceMappingURL=checkWidth.js.map