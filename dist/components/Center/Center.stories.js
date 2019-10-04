"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../Stack/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestContent = function TestContent() {
  return (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)("h3", null, "Test"), (0, _core.jsx)("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum."), (0, _core.jsx)("p", {
    className: "font-size:small-1 font-family:sans-serif"
  }, "Footnote"));
};

(0, _react2.storiesOf)("Layout/Center", module).add("default", function () {
  return (0, _core.jsx)(_index.default, {
    className: "box"
  }, (0, _core.jsx)("div", {
    className: "content"
  }));
}).add("with text in a Stack", function () {
  return (0, _core.jsx)(_index.default, null, (0, _core.jsx)(_index2.default, null, (0, _core.jsx)(TestContent, null)));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NlbnRlci9DZW50ZXIuc3Rvcmllcy5qc3giXSwibmFtZXMiOlsiVGVzdENvbnRlbnQiLCJtb2R1bGUiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQ25CLGVBQUMsZUFBRCxRQUNDLGtDQURELEVBRUMsb1BBRkQsRUFTQztBQUFHLElBQUEsU0FBUyxFQUFDO0FBQWIsZ0JBVEQsQ0FEbUI7QUFBQSxDQUFwQjs7QUFnQkEsdUJBQVUsZUFBVixFQUEyQkMsTUFBM0IsRUFDRUMsR0FERixDQUNNLFNBRE4sRUFDaUI7QUFBQSxTQUNmLGVBQUMsY0FBRDtBQUFRLElBQUEsU0FBUyxFQUFDO0FBQWxCLEtBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREQsQ0FEZTtBQUFBLENBRGpCLEVBTUVBLEdBTkYsQ0FNTSxzQkFOTixFQU04QjtBQUFBLFNBQzVCLGVBQUMsY0FBRCxRQUNDLGVBQUMsZUFBRCxRQUNDLGVBQUMsV0FBRCxPQURELENBREQsQ0FENEI7QUFBQSxDQU45QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiXG5cbmltcG9ydCBDZW50ZXIgZnJvbSBcIi4vaW5kZXhcIlxuaW1wb3J0IFN0YWNrIGZyb20gXCIuLi9TdGFjay9pbmRleFwiXG5cbmNvbnN0IFRlc3RDb250ZW50ID0gKCkgPT4gKFxuXHQ8RnJhZ21lbnQ+XG5cdFx0PGgzPlRlc3Q8L2gzPlxuXHRcdDxwPlxuXHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXG5cdFx0XHRlbGl0LiBOaWhpbCwgY29ycnVwdGkgYXV0LiBOYXR1cywgZHVjaW11cy4gUXVpIGJlYXRhZSxcblx0XHRcdGlkIHF1YXNpIG5lcXVlIHZlbmlhbSBzZXF1aSBkb2xvcmVtcXVlLCBvZmZpY2lhXG5cdFx0XHR2b2x1cHRhdGlidXMgZXhwZWRpdGEgb3B0aW8gcmVwdWRpYW5kYWUgcXVvcyBhZCEgQXV0LFxuXHRcdFx0cmVydW0uXG5cdFx0PC9wPlxuXHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZTpzbWFsbC0xIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWZcIj5cblx0XHRcdEZvb3Rub3RlXG5cdFx0PC9wPlxuXHQ8L0ZyYWdtZW50PlxuKVxuXG5zdG9yaWVzT2YoXCJMYXlvdXQvQ2VudGVyXCIsIG1vZHVsZSlcblx0LmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuXHRcdDxDZW50ZXIgY2xhc3NOYW1lPVwiYm94XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHQ8L0NlbnRlcj5cblx0KSlcblx0LmFkZChcIndpdGggdGV4dCBpbiBhIFN0YWNrXCIsICgpID0+IChcblx0XHQ8Q2VudGVyPlxuXHRcdFx0PFN0YWNrPlxuXHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9DZW50ZXI+XG5cdCkpXG4iXX0=