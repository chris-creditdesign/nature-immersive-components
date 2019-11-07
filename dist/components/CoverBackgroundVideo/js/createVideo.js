"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _setVideoAttributes = _interopRequireDefault(require("./setVideoAttributes"));

var _setSourceAttributes = _interopRequireDefault(require("./setSourceAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## createVideo
 *
 * Creates a video element to be used as the background for a
 * full-screen-media--video element.
 *
 * 1. Create the video and the source elements
 * 2. Set the attributes of the video and the source elements
 * 3. Append the source elemnets to the video element
 * 4. Return the video element
 *
 * @param {string} src The base url for video file
 * @param {string} alt
 *
 * @return {object} The video element to add to the page
 */
var createVideo = function createVideo(src, alt) {
  // 1.
  var video = document.createElement("video");
  var srcWebm = document.createElement("source");
  var srcMp4 = document.createElement("source"); // 2.

  var videoWithAttributes = (0, _setVideoAttributes.default)(video, src, alt);
  var srcWebmWithAttributes = (0, _setSourceAttributes.default)(srcWebm, src, "webm");
  var srcMp4WithAttributes = (0, _setSourceAttributes.default)(srcMp4, src, "mp4"); // 3.

  videoWithAttributes.appendChild(srcWebmWithAttributes);
  videoWithAttributes.appendChild(srcMp4WithAttributes); // 4.

  return videoWithAttributes;
};

var _default = createVideo;
exports.default = _default;
//# sourceMappingURL=createVideo.js.map