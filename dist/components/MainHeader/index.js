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

  return (0, _core.jsx)(_styles.StyledBox, {
    elem: "header"
  }, (0, _core.jsx)(_styles.StyledCluster, {
    elemWrapper: "ul",
    justifyContent: "flex-end",
    splitAfter: ".current-issue",
    dataContainer: "main external links"
  }, (0, _core.jsx)("li", null, (0, _core.jsx)("a", {
    href: "https://www.nature.com/nature/",
    "data-track": "click",
    "data-track-label": "journal-homepage",
    "data-category": "external"
  }, (0, _core.jsx)(_index.NatureLogoSVG, {
    height: 2
  }))), (0, _core.jsx)("li", {
    className: "current-issue"
  }, (0, _core.jsx)("a", {
    href: "https://www.nature.com/nature/current_issue.html",
    "data-track": "click",
    "data-track-label": "current-issue",
    "data-category": "external"
  }, "Current issue")), pdfAvailable || altPdfAvailable ? (0, _core.jsx)(_styles.StyledCluster, {
    elem: "li",
    elemWrapper: "ul",
    ariaLabel: "PDF download"
  }, pdfAvailable ? (0, _core.jsx)("li", null, (0, _core.jsx)("a", {
    href: pdfURL,
    "data-track": "click",
    "data-track-label": "pdf-version",
    "data-category": "external"
  }, "PDF version")) : null, altPdfAvailable ? (0, _core.jsx)("li", null, (0, _core.jsx)("a", {
    href: altPdfURL,
    "data-track": "click",
    "data-track-label": "alt-pdf-version",
    "data-category": "external"
  }, altPdfBlurb)) : null) : null, (0, _core.jsx)(_styles.StyledCluster, {
    elem: "li",
    elemWrapper: "ul",
    dataContainer: "main social links",
    ariaLabel: "Social sharing"
  }, (0, _core.jsx)("li", null, (0, _core.jsx)("a", {
    href: facebookURL,
    "data-track": "click",
    "data-track-label": "facebook",
    "data-category": "social",
    target: "_blank",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)(_index.FacebookLogoSVG, {
    height: 2
  }))), (0, _core.jsx)("li", null, (0, _core.jsx)("a", {
    href: twitterURL,
    "data-track": "click",
    "data-track-label": "twitter",
    "data-category": "social",
    target: "_blank",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)(_index.TwitterLogoSVG, {
    height: 2
  }))), (0, _core.jsx)("li", null, (0, _core.jsx)("a", {
    href: emailURL,
    "data-track": "click",
    "data-track-label": "email",
    "data-category": "social",
    target: "_blank",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)(_index.EmailLogoSVG, {
    height: 2
  }))))));
};

