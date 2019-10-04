"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatDate = _interopRequireDefault(require("../../utils/format-date"));

var _index = _interopRequireDefault(require("../Stack/index"));

var _index2 = _interopRequireDefault(require("../Center/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "1iyo84e-style",
  styles: "text-align:center;& > *{margin-left:auto;margin-right:auto;}h1{max-width:20ch;}time{font-family:var(--sans-serif-font);font-size:var(--s-1);text-transform:uppercase;letter-spacing:0.05em;line-height:1rem;}label:style;"
} : {
  name: "1iyo84e-style",
  styles: "text-align:center;& > *{margin-left:auto;margin-right:auto;}h1{max-width:20ch;}time{font-family:var(--sans-serif-font);font-size:var(--s-1);text-transform:uppercase;letter-spacing:0.05em;line-height:1rem;}label:style;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXguanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Ca0IiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvSGVhZGluZy9pbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdC1kYXRlXCJcbmltcG9ydCBTdGFjayBmcm9tIFwiLi4vU3RhY2svaW5kZXhcIlxuaW1wb3J0IENlbnRlciBmcm9tIFwiLi4vQ2VudGVyL2luZGV4XCJcblxuLyoqXG4gKiAjIyBIZWFkaW5nXG4gKlxuICovXG5jb25zdCBIZWFkaW5nID0gKHtcblx0YXV0aG9yLFxuXHRoZWFkbGluZSxcblx0cGhvdG9ncmFwaGVyLFxuXHRwdWJsaXNoZWRBdCxcblx0cHVibGlzaGVkQXRTdHJpbmcsXG5cdHN0YW5kLFxufSkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IGNzc2Bcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHQmID4gKiB7XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHR9XG5cblx0XHRoMSB7XG5cdFx0XHQvKiBTbWFsbGVyIG1lYXN1cmUgZm9yIGhlYWRsaW5lcyovXG5cdFx0XHRtYXgtd2lkdGg6IDIwY2g7XG5cdFx0fVxuXG5cdFx0dGltZSB7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tc2Fucy1zZXJpZi1mb250KTtcblx0XHRcdGZvbnQtc2l6ZTogdmFyKC0tcy0xKTtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuXHRcdFx0LyogRXZlbiBvdXQgdGhlIGxpbmUgaGVpZ2h0IGZvciB0aGUgZGF0ZSAqL1xuXHRcdFx0bGluZS1oZWlnaHQ6IDFyZW07XG5cdFx0fVxuXHRgXG5cdGNvbnN0IGF1dGhvck9yUGhvdG9ncmFwaGVyT3JEYXRlID1cblx0XHRhdXRob3IubGVuZ3RoIHx8IHBob3RvZ3JhcGhlci5sZW5ndGggfHwgcHVibGlzaGVkQXRcblxuXHRyZXR1cm4gKFxuXHRcdDxDZW50ZXIgbWVhc3VyZT1cIm5vbmVcIiBzcGFjZT1cInZhcigtLXMyKVwiPlxuXHRcdFx0PFN0YWNrIGNzcz17c3R5bGV9IHNwYWNlPVwidmFyKC0tczIpXCI+XG5cdFx0XHRcdDxoMVxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0XHRfX2h0bWw6IGhlYWRsaW5lLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHtzdGFuZC5sZW5ndGggPyAoXG5cdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0XHRcdF9faHRtbDogc3RhbmQsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdHthdXRob3JPclBob3RvZ3JhcGhlck9yRGF0ZSA/IChcblx0XHRcdFx0XHQ8U3RhY2sgc3BhY2U9XCJ2YXIoLS1zLTMpXCI+XG5cdFx0XHRcdFx0XHR7YXV0aG9yLmxlbmd0aCA/IChcblx0XHRcdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LXdlaWdodDpib2xkXCJcblx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0X19odG1sOiBhdXRob3IsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdFx0XHR7cGhvdG9ncmFwaGVyLmxlbmd0aCA/IChcblx0XHRcdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LXdlaWdodDpib2xkXCJcblx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0X19odG1sOiBwaG90b2dyYXBoZXIsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdFx0XHR7cHVibGlzaGVkQXQgPyAoXG5cdFx0XHRcdFx0XHRcdDx0aW1lXG5cdFx0XHRcdFx0XHRcdFx0aXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRlVGltZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRwdWJsaXNoZWRBdFN0cmluZyB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtmb3JtYXREYXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0cHVibGlzaGVkQXRcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L3RpbWU+XG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9DZW50ZXI+XG5cdClcbn1cblxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XG5cdGF1dGhvcjogXCJcIixcblx0cGhvdG9ncmFwaGVyOiBcIlwiLFxuXHRwdWJsaXNoZWRBdDogMCxcblx0cHVibGlzaGVkQXRTdHJpbmc6IFwiXCIsXG5cdHN0YW5kOiBcIlwiLFxufVxuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcblx0YXV0aG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRoZWFkbGluZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRwaG90b2dyYXBoZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHB1Ymxpc2hlZEF0OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRwdWJsaXNoZWRBdFN0cmluZzogUHJvcFR5cGVzLnN0cmluZyxcblx0c3RhbmQ6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdcbiJdfQ== */"
};

/**
 * ## Heading
 *
 */
var Heading = function Heading(_ref2) {
  var author = _ref2.author,
      headline = _ref2.headline,
      photographer = _ref2.photographer,
      publishedAt = _ref2.publishedAt,
      publishedAtString = _ref2.publishedAtString,
      stand = _ref2.stand;
  var style =
  /*#__PURE__*/
  _ref;
  var authorOrPhotographerOrDate = author.length || photographer.length || publishedAt;
  return (0, _core.jsx)(_index2.default, {
    measure: "none",
    space: "var(--s2)"
  }, (0, _core.jsx)(_index.default, {
    css: style,
    space: "var(--s2)"
  }, (0, _core.jsx)("h1", {
    dangerouslySetInnerHTML: {
      __html: headline
    }
  }), stand.length ? (0, _core.jsx)("p", {
    dangerouslySetInnerHTML: {
      __html: stand
    }
  }) : null, authorOrPhotographerOrDate ? (0, _core.jsx)(_index.default, {
    space: "var(--s-3)"
  }, author.length ? (0, _core.jsx)("p", {
    className: "font-weight:bold",
    dangerouslySetInnerHTML: {
      __html: author
    }
  }) : null, photographer.length ? (0, _core.jsx)("p", {
    className: "font-weight:bold",
    dangerouslySetInnerHTML: {
      __html: photographer
    }
  }) : null, publishedAt ? (0, _core.jsx)("time", {
    itemProp: "datePublished",
    dateTime: publishedAtString || null
  }, (0, _formatDate.default)(publishedAt)) : null) : null));
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
Heading.__docgenInfo = {
  "description": "## Heading",
  "methods": [],
  "displayName": "Heading",
  "props": {
    "author": {
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
    "photographer": {
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
    "publishedAt": {
      "defaultValue": {
        "value": "0",
        "computed": false
      },
      "type": {
        "name": "number"
      },
      "required": false,
      "description": ""
    },
    "publishedAtString": {
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
    "stand": {
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
    "headline": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhlYWRpbmciLCJhdXRob3IiLCJoZWFkbGluZSIsInBob3RvZ3JhcGhlciIsInB1Ymxpc2hlZEF0IiwicHVibGlzaGVkQXRTdHJpbmciLCJzdGFuZCIsInN0eWxlIiwiYXV0aG9yT3JQaG90b2dyYXBoZXJPckRhdGUiLCJsZW5ndGgiLCJfX2h0bWwiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUE7O0FBRkE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUlBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLFFBT1Y7QUFBQSxNQU5MQyxNQU1LLFNBTkxBLE1BTUs7QUFBQSxNQUxMQyxRQUtLLFNBTExBLFFBS0s7QUFBQSxNQUpMQyxZQUlLLFNBSkxBLFlBSUs7QUFBQSxNQUhMQyxXQUdLLFNBSExBLFdBR0s7QUFBQSxNQUZMQyxpQkFFSyxTQUZMQSxpQkFFSztBQUFBLE1BRExDLEtBQ0ssU0FETEEsS0FDSztBQUNMLE1BQU1DLEtBQUs7QUFBQTtBQUFBLE1BQVg7QUFzQkEsTUFBTUMsMEJBQTBCLEdBQy9CUCxNQUFNLENBQUNRLE1BQVAsSUFBaUJOLFlBQVksQ0FBQ00sTUFBOUIsSUFBd0NMLFdBRHpDO0FBR0EsU0FDQyxlQUFDLGVBQUQ7QUFBUSxJQUFBLE9BQU8sRUFBQyxNQUFoQjtBQUF1QixJQUFBLEtBQUssRUFBQztBQUE3QixLQUNDLGVBQUMsY0FBRDtBQUFPLElBQUEsR0FBRyxFQUFFRyxLQUFaO0FBQW1CLElBQUEsS0FBSyxFQUFDO0FBQXpCLEtBQ0M7QUFDQyxJQUFBLHVCQUF1QixFQUFFO0FBQ3hCRyxNQUFBQSxNQUFNLEVBQUVSO0FBRGdCO0FBRDFCLElBREQsRUFNRUksS0FBSyxDQUFDRyxNQUFOLEdBQ0E7QUFDQyxJQUFBLHVCQUF1QixFQUFFO0FBQ3hCQyxNQUFBQSxNQUFNLEVBQUVKO0FBRGdCO0FBRDFCLElBREEsR0FNRyxJQVpMLEVBY0VFLDBCQUEwQixHQUMxQixlQUFDLGNBQUQ7QUFBTyxJQUFBLEtBQUssRUFBQztBQUFiLEtBQ0VQLE1BQU0sQ0FBQ1EsTUFBUCxHQUNBO0FBQ0MsSUFBQSxTQUFTLEVBQUMsa0JBRFg7QUFFQyxJQUFBLHVCQUF1QixFQUFFO0FBQ3hCQyxNQUFBQSxNQUFNLEVBQUVUO0FBRGdCO0FBRjFCLElBREEsR0FPRyxJQVJMLEVBVUVFLFlBQVksQ0FBQ00sTUFBYixHQUNBO0FBQ0MsSUFBQSxTQUFTLEVBQUMsa0JBRFg7QUFFQyxJQUFBLHVCQUF1QixFQUFFO0FBQ3hCQyxNQUFBQSxNQUFNLEVBQUVQO0FBRGdCO0FBRjFCLElBREEsR0FPRyxJQWpCTCxFQW1CRUMsV0FBVyxHQUNYO0FBQ0MsSUFBQSxRQUFRLEVBQUMsZUFEVjtBQUVDLElBQUEsUUFBUSxFQUNQQyxpQkFBaUIsSUFDakI7QUFKRixLQU9FLHlCQUNBRCxXQURBLENBUEYsQ0FEVyxHQVlSLElBL0JMLENBRDBCLEdBa0N2QixJQWhETCxDQURELENBREQ7QUFzREEsQ0F2RkQ7O0FBeUZBSixPQUFPLENBQUNXLFlBQVIsR0FBdUI7QUFDdEJWLEVBQUFBLE1BQU0sRUFBRSxFQURjO0FBRXRCRSxFQUFBQSxZQUFZLEVBQUUsRUFGUTtBQUd0QkMsRUFBQUEsV0FBVyxFQUFFLENBSFM7QUFJdEJDLEVBQUFBLGlCQUFpQixFQUFFLEVBSkc7QUFLdEJDLEVBQUFBLEtBQUssRUFBRTtBQUxlLENBQXZCO0FBUUFOLE9BQU8sQ0FBQ1ksU0FBUixHQUFvQjtBQUNuQlgsRUFBQUEsTUFBTSxFQUFFWSxtQkFBVUMsTUFEQztBQUVuQlosRUFBQUEsUUFBUSxFQUFFVyxtQkFBVUMsTUFBVixDQUFpQkMsVUFGUjtBQUduQlosRUFBQUEsWUFBWSxFQUFFVSxtQkFBVUMsTUFITDtBQUluQlYsRUFBQUEsV0FBVyxFQUFFUyxtQkFBVUcsTUFKSjtBQUtuQlgsRUFBQUEsaUJBQWlCLEVBQUVRLG1CQUFVQyxNQUxWO0FBTW5CUixFQUFBQSxLQUFLLEVBQUVPLG1CQUFVQztBQU5FLENBQXBCO2VBU2VkLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdC1kYXRlXCJcbmltcG9ydCBTdGFjayBmcm9tIFwiLi4vU3RhY2svaW5kZXhcIlxuaW1wb3J0IENlbnRlciBmcm9tIFwiLi4vQ2VudGVyL2luZGV4XCJcblxuLyoqXG4gKiAjIyBIZWFkaW5nXG4gKlxuICovXG5jb25zdCBIZWFkaW5nID0gKHtcblx0YXV0aG9yLFxuXHRoZWFkbGluZSxcblx0cGhvdG9ncmFwaGVyLFxuXHRwdWJsaXNoZWRBdCxcblx0cHVibGlzaGVkQXRTdHJpbmcsXG5cdHN0YW5kLFxufSkgPT4ge1xuXHRjb25zdCBzdHlsZSA9IGNzc2Bcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cblx0XHQmID4gKiB7XG5cdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHR9XG5cblx0XHRoMSB7XG5cdFx0XHQvKiBTbWFsbGVyIG1lYXN1cmUgZm9yIGhlYWRsaW5lcyovXG5cdFx0XHRtYXgtd2lkdGg6IDIwY2g7XG5cdFx0fVxuXG5cdFx0dGltZSB7XG5cdFx0XHRmb250LWZhbWlseTogdmFyKC0tc2Fucy1zZXJpZi1mb250KTtcblx0XHRcdGZvbnQtc2l6ZTogdmFyKC0tcy0xKTtcblx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuXHRcdFx0LyogRXZlbiBvdXQgdGhlIGxpbmUgaGVpZ2h0IGZvciB0aGUgZGF0ZSAqL1xuXHRcdFx0bGluZS1oZWlnaHQ6IDFyZW07XG5cdFx0fVxuXHRgXG5cdGNvbnN0IGF1dGhvck9yUGhvdG9ncmFwaGVyT3JEYXRlID1cblx0XHRhdXRob3IubGVuZ3RoIHx8IHBob3RvZ3JhcGhlci5sZW5ndGggfHwgcHVibGlzaGVkQXRcblxuXHRyZXR1cm4gKFxuXHRcdDxDZW50ZXIgbWVhc3VyZT1cIm5vbmVcIiBzcGFjZT1cInZhcigtLXMyKVwiPlxuXHRcdFx0PFN0YWNrIGNzcz17c3R5bGV9IHNwYWNlPVwidmFyKC0tczIpXCI+XG5cdFx0XHRcdDxoMVxuXHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0XHRfX2h0bWw6IGhlYWRsaW5lLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHtzdGFuZC5sZW5ndGggPyAoXG5cdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0XHRcdF9faHRtbDogc3RhbmQsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdHthdXRob3JPclBob3RvZ3JhcGhlck9yRGF0ZSA/IChcblx0XHRcdFx0XHQ8U3RhY2sgc3BhY2U9XCJ2YXIoLS1zLTMpXCI+XG5cdFx0XHRcdFx0XHR7YXV0aG9yLmxlbmd0aCA/IChcblx0XHRcdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LXdlaWdodDpib2xkXCJcblx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0X19odG1sOiBhdXRob3IsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdFx0XHR7cGhvdG9ncmFwaGVyLmxlbmd0aCA/IChcblx0XHRcdFx0XHRcdFx0PHBcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb250LXdlaWdodDpib2xkXCJcblx0XHRcdFx0XHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdFx0XHRcdFx0X19odG1sOiBwaG90b2dyYXBoZXIsXG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdCkgOiBudWxsfVxuXG5cdFx0XHRcdFx0XHR7cHVibGlzaGVkQXQgPyAoXG5cdFx0XHRcdFx0XHRcdDx0aW1lXG5cdFx0XHRcdFx0XHRcdFx0aXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCJcblx0XHRcdFx0XHRcdFx0XHRkYXRlVGltZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRwdWJsaXNoZWRBdFN0cmluZyB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0bnVsbFxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdHtmb3JtYXREYXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0cHVibGlzaGVkQXRcblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L3RpbWU+XG5cdFx0XHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQpIDogbnVsbH1cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9DZW50ZXI+XG5cdClcbn1cblxuSGVhZGluZy5kZWZhdWx0UHJvcHMgPSB7XG5cdGF1dGhvcjogXCJcIixcblx0cGhvdG9ncmFwaGVyOiBcIlwiLFxuXHRwdWJsaXNoZWRBdDogMCxcblx0cHVibGlzaGVkQXRTdHJpbmc6IFwiXCIsXG5cdHN0YW5kOiBcIlwiLFxufVxuXG5IZWFkaW5nLnByb3BUeXBlcyA9IHtcblx0YXV0aG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRoZWFkbGluZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRwaG90b2dyYXBoZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cdHB1Ymxpc2hlZEF0OiBQcm9wVHlwZXMubnVtYmVyLFxuXHRwdWJsaXNoZWRBdFN0cmluZzogUHJvcFR5cGVzLnN0cmluZyxcblx0c3RhbmQ6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdcbiJdfQ==