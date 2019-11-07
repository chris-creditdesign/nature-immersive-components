"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## setVideoAttributes
 *
 * Apply the correct attributes to the background video.
 * Returns the video element with the correct attributes applied.
 *
 * @param {object} video The video element itself
 * @param {object} source The base url for video file
 * @param {string} id The id of the parent element
 *
 * @return {object} video The video element with attributes applied
 */
var setVideoAttributes = function setVideoAttributes(video, source, alt) {
  video.setAttribute("poster", "".concat(source, ".jpg"));
  video.setAttribute("playsinline", "");
  video.setAttribute("muted", "");
  video.setAttribute("autoplay", "");
  video.setAttribute("loop", "");
  video.classList.add("cover__background");
  video.setAttribute("aria-label", alt);
  return video;
};

var _default = setVideoAttributes;
exports.default = _default;
//# sourceMappingURL=setVideoAttributes.js.map