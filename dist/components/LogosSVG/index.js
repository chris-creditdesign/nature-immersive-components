"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TwitterLogoSVG = exports.SpringerNatureLogoSVG = exports.PdfLogoSVG = exports.NatureLogoSVG = exports.NatureBriefingLogoSVG = exports.FacebookLogoSVG = exports.EmailLogoSVG = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NatureLogoSVG = function NatureLogoSVG(_ref) {
  var className = _ref.className,
      height = _ref.height,
      title = _ref.title,
      titleId = _ref.titleId;
  return _react.default.createElement("svg", {
    height: "".concat(height, "em"),
    viewBox: "0 0 200 49",
    role: "img",
    "aria-labelledby": titleId,
    focusable: "false",
    className: className
  }, _react.default.createElement("title", {
    id: titleId
  }, title), _react.default.createElement("g", null, _react.default.createElement("path", {
    d: "M12.8 8.4l.1.1v8.4h.2c1.7-4.8 6-8.7 12.2-8.7 8.1 0 10.5 4 10.5 11.7v15.2c0 4.6.3 9.4 1.4 13h-13c1.1-3.4 1.2-7.6 1.2-12.6V21.1c0-3.5-1.4-5.2-5.3-5.2-3 0-5.2.8-6.9 2.3v17.4c0 5 .1 9.2 1.2 12.6H1.5c1.2-3.6 1.4-8.4 1.4-13V21.1c0-3.8-1.4-7.2-3-9l12.9-3.7"
  }), _react.default.createElement("path", {
    d: "M59.8 40.7V26.5c-.8 1.2-1.8 1.9-4.7 3.2-3.7 1.8-5 3.8-5 7.9 0 3.4 1.9 5.6 4.9 5.6 3 .1 4-1 4.8-2.5zM56.4 8.3c10.1 0 13.8 4 13.8 12.2v17.2c0 3.1 1.2 4 3.7 4 .4 0 1.7-.2 2.1-.6-.2 1.2-.4 1.8-.6 2.5-1.2 3.4-3.3 5.4-7.5 5.4-5 0-7.5-3.5-7.6-7.1h-.1c-1.7 5-4.9 7.1-10 7.1-6.3 0-10.3-3.8-10.3-9.7 0-6.2 5.6-8.9 11.5-11.2 5.6-2.2 8.6-3.8 8.6-7.8v-.8c0-4.4-1.4-6.6-5.5-6.6-2.6 0-3.5 1.2-4.1 3.7-.8 3.8-2.3 5.1-4.8 5.1-2.2 0-4.3-1.5-4.3-4.3-.2-5.4 7.3-9.1 15.1-9.1z"
  }), _react.default.createElement("path", {
    d: "M98.7 43.9C97.4 47 94.1 49 89.4 49c-8 0-11.1-4-11.1-11.4v-23h-3.8v-.3L88.4 0l.2.1v9.1h10l-1 5.5h-8.9V36c0 4.1 1.7 5.7 5.4 5.7 2.8 0 4.3-.4 5.6-1.1-.3 1.4-.5 2.2-1 3.3"
  }), _react.default.createElement("path", {
    d: "M113.1 8.9v27c0 4 1.6 6.3 5.5 6.3 3.3 0 5.8-1.1 7.2-3V20.9c0-4-.4-7.4-1.7-10.8l12-1.2v27.6c0 6.1.6 8.8 1.6 11.7H126v-7.8h-.1c-1.7 5-4.9 8.6-11.6 8.6-8.5 0-11.6-5.1-11.6-12.8V20.9c0-4-.4-7.4-1.7-10.8l12.1-1.2"
  }), _react.default.createElement("path", {
    d: "M152.5 18.3c1.7-7.2 5-10 9.4-10 4 0 6.1 2.1 6.1 5.4 0 3-1.7 5.4-4.8 5.4-1.8 0-2.9-.8-3.7-1.6-.9-.8-1.5-1.7-2.4-1.7-2.1 0-4.4 3.5-4.4 9.4V35c0 4.8.4 9.6 1.3 13.2h-13c1.2-3.6 1.4-8.4 1.4-13V21.1c0-3.8-1.4-7.2-3-9l12.8-3.7.1.1v9.8h.2"
  }), _react.default.createElement("path", {
    d: "M177.2 24l13.1-1.2c-.1-6.2-1.1-9.9-5.4-9.9-4.4.1-7 3.6-7.7 11.1zm7.8 25c-10 0-18.2-6.6-18.2-19.3 0-12.9 7.9-21.5 18.5-21.5 10.1 0 14.8 6.4 14.8 18.5h-22.9v1.2c0 9.7 5 13.6 11.9 13.6 6.2 0 9-2.5 10.8-4.3l.2.6C198.3 43.6 193.7 49 185 49z"
  })));
};

