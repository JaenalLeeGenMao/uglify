"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _config = require("./config");

var _style = require("./style");

var _adApi = _interopRequireDefault(require("./adApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var Theoplayer = /*#__PURE__*/function (_Component) {
  _inherits(Theoplayer, _Component);

  var _super = _createSuper(Theoplayer);

  function Theoplayer() {
    var _this;

    _classCallCheck(this, Theoplayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isFullscreen: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleGoBack", function () {
      if (_this.state.isFullscreen) {
        document.exitFullscreen();
      } else {
        document.location.href = document.referrer || '/';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadDynamicStyle", function () {
      var existingStyle = true;

      _config.theoStyle.map(function (dt) {
        var el = document.getElementById(dt.id);
        var elExist = el ? true : false;
        existingStyle = existingStyle && elExist;
      });

      if (!existingStyle) {
        _config.theoStyle.map(function (dt) {
          var head = document.getElementsByTagName('head')[0];
          var link = document.createElement('link');
          link.id = dt.id;
          link.rel = dt.rel;
          link.type = dt.type;
          link.href = dt.href;
          link.media = dt.media;
          head.appendChild(link);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "initTheoPlayer", function () {
      var playerConfig = {
        libraryLocation: _config.theoLibraryLocation,
        ui: {
          fluid: true
        }
      };
      _this.theoPlayer = new window.THEOplayer.Player(_this.containerPlayer, playerConfig);
      return _this.theoPlayer;
    });

    _defineProperty(_assertThisInitialized(_this), "configVideoPlayer", function () {
      var _this$props = _this.props,
          movieUrl = _this$props.movieUrl,
          subtitles = _this$props.subtitles,
          adsSource = _this$props.adsSource,
          skipVideoAdsOffset = _this$props.skipVideoAdsOffset,
          deviceId = _this$props.deviceId,
          drm = _this$props.drm;
      var userAgent = navigator.userAgent;
      var isSafari = /.*Version.*Safari.*/.test(userAgent);
      var trident = userAgent.indexOf('Trident/') >= 0;
      var edge = userAgent.indexOf('Edge/') >= 0;
      var qs = drm.widevine.licenseUrl.includes('?videoId') ? '&deviceId=' + deviceId : '?deviceId=' + deviceId;
      var verimatrixDRMConfiguration;

      if (drm) {
        verimatrixDRMConfiguration = {
          fairplay: {
            licenseAcquisitionURL: drm.fairplay ? "".concat(drm.fairplay.licenseUrl).concat(qs) : '',
            certificateURL: drm.fairplay ? "".concat(drm.fairplay.certificateUrl).concat(qs) : ''
          },
          playready: {
            licenseAcquisitionURL: drm.playready ? "".concat(drm.playready.licenseUrl).concat(qs) : ''
          },
          widevine: {
            licenseAcquisitionURL: drm.widevine ? "".concat(drm.widevine.licenseUrl).concat(qs) : ''
          }
        };
      }

      var drmStreamUrl = '';

      if (drm) {
        if (isSafari) {
          drmStreamUrl = drm.fairplay.streamUrl ? drm.fairplay.streamUrl : '';
        } else if (trident || edge) {
          drmStreamUrl = drm.playready.streamUrl ? drm.playready.streamUrl : '';
        } else {
          drmStreamUrl = drm.widevine.streamUrl ? drm.widevine.streamUrl : '';
        }
      }

      var responseInterceptor = function responseInterceptor(response) {
        // console.log("response.url", response.url)
        // console.log("verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL", verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL)
        // console.log("TEST", response.url == verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL)
        // if (response.url.indexOf('') !== -1) {
        // var laurl = "http://ec2-54-169-140-196.ap-southeast-1.compute.amazonaws.com:8064/fpsa/v1.0/?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw";
        if (response.url == verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL) {
          // console.log("body", body)
          var body = response.body;
          var key = JSON.parse(body).ckc; // console.log("key", key)

          response.respondWith({
            body: key
          });
        }
      };

      _this.player.source = {
        sources: {
          src: drmStreamUrl ? drmStreamUrl : movieUrl,
          contentProtection: drmStreamUrl ? verimatrixDRMConfiguration : null
        },
        ads: [{
          sources: adsSource ? adsSource : null,
          skipOffset: skipVideoAdsOffset
        }],
        persistVolume: true,
        textTracks: subtitles,
        preload: 'auto'
      };
      _this.player.volume = _this.props.volume;
      _this.player.muted = _this.props.muted;

      _this.player.network.addResponseInterceptor(responseInterceptor);
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoPause", function () {
      if (_this.props.handleOnVideoPause) {
        _this.props.handleOnVideoPause(true, _this.player);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoPlay", function () {
      if (_this.props.handleOnVideoPlay) {
        _this.props.handleOnVideoPlay(true, _this.player);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoEnded", function () {
      if (_this.props.handleOnVideoPlaying) {
        _this.props.handleOnVideoPlaying(false, _this.player);
      }

      if (_this.props.handleOnVideoEnded) {
        _this.props.handleOnVideoEnded(true, _this.player);
      }

      if (_this.props.handleOnVideoPlay) {
        _this.props.handleOnVideoPlay(false, _this.player);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoPlaying", function () {
      if (_this.props.handleOnVideoPlaying) {
        _this.props.handleOnVideoPlaying(true, _this.player);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoTimeUpd", function (timeCallback) {
      if (_this.props.handleVideoTimeUpdate) {
        _this.props.handleVideoTimeUpdate(timeCallback.currentTime, _this.player);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoSrcChange", function () {
      _this.player.removeEventListener('playing', _this.firstplay);

      _this.player.addEventListener('playing', _this.firstplay);
    });

    _defineProperty(_assertThisInitialized(_this), "handleReadyStateChange", function () {
      if (_this.props.handleOnReadyStateChange) {
        _this.props.handleOnReadyStateChange(_this.player);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleVideoVolumeChange", function () {
      if (_this.props.handleOnVideoVolumeChange) {
        _this.props.handleOnVideoVolumeChange(_this.player);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "firstplay", function () {
      var _this$props2 = _this.props,
          adsBannerUrl = _this$props2.adsBannerUrl,
          adsBannerOptions = _this$props2.adsBannerOptions,
          resizeBannerAndCBarEnabled = _this$props2.resizeBannerAndCBarEnabled;

      if (!_this.player.ads.playing) {
        // check that we're not trying to schedule the banner during a preroll
        _this.player.removeEventListener('playing', _this.firstplay);

        if (adsBannerUrl) {
          var AdBannerOptions = _objectSpread({
            player: _this.player,
            ipaRequestUrl: adsBannerUrl,
            resizeBannerAndCBarEnabled: resizeBannerAndCBarEnabled
          }, adsBannerOptions);

          var Advert = new _adApi["default"](AdBannerOptions);
          Advert.init();
        }
        /*
        the first param (player) is the THEOplayer instance,
        the second param (adURL) is the requestURL,
        the third param (0) is the skipOffset, (if you set it to 5, you can close the ad after 5 seconds),
        the fourth param (0) is the timeOffset, (if you set it to 5, the banner appears after 5 seconds)
        */
        //showBannerAdBelowPlayer(player, adURL, 0, 0);

      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadFullscreenEvent", function () {
      ['', 'webkit', 'moz', 'ms'].forEach(function (prefix) {
        return document.addEventListener(prefix + 'fullscreenchange', _this.handleFullscreen, false);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFullscreen", function () {
      var isFullscreen = _this.state.isFullscreen;
      var userAgent = navigator.userAgent;
      var isSafari = /.*Version.*Safari.*/.test(userAgent);
      var msie = userAgent.indexOf('MSIE ') >= 0;
      var trident = userAgent.indexOf('Trident/') >= 0;

      if (!isSafari && !msie && !trident) {
        _this.setState({
          isFullscreen: !isFullscreen
        }, function () {
          if (!isFullscreen) {
            window.screen.orientation.lock('landscape')["catch"](function (error) {});
          } else {
            window.screen.orientation.unlock();
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "loadDynamicScript", function () {
      var existingScript = true;

      _config.theoScripts.map(function (dt) {
        var el = document.getElementById(dt.id);
        var elExist = el ? true : false;
        existingScript = existingScript && elExist;
      });

      if (!existingScript) {
        var scriptCount = _config.theoScripts.length;
        var loadedScriptCount = 0;

        _config.theoScripts.map(function (dt) {
          var script = document.createElement('script');
          script.src = dt.src;
          script.id = dt.id;
          document.body.appendChild(script);

          script.onload = function () {
            loadedScriptCount += 1;

            if (loadedScriptCount >= scriptCount) {
              _this.loadTheoPlayer();

              if (_this.props.handleOnVideoLoad) {
                _this.props.handleOnVideoLoad(_this.player);
              }
            }
          };
        });
      } else {
        _this.loadTheoPlayer();
      }

      return false;
    });

    return _this;
  }

  _createClass(Theoplayer, [{
    key: "loadTheoPlayer",
    value: function loadTheoPlayer() {
      var _this$props3 = this.props,
          autoPlay = _this$props3.autoPlay,
          allowMutedAutoplay = _this$props3.allowMutedAutoplay,
          poster = _this$props3.poster,
          isMobile = _this$props3.isMobile;
      this.player = this.initTheoPlayer();
      this.configVideoPlayer();

      if (poster) {
        this.player.poster = poster;
        this.player.autoplay = false;
      }

      if (!poster && autoPlay) {
        //if poster is set
        //video must not be autoplay
        if (allowMutedAutoplay) {
          this.player.muted = true;
          this.player.loop = false;
        } // this.player.play();


        this.player.autoplay = true; // const isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
        // if (!(isSafari && isMobile)) {
        //   //bisa autoplay kecuali di safari mobile (ios)
        //   if (allowMutedAutoplay) {
        //     this.player.muted = true;
        //     this.player.loop = false;
        //   }
        //   // this.player.play();
        //   this.player.autoplay = true;
        // } else {
        //   if (allowMutedAutoplay) {
        //     this.player.muted = true;
        //     this.player.loop = false;
        //   }
        //   this.player.autoplay = true;
        // }
      }

      this.player.addEventListener('pause', this.handleVideoPause);
      this.player.addEventListener('play', this.handleVideoPlay);
      this.player.addEventListener('ended', this.handleVideoEnded);
      this.player.addEventListener('playing', this.handleVideoPlaying);
      this.player.addEventListener('timeupdate', this.handleVideoTimeUpd); // the first banner ad is scheduled upon the first playing event

      this.player.addEventListener('sourcechange', this.handleVideoSrcChange);
      this.player.addEventListener('readystatechange', this.handleReadyStateChange);
      this.player.addEventListener('volumechange', this.handleVideoVolumeChange);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadDynamicStyle();
      this.loadDynamicScript();
      this.loadFullscreenEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.player) {
        this.player.destroy();
        var userAgent = navigator.userAgent;
        var isSafari = /.*Version.*Safari.*/.test(userAgent);
        var msie = userAgent.indexOf('MSIE ') >= 0;
        var trident = userAgent.indexOf('Trident/') >= 0;

        if (!isSafari && !msie && !trident) {
          window.screen.orientation.unlock();
        }

        this.player.removeEventListener('pause', this.handleVideoPause);
        this.player.removeEventListener('play', this.handleVideoPlay);
        this.player.removeEventListener('ended', this.handleVideoEnded);
        this.player.removeEventListener('playing', this.handleVideoPlaying);
        this.player.removeEventListener('timeupdate', this.handleVideoTimeUpd);
        this.player.removeEventListener('sourcechange', this.handleVideoSrcChange);
        this.player.removeEventListener('volumechange', this.handleVideoVolumeChange);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var isFullscreen = this.state.isFullscreen;
      var _this$props4 = this.props,
          className = _this$props4.className,
          showBackBtn = _this$props4.showBackBtn,
          children = _this$props4.children;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style.videoPlayer, " ").concat(className, " video-container video-js theoplayer-skin"),
        ref: function ref(el) {
          _this2.containerPlayer = el;
        }
      }, showBackBtn && /*#__PURE__*/_react["default"].createElement("div", {
        className: _style.arrowContainer,
        onClick: this.handleGoBack
      }, !isFullscreen && /*#__PURE__*/_react["default"].createElement("span", {
        className: _style.arrowIcon
      }), isFullscreen && /*#__PURE__*/_react["default"].createElement("span", {
        className: _style.closeIcon
      })), children);
    }
  }]);

  return Theoplayer;
}(_react.Component);

_defineProperty(Theoplayer, "propTypes", {
  movieUrl: _propTypes["default"].string.isRequired,
  subtitles: _propTypes["default"].array,
  autoPlay: _propTypes["default"].bool,
  allowMutedAutoplay: _propTypes["default"].bool,
  showBackBtn: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  handleOnVideoLoad: _propTypes["default"].func,
  handleOnVideoPlaying: _propTypes["default"].func,
  handleOnVideoEnded: _propTypes["default"].func,
  handleOnVideoPause: _propTypes["default"].func,
  handleOnVideoPlay: _propTypes["default"].func,
  handleOnVideoVolumeChange: _propTypes["default"].func,
  handleVideoTimeUpdate: _propTypes["default"].func,
  isMobile: _propTypes["default"].bool,
  poster: _propTypes["default"].string,
  adsSource: _propTypes["default"].string,
  adsBannerUrl: _propTypes["default"].string,
  adsBannerOptions: _propTypes["default"].object,
  resizeBannerAndCBarEnabled: _propTypes["default"].bool,
  skipVideoAdsOffset: _propTypes["default"].number,
  deviceId: _propTypes["default"].string,
  drm: _propTypes["default"].object,
  handleOnReadyStateChange: _propTypes["default"].func
});

_defineProperty(Theoplayer, "defaultProps", {
  autoPlay: true,
  isMobile: false,
  allowMutedAutoplay: true,
  className: '',
  showBackBtn: true,
  subtitles: [],
  // [{ kind: 'subtitles', src: url, label: 'id', type: 'srt' }]
  poster: '',
  adsSource: null,
  adsBannerUrl: null,
  adsBannerOptions: null,
  resizeBannerAndCBarEnabled: true,
  skipVideoAdsOffset: null,
  deviceId: '',
  volume: 1,
  muted: false,
  drm: null
});

var _default = Theoplayer;
exports["default"] = _default;