"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutBox = _interopRequireDefault(require("../LayoutBox"));

var _Stack = _interopRequireDefault(require("../Stack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
var StackBox = function StackBox(_ref) {
  var altText = _ref.altText,
      caption = _ref.caption,
      footnote = _ref.footnote,
      headline = _ref.headline,
      href = _ref.href,
      srcURL = _ref.srcURL,
      text = _ref.text,
      width = _ref.width,
      height = _ref.height,
      boxSpace = _ref.boxSpace,
      stackSpace = _ref.stackSpace;
  return _react.default.createElement(_LayoutBox.default, {
    className: "invert",
    boxSpace: boxSpace
  }, _react.default.createElement(_Stack.default, {
    altText: altText,
    caption: caption,
    footnote: footnote,
    headline: headline,
    href: href,
    srcURL: srcURL,
    text: text,
    width: width,
    height: height,
    stackSpace: stackSpace
  }));
};

StackBox.defaultProps = {
  altText: "",
  caption: "",
  footnote: "",
  srcURL: "",
  width: 0,
  height: 0,
  boxSpace: null,
  stackSpace: null
};
StackBox.propTypes = {
  altText: _propTypes.default.string,
  caption: _propTypes.default.string,
  footnote: _propTypes.default.string,
  headline: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired,
  srcURL: _propTypes.default.string,
  text: _propTypes.default.string.isRequired,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  boxSpace: _propTypes.default.string,
  stackSpace: _propTypes.default.string
};
var _default = StackBox;
exports.default = _default;
//# sourceMappingURL=index.js.map