MainHeader.defaultProps = {
  altPdfAvailable: false,
  altPdfBlurb: "",
  pdfAvailable: false
};
MainHeader.propTypes = {
  altPdfAvailable: _propTypes.default.bool,
  altPdfBlurb: _propTypes.default.string,
  articleURL: _propTypes.default.string.isRequired,
  doi: _propTypes.default.string.isRequired,
  headline: _propTypes.default.string.isRequired,
  pdfAvailable: _propTypes.default.bool,
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
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
      "description": ""
    },
    "altPdfBlurb": {
      "defaultValue": {
        "value": "\"\"",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    },
    "pdfAvailable": {
      "defaultValue": {
        "value": "false",
        "computed": false
      },
      "type": {
        "name": "bool"
      },
      "required": false,
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
    "stand": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW5IZWFkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbIk1haW5IZWFkZXIiLCJhbHRQZGZBdmFpbGFibGUiLCJhbHRQZGZCbHVyYiIsImFydGljbGVVUkwiLCJkb2kiLCJoZWFkbGluZSIsInBkZkF2YWlsYWJsZSIsInN0YW5kIiwicGRmVVJMIiwiYWx0UGRmVVJMIiwiZmFjZWJvb2tVUkwiLCJ0d2l0dGVyVVJMIiwiZW1haWxVUkwiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQVFiO0FBQUEsTUFQTEMsZUFPSyxRQVBMQSxlQU9LO0FBQUEsTUFOTEMsV0FNSyxRQU5MQSxXQU1LO0FBQUEsTUFMTEMsVUFLSyxRQUxMQSxVQUtLO0FBQUEsTUFKTEMsR0FJSyxRQUpMQSxHQUlLO0FBQUEsTUFITEMsUUFHSyxRQUhMQSxRQUdLO0FBQUEsTUFGTEMsWUFFSyxRQUZMQSxZQUVLO0FBQUEsTUFETEMsS0FDSyxRQURMQSxLQUNLOztBQUFBLDRCQU9ELGlDQUFtQkgsR0FBbkIsRUFBd0JELFVBQXhCLEVBQW9DRSxRQUFwQyxFQUE4Q0UsS0FBOUMsQ0FQQztBQUFBLE1BRUpDLE1BRkksdUJBRUpBLE1BRkk7QUFBQSxNQUdKQyxTQUhJLHVCQUdKQSxTQUhJO0FBQUEsTUFJSkMsV0FKSSx1QkFJSkEsV0FKSTtBQUFBLE1BS0pDLFVBTEksdUJBS0pBLFVBTEk7QUFBQSxNQU1KQyxRQU5JLHVCQU1KQSxRQU5JOztBQVNMLFNBQ0MsZUFBQyxpQkFBRDtBQUFXLElBQUEsSUFBSSxFQUFDO0FBQWhCLEtBQ0MsZUFBQyxxQkFBRDtBQUNDLElBQUEsV0FBVyxFQUFDLElBRGI7QUFFQyxJQUFBLGNBQWMs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QkMsVUFMTDtBQU10QlosRUFBQUEsWUFBWSxFQUFFUyxtQkFBVUMsSUFORjtBQU90QlQsRUFBQUEsS0FBSyxFQUFFUSxtQkFBVUUsTUFBVixDQUFpQkM7QUFQRixDQUF2QjtlQVVlbEIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBTdHlsZWRDbHVzdGVyLCBTdHlsZWRCb3ggfSBmcm9tIFwiLi9zdHlsZXNcIlxuaW1wb3J0IHtcblx0RW1haWxMb2dvU1ZHLFxuXHRGYWNlYm9va0xvZ29TVkcsXG5cdE5hdHVyZUxvZ29TVkcsXG5cdFR3aXR0ZXJMb2dvU1ZHLFxufSBmcm9tIFwiLi4vTG9nb3NTVkcvaW5kZXhcIlxuXG5pbXBvcnQgZ2VuZXJhdGVTb2NpYWxVUkxzIGZyb20gXCIuLi8uLi91dGlscy9nZW5lcmF0ZS1zb2NpYWwtdXJsc1wiXG5cbmNvbnN0IE1haW5IZWFkZXIgPSAoe1xuXHRhbHRQZGZBdmFpbGFibGUsXG5cdGFsdFBkZkJsdXJiLFxuXHRhcnRpY2xlVVJMLFxuXHRkb2ksXG5cdGhlYWRsaW5lLFxuXHRwZGZBdmFpbGFibGUsXG5cdHN0YW5kLFxufSkgPT4ge1xuXHRjb25zdCB7XG5cdFx0cGRmVVJMLFxuXHRcdGFsdFBkZlVSTCxcblx0XHRmYWNlYm9va1VSTCxcblx0XHR0d2l0dGVyVVJMLFxuXHRcdGVtYWlsVVJMLFxuXHR9ID0gZ2VuZXJhdGVTb2NpYWxVUkxzKGRvaSwgYXJ0aWNsZVVSTCwgaGVhZGxpbmUsIHN0YW5kKVxuXG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZEJveCBlbGVtPVwiaGVhZGVyXCI+XG5cdFx0XHQ8U3R5bGVkQ2x1c3RlclxuXHRcdFx0XHRlbGVtV3JhcHBlcj1cInVsXCJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiXG5cdFx0XHRcdHNwbGl0QWZ0ZXI9XCIuY3VycmVudC1pc3N1ZVwiXG5cdFx0XHRcdGRhdGFDb250YWluZXI9XCJtYWluIGV4dGVybmFsIGxpbmtzXCJcblx0XHRcdD5cblx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly93d3cubmF0dXJlLmNvbS9uYXR1cmUvXCJcblx0XHRcdFx0XHRcdGRhdGEtdHJhY2s9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiam91cm5hbC1ob21lcGFnZVwiXG5cdFx0XHRcdFx0XHRkYXRhLWNhdGVnb3J5PVwiZXh0ZXJuYWxcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxOYXR1cmVMb2dvU1ZHIGhlaWdodD17Mn0gLz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJjdXJyZW50LWlzc3VlXCI+XG5cdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL3d3dy5uYXR1cmUuY29tL25hdHVyZS9jdXJyZW50X2lzc3VlLmh0bWxcIlxuXHRcdFx0XHRcdFx0ZGF0YS10cmFjaz1cImNsaWNrXCJcblx0XHRcdFx0XHRcdGRhdGEtdHJhY2stbGFiZWw9XCJjdXJyZW50LWlzc3VlXCJcblx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJleHRlcm5hbFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0Q3VycmVudCBpc3N1ZVxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0PC9saT5cblx0XHRcdFx0e3BkZkF2YWlsYWJsZSB8fCBhbHRQZGZBdmFpbGFibGUgPyAoXG5cdFx0XHRcdFx0PFN0eWxlZENsdXN0ZXJcblx0XHRcdFx0XHRcdGVsZW09XCJsaVwiXG5cdFx0XHRcdFx0XHRlbGVtV3JhcHBlcj1cInVsXCJcblx0XHRcdFx0XHRcdGFyaWFMYWJlbD1cIlBERiBkb3dubG9hZFwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3BkZkF2YWlsYWJsZSA/IChcblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGRmVVJMXG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjay1sYWJlbD1cInBkZi12ZXJzaW9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJleHRlcm5hbFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0UERGXG5cdFx0XHRcdFx0XHRcdFx0XHR2ZXJzaW9uXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdFx0XHR7YWx0UGRmQXZhaWxhYmxlID8gKFxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHRQZGZVUkxcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2s9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiYWx0LXBkZi12ZXJzaW9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJleHRlcm5hbFwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRhbHRQZGZCbHVyYlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXHRcdFx0XHRcdDwvU3R5bGVkQ2x1c3Rlcj5cblx0XHRcdFx0KSA6IG51bGx9XG5cdFx0XHRcdDxTdHlsZWRDbHVzdGVyXG5cdFx0XHRcdFx0ZWxlbT1cImxpXCJcblx0XHRcdFx0XHRlbGVtV3JhcHBlcj1cInVsXCJcblx0XHRcdFx0XHRkYXRhQ29udGFpbmVyPVwibWFpbiBzb2NpYWwgbGlua3NcIlxuXHRcdFx0XHRcdGFyaWFMYWJlbD1cIlNvY2lhbCBzaGFyaW5nXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9e2ZhY2Vib29rVVJMfVxuXHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiZmFjZWJvb2tcIlxuXHRcdFx0XHRcdFx0XHRkYXRhLWNhdGVnb3J5PVwic29jaWFsXCJcblx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxGYWNlYm9va0xvZ29TVkdcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9ezJ9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXt0d2l0dGVyVVJMfVxuXHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwidHdpdHRlclwiXG5cdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJzb2NpYWxcIlxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PFR3aXR0ZXJMb2dvU1ZHXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0PXsyfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0aHJlZj17ZW1haWxVUkx9XG5cdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2s9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2stbGFiZWw9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJzb2NpYWxcIlxuXHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PEVtYWlsTG9nb1NWR1xuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD17Mn1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L1N0eWxlZENsdXN0ZXI+XG5cdFx0XHQ8L1N0eWxlZENsdXN0ZXI+XG5cdFx0PC9TdHlsZWRCb3g+XG5cdClcbn1cblxuTWFpbkhlYWRlci5kZWZhdWx0UHJvcHMgPSB7XG5cdGFsdFBkZkF2YWlsYWJsZTogZmFsc2UsXG5cdGFsdFBkZkJsdXJiOiBcIlwiLFxuXHRwZGZBdmFpbGFibGU6IGZhbHNlLFxufVxuXG5NYWluSGVhZGVyLnByb3BUeXBlcyA9IHtcblx0YWx0UGRmQXZhaWxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblx0YWx0UGRmQmx1cmI6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGFydGljbGVVUkw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0ZG9pOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGhlYWRsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHBkZkF2YWlsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cdHN0YW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1haW5IZWFkZXJcbiJdfQ==