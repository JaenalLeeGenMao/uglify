'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Placeholder = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  animation-duration: 3.6s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-name: ', ';\n'], ['\n  animation-duration: 3.6s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-name: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  from {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n\n  25% {\n    background-color: rgba(165, 165, 165, 0.3);\n  }\n\n  50% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n\n  to {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n'], ['\n  from {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n\n  25% {\n    background-color: rgba(165, 165, 165, 0.3);\n  }\n\n  50% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n\n  to {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  from {\n    background-color: #1a1a1a;\n  }\n\n  25% {\n    background-color: #333;\n  }\n\n  50% {\n    background-color: #1a1a1a;\n  }\n\n  to {\n    background-color: #1a1a1a;\n  }\n'], ['\n  from {\n    background-color: #1a1a1a;\n  }\n\n  25% {\n    background-color: #333;\n  }\n\n  50% {\n    background-color: #1a1a1a;\n  }\n\n  to {\n    background-color: #1a1a1a;\n  }\n']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Placeholder = exports.Placeholder = (0, _reactEmotion2.default)('div')(_templateObject, function (props) {
  return props.isLight ? lightShimmerAnimation : darkShimmerAnimation;
});

var lightShimmerAnimation = (0, _reactEmotion.keyframes)(_templateObject2);

var darkShimmerAnimation = (0, _reactEmotion.keyframes)(_templateObject3);