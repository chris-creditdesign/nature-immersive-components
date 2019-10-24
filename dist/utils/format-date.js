"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var formatDate = function formatDate(unixTimeStamp) {
  var date = new Date(parseInt(unixTimeStamp, 10) * 1000);
  var year = date.getFullYear();
  var month = date.toLocaleDateString("en", {
    month: "long"
  });
  var day = date.getDate();
  return "".concat(day, " ").concat(month, " ").concat(year);
};

var _default = formatDate;
exports.default = _default;
//# sourceMappingURL=format-date.js.map