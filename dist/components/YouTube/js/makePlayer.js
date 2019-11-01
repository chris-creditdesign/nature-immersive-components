"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _onPlayerReady = _interopRequireDefault(require("./onPlayerReady"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * #makePlayer
 *
 * Given an object taining a YouTube id, DOM id, width and ratio of width
 * to height call the `YT.Player function to create the Youtube player iframe
 * on page.
 *
 * 1. Check if the YouTube api has been loaded
 * 2. When the player is ready call the `onPlayerReady` function
 *
 * @param {*} param0 Object containing { videoId, id, ratio, width }
 */
var makePlayer = function makePlayer(_ref) {
  var videoId = _ref.videoId,
      id = _ref.id,
      ratio = _ref.ratio,
      width = _ref.width;
  var height = parseInt(width * parseFloat(ratio), 10);
  var player = {}; // 1.

  if ("YT" in window) {
    player = new window.YT.Player(id, {
      height: height,
      width: width,
      videoId: videoId,
      events: {
        // 2.
        onReady: _onPlayerReady.default
      }
    });
  }

  return player;
};

var _default = makePlayer;
exports.default = _default;
//# sourceMappingURL=makePlayer.js.map