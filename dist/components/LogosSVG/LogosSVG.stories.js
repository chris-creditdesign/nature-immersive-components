"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireWildcard(require("./index"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = [1, 2, 3, 4, 5];
var ratio = 1.5;
(0, _react2.storiesOf)("LogosSVG", module).add("default", function () {
  return (0, _core.jsx)("div", null, (0, _core.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: "svg { border: 1px solid red;}"
    }
  }), (0, _core.jsx)(_index.default, null), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.NatureLogoSVG, null)), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.SpringerNatureLogoSVG, null)), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.FacebookLogoSVG, null)), (0, _core.jsx)("div", null, (0, _core.jsx)("svg", {
    width: "192.77802",
    height: "32.118534",
    viewBox: "0 0 192.77802 32.118534"
  }, (0, _core.jsx)("use", {
    href: "#nature-briefing-logo",
    xlinkHref: "#nature-briefing-logo"
  }))), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.PdfLogoSVG, null)), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.EmailLogoSVG, null)), (0, _core.jsx)("div", null, (0, _core.jsx)("svg", {
    width: "30px",
    height: "30px",
    viewBox: "0 0 30 30"
  }, (0, _core.jsx)("use", {
    href: "#text-section-twitter",
    xlinkHref: "#text-section-twitter"
  }))), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.FacebookLogoSVG, null)), (0, _core.jsx)("div", null, (0, _core.jsx)("svg", {
    width: "30px",
    height: "30px",
    viewBox: "0 0 30 30"
  }, (0, _core.jsx)("use", {
    href: "#text-section-facebook",
    xlinkHref: "#text-section-facebook"
  }))), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.EmailLogoSVG, null)));
}).add("NatureLogoSVG", function () {
  return (0, _core.jsx)("div", null, (0, _core.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: "svg { border: 1px solid red;}"
    }
  }), sizes.map(function (size) {
    return (0, _core.jsx)("div", null, (0, _core.jsx)(_index.NatureLogoSVG, {
      height: size * ratio
    }));
  }));
}).add("SpringerNatureLogoSVG", function () {
  return (0, _core.jsx)("div", null, (0, _core.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: "svg { border: 1px solid red;}"
    }
  }), (0, _core.jsx)("div", null, (0, _core.jsx)(_index.SpringerNatureLogoSVG, null)));
}).add("PdfLogoSVG", function () {
  return (0, _core.jsx)("div", null, (0, _core.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: "svg { border: 1px solid red;}"
    }
  }), sizes.map(function (size) {
    return (0, _core.jsx)("div", null, (0, _core.jsx)(_index.PdfLogoSVG, {
      height: size * ratio
    }));
  }));
}).add("FacebookLogoSVG", function () {
  return (0, _core.jsx)("div", null, (0, _core.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: "svg { border: 1px solid red;}"
    }
  }), sizes.map(function (size) {
    return (0, _core.jsx)("div", null, (0, _core.jsx)(_index.FacebookLogoSVG, {
      height: size * ratio
    }));
  }));
}).add("TwitterLogoSVG", function () {
  return (0, _core.jsx)("div", null, (0, _core.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: "svg { border: 1px solid red;}"
    }
  }), sizes.map(function (size) {
    return (0, _core.jsx)("div", null, (0, _core.jsx)(_index.TwitterLogoSVG, {
      height: size * ratio
    }));
  }));
}).add("EmailLogoSVG", function () {
  return (0, _core.jsx)("div", null, (0, _core.jsx)("style", {
    dangerouslySetInnerHTML: {
      __html: "svg { border: 1px solid red;}"
    }
  }), sizes.map(function (size) {
    return (0, _core.jsx)("div", null, (0, _core.jsx)(_index.EmailLogoSVG, {
      height: size * ratio
    }));
  }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0xvZ29zU1ZHL0xvZ29zU1ZHLnN0b3JpZXMuanN4Il0sIm5hbWVzIjpbInNpemVzIiwicmF0aW8iLCJtb2R1bGUiLCJhZGQiLCJfX2h0bWwiLCJtYXAiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0FBU0EsSUFBTUEsS0FBSyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsQ0FBZDtBQUNBLElBQU1DLEtBQUssR0FBRyxHQUFkO0FBRUEsdUJBQVUsVUFBVixFQUFzQkMsTUFBdEIsRUFDRUMsR0FERixDQUNNLFNBRE4sRUFDaUI7QUFBQSxTQUNmLDRCQUNDO0FBQ0MsSUFBQSx1QkFBdUIsRUFBRTtBQUN4QkMsTUFBQUEsTUFBTSxFQUFFO0FBRGdCO0FBRDFCLElBREQsRUFNQyxlQUFDLGNBQUQsT0FORCxFQU9DLDRCQUNDLGVBQUMsb0JBQUQsT0FERCxDQVBELEVBVUMsNEJBQ0MsZUFBQyw0QkFBRCxPQURELENBVkQsRUFhQyw0QkFDQyxlQUFDLHNCQUFELE9BREQsQ0FiRCxFQWdCQyw0QkFDQztBQUNDLElBQUEsS0FBSyxFQUFDLFdBRFA7QUFFQyxJQUFBLE1BQU0sRUFBQyxXQUZSO0FBR0MsSUFBQSxPQUFPLEVBQUM7QUFIVCxLQUtDO0FBQ0MsSUFBQSxJQUFJLEVBQUMsdUJBRE47QUFFQyxJQUFBLFNBQVMsRUFBQztBQUZYLElBTEQsQ0FERCxDQWhCRCxFQTRCQyw0QkFDQyxlQUFDLGlCQUFELE9BREQsQ0E1QkQsRUErQkMsNEJBQ0MsZUFBQyxtQkFBRCxPQURELENBL0JELEVBa0NDLDRCQUNDO0FBQ0MsSUFBQSxLQUFLLEVBQUMsTUFEUDtBQUVDLElBQUEsTUFBTSxFQUFDLE1BRlI7QUFHQyxJQUFBLE9BQU8sRUFBQztBQUhULEtBS0M7QUFDQyxJQUFBLElBQUksRUFBQyx1QkFETjtBQUVDLElBQUEsU0FBUyxFQUFDO0FBRlgsSUFMRCxDQURELENBbENELEVBOENDLDRCQUNDLGVBQUMsc0JBQUQsT0FERCxDQTlDRCxFQWlEQyw0QkFDQztBQUNDLElBQUEsS0FBSyxFQUFDLE1BRFA7QUFFQyxJQUFBLE1BQU0sRUFBQyxNQUZSO0FBR0MsSUFBQSxPQUFPLEVBQUM7QUFIVCxLQUtDO0FBQ0MsSUFBQSxJQUFJLEVBQUMsd0JBRE47QUFFQyxJQUFBLFNBQVMsRUFBQztBQUZYLElBTEQsQ0FERCxDQWpERCxFQTZEQyw0QkFDQyxlQUFDLG1CQUFELE9BREQsQ0E3REQsQ0FEZTtBQUFBLENBRGpCLEVBb0VFRCxHQXBFRixDQW9FTSxlQXBFTixFQW9FdUI7QUFBQSxTQUNyQiw0QkFDQztBQUNDLElBQUEsdUJBQXVCLEVBQUU7QUFDeEJDLE1BQUFBLE1BQU0sRUFBRTtBQURnQjtBQUQxQixJQURELEVBTUVKLEtBQUssQ0FBQ0ssR0FBTixDQUFVLFVBQUFDLElBQUk7QUFBQSxXQUNkLDRCQUNDLGVBQUMsb0JBQUQ7QUFBZSxNQUFBLE1BQU0sRUFBRUEsSUFBSSxHQUFHTDtBQUE5QixNQURELENBRGM7QUFBQSxHQUFkLENBTkYsQ0FEcUI7QUFBQSxDQXBFdkIsRUFrRkVFLEdBbEZGLENBa0ZNLHVCQWxGTixFQWtGK0I7QUFBQSxTQUM3Qiw0QkFDQztBQUNDLElBQUEsdUJBQXVCLEVBQUU7QUFDeEJDLE1BQUFBLE1BQU0sRUFBRTtBQURnQjtBQUQxQixJQURELEVBTUMsNEJBQ0MsZUFBQyw0QkFBRCxPQURELENBTkQsQ0FENkI7QUFBQSxDQWxGL0IsRUE4RkVELEdBOUZGLENBOEZNLFlBOUZOLEVBOEZvQjtBQUFBLFNBQ2xCLDRCQUNDO0FBQ0MsSUFBQSx1QkFBdUIsRUFBRTtBQUN4QkMsTUFBQUEsTUFBTSxFQUFFO0FBRGdCO0FBRDFCLElBREQsRUFNRUosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQ2QsNEJBQ0MsZUFBQyxpQkFBRDtBQUFZLE1BQUEsTUFBTSxFQUFFQSxJQUFJLEdBQUdMO0FBQTNCLE1BREQsQ0FEYztBQUFBLEdBQWQsQ0FORixDQURrQjtBQUFBLENBOUZwQixFQTRHRUUsR0E1R0YsQ0E0R00saUJBNUdOLEVBNEd5QjtBQUFBLFNBQ3ZCLDRCQUNDO0FBQ0MsSUFBQSx1QkFBdUIsRUFBRTtBQUN4QkMsTUFBQUEsTUFBTSxFQUFFO0FBRGdCO0FBRDFCLElBREQsRUFNRUosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQ2QsNEJBQ0MsZUFBQyxzQkFBRDtBQUNDLE1BQUEsTUFBTSxFQUFFQSxJQUFJLEdBQUdMO0FBRGhCLE1BREQsQ0FEYztBQUFBLEdBQWQsQ0FORixDQUR1QjtBQUFBLENBNUd6QixFQTRIRUUsR0E1SEYsQ0E0SE0sZ0JBNUhOLEVBNEh3QjtBQUFBLFNBQ3RCLDRCQUNDO0FBQ0MsSUFBQSx1QkFBdUIsRUFBRTtBQUN4QkMsTUFBQUEsTUFBTSxFQUFFO0FBRGdCO0FBRDFCLElBREQsRUFNRUosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQ2QsNEJBQ0MsZUFBQyxxQkFBRDtBQUFnQixNQUFBLE1BQU0sRUFBRUEsSUFBSSxHQUFHTDtBQUEvQixNQURELENBRGM7QUFBQSxHQUFkLENBTkYsQ0FEc0I7QUFBQSxDQTVIeEIsRUEwSUVFLEdBMUlGLENBMElNLGNBMUlOLEVBMElzQjtBQUFBLFNBQ3BCLDRCQUNDO0FBQ0MsSUFBQSx1QkFBdUIsRUFBRTtBQUN4QkMsTUFBQUEsTUFBTSxFQUFFO0FBRGdCO0FBRDFCLElBREQsRUFNRUosS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQUMsSUFBSTtBQUFBLFdBQ2QsNEJBQ0MsZUFBQyxtQkFBRDtBQUFjLE1BQUEsTUFBTSxFQUFFQSxJQUFJLEdBQUdMO0FBQTdCLE1BREQsQ0FEYztBQUFBLEdBQWQsQ0FORixDQURvQjtBQUFBLENBMUl0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgc3Rvcmllc09mIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3RcIlxuaW1wb3J0IERlZlNWRywge1xuXHRFbWFpbExvZ29TVkcsXG5cdEZhY2Vib29rTG9nb1NWRyxcblx0TmF0dXJlTG9nb1NWRyxcblx0UGRmTG9nb1NWRyxcblx0U3ByaW5nZXJOYXR1cmVMb2dvU1ZHLFxuXHRUd2l0dGVyTG9nb1NWRyxcbn0gZnJvbSBcIi4vaW5kZXhcIlxuXG5jb25zdCBzaXplcyA9IFsxLCAyLCAzLCA0LCA1XVxuY29uc3QgcmF0aW8gPSAxLjVcblxuc3Rvcmllc09mKFwiTG9nb3NTVkdcIiwgbW9kdWxlKVxuXHQuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG5cdFx0PGRpdj5cblx0XHRcdDxzdHlsZVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdF9faHRtbDogXCJzdmcgeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7fVwiLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdDxEZWZTVkcgLz5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxOYXR1cmVMb2dvU1ZHIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxTcHJpbmdlck5hdHVyZUxvZ29TVkcgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEZhY2Vib29rTG9nb1NWRyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0d2lkdGg9XCIxOTIuNzc4MDJcIlxuXHRcdFx0XHRcdGhlaWdodD1cIjMyLjExODUzNFwiXG5cdFx0XHRcdFx0dmlld0JveD1cIjAgMCAxOTIuNzc4MDIgMzIuMTE4NTM0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDx1c2Vcblx0XHRcdFx0XHRcdGhyZWY9XCIjbmF0dXJlLWJyaWVmaW5nLWxvZ29cIlxuXHRcdFx0XHRcdFx0eGxpbmtIcmVmPVwiI25hdHVyZS1icmllZmluZy1sb2dvXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFBkZkxvZ29TVkcgLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEVtYWlsTG9nb1NWRyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0d2lkdGg9XCIzMHB4XCJcblx0XHRcdFx0XHRoZWlnaHQ9XCIzMHB4XCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDMwIDMwXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDx1c2Vcblx0XHRcdFx0XHRcdGhyZWY9XCIjdGV4dC1zZWN0aW9uLXR3aXR0ZXJcIlxuXHRcdFx0XHRcdFx0eGxpbmtIcmVmPVwiI3RleHQtc2VjdGlvbi10d2l0dGVyXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L3N2Zz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEZhY2Vib29rTG9nb1NWRyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3ZnXG5cdFx0XHRcdFx0d2lkdGg9XCIzMHB4XCJcblx0XHRcdFx0XHRoZWlnaHQ9XCIzMHB4XCJcblx0XHRcdFx0XHR2aWV3Qm94PVwiMCAwIDMwIDMwXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDx1c2Vcblx0XHRcdFx0XHRcdGhyZWY9XCIjdGV4dC1zZWN0aW9uLWZhY2Vib29rXCJcblx0XHRcdFx0XHRcdHhsaW5rSHJlZj1cIiN0ZXh0LXNlY3Rpb24tZmFjZWJvb2tcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvc3ZnPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8RW1haWxMb2dvU1ZHIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KSlcblx0LmFkZChcIk5hdHVyZUxvZ29TVkdcIiwgKCkgPT4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8c3R5bGVcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcblx0XHRcdFx0XHRfX2h0bWw6IFwic3ZnIHsgYm9yZGVyOiAxcHggc29saWQgcmVkO31cIixcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHR7c2l6ZXMubWFwKHNpemUgPT4gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxOYXR1cmVMb2dvU1ZHIGhlaWdodD17c2l6ZSAqIHJhdGlvfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkpfVxuXHRcdDwvZGl2PlxuXHQpKVxuXHQuYWRkKFwiU3ByaW5nZXJOYXR1cmVMb2dvU1ZHXCIsICgpID0+IChcblx0XHQ8ZGl2PlxuXHRcdFx0PHN0eWxlXG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0X19odG1sOiBcInN2ZyB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDt9XCIsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PFNwcmluZ2VyTmF0dXJlTG9nb1NWRyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCkpXG5cdC5hZGQoXCJQZGZMb2dvU1ZHXCIsICgpID0+IChcblx0XHQ8ZGl2PlxuXHRcdFx0PHN0eWxlXG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0X19odG1sOiBcInN2ZyB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDt9XCIsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0e3NpemVzLm1hcChzaXplID0+IChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8UGRmTG9nb1NWRyBoZWlnaHQ9e3NpemUgKiByYXRpb30gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KSlcblx0LmFkZChcIkZhY2Vib29rTG9nb1NWR1wiLCAoKSA9PiAoXG5cdFx0PGRpdj5cblx0XHRcdDxzdHlsZVxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdF9faHRtbDogXCJzdmcgeyBib3JkZXI6IDFweCBzb2xpZCByZWQ7fVwiLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHRcdHtzaXplcy5tYXAoc2l6ZSA9PiAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PEZhY2Vib29rTG9nb1NWR1xuXHRcdFx0XHRcdFx0aGVpZ2h0PXtzaXplICogcmF0aW99XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L2Rpdj5cblx0KSlcblx0LmFkZChcIlR3aXR0ZXJMb2dvU1ZHXCIsICgpID0+IChcblx0XHQ8ZGl2PlxuXHRcdFx0PHN0eWxlXG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0X19odG1sOiBcInN2ZyB7IGJvcmRlcjogMXB4IHNvbGlkIHJlZDt9XCIsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0e3NpemVzLm1hcChzaXplID0+IChcblx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHQ8VHdpdHRlckxvZ29TVkcgaGVpZ2h0PXtzaXplICogcmF0aW99IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdCkpXG5cdC5hZGQoXCJFbWFpbExvZ29TVkdcIiwgKCkgPT4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8c3R5bGVcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcblx0XHRcdFx0XHRfX2h0bWw6IFwic3ZnIHsgYm9yZGVyOiAxcHggc29saWQgcmVkO31cIixcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHR7c2l6ZXMubWFwKHNpemUgPT4gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxFbWFpbExvZ29TVkcgaGVpZ2h0PXtzaXplICogcmF0aW99IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9kaXY+XG5cdCkpXG4iXX0=