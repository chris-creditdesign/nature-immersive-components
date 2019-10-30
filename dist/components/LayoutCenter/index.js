"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## LayoutCenter
 *
 * Layout component to center content
 */
var LayoutCenter = function LayoutCenter(_ref) {
  var children = _ref.children,
      className = _ref.className,
      centerSpace = _ref.centerSpace,
      centerMeasure = _ref.centerMeasure,
      elem = _ref.elem;
  return (0, _react.createElement)(elem, {
    className: "center ".concat(className),
    style: {
      "--center-space": centerSpace,
      "--center-measure": centerMeasure
    }
  }, children);
};

LayoutCenter.defaultProps = {
  centerMeasure: null,
  centerSpace: null,
  className: "",
  elem: "div"
};
LayoutCenter.propTypes = {
  centerMeasure: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  centerSpace: _propTypes.default.string,
  className: _propTypes.default.string,
  elem: _propTypes.default.string
};
var _default = LayoutCenter;
exports.default = _default;
//# sourceMappingURL=index.js.map