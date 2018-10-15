'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrow_show = exports.arrow = undefined;

var _templateObject = _taggedTemplateLiteral(['{\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: relative;\n  top: 2%;\n  left: 2%;\n  opacity: 0.5;\n  border: 3px solid white;\n  display: none;\n  padding: 10px;\n  img {\n    width: 100%;\n  }\n}'], ['{\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: relative;\n  top: 2%;\n  left: 2%;\n  opacity: 0.5;\n  border: 3px solid white;\n  display: none;\n  padding: 10px;\n  img {\n    width: 100%;\n  }\n}']),
    _templateObject2 = _taggedTemplateLiteral(['{\n  display: block;\n  cursor: pointer;\n}'], ['{\n  display: block;\n  cursor: pointer;\n}']);

var _reactEmotion = require('react-emotion');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var arrow = exports.arrow = (0, _reactEmotion.css)(_templateObject);

var arrow_show = exports.arrow_show = (0, _reactEmotion.css)(_templateObject2);