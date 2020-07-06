"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.playerContainer = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["{\n  position: relative;\n  height: calc(100% - 10em);\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  display: block;\n  pointer-events: none;\n  z-index: 103;\n\n  .container {\n    position: absolute;\n    display: block;\n    bottom: 0;\n    right: 2rem;\n    width: 35rem;\n    height: 15.3rem;\n    max-height: 15.3rem;\n    max-width: 35rem;\n    background-color: #1f1f1f;\n    pointer-events: auto;\n  }\n  \n  .poster {\n    height: 100%;\n    width: 25%;\n    float: left;\n    display: block;\n  }\n  \n  .poster img,\n  .poster div {\n    height: 100%;\n  }\n  \n  .content {\n    position: relative;\n    width: 75%;\n    height: 100%;\n    float: right;\n    display: block;\n    padding: 1.4rem 1rem 1rem 1rem;\n    box-sizing: border-box;\n  }\n  \n  .title {\n    position: relative;\n    height: 70%;\n    font-size: 1.8rem;\n    line-height: 1.2;\n    font-weight: bold;\n    margin-bottom: 0.5rem;\n    max-height: 4.4rem;\n  }\n  \n  .title p {\n    height: 100%;\n    overflow: hidden;\n  }\n  \n  .desc {\n    position: relative;\n    height: 40%;\n    font-size: 1.2rem;\n    line-height: 1.3;\n    color: #969696;\n    padding-top: 0.5rem;\n  }\n  \n  .desc p {\n    height: 70%;\n    overflow: hidden;\n  }\n  \n  .link {\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    font-size: 1.2rem;\n    padding-top: 0.5rem;\n    vertical-align: middle;\n    height: 25%;\n    width: calc(100% - 2rem);\n    bottom: 1rem;\n    position: absolute;\n  }\n  \n  .play {\n    background-color: #2c56ff;\n    border-radius: 0.3rem;\n    padding: 0.3rem 0.5rem 0.4rem 1rem;\n    width: 100%;\n  }\n  \n  .close {\n    color: #808080;\n    border: 1px solid #808080;\n    margin-left: 1rem;\n    border-radius: 0.3rem;\n    vertical-align: middle;\n    padding: 0.6rem;\n    text-align: center;\n    width: 30%;\n  }\n  \n  .close:hover {\n    color: #fff;\n    cursor: pointer;\n  }\n  \n  @media screen and (max-width: 640px) {\n    .container {\n      bottom: 0;\n      right: 0;\n      width: calc(100% - 10px);\n      height: calc(100% - 60px);\n      margin: 0 5px;\n      max-height: 153px;\n      max-width: 350px;\n    }\n  \n    .poster {\n      height: 65.25%;\n      width: 50%;\n    }\n  \n    .content {\n      width: 50%;\n      height: 65.25%;\n      padding: 10px;\n    }\n  \n    .title {\n      font-size: 12px;\n      max-height: 30px;\n    }\n  \n    .title p {\n      height: 100%;\n    }\n  \n    .desc {\n      font-size: 11px;\n      height: 33px;\n      padding-top: 3px;\n    }\n  \n    .desc p {\n      height: 100%;\n    }\n  \n    .link {\n      font-size: 11px;\n      align-items: center;\n      height: 34.75%;\n      padding: 0;\n      position: relative;\n      width: 100%;\n      bottom: 0;\n    }\n  \n    .play {\n      width: 50%;\n      margin-left: 5px;\n      padding: 5px 5px 5px 8px;\n    }\n  \n    .close {\n      text-align: center;\n      width: calc(50% - 5px);\n      margin: 0 5px;\n      border-radius: 3px;\n      padding: 6.5px;\n    }\n  }\n  \n  @media screen and (max-width: 320px) {\n    .container {\n      height: calc(100% - 60px);\n      max-height: 153px;\n      max-width: 350px;\n    }\n  \n    .title {\n      height: 25px;\n    }\n  \n    .link {\n      font-size: 9px;\n    }\n  \n    .play {\n      padding: 3.5px 4px 3.5px 8px;\n    }\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var playerContainer = (0, _reactEmotion.css)(_templateObject());
exports.playerContainer = playerContainer;