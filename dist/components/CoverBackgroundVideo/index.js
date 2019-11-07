"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutCover = _interopRequireDefault(require("../LayoutCover"));

var _LayoutCluster = _interopRequireDefault(require("../LayoutCluster"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoverBackgroundImage = function CoverBackgroundImage(_ref) {
  var alt = _ref.alt,
      children = _ref.children,
      coverHeight = _ref.coverHeight,
      coverSpace = _ref.coverSpace,
      elem = _ref.elem,
      src = _ref.src;
  return _react.default.createElement(_LayoutCover.default, {
    className: "cover--with-background js-lazyload-cover-background-video",
    elem: elem,
    coverSpace: coverSpace,
    coverHeight: coverHeight
  }, _react.default.createElement("img", {
    className: "cover__background",
    src: src,
    alt: alt
  }), children, _react.default.createElement(_LayoutCluster.default, {
    clusterJustifyContent: "flex-end",
    innerWrapperElemClassName: "js-button-container"
  }));
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