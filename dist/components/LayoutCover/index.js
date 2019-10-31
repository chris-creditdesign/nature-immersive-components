"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## LayoutCover
 *
 * Layout component to vertically center elements
 */
var LayoutCover = function LayoutCover(_ref) {
  var children = _ref.children,
      className = _ref.className,
      elem = _ref.elem,
      coverSpace = _ref.coverSpace,
      coverHeight = _ref.coverHeight;
  return (0, _react.createElement)(elem, {
    className: "cover ".concat(className),
    style: {
      "--cover-space": coverSpace,
      "--cover-height": coverHeight
    }
  }, children);
};

LayoutCover.defaultProps = {
  className: "",
  elem: "div",
  coverSpace: null,
  coverHeight: null
};
LayoutCover.propTypes = {
  children: _propTypes.default.node.isRequired,

  /** CSS class to add custom styles */
  className: _propTypes.default.string,

  /** Type of element to create */
  elem: _propTypes.default.string,
  coverSpace: _propTypes.default.string,
  coverHeight: _propTypes.default.string
};
var _default = LayoutCover;
exports.default = _default;
//# sourceMappingURL=index.js.map