'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapThumbnail = exports.topThumbnail = exports.bottomDetail = exports.bottomThumbnail = exports.rightThumbnail = exports.detailWrapper = exports.durationClass = exports.overlayDetail = exports.imgThumbnailWrapper = exports.imgThumbnail = exports.playButton = exports.wrapperThumbnail = exports.wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['{\n  display: block;\n  clear: both;\n}'], ['{\n  display: block;\n  clear: both;\n}']),
    _templateObject2 = _taggedTemplateLiteral(['{\n  position: relative;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}'], ['{\n  position: relative;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyICg2Njg2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMCwxLjYwMDE2NDQyIEwwLDE4LjQwMDE2NDQgQzAsMTkuMjY3MTY0NCAwLjk1NzUsMTkuNzkyMTY0NCAxLjY4ODUsMTkuMzI1NjY0NCBMMTQuNTEsMTEuMTQ3MTY0NCBDMTUuMTc3LDEwLjcyMTE2NDQgMTUuMTg4NSw5Ljc1MTE2NDQyIDE0LjUzMTUsOS4zMDk2NjQ0MiBMMS43MTA1LDAuNjg4NjY0NDI0IEMwLjk4MTUsMC4xOTgxNjQ0MjQgMCwwLjcyMTE2NDQyNCAwLDEuNjAwMTY0NDIiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlBsYXktQnV0dG9uIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI0LDAgTDI0LDAgQzM3LjI1NDgzNCwtMi40MzQ4NzM1ZS0xNSA0OCwxMC43NDUxNjYgNDgsMjQgTDQ4LDI0IEM0OCwzNy4yNTQ4MzQgMzcuMjU0ODM0LDQ4IDI0LDQ4IEwyNCw0OCBDMTAuNzQ1MTY2LDQ4IDEuNjIzMjQ5ZS0xNSwzNy4yNTQ4MzQgMCwyNCBMMCwyNCBDLTEuNjIzMjQ5ZS0xNSwxMC43NDUxNjYgMTAuNzQ1MTY2LDIuNDM0ODczNWUtMTUgMjQsMCBaIiBpZD0iUmVjdGFuZ2xlLTEyIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpY29uL3BsYXkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgMTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDx1c2UgaWQ9IkZpbGwtMiIgZmlsbD0iIzE2MTYxQSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) rgba(0, 0, 0, .7) center center no-repeat;\n  background-size: auto 35%;\n  opacity: 0;\n'], ['\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyICg2Njg2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMCwxLjYwMDE2NDQyIEwwLDE4LjQwMDE2NDQgQzAsMTkuMjY3MTY0NCAwLjk1NzUsMTkuNzkyMTY0NCAxLjY4ODUsMTkuMzI1NjY0NCBMMTQuNTEsMTEuMTQ3MTY0NCBDMTUuMTc3LDEwLjcyMTE2NDQgMTUuMTg4NSw5Ljc1MTE2NDQyIDE0LjUzMTUsOS4zMDk2NjQ0MiBMMS43MTA1LDAuNjg4NjY0NDI0IEMwLjk4MTUsMC4xOTgxNjQ0MjQgMCwwLjcyMTE2NDQyNCAwLDEuNjAwMTY0NDIiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlBsYXktQnV0dG9uIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI0LDAgTDI0LDAgQzM3LjI1NDgzNCwtMi40MzQ4NzM1ZS0xNSA0OCwxMC43NDUxNjYgNDgsMjQgTDQ4LDI0IEM0OCwzNy4yNTQ4MzQgMzcuMjU0ODM0LDQ4IDI0LDQ4IEwyNCw0OCBDMTAuNzQ1MTY2LDQ4IDEuNjIzMjQ5ZS0xNSwzNy4yNTQ4MzQgMCwyNCBMMCwyNCBDLTEuNjIzMjQ5ZS0xNSwxMC43NDUxNjYgMTAuNzQ1MTY2LDIuNDM0ODczNWUtMTUgMjQsMCBaIiBpZD0iUmVjdGFuZ2xlLTEyIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpY29uL3BsYXkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgMTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDx1c2UgaWQ9IkZpbGwtMiIgZmlsbD0iIzE2MTYxQSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) rgba(0, 0, 0, .7) center center no-repeat;\n  background-size: auto 35%;\n  opacity: 0;\n']),
    _templateObject4 = _taggedTemplateLiteral(['{\n  border-radius: 3px;\n  width: 50%;\n  vertical-align: middle;\n  cursor: pointer;\n  flex: none;\n}'], ['{\n  border-radius: 3px;\n  width: 50%;\n  vertical-align: middle;\n  cursor: pointer;\n  flex: none;\n}']),
    _templateObject5 = _taggedTemplateLiteral(['{\n  flex: none;\n  position: relative;\n\n  &:hover .durationStat {\n    opacity: 0;\n    transition: .2s;\n  }\n\n  &:hover .playIcon {\n    opacity: 1;\n    transition: .2s;\n  }\n}'], ['{\n  flex: none;\n  position: relative;\n\n  &:hover .durationStat {\n    opacity: 0;\n    transition: .2s;\n  }\n\n  &:hover .playIcon {\n    opacity: 1;\n    transition: .2s;\n  }\n}']),
    _templateObject6 = _taggedTemplateLiteral(['{\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0 5px;\n}'], ['{\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0 5px;\n}']),
    _templateObject7 = _taggedTemplateLiteral(['{\n  background-color: #16161A;\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0 5px;\n}'], ['{\n  background-color: #16161A;\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0 5px;\n}']),
    _templateObject8 = _taggedTemplateLiteral(['{\n  vertical-align: middle;\n  padding-left: 15px;\n  padding-right: 0;\n  cursor: pointer;\n  flex: 1;\n  flex-basis: 0.000000001px;\n}'], ['{\n  vertical-align: middle;\n  padding-left: 15px;\n  padding-right: 0;\n  cursor: pointer;\n  flex: 1;\n  flex-basis: 0.000000001px;\n}']),
    _templateObject9 = _taggedTemplateLiteral(['{\n  &.', ' {\n    flex-direction: row-reverse;\n  }\n\n  .', ' {\n    right: 10px;\n    left: auto;\n  }\n\n  .', ' {\n    padding-right: 15px;\n    padding-left: 0;\n  }\n}'], ['{\n  &.', ' {\n    flex-direction: row-reverse;\n  }\n\n  .', ' {\n    right: 10px;\n    left: auto;\n  }\n\n  .', ' {\n    padding-right: 15px;\n    padding-left: 0;\n  }\n}']),
    _templateObject10 = _taggedTemplateLiteral(['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    bottom: 4px;\n    top: auto;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n}'], ['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    bottom: 4px;\n    top: auto;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n}']),
    _templateObject11 = _taggedTemplateLiteral(['{\n  width: 100%;\n  float: none;\n  clear: both;\n  padding: 0;\n}'], ['{\n  width: 100%;\n  float: none;\n  clear: both;\n  padding: 0;\n}']),
    _templateObject12 = _taggedTemplateLiteral(['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n}'], ['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n}']),
    _templateObject13 = _taggedTemplateLiteral(['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    opacity: 0;\n  }\n\n  .', ' {\n    display: none;\n  }\n\n  &:hover {\n    .durationStat {\n      opacity: 0;\n      transition: .2s;\n    }\n    .', ' {\n      opacity: 1;\n      transition: .2s;\n    }\n    .', ' {\n      background-color:#000;\n      opacity:0.3;\n      transition: .2s;\n    }\n  }\n}'], ['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    opacity: 0;\n  }\n\n  .', ' {\n    display: none;\n  }\n\n  &:hover {\n    .durationStat {\n      opacity: 0;\n      transition: .2s;\n    }\n    .', ' {\n      opacity: 1;\n      transition: .2s;\n    }\n    .', ' {\n      background-color:#000;\n      opacity:0.3;\n      transition: .2s;\n    }\n  }\n}']);

