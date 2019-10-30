"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../LogosSVG/index");

var _LayoutStack = _interopRequireDefault(require("../LayoutStack"));

var _LayoutBox = _interopRequireDefault(require("../LayoutBox"));

var _LayoutCluster = _interopRequireDefault(require("../LayoutCluster"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react.default.createElement(_LayoutBox.default, {
    elem: "footer",
    className: "footer invert font-size:small-1 font-family:sans-serif",
    role: "contentinfo"
  }, _react.default.createElement(_LayoutStack.default, {
    stackSpace: "var(--s0)"
  }, _react.default.createElement(_index.SpringerNatureLogoSVG, {
    height: 1.5
  }), _react.default.createElement(_LayoutCluster.default, {
    innerWrapperElem: "ul"
  }, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.nature.com/info/privacy.html"
  }, "Privacy Policy")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.nature.com/info/cookies.html"
  }, "Use of cookies")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.nature.com/info/legal_notice.html"
  }, "Legal notice")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.nature.com/info/tandc.html"
  }, "Terms & Conditions")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.nature.com/info/accessibility_statement.html"
  }, "Accessibility statement"))), _react.default.createElement("small", null, "\xA9 2019 Springer Nature Limited. All rights reserved.")));
};

var _default = Footer;
exports.default = _default;
//# sourceMappingURL=index.js.map