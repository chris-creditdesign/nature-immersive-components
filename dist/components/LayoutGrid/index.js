"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * ## Grid
 *
 * Layout component used to arrange contents into a grid, surprisingly.
 */
var LayoutGrid = function LayoutGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      space = _ref.space,
      minWidth = _ref.minWidth;
  return _react.default.createElement("div", {
    className: "grid js-grid ".concat(className),
    style: {
      "--space": space,
      "--min-width": minWidth
    },
    "data-min": minWidth
  }, children);
};

LayoutGrid.defaultProps = {
  className: "",
  space: "var(--space)",
  minWidth: "20rem"
};
LayoutGrid.propTypes = {
  children: _propTypes.default.node.isRequired,

  /** CSS class to add custom styles */
  className: _propTypes.default.string,

  /** Size of the the grid-gap */
  space: _propTypes.default.string,

  /** Minimum width of columns */
  minWidth: _propTypes.default.string
};
var _default = LayoutGrid;
exports.default = _default;
//# sourceMappingURL=index.js.map