"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../LogosSVG/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var menuLinks = _ref.menuLinks,
      facebookURL = _ref.facebookURL,
      twitterURL = _ref.twitterURL,
      emailURL = _ref.emailURL;
  var renderedLinks = menuLinks.map(function (elem) {
    return _react.default.createElement("li", {
      key: "".concat(elem.text, "-").concat(elem.href)
    }, _react.default.createElement("a", {
      href: elem.href,
      "data-event-category": "menu",
      "data-event-action": "click",
      "data-event-label": elem.text
    }, elem.text));
  });
  return _react.default.createElement("header", {
    className: "box menu"
  }, _react.default.createElement("div", {
    className: "cluster"
  }, _react.default.createElement("div", null, _react.default.createElement("div", {
    className: "split-after"
  }, _react.default.createElement("a", {
    href: "https://www.nature.com",
    "data-event-category": "menu",
    "data-event-action": "click",
    "data-event-label": "nature.com"
  }, _react.default.createElement(_index.NatureLogoSVG, {
    height: 2
  }))), _react.default.createElement("button", {
    type: "button",
    "aria-expanded": true,
    "aria-controls": "menu-list",
    "data-event-category": "menu",
    "data-event-action": "click",
    "data-event-label": "button"
  }, "Menu"), _react.default.createElement("div", {
    className: "switcher menu-container"
  }, _react.default.createElement("ul", {
    className: "",
    id: "menu-list",
    hidden: false
  }, renderedLinks, _react.default.createElement("li", {
    className: "cluster social-links"
  }, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: facebookURL,
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "facebook"
  }, _react.default.createElement(_index.FacebookLogoSVG, {
    height: 2
  }))), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: twitterURL,
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "twitter"
  }, _react.default.createElement(_index.TwitterLogoSVG, {
    height: 2
  }))), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: emailURL,
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "email"
  }, _react.default.createElement(_index.EmailLogoSVG, {
    height: 2
  }))))))))));
};

Menu.propTypes = {
  menuLinks: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    href: _propTypes.default.string
  })),
  facebookURL: _propTypes.default.string.isRequired,
  twitterURL: _propTypes.default.string.isRequired,
  emailURL: _propTypes.default.string.isRequired
};
var _default = Menu;
exports.default = _default;
//# sourceMappingURL=index.js.map