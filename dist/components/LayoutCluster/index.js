"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## LayoutCluster
 *
 * Layout component primarily used to add padding around its contents
 */
var LayoutCluster = function LayoutCluster(_ref) {
  var children = _ref.children,
      className = _ref.className,
      clusterJustifyContent = _ref.clusterJustifyContent,
      clusterSpace = _ref.clusterSpace,
      elem = _ref.elem,
      innerWrapperElemClassName = _ref.innerWrapperElemClassName,
      innerWrapperElem = _ref.innerWrapperElem;
  var innerWrapper = (0, _react.createElement)(innerWrapperElem, {
    className: innerWrapperElemClassName
  }, children);
  return (0, _react.createElement)(elem, {
    className: "cluster ".concat(className),
    style: {
      "--cluster-space": clusterSpace,
      "--cluster-justify-content": clusterJustifyContent
    }
  }, innerWrapper);
};

LayoutCluster.defaultProps = {
  className: "",
  clusterJustifyContent: null,
  clusterSpace: null,
  elem: "div",
  innerWrapperElem: "div",
  innerWrapperElemClassName: ""
};
LayoutCluster.propTypes = {
  children: _propTypes.default.node,

  /** CSS class to add custom styles */
  className: _propTypes.default.string,

  /** Flexbox justify content property */
  clusterJustifyContent: _propTypes.default.string,

  /** Amount of margin to add */
  clusterSpace: _propTypes.default.string,

  /** Type of element to create */
  elem: _propTypes.default.string,

  /** Type of element to create, to sit inside the cluster */
  innerWrapperElem: _propTypes.default.string,

  /** Optional classname to be added to innerWarrperEleme - probably
   * so it can be targeted with js
   */
  innerWrapperElemClassName: _propTypes.default.string
};
var _default = LayoutCluster;
exports.default = _default;
//# sourceMappingURL=index.js.map