"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * ## onPlayerReady
 *
 * 1. Get autoplay attribute from parent element - should be 'true' or 'false'
 * 2. If true, attempt to play the video
 *
 * @param {*} event onReady event called by the YouTube api
 */
var onPlayerReady = function onPlayerReady(event) {
  // 1.
  var parent = event.target.a.parentNode;
  var autoPlay = parent.dataset.autoPlay; // 2.

  if (autoPlay === "true") {
    event.target.playVideo();
  }
};

var _default = onPlayerReady;
exports.default = _default;
//# sourceMappingURL=onPlayerReady.js.map