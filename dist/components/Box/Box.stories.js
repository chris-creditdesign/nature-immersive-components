"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Layout/Box", module).add("default", function () {
  return (0, _core.jsx)(_index.default, {
    className: "box"
  }, (0, _core.jsx)("div", {
    className: "content"
  }));
}).add("extra space", function () {
  return (0, _core.jsx)(_index.default, {
    className: "box",
    space: "var(--s3)"
  }, (0, _core.jsx)("div", {
    className: "content"
  }));
}).add("no space", function () {
  return (0, _core.jsx)(_index.default, {
    className: "box",
    space: "none"
  }, (0, _core.jsx)("div", {
    className: "content"
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JveC9Cb3guc3Rvcmllcy5qc3giXSwibmFtZXMiOlsibW9kdWxlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSx1QkFBVSxZQUFWLEVBQXdCQSxNQUF4QixFQUNFQyxHQURGLENBQ00sU0FETixFQUNpQjtBQUFBLFNBQ2YsZUFBQyxjQUFEO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQURELENBRGU7QUFBQSxDQURqQixFQU1FQSxHQU5GLENBTU0sYUFOTixFQU1xQjtBQUFBLFNBQ25CLGVBQUMsY0FBRDtBQUFLLElBQUEsU0FBUyxFQUFDLEtBQWY7QUFBcUIsSUFBQSxLQUFLLEVBQUM7QUFBM0IsS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFERCxDQURtQjtBQUFBLENBTnJCLEVBV0VBLEdBWEYsQ0FXTSxVQVhOLEVBV2tCO0FBQUEsU0FDaEIsZUFBQyxjQUFEO0FBQUssSUFBQSxTQUFTLEVBQUMsS0FBZjtBQUFxQixJQUFBLEtBQUssRUFBQztBQUEzQixLQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQURELENBRGdCO0FBQUEsQ0FYbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCJcblxuaW1wb3J0IEJveCBmcm9tIFwiLi9pbmRleFwiXG5cbnN0b3JpZXNPZihcIkxheW91dC9Cb3hcIiwgbW9kdWxlKVxuXHQuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG5cdFx0PEJveCBjbGFzc05hbWU9XCJib3hcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdDwvQm94PlxuXHQpKVxuXHQuYWRkKFwiZXh0cmEgc3BhY2VcIiwgKCkgPT4gKFxuXHRcdDxCb3ggY2xhc3NOYW1lPVwiYm94XCIgc3BhY2U9XCJ2YXIoLS1zMylcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdDwvQm94PlxuXHQpKVxuXHQuYWRkKFwibm8gc3BhY2VcIiwgKCkgPT4gKFxuXHRcdDxCb3ggY2xhc3NOYW1lPVwiYm94XCIgc3BhY2U9XCJub25lXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHQ8L0JveD5cblx0KSlcbiJdfQ==