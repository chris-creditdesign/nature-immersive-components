"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createVideo = _interopRequireDefault(require("./createVideo"));

var _autoPlayVideo = _interopRequireDefault(require("./autoPlayVideo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## enhanceImages
 *
 * Add high res-image URL, srcset and an adjacent `source` element
 * to display high-res image.
 *
 * 1. Stop is image has already been 'enhanced'.
 * 2. Stop if the src URL does not contain '-small'.
 * 3. Create the normal URL and add it to the image
 * 4. Add the `js-loaded` class so that img cannot be 'enhanced' again.
 *
 * @param {*} img The `img` element to be enhanced
 */
var enhanceVideos = function enhanceVideos(elem) {
  // 1.
  if (elem.classList.contains("js-loaded")) return;
  var img = elem.querySelector("img");
  var btn = elem.querySelector("button"); // Get the source url but remove the img extension ie .png or .jpg

  var source = img.src.replace(/-small/, "").slice(0, -4);
  var alt = img.alt;
  var video = (0, _createVideo.default)(source, alt); // Add the new video element to the page - replacing the figure

  elem.replaceChild(video, img); // Attempt to auto play the video

  (0, _autoPlayVideo.default)(video);
  /**
   * Update the button to show 'play' or 'pause' with the
   * associated icon.
   */

  var updateButtonStatus = function updateButtonStatus() {
    btn.innerText = video.paused ? "Play video" : "Pause video";
  }; // Add an event listener so the video can be played or paused
  // by clicking on the button


  btn.addEventListener("click", function () {
    // If the video.paused is true call the play method and visa-versa
    video[video.paused ? "play" : "pause"]();
    updateButtonStatus();
  });
  updateButtonStatus(); // 4.

  elem.classList.add("js-loaded");
};
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
      enhanceVideos(entry.target);
    }
  });
};
/**
 * ## lazyloadImages
 *
 * Call `enhanceImages` for each `img[loading="lazy"]` on the page.
 *
 * 1. The images can natively lazyload, so no need for the IntersectionObserver.
 * Call `enhanceImages` straight away.
 * 2. Use IntersectionObserver to load the images when they move into the viewport.
 * 3. The viewport is the root by default.
 * 4. Start loading the image when it is 600px above or below the viewport
 * 5. No lazy loading options are available so pop all the high res images onto the page.
 * @param {*} root
 * @param {*} rootMargin
 */


var lazyLoadCoverBackgroundVideo = function lazyLoadCoverBackgroundVideo() {
  var root = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var rootMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "600px 0px 600px 0px";
  var videos = document.getElementsByClassName("js-lazyload-cover-background-video");
  var videosArray = Array.from(videos);

  if ("IntersectionObserver" in window) {
    // 2.
    var observers = [];
    var observerOptions = {
      root: root,
      // 3.
      rootMargin: rootMargin // 4.

    };
    videosArray.forEach(function (video, index) {
      observers[index] = new IntersectionObserver(intersectionCallback, observerOptions);
      observers[index].observe(video);
    });
  } else {
    // 5.
    videosArray.forEach(function (image) {
      return enhanceVideos(image);
    });
  }
};

var _default = lazyLoadCoverBackgroundVideo;
exports.default = _default;
//# sourceMappingURL=lazyLoadCoverBackgroundVideo.js.map