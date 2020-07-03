"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Placeholder = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  from {\n    background-color: #1a1a1a;\n  }\n\n  25% {\n    background-color: #333;\n  }\n\n  50% {\n    background-color: #1a1a1a;\n  }\n\n  to {\n    background-color: #1a1a1a;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  from {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n\n  25% {\n    background-color: rgba(165, 165, 165, 0.3);\n  }\n\n  50% {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n\n  to {\n    background-color: rgba(165, 165, 165, 0.1);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  animation-duration: 3.6s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-name: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Placeholder = (0, _reactEmotion["default"])('div')(_templateObject(), function (props) {
  return props.isLight ? lightShimmerAnimation : darkShimmerAnimation;
});
exports.Placeholder = Placeholder;
var lightShimmerAnimation = (0, _reactEmotion.keyframes)(_templateObject2());
var darkShimmerAnimation = (0, _reactEmotion.keyframes)(_templateObject3());