"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.container = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["{\n  span {\n    color: #fff;\n    font-weight: bold;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: 0.5rem;\n  }\n\n  .animationContainer {\n    display: inline-block;\n    vertical-align: middle;\n    position: relative;\n    width: 2rem;\n    height: 2rem;\n  }\n  \n  .animationContainer svg {\n    position: absolute;\n  }\n  \n  .animationContainer i {\n    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMmM1NmZmO30uYntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIxMSIgY3k9IjExIiByPSIxMSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjkuNDc3LDI2LjI4MSwyMi43NDMsMjIuNTRhMS4xMzQsMS4xMzQsMCwwLDAtMS42ODQuOTkydjcuNDgyQTEuMTM0LDEuMTM0LDAsMCwwLDIyLjc0MywzMmw2LjczMy0zLjc0MUExLjEzNCwxLjEzNCwwLDAsMCwyOS40NzcsMjYuMjgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzLjA1OSAtMTYuMzk2KSIvPjwvc3ZnPg==');\n    background-repeat: no-repeat;\n    background-size: contain;\n    display: inline-block;\n    width: 1.6rem;\n    height: 1.6rem;\n    vertical-align: middle;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  \n  .timeCount {\n    transition: all 1s linear;\n    stroke-linecap: round;\n  }\n  \n  @media screen and (max-width: 640px) {\n    .animationContainer {\n      width: 16px;\n      height: 16px;\n    }\n  \n    .animationContainer i {\n      width: 12px;\n      height: 12px;\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var container = (0, _reactEmotion.css)(_templateObject());
exports.container = container;