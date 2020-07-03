"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseXml2Obj = void 0;

var _xml2js = _interopRequireDefault(require("xml2js"));

var _get2 = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var parseXml2Obj = function parseXml2Obj(data) {
  return _xml2js["default"].parseStringPromise(data.toString()
  /*, options */
  ).then(function (result) {
    // console.dir(result);
    var ads = (0, _get2["default"])(result, "['vmap:VMAP']['vmap:AdBreak']", []);
    ads = ads.map(function (eachAds) {
      var id = (0, _get2["default"])(eachAds, "['vmap:AdSource']['0']['vmap:VASTAdData']['0']['VAST']['0']['Ad']['0']['$']['id']", '');
      var impression = (0, _get2["default"])(eachAds, "['vmap:AdSource']['0']['vmap:VASTAdData']['0']['VAST']['0']['Ad']['0']['InLine']['0']['Impression']['0']", '');
      var creatives = (0, _get2["default"])(eachAds, "['vmap:AdSource']['0']['vmap:VASTAdData']['0']['VAST']['0']['Ad']['0']['InLine']['0']['Creatives']['0']['Creative']['0']['Linear']['0']", '');
      return _objectSpread(_objectSpread({}, eachAds.$), {}, {
        id: id,
        impression: impression,
        durations: (0, _get2["default"])(creatives, 'Duration', []),
        mediafile: (0, _get2["default"])(creatives, "['MediaFiles']['0']['MediaFile']['0']['_']", ''),
        isPlayed: false
      });
    });
    return ads;
  })["catch"](function (err) {
    // Failed
    console.log('failed', err);
    return [];
  });
};

exports.parseXml2Obj = parseXml2Obj;