"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Image = function Image(_ref) {
  var altText = _ref.altText,
      caption = _ref.caption,
      srcURL = _ref.srcURL,
      className = _ref.className,
      captionSpace = _ref.captionSpace,
      width = _ref.width,
      height = _ref.height;
  return _react.default.createElement("figure", {
    className: className,
    style: {
      "--caption-space": captionSpace
    }
  }, _react.default.createElement("picture", null, _react.default.createElement("img", {
    src: srcURL,
    alt: altText,
    intrinsicsize: "".concat(width, " x ").concat(height),
    style: {
      width: "100%"
    },
    loading: "lazy"
  })), _react.default.createElement("figcaption", {
    className: "font-size:small-1 font-family:sans-serif",
    dangerouslySetInnerHTML: {
      __html: caption
    }
  }));
};

Image.defaultProps = {
  className: "",
  caption: "",
  captionSpace: "none"
};
Image.propTypes = {
  className: _propTypes.default.string,
  altText: _propTypes.default.string.isRequired,
  caption: _propTypes.default.string,
  srcURL: _propTypes.default.string.isRequired,
  captionSpace: _propTypes.default.string,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};
var _default = Image;
exports.default = _default;
//# sourceMappingURL=index.js.map