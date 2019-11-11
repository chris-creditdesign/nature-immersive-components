"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoAutoplay = function VideoAutoplay(_ref) {
  var altText = _ref.altText,
      caption = _ref.caption,
      srcURL = _ref.srcURL,
      className = _ref.className,
      captionSpace = _ref.captionSpace;
  return _react.default.createElement("figure", {
    className: "js-lazyload-video-autoplay ".concat(className),
    style: {
      "--caption-space": captionSpace
    }
  }, _react.default.createElement("img", {
    src: srcURL,
    alt: altText
  }), caption.length ? _react.default.createElement("figcaption", {
    className: "font-size:small-1 font-family:sans-serif",
    dangerouslySetInnerHTML: {
      __html: caption
    }
  }) : null);
};

VideoAutoplay.defaultProps = {
  className: "",
  caption: "",
  captionSpace: "none"
};
VideoAutoplay.propTypes = {
  className: _propTypes.default.string,
  altText: _propTypes.default.string.isRequired,
  caption: _propTypes.default.string,
  srcURL: _propTypes.default.string.isRequired,
  captionSpace: _propTypes.default.string
};
var _default = VideoAutoplay;
exports.default = _default;
//# sourceMappingURL=index.js.map