exports.NatureLogoSVG = NatureLogoSVG;
NatureLogoSVG.defaultProps = {
  height: 1,
  title: "Nature",
  titleId: "nature-home-page-title",
  className: ""
};
NatureLogoSVG.propTypes = {
  height: _propTypes.default.number,
  title: _propTypes.default.string,
  titleId: _propTypes.default.string,
  className: _propTypes.default.string
};

var SpringerNatureLogoSVG = function SpringerNatureLogoSVG(_ref2) {
  var className = _ref2.className,
      height = _ref2.height,
      titleId = _ref2.titleId,
      title = _ref2.title;
  return _react.default.createElement("svg", {
    height: "".concat(height, "em"),
    viewBox: "0 0 140 14",
    role: "img",
    "aria-labelledby": titleId,
    focusable: "false",
    className: className
  }, _react.default.createElement("title", {
    id: titleId
  }, title), ">", _react.default.createElement("path", {
    d: "M74.9,5.7c0-2.8-2.4-3.8-4.6-3.8c-1.1,0-2.8,0-3.8,0v11.6h2.9V10h0.9c0.2,0,0.3,0,0.5,0l0,0l0,0c0.5,0.8,1.1,2,1.3,3.5 c0.6,0,1.1,0,1.5,0h0.8c0.3,0,0.5,0,0.8,0c-0.3-1.8-1.2-3.5-1.8-4.4l0,0l0,0C74.3,8.2,74.9,7.1,74.9,5.7z M71.8,6.1 c0,1.2-0.5,1.7-1.6,1.7c-0.4,0-0.6,0-0.8,0l0,0V4.1l0,0c0.3,0,0.6,0,0.9,0C71.6,4.1,71.8,4.9,71.8,6.1z M64.3,13.5v-2.3h-4.1V8.7 h3.7V6.5h-3.7V4.2h4.1V1.9h-6.8v9.5c0,0,0,0.9,0.6,1.5c0.4,0.4,0.9,0.6,1.6,0.6C61.7,13.6,64,13.5,64.3,13.5z M51.4,13.9 c1.1,0,2.8-0.3,4.1-0.9V7.2h-3.8v2h1.2v2.4l0,0c-0.3,0.1-1,0.2-1.3,0.2c-1.5,0-2.1-1.1-2.1-4c0-2.5,0.9-3.8,2.7-3.8 c0.6,0,1.5,0.3,2.4,0.7l0.8-1.9c-1.1-0.7-2.4-1-3.6-1c-1.7,0-3,0.5-3.8,1.5c-0.8,1-1.2,2.5-1.2,4.5C46.6,12.2,47.9,13.9,51.4,13.9z  M41.7,13.5h3V1.9h-2.5v7.6l-3.4-7.6h-3.1v11.6h2.5V6.2L41.7,13.5L41.7,13.5z M30.2,13.5h2.9V2h-2.9V13.5z M26.6,9.1L26.6,9.1 L26.6,9.1c1-0.8,1.5-2,1.5-3.4c0-2.8-2.4-3.8-4.6-3.8c-1.1,0-2.8,0-3.8,0v11.6h2.9V10h0.9c0.2,0,0.3,0,0.5,0l0,0l0,0 c0.5,0.8,1.1,2,1.3,3.5c0.6,0,1.1,0,1.5,0h0.8c0.3,0,0.5,0,0.8,0C28.1,11.7,27.2,10,26.6,9.1z M25,6.1c0,1.2-0.5,1.7-1.6,1.7 c-0.4,0-0.6,0-0.8,0l0,0V4.1l0,0c0.3,0,0.6,0,0.9,0C24.8,4.1,25,4.9,25,6.1z M18.2,5.6c0-2.4-1.5-3.7-4.3-3.7c-1.1,0-2.8,0-3.8,0 v11.6H13V10h0.9C15.2,10,18.2,9.6,18.2,5.6z M15.5,6.1c0,1.2-0.5,1.7-1.6,1.7c-0.4,0-0.6,0-0.8,0l0,0V4.1l0,0c0.3,0,0.6,0,0.9,0 C15.2,4.1,15.5,4.9,15.5,6.1z M3.3,4.1c0-0.6,0.4-1.3,1.4-1.3c0.7,0,1.5,0.2,2.5,0.7l1-2.1C7,0.8,5.8,0.4,4.5,0.4 c-2.6,0-4.2,1.4-4.2,3.8s1.8,3.3,3.3,4c1.1,0.5,2,1,2,1.8c0,0.7-0.7,1.2-1.6,1.2c-0.8,0-1.7-0.3-2.9-0.9l-1,2.2 c1.4,0.8,2.7,1.1,4.1,1.1c2.7,0,4.3-1.5,4.3-4c0-2.4-1.8-3.2-3.3-3.9C4.2,5.3,3.3,4.9,3.3,4.1L3.3,4.1z M134.8,11.2V8.7h3.7V6.5 h-3.7V4.2h4.1V1.9h-6.8v9.5c0,0,0,0.9,0.6,1.5c0.4,0.4,0.9,0.6,1.6,0.6c2.1,0,4.4-0.1,4.7-0.1v-2.3H134.8L134.8,11.2z M128.6,9.1 L128.6,9.1L128.6,9.1c1-0.8,1.5-2,1.5-3.4c0-2.8-2.4-3.8-4.6-3.8c-1.1,0-2.8,0-3.8,0v11.6h2.9V10h0.9c0.2,0,0.3,0,0.5,0l0,0l0,0 c0.5,0.8,1.1,2,1.3,3.5c0.6,0,1.1,0,1.5,0h0.8c0.3,0,0.5,0,0.8,0C130.1,11.7,129.2,10,128.6,9.1L128.6,9.1z M127,6.1 c0,1.2-0.5,1.7-1.6,1.7c-0.4,0-0.6,0-0.8,0l0,0V4.1l0,0c0.3,0,0.6,0,0.9,0C126.8,4.1,127,4.9,127,6.1z M119.5,9.4V1.9h-3v7.7 c0,1.2-0.1,1.9-1.4,1.9c-1.3,0-1.5-0.6-1.5-1.9V1.9h-3v7.8c0,2.8,1.3,4,4.3,4C118.1,13.8,119.5,12.4,119.5,9.4L119.5,9.4z  M106.8,4.3h2.2V1.9h-7.8v2.4h2.6v9.2h3C106.8,13.5,106.8,4.3,106.8,4.3z M98,13.5h3.1L98.3,1.9h-4.5L91,13.5h2.9l0.4-1.8h3.2 L98,13.5L98,13.5z M97.2,9.5h-2.5l1.2-5H96l0,0L97.2,9.5L97.2,9.5z M85.9,13.5h3.4v-13h-2.8l0.1,9.1l-4.2-9.1h-3.4v13h2.7l0-9 l0.1,0.2L85.9,13.5L85.9,13.5z"
  }));
};

