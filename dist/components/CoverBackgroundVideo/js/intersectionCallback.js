"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _enhanceVideos = _interopRequireDefault(require("./enhanceVideos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## intersectionCallback
 *
 * When the observed elements enter the screen, call `enhanceVideos` on each of them.
 *
 * 1. Only call `enchanceVideos` if the entry is on screen AND the class `js-loaded` is not present.
 *
 * @param {array} entries Array of dom elements
 */
var intersectionCallback = function intersectionCallback(entries) {
  entries.forEach(function (entry) {
    // 1.
    if (entry.isIntersecting && !entry.target.classList.contains("js-loaded")) {
      (0, _enhanceVideos.default)(entry.target);
    }
  });
};

var _default = intersectionCallback;
exports.default = _default;
//# sourceMappingURL=intersectionCallback.js.map