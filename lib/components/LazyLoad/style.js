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
    _templateObject8 = _taggedTemplateLiteral(['{\n  background-image: url(\'data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIKICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ0LjRweCIgaGVpZ2h0PSI0NC41cHgiIHZpZXdCb3g9IjAgMCA0NC40IDQ0LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0LjQgNDQuNTsiCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9CiAgICAuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8ZGVmcz4KPC9kZWZzPgo8ZyBpZD0iWE1MSURfMThfIj4KICAgIDxjaXJjbGUgaWQ9IlhNTElEXzIwXyIgY2xhc3M9InN0MCIgY3g9IjE4LjQiIGN5PSIxOC40IiByPSIxNi45Ii8+CiAgICA8bGluZSBpZD0iWE1MSURfMTlfIiBjbGFzcz0ic3QxIiB4MT0iMzAuNCIgeTE9IjMwLjQiIHgyPSI0Mi45IiB5Mj0iNDMiLz4KPC9nPgo8L3N2Zz4=\');\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position-x: 50%;\n  background-position-y: 50%;\n}'], ['{\n  background-image: url(\'data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIKICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ0LjRweCIgaGVpZ2h0PSI0NC41cHgiIHZpZXdCb3g9IjAgMCA0NC40IDQ0LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0LjQgNDQuNTsiCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9CiAgICAuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8ZGVmcz4KPC9kZWZzPgo8ZyBpZD0iWE1MSURfMThfIj4KICAgIDxjaXJjbGUgaWQ9IlhNTElEXzIwXyIgY2xhc3M9InN0MCIgY3g9IjE4LjQiIGN5PSIxOC40IiByPSIxNi45Ii8+CiAgICA8bGluZSBpZD0iWE1MSURfMTlfIiBjbGFzcz0ic3QxIiB4MT0iMzAuNCIgeTE9IjMwLjQiIHgyPSI0Mi45IiB5Mj0iNDMiLz4KPC9nPgo8L3N2Zz4=\');\n  display: block;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  background-repeat: no-repeat;\n  background-size: 50px 50px;\n  background-position-x: 50%;\n  background-position-y: 50%;\n}']);

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