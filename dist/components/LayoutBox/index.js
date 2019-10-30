"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## LayoutBox
 *
 * Layout component primarily used to add padding around its contents
 */
var LayoutBox = function LayoutBox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      elem = _ref.elem,
      role = _ref.role,
      boxSpace = _ref.boxSpace;
  return (0, _react.createElement)(elem, {
    className: "box ".concat(className),
    style: {
      "--box-space": boxSpace
    },
    role: role
  }, children);
};

LayoutBox.defaultProps = {
  className: "",
  elem: "div",
  role: null,
  boxSpace: null
};
LayoutBox.propTypes = {
  children: _propTypes.default.node.isRequired,

  /** CSS class to add custom styles */
  className: _propTypes.default.string,

  /** Type of element to create */
  elem: _propTypes.default.string,

  /** Optional to add an ARIA role */
  role: _propTypes.default.string,

  /** Amount of padding to add */
  boxSpace: _propTypes.default.string
};
var _default = LayoutBox;
exports.default = _default;
//# sourceMappingURL=index.js.map