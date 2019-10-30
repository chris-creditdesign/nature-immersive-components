"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## LayoutStack
 *
 * Layout component to stack content
 */
var LayoutStack = function LayoutStack(_ref) {
  var children = _ref.children,
      className = _ref.className,
      stackSpace = _ref.stackSpace,
      elem = _ref.elem;
  return (0, _react.createElement)(elem, {
    className: "stack ".concat(className),
    style: {
      "--stack-space": stackSpace
    }
  }, children);
};

LayoutStack.defaultProps = {
  stackSpace: null,
  className: "",
  elem: "div"
};
LayoutStack.propTypes = {
  children: _propTypes.default.node.isRequired,
  stackSpace: _propTypes.default.string,
  className: _propTypes.default.string,
  elem: _propTypes.default.string
};
var _default = LayoutStack;
exports.default = _default;
//# sourceMappingURL=index.js.map