exports.SpringerNatureLogoSVG = SpringerNatureLogoSVG;
SpringerNatureLogoSVG.defaultProps = {
  height: 1,
  title: "Springer Nature logo",
  titleId: "springer-nature-title",
  className: ""
};
SpringerNatureLogoSVG.propTypes = {
  height: _propTypes.default.number,
  title: _propTypes.default.string,
  titleId: _propTypes.default.string,
  className: _propTypes.default.string
};

var NatureBriefingLogoSVG = function NatureBriefingLogoSVG(_ref3) {
  var className = _ref3.className,
      height = _ref3.height,
      titleId = _ref3.titleId,
      title = _ref3.title;
  return _react.default.createElement("svg", {
    height: "".concat(height, "em"),
    viewBox: "0 0 200 34",
    role: "img",
    "aria-labelledby": titleId,
    focusable: "false",
    className: className
  }, _react.default.createElement("title", {
    id: titleId
  }, title), ">", _react.default.createElement("path", {
    d: "M17.2,10.6c0.6,0.9,0.7,2.8,0.7,4v5.4c0,4.7,0,4.6,1.7,5c0.4,0.1,0.9,0.1,0.9,0.4c0,0.3-0.3,0.3-0.7,0.3s-2.6-0.1-3.6-0.1 s-3.3,0.1-3.8,0.1c-0.6,0-0.9,0-0.9-0.2c0-0.3,0.7-0.3,1.3-0.5c0.7-0.3,1.2-0.4,1.3-1.5c0.1-1,0.1-2.4,0.1-5.3c0-3.5,0-5.5-0.7-6.4 c-0.8-0.9-1.7-1.2-3.1-1.2s-2.7,1-3.2,1.8c-0.7,1.2-0.7,3.6-0.7,5.9c0,3.1,0,4.5,0.2,5.5c0.1,0.5,0.5,0.8,1.1,1.1 C8.2,25.2,9,25.3,9,25.6s-0.5,0.3-0.8,0.3c-0.4,0-3.1-0.1-3.7-0.1c-0.6,0-3.5,0.1-3.8,0.1c-0.5,0-0.6,0-0.6-0.3 c0-0.3,0.5-0.4,1.2-0.5c0.8-0.2,1.2-0.3,1.3-1.1c0.2-1.2,0.2-3.5,0.2-6.8c0-2.3,0-3.8-0.3-4.3c-0.2-0.2-0.5-0.4-1-0.4l-0.6-0.6 c0,0,0.1-0.3,0.3-0.3C2.8,11,4.4,9.9,5.8,8.6c0.1-0.1,0.4-0.3,0.5-0.3c0.3,0,0.4,0.4,0.4,0.8v1.8c0,0.2,0.1,0.5,0.3,0.5 c0.6,0,2.2-3,5.8-3C15,8.5,16.3,9.4,17.2,10.6 M29,17.3c-0.5,0-4.7,2-4.7,4.8c0,1.6,1.1,2.2,2.1,2.2c0.9,0,1.7-0.5,2.3-1.5 c0.7-1,0.8-2.9,0.8-4.8C29.7,17.5,29.5,17.3,29,17.3 M29.4,23.4c-0.8,1.2-2.6,2.8-4.9,2.8s-3.3-1.8-3.3-3.2c0-2.9,2.9-4.3,5.1-5.3 c3.5-1.8,3.6-1.2,3.6-5.1c0-1,0.1-1.9-0.2-2.4c-0.5-0.9-1.1-1.1-2.1-1.1c-2.6,0-3.3,2.3-3.9,4.1c-0.2,0.7-1.2,1.1-1.9,1.1 c-0.4,0-0.9-0.3-0.9-0.8c0-1.7,2.8-5.3,7.6-5.3c2.2,0,4.9,0.4,4.9,3.4c0,2.3-0.3,8.7-0.3,10c0,1.1,0.2,2.3,1.3,2.3 c1.1,0,1.8-1,2.1-1c0.2,0,0.2,0.2,0.2,0.3c0,0.6-1.5,2.8-3.9,2.8c-1.6,0-2.7-1-3.1-2.3C29.6,23.4,29.5,23.3,29.4,23.4 M42,6 c0,0.7-0.1,1.9-0.1,2.7c0,0.4,0.2,0.5,0.4,0.5l8.4-0.3c0.7,0,0.8,0.2,0.8,0.9c0,1.6-0.1,3.2-0.1,10.7c0,1.9,0.8,3.2,3.5,3.2 c1.5,0,3-0.6,3.5-1.8c0.4-0.7,0.4-3.2,0.4-5.1c0-4.1,0-6-0.4-6.4c-0.4-0.3-0.9-0.4-1.7-0.5c-0.7-0.1-1-0.1-1-0.4 c0-0.2,0.1-0.3,0.6-0.4L61.9,9c0.5-0.1,0.6,0.1,0.6,0.6c0,1.3-0.3,6-0.3,9.6c0,2.2,0,3.8,0.3,4.3c0.2,0.3,0.5,0.4,1.3,0.4 c0.3,0,0.8-0.1,1-0.1c0.2,0,0.3,0.1,0.3,0.3s-0.2,0.3-0.6,0.4c-0.7,0.1-3.7,0.8-5,1.3c-0.2,0.1-0.5,0.2-0.6,0.2 c-0.3,0-0.3-0.2-0.3-0.6c0-0.5,0.1-1,0.1-1.8c0-0.3-0.1-0.6-0.3-0.6c-0.4,0-2.6,2.9-5.8,2.9c-2,0-4.8-1.1-4.8-5 c0-2.1,0.1-8.5,0.1-9.2c0-1.6-0.1-1.6-3.2-1.6c-1,0-1.8,0-2.5,0.1c-0.5,0-0.6,0.1-0.6,0.9c-0.1,1.5-0.1,3.6-0.1,8.1 c0,1.9,0,3.1,0.4,3.8c0.4,0.6,0.9,0.9,1.9,0.9c1.2,0,2.7-0.6,2.8-0.6c0.1,0,0.2,0.1,0.2,0.2c0,0.3-2.6,2.7-5.3,2.7 c-3,0-3.6-2.2-3.6-5.2c0-1.5,0.2-8.5,0.2-9c0-0.5,0-1-0.8-1h-1.1c-0.2,0-0.3-0.1-0.3-0.2c0-0.3,0.3-0.4,0.8-0.7 C38,9.3,40,7.8,40.9,6.4c0.3-0.6,0.4-0.9,0.7-0.9S42,5.7,42,6 M66.2,12.1c-0.2,0-0.4-0.1-0.4-0.2c0-0.2,0.2-0.3,0.7-0.5 c0.5-0.2,2.9-1.5,3.9-2.5c0.5-0.5,0.7-0.5,0.8-0.5c0.2,0,0.4,0.1,0.4,0.6v2c0,0.3,0.1,0.4,0.2,0.4c0.5,0,1.9-3,4.5-3 c1.5,0,2.5,1,2.5,2.3s-0.9,2.1-2.1,2.1c-1.5,0-1.8-1.5-3.1-1.5c-0.6,0-0.9,0.5-1.1,0.7c-0.7,0.7-0.7,2.9-0.7,6c0,3-0.1,5.3,0.3,5.8 c0.4,0.6,2.1,0.9,2.7,1c0.4,0.1,0.7,0.1,0.7,0.4s-0.5,0.3-0.8,0.3c-0.3,0-3.2-0.1-4.5-0.1c-1.2,0-3.9,0.1-4.3,0.1s-0.7,0-0.7-0.3 s0.4-0.3,0.8-0.4c0.3-0.1,1.6-0.3,1.8-1c0.2-0.6,0.3-2.1,0.3-6.7C68.2,12.6,68.1,12.2,66.2,12.1 M86.5,9.1c-3.1,0-4.6,2.7-4.6,3.9 c0,0.5,0.5,0.6,2.5,0.6c2.2,0,5.2-0.2,5.2-2.1C89.5,10.8,88.7,9.1,86.5,9.1 M91.5,14.8c-2.3,0-5.3-0.2-8.7-0.2c-0.8,0-1.2,0-1.2,1.7 c0,4,1.7,7.4,6.2,7.4c3.4,0,4.9-2.3,5.1-2.3c0.2,0,0.3,0.1,0.3,0.2c0,0.6-3.2,4.6-7.5,4.6c-4.6,0-8.1-3.3-8.1-8.6 c0-5.5,4.3-9.3,9.1-9.3c3.6,0,6.4,2.8,6.4,5.5C93.1,14.8,92.5,14.8,91.5,14.8"
  }), _react.default.createElement("path", {
    d: "M111.2,17.2c0,2.8-0.6,5.1-1.9,6.7c-1.3,1.7-2.9,2.5-5.1,2.5c-2.5,0-4.4-0.9-5.7-2.8l-0.1,2.5h-1.9V0.3h2v10.3 c1.3-2,3.2-3,5.7-3c2.1,0,3.8,0.8,5.1,2.5c1.3,1.6,1.9,3.9,1.9,6.8V17.2z M109.2,16.8c0-2.4-0.5-4.2-1.4-5.5c-0.9-1.3-2.2-2-3.9-2 c-1.3,0-2.4,0.3-3.3,1c-0.9,0.6-1.6,1.6-2,2.8v8.2c1,2.3,2.8,3.4,5.3,3.4c1.7,0,2.9-0.7,3.9-2C108.8,21.4,109.2,19.4,109.2,16.8z"
  }), _react.default.createElement("path", {
    d: "M123.5,9.6c-0.4-0.1-0.9-0.1-1.4-0.1c-1.3,0-2.3,0.4-3.2,1.1c-0.9,0.7-1.5,1.7-1.8,3v12.5h-2V7.9h2l0,2.9 c1.1-2.1,2.8-3.2,5.1-3.2c0.6,0,1,0.1,1.3,0.2L123.5,9.6z"
  }), _react.default.createElement("path", {
    d: "M128.4,26.1h-2V7.9h2V26.1z"
  }), _react.default.createElement("path", {
    d: "M140.3,26.4c-1.5,0-2.9-0.4-4.2-1.1c-1.2-0.8-2.2-1.8-2.9-3.2c-0.7-1.4-1-2.9-1-4.6v-0.7c0-1.7,0.3-3.3,1-4.7 c0.7-1.4,1.6-2.5,2.8-3.3c1.2-0.8,2.5-1.2,3.9-1.2c2.2,0,4,0.8,5.2,2.3c1.3,1.5,1.9,3.6,1.9,6.2v1.1h-13v0.4c0,2.1,0.6,3.8,1.8,5.2 c1.2,1.4,2.7,2,4.5,2c1.1,0,2-0.2,2.8-0.6c0.8-0.4,1.6-1,2.2-1.9l1.3,1C145.3,25.4,143.1,26.4,140.3,26.4L140.3,26.4z M139.9,9.3 c-1.5,0-2.8,0.6-3.8,1.7c-1,1.1-1.7,2.6-1.9,4.5h10.9v-0.2c-0.1-1.7-0.6-3.2-1.5-4.3C142.7,9.8,141.5,9.3,139.9,9.3z"
  }), _react.default.createElement("path", {
    d: "M151.7,26.1V9.6h-3V7.9h3V6.1c0-1.9,0.5-3.4,1.6-4.5c1.1-1.1,2.1-1.6,4-1.6c1.5,0,1.9,0,3.1,0.6L160,2.4 c-1.4-0.5-1.2-0.6-2.6-0.5c-2.4,0.1-3.7,1.6-3.7,4.3v1.8h4.2v1.6h-4.2v16.5H151.7z M163.5,26.1h-2V7.9h2V26.1z"
  }), _react.default.createElement("path", {
    d: "M169.8,7.9l0.1,3.1c0.7-1.1,1.5-2,2.6-2.6c1-0.6,2.1-0.9,3.4-0.9c1.9,0,3.4,0.5,4.3,1.6c1,1.1,1.4,2.7,1.4,4.9v11.9h-2V14.2 c0-1.6-0.4-2.8-1-3.6c-0.7-0.8-1.8-1.2-3.2-1.2c-1.2,0-2.3,0.4-3.3,1.2c-1,0.8-1.7,1.8-2.1,3.1v12.4h-2V7.9H169.8z"
  }), _react.default.createElement("path", {
    d: "M185.4,16.8c0-2.8,0.6-5.1,1.9-6.7c1.3-1.7,3-2.5,5.1-2.5c2.5,0,4.4,1,5.6,3l0.1-2.6h1.9v17.8c0,2.3-0.7,4.2-2,5.6 c-1.3,1.4-3.1,2-5.3,2c-1.3,0-2.5-0.3-3.6-0.9c-1.1-0.6-2-1.3-2.7-2.2l1.1-1.2c1.4,1.7,3.1,2.6,5.1,2.6c1.7,0,3-0.5,3.9-1.5 c0.9-1,1.4-2.4,1.5-4.1v-2.3c-1.3,1.8-3.2,2.7-5.6,2.7c-2.1,0-3.8-0.8-5.1-2.5c-1.3-1.7-1.9-3.9-1.9-6.8L185.4,16.8z M187.4,17.2 c0,2.3,0.5,4.1,1.4,5.5c0.9,1.3,2.2,2,3.9,2c2.5,0,4.2-1.1,5.3-3.3v-8.4c-0.5-1.2-1.1-2-2-2.7c-0.9-0.6-1.9-0.9-3.2-0.9 c-1.7,0-3,0.7-3.9,2C187.9,12.7,187.4,14.6,187.4,17.2L187.4,17.2z"
  }), _react.default.createElement("rect", {
    x: "126.4",
    y: "1.3",
    width: "2",
    height: "2.6"
  }), _react.default.createElement("rect", {
    x: "161.5",
    y: "1.2",
    width: "2",
    height: "2.6"
  }));
};

