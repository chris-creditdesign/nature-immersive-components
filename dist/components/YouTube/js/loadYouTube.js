"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makePlayer = _interopRequireDefault(require("./makePlayer"));

var _checkWidth = _interopRequireDefault(require("./checkWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## loadYouTube
 *
 * 1. Create an array to keep track of all the youtube players on page
 * 2. Create the ResizeObserver and add pass in the `checkWidth` function
 * 3. Load the IFrame Player API code asynchronously.
 * 4. Get each of the videos on page and add them to the `videosAsObjects` array
 * as an object containing their dataset attributes
 * 5. This function runs only once, it is called by the youtube iframe
 * api once it is loaded. Create a youtube player for each video in the `videosAsObjects`
 * array and push them into the `players` array.
 * 6. Observe each of the video's containers. When the contanier's size changes this should
 * trigger `checkWidth` to update the size of the video's iframe.
 *
 */
var loadYouTube = function loadYouTube() {
  // 1.
  var players = []; // 2.

  var observer = "ResizeObserver" in window ? new ResizeObserver(_checkWidth.default) : null; // 3.

  var tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // 4.

  var videosAsObjects = Array.from(document.getElementsByClassName("js-load-youtube"), function (video) {
    var _video$dataset = video.dataset,
        videoId = _video$dataset.videoId,
        ratio = _video$dataset.ratio,
        autoPlay = _video$dataset.autoPlay,
        id = _video$dataset.id;
    return {
      videoId: videoId,
      ratio: ratio,
      autoPlay: autoPlay,
      id: id,
      container: video
    };
  }); // 5.

  window.onYouTubeIframeAPIReady = function () {
    var youtubePlayers = videosAsObjects.map(function (elem) {
      var width = parseInt(elem.container.offsetWidth, 10);
      var player = (0, _makePlayer.default)({
        videoId: elem.videoId,
        id: elem.id,
        ratio: elem.ratio,
        width: width
      });
      return player;
    });
    youtubePlayers.forEach(function (player) {
      return players.push(player);
    }); // players.push(...youtubePlayers)
  }; // 6.


  videosAsObjects.forEach(function (thisVideo) {
    if (observer) observer.observe(thisVideo.container);
  });
};

var _default = loadYouTube;
exports.default = _default;
//# sourceMappingURL=loadYouTube.js.map