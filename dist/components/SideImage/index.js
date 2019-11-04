"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Stack = _interopRequireDefault(require("../Stack"));

var _LayoutGrid = _interopRequireDefault(require("../LayoutGrid"));

var _ImageBasic = _interopRequireDefault(require("../ImageBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
var SideImage = function SideImage(_ref) {
  var altText = _ref.altText,
      caption = _ref.caption,
      footnote = _ref.footnote,
      gridSpace = _ref.gridSpace,
      headline = _ref.headline,
      height = _ref.height,
      href = _ref.href,
      srcURL = _ref.srcURL,
      text = _ref.text,
      width = _ref.width,
      stackSpace = _ref.stackSpace;
  return _react.default.createElement(_LayoutGrid.default, {
    gridSpace: gridSpace
  }, _react.default.createElement(_ImageBasic.default, {
    altText: altText,
    caption: caption,
    srcURL: srcURL,
    width: width,
    height: height
  }), _react.default.createElement(_Stack.default, {
    headline: headline,
    href: href,
    text: text,
    footnote: footnote,
    stackSpace: stackSpace
  }));
};

SideImage.defaultProps = {
  footnote: null,
  gridSpace: null,
  stackSpace: null,
  caption: ""
};
SideImage.propTypes = {
  altText: _propTypes.default.string.isRequired,
  caption: _propTypes.default.string,
  footnote: _propTypes.default.string,
  headline: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired,
  srcURL: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  gridSpace: _propTypes.default.string,
  stackSpace: _propTypes.default.string
};
var _default = SideImage;
exports.default = _default;
//# sourceMappingURL=index.js.map