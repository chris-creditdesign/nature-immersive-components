"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enhanceImages = _interopRequireDefault(require("./enhanceImages"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## intersectionCallback
 *
 * When the images enter the screen, call `enhanceImages` on each of them.
 *
 * 1. Only call `enchanceImages` if the entry is on screen AND the class
 *    `js-loaded` is not present.
 * @param {array} entries Array of dom elements
 */
var intersectionCallback = function intersectionCallback(entries) {
  entries.forEach(function (entry) {
    // 1.
    if (entry.isIntersecting && !entry.target.classList.contains("js-loaded")) {
      (0, _enhanceImages.default)(entry.target);
    }
  });
};

var _default = intersectionCallback;
exports.default = _default;
//# sourceMappingURL=intersectionCallback.js.map