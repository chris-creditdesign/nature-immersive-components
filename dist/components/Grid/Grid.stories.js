"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../Box/index"));

var _index3 = _interopRequireDefault(require("../Stack/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var TestContent = function TestContent() {
  return (0, _core.jsx)(_react.Fragment, null, (0, _core.jsx)("h3", null, "Test"), (0, _core.jsx)("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, corrupti aut. Natus, ducimus. Qui beatae, id quasi neque veniam sequi doloremque, officia voluptatibus expedita optio repudiandae quos ad! Aut, rerum."), (0, _core.jsx)("p", {
    className: "font-size:small-1 font-family:sans-serif"
  }, "Footnote"));
};

(0, _react2.storiesOf)("Layout/Grid", module).add("default", function () {
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
}).add("with extra space", function () {
  return (0, _core.jsx)(_index2.default, {
    space: "var(--s4)",
    className: "box"
  }, (0, _core.jsx)(_index.default, {
    space: "var(--s4)"
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
  })));
}).add("minWidth 100px", function () {
  return (0, _core.jsx)(_index.default, {
    className: "box",
    minWidth: "100px"
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
  }), (0, _core.jsx)("div", {
    className: "content"
  }));
}).add("text with extra space with surrounding Box", function () {
  return (0, _core.jsx)(_index2.default, {
    space: "var(--s4)"
  }, (0, _core.jsx)(_index.default, {
    space: "var(--s4)"
  }, (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null)), (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null)), (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null)), (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null))));
}).add("text in boxes with surrounding Box", function () {
  return (0, _core.jsx)(_index2.default, null, (0, _core.jsx)(_index.default, null, (0, _core.jsx)(_index2.default, {
    className: "invert"
  }, (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null))), (0, _core.jsx)(_index2.default, null, (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null))), (0, _core.jsx)(_index2.default, null, (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null))), (0, _core.jsx)(_index2.default, null, (0, _core.jsx)(_index3.default, null, (0, _core.jsx)(TestContent, null)))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0dyaWQvR3JpZC5zdG9yaWVzLmpzeCJdLCJuYW1lcyI6WyJUZXN0Q29udGVudCIsIm1vZHVsZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FDbkIsZUFBQyxlQUFELFFBQ0Msa0NBREQsRUFFQyxvUEFGRCxFQVNDO0FBQUcsSUFBQSxTQUFTLEVBQUM7QUFBYixnQkFURCxDQURtQjtBQUFBLENBQXBCOztBQWdCQSx1QkFBVSxhQUFWLEVBQXlCQyxNQUF6QixFQUNFQyxHQURGLENBQ00sU0FETixFQUNpQjtBQUFBLFNBQ2YsZUFBQyxjQUFEO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFERCxFQUVDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUZELEVBR0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBSEQsRUFJQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFKRCxFQUtDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUxELEVBTUM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBTkQsRUFPQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFQRCxDQURlO0FBQUEsQ0FEakIsRUFZRUEsR0FaRixDQVlNLGtCQVpOLEVBWTBCO0FBQUEsU0FDeEIsZUFBQyxlQUFEO0FBQUssSUFBQSxLQUFLLEVBQUMsV0FBWDtBQUF1QixJQUFBLFNBQVMsRUFBQztBQUFqQyxLQUNDLGVBQUMsY0FBRDtBQUFNLElBQUEsS0FBSyxFQUFDO0FBQVosS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFERCxFQUVDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUZELEVBR0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBSEQsRUFJQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFKRCxFQUtDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUxELEVBTUM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBTkQsRUFPQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFQRCxDQURELENBRHdCO0FBQUEsQ0FaMUIsRUF5QkVBLEdBekJGLENBeUJNLGdCQXpCTixFQXlCd0I7QUFBQSxTQUN0QixlQUFDLGNBQUQ7QUFBTSxJQUFBLFNBQVMsRUFBQyxLQUFoQjtBQUFzQixJQUFBLFFBQVEsRUFBQztBQUEvQixLQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBRkQsRUFHQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFIRCxFQUlDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUpELEVBS0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBTEQsRUFNQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFORCxFQU9DO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQVBELEVBUUM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBUkQsRUFTQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFURCxFQVVDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQVZELEVBV0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBWEQsRUFZQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFaRCxFQWFDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQWJELEVBY0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBZEQsRUFlQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFmRCxFQWdCQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFoQkQsRUFpQkM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBakJELEVBa0JDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQWxCRCxFQW1CQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFuQkQsRUFvQkM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBcEJELENBRHNCO0FBQUEsQ0F6QnhCLEVBaURFQSxHQWpERixDQWlETSw0Q0FqRE4sRUFpRG9EO0FBQUEsU0FDbEQsZUFBQyxlQUFEO0FBQUssSUFBQSxLQUFLLEVBQUM7QUFBWCxLQUNDLGVBQUMsY0FBRDtBQUFNLElBQUEsS0FBSyxFQUFDO0FBQVosS0FDQyxlQUFDLGVBQUQsUUFDQyxlQUFDLFdBQUQsT0FERCxDQURELEVBSUMsZUFBQyxlQUFELFFBQ0MsZUFBQyxXQUFELE9BREQsQ0FKRCxFQU9DLGVBQUMsZUFBRCxRQUNDLGVBQUMsV0FBRCxPQURELENBUEQsRUFVQyxlQUFDLGVBQUQsUUFDQyxlQUFDLFdBQUQsT0FERCxDQVZELENBREQsQ0FEa0Q7QUFBQSxDQWpEcEQsRUFtRUVBLEdBbkVGLENBbUVNLG9DQW5FTixFQW1FNEM7QUFBQSxTQUMxQyxlQUFDLGVBQUQsUUFDQyxlQUFDLGNBQUQsUUFDQyxlQUFDLGVBQUQ7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0MsZUFBQyxlQUFELFFBQ0MsZUFBQyxXQUFELE9BREQsQ0FERCxDQURELEVBTUMsZUFBQyxlQUFELFFBQ0MsZUFBQyxlQUFELFFBQ0MsZUFBQyxXQUFELE9BREQsQ0FERCxDQU5ELEVBV0MsZUFBQyxlQUFELFFBQ0MsZUFBQyxlQUFELFFBQ0MsZUFBQyxXQUFELE9BREQsQ0FERCxDQVhELEVBZ0JDLGVBQUMsZUFBRCxRQUNDLGVBQUMsZUFBRCxRQUNDLGVBQUMsV0FBRCxPQURELENBREQsQ0FoQkQsQ0FERCxDQUQwQztBQUFBLENBbkU1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiXG5cbmltcG9ydCBHcmlkIGZyb20gXCIuL2luZGV4XCJcbmltcG9ydCBCb3ggZnJvbSBcIi4uL0JveC9pbmRleFwiXG5pbXBvcnQgU3RhY2sgZnJvbSBcIi4uL1N0YWNrL2luZGV4XCJcblxuY29uc3QgVGVzdENvbnRlbnQgPSAoKSA9PiAoXG5cdDxGcmFnbWVudD5cblx0XHQ8aDM+VGVzdDwvaDM+XG5cdFx0PHA+XG5cdFx0XHRMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcblx0XHRcdGVsaXQuIE5paGlsLCBjb3JydXB0aSBhdXQuIE5hdHVzLCBkdWNpbXVzLiBRdWkgYmVhdGFlLFxuXHRcdFx0aWQgcXVhc2kgbmVxdWUgdmVuaWFtIHNlcXVpIGRvbG9yZW1xdWUsIG9mZmljaWFcblx0XHRcdHZvbHVwdGF0aWJ1cyBleHBlZGl0YSBvcHRpbyByZXB1ZGlhbmRhZSBxdW9zIGFkISBBdXQsXG5cdFx0XHRyZXJ1bS5cblx0XHQ8L3A+XG5cdFx0PHAgY2xhc3NOYW1lPVwiZm9udC1zaXplOnNtYWxsLTEgZm9udC1mYW1pbHk6c2Fucy1zZXJpZlwiPlxuXHRcdFx0Rm9vdG5vdGVcblx0XHQ8L3A+XG5cdDwvRnJhZ21lbnQ+XG4pXG5cbnN0b3JpZXNPZihcIkxheW91dC9HcmlkXCIsIG1vZHVsZSlcblx0LmFkZChcImRlZmF1bHRcIiwgKCkgPT4gKFxuXHRcdDxHcmlkIGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0PC9HcmlkPlxuXHQpKVxuXHQuYWRkKFwid2l0aCBleHRyYSBzcGFjZVwiLCAoKSA9PiAoXG5cdFx0PEJveCBzcGFjZT1cInZhcigtLXM0KVwiIGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0PEdyaWQgc3BhY2U9XCJ2YXIoLS1zNClcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8L0dyaWQ+XG5cdFx0PC9Cb3g+XG5cdCkpXG5cdC5hZGQoXCJtaW5XaWR0aCAxMDBweFwiLCAoKSA9PiAoXG5cdFx0PEdyaWQgY2xhc3NOYW1lPVwiYm94XCIgbWluV2lkdGg9XCIxMDBweFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj48L2Rpdj5cblx0XHQ8L0dyaWQ+XG5cdCkpXG5cdC5hZGQoXCJ0ZXh0IHdpdGggZXh0cmEgc3BhY2Ugd2l0aCBzdXJyb3VuZGluZyBCb3hcIiwgKCkgPT4gKFxuXHRcdDxCb3ggc3BhY2U9XCJ2YXIoLS1zNClcIj5cblx0XHRcdDxHcmlkIHNwYWNlPVwidmFyKC0tczQpXCI+XG5cdFx0XHRcdDxTdGFjaz5cblx0XHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0PFN0YWNrPlxuXHRcdFx0XHRcdDxUZXN0Q29udGVudCAvPlxuXHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8U3RhY2s+XG5cdFx0XHRcdFx0PFRlc3RDb250ZW50IC8+XG5cdFx0XHRcdDwvU3RhY2s+XG5cdFx0XHRcdDxTdGFjaz5cblx0XHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdDwvR3JpZD5cblx0XHQ8L0JveD5cblx0KSlcblx0LmFkZChcInRleHQgaW4gYm94ZXMgd2l0aCBzdXJyb3VuZGluZyBCb3hcIiwgKCkgPT4gKFxuXHRcdDxCb3g+XG5cdFx0XHQ8R3JpZD5cblx0XHRcdFx0PEJveCBjbGFzc05hbWU9XCJpbnZlcnRcIj5cblx0XHRcdFx0XHQ8U3RhY2s+XG5cdFx0XHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHQ8U3RhY2s+XG5cdFx0XHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHQ8U3RhY2s+XG5cdFx0XHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHQ8U3RhY2s+XG5cdFx0XHRcdFx0XHQ8VGVzdENvbnRlbnQgLz5cblx0XHRcdFx0XHQ8L1N0YWNrPlxuXHRcdFx0XHQ8L0JveD5cblx0XHRcdDwvR3JpZD5cblx0XHQ8L0JveD5cblx0KSlcbiJdfQ==