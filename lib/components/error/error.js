'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withStyles = require('isomorphic-style-loader/lib/withStyles');

var _withStyles2 = _interopRequireDefault(_withStyles);

var _Link = require('@components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Lazyload = require('@components/common/Lazyload');

var _Lazyload2 = _interopRequireDefault(_Lazyload);

var _mola_text = require('@global/style/icons/error/mola_text.png');

var _mola_text2 = _interopRequireDefault(_mola_text);

var _night_mode_ = require('@global/style/icons/error/night_mode_404.png');

var _night_mode_2 = _interopRequireDefault(_night_mode_);

var _internal_server_error_ = require('@global/style/icons/error/internal_server_error_502.png');

var _internal_server_error_2 = _interopRequireDefault(_internal_server_error_);

var _common_error = require('@global/style/icons/error/common_error.png');

var _common_error2 = _interopRequireDefault(_common_error);

var _error = require('./error.css');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Error = function Error(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? '' : _ref$title,
      _ref$message = _ref.message,
      message = _ref$message === undefined ? '' : _ref$message,
      _ref$isDark = _ref.isDark,
      isDark = _ref$isDark === undefined ? 0 : _ref$isDark,
      _ref$status = _ref.status,
      status = _ref$status === undefined ? 1 : _ref$status;

  var imageUri = void 0;
  switch (status) {
    case 400:
      title = 'Page not found';
      imageUri = _night_mode_2.default;
      break;
    case 502:
      title = 'Bad gateway';
      imageUri = _internal_server_error_2.default;
      break;
    default:
      title = 'Oops, sorry :(';
      imageUri = _common_error2.default;
      break;
  }
  return _react2.default.createElement(
    _Lazyload2.default,
    null,
    _react2.default.createElement(
      _Link2.default,
      { to: '/', className: _error2.default.error_container + ' ' + className },
      _react2.default.createElement('img', { alt: 'mola', src: _mola_text2.default, className: _error2.default.error__mola_title }),
      _react2.default.createElement(
        'div',
        { className: _error2.default.error__wrapper, style: { color: isDark ? "black" : "white" } },
        _react2.default.createElement('img', { alt: message, src: imageUri, className: _error2.default.error__mola_background }),
        _react2.default.createElement(
          'h2',
          { className: _error2.default.error__title },
          title
        ),
        _react2.default.createElement(
          'p',
          { className: _error2.default.error__description },
          message
        )
      )
    )
  );
};

exports.default = (0, _withStyles2.default)(_error2.default)(Error);