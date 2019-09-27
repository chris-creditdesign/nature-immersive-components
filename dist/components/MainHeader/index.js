"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

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
  }, (0, _core.jsx)("svg", {
    height: "2em",
    viewBox: "0 0 200 49",
    role: "img",
    "aria-labelledby": "nature-home-page-title",
    focusable: "false"
  }, (0, _core.jsx)("title", {
    id: "nature-home-page-title"
  }, "Nature"), (0, _core.jsx)("use", {
    href: "#nature-logo",
    xlinkHref: "#nature-logo",
    role: "presentation"
  })))), (0, _core.jsx)("li", {
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
  }, (0, _core.jsx)("svg", {
    className: "pdf-icon",
    height: "0.75em",
    viewBox: "0 0 30 30",
    "aria-hidden": "true",
    focusable: "false"
  }, (0, _core.jsx)("use", {
    href: "#pdf",
    xlinkHref: "#pdf",
    role: "presentation"
  })), (0, _core.jsx)("span", null, "PDF version"))) : null, altPdfAvailable ? (0, _core.jsx)("li", {
    "data-container": "main external links"
  }, (0, _core.jsx)("a", {
    href: altPdfURL,
    "data-track": "click",
    "data-track-label": "alt-pdf-version",
    "data-category": "external"
  }, (0, _core.jsx)("svg", {
    className: "alt-pdf-icon",
    width: "30px",
    height: "30px",
    viewBox: "0 0 30 30",
    "aria-hidden": "true",
    focusable: "false"
  }, (0, _core.jsx)("use", {
    href: "#pdf",
    xlinkHref: "#pdf",
    role: "presentation"
  })), (0, _core.jsx)("span", null, altPdfBlurb))) : null, (0, _core.jsx)("li", {
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
  }, (0, _core.jsx)("svg", {
    height: "1.85em",
    viewBox: "0 0 30 30",
    role: "img",
    "aria-labelledby": "main-header__social-list__item__facebook__title",
    focusable: "false"
  }, (0, _core.jsx)("title", {
    id: "main-header__social-list__item__facebook__title"
  }, "Share on Facebook"), (0, _core.jsx)("use", {
    href: "#facebook",
    xlinkHref: "#facebook",
    role: "presentation"
  })))), (0, _core.jsx)("li", {
    className: "main-header__social-list__item"
  }, (0, _core.jsx)("a", {
    href: twitterURL,
    "data-track": "click",
    "data-track-label": "twitter",
    "data-category": "social",
    target: "_blank",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)("svg", {
    height: "1.85em",
    viewBox: "0 0 30 30",
    role: "img",
    "aria-labelledby": "main-header__social-list__item__twitter__title",
    focusable: "false"
  }, (0, _core.jsx)("title", {
    id: "main-header__social-list__item__twitter__title"
  }, "Share on Twitter"), (0, _core.jsx)("use", {
    href: "#twitter",
    xlinkHref: "#twitter",
    role: "presentation"
  })))), (0, _core.jsx)("li", {
    className: "main-header__social-list__item"
  }, (0, _core.jsx)("a", {
    href: emailURL,
    "data-track": "click",
    "data-track-label": "email",
    "data-category": "social",
    rel: "noreferrer noopener"
  }, (0, _core.jsx)("svg", {
    height: "1.85em",
    viewBox: "0 0 30 30",
    role: "img",
    "aria-labelledby": "main-header__social-list__item__email__title",
    focusable: "false"
  }, (0, _core.jsx)("title", {
    id: "main-header__social-list__item__email__title"
  }, "Share via E-Mail"), (0, _core.jsx)("use", {
    href: "#email",
    xlinkHref: "#email",
    role: "presentation"
  }))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW5IZWFkZXIvaW5kZXguanN4Il0sIm5hbWVzIjpbIk1haW5IZWFkZXIiLCJhbHRQZGZBdmFpbGFibGUiLCJhbHRQZGZCbHVyYiIsImFydGljbGVVUkwiLCJkb2kiLCJoZWFkbGluZSIsInBkZkF2YWlsYWJsZSIsInN0YW5kIiwicGRmVVJMIiwiYWx0UGRmVVJMIiwiZmFjZWJvb2tVUkwiLCJ0d2l0dGVyVVJMIiwiZW1haWxVUkwiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQVFiO0FBQUEsTUFQTEMsZUFPSyxRQVBMQSxlQU9LO0FBQUEsTUFOTEMsV0FNSyxRQU5MQSxXQU1LO0FBQUEsTUFMTEMsVUFLSyxRQUxMQSxVQUtLO0FBQUEsTUFKTEMsR0FJSyxRQUpMQSxHQUlLO0FBQUEsTUFITEMsUUFHSyxRQUhMQSxRQUdLO0FBQUEsTUFGTEMsWUFFSyxRQUZMQSxZQUVLO0FBQUEsTUFETEMsS0FDSyxRQURMQSxLQUNLOztBQUFBLDRCQU9ELGlDQUFtQkgsR0FBbkIsRUFBd0JELFVBQXhCLEVBQW9DRSxRQUFwQyxFQUE4Q0UsS0FBOUMsQ0FQQztBQUFBLE1BRUpDLE1BRkksdUJBRUpBLE1BRkk7QUFBQSxNQUdKQyxTQUhJLHVCQUdKQSxTQUhJO0FBQUEsTUFJSkMsV0FKSSx1QkFJSkEsV0FKSTtBQUFBLE1BS0pDLFVBTEksdUJBS0pBLFVBTEk7QUFBQSxNQU1KQyxRQU5JLHVCQU1KQSxRQU5JOztBQVNMLFNBQ0MsZUFBQyx3QkFBRCxRQUNDLGVBQUMsa0JBQUQsUUFDQztBQUNDLElBQUEsU0FBUyxFQUFDLFdBRFg7QUFFQyxzQkFBZTtBQUZoQixLQUlDO0FBQ0MsSUFBQSxJQUFJLEVBQUMsZ0NBRE47QUFFQyxrQkFB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QVcsRUFBRVksbUJBQVVHLE1BQVYsQ0FBaUJELFVBRlI7QUFHdEJiLEVBQUFBLFVBQVUsRUFBRVcsbUJBQVVHLE1BQVYsQ0FBaUJELFVBSFA7QUFJdEJaLEVBQUFBLEdBQUcsRUFBRVUsbUJBQVVHLE1BQVYsQ0FBaUJELFVBSkE7QUFLdEJYLEVBQUFBLFFBQVEsRUFBRVMsbUJBQVVHLE1BQVYsQ0FBaUJELFVBTEw7QUFNdEJWLEVBQUFBLFlBQVksRUFBRVEsbUJBQVVDLElBQVYsQ0FBZUMsVUFOUDtBQU90QlQsRUFBQUEsS0FBSyxFQUFFTyxtQkFBVUcsTUFBVixDQUFpQkQ7QUFQRixDQUF2QjtlQVVlaEIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBTdHlsZWRNYWluSGVhZGVyLCBTdHlsZWRMaXN0LCBTdHlsZWRMaXN0U29jaWFsIH0gZnJvbSBcIi4vc3R5bGVzXCJcbmltcG9ydCBnZW5lcmF0ZVNvY2lhbFVSTHMgZnJvbSBcIi4uLy4uL3V0aWxzL2dlbmVyYXRlLXNvY2lhbC11cmxzXCJcblxuY29uc3QgTWFpbkhlYWRlciA9ICh7XG5cdGFsdFBkZkF2YWlsYWJsZSxcblx0YWx0UGRmQmx1cmIsXG5cdGFydGljbGVVUkwsXG5cdGRvaSxcblx0aGVhZGxpbmUsXG5cdHBkZkF2YWlsYWJsZSxcblx0c3RhbmQsXG59KSA9PiB7XG5cdGNvbnN0IHtcblx0XHRwZGZVUkwsXG5cdFx0YWx0UGRmVVJMLFxuXHRcdGZhY2Vib29rVVJMLFxuXHRcdHR3aXR0ZXJVUkwsXG5cdFx0ZW1haWxVUkwsXG5cdH0gPSBnZW5lcmF0ZVNvY2lhbFVSTHMoZG9pLCBhcnRpY2xlVVJMLCBoZWFkbGluZSwgc3RhbmQpXG5cblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkTWFpbkhlYWRlcj5cblx0XHRcdDxTdHlsZWRMaXN0PlxuXHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJob21lLXBhZ2VcIlxuXHRcdFx0XHRcdGRhdGEtY29udGFpbmVyPVwibWFpbiBleHRlcm5hbCBsaW5rc1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0aHJlZj1cImh0dHBzOi8vd3d3Lm5hdHVyZS5jb20vbmF0dXJlL1wiXG5cdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0ZGF0YS10cmFjay1sYWJlbD1cImpvdXJuYWwtaG9tZXBhZ2VcIlxuXHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cImV4dGVybmFsXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdGhlaWdodD1cIjJlbVwiXG5cdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMjAwIDQ5XCJcblx0XHRcdFx0XHRcdFx0cm9sZT1cImltZ1wiXG5cdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cIm5hdHVyZS1ob21lLXBhZ2UtdGl0bGVcIlxuXHRcdFx0XHRcdFx0XHRmb2N1c2FibGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDx0aXRsZSBpZD1cIm5hdHVyZS1ob21lLXBhZ2UtdGl0bGVcIj5cblx0XHRcdFx0XHRcdFx0XHROYXR1cmVcblx0XHRcdFx0XHRcdFx0PC90aXRsZT5cblx0XHRcdFx0XHRcdFx0PHVzZVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCIjbmF0dXJlLWxvZ29cIlxuXHRcdFx0XHRcdFx0XHRcdHhsaW5rSHJlZj1cIiNuYXR1cmUtbG9nb1wiXG5cdFx0XHRcdFx0XHRcdFx0cm9sZT1cInByZXNlbnRhdGlvblwiXG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VycmVudC1pc3N1ZVwiXG5cdFx0XHRcdFx0ZGF0YS1jb250YWluZXI9XCJtYWluIGV4dGVybmFsIGxpbmtzXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPVwiaHR0cHM6Ly93d3cubmF0dXJlLmNvbS9uYXR1cmUvY3VycmVudF9pc3N1ZS5odG1sXCJcblx0XHRcdFx0XHRcdGRhdGEtdHJhY2s9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiY3VycmVudC1pc3N1ZVwiXG5cdFx0XHRcdFx0XHRkYXRhLWNhdGVnb3J5PVwiZXh0ZXJuYWxcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdEN1cnJlbnQgaXNzdWVcblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0e3BkZkF2YWlsYWJsZSA/IChcblx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBkZlwiXG5cdFx0XHRcdFx0XHRkYXRhLWNvbnRhaW5lcj1cIm1haW4gZXh0ZXJuYWwgbGlua3NcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdGhyZWY9e3BkZlVSTH1cblx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjaz1cImNsaWNrXCJcblx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjay1sYWJlbD1cInBkZi12ZXJzaW9uXCJcblx0XHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cImV4dGVybmFsXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHN2Z1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBkZi1pY29uXCJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIwLjc1ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHVzZVxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiNwZGZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0eGxpbmtIcmVmPVwiI3BkZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPVwicHJlc2VudGF0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+UERGIHZlcnNpb248L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdFx0e2FsdFBkZkF2YWlsYWJsZSA/IChcblx0XHRcdFx0XHQ8bGkgZGF0YS1jb250YWluZXI9XCJtYWluIGV4dGVybmFsIGxpbmtzXCI+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRocmVmPXthbHRQZGZVUkx9XG5cdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2s9XCJjbGlja1wiXG5cdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2stbGFiZWw9XCJhbHQtcGRmLXZlcnNpb25cIlxuXHRcdFx0XHRcdFx0XHRkYXRhLWNhdGVnb3J5PVwiZXh0ZXJuYWxcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWx0LXBkZi1pY29uXCJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aD1cIjMwcHhcIlxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjMwcHhcIlxuXHRcdFx0XHRcdFx0XHRcdHZpZXdCb3g9XCIwIDAgMzAgMzBcIlxuXHRcdFx0XHRcdFx0XHRcdGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0Zm9jdXNhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PHVzZVxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiNwZGZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0eGxpbmtIcmVmPVwiI3BkZlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPVwicHJlc2VudGF0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PHNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0e2FsdFBkZkJsdXJifVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0KSA6IG51bGx9XG5cblx0XHRcdFx0PGxpXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiXG5cdFx0XHRcdFx0bWFpbi1oZWFkZXJfX2xpc3RfX2l0ZW0gXG5cdFx0XHRcdFx0bWFpbi1oZWFkZXJfX2xpc3RfX2l0ZW0tLXNvY2lhbFxuXHRcdFx0XHRcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PFN0eWxlZExpc3RTb2NpYWxcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19zb2NpYWwtbGlzdFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiU29jaWFsIHNoYXJpbmdcIlxuXHRcdFx0XHRcdFx0ZGF0YS1jb250YWluZXI9XCJtYWluIHNvY2lhbCBsaW5rc1wiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19zb2NpYWwtbGlzdF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmFjZWJvb2tVUkxcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjaz1cImNsaWNrXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwiZmFjZWJvb2tcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtY2F0ZWdvcnk9XCJzb2NpYWxcIlxuXHRcdFx0XHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxLjg1ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAzMCAzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPVwiaW1nXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cIm1haW4taGVhZGVyX19zb2NpYWwtbGlzdF9faXRlbV9fZmFjZWJvb2tfX3RpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZvY3VzYWJsZT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGl0bGUgaWQ9XCJtYWluLWhlYWRlcl9fc29jaWFsLWxpc3RfX2l0ZW1fX2ZhY2Vib29rX190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTaGFyZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRGYWNlYm9va1xuXHRcdFx0XHRcdFx0XHRcdFx0PC90aXRsZT5cblx0XHRcdFx0XHRcdFx0XHRcdDx1c2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cIiNmYWNlYm9va1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhsaW5rSHJlZj1cIiNmYWNlYm9va1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9XCJwcmVzZW50YXRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fc29jaWFsLWxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtcblx0XHRcdFx0XHRcdFx0XHRcdHR3aXR0ZXJVUkxcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10cmFjaz1cImNsaWNrXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrLWxhYmVsPVwidHdpdHRlclwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cInNvY2lhbFwiXG5cdFx0XHRcdFx0XHRcdFx0dGFyZ2V0PVwiX2JsYW5rXCJcblx0XHRcdFx0XHRcdFx0XHRyZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxzdmdcblx0XHRcdFx0XHRcdFx0XHRcdGhlaWdodD1cIjEuODVlbVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDMwIDMwXCJcblx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9XCJpbWdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0YXJpYS1sYWJlbGxlZGJ5PVwibWFpbi1oZWFkZXJfX3NvY2lhbC1saXN0X19pdGVtX190d2l0dGVyX190aXRsZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRmb2N1c2FibGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRpdGxlIGlkPVwibWFpbi1oZWFkZXJfX3NvY2lhbC1saXN0X19pdGVtX190d2l0dGVyX190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTaGFyZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRUd2l0dGVyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RpdGxlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVzZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiI3R3aXR0ZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR4bGlua0hyZWY9XCIjdHdpdHRlclwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJvbGU9XCJwcmVzZW50YXRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fc29jaWFsLWxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRocmVmPXtlbWFpbFVSTH1cblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRyYWNrPVwiY2xpY2tcIlxuXHRcdFx0XHRcdFx0XHRcdGRhdGEtdHJhY2stbGFiZWw9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS1jYXRlZ29yeT1cInNvY2lhbFwiXG5cdFx0XHRcdFx0XHRcdFx0cmVsPVwibm9yZWZlcnJlciBub29wZW5lclwiXG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ9XCIxLjg1ZW1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmlld0JveD1cIjAgMCAzMCAzMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyb2xlPVwiaW1nXCJcblx0XHRcdFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cIm1haW4taGVhZGVyX19zb2NpYWwtbGlzdF9faXRlbV9fZW1haWxfX3RpdGxlXCJcblx0XHRcdFx0XHRcdFx0XHRcdGZvY3VzYWJsZT1cImZhbHNlXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGl0bGUgaWQ9XCJtYWluLWhlYWRlcl9fc29jaWFsLWxpc3RfX2l0ZW1fX2VtYWlsX190aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRTaGFyZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2aWFcblx0XHRcdFx0XHRcdFx0XHRcdFx0RS1NYWlsXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RpdGxlPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVzZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiI2VtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGxpbmtIcmVmPVwiI2VtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cm9sZT1cInByZXNlbnRhdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvc3ZnPlxuXHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDwvU3R5bGVkTGlzdFNvY2lhbD5cblx0XHRcdFx0PC9saT5cblx0XHRcdDwvU3R5bGVkTGlzdD5cblx0XHQ8L1N0eWxlZE1haW5IZWFkZXI+XG5cdClcbn1cblxuTWFpbkhlYWRlci5wcm9wVHlwZXMgPSB7XG5cdGFsdFBkZkF2YWlsYWJsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblx0YWx0UGRmQmx1cmI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0YXJ0aWNsZVVSTDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRkb2k6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aGVhZGxpbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cGRmQXZhaWxhYmxlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXHRzdGFuZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluSGVhZGVyXG4iXX0=