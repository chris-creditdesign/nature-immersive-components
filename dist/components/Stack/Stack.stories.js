"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../Box/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestContent = function TestContent() {
  return (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)("h3", null, "Test"), (0, _core.jsx)("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum."), (0, _core.jsx)("p", {
    className: "font-size:small-1 font-family:sans-serif"
  }, "Footnote"));
};

(0, _react2.storiesOf)("Layout/Stack", module).add("default", function () {
  return (0, _core.jsx)(_index.default, {
    className: "box"
  }, (0, _core.jsx)("div", {
    className: "content"
  }), (0, _core.jsx)("div", {
    className: "content"
  }), (0, _core.jsx)("div", {
    className: "content"
  }), (0, _core.jsx)("div", {
    className: "content"
  }), (0, _core.jsx)("div", {
    className: "content"
  }), (0, _core.jsx)("div", {
    className: "content"
  }), (0, _core.jsx)("div", {
    className: "content"
  }));
}).add("text", function () {
  return (0, _core.jsx)(_index.default, null, (0, _core.jsx)(TestContent, null));
}).add("text in a box", function () {
  return (0, _core.jsx)(_index2.default, null, (0, _core.jsx)(_index.default, null, (0, _core.jsx)(TestContent, null)));
}).add("text in a box invert", function () {
  return (0, _core.jsx)(_index2.default, {
    className: "invert"
  }, (0, _core.jsx)(_index.default, null, (0, _core.jsx)(TestContent, null)));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0YWNrL1N0YWNrLnN0b3JpZXMuanN4Il0sIm5hbWVzIjpbIlRlc3RDb250ZW50IiwibW9kdWxlIiwiYWRkIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxTQUNuQixlQUFDLGVBQUQsUUFDQyxrQ0FERCxFQUVDLG9QQUZELEVBU0M7QUFBRyxJQUFBLFNBQVMsRUFBQztBQUFiLGdCQVRELENBRG1CO0FBQUEsQ0FBcEI7O0FBZ0JBLHVCQUFVLGNBQVYsRUFBMEJDLE1BQTFCLEVBQ0VDLEdBREYsQ0FDTSxTQUROLEVBQ2lCO0FBQUEsU0FDZixlQUFDLGNBQUQ7QUFBTyxJQUFBLFNBQVMsRUFBQztBQUFqQixLQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBRkQsRUFHQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFIRCxFQUlDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUpELEVBS0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBTEQsRUFNQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFORCxFQU9DO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQVBELENBRGU7QUFBQSxDQURqQixFQVlFQSxHQVpGLENBWU0sTUFaTixFQVljO0FBQUEsU0FDWixlQUFDLGNBQUQsUUFDQyxlQUFDLFdBQUQsT0FERCxDQURZO0FBQUEsQ0FaZCxFQWlCRUEsR0FqQkYsQ0FpQk0sZUFqQk4sRUFpQnVCO0FBQUEsU0FDckIsZUFBQyxlQUFELFFBQ0MsZUFBQyxjQUFELFFBQ0MsZUFBQyxXQUFELE9BREQsQ0FERCxDQURxQjtBQUFBLENBakJ2QixFQXdCRUEsR0F4QkYsQ0F3Qk0sc0JBeEJOLEVBd0I4QjtBQUFBLFNBQzVCLGVBQUMsZUFBRDtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDQyxlQUFDLGNBQUQsUUFDQyxlQUFDLFdBQUQsT0FERCxDQURELENBRDRCO0FBQUEsQ0F4QjlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHN0b3JpZXNPZiB9IGZyb20gXCJAc3Rvcnlib29rL3JlYWN0XCJcblxuaW1wb3J0IFN0YWNrIGZyb20gXCIuL2luZGV4XCJcbmltcG9ydCBCb3ggZnJvbSBcIi4uL0JveC9pbmRleFwiXG5cbmNvbnN0IFRlc3RDb250ZW50ID0gKCkgPT4gKFxuXHQ8RnJhZ21lbnQ+XG5cdFx0PGgzPlRlc3Q8L2gzPlxuXHRcdDxwPlxuXHRcdFx0TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nXG5cdFx0XHRlbGl0LiBOaWhpbCwgY29ycnVwdGkgYXV0LiBOYXR1cywgZHVjaW11cy4gUXVpIGJlYXRhZSxcblx0XHRcdGlkIHF1YXNpIG5lcXVlIHZlbmlhbSBzZXF1aSBkb2xvcmVtcXVlLCBvZmZpY2lhXG5cdFx0XHR2b2x1cHRhdGlidXMgZXhwZWRpdGEgb3B0aW8gcmVwdWRpYW5kYWUgcXVvcyBhZCEgQXV0LFxuXHRcdFx0cmVydW0uXG5cdFx0PC9wPlxuXHRcdDxwIGNsYXNzTmFtZT1cImZvbnQtc2l6ZTpzbWFsbC0xIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWZcIj5cblx0XHRcdEZvb3Rub3RlXG5cdFx0PC9wPlxuXHQ8L0ZyYWdtZW50PlxuKVxuXG5zdG9yaWVzT2YoXCJMYXlvdXQvU3RhY2tcIiwgbW9kdWxlKVxuXHQuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG5cdFx0PFN0YWNrIGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0PC9TdGFjaz5cblx0KSlcblx0LmFkZChcInRleHRcIiwgKCkgPT4gKFxuXHRcdDxTdGFjaz5cblx0XHRcdDxUZXN0Q29udGVudCAvPlxuXHRcdDwvU3RhY2s+XG5cdCkpXG5cdC5hZGQoXCJ0ZXh0IGluIGEgYm94XCIsICgpID0+IChcblx0XHQ8Qm94PlxuXHRcdFx0PFN0YWNrPlxuXHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdDwvU3RhY2s+XG5cdFx0PC9Cb3g+XG5cdCkpXG5cdC5hZGQoXCJ0ZXh0IGluIGEgYm94IGludmVydFwiLCAoKSA9PiAoXG5cdFx0PEJveCBjbGFzc05hbWU9XCJpbnZlcnRcIj5cblx0XHRcdDxTdGFjaz5cblx0XHRcdFx0PFRlc3RDb250ZW50IC8+XG5cdFx0XHQ8L1N0YWNrPlxuXHRcdDwvQm94PlxuXHQpKVxuIl19