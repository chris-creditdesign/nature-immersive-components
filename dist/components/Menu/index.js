"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutBox = _interopRequireDefault(require("../LayoutBox"));

var _LayoutCluster = _interopRequireDefault(require("../LayoutCluster"));

var _index = require("../LogosSVG/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var facebookURL = _ref.facebookURL,
      twitterURL = _ref.twitterURL,
      emailURL = _ref.emailURL;
  return _react.default.createElement(_LayoutBox.default, {
    className: "menu invert",
    elem: "header",
    role: "banner"
  }, _react.default.createElement(_LayoutCluster.default, null, _react.default.createElement("div", {
    className: "cluster__split-after"
  }, _react.default.createElement("a", {
    href: "https://www.nature.com",
    "data-track": "click",
    "data-event-category": "menu",
    "data-event-action": "click",
    "data-event-label": "nature.com"
  }, _react.default.createElement(_index.NatureLogoSVG, {
    height: 2
  }))), _react.default.createElement(_LayoutCluster.default, {
    innerWrapperElem: "ul"
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: facebookURL,
    "data-track": "click",
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "facebook"
  }, _react.default.createElement(_index.FacebookLogoSVG, {
    height: 2
  }))), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: twitterURL,
    "data-track": "click",
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "twitter"
  }, _react.default.createElement(_index.TwitterLogoSVG, {
    height: 2
  }))), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: emailURL,
    "data-track": "click",
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "email"
  }, _react.default.createElement(_index.EmailLogoSVG, {
    height: 2
  }))))));
};

Menu.propTypes = {
  facebookURL: _propTypes.default.string.isRequired,
  twitterURL: _propTypes.default.string.isRequired,
  emailURL: _propTypes.default.string.isRequired
};
var _default = Menu;
exports.default = _default;
//# sourceMappingURL=index.js.map