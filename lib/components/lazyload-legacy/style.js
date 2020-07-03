"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorBg = exports.fadeInCss = exports.a = exports.img = exports.defaults = exports.success = exports.fade = void 0;

var _reactEmotion = _interopRequireWildcard(require("react-emotion"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["{\n  background-image: url('data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIKICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwOS42cHgiIGhlaWdodD0iMzIzLjNweCIgdmlld0JveD0iMCAwIDQwOS42IDMyMy4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDkuNiAzMjMuMzsiCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6I0E2QTZBNjt9Cjwvc3R5bGU+CjxkZWZzPgo8L2RlZnM+CjxnPgogICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwOS42LDRjMCwxMDUuMSwwLDIxMC4xLDAsMzE1LjJjLTIuNiwzLjQtNi4xLDQtMTAuMiw0Yy0xMjkuNy0wLjEtMjU5LjQtMC4xLTM4OS4xLTAuMQogICAgICAgIGMtOC4zLDAtMTAuMi0xLjgtMTAuMi0xMEMwLDIxMi4yLDAsMTExLjEsMCwxMC4xYzAtOC4yLDEuOS0xMCwxMC4yLTEwYzEyOS43LDAsMjU5LjQsMCwzODkuMS0wLjFDNDAzLjUsMCw0MDcsMC43LDQwOS42LDR6CiAgICAgICAgIE0zNzAuNiwyNzAuMWMwLTEuNywwLTMuMSwwLTQuNGMwLTczLjcsMC0xNDcuNCwwLTIyMS4xYzAtNS40LDAtNS40LTUuNC01LjRjLTEwNi45LDAtMjEzLjgsMC0zMjAuNywwYy01LjQsMC01LjQsMC01LjQsNS41CiAgICAgICAgYzAsNzAuNCwwLDE0MC44LDAsMjExLjFjMCwxLjQtMC41LDIuOSwwLjUsNC4yYzEuNC0wLjYsMi0xLjksMi43LTIuOWMyOC44LTM4LjcsNTcuNy03Ny40LDg2LjUtMTE2YzEuMS0xLjUsMi4yLTMsMy40LTQuNQogICAgICAgIGMxLjUtMS44LDMuMi0xLjksNC44LTAuMmMxLjEsMS4yLDIuMSwyLjQsMy4xLDMuNmMyNC40LDMwLDQ4LjcsNjAsNzMsOTAuMWMyLDIuNSwzLjIsMyw1LjgsMC42YzE4LjUtMTYuNSwzNy4yLTMyLjgsNTUuOC00OS4yCiAgICAgICAgYzQuOC00LjIsNS00LjIsOS4zLDAuM2MyNy40LDI4LjQsNTQuOCw1Ni43LDgyLjMsODUuMUMzNjcuNCwyNjgsMzY4LjIsMjY5LjUsMzcwLjYsMjcwLjF6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzA0LjMsMTAyLjhjLTAuOSwxOC4zLTE2LjgsMzEuMS0zMy40LDI5LjhjLTE4LjEtMS4zLTMxLjUtMTYuOS0yOS45LTMzLjljMS43LTE4LjQsMTYuOS0zMC4zLDMzLjEtMjkuNQogICAgICAgIEMyOTMuMiw3MC4zLDMwNS40LDg2LjUsMzA0LjMsMTAyLjh6Ii8+CjwvZz4KPC9zdmc+');\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position-x: 50%;\n  background-position-y: 50%;\n}"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["{\n  animation: ", " 2s;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["{\n  from { opacity: 0; }\n  to { opacity: 1; }\n}"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["{\n  text-decoration: none;\n  outline: 0;\n}"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["{\n  width: 100%;\n  outline: 0;\n}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["{\n  opacity: 1;\n}"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["{\n  opacity: 1;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["{\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var fade = (0, _reactEmotion.css)(_templateObject());
exports.fade = fade;
var success = (0, _reactEmotion.css)(_templateObject2());
exports.success = success;
var defaults = (0, _reactEmotion.css)(_templateObject3());
exports.defaults = defaults;
var img = (0, _reactEmotion["default"])('img')(_templateObject4());
exports.img = img;
var a = (0, _reactEmotion["default"])('a')(_templateObject5());
exports.a = a;
var fadeinKeyframe = (0, _reactEmotion.keyframes)(_templateObject6());
var fadeInCss = (0, _reactEmotion.css)(_templateObject7(), fadeinKeyframe);
exports.fadeInCss = fadeInCss;
var errorBg = (0, _reactEmotion.css)(_templateObject8());
exports.errorBg = errorBg;