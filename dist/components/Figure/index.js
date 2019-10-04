"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Figure = function Figure(_ref) {
  var className = _ref.className;
  return (0, _core.jsx)(_styles.default, {
    className: className
  }, (0, _core.jsx)("picture", null, (0, _core.jsx)("img", {
    src: "public/img/image.jpg",
    alt: "test"
  })), (0, _core.jsx)("figcaption", {
    className: "font-size:small-1 font-family:sans-serif"
  }, "Image caption text"));
};

Figure.defaultProps = {
  className: ""
};
Figure.propTypes = {
  className: _propTypes.default.string
};
var _default = Figure;
exports.default = _default;
Figure.__docgenInfo = {
  "description": "",
  "methods": [],
  "displayName": "Figure",
  "props": {
    "className": {
      "defaultValue": {
        "value": "\"\"",
        "computed": false
      },
      "type": {
        "name": "string"
      },
      "required": false,
      "description": ""
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0ZpZ3VyZS9pbmRleC5qc3giXSwibmFtZXMiOlsiRmlndXJlIiwiY2xhc3NOYW1lIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FDZCxlQUFDLGVBQUQ7QUFBYyxJQUFBLFNBQVMsRUFBRUE7QUFBekIsS0FDQyxnQ0FDQztBQUFLLElBQUEsR0FBRyxFQUFDLHNCQUFUO0FBQWdDLElBQUEsR0FBRyxFQUFDO0FBQXBDLElBREQsQ0FERCxFQUlDO0FBQVksSUFBQSxTQUFTLEVBQUM7QUFBdEIsMEJBSkQsQ0FEYztBQUFBLENBQWY7O0FBV0FELE1BQU0sQ0FBQ0UsWUFBUCxHQUFzQjtBQUNyQkQsRUFBQUEsU0FBUyxFQUFFO0FBRFUsQ0FBdEI7QUFJQUQsTUFBTSxDQUFDRyxTQUFQLEdBQW1CO0FBQ2xCRixFQUFBQSxTQUFTLEVBQUVHLG1CQUFVQztBQURILENBQW5CO2VBSWVMLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IFN0eWxlZEZpZ3VyZSBmcm9tIFwiLi9zdHlsZXNcIlxuXG5jb25zdCBGaWd1cmUgPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxuXHQ8U3R5bGVkRmlndXJlIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cblx0XHQ8cGljdHVyZT5cblx0XHRcdDxpbWcgc3JjPVwicHVibGljL2ltZy9pbWFnZS5qcGdcIiBhbHQ9XCJ0ZXN0XCIgLz5cblx0XHQ8L3BpY3R1cmU+XG5cdFx0PGZpZ2NhcHRpb24gY2xhc3NOYW1lPVwiZm9udC1zaXplOnNtYWxsLTEgZm9udC1mYW1pbHk6c2Fucy1zZXJpZlwiPlxuXHRcdFx0SW1hZ2UgY2FwdGlvbiB0ZXh0XG5cdFx0PC9maWdjYXB0aW9uPlxuXHQ8L1N0eWxlZEZpZ3VyZT5cbilcblxuRmlndXJlLmRlZmF1bHRQcm9wcyA9IHtcblx0Y2xhc3NOYW1lOiBcIlwiLFxufVxuXG5GaWd1cmUucHJvcFR5cGVzID0ge1xuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpZ3VyZVxuIl19