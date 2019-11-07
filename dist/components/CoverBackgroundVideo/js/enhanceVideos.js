"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createVideo = _interopRequireDefault(require("./createVideo"));

var _createButton = _interopRequireDefault(require("./createButton"));

var _autoPlayVideo = _interopRequireDefault(require("./autoPlayVideo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## updateButtonStatus
 *
 * Update the button to show 'play' or 'pause' with the
 * associated icon - depending on the state of the video
 */
var updateButtonStatus = function updateButtonStatus(btn, video) {
  btn.innerText = video.paused ? "Play video" : "Pause video";
};
/**
 * ## enhanceVideos
 *
 * 1. Stop if the video has already been 'enhanced'.
 * 2. Find the image element
 * 3. Create the button element to stop and start the video
 * 4. Add the button to the page
 * 5. Get the source url, and alt text from the image element.
 * Remove the img extension ie .png or .jpg
 * 6. Create the video element and add it to the page,
 * replacing the figure.
 * 7. Attempt to autplay the video
 * 8. Add an event listener so the video can be played or paused by clicking on the button
 * 9. Set the status of the button, before its first click
 * 10. Add the `js-loaded` class so that img cannot be 'enhanced' again.
 *
 * @param {*} img The `img` element to be enhanced
 */


var enhanceVideos = function enhanceVideos(elem) {
  // 1.
  if (elem.classList.contains("js-loaded")) return; // 2.

  var img = elem.querySelector("img"); // 3.

  var btn = (0, _createButton.default)("Play video", ["box", "box--border", "font-family:sans-serif", "font-size:small-1"]); // 4.

  var btnContainer = elem.querySelector(".js-button-container");
  btnContainer.appendChild(btn); // 5.

  var source = img.src.replace(/-small/, "").slice(0, -4);
  var alt = img.alt; // 6.

  var video = (0, _createVideo.default)(source, alt);
  elem.replaceChild(video, img); // 7.

  (0, _autoPlayVideo.default)(video); // 8.

  btn.addEventListener("click", function () {
    // If the video.paused is true call the play method and visa-versa
    video[video.paused ? "play" : "pause"]();
    updateButtonStatus(btn, video);
  }); // 9.

  updateButtonStatus(btn, video); // 10.

  elem.classList.add("js-loaded");
};

var _default = enhanceVideos;
exports.default = _default;
//# sourceMappingURL=enhanceVideos.js.map