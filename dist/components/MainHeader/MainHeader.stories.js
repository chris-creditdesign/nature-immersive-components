"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

var _articleData = _interopRequireDefault(require("../../data/content/article-data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _react2.storiesOf)("MainHeader", module).add("default", function () {
  return (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)(_index.default, _articleData.default));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW5IZWFkZXIvTWFpbkhlYWRlci5zdG9yaWVzLmpzeCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiLCJhcnRpY2xlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOzs7Ozs7OztBQUVBLHVCQUFVLFlBQVYsRUFBd0JBLE1BQXhCLEVBQWdDQyxHQUFoQyxDQUFvQyxTQUFwQyxFQUErQztBQUFBLFNBQzlDLGVBQUMsZUFBRCxRQUNDLGVBQUMsY0FBRCxFQUFnQkMsb0JBQWhCLENBREQsQ0FEOEM7QUFBQSxDQUEvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiXG5cbmltcG9ydCBNYWluSGVhZGVyIGZyb20gXCIuL2luZGV4XCJcbmltcG9ydCBhcnRpY2xlRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9jb250ZW50L2FydGljbGUtZGF0YS5qc29uXCJcblxuc3Rvcmllc09mKFwiTWFpbkhlYWRlclwiLCBtb2R1bGUpLmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuXHQ8RnJhZ21lbnQ+XG5cdFx0PE1haW5IZWFkZXIgey4uLmFydGljbGVEYXRhfSAvPlxuXHQ8L0ZyYWdtZW50PlxuKSlcbiJdfQ==