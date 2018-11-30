'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapThumbnail = exports.topThumbnail = exports.bottomDetail = exports.bottomThumbnail = exports.rightThumbnail = exports.detailWrapper = exports.durationClass = exports.imgThumbnail = exports.wrapperThumbnail = exports.wrapper = undefined;

var _templateObject = _taggedTemplateLiteral(['{\n  padding: 7px 0;\n  clear: both;\n}'], ['{\n  padding: 7px 0;\n  clear: both;\n}']),
    _templateObject2 = _taggedTemplateLiteral(['{\n  position: relative;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}'], ['{\n  position: relative;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}']),
    _templateObject3 = _taggedTemplateLiteral(['{\n  border-radius: 3px;\n  width: 50%;\n  vertical-align: middle;\n  cursor: pointer;\n  flex: none;\n  height: 94px;\n  width: 168px;\n}'], ['{\n  border-radius: 3px;\n  width: 50%;\n  vertical-align: middle;\n  cursor: pointer;\n  flex: none;\n  height: 94px;\n  width: 168px;\n}']),
    _templateObject4 = _taggedTemplateLiteral(['{\n  background-color: #16161A;\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0 5px;\n}'], ['{\n  background-color: #16161A;\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0 5px;\n}']),
    _templateObject5 = _taggedTemplateLiteral(['{\n  vertical-align: middle;\n  padding-left: 15px;\n  padding-right: 0;\n  cursor: pointer;\n  flex: 1;\n  flex-basis: 0.000000001px;\n}'], ['{\n  vertical-align: middle;\n  padding-left: 15px;\n  padding-right: 0;\n  cursor: pointer;\n  flex: 1;\n  flex-basis: 0.000000001px;\n}']),
    _templateObject6 = _taggedTemplateLiteral(['{\n  &.', ' {\n    flex-direction: row-reverse;\n  }\n\n  .', ' {\n    right: 10px;\n    left: auto;\n  }\n\n  .', ' {\n    padding-right: 15px;\n    padding-left: 0;\n  }\n}'], ['{\n  &.', ' {\n    flex-direction: row-reverse;\n  }\n\n  .', ' {\n    right: 10px;\n    left: auto;\n  }\n\n  .', ' {\n    padding-right: 15px;\n    padding-left: 0;\n  }\n}']),
    _templateObject7 = _taggedTemplateLiteral(['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    bottom: 4px;\n    top: auto;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n}'], ['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    bottom: 4px;\n    top: auto;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n}']),
    _templateObject8 = _taggedTemplateLiteral(['{\n  width: 100%;\n  float: none;\n  clear: both;\n  padding: 0;\n}'], ['{\n  width: 100%;\n  float: none;\n  clear: both;\n  padding: 0;\n}']),
    _templateObject9 = _taggedTemplateLiteral(['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    top: 4px;\n    bottom: auto;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n}'], ['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    top: 4px;\n    bottom: auto;\n  }\n\n  .', ' {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n}']),
    _templateObject10 = _taggedTemplateLiteral(['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    top: 4px;\n    bottom: auto;\n  }\n\n  .', ' {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n  }\n}'], ['{\n  &.', ' {\n    display: block;\n  }\n\n  .', ' {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .', ' {\n    top: 4px;\n    bottom: auto;\n  }\n\n  .', ' {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n  }\n}']);

var _reactEmotion = require('react-emotion');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = exports.wrapper = (0, _reactEmotion.css)(_templateObject);

var wrapperThumbnail = exports.wrapperThumbnail = (0, _reactEmotion.css)(_templateObject2);

var imgThumbnail = exports.imgThumbnail = (0, _reactEmotion.css)(_templateObject3);

var durationClass = exports.durationClass = (0, _reactEmotion.css)(_templateObject4);

var detailWrapper = exports.detailWrapper = (0, _reactEmotion.css)(_templateObject5);

var rightThumbnail = exports.rightThumbnail = (0, _reactEmotion.css)(_templateObject6, wrapperThumbnail, durationClass, detailWrapper);

var bottomThumbnail = exports.bottomThumbnail = (0, _reactEmotion.css)(_templateObject7, wrapperThumbnail, imgThumbnail, durationClass, detailWrapper);

var bottomDetail = exports.bottomDetail = (0, _reactEmotion.css)(_templateObject8);

var topThumbnail = exports.topThumbnail = (0, _reactEmotion.css)(_templateObject9, wrapperThumbnail, imgThumbnail, durationClass, detailWrapper);

var wrapThumbnail = exports.wrapThumbnail = (0, _reactEmotion.css)(_templateObject10, wrapperThumbnail, imgThumbnail, durationClass, detailWrapper);