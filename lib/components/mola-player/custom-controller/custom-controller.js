"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _customController = require("./custom-controller.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var tappingCount = 0,
    tappingTimer;

var CustomController = /*#__PURE__*/function (_Component) {
  _inherits(CustomController, _Component);

  var _super = _createSuper(CustomController);

  function CustomController() {
    var _this;

    _classCallCheck(this, CustomController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      qualities: [],
      subtitles: [],
      bufferedPercentage: 0,
      isMuteFeedbackHidden: true,
      isPlayPauseFeedbackHidden: true,
      isSkipFeedbackHidden: true,
      isfullscreenFeedbackHidden: true,
      skippedDuration: 0,
      cue: {
        text: '',
        hidden: true
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleFeedbackOnClick", function () {
      // console.log('feedback clicked...')
      var quality = document.getElementById('vpcc-quality'),
          qualityPopupEl = (0, _get2["default"])(quality, 'children[0]', '');
      var subtitle = document.getElementById('vpcc-subtitle'),
          subtitlePopupEl = (0, _get2["default"])(subtitle, 'children[0]', '');

      if (subtitlePopupEl) {
        subtitlePopupEl.style.display = 'none';
      }

      if (qualityPopupEl) {
        qualityPopupEl.style.display = 'none';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyboardEvent", function () {
      /** handle keyboard pressed */
      document.onkeyup = function (event) {
        var that = _assertThisInitialized(_this);

        var player = that.props.player,
            video = player && player.getMediaElement();
        var isPreroll = (0, _get2["default"])(_this.props, 'isPreroll', false);

        switch (event.which || event.keyCode) {
          case 37
          /* left */
          :
            if (!isPreroll) that._seekTo(-10);
            break;

          case 38
          /* up */
          :
            event.preventDefault();
            video.volume = Math.min(1, video.volume + 0.1);
            break;

          case 39
          /* right */
          :
            if (!isPreroll) that._seekTo(10);
            break;

          case 40
          /* down */
          :
            event.preventDefault();
            video.volume = Math.max(0, video.volume - 0.1);
            break;

          case 70
          /* f for toggle enter fullscreen or exit fullscreen */
          :
            event.preventDefault();

            that._toggleFullscreen();

            break;

          case 77
          /* m for toggle mute button */
          :
            event.preventDefault();

            that._toggleMute();

            break;

          case 80
          /* p for toggle playpause */
          :
            event.preventDefault();

            that._togglePlayPause();

            break;

          default:
            event.preventDefault();
            break;
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "_getQuality", function () {
      var player = _this.props.player;
      if (player) return player.getVariantTracks() || [];
      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "_setQuality", function (index) {
      var player = _this.props.player; // console.log('_setQuality', index, quality[index])

      if (player) {
        var quality = _this._getQuality();

        if (quality && quality.length > 0) {
          var selectedQuality = quality.filter(function (q) {
            return q.id == index;
          })[0]; // console.log('selectedQuality', quality, index)

          /** https://github.com/google/shaka-player/issues/1119 */

          if (selectedQuality) player.selectVariantTrack(selectedQuality, true);else {
            /** set to Auto by default */
            var playerStats = player.getStats();
            var estimatedBandWidth = (0, _get2["default"])(playerStats, 'estimatedBandwidth', 0);
            var autoQuality;
            quality.reverse().map(function (q) {
              if (estimatedBandWidth > q.bandwidth && !autoQuality) {
                player.selectVariantTrack(q, true);
                autoQuality = q;
              }
            });
            /** set to lowest possible bandwith, if users internet is doomed */

            if (!autoQuality) player.selectVariantTrack(quality[0], true);
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_getSubtitle", function () {
      var player = _this.props.player,
          video = player && player.getMediaElement();
      if (player) return Array.from(video.textTracks) || [];
      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "_setSubtitle", function (index) {
      var player = _this.props.player; // console.log('_setSubtitle', index, this._getSubtitle()[index])

      if (player) {
        var subtitles = _this._getSubtitle();

        if (subtitles && subtitles.length > 1) {
          var selectedSubtitle = subtitles[index];

          var _iterator = _createForOfIteratorHelper(subtitles),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var s = _step.value;

              if (selectedSubtitle.language == s.language) {
                // console.log(s)
                s.addEventListener('cuechange', _this.handleCueOnChange);

                if (s.cues && s.cues.length > 0) {
                  var _iterator2 = _createForOfIteratorHelper(s.cues),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var cue = _step2.value;
                      cue.addEventListener('enter', _this.handleCueOnEnter);
                      cue.addEventListener('exit', _this.handleCueOnExit);
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }
              } else {
                s.removeEventListener('cuechange', _this.handleCueOnChange);

                if (s.cues && s.cues.length > 0) {
                  var _iterator3 = _createForOfIteratorHelper(s.cues),
                      _step3;

                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var _cue = _step3.value;

                      _cue.removeEventListener('enter', _this.handleCueOnEnter);

                      _cue.removeEventListener('exit', _this.handleCueOnExit);
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _this.setState({
            cue: {
              text: '',
              hidden: true
            }
          });
          /** always set the cue to empty string each time new subtitle is selected */

        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCueOnChange", function (e) {
      var activeCue = (0, _get2["default"])(e, 'target.activeCues', {});

      if (activeCue.length > 0) {
        _this.setState(function (prevState) {
          return {
            cue: _objectSpread(_objectSpread({}, prevState.cue), {}, {
              text: activeCue[0].text
            })
          };
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleCueOnEnter", function () {
      // console.log('handleCueOnEnter')
      _this.setState(function (prevState) {
        return {
          cue: _objectSpread(_objectSpread({}, prevState.cue), {}, {
            hidden: false
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCueOnExit", function () {
      // console.log('handleCueOnExit')
      _this.setState(function (prevState) {
        return {
          cue: _objectSpread(_objectSpread({}, prevState.cue), {}, {
            text: '',
            hidden: true
          })
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleQualityFilter", function () {
      var qualities = _this._getQuality();

      var q = [],
          trackedIds = [],
          QUALITY_AUTO = {
        bandwidth: 'Auto',
        width: 'Auto',
        height: 'Auto',
        id: -1,
        active: true
      };
      qualities.reverse().map(function (pq) {
        if (pq.height && !trackedIds.includes(pq.height)) {
          trackedIds.push(pq.height);
          q.push(_objectSpread(_objectSpread({}, pq), {}, {
            active: false
          }));
        }
      });
      q.sort(function (a, b) {
        return b.height - a.height;
      });
      q.push(QUALITY_AUTO);

      _this.setState({
        qualities: q
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubtitleFilter", function () {
      // const lngMap = {
      //   id: 'Indonesian',
      //   en: 'English',
      //   uk: 'English',
      //   zh: 'Chinese',
      //   nl: 'Dutch',
      //   de: 'German',
      //   fr: 'French',
      //   it: 'Italian',
      //   pl: 'Polish',
      //   pt: 'Portuguese',
      //   ru: 'Russian',
      //   es: 'Spanish',
      //   vi: 'Viêt Namese',
      //   el: 'Greek',
      //   'pt-br': 'Portuguese',
      // }
      var tts = _this._getSubtitle();

      tts = tts.map(function (t, index) {
        return _objectSpread(_objectSpread({}, t), {}, {
          id: index,
          active: t.language.toLowerCase() == _this.props.config.preferredTextLanguage.toLowerCase(),

          /** set preffered controller subtitle */
          name: t.language ? t.label : null
        });
      }).filter(function (tn) {
        return tn.name;
      });
      var activeSubs = tts.filter(function (t) {
        return t.active;
      })[0];
      /** append off subtitles */

      var subtitles = [{
        id: 0,
        active: !activeSubs ? true : false,
        name: 'Off',
        type: 'SRT',
        kind: 'metadata'
      }].concat(tts);

      _this.setState({
        subtitles: subtitles.reverse() || []
      }, function () {
        if (activeSubs) {
          _this._setSubtitle(activeSubs.id);
          /** set preffered player subtitle */

        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "initEventListeners", function (player) {
      var seek = document.getElementById('vpcc-seek'),
          isLive = player && player.isLive();
      /** update seekbar tooltip and seekbar input */

      if (seek && !isLive) {
        seek.addEventListener('mousemove', _this._updateSeekTooltip);
      }
      /** update progressbar buffer */


      var video = player && player.getMediaElement();
      video.addEventListener('progress', _this._updateBuffer);
    });

    _defineProperty(_assertThisInitialized(_this), "_updateBuffer", function () {
      var player = _this.props.player,
          video = player && player.getMediaElement();
      var duration = Math.round((0, _get2["default"])(video, 'duration', 0)),
          currentTime = Math.round((0, _get2["default"])(video, 'currentTime', 0)),
          buffered = (0, _get2["default"])(video, 'buffered', []);

      if (duration > 0) {
        for (var i = 0; i < buffered.length; i++) {
          if (buffered.start(buffered.length - 1 - i) < currentTime) {
            _this.setState({
              bufferedPercentage: buffered.end(buffered.length - 1 - i) / duration * 100
            });

            break;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_formatTime", function (timeInSeconds) {
      var formattedTime = isFinite(timeInSeconds) ? timeInSeconds : 0;
      var t = new Date(Math.abs(formattedTime) * 1000).toISOString().substr(11, 8),
          time = {
        hours: t.substr(0, 2),
        minutes: t.substr(3, 2),
        seconds: t.substr(6, 2)
      };
      return parseInt(time.hours, 10) > 0 ? t : "".concat(time.minutes, ":").concat(time.seconds);
    });

    _defineProperty(_assertThisInitialized(_this), "_updateSeekTooltip", function (event) {
      var player = _this.props.player,
          video = player && player.getMediaElement();
      var seek = document.getElementById('vpcc-seek'),
          duration = Math.round((0, _get2["default"])(video, 'duration', 0)),
          isPreroll = (0, _get2["default"])(_this.props, 'isPreroll', false),
          isLive = player && player.isLive();

      if (video && !isPreroll && !isLive) {
        var seekTooltip = document.getElementById('vpcc-seek-tooltip');
        var skipTo = Math.round(event.offsetX / event.target.clientWidth * duration);
        seek.setAttribute('data-seek', skipTo);
        seekTooltip.textContent = _this._formatTime(skipTo);
        var rect = video.getBoundingClientRect();

        if (_this.isFullscreen()) {
          seekTooltip.style.left = "".concat(event.pageX - rect.left - rect.height * 0.0875, "px");
        } else {
          seekTooltip.style.left = "".concat(event.pageX - rect.left - rect.height * 0.0875, "px");
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_updateSeekValue", function (event) {
      var skipTo = event.target.value;
      var player = _this.props.player,
          video = player && player.getMediaElement();
      var isPreroll = (0, _get2["default"])(_this.props, 'isPreroll', false),
          isLive = player && player.isLive();

      if (video && !isPreroll && !isLive) {
        _this.setState({
          currentTime: skipTo
        });
        /** ignore supaya responsive */


        video.currentTime = skipTo;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_updateLocalStorage", function (name, payload) {
      try {
        var oldPayload = JSON.parse(localStorage.getItem(name));

        if (oldPayload) {
          localStorage.setItem(name, JSON.stringify(_objectSpread(_objectSpread({}, oldPayload), payload)));
        } else {
          localStorage.setItem(name, JSON.stringify(payload));
        }
      } catch (err) {}
    });

    _defineProperty(_assertThisInitialized(_this), "_updateVolume", function (e) {
      var player = _this.props.player,
          video = player && player.getMediaElement();
      var volume = document.getElementById('vpcc-volume');

      if (video) {
        if (video.muted) {
          video.muted = false;
        }

        _this.setState({
          volume: e.target.value
        });
        /** ignore supaya responsive */


        video.volume = e.target.value;

        _this._updateLocalStorage('player-volume-info', {
          volume: video.volume,
          muted: video.muted
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_toggleMute", function () {
      var player = _this.props.player,
          video = player && player.getMediaElement();
      var volume = document.getElementById('vpcc-volume');

      if (video && _this.props.config.toggleMuteEnabled) {
        _this._debounce(function () {
          video.muted = !video.muted;

          if (video.muted) {
            // console.log(tappingCount)
            tappingCount = 0;
            volume.setAttribute('data-volume', volume.value);
            video.volume = 0;
          } else {
            var _volume$dataset$volum, _volume$dataset;

            // console.log(tappingCount)
            tappingCount = 0;
            video.volume = (_volume$dataset$volum = volume === null || volume === void 0 ? void 0 : (_volume$dataset = volume.dataset) === null || _volume$dataset === void 0 ? void 0 : _volume$dataset.volume) !== null && _volume$dataset$volum !== void 0 ? _volume$dataset$volum : 1;
          }

          _this._updateLocalStorage('player-volume-info', {
            volume: video.volume,
            muted: video.muted
          });

          _this.setState({
            isMuteFeedbackHidden: true
          });
        }, 500);

        _this.setState({
          isMuteFeedbackHidden: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_togglePlayPause", function () {
      var player = _this.props.player,
          video = player && player.getMediaElement(); // console.log(video)

      if (video && _this.props.config.togglePlayPauseEnabled) {
        _this._debounce(function () {
          // console.log(tappingCount)
          tappingCount = 0;

          if (video.paused || video.ended) {
            video.play();
            /* end seeking */
          } else {
            video.pause();
          }

          _this.setState({
            isPlayPauseFeedbackHidden: true
          });
        }, 500);

        _this.setState({
          isPlayPauseFeedbackHidden: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_toggleFullscreen", function () {
      var player = _this.props.player,
          video = player && player.getMediaElement();
      /* View in fullscreen */

      var openFullscreen = function openFullscreen() {
        if (video.parentNode.requestFullscreen) {
          video.parentNode.requestFullscreen();
        } else if (video.parentNode.mozRequestFullScreen) {
          /* Firefox */
          video.parentNode.mozRequestFullScreen();
        } else if (video.parentNode.webkitRequestFullscreen) {
          /* Chrome, Safari and Opera */
          video.parentNode.webkitRequestFullscreen();
        } else if (video.parentNode.msRequestFullscreen) {
          /* IE/Edge */
          video.parentNode.msRequestFullscreen();
        }
      };
      /* Close fullscreen */


      var closeFullscreen = function closeFullscreen() {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          /* IE/Edge */
          document.msExitFullscreen();
        }
      };

      if (_this.props.config.toggleFullscreenEnabled) {
        _this._debounce(function () {
          // console.log(tappingCount)
          tappingCount = 0;
          if (video) _this.isFullscreen() ? closeFullscreen() : openFullscreen();

          _this.setState({
            isfullscreenFeedbackHidden: true
          });
        }, 500);

        _this.setState({
          isfullscreenFeedbackHidden: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isFullscreen", function () {
      return document.fullscreenElement != null;
    });

    _defineProperty(_assertThisInitialized(_this), "_updateQuality", function (id) {
      var player = _this.props.player,
          qualities = _this.state.qualities;
      var q = qualities.map(function (pq, index) {
        if (pq.id === id) {
          // console.log(pq, id)
          _this._setQuality(id);

          return _objectSpread(_objectSpread({}, pq), {}, {
            active: true
          });
        }

        return _objectSpread(_objectSpread({}, pq), {}, {
          active: false
        });
      });

      if (player) {
        _this._toggleQualityPopup();

        _this.setState({
          qualities: q
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_toggleQualityPopup", function () {
      var quality = document.getElementById('vpcc-quality'),
          qualityPopupEl = (0, _get2["default"])(quality, 'children[0]', '');

      if (qualityPopupEl) {
        qualityPopupEl.style.display = qualityPopupEl.style.display === 'grid' ? 'none' : 'grid';
      }
      /** make sure subtitle popup is closed */


      var subtitle = document.getElementById('vpcc-subtitle'),
          subtitlePopupEl = (0, _get2["default"])(subtitle, 'children[0]', '');

      if (subtitlePopupEl) {
        subtitlePopupEl.style.display = 'none';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_updateSubtitle", function (id) {
      var player = _this.props.player,
          subtitles = _this.state.subtitles;
      var filteredSubs = subtitles.map(function (s) {
        if (s.id === id) _this._setSubtitle(s.id);
        return _objectSpread(_objectSpread({}, s), {}, {
          active: s.id === id
        });
      });

      if (player) {
        // player.audioTracks = id
        // player.textTrack = id
        // player.internalSetTextTrack(id) //legacy on 2.0.7
        _this._toggleSubtitlePopup();

        _this.setState({
          subtitles: filteredSubs
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_toggleSubtitlePopup", function () {
      var subtitle = document.getElementById('vpcc-subtitle'),
          subtitlePopupEl = (0, _get2["default"])(subtitle, 'children[0]', '');

      if (subtitlePopupEl) {
        subtitlePopupEl.style.display = subtitlePopupEl.style.display === 'grid' ? 'none' : 'grid';
      }
      /** make sure quality popup is closed */


      var quality = document.getElementById('vpcc-quality'),
          qualityPopupEl = (0, _get2["default"])(quality, 'children[0]', '');

      if (qualityPopupEl) {
        qualityPopupEl.style.display = 'none';
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_seekToLive", function () {
      var player = _this.props.player;

      if (player) {
        // console.log('_seekToLive', player.isLive())
        var video = player && player.getMediaElement();

        if (video) {
          // console.log('video', video, video.currentTime)
          video.currentTime = player.seekRange().end;
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_seekTo", function (n) {
      var player = _this.props.player,
          isLive = player && player.isLive();

      if (player && !isLive) {
        var video = player && player.getMediaElement();

        if (video) {
          video.pause();
          /* start seeking */

          _this._debounce(function () {
            // console.log(tappingCount)
            if (video.currentTime + tappingCount * n < 0) {
              video.currentTime = 0;
            } else if (video.currentTime + tappingCount * n > video.duration) {
              video.currentTime = video.duration;
            } else {
              video.currentTime += tappingCount * n;
            }

            tappingCount = 0;
            video.play();
            /* end seeking */

            _this.setState({
              isSkipFeedbackHidden: true,
              skippedDuration: 0
            });
          }, 500);

          _this.setState({
            isSkipFeedbackHidden: false,
            skippedDuration: tappingCount * n
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_debounce", function (fn) {
      clearTimeout(tappingTimer);

      if (fn) {
        tappingCount += 1;
        tappingTimer = setTimeout(fn, 500);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_skipVideo", function (r) {
      if (r && r.id) {
        if (window) {
          /** globalHistory is your custom history object, not default window.history from browser */
          if (window.globalHistory) {
            window.globalHistory.push("/watch?v=".concat(r.id, "&autoplay=1"));
          } else {
            window.location.href = "/watch?v=".concat(r.id, "&autoplay=1");
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderFeedback", function () {
      var player = _this.props.player,
          video = player && player.getMediaElement(),
          isPaused = (0, _get2["default"])(video, 'paused', false),
          isMuted = (0, _get2["default"])(video, 'muted', false);
      var _this$state = _this.state,
          isMuteFeedbackHidden = _this$state.isMuteFeedbackHidden,
          isPlayPauseFeedbackHidden = _this$state.isPlayPauseFeedbackHidden,
          isSkipFeedbackHidden = _this$state.isSkipFeedbackHidden,
          skippedDuration = _this$state.skippedDuration,
          isfullscreenFeedbackHidden = _this$state.isfullscreenFeedbackHidden;
      return /*#__PURE__*/_react["default"].createElement(_customController.Feedback, {
        onClick: _this.handleFeedbackOnClick
      }, !isSkipFeedbackHidden && /*#__PURE__*/_react["default"].createElement("button", null, skippedDuration > 0 ? "+".concat(skippedDuration, "s") : "".concat(skippedDuration, "s")), !isPlayPauseFeedbackHidden && /*#__PURE__*/_react["default"].createElement("button", null, isPaused ? 'PLAY' : 'PAUSE'), !isMuteFeedbackHidden && /*#__PURE__*/_react["default"].createElement("button", null, isMuted ? 'UNMUTE' : 'MUTED'), !isfullscreenFeedbackHidden && /*#__PURE__*/_react["default"].createElement("button", {
        className: 'square'
      }, _this.isFullscreen() ? 'EXIT FULLSCREEN' : 'ENTER FULLSCREEN'));
    });

    _defineProperty(_assertThisInitialized(_this), "renderCue", function () {
      var cue = _this.state.cue;
      var isPreroll = (0, _get2["default"])(_this.props, 'isPreroll', false);
      var isHover = (0, _get2["default"])(_this.props, 'isHover', false);
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !cue.hidden && cue.text && !isPreroll && /*#__PURE__*/_react["default"].createElement(_customController.CueWrapper, {
        className: "".concat(isHover ? '' : 'hide')
      }, /*#__PURE__*/_react["default"].createElement(_reactMarkdown["default"], {
        source: cue.text.replace(/-/g, '—'),
        escapeHtml: false
      })));
    });

    return _this;
  }

  _createClass(CustomController, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var player = this.props.player;

      if (process.env.BROWSER && player) {
        this.handleQualityFilter();
        this.handleSubtitleFilter();
        this.initEventListeners(player);
        this.handleKeyboardEvent(); // window._setSubtitle = this._setSubtitle
        // window._getSubtitle = this._getSubtitle
        // window._getQuality = this._getQuality
        // window._setQuality = this._setQuality
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.onkeyup = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.props.player)
      // console.log(this.state)
      var player = this.props.player,
          isPreroll = (0, _get2["default"])(this.props, 'isPreroll', false),
          isLive = player && player.isLive();
      var video = player && player.getMediaElement(); // if (preroll) console.log(preroll.currentTime)

      var isPaused = (0, _get2["default"])(video, 'paused', false),
          duration = isFinite((0, _get2["default"])(video, 'duration', 0)) ? (0, _get2["default"])(video, 'duration', 0) : 0,
          currentTime = isFinite((0, _get2["default"])(video, 'currentTime', 0)) ? (0, _get2["default"])(video, 'currentTime', 0) : 0,
          volume = (0, _get2["default"])(video, 'volume', 0),
          isMuted = (0, _get2["default"])(video, 'muted', false); // console.log(isPreroll, duration, currentTime)

      var _this$state2 = this.state,
          bufferedPercentage = _this$state2.bufferedPercentage,
          qualities = _this$state2.qualities,
          subtitles = _this$state2.subtitles;
      var progressbarPercentage = isLive ? '100%' : "".concat(currentTime / duration * 100, "%"),
          prerollProgressbarPercentage = "".concat(currentTime / duration * 100, "%");
      var canShowDuration = isLive && isPreroll || !isLive; // console.log('cue', cue)
      // console.log(currentTime, duration)

      var recommendation = this.props.recommendation;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, this.renderFeedback(), this.renderCue(), /*#__PURE__*/_react["default"].createElement("div", {
        id: "vpcc-custom-controller",
        refs: function refs(node) {
          return _this2.rootController = node;
        },
        className: "".concat(_customController.container, " ").concat(this.props.isHover ? '' : 'hide')
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'duration'
      }, isLive && !isPreroll && /*#__PURE__*/_react["default"].createElement("p", {
        className: 'live_text',
        onClick: this._seekToLive
      }, "LIVE"), isLive && !isPreroll && /*#__PURE__*/_react["default"].createElement("span", {
        onClick: this._seekToLive,
        className: 'live_indicator'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'live_indicator_beckground'
      })), canShowDuration && this._formatTime(duration - currentTime)), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progress'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progress_wrapper'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progressbar_progress',
        style: {
          width: isPreroll ? prerollProgressbarPercentage : progressbarPercentage
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progressbar_progress_buffer',
        style: {
          width: "".concat(isPreroll ? 0 : bufferedPercentage, "%")
        }
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progressbar_progress_background'
      }), /*#__PURE__*/_react["default"].createElement("input", {
        className: 'seek',
        id: "vpcc-seek",
        value: currentTime,
        min: "0",
        max: duration,
        type: "range",
        step: "0.01",
        onChange: this._updateSeekValue
      }), !isLive && !isPreroll && /*#__PURE__*/_react["default"].createElement("div", {
        className: 'tooltip',
        id: "vpcc-seek-tooltip"
      }, "00:00"))), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'bottom_left_section'
      }, /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        className: "".concat(!isPaused ? 'pauseIcon' : 'playIcon', " ").concat(this.props.config.togglePlayPauseEnabled ? '' : 'disabled'),
        onClick: this._togglePlayPause
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'tooltip withTooltip'
      }, !isPaused ? 'Pause' : 'Play', " (p)")), !isLive && !isPreroll && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        className: 'forwardIcon',
        onClick: function onClick() {
          return _this2._seekTo(10);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'tooltip withTooltip'
      }, "Forward (\u2B62)")), /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        className: 'backwardIcon',
        onClick: function onClick() {
          return _this2._seekTo(-10);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'tooltip withTooltip'
      }, "Backward (\u2B60)"))), recommendation && !isPreroll && /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        className: 'upcommingIcon',
        onClick: function onClick() {
          return _this2._skipVideo(recommendation);
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'tooltip withTooltip'
      }, "Skip To Next Video")), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'volume'
      }, /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        id: "volume-button",
        className: "".concat(isMuted || volume == 0 ? 'mutedIcon' : 'muteIcon', " ").concat(this.props.config.toggleMuteEnabled ? '' : 'disabled'),
        onClick: this._toggleMute
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'tooltip withTooltip'
      }, isMuted ? 'Unmute' : 'Mute', " (m)")), this.props.config.volumeBarEnabled && /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progress'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progress_wrapper'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progressbar_progress',
        style: {
          width: "".concat(volume * 100, "%")
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: 'progressbar_dot',
        style: {
          opacity: currentTime / duration === 0 ? 0 : 1
        }
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'progressbar_progress_background'
      }), /*#__PURE__*/_react["default"].createElement(_customController.VolumeBar, null, /*#__PURE__*/_react["default"].createElement("input", {
        className: 'slider seek',
        id: "vpcc-volume",
        value: volume,
        type: "range",
        max: "1",
        min: "0",
        step: "0.01",
        onChange: this._updateVolume
      })))))), /*#__PURE__*/_react["default"].createElement("div", {
        className: 'bottom_right_section'
      }, !isPreroll && qualities.length > 1 && /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        id: "vpcc-quality",
        className: 'gearIcon',
        onClick: this._toggleQualityPopup
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'quality_popup'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'quality_title'
      }, "Qualities"), qualities.map(function (q) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          className: "quality_list ".concat(q.active ? 'active' : ''),
          onClick: function onClick() {
            return _this2._updateQuality(q.id);
          }
        }, q.active && /*#__PURE__*/_react["default"].createElement("div", {
          className: 'quality_tick_wrapper'
        }, /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
          className: 'tickIcon',
          onClick: _this2._toggleQualityPopup
        })), q.height);
      }))), !isPreroll && subtitles.length > 1 && /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        id: "vpcc-subtitle",
        className: 'chatIcon',
        onClick: this._toggleSubtitlePopup
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'subtitle_popup'
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'subtitle_title'
      }, "Subtitles"), subtitles.map(function (sub) {
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, sub.name && /*#__PURE__*/_react["default"].createElement("div", {
          className: "subtitle_list ".concat(sub.active ? 'active' : ''),
          onClick: function onClick() {
            return _this2._updateSubtitle(sub.id);
          }
        }, sub.active && /*#__PURE__*/_react["default"].createElement("div", {
          className: 'subtitle_tick_wrapper'
        }, /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
          className: 'tickIcon',
          onClick: _this2._toggleSubtitlePopup
        })), sub.name));
      }))), /*#__PURE__*/_react["default"].createElement(_customController.Icons, {
        id: "vpcc-fullscreen",
        className: "".concat(this.isFullscreen() ? 'exitFullscreenIcon' : 'enterFullscreenIcon', " ").concat(this.props.config.toggleFullscreenEnabled ? '' : 'disabled'),
        onClick: this._toggleFullscreen
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: 'tooltip withTooltip'
      }, this.isFullscreen() ? 'Exit Fullscreen' : 'Enter Fullscreen', " (f)")))));
    }
  }]);

  return CustomController;
}(_react.Component);

var _default = CustomController;
exports["default"] = _default;