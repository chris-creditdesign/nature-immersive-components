"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## LayoutFrame
 *
 * Layout component
 */
var LayoutFrame = function LayoutFrame(_ref) {
  var children = _ref.children,
      className = _ref.className,
      elem = _ref.elem,
      frameNumerator = _ref.frameNumerator,
      frameDenominator = _ref.frameDenominator;
  return (0, _react.createElement)(elem, {
    className: "frame ".concat(className),
    style: {
      "--n": frameNumerator,
      "--d": frameDenominator
    }
  }, children);
};

LayoutFrame.defaultProps = {
  className: "",
  elem: "div"
};
LayoutFrame.propTypes = {
  children: _propTypes.default.node.isRequired,

  /** CSS class to add custom styles */
  className: _propTypes.default.string,

  /** Type of element to create */
  elem: _propTypes.default.string,
  frameNumerator: _propTypes.default.number.isRequired,
  frameDenominator: _propTypes.default.number.isRequired
};
var _default = LayoutFrame;
exports.default = _default;
//# sourceMappingURL=index.js.map