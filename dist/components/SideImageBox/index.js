"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Stack = _interopRequireDefault(require("../Stack"));

var _LayoutGrid = _interopRequireDefault(require("../LayoutGrid"));

var _LayoutBox = _interopRequireDefault(require("../LayoutBox"));

var _ImageBasic = _interopRequireDefault(require("../ImageBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
var SideImageBox = function SideImageBox(_ref) {
  var altText = _ref.altText,
      caption = _ref.caption,
      className = _ref.className,
      footnote = _ref.footnote,
      headline = _ref.headline,
      href = _ref.href,
      srcURL = _ref.srcURL,
      text = _ref.text,
      width = _ref.width,
      height = _ref.height,
      boxSpace = _ref.boxSpace,
      gridSpace = _ref.gridSpace,
      stackSpace = _ref.stackSpace;
  return _react.default.createElement(_LayoutBox.default, {
    className: "invert ".concat(className),
    boxSpace: boxSpace
  }, _react.default.createElement(_LayoutGrid.default, {
    gridSpace: gridSpace,
    className: "aboveMin"
  }, _react.default.createElement(_ImageBasic.default, {
    altText: altText,
    caption: caption,
    srcURL: srcURL,
    width: width,
    height: height
  }), _react.default.createElement(_Stack.default, {
    stackSpace: stackSpace,
    headline: headline,
    href: href,
    text: text,
    footnote: footnote
  })));
};

SideImageBox.defaultProps = {
  footnote: null,
  boxSpace: null,
  gridSpace: null,
  stackSpace: null,
  caption: "",
  className: ""
};
SideImageBox.propTypes = {
  altText: _propTypes.default.string.isRequired,
  caption: _propTypes.default.string,
  className: _propTypes.default.string,
  footnote: _propTypes.default.string,
  headline: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired,
  srcURL: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  boxSpace: _propTypes.default.string,
  gridSpace: _propTypes.default.string,
  stackSpace: _propTypes.default.string
};
var _default = SideImageBox;
exports.default = _default;
//# sourceMappingURL=index.js.map