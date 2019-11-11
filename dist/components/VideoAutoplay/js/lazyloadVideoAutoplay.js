"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createIntersectionObserver = _interopRequireDefault(require("../../js/createIntersectionObserver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhanceVideos = function enhanceVideos(elem) {
  return console.log(elem);
};
/**
 * ## lazyloadVideoAutoplay
 *
 * Call `enhanceVideos` for elem with the class `js-lazyload-video-autoplay` on the page.
 *
 * 1. Use IntersectionObserver to load the videos when they move into the viewport.
 * 3. The viewport is the root by default.
 * 4. Start loading the video when it is 600px above or below the viewport
 * 5. Intersection observer is not available, so load the video immediately
 * @param {*} root
 * @param {*} rootMargin
 */


var lazyloadVideoAutoplay = function lazyloadVideoAutoplay() {
  (0, _createIntersectionObserver.default)("js-lazyload-video-autoplay", enhanceVideos);
};

var _default = lazyloadVideoAutoplay;
exports.default = _default;
//# sourceMappingURL=lazyloadVideoAutoplay.js.map