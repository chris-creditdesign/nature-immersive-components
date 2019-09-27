"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var _index = require("../LogosSVG/index");

var _generateSocialUrls = _interopRequireDefault(require("../../utils/generate-social-urls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainHeader = function MainHeader(_ref) {
  var altPdfAvailable = _ref.altPdfAvailable,
      altPdfBlurb = _ref.altPdfBlurb,
      articleURL = _ref.articleURL,
      doi = _ref.doi,
      headline = _ref.headline,
      pdfAvailable = _ref.pdfAvailable,
      stand = _ref.stand;

  var _generateSocialURLs = (0, _generateSocialUrls.default)(doi, articleURL, headline, stand),
      pdfURL = _generateSocialURLs.pdfURL,
      altPdfURL = _generateSocialURLs.altPdfURL,
      facebookURL = _generateSocialURLs.facebookURL,
      twitterURL = _generateSocialURLs.twitterURL,
      emailURL = _generateSocialURLs.emailURL;

  return (0, _core.jsx)(_styles.StyledMainHeader, null, (0, _core.jsx)(_styles.StyledList, null, (0, _core.jsx)("li", {
    className: "home-page",
    "data-container": "main external links"
  }, (0, _core.jsx)("a", {
    href: "https://www.nature.com/nature/",
    "data-track": "click",
    "data-track-label": "journal-homepage",
    "data-category": "external"
  }, (0, _core.jsx)(_index.NatureLogoSVG, {
    height: 2
  }))), (0, _core.jsx)("li", {
    className: "current-issue",
    "data-container": "main external links"
  }, (0, _core.jsx)("a", {
    href: "https://www.nature.com/nature/current_issue.html",
    "data-track": "click",
    "data-track-label": "current-issue",
    "data-category": "external"
  }, "Current issue")), pdfAvailable ? (0, _core.jsx)("li", {
    className: "pdf",
    "data-container": "main external links"
  }, (0, _core.jsx)("a", {
    href: pdfURL,
    "data-track": "click",
    "data-track-label": "pdf-version",
    "data-category": "external"
  }, (0, _core.jsx)(_index.PdfLogoSVG, null), (0, _core.jsx)("span", null, "PDF version"))) : null, altPdfAvailable ? (0, _core.jsx)("li", {
    "data-container": "main external links"
  }, (0, _core.jsx)("a", {
    href: altPdfURL,
    "data-track": "click",
    "data-track-label": "alt-pdf-version",
    "data-category": "external"
  }, (0, _core.jsx)(_index.PdfLogoSVG, null), (0, _core.jsx)("span", null, altPdfBlurb))) : null, (0, _core.jsx)("li", {
    className: " main-header__list__item  main-header__list__item--social "
  }, (0, _core.jsx)(_styles.StyledListSocial, {
    className: "main-header__social-list",
    "aria-label": "Social sharing",
    "data-container": "main social links"
  }, (0, _core.jsx)("li", {
    className: "main-header__social-list__item"
  }, (0, _core.jsx)("a", {
    href: facebookURL,
    "data-track": "click",
    "data-track-label": "facebook",
    "data-category": "social",
    target: "_blank",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)(_index.FacebookLogoSVG, {
    height: 2
  }))), (0, _core.jsx)("li", {
    className: "main-header__social-list__item"
  }, (0, _core.jsx)("a", {
    href: twitterURL,
    "data-track": "click",
    "data-track-label": "twitter",
    "data-category": "social",
    target: "_blank",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)(_index.TwitterLogoSVG, {
    height: 2
  }))), (0, _core.jsx)("li", {
    className: "main-header__social-list__item"
  }, (0, _core.jsx)("a", {
    href: emailURL,
    "data-track": "click",
    "data-track-label": "email",
    "data-category": "social",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)(_index.EmailLogoSVG, {
    height: 2
  })))))));
};

MainHeader.propTypes = {
  altPdfAvailable: _propTypes.default.bool.isRequired,
  altPdfBlurb: _propTypes.default.string.isRequired,
  articleURL: _propTypes.default.string.isRequired,
  doi: _propTypes.default.string.isRequired,
  headline: _propTypes.default.string.isRequired,
  pdfAvailable: _propTypes.default.bool.isRequired,
  stand: _propTypes.default.string.isRequired
};
var _default = MainHeader;
exports.default = _default;
MainHeader.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "MainHeader",
  "props": {
    "altPdfAvailable": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "altPdfBlurb": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "articleURL": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "doi": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "headline": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "pdfAvailable": {
      "type": {
        "name": "bool"
      },
      "required": true,
      "description": ""
    },
    "stand": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW5IZWFkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbIk1haW5IZWFkZXIiLCJhbHRQZGZBdmFpbGFibGUiLCJhbHRQZGZCbHVyYiIsImFydGljbGVVUkwiLCJkb2kiLCJoZWFkbGluZSIsInBkZkF2YWlsYWJsZSIsInN0YW5kIiwicGRmVVJMIiwiYWx0UGRmVVJMIiwiZmFjZWJvb2tVUkwiLCJ0d2l0dGVyVVJMIiwiZW1haWxVUkwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQVFiO0FBQUEsTUFQTEMsZUFPSyxRQVBMQSxlQU9LO0FBQUEsTUFOTEMsV0FNSyxRQU5MQSxXQU1LO0FBQUEsTUFMTEMsVUFLSyxRQUxMQSxVQUtLO0FBQUEsTUFKTEMsR0FJSyxRQUpMQSxHQUlLO0FBQUEsTUFITEMsUUFHSyxRQUhMQSxRQUdLO0FBQUEsTUFGTEMsWUFFSyxRQUZMQSxZQUVLO0FBQUEsTUFETEMsS0FDSyxRQURMQSxLQUNLOztBQUFBLDRCQU9ELGlDQUFtQkgsR0FBbkIsRUFBd0JELFVBQXhCLEVBQW9DRSxRQUFwQyxFQUE4Q0UsS0FBOUMsQ0FQQztBQUFBLE1BRUpDLE1BRkksdUJBRUpBLE1BRkk7QUFBQSxNQUdKQyxTQUhJLHVCQUdKQSxTQUhJO0FBQUEsTUFJSkMsV0FKSSx1QkFJSkEsV0FKSTtBQUFBLE1BS0pDLFVBTEksdUJBS0pBLFVBTEk7QUFBQSxNQU1KQyxRQU5JLHVCQU1KQSxRQU5JOztBQVNMLFNBQ0MsZUFBQyx3QkFBRCxRQUNDLGVBQUMsa0JBQUQsUUFDQztBQUNDLElBQUEsU0FBUyxFQUFDLFdBRFg7QUFFQyxzQkFBZTtBQUZoQixLQUlDO0FBQ0MsSUFBQSxJQUFJLEVBQUMsZ0NBRE47QUFF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cm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBTdHlsZWRNYWluSGVhZGVyLCBTdHlsZWRMaXN0LCBTdHlsZWRMaXN0U29jaWFsIH0gZnJvbSBcIi4vc3R5bGVzXCJcbmltcG9ydCB7XG5cdEVtYWlsTG9nb1NWRyxcblx0RmFjZWJvb2tMb2dvU1ZHLFxuXHROYXR1cmVMb2dvU1ZHLFxuXHRQZGZMb2dvU1ZHLFxuXHRUd2l0dGVyTG9nb1NWRyxcbn0gZnJvbSBcIi4uL0xvZ29zU1ZHL2luZGV4XCJcbmltcG9ydCBnZW5lcmF0ZVNvY2lhbFVSTHMgZnJvbSBcIi4uLy4uL3V0aWxzL2dlbmVyYXRlLXNvY2lhbC11cmxzXCJcblxuY29uc3QgTWFpbkhlYWRlciA9ICh7XG5cdGFsdFBkZkF2YWlsYWJsZSxcblx0YWx0UGRmQmx1cmIsXG5cdGFydGljbGVVUkwsXG5cdGRvaSxcblx0aGVhZGxpbmUsXG5cdHBkZkF2YWlsYWJsZSxcblx0c3RhbmQsXG59KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRwZGZVUkwsXG5cdFx0YWx0UGRmVVJMLFxuXHRcdGZhY2Vib29rVVJMLFxuXHRcdHR3aXR0ZXJVUkwsXG5cdFx0ZW1haWxVUkwsXG5cdH0gPSBnZW5lcmF0ZVNvY2lhbFVSTHMoZG9pLCBhcnRpY2xlVVJMLCBoZWFkbGluZSwgc3RhbmQpXG5cblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkTWFpbkhlYWRlcj5cblx0XHRcdDxTdHlsZWRMaXN0PlxuXHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJob21lLXBhZ2VcIlxuXHRcdFx0XHRcdGRhdGEtY29udGFpbmVyPVwibWFpbiBleHRlcm5hbCBsaW5rc1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3Lm5hdHVyZS5jb20vbmF0dXJlL1wiXG5cdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0ZGF0YS10cmFjay1sYWJlbD1cImpvdXJuYWwtaG9tZXBhZ2VcIlxuXHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cImV4dGVybmFsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8TmF0dXJlTG9nb1NWRyBoZWlnaHQ9ezJ9IC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdDxsaVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1cnJlbnQtaXNzdWVcIlxuXHRcdFx0XHRcdGRhdGEtY29udGFpbmVyPVwibWFpbiBleHRlcm5hbCBsaW5rc1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3Lm5hdHVyZS5jb20vbmF0dXJlL2N1cnJlbnRfaXNzdWUuaHRtbFwiXG5cdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0ZGF0YS10cmFjay1sYWJlbD1cImN1cnJlbnQtaXNzdWVcIlxuXHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cImV4dGVybmFsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRDdXJyZW50IGlzc3VlXG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdHtwZGZBdmFpbGFibGUgPyAoXG5cdFx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwZGZcIlxuXHRcdFx0XHRcdFx0ZGF0YS1jb250YWluZXI9XCJtYWluIGV4dGVybmFsIGxpbmtzXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXtwZGZVUkx9XG5cdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2s9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2stbGFiZWw9XCJwZGYtdmVyc2lvblwiXG5cdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJleHRlcm5hbFwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxQZGZMb2dvU1ZHIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPlBERiB2ZXJzaW9uPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdHthbHRQZGZBdmFpbGFibGUgPyAoXG5cdFx0XHRcdFx0PGxpIGRhdGEtY29udGFpbmVyPVwibWFpbiBleHRlcm5hbCBsaW5rc1wiPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0aHJlZj17YWx0UGRmVVJMfVxuXHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiYWx0LXBkZi12ZXJzaW9uXCJcblx0XHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cImV4dGVybmFsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFBkZkxvZ29TVkcgLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0e2FsdFBkZkJsdXJifVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiXG5cdFx0XHRcdFx0bWFpbi1oZWFkZXJfX2xpc3RfX2l0ZW0gXG5cdFx0XHRcdFx0bWFpbi1oZWFkZXJfX2xpc3RfX2l0ZW0tLXNvY2lhbFxuXHRcdFx0XHRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFN0eWxlZExpc3RTb2NpYWxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19zb2NpYWwtbGlzdFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiU29jaWFsIHNoYXJpbmdcIlxuXHRcdFx0XHRcdFx0ZGF0YS1jb250YWluZXI9XCJtYWluIHNvY2lhbCBsaW5rc1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19zb2NpYWwtbGlzdF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmFjZWJvb2tVUkxcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjaz1cImNsaWNrXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiZmFjZWJvb2tcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJzb2NpYWxcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8RmFjZWJvb2tMb2dvU1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fc29jaWFsLWxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtcblx0XHRcdFx0XHRcdFx0XHRcdHR3aXR0ZXJVUkxcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjaz1cImNsaWNrXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwidHdpdHRlclwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cInNvY2lhbFwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxUd2l0dGVyTG9nb1NWR1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0MlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX3NvY2lhbC1saXN0X19pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0aHJlZj17ZW1haWxVUkx9XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjaz1cImNsaWNrXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJzb2NpYWxcIlxuXHRcdFx0XHRcdFx0XHRcdHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PEVtYWlsTG9nb1NWR1xuXHRcdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0MlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PC9TdHlsZWRMaXN0U29jaWFsPlxuXHRcdFx0XHQ8L2xpPlxuXHRcdFx0PC9TdHlsZWRMaXN0PlxuXHRcdDwvU3R5bGVkTWFpbkhlYWRlcj5cblx0KVxufVxuXG5NYWluSGVhZGVyLnByb3BUeXBlcyA9IHtcblx0YWx0UGRmQXZhaWxhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXHRhbHRQZGZCbHVyYjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRhcnRpY2xlVVJMOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGRvaTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRoZWFkbGluZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRwZGZBdmFpbGFibGU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cdHN0YW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXJcbiJdfQ==