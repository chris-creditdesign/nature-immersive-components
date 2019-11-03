"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutSwitcher = _interopRequireDefault(require("../LayoutSwitcher"));

var _LayoutCluster = _interopRequireDefault(require("../LayoutCluster"));

var _LayoutBox = _interopRequireDefault(require("../LayoutBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuReveal = function MenuReveal(_ref) {
  var menuLinks = _ref.menuLinks,
      id = _ref.id,
      labelText = _ref.labelText,
      btnText = _ref.btnText;
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
    elem: "nav",
    className: "menu menu--reveal invert font-family:sans-serif"
  }, _react.default.createElement(_LayoutCluster.default, null, _react.default.createElement("p", {
    id: "series-article-navigation",
    className: "series-article-nav__header",
    dangerouslySetInnerHTML: {
      __html: labelText
    }
  }), _react.default.createElement("button", {
    type: "button",
    "aria-expanded": true,
    "aria-controls": id,
    "data-event-category": "menu",
    "data-event-action": "click",
    "data-event-label": "button",
    className: "js-menu-button font-family:sans-serif"
  }, btnText)), _react.default.createElement(_LayoutSwitcher.default, {
    innerWrapperElem: "ul",
    id: id,
    switcherMinWidth: "var(--measure-big)"
  }, renderedLinks));
};

MenuReveal.defaultProps = {
  id: "menu-list"
};
MenuReveal.propTypes = {
  menuLinks: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string,
    href: _propTypes.default.string
  })),
  id: _propTypes.default.string,
  labelText: _propTypes.default.string.isRequired,
  btnText: _propTypes.default.string.isRequired
};
var _default = MenuReveal;
exports.default = _default;
//# sourceMappingURL=index.js.map