exports.NatureBriefingLogoSVG = NatureBriefingLogoSVG;
NatureBriefingLogoSVG.defaultProps = {
  height: 1,
  title: "Nature Briefing logo",
  titleId: "nature-briefing-title",
  className: ""
};
NatureBriefingLogoSVG.propTypes = {
  height: _propTypes.default.number,
  title: _propTypes.default.string,
  titleId: _propTypes.default.string,
  className: _propTypes.default.string
};

var PdfLogoSVG = function PdfLogoSVG(_ref4) {
  var height = _ref4.height;
  return _react.default.createElement("svg", {
    height: "".concat(height, "em"),
    viewBox: "0 0 30 30",
    "aria-hidden": "true",
    focusable: "false"
  }, _react.default.createElement("path", {
    d: "M29.2,20.3c-0.2,0.1-0.7,0.2-1,0.2c-1.1,0-2.4-0.5-4.3-1.3c0.7-0.1,1.4-0.1,2-0.1c1.1,0,1.4,0,2.5,0.3 C29.4,19.7,29.4,20.2,29.2,20.3L29.2,20.3z M10.3,20.5c0.4-0.7,0.9-1.5,1.3-2.4c1.1-2,1.8-3.6,2.3-4.9c1,1.8,2.3,3.4,3.7,4.6 c0.2,0.2,0.4,0.3,0.6,0.5C15.2,18.9,12.6,19.6,10.3,20.5z M13.8,1.3c0.6,0,0.9,1.5,1,2.9c0,1.4-0.3,2.4-0.7,3.1 c-0.3-1.1-0.5-2.8-0.5-3.9C13.6,3.4,13.6,1.3,13.8,1.3z M2.1,28.3c0.3-0.9,1.7-2.8,3.7-4.4c0.1-0.1,0.4-0.4,0.7-0.7 C4.4,26.5,3,27.9,2.1,28.3L2.1,28.3z M29.8,18.4c-0.6-0.6-1.9-0.9-4-0.9c-1.4,0-3,0.1-4.8,0.3c-0.8-0.4-1.6-0.9-2.2-1.5 c-1.7-1.6-3.1-3.8-4-6.2c0.1-0.2,0.1-0.4,0.1-0.6c0,0,0.9-5.4,0.7-7.2c0-0.3-0.1-0.3-0.1-0.5l-0.1-0.2c-0.3-0.6-0.8-1.2-1.6-1.2 h-0.5l0,0c-0.9,0-1.6,0.5-1.8,1.1c-0.6,2.1,0,5.3,1.1,9.4l-0.3,0.7c-0.8,1.9-1.7,3.8-2.6,5.4l-0.1,0.2c-0.9,1.8-1.7,3.3-2.5,4.5 l-0.8,0.4c-0.1,0-1.4,0.7-1.7,0.9C2,24.6,0.3,26.3,0,27.7c-0.1,0.4,0,1,0.4,1.3l0.7,0.4c0.3,0.2,0.7,0.2,1,0.2c1.9,0,4-2.3,7-7.5 c3.4-1.1,7.3-2,10.7-2.6c2.6,1.5,5.8,2.5,7.8,2.5c0.4,0,0.7,0,0.9-0.1c0.4-0.1,0.7-0.3,0.9-0.6c0.4-0.6,0.5-1.4,0.4-2.2 C30.2,18.9,30,18.6,29.8,18.4L29.8,18.4z"
  }));
};

