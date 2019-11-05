"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Attempt to play the full screen video element.
 * Catch an error if this is not possible
 *
 * @param {object} video The video element to play
 */
var autoPlayFullScreenVideo = function autoPlayFullScreenVideo(video) {
  var promise = video.play();

  if (promise !== undefined) {
    promise.then(function () {// Auto play started
    }).catch(function (error) {
      // Autoplay was prevented
      Error(error, "Autoplay was prevented");
    });
  }
};

var _default = autoPlayFullScreenVideo;
exports.default = _default;
//# sourceMappingURL=autoPlayVideo.js.map