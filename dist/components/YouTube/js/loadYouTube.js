"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _makePlayer = _interopRequireDefault(require("./makePlayer"));

var _checkWidth = _interopRequireDefault(require("./checkWidth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var _document$getElements = document.getElementsByTagName("script"),
      _document$getElements2 = _slicedToArray(_document$getElements, 1),
      firstScriptTag = _document$getElements2[0];

  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // 4.

  var videosAsObjects = Array.from(document.getElementsByClassName("js-load-youtube"), function (video) {
    return _objectSpread({}, video.dataset, {
      container: video
    });
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
    players.push.apply(players, _toConsumableArray(youtubePlayers));
  }; // 6.


  videosAsObjects.forEach(function (thisVideo) {
    if (observer) observer.observe(thisVideo.container);
  });
};

var _default = loadYouTube;
exports.default = _default;
//# sourceMappingURL=loadYouTube.js.map