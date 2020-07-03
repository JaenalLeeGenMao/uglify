"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _link = _interopRequireDefault(require("../../link"));

var _lazyload = _interopRequireDefault(require("../../lazyload"));

var _history = _interopRequireDefault(require("../../../history"));

var _countDown = _interopRequireDefault(require("./count-down"));

var _ellipsis = require("../../../utils/ellipsis");

var _upcomingVideo = require("./upcoming-video.style");

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

var UpcomingVideo = /*#__PURE__*/function (_Component) {
  _inherits(UpcomingVideo, _Component);

  var _super = _createSuper(UpcomingVideo);

  function UpcomingVideo() {
    var _this;

    _classCallCheck(this, UpcomingVideo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      adsHeight: 0,
      adsWidth: 0,
      isFullscreenMobile: false
    });

    _defineProperty(_assertThisInitialized(_this), "cancelUpcVideo", function (e) {
      if (_this.props.handleCancelVideo) {
        _this.props.handleCancelVideo();
      }

      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "redirectToNextVideo", function (videoId) {
      _history["default"].push("/watch?v=".concat(videoId, "&autoplay=1"));
    });

    return _this;
  }

  _createClass(UpcomingVideo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _ellipsis.setMultilineEllipsis)('upc-video-title');
      (0, _ellipsis.setMultilineEllipsis)('upc-video-desc');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          data = _this$props.data,
          _this$props$isMobile = _this$props.isMobile,
          isMobile = _this$props$isMobile === void 0 ? false : _this$props$isMobile,
          _this$props$startInte = _this$props.startInterval,
          startInterval = _this$props$startInte === void 0 ? 20 : _this$props$startInte;
      var _this$state = this.state,
          adsWidth = _this$state.adsWidth,
          adsHeight = _this$state.adsHeight,
          isFullscreenMobile = _this$state.isFullscreenMobile;
      var playerWidth = adsWidth ? "".concat(adsWidth, "px") : '100%';
      var containerBottom = isMobile && !isFullscreenMobile ? {} : {
        bottom: '0'
      }; //{ bottom: `calc(${adsHeight}px + 7rem)` }

      var thumbnail = (0, _get2["default"])(data, "images.cover[".concat(isMobile ? 'landscape' : 'portrait'), '');
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: _upcomingVideo.playerContainer,
        style: {
          width: playerWidth
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'container',
        style: containerBottom
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'poster'
      }, /*#__PURE__*/_react["default"].createElement(_lazyload["default"], {
        src: thumbnail
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'content'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'title'
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "upc-video-title"
      }, data.title)), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'desc'
      }, /*#__PURE__*/_react["default"].createElement("p", {
        className: "upc-video-desc"
      }, data.shortDescription)), !isMobile && /*#__PURE__*/_react["default"].createElement("div", {
        className: 'link'
      }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
        className: 'play',
        to: "/watch?v=".concat(data.id, "&autoplay=1")
      }, /*#__PURE__*/_react["default"].createElement(_countDown["default"], {
        startSecond: startInterval,
        onTimeFinish: function onTimeFinish() {
          return _this2.redirectToNextVideo(data.id);
        }
      })), /*#__PURE__*/_react["default"].createElement(_link["default"], {
        className: 'close',
        onClick: this.cancelUpcVideo
      }, "Close"))), isMobile && /*#__PURE__*/_react["default"].createElement("div", {
        className: 'link'
      }, /*#__PURE__*/_react["default"].createElement(_link["default"], {
        className: 'play',
        to: "/watch?v=".concat(data.id, "&autoplay=1")
      }, /*#__PURE__*/_react["default"].createElement(_countDown["default"], {
        isMobile: isMobile,
        startSecond: startInterval,
        onTimeFinish: function onTimeFinish() {
          return _this2.redirectToNextVideo(data.id);
        }
      })), /*#__PURE__*/_react["default"].createElement(_link["default"], {
        className: 'close',
        onClick: this.cancelUpcVideo
      }, "Close"))));
    }
  }]);

  return UpcomingVideo;
}(_react.Component);

var _default = UpcomingVideo;
exports["default"] = _default;