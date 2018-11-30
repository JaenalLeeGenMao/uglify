'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import withStyles from 'isomorphic-style-loader/lib/withStyles';
var LoadingPlaceholder = function LoadingPlaceholder(_ref) {
  var className = _ref.className,
      isLight = _ref.isLight,
      style = _ref.style;

  return _react2.default.createElement(_style.Placeholder, { style: style, className: className, isLight: isLight });
};

exports.default = LoadingPlaceholder;