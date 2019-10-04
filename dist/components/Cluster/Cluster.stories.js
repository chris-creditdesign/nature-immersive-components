"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

var _index2 = _interopRequireDefault(require("../Box/index"));

var _index3 = require("../LogosSVG/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _react2.storiesOf)("Layout/Cluster", module).add("default", function () {
  return (0, _core.jsx)(_index.default, {
    className: "box"
  }, (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)(_index.default, {
    justifyContent: "flex-start"
  }, (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)("div", {
    className: "content horizontal"
  })));
}).add("in a box", function () {
  return (0, _core.jsx)(_index2.default, {
    className: "box"
  }, (0, _core.jsx)(_index.default, null, (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)(_index.default, {
    justifyContent: "flex-start"
  }, (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)("div", {
    className: "content horizontal"
  }))));
}).add("with logo in a box", function () {
  return (0, _core.jsx)(_index2.default, {
    className: "box"
  }, (0, _core.jsx)(_index.default, null, (0, _core.jsx)(_index3.NatureLogoSVG, {
    height: 2
  }), (0, _core.jsx)(_index.default, {
    justifyContent: "flex-start"
  }, (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)("div", {
    className: "content horizontal"
  }), (0, _core.jsx)("div", {
    className: "content horizontal"
  }))));
}).add("with links in a box", function () {
  return (0, _core.jsx)(_index2.default, {
    className: "box"
  }, (0, _core.jsx)(_index.default, null, (0, _core.jsx)(_index3.NatureLogoSVG, {
    height: 2
  }), (0, _core.jsx)(_index.default, {
    justifyContent: "flex-start",
    space: "var(--s1)"
  }, (0, _core.jsx)("p", null, "Home page"), (0, _core.jsx)("p", null, "About"), (0, _core.jsx)("p", null, "Blog"), (0, _core.jsx)("p", null, "Index"))));
}).add("with social icons in a box", function () {
  return (0, _core.jsx)(_index2.default, {
    className: "box"
  }, (0, _core.jsx)(_index.default, {
    justifyContent: "flex-end"
  }, (0, _core.jsx)("div", {
    className: "logo"
  }, (0, _core.jsx)(_index3.NatureLogoSVG, {
    height: 2
  })), (0, _core.jsx)(_index.default, null, (0, _core.jsx)("p", null, "Home page"), (0, _core.jsx)("p", null, "About"), (0, _core.jsx)("p", null, "Blog"), (0, _core.jsx)("p", null, "Index")), (0, _core.jsx)(_index.default, null, (0, _core.jsx)(_index3.EmailLogoSVG, {
    height: 2
  }), (0, _core.jsx)(_index3.FacebookLogoSVG, {
    height: 2
  }), (0, _core.jsx)(_index3.TwitterLogoSVG, {
    height: 2
  }))));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NsdXN0ZXIvQ2x1c3Rlci5zdG9yaWVzLmpzeCJdLCJuYW1lcyI6WyJtb2R1bGUiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7OztBQU9BLHVCQUFVLGdCQUFWLEVBQTRCQSxNQUE1QixFQUNFQyxHQURGLENBQ00sU0FETixFQUNpQjtBQUFBLFNBQ2YsZUFBQyxjQUFEO0FBQVMsSUFBQSxTQUFTLEVBQUM7QUFBbkIsS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFERCxFQUVDLGVBQUMsY0FBRDtBQUFTLElBQUEsY0FBYyxFQUFDO0FBQXhCLEtBQ0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBREQsRUFFQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFGRCxFQUdDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUhELENBRkQsQ0FEZTtBQUFBLENBRGpCLEVBV0VBLEdBWEYsQ0FXTSxVQVhOLEVBV2tCO0FBQUEsU0FDaEIsZUFBQyxlQUFEO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNDLGVBQUMsY0FBRCxRQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQURELEVBRUMsZUFBQyxjQUFEO0FBQVMsSUFBQSxjQUFjLEVBQUM7QUFBeEIsS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFERCxFQUVDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQUZELEVBR0M7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBSEQsQ0FGRCxDQURELENBRGdCO0FBQUEsQ0FYbEIsRUF1QkVBLEdBdkJGLENBdUJNLG9CQXZCTixFQXVCNEI7QUFBQSxTQUMxQixlQUFDLGVBQUQ7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0MsZUFBQyxjQUFELFFBQ0MsZUFBQyxxQkFBRDtBQUFlLElBQUEsTUFBTSxFQUFFO0FBQXZCLElBREQsRUFFQyxlQUFDLGNBQUQ7QUFBUyxJQUFBLGNBQWMsRUFBQztBQUF4QixLQUNDO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixJQURELEVBRUM7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLElBRkQsRUFHQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsSUFIRCxDQUZELENBREQsQ0FEMEI7QUFBQSxDQXZCNUIsRUFtQ0VBLEdBbkNGLENBbUNNLHFCQW5DTixFQW1DNkI7QUFBQSxTQUMzQixlQUFDLGVBQUQ7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0MsZUFBQyxjQUFELFFBQ0MsZUFBQyxxQkFBRDtBQUFlLElBQUEsTUFBTSxFQUFFO0FBQXZCLElBREQsRUFFQyxlQUFDLGNBQUQ7QUFDQyxJQUFBLGNBQWMsRUFBQyxZQURoQjtBQUVDLElBQUEsS0FBSyxFQUFDO0FBRlAsS0FJQyxzQ0FKRCxFQUtDLGtDQUxELEVBTUMsaUNBTkQsRUFPQyxrQ0FQRCxDQUZELENBREQsQ0FEMkI7QUFBQSxDQW5DN0IsRUFtREVBLEdBbkRGLENBbURNLDRCQW5ETixFQW1Eb0M7QUFBQSxTQUNsQyxlQUFDLGVBQUQ7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0MsZUFBQyxjQUFEO0FBQVMsSUFBQSxjQUFjLEVBQUM7QUFBeEIsS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDQyxlQUFDLHFCQUFEO0FBQWUsSUFBQSxNQUFNLEVBQUU7QUFBdkIsSUFERCxDQURELEVBSUMsZUFBQyxjQUFELFFBQ0Msc0NBREQsRUFFQyxrQ0FGRCxFQUdDLGlDQUhELEVBSUMsa0NBSkQsQ0FKRCxFQVVDLGVBQUMsY0FBRCxRQUNDLGVBQUMsb0JBQUQ7QUFBYyxJQUFBLE1BQU0sRUFBRTtBQUF0QixJQURELEVBRUMsZUFBQyx1QkFBRDtBQUFpQixJQUFBLE1BQU0sRUFBRTtBQUF6QixJQUZELEVBR0MsZUFBQyxzQkFBRDtBQUFnQixJQUFBLE1BQU0sRUFBRTtBQUF4QixJQUhELENBVkQsQ0FERCxDQURrQztBQUFBLENBbkRwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIlxuXG5pbXBvcnQgQ2x1c3RlciBmcm9tIFwiLi9pbmRleFwiXG5pbXBvcnQgQm94IGZyb20gXCIuLi9Cb3gvaW5kZXhcIlxuaW1wb3J0IHtcblx0TmF0dXJlTG9nb1NWRyxcblx0RW1haWxMb2dvU1ZHLFxuXHRGYWNlYm9va0xvZ29TVkcsXG5cdFR3aXR0ZXJMb2dvU1ZHLFxufSBmcm9tIFwiLi4vTG9nb3NTVkcvaW5kZXhcIlxuXG5zdG9yaWVzT2YoXCJMYXlvdXQvQ2x1c3RlclwiLCBtb2R1bGUpXG5cdC5hZGQoXCJkZWZhdWx0XCIsICgpID0+IChcblx0XHQ8Q2x1c3RlciBjbGFzc05hbWU9XCJib3hcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBob3Jpem9udGFsXCI+PC9kaXY+XG5cdFx0XHQ8Q2x1c3RlciBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGhvcml6b250YWxcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGhvcml6b250YWxcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGhvcml6b250YWxcIj48L2Rpdj5cblx0XHRcdDwvQ2x1c3Rlcj5cblx0XHQ8L0NsdXN0ZXI+XG5cdCkpXG5cdC5hZGQoXCJpbiBhIGJveFwiLCAoKSA9PiAoXG5cdFx0PEJveCBjbGFzc05hbWU9XCJib3hcIj5cblx0XHRcdDxDbHVzdGVyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgaG9yaXpvbnRhbFwiPjwvZGl2PlxuXHRcdFx0XHQ8Q2x1c3RlciBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgaG9yaXpvbnRhbFwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBob3Jpem9udGFsXCI+PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGhvcml6b250YWxcIj48L2Rpdj5cblx0XHRcdFx0PC9DbHVzdGVyPlxuXHRcdFx0PC9DbHVzdGVyPlxuXHRcdDwvQm94PlxuXHQpKVxuXHQuYWRkKFwid2l0aCBsb2dvIGluIGEgYm94XCIsICgpID0+IChcblx0XHQ8Qm94IGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0PENsdXN0ZXI+XG5cdFx0XHRcdDxOYXR1cmVMb2dvU1ZHIGhlaWdodD17Mn0gLz5cblx0XHRcdFx0PENsdXN0ZXIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LXN0YXJ0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50IGhvcml6b250YWxcIj48L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQgaG9yaXpvbnRhbFwiPjwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBob3Jpem9udGFsXCI+PC9kaXY+XG5cdFx0XHRcdDwvQ2x1c3Rlcj5cblx0XHRcdDwvQ2x1c3Rlcj5cblx0XHQ8L0JveD5cblx0KSlcblx0LmFkZChcIndpdGggbGlua3MgaW4gYSBib3hcIiwgKCkgPT4gKFxuXHRcdDxCb3ggY2xhc3NOYW1lPVwiYm94XCI+XG5cdFx0XHQ8Q2x1c3Rlcj5cblx0XHRcdFx0PE5hdHVyZUxvZ29TVkcgaGVpZ2h0PXsyfSAvPlxuXHRcdFx0XHQ8Q2x1c3RlclxuXHRcdFx0XHRcdGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG5cdFx0XHRcdFx0c3BhY2U9XCJ2YXIoLS1zMSlcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PHA+SG9tZSBwYWdlPC9wPlxuXHRcdFx0XHRcdDxwPkFib3V0PC9wPlxuXHRcdFx0XHRcdDxwPkJsb2c8L3A+XG5cdFx0XHRcdFx0PHA+SW5kZXg8L3A+XG5cdFx0XHRcdDwvQ2x1c3Rlcj5cblx0XHRcdDwvQ2x1c3Rlcj5cblx0XHQ8L0JveD5cblx0KSlcblx0LmFkZChcIndpdGggc29jaWFsIGljb25zIGluIGEgYm94XCIsICgpID0+IChcblx0XHQ8Qm94IGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0PENsdXN0ZXIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cblx0XHRcdFx0XHQ8TmF0dXJlTG9nb1NWRyBoZWlnaHQ9ezJ9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8Q2x1c3Rlcj5cblx0XHRcdFx0XHQ8cD5Ib21lIHBhZ2U8L3A+XG5cdFx0XHRcdFx0PHA+QWJvdXQ8L3A+XG5cdFx0XHRcdFx0PHA+QmxvZzwvcD5cblx0XHRcdFx0XHQ8cD5JbmRleDwvcD5cblx0XHRcdFx0PC9DbHVzdGVyPlxuXHRcdFx0XHQ8Q2x1c3Rlcj5cblx0XHRcdFx0XHQ8RW1haWxMb2dvU1ZHIGhlaWdodD17Mn0gLz5cblx0XHRcdFx0XHQ8RmFjZWJvb2tMb2dvU1ZHIGhlaWdodD17Mn0gLz5cblx0XHRcdFx0XHQ8VHdpdHRlckxvZ29TVkcgaGVpZ2h0PXsyfSAvPlxuXHRcdFx0XHQ8L0NsdXN0ZXI+XG5cdFx0XHQ8L0NsdXN0ZXI+XG5cdFx0PC9Cb3g+XG5cdCkpXG4iXX0=