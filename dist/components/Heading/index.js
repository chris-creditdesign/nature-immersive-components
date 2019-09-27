"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formatDate = _interopRequireDefault(require("../../utils/format-date"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(_ref) {
  var author = _ref.author,
      headline = _ref.headline,
      photographer = _ref.photographer,
      publishedAt = _ref.publishedAt,
      publishedAtString = _ref.publishedAtString,
      stand = _ref.stand;
  return (0, _core.jsx)(_styles.default, null, (0, _core.jsx)("h1", {
    dangerouslySetInnerHTML: {
      __html: headline
    }
  }), (0, _core.jsx)("p", {
    className: "stand",
    dangerouslySetInnerHTML: {
      __html: stand
    }
  }), author.length ? (0, _core.jsx)("p", {
    className: "by-line",
    dangerouslySetInnerHTML: {
      __html: author
    }
  }) : null, photographer.length ? (0, _core.jsx)("p", {
    className: "by-line",
    dangerouslySetInnerHTML: {
      __html: photographer
    }
  }) : null, publishedAt ? (0, _core.jsx)("time", {
    itemProp: "datePublished",
    dateTime: publishedAtString || null
  }, (0, _formatDate.default)(publishedAt)) : null);
};

Heading.propTypes = {
  author: _propTypes.default.string.isRequired,
  headline: _propTypes.default.string.isRequired,
  photographer: _propTypes.default.string.isRequired,
  publishedAt: _propTypes.default.number.isRequired,
  publishedAtString: _propTypes.default.string.isRequired,
  stand: _propTypes.default.string.isRequired
};
var _default = Heading;
exports.default = _default;
Heading.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Heading",
  "props": {
    "author": {
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
    "photographer": {
      "type": {
        "name": "string"
      },
      "required": true,
      "description": ""
    },
    "publishedAt": {
      "type": {
        "name": "number"
      },
      "required": true,
      "description": ""
    },
    "publishedAtString": {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhlYWRpbmciLCJhdXRob3IiLCJoZWFkbGluZSIsInBob3RvZ3JhcGhlciIsInB1Ymxpc2hlZEF0IiwicHVibGlzaGVkQXRTdHJpbmciLCJzdGFuZCIsIl9faHRtbCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUNmQyxNQURlLFFBQ2ZBLE1BRGU7QUFBQSxNQUVmQyxRQUZlLFFBRWZBLFFBRmU7QUFBQSxNQUdmQyxZQUhlLFFBR2ZBLFlBSGU7QUFBQSxNQUlmQyxXQUplLFFBSWZBLFdBSmU7QUFBQSxNQUtmQyxpQkFMZSxRQUtmQSxpQkFMZTtBQUFBLE1BTWZDLEtBTmUsUUFNZkEsS0FOZTtBQUFBLFNBUWYsZUFBQyxlQUFELFFBQ0M7QUFBSSxJQUFBLHVCQUF1QixFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRUw7QUFBVjtBQUE3QixJQURELEVBRUM7QUFDQyxJQUFBLFNBQVMsRUFBQyxPQURYO0FBRUMsSUFBQSx1QkFBdUIsRUFBRTtBQUFFSyxNQUFBQSxNQUFNLEVBQUVEO0FBQVY7QUFGMUIsSUFGRCxFQU9FTCxNQUFNLENBQUNPLE1BQVAsR0FDQTtBQUNDLElBQUEsU0FBUyxFQUFDLFNBRFg7QUFFQyxJQUFBLHVCQUF1QixFQUFFO0FBQUVELE1BQUFBLE1BQU0sRUFBRU47QUFBVjtBQUYxQixJQURBLEdBS0csSUFaTCxFQWNFRSxZQUFZLENBQUNLLE1BQWIsR0FDQTtBQUNDLElBQUEsU0FBUyxFQUFDLFNBRFg7QUFFQyxJQUFBLHVCQUF1QixFQUFFO0FBQ3hCRCxNQUFBQSxNQUFNLEVBQUVKO0FBRGdCO0FBRjFCLElBREEsR0FPRyxJQXJCTCxFQXVCRUMsV0FBVyxHQUNYO0FBQ0MsSUFBQSxRQUFRLEVBQUMsZUFEVjtBQUVDLElBQUEsUUFBUSxFQUFFQyxpQkFBaUIsSUFBSTtBQUZoQyxLQUlFLHlCQUFXRCxXQUFYLENBSkYsQ0FEVyxHQU9SLElBOUJMLENBUmU7QUFBQSxDQUFoQjs7QUEwQ0FKLE9BQU8sQ0FBQ1MsU0FBUixHQUFvQjtBQUNuQlIsRUFBQUEsTUFBTSxFQUFFUyxtQkFBVUMsTUFBVixDQUFpQkMsVUFETjtBQUVuQlYsRUFBQUEsUUFBUSxFQUFFUSxtQkFBVUMsTUFBVixDQUFpQkMsVUFGUjtBQUduQlQsRUFBQUEsWUFBWSxFQUFFTyxtQkFBVUMsTUFBVixDQUFpQkMsVUFIWjtBQUluQlIsRUFBQUEsV0FBVyxFQUFFTSxtQkFBVUcsTUFBVixDQUFpQkQsVUFKWDtBQUtuQlAsRUFBQUEsaUJBQWlCLEVBQUVLLG1CQUFVQyxNQUFWLENBQWlCQyxVQUxqQjtBQU1uQk4sRUFBQUEsS0FBSyxFQUFFSSxtQkFBVUMsTUFBVixDQUFpQkM7QUFOTCxDQUFwQjtlQVNlWixPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXQtZGF0ZVwiXG5pbXBvcnQgU3R5bGVkSGVhZGVyIGZyb20gXCIuL3N0eWxlc1wiXG5cbmNvbnN0IEhlYWRpbmcgPSAoe1xuXHRhdXRob3IsXG5cdGhlYWRsaW5lLFxuXHRwaG90b2dyYXBoZXIsXG5cdHB1Ymxpc2hlZEF0LFxuXHRwdWJsaXNoZWRBdFN0cmluZyxcblx0c3RhbmQsXG59KSA9PiAoXG5cdDxTdHlsZWRIZWFkZXI+XG5cdFx0PGgxIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaGVhZGxpbmUgfX0gLz5cblx0XHQ8cFxuXHRcdFx0Y2xhc3NOYW1lPVwic3RhbmRcIlxuXHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBzdGFuZCB9fVxuXHRcdC8+XG5cblx0XHR7YXV0aG9yLmxlbmd0aCA/IChcblx0XHRcdDxwXG5cdFx0XHRcdGNsYXNzTmFtZT1cImJ5LWxpbmVcIlxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGF1dGhvciB9fVxuXHRcdFx0Lz5cblx0XHQpIDogbnVsbH1cblxuXHRcdHtwaG90b2dyYXBoZXIubGVuZ3RoID8gKFxuXHRcdFx0PHBcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYnktbGluZVwiXG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0X19odG1sOiBwaG90b2dyYXBoZXIsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdCkgOiBudWxsfVxuXG5cdFx0e3B1Ymxpc2hlZEF0ID8gKFxuXHRcdFx0PHRpbWVcblx0XHRcdFx0aXRlbVByb3A9XCJkYXRlUHVibGlzaGVkXCJcblx0XHRcdFx0ZGF0ZVRpbWU9e3B1Ymxpc2hlZEF0U3RyaW5nIHx8IG51bGx9XG5cdFx0XHQ+XG5cdFx0XHRcdHtmb3JtYXREYXRlKHB1Ymxpc2hlZEF0KX1cblx0XHRcdDwvdGltZT5cblx0XHQpIDogbnVsbH1cblx0PC9TdHlsZWRIZWFkZXI+XG4pXG5cbkhlYWRpbmcucHJvcFR5cGVzID0ge1xuXHRhdXRob3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aGVhZGxpbmU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cGhvdG9ncmFwaGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHB1Ymxpc2hlZEF0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cdHB1Ymxpc2hlZEF0U3RyaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHN0YW5kOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRpbmdcbiJdfQ==