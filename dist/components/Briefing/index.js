"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutCluster = _interopRequireDefault(require("../LayoutCluster"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Briefing = function Briefing() {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("p", null, "Sign up for the daily ", _react.default.createElement("em", null, "Nature Briefing"), " email newsletter"), _react.default.createElement("p", null, "Stay up to date with what matters in science and why, handpicked from ", _react.default.createElement("em", null, "Nature"), " and other publications worldwide."), _react.default.createElement(_LayoutCluster.default, {
    clusterJustifyContent: "flex-end"
  }, _react.default.createElement("a", {
    href: "https://www.nature.com/briefing/signup/",
    className: "box box__link invert font-family:sans-serif",
    "data-track": "click",
    "data-event-category": "body links",
    "data-event-action": "click",
    "data-event-label": "nature briefing"
  }, "Sign up")));
};

var _default = Briefing;
exports.default = _default;
//# sourceMappingURL=index.js.map