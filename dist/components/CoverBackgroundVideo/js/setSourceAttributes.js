"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## setSourceAttributes
 *
 * Applies the correct attributes to a video source element.
 * Returns the source element with tha attributes applied.
 *
 * @param {object} elem The source element itself
 * @param {string} source The base url for video file
 * @param {string} type The type of the video file. Normally 'mp4' or 'webm'
 *
 * @return {object} elem The sourse element with attributes applide
 */
var setSourceAttributes = function setSourceAttributes(elem, source, type) {
  elem.setAttribute("src", "".concat(source, ".").concat(type));
  elem.setAttribute("type", "video/".concat(type));
  return elem;
};

var _default = setSourceAttributes;
exports.default = _default;
//# sourceMappingURL=setSourceAttributes.js.map