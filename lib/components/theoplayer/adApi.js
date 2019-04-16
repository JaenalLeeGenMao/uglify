'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AdBanner = function () {
    function AdBanner(_ref) {
        var player = _ref.player,
            ipaRequestUrl = _ref.ipaRequestUrl,
            araRequestUrl = _ref.araRequestUrl,
            _ref$ipaEnabled = _ref.ipaEnabled,
            ipaEnabled = _ref$ipaEnabled === undefined ? true : _ref$ipaEnabled,
            _ref$ipaDuration = _ref.ipaDuration,
            ipaDuration = _ref$ipaDuration === undefined ? 30 : _ref$ipaDuration,
            _ref$ipaVisibility = _ref.ipaVisibility,
            ipaVisibility = _ref$ipaVisibility === undefined ? true : _ref$ipaVisibility,
            _ref$ipaNoAdsTime = _ref.ipaNoAdsTime,
            ipaNoAdsTime = _ref$ipaNoAdsTime === undefined ? 30 : _ref$ipaNoAdsTime,
            _ref$closable = _ref.closable,
            closable = _ref$closable === undefined ? true : _ref$closable,
            _ref$skipOffset = _ref.skipOffset,
            skipOffset = _ref$skipOffset === undefined ? 0 : _ref$skipOffset,
            _ref$ipaTimeOffset = _ref.ipaTimeOffset,
            ipaTimeOffset = _ref$ipaTimeOffset === undefined ? 0 : _ref$ipaTimeOffset,
            _ref$araRefreshTime = _ref.araRefreshTime,
            araRefreshTime = _ref$araRefreshTime === undefined ? 60 : _ref$araRefreshTime,
            _ref$araResume = _ref.araResume,
            araResume = _ref$araResume === undefined ? true : _ref$araResume,
            _ref$araEnabled = _ref.araEnabled,
            araEnabled = _ref$araEnabled === undefined ? false : _ref$araEnabled,
            _ref$resizeBannerAndC = _ref.resizeBannerAndCBarEnabled,
            resizeBannerAndCBarEnabled = _ref$resizeBannerAndC === undefined ? true : _ref$resizeBannerAndC;

        _classCallCheck(this, AdBanner);

        // constructor props
        this.player = player;
        this.ipaRequestUrl = ipaRequestUrl;
        this.araRequestUrl = araRequestUrl;
        this.ipaEnabled = ipaEnabled;
        this.araEnabled = araEnabled;
        this.visibility = ipaVisibility;
        this.closable = closable;
        this.ipaDuration = typeof ipaDuration === 'number' ? ipaDuration : this.hmsToSecondsOnly(ipaDuration) || 0;
        this.skipOffset = typeof skipOffset === 'number' ? skipOffset : this.hmsToSecondsOnly(skipOffset) || 0;
        this.ipaTimeOffset = typeof ipaTimeOffset === 'number' ? ipaTimeOffset : this.hmsToSecondsOnly(ipaTimeOffset) || 0;
        this.ipaNoAdsTime = typeof ipaNoAdsTime === 'number' ? ipaNoAdsTime : this.hmsToSecondsOnly(ipaNoAdsTime) || 30;
        this.araRefreshTime = typeof araRefreshTime === 'number' ? araRefreshTime : this.hmsToSecondsOnly(araRefreshTime) || 60;
        this.araResume = araResume;
        this.resizeBannerAndCBarEnabled = resizeBannerAndCBarEnabled;

        // IPA banner dimension
        this.BANNER_ASPECT_WIDTH = 377;
        this.BANNER_ASPECT_HEIGHT = 30;
        this.VIDEO_ASPECT_WIDTH = 16;
        this.VIDEO_ASPECT_HEIGHT = 9;

        // sources
        this.currentAd = {};
        this.araAdsFromServer = [];

        // timers
        this.globalTime = 0;
        this.timeOffsetTimer = null;
        this.rotationTimer = null;
        this.araRequestTimer = null;
        this.noIpaAdsTimer = null;

        // api helpers
        this.ipaAdPlaying = false;
        this.araListener = false;
        this.setSkipOffsetIfClosable = this.closable ? this.skipOffset : 0;
        this.currenAraAdIndex = 0;
        this.isThisAdAlredySheduled = null;

        // ui helpers
        this.playerControls = {};
        this.ipaStyleAttached = false;
        this.closeElement = null;
        this.resetControls = false;

        // custom event listener functions: "adchange"
        this.listeners = new Map();

        // global binded functions used in even listeners
        this.sheduleAfterFirstStreamLoad = function () {
            // method thats fires up the shedule after first play after the class instance was created
            if (!this.streamListener) {
                this.streamListener = true;
                this.ipaRequest();
                this.araRequest();
            } else {
                return;
            }
        }.bind(this);

        this.onAraAdStart = function () {
            // method for skipping forward the stream after the ad ends if the resume property is set to true

            this.resetControls = true;
            this.unloadBanner();

            var resumeTime = 0;

            var resumeTimer = setInterval(function () {
                resumeTime += 0.25;
            }, 250);

            var onAraAdEnd = function () {
                this.currenAraAdIndex += 1;

                if (this.currenAraAdIndex === this.araAdsFromServer.length) {
                    this.currenAraAdIndex = 0;
                    clearTimeout(this.araRequestTimer);
                    this.araRequest();
                }

                this.player.ads.removeEventListener('adbreakend', onAraAdEnd);
                this.ipaRequest();

                if (this.araResume) {
                    clearInterval(resumeTimer);
                    this.player.currentTime += resumeTime;
                }
            }.bind(this);

            this.player.ads.addEventListener('adbreakend', onAraAdEnd);
        }.bind(this);
    }

    _createClass(AdBanner, [{
        key: 'init',
        value: function init() {
            this.player.addEventListener('timeupdate', this.sheduleAfterFirstStreamLoad);
            //if (!this.streamListener) {
            //    this.player.addEventListener('timeupdate', this.sheduleAfterFirstStreamLoad);
            //} else {
            //    this.ipaRequest();
            //    this.araRequest();
            //}
        }
    }, {
        key: 'ipaRequest',
        value: function ipaRequest() {
            if (this.ipaEnabled && this.ipaRequestUrl) {
                var xhttp = new XMLHttpRequest();
                clearTimeout(this.noIpaAdsTimer);
                this.isThisAdAlredySheduled = false;

                xhttp.onreadystatechange = function () {
                    var _this = this;

                    if (xhttp.readyState === 4 && xhttp.status === 200) {
                        var response = JSON.parse(xhttp.responseText);
                        var ads = response.data.data;
                        var imgURL = void 0,
                            clickthroughURL = void 0,
                            id = void 0;

                        if (ads.length <= 0) {
                            this.resetControls = true;
                            this.resetControlsPosition();
                            this.noIpaAdsTimer = setTimeout(function () {
                                _this.ipaRequest();
                            }, this.ipaNoAdsTime * 1000);
                        }

                        ads.forEach(function (responseAd) {
                            imgURL = responseAd.mediaURL;
                            clickthroughURL = responseAd.link;
                            id = responseAd.id;

                            _this.initIpa(imgURL, clickthroughURL, id);

                            var detailsObj = {
                                details: {
                                    id: id,
                                    mediaImg: imgURL,
                                    clickTarget: clickthroughURL,
                                    requestUrl: _this.requestUrl,
                                    globalTime: _this.globalTime
                                }
                            };

                            _this.dispatchCustomEvent("adchange", detailsObj);

                            if (window.webkit) {
                                //message for iOS
                                window.webkit.messageHandlers.adchange.postMessage(detailsObj);
                            }

                            if (typeof theoplayerAndroid !== 'undefined') {
                                //message for android
                                theoplayerAndroid.sendMessage("adchange", JSON.stringify(detailsObj));
                            }
                        });
                        this.closeElement = null;
                        this.resetControls = false;
                    }
                }.bind(this);

                xhttp.onerror = function () {
                    console.log("An ad error has occured. Please check whether an ad blocker is active.");
                };
                xhttp.open("GET", this.ipaRequestUrl, true);
                xhttp.send();
            }
        }
    }, {
        key: 'araRequest',
        value: function araRequest() {
            var _this2 = this;

            if (this.araEnabled && this.araRequestUrl) {
                this.araRequestTimer = setTimeout(function () {
                    _this2.araAdsFromServer = [];

                    //ARA REQUEST
                    var araXhttp = new XMLHttpRequest();
                    araXhttp.onreadystatechange = function () {
                        if (araXhttp.readyState === 4 && araXhttp.status === 200) {
                            var response = JSON.parse(araXhttp.responseText);
                            var ads = response.data;

                            this.araAdsFromServer = ads.data[0].ads;

                            this.dispatchCustomEvent("adchange", this.araAdsFromServer);

                            if (window.webkit) {
                                //message for iOS
                                window.webkit.messageHandlers.adchange.postMessage(this.araAdsFromServer);
                            }

                            if (typeof theoplayerAndroid !== 'undefined') {
                                //message for android
                                theoplayerAndroid.sendMessage("adchange", JSON.stringify(this.araAdsFromServer));
                            }

                            if (this.araAdsFromServer.length === 0) {
                                this.araRequest();
                            } else {
                                this.initARA();
                            }
                        }
                    }.bind(_this2);
                    araXhttp.onerror = function () {
                        console.log("An ad error has occured. Please check whether an ad blocker is active.");
                    };
                    araXhttp.open("GET", _this2.araRequestUrl, true);
                    araXhttp.send();
                }, this.araRefreshTime * 1000);
            }
        }
    }, {
        key: 'initARA',
        value: function initARA() {
            var _this3 = this;

            // sheduling ARA ads

            this.araAdsFromServer.forEach(function (ad) {

                var adTimeOffsetScheduleValue = void 0;

                if (typeof ad.timeOffset === 'number') {
                    adTimeOffsetScheduleValue = ad.timeOffset + _this3.player.currentTime;
                } else {
                    var timeOffsetInSeconds = _this3.hmsToSecondsOnly(ad.timeOffset);
                    adTimeOffsetScheduleValue = timeOffsetInSeconds ? timeOffsetInSeconds + _this3.player.currentTime : ad.timeOffset;
                }
                _this3.player.ads.schedule({ sources: ad.adTag, timeOffset: adTimeOffsetScheduleValue, skipOffset: _this3.closable ? _this3.setSkipOffsetIfClosable : -1 });
            });
            if (!this.araListener) {
                this.araListener = true;
                this.player.ads.addEventListener('adbreakbegin', this.onAraAdStart);
            }
            this.setRotation();
        }
    }, {
        key: 'initIpa',
        value: function initIpa(imgUrl, clickthroughUrl, id) {
            var _this4 = this;

            //  console.log('initIpa at', this.globalTime, ' id ', id);
            var vastTemplate = '<?xml version="1.0" encoding="UTF-8"?>\n                <VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="3.0">\n                 <Ad>\n                  <InLine>\n                   <AdSystem>GDFP</AdSystem>\n                   <AdTitle>THEOplayer NonLinearImage</AdTitle>\n                   <Description><![CDATA[External NCA1C1L1 NonLinearImage ad]]></Description>\n                   <Creatives>\n                    <Creative id="' + id + '">\n                     <NonLinearAds width="125" height="125">\n                      <NonLinear id="GDFP" width="480" height="70" minSuggestedDuration="00:00:20" scalable="true" maintainAspectRatio="true">\n                        <NonLinearClickThrough><![CDATA[' + clickthroughUrl + ']]></NonLinearClickThrough>\n                       <StaticResource creativeType="image/png"><![CDATA[' + imgUrl + ']]></StaticResource>\n                      </NonLinear>\n                     </NonLinearAds>\n                    </Creative>\n                   </Creatives>\n                  </InLine>\n                 </Ad>\n                </VAST>';

            var blob = new Blob([vastTemplate], { type: 'application/octet-stream' }); // pass a useful mime type here
            var url = URL.createObjectURL(blob);

            this.player.ads.scheduledAdBreaks.forEach(function (ad) {
                ad.ads.forEach(function (sheduledAd) {
                    if (sheduledAd.id && sheduledAd.id.toString() === id.toString()) {
                        _this4.isThisAdAlredySheduled = true;
                    }
                });
            });

            //this.player.ads.schedule({ sources: url, skipOffset: this.setSkipOffsetIfClosable });

            if (!this.isThisAdAlredySheduled) {
                this.player.ads.schedule({ sources: url, skipOffset: this.setSkipOffsetIfClosable });
            }

            this.isThisAdAlredySheduled = false;

            var wrapper = this.player.element.parentNode;
            var playerContainer = wrapper.parentElement;
            var bannerContainer = wrapper.querySelector('.theoplayer-ad-nonlinear');
            var controlBar = wrapper.querySelector('.vjs-control-bar');

            var dimensionChangeListener = void 0;
            if (this.resizeBannerAndCBarEnabled) {
                dimensionChangeListener = this.resizeBannerAndControlBar.bind(this, playerContainer, wrapper, bannerContainer, controlBar);
            }
            var presentationModeChangeListener = this.updateWrapperHeight.bind(this, wrapper);

            if (this.playerControls && this.playerControls.bannerContainer && this.visibility) {
                this.initialiseBanner(playerContainer, wrapper, bannerContainer, controlBar, dimensionChangeListener, presentationModeChangeListener);
            }

            var initializeBannerOnce = function (event) {
                if (event.ad.type === 'nonlinear' && event.ad.clickThrough === clickthroughUrl && !this.ipaAdPlaying) {
                    //  console.log('initializeBannerOnce at', this.globalTime);
                    this.playerControls = {
                        playerContainer: playerContainer,
                        wrapper: wrapper,
                        controlBar: controlBar,
                        dimensionChangeListener: dimensionChangeListener,
                        presentationModeChangeListener: presentationModeChangeListener,
                        bannerContainer: bannerContainer
                    };

                    this.currentAd = {
                        id: id,
                        currentTime: 0,
                        clickThrough: event.ad.clickThrough,
                        type: event.ad.type
                    };

                    this.player.ads.removeEventListener('adbegin', initializeBannerOnce);
                    this.ipaAdPlaying = true;

                    if (this.playerControls.bannerContainer && this.visibility) {
                        this.initialiseBanner(playerContainer, wrapper, bannerContainer, controlBar, dimensionChangeListener, presentationModeChangeListener);
                        this.playerControls.bannerContainer.style.display = 'block';
                    } else {
                        this.playerControls.bannerContainer.style.display = 'none';
                    }

                    this.setCloseButton();
                    this.setRotation();
                }
            }.bind(this);

            this.player.ads.addEventListener('adbegin', initializeBannerOnce);

            var unloadBannerOnce = function (event) {
                this.ipaAdPlaying = false;
                if (event.ad.type === 'nonlinear' && event.ad.clickThrough === clickthroughUrl) {
                    this.skipped = true;
                    this.player.ads.removeEventListener('adskip', unloadBannerOnce);
                    this.unloadBanner();
                }
            }.bind(this);

            this.player.ads.addEventListener('adskip', unloadBannerOnce);
        }
    }, {
        key: 'initialiseBanner',
        value: function initialiseBanner(playerContainer, wrapper, bannerContainer, controlBar, dimensionChangeListener, presentationModeChangeListener) {
            this.changeDOM(playerContainer, wrapper, bannerContainer, controlBar);
            this.player.presentation.addEventListener('presentationmodechange', presentationModeChangeListener);
            this.player.addEventListener('dimensionchange', dimensionChangeListener);
        }
    }, {
        key: 'unloadBanner',
        value: function unloadBanner() {

            this.player.presentation.removeEventListener('presentationmodechange', this.playerControls.presentationModeChangeListener);
            this.player.removeEventListener('dimensionchange', this.loadedAddimensionChangeListener);
            this.resetControlsPosition();
        }
    }, {
        key: 'changeDOM',
        value: function changeDOM(playerContainer, wrapper, bannerContainer, controlBar) {
            this.reAttachBannerContainerToWrapper(wrapper, bannerContainer);

            this.updateBannerContainerSizeAndPosition(bannerContainer);
            this.setWidthAndHeightOfAllChildrenTo100PercentIfNotAnAdCloseButton(bannerContainer);

            controlBar.style.width = 'initial';

            this.updateWrapperHeight(wrapper);
            if (this.resizeBannerAndCBarEnabled) {
                this.resizeBannerAndControlBar(playerContainer, wrapper, bannerContainer, controlBar);
            }
        }
    }, {
        key: 'updateBannerContainerSizeAndPosition',
        value: function updateBannerContainerSizeAndPosition(bannerContainer) {
            bannerContainer.style.width = '';
            bannerContainer.style.zIndex = '';
            bannerContainer.style.left = '';
            bannerContainer.style.right = '';
            var bannerHeightPercentage = this.BANNER_ASPECT_HEIGHT * this.VIDEO_ASPECT_WIDTH / (this.VIDEO_ASPECT_HEIGHT * this.BANNER_ASPECT_WIDTH) * 100;
            bannerContainer.style.height = bannerHeightPercentage + '%';
            bannerContainer.setAttribute('style', bannerContainer.getAttribute('style') + ';bottom:-' + bannerHeightPercentage + '% !important'); // cannot just override important
        }
    }, {
        key: 'setWidthAndHeightOfAllChildrenTo100PercentIfNotAnAdCloseButton',
        value: function setWidthAndHeightOfAllChildrenTo100PercentIfNotAnAdCloseButton(container) {

            if (container && !this.ipaStyleAttached) {
                this.ipaStyleAttached = true;
                var styleValue = ".theoplayer-ad-nonlinear-content {position:relaive; width:100%; height:100%} .theoplayer-ad-nonlinear-content a {display:block; width:100%; height:100%} .theoplayer-ad-nonlinear-content a img {display:block; width:100%; height:100%}";

                var style = document.createElement('STYLE');
                style.type = 'text/css';
                style.appendChild(document.createTextNode(styleValue));
                document.head.appendChild(style);
            }
        }
    }, {
        key: 'updateWrapperHeight',
        value: function updateWrapperHeight(wrapper) {
            wrapper.style.bottom = this.BANNER_ASPECT_HEIGHT * this.VIDEO_ASPECT_WIDTH / (this.BANNER_ASPECT_HEIGHT * this.VIDEO_ASPECT_WIDTH + this.VIDEO_ASPECT_HEIGHT * this.BANNER_ASPECT_WIDTH) * 100 + '%';
        }
    }, {
        key: 'resizeBannerAndControlBar',
        value: function resizeBannerAndControlBar(playerContainer, wrapper, bannerContainer, controlBar) {
            var containerWidth = playerContainer.offsetWidth;
            var containerHeight = playerContainer.offsetHeight;
            var ratioOfVideoAndBannerWidth = this.BANNER_ASPECT_WIDTH * this.VIDEO_ASPECT_WIDTH;
            var ratioOfVideoAndBannerHeight = this.BANNER_ASPECT_HEIGHT * this.VIDEO_ASPECT_WIDTH + this.VIDEO_ASPECT_HEIGHT * this.BANNER_ASPECT_WIDTH;

            var hasBlackBarsOnSide = ratioOfVideoAndBannerHeight * containerWidth / (ratioOfVideoAndBannerWidth * containerHeight) > 1;

            var margin = 0;

            if (hasBlackBarsOnSide) {
                margin = Math.floor((wrapper.offsetWidth - Math.min(wrapper.offsetHeight * this.VIDEO_ASPECT_WIDTH / this.VIDEO_ASPECT_HEIGHT, wrapper.offsetWidth)) / 2);
                margin += 'px';
            }

            bannerContainer.style.right = bannerContainer.style.left = controlBar.style.right = controlBar.style.left = margin;
        }
    }, {
        key: 'reAttachBannerContainerToWrapper',
        value: function reAttachBannerContainerToWrapper(wrapper, bannerContainer) {
            wrapper.appendChild(bannerContainer);
        }
    }, {
        key: 'resetControlsPosition',
        value: function resetControlsPosition() {
            if (this.playerControls.controlBar && this.resetControls) {
                this.playerControls.controlBar.style.width = '';
                this.playerControls.controlBar.style.right = '';
                this.playerControls.controlBar.style.left = '';
                this.playerControls.wrapper.style.bottom = '';
            }
        }
    }, {
        key: 'setCloseButton',
        value: function setCloseButton() {
            var _this5 = this;

            if (this.player) {
                setTimeout(function () {
                    if (!_this5.closable && _this5.playerControls.wrapper) {
                        _this5.playerControls.bannerContentContainer = _this5.playerControls.wrapper.querySelector('.theoplayer-ad-nonlinear-content');
                        _this5.closeElement = _this5.playerControls.bannerContentContainer.querySelector('.theoplayer-ad-nonlinear-close');
                        _this5.closeElement.remove();
                    } else if (_this5.playerControls.bannerContentContainer && _this5.closeElement) {
                        _this5.playerControls.bannerContentContainer.appendChild(_this5.closeElement);
                    }
                }, 10);
            }
        }
    }, {
        key: 'setRotation',
        value: function setRotation() {
            var _this6 = this;

            if (!this.rotationTimer) {

                this.rotationTimer = setInterval(function () {
                    _this6.globalTime += .25;
                    _this6.currentAd.currentTime += .25;

                    if (!_this6.closeElement) {

                        if (!_this6.playerControls.bannerContentContainer && _this6.playerControls.wrapper) {
                            _this6.playerControls.bannerContentContainer = _this6.playerControls.wrapper.querySelector('.theoplayer-ad-nonlinear-content');
                        } else if (_this6.playerControls.bannerContentContainer) {
                            _this6.closeElement = _this6.playerControls.bannerContentContainer.querySelector('.theoplayer-ad-nonlinear-close');
                        }

                        if (_this6.closeElement) {
                            var events = ['mouseup', 'touchend'];
                            events.forEach(function (e) {
                                this.closeElement.addEventListener(e, function () {
                                    this.resetControls = true;
                                    this.resetControlsPosition();
                                }.bind(this));
                            }.bind(_this6));
                        }
                    }

                    //console.log('current time', this.currentAd.currentTime);
                    if (!_this6.player.ads.playing) {
                        if (_this6.skipOffset > 0 && _this6.ipaDuration > 0) {

                            if (_this6.ipaDuration >= _this6.skipOffset && _this6.currentAd.currentTime >= _this6.ipaDuration) {
                                _this6.rotationChange();
                            } else if (_this6.ipaDuration <= _this6.skipOffset && _this6.currentAd.currentTime >= _this6.skipOffset) {
                                _this6.rotationChange();
                            }
                        } else if (_this6.ipaDuration > 0 && _this6.currentAd.currentTime >= _this6.ipaDuration) {
                            _this6.rotationChange();
                        }
                    }
                }, 250);
            }
        }
    }, {
        key: 'rotationChange',
        value: function rotationChange() {
            var _this7 = this;

            this.currentAd.currentTime = 0;
            if (this.ipaTimeOffset > 0) {
                this.resetControls = true;
                this.player.ads.skip();
                this.timeOffsetTimer = setTimeout(function () {
                    _this7.ipaRequest();
                }, this.ipaTimeOffset * 1000);
            } else {
                this.player.ads.skip();
                this.ipaRequest();
            }
        }
    }, {
        key: 'close',
        value: function close() {
            if (this.closable) {
                this.resetControls = true;
                this.player.ads.skip();
            }
        }

        //enableClosing() {
        //    if (!this.closable) {
        //        this.closable = true;
        //    }
        //    this.setCloseButton();
        //}

        //disableClosing() {
        //    if (this.closable) {
        //        this.closable = false;
        //    }
        //    this.setCloseButton();
        //}

    }, {
        key: 'showIpa',
        value: function showIpa() {
            this.visibility = true;
            if (this.ipaAdPlaying) {
                this.playerControls.bannerContainer.style.display = 'block';
                this.changeDOM(this.playerControls.playerContainer, this.playerControls.wrapper, this.playerControls.bannerContainer, this.playerControls.controlBar);
            }
        }
    }, {
        key: 'hideIpa',
        value: function hideIpa() {
            this.visibility = false;
            if (this.ipaAdPlaying) {
                this.playerControls.bannerContainer.style.display = 'none';
                this.resetControls = true;
                this.resetControlsPosition();
            }
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            if (!this.ipaAdPlaying) {
                this.eraseData();
            } else if (this.skipOffset > 0) {
                if (this.currentAd.currentTime < this.skipOffset) {
                    var destroyTimer = setInterval(function () {
                        if (this.currentAd.currentTime > this.skipOffset) {
                            this.eraseData();
                            clearInterval(destroyTimer);
                        }
                    }.bind(this), 250);
                } else {
                    this.eraseData();
                }
            } else {
                this.eraseData();
            }
        }
    }, {
        key: 'eraseData',
        value: function eraseData() {
            clearTimeout(this.timeOffsetTimer);
            this.timeOffsetTimer = null;

            clearTimeout(this.araRequestTimer);
            this.araRequestTimer = null;

            clearTimeout(this.noIpaAdsTimer);
            this.noIpaAdsTimer = null;

            clearInterval(this.rotationTimer);
            this.rotationTimer = null;

            this.player.removeEventListener('timeupdate', this.sheduleAfterFirstStreamLoad);
            this.player.ads.removeEventListener('adbreakbegin', this.onAraAdStart);

            this.resetControls = true;
            this.player.ads.skip();
            this.unloadBanner();
            this.araAdsFromServer = [];
            this.araListener = false;
            this.currentAd = null;
        }

        //helpers

    }, {
        key: 'hmsToSecondsOnly',
        value: function hmsToSecondsOnly(str) {
            var p = str.split(':'),
                s = 0,
                m = 1;

            while (p.length > 0) {
                s += m * parseInt(p.pop(), 10);
                m *= 60;
            }

            return s;
        }
    }, {
        key: 'isFunction',
        value: function isFunction(obj) {
            return typeof obj === 'function' || false;
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(label, callback) {
            this.listeners.has(label) || this.listeners.set(label, []);
            this.listeners.get(label).push(callback);
        }
    }, {
        key: 'removeEventListener',
        value: function removeEventListener(label, callback) {
            var _this8 = this;

            var listeners = this.listeners.get(label),
                index = void 0;

            if (listeners && listeners.length) {
                index = listeners.reduce(function (i, listener, index) {
                    return _this8.isFunction(listener) && listener === callback ? i = index : i;
                }, -1);

                if (index > -1) {
                    listeners.splice(index, 1);
                    this.listeners.set(label, listeners);
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'dispatchCustomEvent',
        value: function dispatchCustomEvent(label) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            var listeners = this.listeners.get(label);

            if (listeners && listeners.length) {
                listeners.forEach(function (listener) {
                    listener.apply(undefined, args);
                });
                return true;
            }
            return false;
        }
    }]);

    return AdBanner;
}();

function mobileAdInit(_ref2) {
    var player = _ref2.player,
        ipaRequestUrl = _ref2.ipaRequestUrl,
        araRequestUrl = _ref2.araRequestUrl,
        ipaEnabled = _ref2.ipaEnabled,
        araEnabled = _ref2.araEnabled,
        ipaDuration = _ref2.ipaDuration,
        ipaVisibility = _ref2.ipaVisibility,
        ipaTimeOffset = _ref2.ipaTimeOffset,
        araRefreshTime = _ref2.araRefreshTime,
        araResume = _ref2.araResume,
        closable = _ref2.closable,
        skipOffset = _ref2.skipOffset;

    mobileAdApi = new AdBanner({ player: player, ipaRequestUrl: ipaRequestUrl, araRequestUrl: araRequestUrl, ipaEnabled: ipaEnabled, araEnabled: araEnabled, ipaDuration: ipaDuration, ipaVisibility: ipaVisibility, ipaTimeOffset: ipaTimeOffset, araRefreshTime: araRefreshTime, araResume: araResume, closable: closable, skipOffset: skipOffset });
    mobileAdApi.init();
}

function mobileAdDestroy() {
    mobileAdApi.destroy();
    mobileAdApi = null;
}

function mobileAdClose() {
    mobileAdApi.close();
}

function mobileAdShowIpa() {
    mobileAdApi.showIpa();
}

function mobileAdHideIpa() {
    mobileAdApi.hideIpa();
}

exports.default = AdBanner;