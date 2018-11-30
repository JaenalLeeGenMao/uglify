'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  html {\n    font-size: 62.5%;\n    font-family: Futura, Trebuchet MS, Arial, sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n  \n  @media screen and (min-height: 1801px) {\n    html {\n      font-size: 187.5%;\n    }\n  }\n'], ['\n  ', '\n  html {\n    font-size: 62.5%;\n    font-family: Futura, Trebuchet MS, Arial, sans-serif;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n  \n  @media screen and (min-height: 1801px) {\n    html {\n      font-size: 187.5%;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _emotionNormalize = require('emotion-normalize');

var _emotionNormalize2 = _interopRequireDefault(_emotionNormalize);

var _emotion = require('emotion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _emotion.injectGlobal)(_templateObject, _emotionNormalize2.default);

var Layout = function Layout(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    children
  );
};

exports.default = Layout;