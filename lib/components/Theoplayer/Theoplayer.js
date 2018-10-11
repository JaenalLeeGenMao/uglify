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

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _arrowback = require('./assets/arrowback.png');

var _arrowback2 = _interopRequireDefault(_arrowback);

var _style = require('./style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Layout from '@components/Molalayout';


var scriptLoadedCount = 0;
var scriptTagCount = 0;

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
      toggleArrow: ''
    }, _this.handleGoBack = function () {
      var goBack = _history2.default.goBack;

      if (goBack) {
        goBack();
      }
    }, _this.getToggleArrow = function () {
      var toggleArrow = _this.state.toggleArrow;
      var showBackBtn = _this.props.showBackBtn;

      if (showBackBtn) {
        console.log("MASUK SHOWBACK", showBackBtn);
        _this.setState({
          toggleArrow: toggleArrow === '' ? _style.arrow_show : ''
        });
      }
    }, _this.handleOnLoad = function () {
      var autoPlay = _this.props.autoPlay;

      scriptLoadedCount += 1;
      if (scriptLoadedCount === scriptTagCount) {
        var playerConfig = {
          libraryLocation: '//cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/',
          ui: {
            fluid: true
          }
        };

        var element = document.querySelector('.video-container');
        var player = new THEOplayer.Player(element, playerConfig);
        _this.movieConfig(player);

        player.autoplay = autoPlay;
        player.play();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Theoplayer, [{
    key: 'movieConfig',
    value: function movieConfig(player) {
      player.source = {
        sources: [{
          src: this.props.movieUrl,
          type: 'application/x-mpegurl' // sets type to HLS
        }],
        textTracks: this.props.theoConfig
      };
    }
  }, {
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
    key: 'render',
    value: function render() {
      var _this3 = this;

      var toggleArrow = this.state.toggleArrow;
      var _props = this.props,
          playerBtnImg = _props.playerBtnImg,
          isTrailer = _props.isTrailer;

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_reactHelmet2.default, {
          link: [{ href: 'https://cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/ui.css', type: "text/css", rel: "stylesheet" }],
          script: [{ src: '//imasdk.googleapis.com/js/sdkloader/ima3.js' }] }),
        _react2.default.createElement(_reactHelmet2.default
        // onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}
        , { script: [{ src: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1', type: "text/javascript" }] }),
        _react2.default.createElement(_reactHelmet2.default, {
          onChangeClientState: function onChangeClientState(newState, addedTags) {
            return _this3.handleScriptInject(addedTags);
          },
          script: [{ src: 'https://cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/THEOplayer.js', type: "text/javascript" }] }),
        _react2.default.createElement(_reactHelmet2.default, null),
        _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            {
              className: 'video-container video-js theoplayer-skin',
              onMouseEnter: this.getToggleArrow,
              onMouseLeave: this.getToggleArrow
            },
            !isTrailer && _react2.default.createElement(
              'div',
              { className: _style.arrow + ' ' + toggleArrow, onClick: this.handleGoBack },
              _react2.default.createElement('img', { src: playerBtnImg })
            )
          )
        )
      );
    }
  }]);

  return Theoplayer;
}(_react.Component);

Theoplayer.propTypes = {
  movieUrl: _propTypes2.default.string.isRequired,
  isTrailer: _propTypes2.default.bool,
  theoConfig: _propTypes2.default.array.isRequired,
  autoPlay: _propTypes2.default.bool,
  showBackBtn: _propTypes2.default.bool,
  fullscreen: _propTypes2.default.bool,
  playerBtnImg: _propTypes2.default.string
};
Theoplayer.defaultProps = {
  autoPlay: true,
  fullscreen: true,
  isTrailer: false,
  showBackBtn: true,
  playerBtnImg: _arrowback2.default
};
exports.default = Theoplayer;