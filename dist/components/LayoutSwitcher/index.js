"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## LayoutSwitcher
 *
 * Layout component primarily used to ....
 */
var LayoutSwitcher = function LayoutSwitcher(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      switcherSpace = _ref.switcherSpace,
      switcherMinWidth = _ref.switcherMinWidth,
      elem = _ref.elem,
      innerWrapperElem = _ref.innerWrapperElem;
  var innerWrapper = (0, _react.createElement)(innerWrapperElem, {}, children);
  return (0, _react.createElement)(elem, {
    className: "switcher ".concat(className),
    id: id,
    style: {
      "--switcher-space": switcherSpace,
      "--switcher-min-width": switcherMinWidth
    }
  }, innerWrapper);
};

LayoutSwitcher.defaultProps = {
  className: "",
  id: "",
  switcherSpace: null,
  switcherMinWidth: null,
  elem: "div",
  innerWrapperElem: "div"
};
LayoutSwitcher.propTypes = {
  children: _propTypes.default.node.isRequired,

  /** CSS class to add custom styles */
  className: _propTypes.default.string,
  id: _propTypes.default.string,

  /** Amount of margin to add */
  switcherSpace: _propTypes.default.string,
  switcherMinWidth: _propTypes.default.string,

  /** Type of element to create */
  elem: _propTypes.default.string,

  /** Type of element to create, to sit inside the cluster */
  innerWrapperElem: _propTypes.default.string
};
var _default = LayoutSwitcher;
exports.default = _default;
//# sourceMappingURL=index.js.map