exports.PdfLogoSVG = PdfLogoSVG;
PdfLogoSVG.defaultProps = {
  height: 1
};
PdfLogoSVG.propTypes = {
  height: _propTypes.default.number
};

var FacebookLogoSVG = function FacebookLogoSVG(_ref5) {
  var height = _ref5.height,
      title = _ref5.title,
      titleId = _ref5.titleId;
  return _react.default.createElement("svg", {
    height: "".concat(height, "em"),
    viewBox: "0 0 30 30",
    "aria-hidden": "true",
    focusable: "false",
    role: "img",
    "aria-labelledby": titleId
  }, _react.default.createElement("title", {
    id: titleId
  }, title), _react.default.createElement("path", {
    d: "M30,15A15,15,0,1,1,15,0,15,15,0,0,1,30,15ZM15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"
  }), _react.default.createElement("path", {
    d: "M15.89625,22.8625 L12.57125,22.8625 L12.57125,15.02125 L10.90875,15.02125 L10.90875,12.31875 L12.57125,12.31875 L12.57125,10.69625 C12.57125,8.4925 13.50875,7.18 16.175,7.18 L18.39375,7.18 L18.39375,9.8825 L17.00625,9.8825 C15.96875,9.8825 15.9,10.26 15.9,10.965 L15.895,12.3175 L18.4075,12.3175 L18.115,15.02 L15.89625,15.02 L15.89625,22.8625 Z"
  }));
};

