'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorBg = exports.fadeInCss = exports.a = exports.img = exports.defaults = exports.success = exports.fade = undefined;

var _templateObject = _taggedTemplateLiteral([' {\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}'], [' {\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}']),
    _templateObject2 = _taggedTemplateLiteral(['{\n  opacity: 1;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}'], ['{\n  opacity: 1;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}']),
    _templateObject3 = _taggedTemplateLiteral(['{\n  opacity: 1;\n}'], ['{\n  opacity: 1;\n}']),
    _templateObject4 = _taggedTemplateLiteral(['{\n  width: 100%;\n  outline: 0;\n}'], ['{\n  width: 100%;\n  outline: 0;\n}']),
    _templateObject5 = _taggedTemplateLiteral(['{\n  text-decoration: none;\n  outline: 0;\n}'], ['{\n  text-decoration: none;\n  outline: 0;\n}']),
    _templateObject6 = _taggedTemplateLiteral(['{\n  from { opacity: 0; }\n  to { opacity: 1; }\n}'], ['{\n  from { opacity: 0; }\n  to { opacity: 1; }\n}']),
    _templateObject7 = _taggedTemplateLiteral(['{\n  animation: ', ' 2s;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}'], ['{\n  animation: ', ' 2s;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}']),
    _templateObject8 = _taggedTemplateLiteral(['{\n  background-image: url(\'./assets/no_img.png\');\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position-x: 50%;\n  background-position-y: 50%;\n}'], ['{\n  background-image: url(\'./assets/no_img.png\');\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position-x: 50%;\n  background-position-y: 50%;\n}']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fade = exports.fade = (0, _reactEmotion.css)(_templateObject);

var success = exports.success = (0, _reactEmotion.css)(_templateObject2);

var defaults = exports.defaults = (0, _reactEmotion.css)(_templateObject3);

var img = exports.img = (0, _reactEmotion2.default)('img')(_templateObject4);

var a = exports.a = (0, _reactEmotion2.default)('a')(_templateObject5);

var fadeinKeyframe = (0, _reactEmotion.keyframes)(_templateObject6);

var fadeInCss = exports.fadeInCss = (0, _reactEmotion.css)(_templateObject7, fadeinKeyframe);

var errorBg = exports.errorBg = (0, _reactEmotion.css)(_templateObject8);