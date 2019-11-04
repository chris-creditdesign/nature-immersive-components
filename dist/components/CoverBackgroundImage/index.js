"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutCover = _interopRequireDefault(require("../LayoutCover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoverBackgroundImage = function CoverBackgroundImage(_ref) {
  var children = _ref.children,
      src = _ref.src,
      alt = _ref.alt,
      elem = _ref.elem,
      coverSpace = _ref.coverSpace,
      coverHeight = _ref.coverHeight;
  return _react.default.createElement(_LayoutCover.default, {
    className: "cover--with-background",
    elem: elem,
    coverSpace: coverSpace,
    coverHeight: coverHeight
  }, _react.default.createElement("img", {
    className: "cover__background",
    src: src,
    alt: alt,
    loading: "lazy"
  }), children);
};

CoverBackgroundImage.defaultProps = {
  elem: "div",
  coverSpace: null,
  coverHeight: null
};
CoverBackgroundImage.propTypes = {
  children: _propTypes.default.node.isRequired,
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,

  /** Type of element to create */
  elem: _propTypes.default.string,
  coverSpace: _propTypes.default.string,
  coverHeight: _propTypes.default.string
};
var _default = CoverBackgroundImage;
exports.default = _default;
//# sourceMappingURL=index.js.map