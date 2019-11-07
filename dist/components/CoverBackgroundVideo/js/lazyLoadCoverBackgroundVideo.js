"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _intersectionCallback = _interopRequireDefault(require("./intersectionCallback"));

var _enhanceVideos = _interopRequireDefault(require("./enhanceVideos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## lazyLoadCoverBackgroundVideo
 *
 * Call `enhanceImages` for elem with the class `js-lazyload-cover-background-video` on the page.
 *
 * 1. Create an array of all the videos
 * 2. If IntersectionObsverver is available, enhance each of the videos as they
 * come into view
 * 3. Otherwise, enhance them straight away
 *
 * @param {*} root
 * @param {*} rootMargin
 */
var lazyLoadCoverBackgroundVideo = function lazyLoadCoverBackgroundVideo() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var rootMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "600px 0px 600px 0px";
  // 1.
  var videos = document.getElementsByClassName("js-lazyload-cover-background-video");
  var videosArray = Array.from(videos); // 2.

  if ("IntersectionObserver" in window) {
    var observers = [];
    var observerOptions = {
      root: root,
      // 3.
      rootMargin: rootMargin // 4.

    };
    videosArray.forEach(function (video, index) {
      observers[index] = new IntersectionObserver(_intersectionCallback.default, observerOptions);
      observers[index].observe(video);
    });
  } else {
    // 3.
    videosArray.forEach(function (image) {
      return (0, _enhanceVideos.default)(image);
    });
  }
};

var _default = lazyLoadCoverBackgroundVideo;
exports.default = _default;
//# sourceMappingURL=lazyLoadCoverBackgroundVideo.js.map