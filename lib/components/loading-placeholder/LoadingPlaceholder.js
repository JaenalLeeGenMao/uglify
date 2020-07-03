"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LoadingPlaceholder = function LoadingPlaceholder(_ref) {
  var className = _ref.className,
      isLight = _ref.isLight,
      style = _ref.style;
  return /*#__PURE__*/_react["default"].createElement(_style.Placeholder, {
    style: style,
    className: className,
    isLight: isLight
  });
};

var _default = LoadingPlaceholder;
exports["default"] = _default;