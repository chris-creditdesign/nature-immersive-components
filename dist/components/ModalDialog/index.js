"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      title = _ref.title,
      labelId = _ref.labelId,
      dialogId = _ref.dialogId;
  return _react.default.createElement("div", {
    className: "modal-dialog-container"
  }, _react.default.createElement("div", {
    className: "button-container",
    "aria-expanded": true,
    "aria-controls": dialogId
  }, _react.default.createElement("button", {
    type: "button"
  }, "Graphic Legend")), _react.default.createElement("div", {
    className: "invert box stack",
    style: {
      "--space": "var(--s1)"
    },
    role: "dialog",
    id: dialogId,
    "aria-labelledby": labelId,
    "aria-modal": "true",
    hidden: false
  }, _react.default.createElement("h2", {
    id: labelId
  }, title), children, _react.default.createElement("button", {
    type: "button"
  }, "Close")));
};

ModalDialog.defaultProps = {
  labelId: "label-id",
  dialogId: "dialog-id"
};
ModalDialog.propTypes = {
  title: _propTypes.default.string.isRequired,
  labelId: _propTypes.default.string,
  dialogId: _propTypes.default.string,
  children: _propTypes.default.node.isRequired
};
var _default = ModalDialog;
exports.default = _default;
//# sourceMappingURL=index.js.map