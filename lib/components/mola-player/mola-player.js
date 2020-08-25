"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _axios = _interopRequireDefault(require("axios"));

var _subtitle = require("subtitle");

var _loadjs = _interopRequireDefault(require("loadjs"));

var _adsUtil = require("./preroll/adsUtil");

var _upcomingVideo = _interopRequireDefault(require("./upcoming-video"));

var _customController = _interopRequireDefault(require("./custom-controller"));

var _config3 = require("./config");

var _molaPlayer = require("./mola-player.style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

var idleInterval;

var Player = /*#__PURE__*/function (_Component) {
  _inherits(Player, _Component);

  var _super = _createSuper(Player);

  function Player() {
    var _this;

    _classCallCheck(this, Player);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isHover: false,
      isLoading: true,
      isPlaying: false,
      isError: false,
      errorMsg: '',
      hasNextVideo: true,
      hasPlayButton: false,
      banner: {
        id: '',
        link: '',
        mediaURL: ''
      },
      isPreroll: false,
      ads: [],
      autoplayEnabled: false
    });

    _defineProperty(_assertThisInitialized(_this), "loadPlayer", function () {
      // console.log(window.shaka)
      // Install built-in polyfills to patch browser incompatibilities.
      shaka.polyfill.installAll(); // Check to see if the browser supports the basic APIs Shaka needs.

      if (shaka.Player.isBrowserSupported()) {
        // Everything looks good!
        _this.initPlayer();

        _this.handleUserIdle();
      } else {
        // This browser does not have the minimum set of APIs we need.
        console.error('Browser not supported!');
        that.onError({
          customMsg: 'DISMISSED: Browser not supported!'
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleUserIdle", function () {
      var that = _assertThisInitialized(_this);

      clearInterval(idleInterval);
      idleInterval = setInterval(function () {
        if (!document.cookie.includes('__idleSessionId')) {
          that.setState({
            isHover: false
          });
        } // console.log('that.state.isPreroll', that.state.isPreroll)
        // console.log(that.state.isPreroll, that.state.ads)

      }, 1000);
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnAdsImpression", function (activeAds) {
      if (activeAds) {
        fetch(activeAds.impression, {
          method: 'GET',
          // *GET, POST, PUT, DELETE, etc.
          mode: 'no-cors',
          // no-cors, *cors, same-origin
          credentials: 'include',
          // include, *same-origin, omit
          headers: {
            Origin: 'https://mst.cx'
          }
        }).then(function (res) {
          return console.log(res.status);
        })["catch"](function (e) {
          return console.log('Error: ads impressions failed ', e);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTimeFormatToSecond", function (time) {
      var hhmmss = time.split(':');
      var multiplier = {
        4: 86400,
        3: 3600,
        2: 60,
        1: 1
      };
      multiplier = multiplier[hhmmss.length];
      return hhmmss.reduce(function (p, c) {
        var result = p + parseInt(c, 10) * multiplier;
        multiplier = multiplier / 60;
        return result;
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "initPreroll", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var activeAds, ads, filteredAds, config, video, player;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              ads = _this.state.ads;

              if (ads.length > 0) {
                filteredAds = ads.map(function (eachAds) {
                  if (eachAds.isPlayed === false && _this.player) {
                    if (eachAds.timeOffset === 'start') {
                      if (_this.player.totalWatchTime == 0) {
                        activeAds = eachAds;
                        return _objectSpread(_objectSpread({}, eachAds), {}, {
                          isPlayed: true
                        });
                      }
                    } else {
                      var timeInSeconds = _this.getTimeFormatToSecond(eachAds.timeOffset);

                      if (timeInSeconds == _this.player.totalWatchTime) {
                        activeAds = eachAds;
                        return _objectSpread(_objectSpread({}, eachAds), {}, {
                          isPlayed: true
                        });
                      }
                    }
                  }

                  return eachAds;
                });

                if (activeAds) {
                  // console.log('masuk gak active ads preroll', activeAds, this.player.totalWatchTime)
                  config = {
                    manifestUri: activeAds.mediafile,
                    startTime: 0
                    /** preroll selalu start dari 0 */

                  };

                  if (_this.player) {
                    // console.log('masuk gak if preroll')
                    _this.handleInitPlayer(_this.player, config);

                    _this.player.isPreroll = true;
                  } else {
                    video = document.getElementById("video-main-".concat(_this.props.id));
                    player = new shaka.Player(video);
                    player.isPreroll = true; // console.log('masuk gak else preroll')

                    _this.handleInitPlayer(player, config);
                  }

                  _this.handleOnAdsImpression(activeAds);

                  _this.setState({
                    ads: filteredAds,
                    isPreroll: true
                  });
                }
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    _defineProperty(_assertThisInitialized(_this), "initPlayer", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var drm, streamSourceUrl, currentTime, watchTimePosition, video, player, isSafari, startTime, drmStreamUrl, manifestUri, deviceId, config, req, cert, _config, _config2;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              drm = (0, _get2["default"])(_this.props, 'drm', ''), streamSourceUrl = (0, _get2["default"])(_this.props, 'streamSourceUrl', ''), currentTime = (0, _get2["default"])(_this.player, 'totalWatchTime', 0), watchTimePosition = Number((0, _get2["default"])(_this.props, 'watchTimePosition', 0)); // console.log(watchTime, this.player)

              video = document.getElementById("video-main-".concat(_this.props.id));
              player = _this.player || new shaka.Player(video);

              if (currentTime === 0 && watchTimePosition > 0) {
                currentTime = watchTimePosition;
              } // console.log(streamSourceUrl, this.props)


              isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
              startTime = currentTime > 0 && !isNaN(currentTime) ? currentTime : 0;

              if (!(drm && drm.drmEnabled)) {
                _context2.next = 28;
                break;
              }

              drmStreamUrl = isSafari ? drm.fairplay.streamUrl : drm.widevine.streamUrl;
              manifestUri = drmStreamUrl ? drmStreamUrl : _this.props.streamSourceUrl;
              deviceId = _this.props.deviceId;

              if (isSafari) {
                _context2.next = 15;
                break;
              }

              config = {
                manifestUri: manifestUri,
                drm: {
                  servers: {
                    'com.widevine.alpha': "".concat(drm.widevine.licenseUrl, "?deviceId=").concat(deviceId),
                    'com.microsoft.playready': "".concat(drm.playready.licenseUrl, "?deviceId=").concat(deviceId),
                    'com.apple.fps.1_0': "".concat(drm.fairplay.licenseUrl, "?deviceId=").concat(deviceId)
                  }
                },
                startTime: startTime
              };

              _this.handleInitPlayer(player, config);

              _context2.next = 26;
              break;

            case 15:
              _context2.next = 17;
              return fetch(drm.fairplay.certificateUrl);

            case 17:
              req = _context2.sent;

              if (req.ok) {
                _context2.next = 21;
                break;
              }

              // handle error
              console.log('Failed to retrieve fairplay certificate');
              return _context2.abrupt("return");

            case 21:
              _context2.next = 23;
              return req.arrayBuffer();

            case 23:
              cert = _context2.sent;
              _config = {
                // vmapUrl, //: 'http://51.38.231.56:8000/vmap?tc=autorefresh_pre_roll',
                manifestUri: manifestUri,
                drm: {
                  servers: {
                    'com.widevine.alpha': "".concat(drm.widevine.licenseUrl, "?deviceId=").concat(deviceId),
                    'com.microsoft.playready': "".concat(drm.playready.licenseUrl, "?deviceId=").concat(deviceId),
                    'com.apple.fps.1_0': "".concat(drm.fairplay.licenseUrl, "?deviceId=").concat(deviceId)
                  },
                  advanced: {
                    'com.apple.fps.1_0': {
                      serverCertificate: new Uint8Array(cert)
                    }
                  } // fairPlayTransform: false,

                },
                startTime: startTime
              };

              _this.handleInitPlayer(player, _config);

            case 26:
              _context2.next = 29;
              break;

            case 28:
              if (streamSourceUrl !== '') {
                _config2 = {
                  manifestUri: streamSourceUrl,
                  startTime: startTime
                };

                _this.handleInitPlayer(player, _config2);
              } else {
                console.log('Stream source not found');
              }

            case 29:
              return _context2.abrupt("return", true);

            case 30:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    })));

    _defineProperty(_assertThisInitialized(_this), "handleInitPlayer", function (player, config) {
      // console.log('config', config)
      var that = _assertThisInitialized(_this),
          streamSourceUrl = config.manifestUri,
          videoStartTime = config.startTime,
          retryParameters = {
        timeout: 10000,
        // timeout in ms, after which we abort; 0 means never
        maxAttempts: 2,
        // the maximum number of requests before we fail
        baseDelay: 1000,
        // the base delay in ms between retries
        backoffFactor: 1,
        // the multiplicative backoff factor between retries
        fuzzFactor: 0.5 // the fuzz factor to apply to each retry delay

      };

      delete config.manifestUri;
      delete config.startTime;
      player.getNetworkingEngine().registerResponseFilter(function (type, response) {
        response.headers['Access-Control-Allow-Origin'] = '*'; // console.log('registerResponseFilter', response)

        return response;
      });
      player.configure(_objectSpread(_objectSpread({}, config), {}, {
        // restrictions: {
        //   maxPixels: 1280 * 720 /** 1920*1080 1280*720 1024*576 640*360 480*270 */,
        // },
        abr: {
          enabled: false
        },
        manifest: {
          retryParameters: retryParameters // hls: {
          //   useFullSegmentsForStartTime: true,
          // },

        },
        streaming: {
          retryParameters: retryParameters
        },
        availabilityWindowOverride: 300
        /** IMPORTANT: this enables seekRange on default Safari player */

      }));

      try {
        // https://storage.googleapis.com/shaka-demo-assets/angel-one-hls/master.m3u8
        // https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_ts/master.m3u8
        // https://irtdashreference-i.akamaihd.net/dash/live/901161/keepixo1/playlistBR2.m3u8
        player.unload().then(function () {
          player.load(streamSourceUrl, videoStartTime).then(function () {
            var video = player.getMediaElement();
            video.volume = that.props.volume;
            video.muted = that.props.muted;
            /** Shaka auto disabled texttracks when changing source, set mode back to hidden */

            for (var i = 0; i < video.textTracks.length; i++) {
              video.textTracks[i].mode = 'hidden';
            }

            console.log('player loaded');
            that.setState({
              isLoading: false,
              hasPlayButton: true
            });
            /** prevent legacy code Error terminate */

            player.reset = function (errorMsg) {
              if (errorMsg) {
                that.setState({
                  isError: true,
                  errorMsg: errorMsg
                });
              }

              player.unload();
              /** unload, detach, destroy */

              that.player = null;
              window["player".concat(that.props.id)] = null;
            };
            /** if that.player already exist, then skip adding new event listener */


            if (!that.player) {
              that.player = player;
              window["player".concat(that.props.id)] = player;
              that.handlePlayerEventListener(player);
              console.log('Player Controls loaded and ready');

              if (that.childRefs) {
                that.childRefs.addEventListener('mouseenter', that.handleOnMouseMove);
                that.childRefs.addEventListener('mousemove', that.handleOnMouseMove);
                that.childRefs.addEventListener('mouseout', that.handleOnMouseExit);
              }
            }
          })["catch"](that.onError); // onError is executed if the asynchronous load fails
        });
      } catch (e) {
        console.warn('Error: player load failed ', e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInitPreroll", function () {
      var that = _assertThisInitialized(_this);

      try {
        // update banner
        var url = _this.props.adsSource || ''; // const url =
        //   'https://api.stag.supersoccer.tv/v1/ads/ads-rubik/api/v1/get-inplayer-banner?params=eyJwcm9qZWN0X2lkIjoiMiIsInZpZGVvX2lkIjoid2VicGxheTAwMSIsImFwcF9pZCI6Im1vbGFfYWRzIiwic2Vzc2lvbl9pZCI6Imo4OWk4NTVkenJmeWg0aDF0NHY1OG9tc2poemV0OWlxbSIsImNsaWVudF9pcCI6IjM1LjE4Ni4xNTMuMTc1IiwidXVpZCI6IjU5MTA5MjBlLTMwYjMtNDExZS04ZmFkLTE2MTJhNDljMjQyOCIsInRpbWVfb2Zmc2V0IjoiNyIsInVzZXJfaWQiOiJlN3BGb3VmYUdlMjBUR1BKR1ZqeDRvRGpCWXIyMFoifQ=='

        if (url) {
          _axios["default"].get(url).then(function (response) {
            if (response.status == 200 && response.data) return response.data;else return null;
          }).then(function (data) {
            // console.log(data)
            if (data) {
              /* data = dummyAdsPrerollXml */
              var adsResponse = (0, _adsUtil.parseXml2Obj)(data);
              adsResponse.then(function (ads) {
                var filteredAds = ads.map(function (eachAds) {
                  return _objectSpread(_objectSpread({}, eachAds), {}, {
                    isPlayed: false
                  });
                });

                if (filteredAds.length > 0) {
                  // filteredAds.push({ ...filteredAds[0], timeOffset: '00:00:30' }) // uji coba midroll
                  // console.log(filteredAds)
                  that.setState({
                    ads: filteredAds
                  });
                }
              });
            }
          });
        }
      } catch (e) {
        console.log('Error: fetch preroll API failed ', e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleInitBanner", function () {
      try {
        // update banner
        var url = _this.props.adsBannerUrl || ''; // const url =
        //   'https://api.stag.supersoccer.tv/v1/ads/ads-rubik/api/v1/get-inplayer-banner?params=eyJwcm9qZWN0X2lkIjoiMiIsInZpZGVvX2lkIjoid2VicGxheTAwMSIsImFwcF9pZCI6Im1vbGFfYWRzIiwic2Vzc2lvbl9pZCI6Imo4OWk4NTVkenJmeWg0aDF0NHY1OG9tc2poemV0OWlxbSIsImNsaWVudF9pcCI6IjM1LjE4Ni4xNTMuMTc1IiwidXVpZCI6IjU5MTA5MjBlLTMwYjMtNDExZS04ZmFkLTE2MTJhNDljMjQyOCIsInRpbWVfb2Zmc2V0IjoiNyIsInVzZXJfaWQiOiJlN3BGb3VmYUdlMjBUR1BKR1ZqeDRvRGpCWXIyMFoifQ=='

        if (url) {
          _axios["default"].get(url).then(function (res) {
            // console.log(res)
            if (res.status === 200) {
              var data = (0, _get2["default"])(res, 'data.data.data[0]', {});
              /** Skip banner BLANK: bannerIds '89' movies, '93' vod, '97' linear, live '101', replay '105', trailers '109' */

              var blankBannerIds = ['89', '93', '97', '101', '105', '109'];

              if (blankBannerIds.includes(data.id)) {
                _this.handleInitBanner();
              } else {
                _this.setState({
                  banner: {
                    id: data.id,
                    link: data.link,
                    mediaURL: data.mediaURL
                  }
                });
              }
            }
          });
        }
      } catch (e) {
        console.warn('Error: fetch banner API failed ', e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onErrorEvent", function (event) {
      _this.onError(event.detail);
    });

    _defineProperty(_assertThisInitialized(_this), "onError", function (error) {
      // Log the error
      var category = error.category,
          code = error.code,
          data = error.data,
          severity = error.severity,
          message = error.message;
      var errorCodes = _this.props.errorCodes;
      console.error('Player error: ', error);

      if (_this.props.handleVideoError) {
        _this.props.handleVideoError(error);
      }

      if (_this.player) _this.player.reset();

      _this.setState({
        isError: true,
        errorMsg: error.customMsg || "".concat((0, _get2["default"])(errorCodes, "".concat(code), 'Silahkan refresh browser anda dalam beberapa saat lagi'), " \u2012 ").concat(code, " ")
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayerEventListener", function (player) {
      var that = _assertThisInitialized(_this);

      var loadedInterval,
          loadedCount = 0;
      loadedInterval = setInterval(function () {
        if (player && player.getLoadMode && player.getLoadMode() > 1) clearInterval(loadedInterval);

        if (loadedCount > 40) {
          clearInterval(loadedInterval);
          that.onError({
            customMsg: 'TIMEOUT: Failed to Load media, Silahkan refresh browser anda.'
          });
        }
      }, 500); // console.log(player, getLocalPlayer)

      player.addEventListener('error', that.onErrorEvent);
      var video = player && player.getMediaElement(); // console.log('WACHAO', video, player)

      if (video) {
        // console.log('that.props.subtitles', that.props.subtitles)
        if (that.props.subtitles && that.props.subtitles.length > 0) {
          var _iterator = _createForOfIteratorHelper(that.props.subtitles),
              _step;

          try {
            var _loop = function _loop() {
              var s = _step.value;
              // console.log(s)
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
              //   'pt-br': 'Portuguese'
              // };

              /**
               * @param s = {
               *   kind: type,         // subtitles or metadata
               *   src: subtitleUrl,   // typical url source
               *   country,            // id, eng (always in lowercase follow lngMap samples)
               *   label: language,    // Bahasa Inconesia, English, 官话, etc
               *   type: subtitleType  // srt or vtt
               * }
               */
              if (s.label && s.label.trim() == '') return {
                v: void 0
              };
              var track = video.addTextTrack('metadata', s.label, s.country); // track.mode = 'showing'

              _axios["default"].get(s.src).then(function (response) {
                if (response.status == 200 && response.data) {
                  var srt = (0, _subtitle.parse)(response.data); // console.log(srt)

                  srt.map(function (cue) {
                    // console.log(cue)
                    var newCue = new VTTCue(cue.start / 1000, cue.end / 1000, cue.text);
                    window.cue = newCue; // newCue.size = 60
                    // newCue.line = -12

                    track.addCue(newCue);
                  });
                }
              })["catch"](function (e) {
                return console.log('Error: fetch subtitle failed ', e);
              });
            };

            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _ret = _loop();

              if (_typeof(_ret) === "object") return _ret.v;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        var visitedTimeInSeconds = [],
            firstTimeFlag = 0,
            currentTime = 0;
        video.addEventListener('play', function (e) {
          if (that.props.handleOnPlayCallback) that.props.handleOnPlayCallback(that.player); // console.log('play', that.state)

          if (!firstTimeFlag) {
            // console.log('!firstTimeFlag')
            that.player.totalWatchTime = visitedTimeInSeconds.length;

            if (that.props.handleVideoWatchTime) {
              that.props.handleVideoWatchTime(that.player);
            }

            firstTimeFlag = 1;
          } // that.handleResumeVideoTime(that.player, that.props.watchTimePosition)


          that.durationInterval = setInterval(function () {
            var player = that.player,
                video = player && player.getMediaElement();

            if (video && !that.state.isPreroll) {
              currentTime = Math.floor(video.currentTime); // console.log('visitedTimeInSeconds.indexOf(totalWatchTime) ', visitedTimeInSeconds.indexOf(totalWatchTime))

              if (visitedTimeInSeconds.indexOf(currentTime) === -1) {
                if (visitedTimeInSeconds.length % 30 === 0) {
                  that.handleInitBanner();
                }

                that.initPreroll();
                visitedTimeInSeconds.push(currentTime);
              } // console.log("currentTime", currentTime)
              // console.log('visitedTimeInSeconds', visitedTimeInSeconds)


              that.player.levels_ = player && player.getVariantTracks();
              /** cocokin dengan legacy voplayer */

              that.player.totalWatchTime = visitedTimeInSeconds.length; // console.log("visitedTimeInSeconds.length", visitedTimeInSeconds.length)
            }

            if (that.props.handleVideoWatchTime) {
              that.props.handleVideoWatchTime(player);
            }
          }, 1000);
        });
        video.addEventListener('pause', function () {
          // console.log('paused')
          clearInterval(that.durationInterval);

          if (that.props.handleVideoPause) {
            that.props.handleVideoPause(player);
          }
        });
        video.addEventListener('ended', function () {
          // console.log('Playback ended')
          clearInterval(that.durationInterval);

          if (that.props.handleVideoEnded) {
            that.props.handleVideoEnded(player);
          }

          if (that.player.isPreroll) {
            that.setState({
              isPreroll: false
            }, function () {
              that.initPlayer();
              that.player.isPreroll = false;
            });
          }
        });
        video.addEventListener('durationchange', function (e) {
          clearInterval(that.durationInterval);

          if (that.props.handleDurationChange) {
            that.props.handleDurationChange(player);
          }
        });
        video.addEventListener('volumechange', function (e) {
          /** function set localStorage moved to custom controller `_updateVolume` method */
          if (that.props.handleOnVideoVolumeChange) {
            that.props.handleOnVideoVolumeChange(player);
          }
        });
        if (that.props.autoPlay) that.handlePlayButton();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handlePlayButton", function () {
      if (_this.props.handleOnPlayCallback) _this.props.handleOnPlayCallback(_this.player);
      if (_this.props.isPlayerBlocked) return;

      if (_this.player) {
        var player = _this.player,
            video = player && player.getMediaElement();
        var ads = _this.state.ads;

        if (video) {
          _this.setState({
            isPlaying: true,
            autoplayEnabled: true
          }, function () {
            var hasPreroll = ads.filter(function (a) {
              return a.timeOffset === 'start';
            })[0];

            if (hasPreroll && !hasPreroll.isPlayed) {
              _this.player.totalWatchTime = 0;

              _this.initPreroll();
            } else {
              video.play();
            }
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSubtreeOnChange", function () {
      var videoHeight = (0, _get2["default"])(document.getElementById("video-main-".concat(_this.props.id)), 'offsetHeight', '');
      var videoChildEl = (0, _get2["default"])(document.getElementsByClassName(_molaPlayer.childContainer), '[0]', '');
      /** update child container */

      if (videoHeight && videoChildEl) {
        videoChildEl.style.height = "".concat(videoHeight, "px");
        videoChildEl.style.width = "".concat(videoHeight * 16 / 9, "px");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnMouseExit", function (e) {
      _this.setState({
        isHover: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnMouseMove", function (e) {
      document.cookie = "__idleSessionId=mola; max-age=".concat(5, "; path=/;");
      if (!_this.state.isHover) _this.setState({
        isHover: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelUpcVideo", function (e) {
      _this.setState({
        hasNextVideo: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderNextVideo", function (hasNextVideo) {
      if (_this.player) {
        var data = (0, _get2["default"])(_this.props, 'recommendation', null);

        if (data && hasNextVideo && !_this.player.isLive()) {
          return /*#__PURE__*/_react["default"].createElement(_upcomingVideo["default"], {
            data: data,
            handleCancelVideo: _this.handleCancelUpcVideo,
            startInterval: 1000
          });
        } else {
          return /*#__PURE__*/_react["default"].createElement("div", null);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderBugLogo", function (bugLogoVideo) {
      var BLClassName = '';

      if (bugLogoVideo.type === 3) {
        /** fullscreen */
        BLClassName = 'fullscreen';
      } else if (bugLogoVideo.type === 2) {
        /** wide */
        BLClassName = 'wide';
      } else if (bugLogoVideo.type === 1) {
        /** square */
        BLClassName = 'square';
      }

      return /*#__PURE__*/_react["default"].createElement(_molaPlayer.BugLogoWrapper, {
        className: BLClassName
      }, /*#__PURE__*/_react["default"].createElement("img", {
        id: "video-bug-logo-".concat(_this.props.id),
        src: bugLogoVideo.image,
        alt: "Bug-logo Player"
      }));
    });

    return _this;
  }

  _createClass(Player, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log('componentDidMount', this.props)
      if (process.env.BROWSER && window) {
        var _that = this;

        var scriptArray = [];

        _config3.ShakaScript.map(function (script) {
          scriptArray.push(script.src);
        });

        _that.handleInitPreroll();

        window["playerProps".concat(_that.props.id)] = this.props;

        if (!_loadjs["default"].isDefined('shakaplayerjs')) {
          (0, _loadjs["default"])(scriptArray, 'shakaplayerjs', {
            success: function success() {
              /* files loaded successfully */
              // console.log("script loaded successfully")
              _that.loadPlayer();
            },
            async: false
          });
        } else {
          /* files ALREADY loaded successfully */
          // console.log("script ALREADY loaded successfully")
          _that.loadPlayer();
        } // console.log('componentDidMount', this.props)

      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.durationInterval) {
        clearInterval(this.durationInterval);
      }

      if (this.childRefs) {
        this.childRefs.removeEventListener('mouseenter', this.handleOnMouseMove);
        this.childRefs.removeEventListener('mousemove', this.handleOnMouseMove);
        this.childRefs.removeEventListener('mouseout', this.handleOnMouseExit);
      }

      if (this.player) {
        this.player.getNetworkingEngine().clearAllResponseFilters();
        this.player = null;
        window["player".concat(this.props.id)] = null;
      }

      clearInterval(idleInterval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          isError = _this$state.isError,
          isPlaying = _this$state.isPlaying,
          isPreroll = _this$state.isPreroll,
          errorMsg = _this$state.errorMsg,
          isHover = _this$state.isHover,
          hasNextVideo = _this$state.hasNextVideo,
          hasPlayButton = _this$state.hasPlayButton,
          banner = _this$state.banner,
          autoplayEnabled = _this$state.autoplayEnabled;
      var _this$props = this.props,
          id = _this$props.id,
          title = _this$props.title,
          poster = _this$props.poster,
          children = _this$props.children,
          isPlayButtonDisabled = _this$props.isPlayButtonDisabled,
          recommendation = _this$props.recommendation,
          _this$props$playerCon = _this$props.playerConfig,
          playerConfig = _this$props$playerCon === void 0 ? {} : _this$props$playerCon; // console.log('banner', banner)

      var bugLogoVideo = {
        type: (0, _get2["default"])(this.props, 'bugLogo.attributes.logoType', null),
        image: (0, _get2["default"])(this.props, 'bugLogo.attributes.imageURL', null)
      };
      var player = this.player,
          video = player && player.getMediaElement();
      var isBuffering = this.player && !this.player.isPreroll && this.player.isBuffering(); // console.log('canStartNextVideo', canStartNextVideo)

      var controllerConfig = _objectSpread({
        togglePlayPauseEnabled: true,
        toggleFullscreenEnabled: true,
        toggleMuteEnabled: true,
        seekBarEnabled: true,
        volumeBarEnabled: true,
        nextVideoEnabled: true,
        keyboardShortcutsEnabled: true,
        preferredTextLanguage: 'id'
        /** make sure to input in lowercase */

      }, playerConfig);

      var canStartNextVideo = this.player && !this.player.isPreroll && !this.player.isLive() && video && video.duration - video.currentTime <= 10 && controllerConfig.nextVideoEnabled; // console.log(this.state)

      this.handleSubtreeOnChange();
      var videoOnlyHeight = (0, _get2["default"])(document.getElementById("video-context-".concat(id)), 'offsetHeight', 0) - (0, _get2["default"])(document.getElementById("video-banner-".concat(id)), 'height', 0);
      var isFullscreen = document && document.fullscreenElement;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: function ref(node) {
          return _this2.childRefs = node;
        },
        id: "video-context-".concat(id),
        className: "".concat(_molaPlayer.container, " ").concat(isFullscreen ? 'fullscreen' : '')
      }, !isPlaying && poster && /*#__PURE__*/_react["default"].createElement(_molaPlayer.Poster, null, /*#__PURE__*/_react["default"].createElement("img", {
        id: "video-poster-".concat(id),
        src: poster
      })), !isPlaying && /*#__PURE__*/_react["default"].createElement(_molaPlayer.UserFeedback, null, isLoading && !isError && !isPlayButtonDisabled && /*#__PURE__*/_react["default"].createElement("code", null, "Loading . . ."), !isError && hasPlayButton && !isPlayButtonDisabled && /*#__PURE__*/_react["default"].createElement(_molaPlayer.Icons, {
        className: 'playIcon',
        onClick: function onClick() {
          return _this2.handlePlayButton();
        }
      })), isError && /*#__PURE__*/_react["default"].createElement(_molaPlayer.ErrorFeedback, null, /*#__PURE__*/_react["default"].createElement("code", null, errorMsg)), /*#__PURE__*/_react["default"].createElement("video", {
        id: "video-main-".concat(id) // width="100%"
        ,
        autoPlay: autoplayEnabled,
        style: {
          width: videoOnlyHeight * 16 / 9,
          height: videoOnlyHeight
        }
      }), banner && banner.mediaURL && this.player && !isPreroll && /*#__PURE__*/_react["default"].createElement(_molaPlayer.BannerImg, {
        id: "video-banner-".concat(id),
        alt: "banner-".concat(banner.id),
        src: banner.mediaURL // width={(videoOnlyHeight * 16) / 9}
        ,
        onClick: function onClick() {
          return window.open(banner.link);
        },
        onError: function onError() {
          return _this2.setState({
            banner: null
          });
        }
      }), this.player && isPlaying && /*#__PURE__*/_react["default"].createElement("div", {
        className: _molaPlayer.childContainer,
        id: "video-child"
      }, this.renderBugLogo(bugLogoVideo), children, isBuffering && isHover && /*#__PURE__*/_react["default"].createElement(_molaPlayer.UserFeedback, null, /*#__PURE__*/_react["default"].createElement("code", null, "Buffering . . .")), /*#__PURE__*/_react["default"].createElement(_customController["default"], {
        id: id,
        player: this.player,
        isPreroll: isPreroll,
        isHover: isHover,
        config: controllerConfig,
        recommendation: recommendation
      }), canStartNextVideo && this.renderNextVideo(hasNextVideo)));
    }
  }]);

  return Player;
}(_react.Component);

_defineProperty(Player, "propTypes", {
  id: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string,
  poster: _propTypes["default"].string,
  children: _propTypes["default"].node,
  bugLogo: _propTypes["default"].object,
  isPlayButtonDisabled: _propTypes["default"].bool,
  recommendation: _propTypes["default"].object,
  playerConfig: _propTypes["default"].object
  /** list to override controllerConfig */

});

var _default = Player;
exports["default"] = _default;