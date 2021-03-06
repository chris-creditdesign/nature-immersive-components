"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ImageBasic = _interopRequireDefault(require("../ImageBasic"));

var _LayoutStack = _interopRequireDefault(require("../LayoutStack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
var Stack = function Stack(_ref) {
  var altText = _ref.altText,
      caption = _ref.caption,
      className = _ref.className,
      footnote = _ref.footnote,
      headline = _ref.headline,
      href = _ref.href,
      srcURL = _ref.srcURL,
      text = _ref.text,
      width = _ref.width,
      height = _ref.height,
      stackSpace = _ref.stackSpace;
  return _react.default.createElement(_LayoutStack.default, {
    className: "content-stack ".concat(className),
    stackSpace: stackSpace
  }, srcURL.length ? _react.default.createElement(_ImageBasic.default, {
    altText: altText,
    caption: caption,
    srcURL: srcURL,
    width: width,
    height: height
  }) : null, _react.default.createElement("h3", null, _react.default.createElement("a", {
    className: "u-faux-block-link",
    href: href,
    "data-track": "click",
    "data-event-category": "body links",
    "data-event-action": "click",
    "data-event-label": headline,
    dangerouslySetInnerHTML: {
      __html: headline
    }
  })), _react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), footnote.length ? _react.default.createElement("p", {
    className: "font-size:small-1 font-family:sans-serif",
    dangerouslySetInnerHTML: {
      __html: footnote
    }
  }) : null);
};

Stack.defaultProps = {
  altText: "",
  caption: "",
  className: "",
  footnote: "",
  srcURL: "",
  width: 0,
  height: 0,
  stackSpace: null
};
Stack.propTypes = {
  altText: _propTypes.default.string,
  caption: _propTypes.default.string,
  className: _propTypes.default.string,
  footnote: _propTypes.default.string,
  headline: _propTypes.default.string.isRequired,
  href: _propTypes.default.string.isRequired,
  srcURL: _propTypes.default.string,
  text: _propTypes.default.string.isRequired,
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  stackSpace: _propTypes.default.string
};
var _default = Stack;
exports.default = _default;
//# sourceMappingURL=index.js.map