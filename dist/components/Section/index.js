"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutCenter = _interopRequireDefault(require("../LayoutCenter"));

var _LayoutStack = _interopRequireDefault(require("../LayoutStack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(_ref) {
  var headline = _ref.headline,
      className = _ref.className,
      children = _ref.children,
      centerMeasure = _ref.centerMeasure,
      centerSpace = _ref.centerSpace,
      stackSpace = _ref.stackSpace;
  return _react.default.createElement(_LayoutCenter.default, {
    elem: "section",
    className: className,
    centerSpace: centerSpace,
    centerMeasure: centerMeasure
  }, _react.default.createElement(_LayoutStack.default, {
    stackSpace: stackSpace
  }, headline.length ? _react.default.createElement("h2", {
    className: "border-above"
  }, headline) : null, children));
};

Section.defaultProps = {
  headline: "",
  className: "",
  centerMeasure: null,
  centerSpace: null,
  stackSpace: null
};
Section.propTypes = {
  headline: _propTypes.default.string,
  className: _propTypes.default.string,
  centerMeasure: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  centerSpace: _propTypes.default.string,
  stackSpace: _propTypes.default.string
};
var _default = Section;
exports.default = _default;
//# sourceMappingURL=index.js.map