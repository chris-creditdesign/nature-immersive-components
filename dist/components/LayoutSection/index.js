"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutSection = function LayoutSection(_ref) {
  var headline = _ref.headline,
      children = _ref.children;
  return _react.default.createElement("section", {
    className: "center",
    style: {
      "--space": "var(--s1)"
    }
  }, _react.default.createElement("div", {
    className: "stack",
    style: {
      "--space": "var(--s1)"
    }
  }, headline ? _react.default.createElement("h2", {
    className: "border-above"
  }, headline) : null, children));
};

LayoutSection.defaultProps = {
  headline: null
};
LayoutSection.propTypes = {
  headline: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
var _default = LayoutSection;
exports.default = _default;
//# sourceMappingURL=index.js.map