var _reactEmotion = require('react-emotion');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = exports.wrapper = (0, _reactEmotion.css)(_templateObject);

var wrapperThumbnail = exports.wrapperThumbnail = (0, _reactEmotion.css)(_templateObject2);

var playButton = exports.playButton = (0, _reactEmotion.css)(_templateObject3);

var imgThumbnail = exports.imgThumbnail = (0, _reactEmotion.css)(_templateObject4);

var imgThumbnailWrapper = exports.imgThumbnailWrapper = (0, _reactEmotion.css)(_templateObject5);

var overlayDetail = exports.overlayDetail = (0, _reactEmotion.css)(_templateObject6);

var durationClass = exports.durationClass = (0, _reactEmotion.css)(_templateObject7);

var detailWrapper = exports.detailWrapper = (0, _reactEmotion.css)(_templateObject8);

var rightThumbnail = exports.rightThumbnail = (0, _reactEmotion.css)(_templateObject9, wrapperThumbnail, durationClass, detailWrapper);

var bottomThumbnail = exports.bottomThumbnail = (0, _reactEmotion.css)(_templateObject10, wrapperThumbnail, imgThumbnail, durationClass, detailWrapper);

var bottomDetail = exports.bottomDetail = (0, _reactEmotion.css)(_templateObject11);

var topThumbnail = exports.topThumbnail = (0, _reactEmotion.css)(_templateObject12, wrapperThumbnail, imgThumbnail, detailWrapper);

var wrapThumbnail = exports.wrapThumbnail = (0, _reactEmotion.css)(_templateObject13, wrapperThumbnail, imgThumbnail, overlayDetail, detailWrapper, overlayDetail, imgThumbnail);