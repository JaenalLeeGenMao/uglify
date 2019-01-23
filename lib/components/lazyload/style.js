'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorBg = exports.fadeInCss = exports.a = exports.img = exports.defaults = exports.success = exports.fade = undefined;

var _templateObject = _taggedTemplateLiteral(['{\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}'], ['{\n  opacity: 0;\n  transition: opacity 0.5s ease-in-out;\n}']),
    _templateObject2 = _taggedTemplateLiteral(['{\n  opacity: 1;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}'], ['{\n  opacity: 1;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}']),
    _templateObject3 = _taggedTemplateLiteral(['{\n  opacity: 1;\n}'], ['{\n  opacity: 1;\n}']),
    _templateObject4 = _taggedTemplateLiteral(['{\n  width: 100%;\n  outline: 0;\n}'], ['{\n  width: 100%;\n  outline: 0;\n}']),
    _templateObject5 = _taggedTemplateLiteral(['{\n  text-decoration: none;\n  outline: 0;\n}'], ['{\n  text-decoration: none;\n  outline: 0;\n}']),
    _templateObject6 = _taggedTemplateLiteral(['{\n  from { opacity: 0; }\n  to { opacity: 1; }\n}'], ['{\n  from { opacity: 0; }\n  to { opacity: 1; }\n}']),
    _templateObject7 = _taggedTemplateLiteral(['{\n  animation: ', ' 2s;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}'], ['{\n  animation: ', ' 2s;\n  img {\n    width: 100%;\n    outline: 0;\n  }\n  a {\n    text-decoration: none;\n    outline: 0;\n  }\n}']),
    _templateObject8 = _taggedTemplateLiteral(['{\n  background-image: url(\'data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIKICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwOS42cHgiIGhlaWdodD0iMzIzLjNweCIgdmlld0JveD0iMCAwIDQwOS42IDMyMy4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDkuNiAzMjMuMzsiCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6I0E2QTZBNjt9Cjwvc3R5bGU+CjxkZWZzPgo8L2RlZnM+CjxnPgogICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwOS42LDRjMCwxMDUuMSwwLDIxMC4xLDAsMzE1LjJjLTIuNiwzLjQtNi4xLDQtMTAuMiw0Yy0xMjkuNy0wLjEtMjU5LjQtMC4xLTM4OS4xLTAuMQogICAgICAgIGMtOC4zLDAtMTAuMi0xLjgtMTAuMi0xMEMwLDIxMi4yLDAsMTExLjEsMCwxMC4xYzAtOC4yLDEuOS0xMCwxMC4yLTEwYzEyOS43LDAsMjU5LjQsMCwzODkuMS0wLjFDNDAzLjUsMCw0MDcsMC43LDQwOS42LDR6CiAgICAgICAgIE0zNzAuNiwyNzAuMWMwLTEuNywwLTMuMSwwLTQuNGMwLTczLjcsMC0xNDcuNCwwLTIyMS4xYzAtNS40LDAtNS40LTUuNC01LjRjLTEwNi45LDAtMjEzLjgsMC0zMjAuNywwYy01LjQsMC01LjQsMC01LjQsNS41CiAgICAgICAgYzAsNzAuNCwwLDE0MC44LDAsMjExLjFjMCwxLjQtMC41LDIuOSwwLjUsNC4yYzEuNC0wLjYsMi0xLjksMi43LTIuOWMyOC44LTM4LjcsNTcuNy03Ny40LDg2LjUtMTE2YzEuMS0xLjUsMi4yLTMsMy40LTQuNQogICAgICAgIGMxLjUtMS44LDMuMi0xLjksNC44LTAuMmMxLjEsMS4yLDIuMSwyLjQsMy4xLDMuNmMyNC40LDMwLDQ4LjcsNjAsNzMsOTAuMWMyLDIuNSwzLjIsMyw1LjgsMC42YzE4LjUtMTYuNSwzNy4yLTMyLjgsNTUuOC00OS4yCiAgICAgICAgYzQuOC00LjIsNS00LjIsOS4zLDAuM2MyNy40LDI4LjQsNTQuOCw1Ni43LDgyLjMsODUuMUMzNjcuNCwyNjgsMzY4LjIsMjY5LjUsMzcwLjYsMjcwLjF6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzA0LjMsMTAyLjhjLTAuOSwxOC4zLTE2LjgsMzEuMS0zMy40LDI5LjhjLTE4LjEtMS4zLTMxLjUtMTYuOS0yOS45LTMzLjljMS43LTE4LjQsMTYuOS0zMC4zLDMzLjEtMjkuNQogICAgICAgIEMyOTMuMiw3MC4zLDMwNS40LDg2LjUsMzA0LjMsMTAyLjh6Ii8+CjwvZz4KPC9zdmc+\');\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position-x: 50%;\n  background-position-y: 50%;\n}'], ['{\n  background-image: url(\'data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIKICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwOS42cHgiIGhlaWdodD0iMzIzLjNweCIgdmlld0JveD0iMCAwIDQwOS42IDMyMy4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDkuNiAzMjMuMzsiCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6I0E2QTZBNjt9Cjwvc3R5bGU+CjxkZWZzPgo8L2RlZnM+CjxnPgogICAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwOS42LDRjMCwxMDUuMSwwLDIxMC4xLDAsMzE1LjJjLTIuNiwzLjQtNi4xLDQtMTAuMiw0Yy0xMjkuNy0wLjEtMjU5LjQtMC4xLTM4OS4xLTAuMQogICAgICAgIGMtOC4zLDAtMTAuMi0xLjgtMTAuMi0xMEMwLDIxMi4yLDAsMTExLjEsMCwxMC4xYzAtOC4yLDEuOS0xMCwxMC4yLTEwYzEyOS43LDAsMjU5LjQsMCwzODkuMS0wLjFDNDAzLjUsMCw0MDcsMC43LDQwOS42LDR6CiAgICAgICAgIE0zNzAuNiwyNzAuMWMwLTEuNywwLTMuMSwwLTQuNGMwLTczLjcsMC0xNDcuNCwwLTIyMS4xYzAtNS40LDAtNS40LTUuNC01LjRjLTEwNi45LDAtMjEzLjgsMC0zMjAuNywwYy01LjQsMC01LjQsMC01LjQsNS41CiAgICAgICAgYzAsNzAuNCwwLDE0MC44LDAsMjExLjFjMCwxLjQtMC41LDIuOSwwLjUsNC4yYzEuNC0wLjYsMi0xLjksMi43LTIuOWMyOC44LTM4LjcsNTcuNy03Ny40LDg2LjUtMTE2YzEuMS0xLjUsMi4yLTMsMy40LTQuNQogICAgICAgIGMxLjUtMS44LDMuMi0xLjksNC44LTAuMmMxLjEsMS4yLDIuMSwyLjQsMy4xLDMuNmMyNC40LDMwLDQ4LjcsNjAsNzMsOTAuMWMyLDIuNSwzLjIsMyw1LjgsMC42YzE4LjUtMTYuNSwzNy4yLTMyLjgsNTUuOC00OS4yCiAgICAgICAgYzQuOC00LjIsNS00LjIsOS4zLDAuM2MyNy40LDI4LjQsNTQuOCw1Ni43LDgyLjMsODUuMUMzNjcuNCwyNjgsMzY4LjIsMjY5LjUsMzcwLjYsMjcwLjF6Ii8+CiAgICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzA0LjMsMTAyLjhjLTAuOSwxOC4zLTE2LjgsMzEuMS0zMy40LDI5LjhjLTE4LjEtMS4zLTMxLjUtMTYuOS0yOS45LTMzLjljMS43LTE4LjQsMTYuOS0zMC4zLDMzLjEtMjkuNQogICAgICAgIEMyOTMuMiw3MC4zLDMwNS40LDg2LjUsMzA0LjMsMTAyLjh6Ii8+CjwvZz4KPC9zdmc+\');\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position-x: 50%;\n  background-position-y: 50%;\n}']);

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