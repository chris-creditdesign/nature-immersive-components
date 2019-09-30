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

/**
 * Heading
 *
 * @param {*} param0
 */
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
    dangerouslySetInnerHTML: {
      __html: stand
    }
  }), author.length ? (0, _core.jsx)("p", {
    dangerouslySetInnerHTML: {
      __html: author
    }
  }) : null, photographer.length ? (0, _core.jsx)("p", {
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
  "description": "Heading\n\n@param {*} param0",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0hlYWRpbmcvaW5kZXguanN4Il0sIm5hbWVzIjpbIkhlYWRpbmciLCJhdXRob3IiLCJoZWFkbGluZSIsInBob3RvZ3JhcGhlciIsInB1Ymxpc2hlZEF0IiwicHVibGlzaGVkQXRTdHJpbmciLCJzdGFuZCIsIl9faHRtbCIsImxlbmd0aCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUE7Ozs7O0FBS0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxNQUNmQyxNQURlLFFBQ2ZBLE1BRGU7QUFBQSxNQUVmQyxRQUZlLFFBRWZBLFFBRmU7QUFBQSxNQUdmQyxZQUhlLFFBR2ZBLFlBSGU7QUFBQSxNQUlmQyxXQUplLFFBSWZBLFdBSmU7QUFBQSxNQUtmQyxpQkFMZSxRQUtmQSxpQkFMZTtBQUFBLE1BTWZDLEtBTmUsUUFNZkEsS0FOZTtBQUFBLFNBUWYsZUFBQyxlQUFELFFBQ0M7QUFBSSxJQUFBLHVCQUF1QixFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRUw7QUFBVjtBQUE3QixJQURELEVBRUM7QUFBRyxJQUFBLHVCQUF1QixFQUFFO0FBQUVLLE1BQUFBLE1BQU0sRUFBRUQ7QUFBVjtBQUE1QixJQUZELEVBSUVMLE1BQU0sQ0FBQ08sTUFBUCxHQUNBO0FBQUcsSUFBQSx1QkFBdUIsRUFBRTtBQUFFRCxNQUFBQSxNQUFNLEVBQUVOO0FBQVY7QUFBNUIsSUFEQSxHQUVHLElBTkwsRUFRRUUsWUFBWSxDQUFDSyxNQUFiLEdBQ0E7QUFDQyxJQUFBLHVCQUF1QixFQUFFO0FBQ3hCRCxNQUFBQSxNQUFNLEVBQUVKO0FBRGdCO0FBRDFCLElBREEsR0FNRyxJQWRMLEVBZ0JFQyxXQUFXLEdBQ1g7QUFDQyxJQUFBLFFBQVEsRUFBQyxlQURWO0FBRUMsSUFBQSxRQUFRLEVBQUVDLGlCQUFpQixJQUFJO0FBRmhDLEtBSUUseUJBQVdELFdBQVgsQ0FKRixDQURXLEdBT1IsSUF2QkwsQ0FSZTtBQUFBLENBQWhCOztBQW1DQUosT0FBTyxDQUFDUyxTQUFSLEdBQW9CO0FBQ25CUixFQUFBQSxNQUFNLEVBQUVTLG1CQUFVQyxNQUFWLENBQWlCQyxVQUROO0FBRW5CVixFQUFBQSxRQUFRLEVBQUVRLG1CQUFVQyxNQUFWLENBQWlCQyxVQUZSO0FBR25CVCxFQUFBQSxZQUFZLEVBQUVPLG1CQUFVQyxNQUFWLENBQWlCQyxVQUhaO0FBSW5CUixFQUFBQSxXQUFXLEVBQUVNLG1CQUFVRyxNQUFWLENBQWlCRCxVQUpYO0FBS25CUCxFQUFBQSxpQkFBaUIsRUFBRUssbUJBQVVDLE1BQVYsQ0FBaUJDLFVBTGpCO0FBTW5CTixFQUFBQSxLQUFLLEVBQUVJLG1CQUFVQyxNQUFWLENBQWlCQztBQU5MLENBQXBCO2VBU2VaLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdC1kYXRlXCJcbmltcG9ydCBTdHlsZWRIZWFkZXIgZnJvbSBcIi4vc3R5bGVzXCJcblxuLyoqXG4gKiBIZWFkaW5nXG4gKlxuICogQHBhcmFtIHsqfSBwYXJhbTBcbiAqL1xuY29uc3QgSGVhZGluZyA9ICh7XG5cdGF1dGhvcixcblx0aGVhZGxpbmUsXG5cdHBob3RvZ3JhcGhlcixcblx0cHVibGlzaGVkQXQsXG5cdHB1Ymxpc2hlZEF0U3RyaW5nLFxuXHRzdGFuZCxcbn0pID0+IChcblx0PFN0eWxlZEhlYWRlcj5cblx0XHQ8aDEgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBoZWFkbGluZSB9fSAvPlxuXHRcdDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3RhbmQgfX0gLz5cblxuXHRcdHthdXRob3IubGVuZ3RoID8gKFxuXHRcdFx0PHAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhdXRob3IgfX0gLz5cblx0XHQpIDogbnVsbH1cblxuXHRcdHtwaG90b2dyYXBoZXIubGVuZ3RoID8gKFxuXHRcdFx0PHBcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcblx0XHRcdFx0XHRfX2h0bWw6IHBob3RvZ3JhcGhlcixcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0KSA6IG51bGx9XG5cblx0XHR7cHVibGlzaGVkQXQgPyAoXG5cdFx0XHQ8dGltZVxuXHRcdFx0XHRpdGVtUHJvcD1cImRhdGVQdWJsaXNoZWRcIlxuXHRcdFx0XHRkYXRlVGltZT17cHVibGlzaGVkQXRTdHJpbmcgfHwgbnVsbH1cblx0XHRcdD5cblx0XHRcdFx0e2Zvcm1hdERhdGUocHVibGlzaGVkQXQpfVxuXHRcdFx0PC90aW1lPlxuXHRcdCkgOiBudWxsfVxuXHQ8L1N0eWxlZEhlYWRlcj5cbilcblxuSGVhZGluZy5wcm9wVHlwZXMgPSB7XG5cdGF1dGhvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRoZWFkbGluZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRwaG90b2dyYXBoZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0cHVibGlzaGVkQXQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblx0cHVibGlzaGVkQXRTdHJpbmc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcblx0c3RhbmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZ1xuIl19