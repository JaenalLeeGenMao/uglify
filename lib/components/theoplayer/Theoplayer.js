'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = require('../../history');

var _history2 = _interopRequireDefault(_history);

var _config = require('./config');

var _style = require('./style');

var _adApi = require('./adApi');

var _adApi2 = _interopRequireDefault(_adApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Theoplayer = function (_Component) {
  _inherits(Theoplayer, _Component);

  function Theoplayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Theoplayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Theoplayer.__proto__ || Object.getPrototypeOf(Theoplayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      toggleArrow: false
    }, _this.handleGoBack = function () {
      var goBack = _history2.default.goBack;

      if (goBack) {
        goBack();
      }
    }, _this.getToggleArrow = function () {
      var toggleArrow = _this.state.toggleArrow;
      var showBackBtn = _this.props.showBackBtn;

      if (showBackBtn) {
        _this.setState({
          toggleArrow: !toggleArrow
        });
      }
    }, _this.loadDynamicStyle = function () {
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
    }, _this.initTheoPlayer = function () {
      var playerConfig = {
        libraryLocation: _config.theoLibraryLocation,
        ui: {
          fluid: true
        }
      };
      _this.theoPlayer = new window.THEOplayer.Player(_this.containerPlayer, playerConfig);
      return _this.theoPlayer;
    }, _this.configVideoPlayer = function () {
      var _this$props = _this.props,
          movieUrl = _this$props.movieUrl,
          subtitles = _this$props.subtitles,
          adsSource = _this$props.adsSource,
          skipVideoAdsOffset = _this$props.skipVideoAdsOffset,
          certificateUrl = _this$props.certificateUrl;


      var verimatrixDRMConfiguration = {
        widevine: {
          licenseAcquisitionURL: 'https://vmxapac.net:8063/?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw'
        },
        playready: {
          /* required for PlayReady playback */
          licenseAcquisitionURL: 'https://vmxapac.net:8063/?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw'
        },
        fairplay: {
          /* required for Fairplay playback */
          licenseAcquisitionURL: 'https://vmxapac.net:8063/?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw',
          certificateURL: certificateUrl
        }
      };

      var adsConfiguration = {
        sources: adsSource,
        skipOffset: skipVideoAdsOffset
      };

      _this.player.source = {
        sources: {
          src: movieUrl,
          type: certificateUrl ? 'application/dash+xml' /* sets type to Verimetrix */
          : 'application/x-mpegurl' /* sets type to HLS */
          , contentProtection: certificateUrl ? verimatrixDRMConfiguration : null
        },
        textTracks: subtitles,
        preload: 'auto'
      };

      _this.player.source.ads = adsSource ? adsConfiguration : null;
    }, _this.handleVideoPause = function () {
      if (_this.props.handleOnVideoPause) {
        _this.props.handleOnVideoPause(true, _this.player);
      }
    }, _this.handleVideoPlay = function () {
      if (_this.props.handleOnVideoPlay) {
        _this.props.handleOnVideoPlay(true, _this.player);
      }
    }, _this.handleVideoEnded = function () {
      if (_this.props.handleOnVideoPlaying) {
        _this.props.handleOnVideoPlaying(false, _this.player);
      }
      if (_this.props.handleOnVideoEnded) {
        _this.props.handleOnVideoEnded(true, _this.player);
      }
      if (_this.props.handleOnVideoPlay) {
        _this.props.handleOnVideoPlay(false, _this.player);
      }
    }, _this.handleVideoPlaying = function () {
      if (_this.props.handleOnVideoPlaying) {
        _this.props.handleOnVideoPlaying(true, _this.player);
      }
    }, _this.handleVideoTimeUpd = function (timeCallback) {
      if (_this.props.handleVideoTimeUpdate) {
        _this.props.handleVideoTimeUpdate(timeCallback.currentTime, _this.player);
      }
    }, _this.handleVideoSrcChange = function () {
      _this.player.removeEventListener('playing', _this.firstplay);
      _this.player.addEventListener('playing', _this.firstplay);
    }, _this.firstplay = function () {
      var _this$props2 = _this.props,
          adsBannerUrl = _this$props2.adsBannerUrl,
          adsBannerOptions = _this$props2.adsBannerOptions,
          resizeBannerAndCBarEnabled = _this$props2.resizeBannerAndCBarEnabled;


      if (!_this.player.ads.playing) {
        // check that we're not trying to schedule the banner during a preroll
        _this.player.removeEventListener('playing', _this.firstplay);
        if (adsBannerUrl) {
          var AdBannerOptions = _extends({
            player: _this.player,
            ipaRequestUrl: adsBannerUrl,
            resizeBannerAndCBarEnabled: resizeBannerAndCBarEnabled
          }, adsBannerOptions);
          var Advert = new _adApi2.default(AdBannerOptions);
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
    }, _this.loadFullscreenEvent = function () {
      ['', 'webkit', 'moz', 'ms'].forEach(function (prefix) {
        return document.addEventListener(prefix + 'fullscreenchange', _this.handleFullscreen, false);
      });
    }, _this.handleFullscreen = function () {
      _this.isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
      var isFullscreen = _this.state.isFullscreen;

      if (!_this.isSafari) {
        _this.setState({ isFullscreen: !isFullscreen }, function () {
          if (!isFullscreen) {
            window.screen.orientation.lock('landscape');
          } else {
            window.screen.orientation.unlock();
          }
        });
      }
    }, _this.loadDynamicScript = function () {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Theoplayer, [{
    key: 'loadTheoPlayer',
    value: function loadTheoPlayer() {
      var _props = this.props,
          autoPlay = _props.autoPlay,
          allowMutedAutoplay = _props.allowMutedAutoplay,
          poster = _props.poster,
          isMobile = _props.isMobile;

      this.player = this.initTheoPlayer();
      this.configVideoPlayer();

      if (poster) {
        this.player.poster = poster;
        this.player.autoplay = false;
      }

      if (!poster && autoPlay) {
        //if poster is set
        //video must not be autoplay
        var isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
        if (!(isSafari && isMobile)) {
          //bisa autoplay kecuali di safari mobile (ios)
          if (allowMutedAutoplay) {
            this.player.muted = true;
            this.player.loop = false;
          }
          this.player.play();
        }
      }

      this.player.addEventListener('pause', this.handleVideoPause);
      this.player.addEventListener('play', this.handleVideoPlay);
      this.player.addEventListener('ended', this.handleVideoEnded);

      this.player.addEventListener('playing', this.handleVideoPlaying);

      this.player.addEventListener('timeupdate', this.handleVideoTimeUpd);

      // the first banner ad is scheduled upon the first playing event
      this.player.addEventListener('sourcechange', this.handleVideoSrcChange);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadDynamicStyle();
      this.loadDynamicScript();
      this.loadFullscreenEvent();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.player) {
        this.player.destroy();
        if (!this.isSafari) {
          window.screen.orientation.unlock();
        }

        this.player.removeEventListener('pause', this.handleVideoPause);
        this.player.removeEventListener('play', this.handleVideoPlay);
        this.player.removeEventListener('ended', this.handleVideoEnded);
        this.player.removeEventListener('playing', this.handleVideoPlaying);
        this.player.removeEventListener('timeupdate', this.handleVideoTimeUpd);
        this.player.removeEventListener('sourcechange', this.handleVideoSrcChange);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var toggleArrow = this.state.toggleArrow;
      var _props2 = this.props,
          className = _props2.className,
          showBackBtn = _props2.showBackBtn,
          children = _props2.children;

      return _react2.default.createElement(
        'div',
        {
          className: _style.videoPlayer + ' ' + className + ' video-container video-js theoplayer-skin',
          onMouseEnter: this.getToggleArrow,
          onMouseLeave: this.getToggleArrow,
          ref: function ref(el) {
            _this2.containerPlayer = el;
          }
        },
        showBackBtn && _react2.default.createElement(
          _style.Arrow,
          { isShow: toggleArrow, onClick: this.handleGoBack },
          _react2.default.createElement('span', { className: _style.arrowIcon })
        ),
        children
      );
    }
  }]);

  return Theoplayer;
}(_react.Component);

Theoplayer.propTypes = {
  licenseKey: _propTypes2.default.string.isRequired,
  movieUrl: _propTypes2.default.string.isRequired,
  isTrailer: _propTypes2.default.bool,
  subtitles: _propTypes2.default.array,
  autoPlay: _propTypes2.default.bool,
  allowMutedAutoplay: _propTypes2.default.bool,
  showBackBtn: _propTypes2.default.bool,
  fullscreen: _propTypes2.default.bool,
  playerBtnImg: _propTypes2.default.string,
  className: _propTypes2.default.string,
  noPause: _propTypes2.default.bool,
  showAudioButton: _propTypes2.default.bool,
  showReplayButton: _propTypes2.default.bool,
  handleOnVideoLoad: _propTypes2.default.func,
  handleOnVideoPlaying: _propTypes2.default.func,
  handleOnVideoEnded: _propTypes2.default.func,
  handleOnVideoPause: _propTypes2.default.func,
  handleOnVideoPlay: _propTypes2.default.func,
  handleVideoTimeUpdate: _propTypes2.default.func,
  isMobile: _propTypes2.default.bool,
  videoType: _propTypes2.default.string,
  poster: _propTypes2.default.string,
  adsSource: _propTypes2.default.string,
  adsBannerUrl: _propTypes2.default.string,
  adsBannerOptions: _propTypes2.default.object,
  resizeBannerAndCBarEnabled: _propTypes2.default.bool,
  skipVideoAdsOffset: _propTypes2.default.number
};
Theoplayer.defaultProps = {
  licenseKey: '', //theoplayer
  autoPlay: true,
  isMobile: false,
  allowMutedAutoplay: true,
  className: '',
  fullscreen: true,
  isTrailer: false,
  showBackBtn: true,
  subtitles: [], // [{ kind: 'subtitles', src: url, label: 'id', type: 'srt' }]
  playerBtnImg: 'https://image.flaticon.com/icons/svg/60/60682.svg', //playerArrow
  noPause: false,
  showAudioButton: false,
  showReplayButton: false,
  videoType: 'application/x-mpegurl',
  poster: '',
  adsSource: null,
  adsBannerUrl: null,
  adsBannerOptions: null,
  resizeBannerAndCBarEnabled: true,
  skipVideoAdsOffset: null
};
exports.default = Theoplayer;