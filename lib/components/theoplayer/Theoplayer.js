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

// let player;
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
      toggleArrow: false,
      isMuted: _this.props.allowMutedAutoplay
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
      if (toggleArrow) {
        _this.setState({
          toggleArrow: true
        }, function () {
          setTimeout(function () {
            _this.setState({ toggleArrow: false });
          }, 5000);
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
    }, _this.configTheoPlayer = function () {
      var playerConfig = {
        libraryLocation: _config.theoLibraryLocation,
        ui: {
          fluid: true
        }
      };
      _this.theoPlayer = new window.THEOplayer.Player(_this.containerPlayer, playerConfig);
      return _this.theoPlayer;
    }, _this.configVideoPlayer = function () {
      _this.player.source = {
        sources: [{
          src: _this.props.movieUrl,
          type: 'application/x-mpegurl' // sets type to HLS
        }],
        textTracks: _this.props.theoConfig
      };
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
              // if(this.props.handleOnVideoLoad) {
              //   this.props.handleOnVideoLoad(this.player);
              // }
            }
          };
        });
      } else {
        _this.loadTheoPlayer();
      }
      return false;
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
    }, _this.handleAudioBtn = function () {
      var isMuted = _this.state.isMuted;
      // if (showBackBtn) {

      _this.setState({
        isMuted: !isMuted
      });
      // }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Theoplayer, [{
    key: 'handleScriptInject',
    value: function handleScriptInject(_ref2) {
      var _this2 = this;

      var scriptTags = _ref2.scriptTags;

      if (scriptTags) {
        scriptTagCount = scriptTags.length;
        scriptTags.map(function (tag) {
          tag.onload = _this2.handleOnLoad;
        });
      }
    }
  }, {
    key: 'loadTheoPlayer',
    value: function loadTheoPlayer() {
      var _props = this.props,
          autoPlay = _props.autoPlay,
          noPause = _props.noPause,
          allowMutedAutoplay = _props.allowMutedAutoplay;


      this.player = this.configTheoPlayer();
      this.configVideoPlayer();
      this.player.muted = true;
      if (autoPlay) {
        if (allowMutedAutoplay) {
          this.player.muted = true;
        }
        this.player.play();
      }
      var that = this;
      this.player.addEventListener('pause', function () {
        if (noPause) {
          that.player.play();
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
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.player) {
        window.screen.orientation.unlock();
        this.player.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          toggleArrow = _state.toggleArrow,
          isMuted = _state.isMuted;
      var _props2 = this.props,
          className = _props2.className,
          showBackBtn = _props2.showBackBtn,
          showAudioButton = _props2.showAudioButton;

      return _react2.default.createElement(
        'div',
        {
          className: _style.videoPlayer + ' ' + className + ' video-container video-js theoplayer-skin',
          onMouseEnter: this.getToggleArrow,
          onMouseMove: this.getToggleArrow,
          onMouseLeave: this.getToggleArrow,
          ref: function ref(el) {
            _this3.containerPlayer = el;
          }
        },
        showBackBtn && _react2.default.createElement(
          _style.Arrow,
          { isShow: toggleArrow, onClick: this.handleGoBack },
          _react2.default.createElement('span', { className: _style.arrowIcon })
        ),
        showAudioButton && _react2.default.createElement(
          _style.AudioButton,
          { onClick: this.handleAudioBtn },
          isMuted ? 'MUTED' : 'SOUND'
        )
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
  handleOnVideoLoad: _propTypes2.default.func,
  showAudioButton: _propTypes2.default.bool
};
Theoplayer.defaultProps = {
  licenseKey: '', //theoplayer
  autoPlay: true,
  allowMutedAutoplay: true,
  className: '',
  fullscreen: true,
  isTrailer: false,
  showBackBtn: true,
  playerBtnImg: 'https://image.flaticon.com/icons/svg/60/60682.svg', //playerArrow
  noPause: false,
  handleOnVideoLoad: function handleOnVideoLoad() {},
  showAudioButton: false
};
exports.default = Theoplayer;