exports.FacebookLogoSVG = FacebookLogoSVG;
FacebookLogoSVG.defaultProps = {
  height: 1,
  title: "Share on Facebook",
  titleId: "facebook-title"
};
FacebookLogoSVG.propTypes = {
  height: _propTypes.default.number,
  title: _propTypes.default.string,
  titleId: _propTypes.default.string
};

var TwitterLogoSVG = function TwitterLogoSVG(_ref6) {
  var height = _ref6.height,
      title = _ref6.title,
      titleId = _ref6.titleId;
  return _react.default.createElement("svg", {
    height: "".concat(height, "em"),
    viewBox: "0 0 30 30",
    "aria-hidden": "true",
    focusable: "false",
    role: "img",
    "aria-labelledby": titleId
  }, _react.default.createElement("title", {
    id: titleId
  }, title), _react.default.createElement("path", {
    d: "M30,15A15,15,0,1,1,15,0,15,15,0,0,1,30,15ZM15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"
  }), _react.default.createElement("path", {
    d: "M20.8125,11.4875 C21.42,11.10375 21.8875,10.49625 22.105,9.7725 C21.5375,10.1275 20.90875,10.385 20.23875,10.5225 C19.70625,9.9225 18.9425,9.545 18.0975,9.545 C16.475,9.545 15.16,10.9325 15.16,12.6425 C15.16,12.885 15.185,13.1225 15.235,13.3475 C12.7975,13.2175 10.63125,11.985 9.1825,10.11 C8.93,10.56875 8.785,11.10125 8.785,11.66875 C8.785,12.74375 9.30375,13.69125 10.09125,14.2475 C9.61125,14.23125 9.1575,14.09 8.76125,13.86 L8.76125,13.8975 C8.76125,15.3975 9.77375,16.65125 11.11875,16.935 C10.87125,17.0075 10.6125,17.04375 10.34375,17.04375 C10.15625,17.04375 9.96875,17.025 9.79125,16.98875 C10.16625,18.22125 11.24875,19.11875 12.535,19.1425 C11.52875,19.97375 10.2625,20.4675 8.885,20.4675 C8.6475,20.4675 8.415,20.455 8.185,20.42625 C9.485,21.30375 11.02875,21.81625 12.6875,21.81625 C18.09,21.81625 21.04375,17.095 21.04375,13.00125 L21.03625,12.60125 C21.61125,12.16375 22.11125,11.6175 22.50125,10.99625 C21.97375,11.2425 21.4075,11.40875 20.81375,11.48375 L20.8125,11.4875 Z"
  }));
};

