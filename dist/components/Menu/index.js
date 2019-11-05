"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutBox = _interopRequireDefault(require("../LayoutBox"));

var _LayoutCluster = _interopRequireDefault(require("../LayoutCluster"));

var _LayoutSwitcher = _interopRequireDefault(require("../LayoutSwitcher"));

var _index = require("../LogosSVG/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var facebookURL = _ref.facebookURL,
      twitterURL = _ref.twitterURL,
      emailURL = _ref.emailURL,
      menuLinks = _ref.menuLinks,
      btnId = _ref.btnId,
      btnTitle = _ref.btnTitle;
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
    height: 1.6
  }))), _react.default.createElement(_LayoutCluster.default, {
    innerWrapperElem: "ul",
    clusterSpace: "var(--s-2)"
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: facebookURL,
    "data-track": "click",
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "facebook"
  }, _react.default.createElement(_index.FacebookLogoSVG, {
    height: 1.6
  }))), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: twitterURL,
    "data-track": "click",
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "twitter"
  }, _react.default.createElement(_index.TwitterLogoSVG, {
    height: 1.6
  }))), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: emailURL,
    "data-track": "click",
    "data-event-category": "menu social",
    "data-event-action": "click",
    "data-event-label": "email"
  }, _react.default.createElement(_index.EmailLogoSVG, {
    height: 1.6
  })))), _react.default.createElement("button", {
    type: "button",
    "aria-expanded": true,
    "aria-controls": btnId,
    "data-event-category": "menu",
    "data-event-action": "click",
    "data-event-label": "button",
    className: "js-menu-button font-family:sans-serif"
  }, _react.default.createElement(_index.VeggieBurgerLogoSVG, {
    title: btnTitle,
    height: 1.6
  }))), _react.default.createElement(_LayoutSwitcher.default, {
    className: "js-nav-menu",
    innerWrapperElem: "ul",
    id: btnId,
    switcherMinWidth: "var(--measure-big)"
  }, renderedLinks));
};

Menu.defaultProps = {
  btnId: "menu-list",
  btnTitle: "Show navigation menu"
};
Menu.propTypes = {
  facebookURL: _propTypes.default.string.isRequired,
  twitterURL: _propTypes.default.string.isRequired,
  emailURL: _propTypes.default.string.isRequired,
  menuLinks: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    href: _propTypes.default.string
  })),
  btnId: _propTypes.default.string,
  btnTitle: _propTypes.default.string
};
var _default = Menu;
exports.default = _default;
//# sourceMappingURL=index.js.map