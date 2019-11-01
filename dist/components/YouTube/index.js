"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YouTube = function YouTube(_ref) {
  var id = _ref.id,
      ratio = _ref.ratio,
      videoId = _ref.videoId,
      placeHolderImgSrc = _ref.placeHolderImgSrc,
      alt = _ref.alt,
      autoPlay = _ref.autoPlay;
  return _react.default.createElement("div", {
    className: "youtube js-load-youtube",
    "data-video-id": videoId,
    "data-ratio": ratio,
    "data-auto-play": autoPlay,
    "data-id": id
  }, _react.default.createElement("figure", {
    id: id
  }, _react.default.createElement("img", {
    src: placeHolderImgSrc,
    alt: alt
  }), _react.default.createElement("figcaption", {
    className: "font-size:small-1 font-family:sans-serif"
  }, "View the video", " ", _react.default.createElement("a", {
    href: "https://youtu.be/".concat(videoId)
  }, "here"), ".")));
};

YouTube.defaultProps = {
  ratio: 0.5625,
  autoPlay: false
};
YouTube.propTypes = {
  id: _propTypes.default.string.isRequired,
  ratio: _propTypes.default.number,
  videoId: _propTypes.default.string.isRequired,
  placeHolderImgSrc: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  autoPlay: _propTypes.default.bool
};
var _default = YouTube;
exports.default = _default;
//# sourceMappingURL=index.js.map