exports.TwitterLogoSVG = TwitterLogoSVG;
TwitterLogoSVG.defaultProps = {
  height: 1,
  title: "Share on Twitter",
  titleId: "twitter-title"
};
TwitterLogoSVG.propTypes = {
  height: _propTypes.default.number,
  title: _propTypes.default.string,
  titleId: _propTypes.default.string
};

var EmailLogoSVG = function EmailLogoSVG(_ref7) {
  var height = _ref7.height,
      title = _ref7.title,
      titleId = _ref7.titleId;
  return _react.default.createElement("svg", {
    height: "".concat(height, "em"),
    viewBox: "0 0 30 30",
    "aria-hidden": "true",
    focusable: "false",
    role: "img",
    "aria-labelledby": titleId
  }, _react.default.createElement("title", {
    id: titleId
  }, title), _react.default.createElement("path", {
    d: "M30,15A15,15,0,1,1,15,0,15,15,0,0,1,30,15ZM15,2A13,13,0,1,0,28,15,13,13,0,0,0,15,2Z"
  }), _react.default.createElement("path", {
    d: "M15,15.3269887 L10.6248577,11.9177869 C10.4236021,11.7609644 10.1299323,11.7927468 9.96892789,11.988775 C9.80792343,12.1848031 9.84055341,12.4708451 10.041809,12.6276676 L14.7012493,16.2584003 C14.8680779,16.3940555 15.1152493,16.4013884 15.2915244,16.2640313 C15.2939898,16.2622325 15.2963784,16.2603294 15.2987507,16.2584003 L19.958191,12.6276676 C20.1594466,12.4708451 20.1920766,12.1848031 20.0310721,11.988775 C19.8700677,11.7927468 19.5763979,11.7609644 19.3751423,11.9177869 L15,15.3269887 Z M9,10 L21,10 C21.5522847,10 22,10.4477153 22,11 L22,19 C22,19.5522847 21.5522847,20 21,20 L9,20 C8.44771525,20 8,19.5522847 8,19 L8,11 C8,10.4477153 8.44771525,10 9,10 Z"
  }));
};

exports.EmailLogoSVG = EmailLogoSVG;
EmailLogoSVG.defaultProps = {
  height: 1,
  title: "Share by email",
  titleId: "email-title"
};
EmailLogoSVG.propTypes = {
  height: _propTypes.default.number,
  title: _propTypes.default.string,
  titleId: _propTypes.default.string
};
//# sourceMappingURL=index.js.map