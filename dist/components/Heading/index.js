"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatDate = _interopRequireDefault(require("../../utils/format-date"));

var _LayoutCenter = _interopRequireDefault(require("../LayoutCenter"));

var _LayoutStack = _interopRequireDefault(require("../LayoutStack"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */

/**
 * ## Heading
 *
 */
var Heading = function Heading(_ref) {
  var author = _ref.author,
      headline = _ref.headline,
      photographer = _ref.photographer,
      publishedAt = _ref.publishedAt,
      publishedAtString = _ref.publishedAtString,
      stand = _ref.stand;
  var authorOrPhotographerOrDate = author.length || photographer.length || publishedAt;
  return _react.default.createElement(_LayoutCenter.default, {
    className: "heading",
    elem: "header",
    centerSpace: "var(--s2)"
  }, _react.default.createElement(_LayoutStack.default, {
    stackSpace: "var(--s2)"
  }, _react.default.createElement("h1", {
    dangerouslySetInnerHTML: {
      __html: headline
    }
  }), stand.length ? _react.default.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: stand
    }
  }) : null, authorOrPhotographerOrDate ? _react.default.createElement("div", null, _react.default.createElement(_LayoutStack.default, {
    stackSpace: "var(--s-3)"
  }, author.length ? _react.default.createElement("p", {
    className: "font-weight:bold",
    dangerouslySetInnerHTML: {
      __html: author
    }
  }) : null, photographer.length ? _react.default.createElement("p", {
    className: "font-weight:bold",
    dangerouslySetInnerHTML: {
      __html: photographer
    }
  }) : null, publishedAt ? _react.default.createElement("time", {
    itemProp: "datePublished",
    dateTime: publishedAtString || null
  }, (0, _formatDate.default)(publishedAt)) : null)) : null));
};

Heading.defaultProps = {
  author: "",
  photographer: "",
  publishedAt: 0,
  publishedAtString: "",
  stand: ""
};
Heading.propTypes = {
  author: _propTypes.default.string,
  headline: _propTypes.default.string.isRequired,
  photographer: _propTypes.default.string,
  publishedAt: _propTypes.default.number,
  publishedAtString: _propTypes.default.string,
  stand: _propTypes.default.string
};
var _default = Heading;
exports.default = _default;
//# sourceMappingURL=index.js.map