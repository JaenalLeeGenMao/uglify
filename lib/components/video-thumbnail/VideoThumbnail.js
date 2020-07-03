"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lazyloadLegacy = _interopRequireDefault(require("../lazyload-legacy"));

var _propTypes = require("prop-types");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* PROPS:
 * children, className, thumbnailUrl
 * thumbnailPosition (image position) = top, bottom, left, right (by default left), wrap
 * duration (in second)
 */
var VideoThumbnail = /*#__PURE__*/function (_Component) {
  _inherits(VideoThumbnail, _Component);

  var _super = _createSuper(VideoThumbnail);

  function VideoThumbnail() {
    var _this;

    _classCallCheck(this, VideoThumbnail);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "getDurationFormatted", function () {
      var duration = _this.props.duration;
      var durationTotal = duration;
      var sec = durationTotal % 60;
      durationTotal -= sec;
      var minRemain = Math.floor(durationTotal / 60);
      var min = minRemain % 60;
      var hour = 0;

      if (minRemain > 60) {
        hour = (minRemain - min) / 60;
      }

      return "\n    ".concat(hour > 0 ? ('0' + hour).slice(-2) + ':' : '').concat(min > 0 ? ('0' + min).slice(-2) + ':' : '').concat(sec > 0 ? ('0' + sec).slice(-2) : '00', "\n    ");
    });

    return _this;
  }

  _createClass(VideoThumbnail, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          thumbnailPosition = _this$props.thumbnailPosition,
          duration = _this$props.duration,
          className = _this$props.className,
          thumbnailUrl = _this$props.thumbnailUrl,
          thumbnailStyle = _this$props.thumbnailStyle,
          _this$props$onErrorSh = _this$props.onErrorShowDefault,
          onErrorShowDefault = _this$props$onErrorSh === void 0 ? false : _this$props$onErrorSh,
          _this$props$imgWrappe = _this$props.imgWrapperClassName,
          imgWrapperClassName = _this$props$imgWrappe === void 0 ? '' : _this$props$imgWrappe,
          _this$props$errorImgC = _this$props.errorImgClassName,
          errorImgClassName = _this$props$errorImgC === void 0 ? '' : _this$props$errorImgC,
          detailStyle = _this$props.detailStyle;
      var thumbnailPos = '';

      if (thumbnailPosition === 'right') {
        thumbnailPos = _style.rightThumbnail;
      } else if (thumbnailPosition === 'top') {
        thumbnailPos = _style.topThumbnail;
      } else if (thumbnailPosition === 'bottom') {
        thumbnailPos = _style.bottomThumbnail;
      } else if (thumbnailPosition === 'wrap') {
        thumbnailPos = _style.wrapThumbnail;
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style.wrapper, " ").concat(className || '')
      }, thumbnailPosition === 'bottom' && /*#__PURE__*/_react["default"].createElement(_lazyloadLegacy["default"], {
        className: "".concat(_style.detailWrapper, "  ").concat(_style.bottomDetail),
        onErrorShowDefault: onErrorShowDefault,
        containerStyle: detailStyle,
        errorImgClassName: errorImgClassName
      }, children), /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style.wrapperThumbnail, " ").concat(thumbnailPos)
      }, /*#__PURE__*/_react["default"].createElement(_lazyloadLegacy["default"], {
        src: thumbnailUrl,
        className: "".concat(_style.imgThumbnail),
        style: thumbnailStyle,
        onErrorShowDefault: onErrorShowDefault,
        errorImgClassName: errorImgClassName,
        containerClassName: "".concat(_style.imgThumbnailWrapper, " ").concat(imgWrapperClassName)
      }, thumbnailPosition === 'wrap' && /*#__PURE__*/_react["default"].createElement("div", {
        className: _style.overlayDetail
      }, " ", children, " "), duration && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style.durationClass, " durationStat")
      }, this.getDurationFormatted()), thumbnailPosition !== 'wrap' && /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style.playButton, " playIcon")
      })), thumbnailPosition !== 'bottom' && /*#__PURE__*/_react["default"].createElement(_lazyloadLegacy["default"], {
        containerClassName: _style.detailWrapper,
        containerStyle: detailStyle,
        onErrorShowDefault: onErrorShowDefault,
        errorImgClassName: errorImgClassName
      }, children)));
    }
  }]);

  return VideoThumbnail;
}(_react.Component);

_defineProperty(VideoThumbnail, "propTypes", {
  onClick: _propTypes.func,
  children: _propTypes.node
});

_defineProperty(VideoThumbnail, "defaultProps", {
  onClick: function onClick() {},
  children: null
});

var _default = VideoThumbnail;
exports["default"] = _default;