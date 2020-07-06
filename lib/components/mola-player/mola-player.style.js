"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BugLogoWrapper = exports.Icons = exports.ErrorFeedback = exports.UserFeedback = exports.Poster = exports.BannerImg = exports.childContainer = exports.container = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n   {\n    &.fullscreen {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1;\n\n      img {\n        width: 100%;\n        height: 100%;\n      }\n    }\n\n    &.wide {\n      position: absolute;\n      top: 2em;\n      right: 2em;\n      z-index: 1;\n\n      img {\n        width: auto;\n        height: 15.5em;\n      }\n    }\n\n    &.square {\n      position: absolute;\n      top: 2em;\n      right: 2em;\n      z-index: 1;\n\n      img {\n        width: auto;\n        height: 11.4em;\n      }\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n   {\n    &.playIcon {\n      width: 5rem;\n      height: 5rem;\n      margin: 0 1rem;\n      display: inline-block;\n      background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzFmOTNmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNTEuMDg4LDI4Ljc3MWwtMTEuMjIzLTYuMTM4YTEuODksMS44OSwwLDAsMC0yLjgwNywxLjYyN1YzNi41MzRhMS44OSwxLjg5LDAsMCwwLDIuODA3LDEuNjI1bDExLjIyMy02LjEzOEExLjg0NiwxLjg0NiwwLDAsMCwxNTEuMDg4LDI4Ljc3MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzcuMDU5IC0yMi4zOTYpIi8+PC9zdmc+);\n      background-repeat: no-repeat;\n      background-size: contain;\n      vertical-align: middle;\n      border: none;\n      cursor: pointer;\n\n      @media (max-width: 640px), @media only screen and (orientation: landscape) {\n        width: 44px;\n        height: 44px;\n        margin: 0 10px;\n        display: inline-block;\n        background: url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNSAxNiI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzFmOTNmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNTEuMDg4LDI4Ljc3MWwtMTEuMjIzLTYuMTM4YTEuODksMS44OSwwLDAsMC0yLjgwNywxLjYyN1YzNi41MzRhMS44OSwxLjg5LDAsMCwwLDIuODA3LDEuNjI1bDExLjIyMy02LjEzOEExLjg0NiwxLjg0NiwwLDAsMCwxNTEuMDg4LDI4Ljc3MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzcuMDU5IC0yMi4zOTYpIi8+PC9zdmc+);\n        background-repeat: no-repeat;\n        background-size: contain;\n        vertical-align: middle;\n        border: none;\n        cursor: pointer;\n      }\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n   {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    min-width: 5rem;\n    background-color: rgba(0, 0, 0, 0.9);\n    padding: 2.3em 1.8em;\n    outline: none !important;\n    border: 0;\n    border-radius: 0.3em;\n    color: white;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n   {\n    top: 50%;\n    left: 50%;\n    position: absolute;\n    min-width: 5rem;\n    background-color: transparent;\n    outline: none !important;\n    border: 0;\n    color: white;\n    transform: translate(-50%, -50%);\n    z-index: 2;\n    cursor: pointer;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n   {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    z-index: 2;\n\n    img {\n      background-size: cover;\n      position: absolute;\n      margin: auto;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n   {\n    position: relative;\n    z-index: 2;\n    height: 12.3935%;\n    cursor: pointer;\n    display: block;\n    margin: auto;\n    width: auto;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n   {\n    opacity: 1;\n    transition: all 300ms ease-in-out;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    max-width: 100vw;\n    width: 100%;\n    height: 100%;\n    max-width: 100%; /* important to prevent greater than video width itself */\n    max-height: 100%; /* important to prevent greater than video height itself */\n    margin: auto;\n    z-index: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    user-select: none;\n    background: #000000;\n\n    code {\n      font-size: 1.4rem;\n      line-height: 1.4;\n      white-space: pre-line;\n      color: rgb(255, 255, 255);\n      font-family: 'Public Sans', sans-serif;\n\n      @media (max-width: 640px) {\n        font-size: 12px;\n      }\n    }\n\n    video {\n      display: inherit;\n      max-width: 100%;\n      margin: auto;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var container = (0, _reactEmotion.css)(_templateObject());
exports.container = container;
var childContainer = (0, _reactEmotion.css)(_templateObject2());
exports.childContainer = childContainer;
var BannerImg = (0, _reactEmotion["default"])('img')(_templateObject3());
exports.BannerImg = BannerImg;
var Poster = (0, _reactEmotion["default"])('div')(_templateObject4());
exports.Poster = Poster;
var UserFeedback = (0, _reactEmotion["default"])('div')(_templateObject5());
exports.UserFeedback = UserFeedback;
var ErrorFeedback = (0, _reactEmotion["default"])('div')(_templateObject6());
exports.ErrorFeedback = ErrorFeedback;
var Icons = (0, _reactEmotion["default"])('div')(_templateObject7());
exports.Icons = Icons;
var BugLogoWrapper = (0, _reactEmotion["default"])('div')(_templateObject8());
exports.BugLogoWrapper = BugLogoWrapper;