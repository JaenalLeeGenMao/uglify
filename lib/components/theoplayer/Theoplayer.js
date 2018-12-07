'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _history = require('../../history');

var _history2 = _interopRequireDefault(_history);

var _config = require('./config');

var _style = require('./style');

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
          videoType = _this$props.videoType,
          movieUrl = _this$props.movieUrl,
          theoConfig = _this$props.theoConfig,
          adsSource = _this$props.adsSource;

      _this.player.source = {
        sources: [{
          src: movieUrl,
          type: videoType // sets type to HLS
        }],
        // ads: [
        //   {
        //     sources: 'https://cdn-mxs-01.akamaized.net/Content/HLS/VOD/7711b7f2-bc2e-4730-9038-595c18eb2279/c0de6451-cd85-84e0-fcd7-ea805ff7a6f2/index.m3u8?hdnts=st=1544005334~exp=1544008934~acl=/*~hmac=7ae75d09ea7f0c322fcf4bf4de2175f930acc15c468bccc12de57140708f1737',
        //   }
        // ],
        textTracks: theoConfig
        // preload: 'auto'
      };
    }, _this.loadFullscreenEvent = function () {
      ['', 'webkit', 'moz', 'ms'].forEach(function (prefix) {
        return document.addEventListener(prefix + 'fullscreenchange', _this.handleFullscreen, false);
      });
    }, _this.handleFullscreen = function () {
      var isFullscreen = _this.state.isFullscreen;

      _this.setState({ isFullscreen: !isFullscreen }, function () {
        if (!isFullscreen) {
          window.screen.orientation.lock('landscape');
        } else {
          window.screen.orientation.unlock();
        }
      });
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
          handleOnVideoPlaying = _props.handleOnVideoPlaying,
          handleOnVideoEnded = _props.handleOnVideoEnded,
          poster = _props.poster;

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
        }
        this.player.play();
      }
      var that = this;
      this.player.addEventListener('pause', function () {
        if (handleOnVideoPause) {
          handleOnVideoPause(true, that.player);
        }
      });

      this.player.addEventListener('play', function () {
        if (handleOnVideoPlay) {
          handleOnVideoPlay(true, that.player);
        }
      });

      this.player.addEventListener('ended', function () {
        if (handleOnVideoPlaying) {
          handleOnVideoPlaying(false, that.player);
        }
        if (handleOnVideoEnded) {
          handleOnVideoEnded(true, that.player);
        }
        if (handleOnVideoPlay) {
          handleOnVideoPlay(false, that.player);
        }
      });

      this.player.addEventListener('playing', function () {
        // console.log("Width:", that.player.videoWidth,  that.player.videoHeight)
        if (handleOnVideoPlaying) {
          handleOnVideoPlaying(true, that.player);
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadDynamicStyle();
      this.loadDynamicScript();
      this.loadFullscreenEvent();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadDynamicStyle();
      this.loadDynamicScript();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.player) {
        this.player.destroy();
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
  theoConfig: _propTypes2.default.array,
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
  isMobile: _propTypes2.default.bool,
  videoType: _propTypes2.default.string,
  poster: _propTypes2.default.string,
  adsSource: _propTypes2.default.string
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
  playerBtnImg: 'https://image.flaticon.com/icons/svg/60/60682.svg', //playerArrow
  noPause: false,
  showAudioButton: false,
  showReplayButton: false,
  handleOnVideoLoad: function handleOnVideoLoad() {},
  handleOnVideoPlaying: function handleOnVideoPlaying() {},
  handleOnVideoEnded: function handleOnVideoEnded() {},
  handleOnVideoPause: function handleOnVideoPause() {},
  handleOnVideoPlay: function handleOnVideoPlay() {},
  videoType: 'application/x-mpegurl',
  poster: '',
  adsSource: null
};
exports.default = Theoplayer;