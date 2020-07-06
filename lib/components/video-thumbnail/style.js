"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapThumbnail = exports.topThumbnail = exports.bottomDetail = exports.bottomThumbnail = exports.rightThumbnail = exports.detailWrapper = exports.durationClass = exports.overlayDetail = exports.imgThumbnailWrapper = exports.imgThumbnail = exports.playButton = exports.wrapperThumbnail = exports.wrapper = void 0;

var _reactEmotion = require("react-emotion");

function _templateObject13() {
  var data = _taggedTemplateLiteral(["{\n  &.", " {\n    display: block;\n  }\n\n  .", " {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .", " {\n    display: none;\n  }\n\n  &:hover {\n    .durationStat {\n      opacity: 0;\n      transition: .2s;\n    }\n    .", " {\n      opacity: 1;\n      transition: .2s;\n    }\n    .", " {\n      background-color:#000;\n      opacity:0.3;\n      transition: .2s;\n    }\n  }\n}"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["{\n  &.", " {\n    display: block;\n  }\n\n  .", " {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .", " {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n}"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["{\n  width: 100%;\n  float: none;\n  clear: both;\n  padding: 0;\n}"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["{\n  &.", " {\n    display: block;\n  }\n\n  .", " {\n    width: 100%;\n    height: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n  .", " {\n    bottom: 4px;\n    top: auto;\n  }\n\n  .", " {\n    width: 100%;\n    float: none;\n    clear: both;\n    padding: 0;\n  }\n\n}"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["{\n  &.", " {\n    flex-direction: row-reverse;\n  }\n\n  .", " {\n    right: 10px;\n    left: auto;\n  }\n\n  .", " {\n    padding-right: 15px;\n    padding-left: 0;\n  }\n}"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["{\n  vertical-align: middle;\n  padding-left: 15px;\n  padding-right: 0;\n  cursor: pointer;\n  flex: 1;\n  flex-basis: 0.000000001px;\n  align-self: center;\n}"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["{\n  background-color: #16161A;\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0 5px;\n}"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["{\n  font-size: 1.3rem;\n  font-weight: bold;\n  line-height: 2.2rem;\n  position: absolute;\n  top: auto;\n  bottom: 4px;\n  left: 10px;\n  right: auto;\n  border-radius: 3px;\n  padding: 0;\n  box-sizing: border-box;\n}"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["{\n  flex: none;\n  position: relative;\n\n  // &:hover .durationStat {\n  //   opacity: 0;\n  //   transition: .2s;\n  // }\n}"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["{\n  border-radius: 3px;\n  width: 50%;\n  vertical-align: middle;\n  cursor: pointer;\n  flex: none;\n}"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background: url(data:image/png;base64,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) center center no-repeat;\n  background-size: auto 35%;\n  opacity: 0.6;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["{\n  position: relative;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  overflow: hidden;\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["{\n  display: block;\n  clear: both;\n\n  &:hover .playIcon {\n    opacity: 1;\n    transition: .2s;\n  }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = (0, _reactEmotion.css)(_templateObject());
exports.wrapper = wrapper;
var wrapperThumbnail = (0, _reactEmotion.css)(_templateObject2());
exports.wrapperThumbnail = wrapperThumbnail;
var playButton = (0, _reactEmotion.css)(_templateObject3());
exports.playButton = playButton;
var imgThumbnail = (0, _reactEmotion.css)(_templateObject4());
exports.imgThumbnail = imgThumbnail;
var imgThumbnailWrapper = (0, _reactEmotion.css)(_templateObject5());
exports.imgThumbnailWrapper = imgThumbnailWrapper;
var overlayDetail = (0, _reactEmotion.css)(_templateObject6());
exports.overlayDetail = overlayDetail;
var durationClass = (0, _reactEmotion.css)(_templateObject7());
exports.durationClass = durationClass;
var detailWrapper = (0, _reactEmotion.css)(_templateObject8());
exports.detailWrapper = detailWrapper;
var rightThumbnail = (0, _reactEmotion.css)(_templateObject9(), wrapperThumbnail, durationClass, detailWrapper);
exports.rightThumbnail = rightThumbnail;
var bottomThumbnail = (0, _reactEmotion.css)(_templateObject10(), wrapperThumbnail, imgThumbnail, durationClass, detailWrapper);
exports.bottomThumbnail = bottomThumbnail;
var bottomDetail = (0, _reactEmotion.css)(_templateObject11());
exports.bottomDetail = bottomDetail;
var topThumbnail = (0, _reactEmotion.css)(_templateObject12(), wrapperThumbnail, imgThumbnail, detailWrapper);
exports.topThumbnail = topThumbnail;
var wrapThumbnail = (0, _reactEmotion.css)(_templateObject13(), wrapperThumbnail, imgThumbnail, detailWrapper, overlayDetail, imgThumbnail);
exports.wrapThumbnail = wrapThumbnail;