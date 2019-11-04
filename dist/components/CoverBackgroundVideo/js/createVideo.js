"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _setVideoAttributes = _interopRequireDefault(require("./setVideoAttributes"));

var _setSourceAttributes = _interopRequireDefault(require("./setSourceAttributes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates a video element to be used as the background for a
 * full-screen-media--video element.
 *
 * @param {string} src The base url for video file
 *
 * @return {object} The video element to add to the page
 */
var createVideo = function createVideo(src, alt) {
  // Create the video and the source elements
  var video = document.createElement("video");
  var srcWebm = document.createElement("source");
  var srcMp4 = document.createElement("source"); // Set the attributes of the video and the source elements

  var videoWithAttributes = (0, _setVideoAttributes.default)(video, src, alt);
  var srcWebmWithAttributes = (0, _setSourceAttributes.default)(srcWebm, src, "webm");
  var srcMp4WithAttributes = (0, _setSourceAttributes.default)(srcMp4, src, "mp4"); // Append the source elemnets to the video element

  videoWithAttributes.appendChild(srcWebmWithAttributes);
  videoWithAttributes.appendChild(srcMp4WithAttributes); // Return the video element

  return videoWithAttributes;
};

var _default = createVideo;
exports.default = _default;
//# sourceMappingURL=createVideo.js.map