"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LayoutFrame = _interopRequireDefault(require("../LayoutFrame"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageFrame = function ImageFrame(_ref) {
  var frameNumerator = _ref.frameNumerator,
      frameDenominator = _ref.frameDenominator,
      src = _ref.src,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height;
  return _react.default.createElement(_LayoutFrame.default, {
    frameNumerator: frameNumerator,
    frameDenominator: frameDenominator
  }, _react.default.createElement("img", {
    src: src,
    alt: alt,
    width: width,
    height: height,
    loading: "lazy"
  }));
};

ImageFrame.propTypes = {
  frameNumerator: _propTypes.default.number.isRequired,
  frameDenominator: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  alt: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired
};
var _default = ImageFrame;
exports.default = _default;
//# sourceMappingURL=index.js.map