"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

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
      gridSpace = _ref.gridSpace,
      minWidth = _ref.minWidth,
      elem = _ref.elem;
  return (0, _react.createElement)(elem, {
    className: "grid js-grid ".concat(className),
    style: {
      "--grid-space": gridSpace,
      "--grid-min-width": minWidth
    },
    "data-min": minWidth
  }, children);
};

LayoutGrid.defaultProps = {
  className: "",
  gridSpace: null,
  minWidth: "14rem",
  elem: "div"
};
LayoutGrid.propTypes = {
  children: _propTypes.default.node.isRequired,

  /** CSS class to add custom styles */
  className: _propTypes.default.string,

  /** Size of the the grid-gap */
  gridSpace: _propTypes.default.string,

  /** Minimum width of columns */
  minWidth: _propTypes.default.string,

  /** Type of element to create */
  elem: _propTypes.default.string
};
var _default = LayoutGrid;
exports.default = _default;
//# sourceMappingURL=index.js.map