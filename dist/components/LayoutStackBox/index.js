"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutStack = _interopRequireDefault(require("../LayoutStack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
var LayoutBoxStack = function LayoutBoxStack(_ref) {
  var altText = _ref.altText,
      caption = _ref.caption,
      footnote = _ref.footnote,
      headline = _ref.headline,
      href = _ref.href,
      srcURL = _ref.srcURL,
      text = _ref.text,
      width = _ref.width,
      height = _ref.height;
  return _react.default.createElement("div", {
    className: "box invert layout-stack-box"
  }, _react.default.createElement(_LayoutStack.default, {
    altText: altText,
    caption: caption,
    footnote: footnote,
    headline: headline,
    href: href,
    srcURL: srcURL,
    text: text,
    width: width,
    height: height
  }));
};

LayoutBoxStack.defaultProps = {
  altText: null,
  caption: null,
  footnote: null,
  srcURL: null,
  width: 0,
  height: 0
};
LayoutBoxStack.propTypes = {
  altText: _propTypes.default.string,
  caption: _propTypes.default.string,
  footnote: _propTypes.default.string,
  headline: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired,
  srcURL: _propTypes.default.string,
  text: _propTypes.default.string.isRequired,
  width: _propTypes.default.number,
  height: _propTypes.default.number
};
var _default = LayoutBoxStack;
exports.default = _default;
//# sourceMappingURL=index.js.map