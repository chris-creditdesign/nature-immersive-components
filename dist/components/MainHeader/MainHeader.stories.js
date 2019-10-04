"use strict";

var _core = require("@emotion/core");

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _index = _interopRequireDefault(require("./index"));

var _articleData = _interopRequireDefault(require("../../data/content/article-data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var altPdfAvailable = _articleData.default.altPdfAvailable,
    altPdfBlurb = _articleData.default.altPdfBlurb,
    articleURL = _articleData.default.articleURL,
    doi = _articleData.default.doi,
    headline = _articleData.default.headline,
    pdfAvailable = _articleData.default.pdfAvailable,
    stand = _articleData.default.stand;
(0, _react2.storiesOf)("MainHeader", module).add("default", function () {
  return (0, _core.jsx)(_index.default, {
    altPdfAvailable: altPdfAvailable,
    altPdfBlurb: altPdfBlurb,
    articleURL: articleURL,
    doi: doi,
    headline: headline,
    pdfAvailable: pdfAvailable,
    stand: stand
  });
}).add("pdf available", function () {
  return (0, _core.jsx)(_index.default, {
    altPdfAvailable: altPdfAvailable,
    altPdfBlurb: altPdfBlurb,
    articleURL: articleURL,
    doi: doi,
    headline: headline,
    pdfAvailable: true,
    stand: stand
  });
}).add("alt pdf available", function () {
  return (0, _core.jsx)(_index.default, {
    altPdfAvailable: true,
    altPdfBlurb: "PDF en Espa\xF1ol",
    articleURL: articleURL,
    doi: doi,
    headline: headline,
    pdfAvailable: true,
    stand: stand
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01haW5IZWFkZXIvTWFpbkhlYWRlci5zdG9yaWVzLmpzeCJdLCJuYW1lcyI6WyJhbHRQZGZBdmFpbGFibGUiLCJhcnRpY2xlRGF0YSIsImFsdFBkZkJsdXJiIiwiYXJ0aWNsZVVSTCIsImRvaSIsImhlYWRsaW5lIiwicGRmQXZhaWxhYmxlIiwic3RhbmQiLCJtb2R1bGUiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztJQUdDQSxlLEdBT0dDLG9CLENBUEhELGU7SUFDQUUsVyxHQU1HRCxvQixDQU5IQyxXO0lBQ0FDLFUsR0FLR0Ysb0IsQ0FMSEUsVTtJQUNBQyxHLEdBSUdILG9CLENBSkhHLEc7SUFDQUMsUSxHQUdHSixvQixDQUhISSxRO0lBQ0FDLFksR0FFR0wsb0IsQ0FGSEssWTtJQUNBQyxLLEdBQ0dOLG9CLENBREhNLEs7QUFHRCx1QkFBVSxZQUFWLEVBQXdCQyxNQUF4QixFQUNFQyxHQURGLENBQ00sU0FETixFQUNpQjtBQUFBLFNBQ2YsZUFBQyxjQUFEO0FBQ0MsSUFBQSxlQUFlLEVBQUVULGVBRGxCO0FBRUMsSUFBQSxXQUFXLEVBQUVFLFdBRmQ7QUFHQyxJQUFBLFVBQVUsRUFBRUMsVUFIYjtBQUlDLElBQUEsR0FBRyxFQUFFQyxHQUpOO0FBS0MsSUFBQSxRQUFRLEVBQUVDLFFBTFg7QUFNQyxJQUFBLFlBQVksRUFBRUMsWUFOZjtBQU9DLElBQUEsS0FBSyxFQUFFQztBQVBSLElBRGU7QUFBQSxDQURqQixFQVlFRSxHQVpGLENBWU0sZUFaTixFQVl1QjtBQUFBLFNBQ3JCLGVBQUMsY0FBRDtBQUNDLElBQUEsZUFBZSxFQUFFVCxlQURsQjtBQUVDLElBQUEsV0FBVyxFQUFFRSxXQUZkO0FBR0MsSUFBQSxVQUFVLEVBQUVDLFVBSGI7QUFJQyxJQUFBLEdBQUcsRUFBRUMsR0FKTjtBQUtDLElBQUEsUUFBUSxFQUFFQyxRQUxYO0FBTUMsSUFBQSxZQUFZLE1BTmI7QUFPQyxJQUFBLEtBQUssRUFBRUU7QUFQUixJQURxQjtBQUFBLENBWnZCLEVBdUJFRSxHQXZCRixDQXVCTSxtQkF2Qk4sRUF1QjJCO0FBQUEsU0FDekIsZUFBQyxjQUFEO0FBQ0MsSUFBQSxlQUFlLE1BRGhCO0FBRUMsSUFBQSxXQUFXLEVBQUMsbUJBRmI7QUFHQyxJQUFBLFVBQVUsRUFBRU4sVUFIYjtBQUlDLElBQUEsR0FBRyxFQUFFQyxHQUpOO0FBS0MsSUFBQSxRQUFRLEVBQUVDLFFBTFg7QUFNQyxJQUFBLFlBQVksTUFOYjtBQU9DLElBQUEsS0FBSyxFQUFFRTtBQVBSLElBRHlCO0FBQUEsQ0F2QjNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBzdG9yaWVzT2YgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdFwiXG5cbmltcG9ydCBNYWluSGVhZGVyIGZyb20gXCIuL2luZGV4XCJcbmltcG9ydCBhcnRpY2xlRGF0YSBmcm9tIFwiLi4vLi4vZGF0YS9jb250ZW50L2FydGljbGUtZGF0YS5qc29uXCJcblxuY29uc3Qge1xuXHRhbHRQZGZBdmFpbGFibGUsXG5cdGFsdFBkZkJsdXJiLFxuXHRhcnRpY2xlVVJMLFxuXHRkb2ksXG5cdGhlYWRsaW5lLFxuXHRwZGZBdmFpbGFibGUsXG5cdHN0YW5kLFxufSA9IGFydGljbGVEYXRhXG5cbnN0b3JpZXNPZihcIk1haW5IZWFkZXJcIiwgbW9kdWxlKVxuXHQuYWRkKFwiZGVmYXVsdFwiLCAoKSA9PiAoXG5cdFx0PE1haW5IZWFkZXJcblx0XHRcdGFsdFBkZkF2YWlsYWJsZT17YWx0UGRmQXZhaWxhYmxlfVxuXHRcdFx0YWx0UGRmQmx1cmI9e2FsdFBkZkJsdXJifVxuXHRcdFx0YXJ0aWNsZVVSTD17YXJ0aWNsZVVSTH1cblx0XHRcdGRvaT17ZG9pfVxuXHRcdFx0aGVhZGxpbmU9e2hlYWRsaW5lfVxuXHRcdFx0cGRmQXZhaWxhYmxlPXtwZGZBdmFpbGFibGV9XG5cdFx0XHRzdGFuZD17c3RhbmR9XG5cdFx0Lz5cblx0KSlcblx0LmFkZChcInBkZiBhdmFpbGFibGVcIiwgKCkgPT4gKFxuXHRcdDxNYWluSGVhZGVyXG5cdFx0XHRhbHRQZGZBdmFpbGFibGU9e2FsdFBkZkF2YWlsYWJsZX1cblx0XHRcdGFsdFBkZkJsdXJiPXthbHRQZGZCbHVyYn1cblx0XHRcdGFydGljbGVVUkw9e2FydGljbGVVUkx9XG5cdFx0XHRkb2k9e2RvaX1cblx0XHRcdGhlYWRsaW5lPXtoZWFkbGluZX1cblx0XHRcdHBkZkF2YWlsYWJsZVxuXHRcdFx0c3RhbmQ9e3N0YW5kfVxuXHRcdC8+XG5cdCkpXG5cdC5hZGQoXCJhbHQgcGRmIGF2YWlsYWJsZVwiLCAoKSA9PiAoXG5cdFx0PE1haW5IZWFkZXJcblx0XHRcdGFsdFBkZkF2YWlsYWJsZVxuXHRcdFx0YWx0UGRmQmx1cmI9XCJQREYgZW4gRXNwYcOxb2xcIlxuXHRcdFx0YXJ0aWNsZVVSTD17YXJ0aWNsZVVSTH1cblx0XHRcdGRvaT17ZG9pfVxuXHRcdFx0aGVhZGxpbmU9e2hlYWRsaW5lfVxuXHRcdFx0cGRmQXZhaWxhYmxlXG5cdFx0XHRzdGFuZD17c3RhbmR9XG5cdFx0Lz5cblx0KSlcbiJdfQ==