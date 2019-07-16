import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { theoScripts, theoStyle, theoLibraryLocation } from './config';
import { arrowContainer, videoPlayer, arrowIcon, closeIcon } from './style';
import AdBanner from './adApi';
class Theoplayer extends Component {
  state = {
    isFullscreen: false
  };

  static propTypes = {
    movieUrl: PropTypes.string.isRequired,
    subtitles: PropTypes.array,
    autoPlay: PropTypes.bool,
    allowMutedAutoplay: PropTypes.bool,
    showBackBtn: PropTypes.bool,
    className: PropTypes.string,
    handleOnVideoLoad: PropTypes.func,
    handleOnVideoPlaying: PropTypes.func,
    handleOnVideoEnded: PropTypes.func,
    handleOnVideoPause: PropTypes.func,
    handleOnVideoPlay: PropTypes.func,
    handleVideoTimeUpdate: PropTypes.func,
    isMobile: PropTypes.bool,
    poster: PropTypes.string,
    adsSource: PropTypes.string,
    adsBannerUrl: PropTypes.string,
    adsBannerOptions: PropTypes.object,
    resizeBannerAndCBarEnabled: PropTypes.bool,
    skipVideoAdsOffset: PropTypes.number,
    deviceId: PropTypes.string,
    drm: PropTypes.object,
    handleOnReadyStateChange: PropTypes.func
  };

  static defaultProps = {
    autoPlay: true,
    isMobile: false,
    allowMutedAutoplay: true,
    className: '',
    showBackBtn: true,
    subtitles: [], // [{ kind: 'subtitles', src: url, label: 'id', type: 'srt' }]
    poster: '',
    adsSource: null,
    adsBannerUrl: null,
    adsBannerOptions: null,
    resizeBannerAndCBarEnabled: true,
    skipVideoAdsOffset: null,
    deviceId: '',
    drm: null
  };

  handleGoBack = () => {
    if (this.state.isFullscreen) {
      document.exitFullscreen();
    } else {
      const { goBack } = history;
      if (goBack) {
        goBack();
      }
    }
  };

  loadDynamicStyle = () => {
    let existingStyle = true;
    theoStyle.map(dt => {
      const el = document.getElementById(dt.id);
      const elExist = el ? true : false;
      existingStyle = existingStyle && elExist;
    });

    if (!existingStyle) {
      theoStyle.map(dt => {
        const head = document.getElementsByTagName('head')[0];
        const link = document.createElement('link');
        link.id = dt.id;
        link.rel = dt.rel;
        link.type = dt.type;
        link.href = dt.href;
        link.media = dt.media;
        head.appendChild(link);
      });
    }
  };

  initTheoPlayer = () => {
    const playerConfig = {
      libraryLocation: theoLibraryLocation,
      ui: {
        fluid: true
      }
    };
    this.theoPlayer = new window.THEOplayer.Player(
      this.containerPlayer,
      playerConfig
    );
    return this.theoPlayer;
  };

  configVideoPlayer = () => {
    const {
      movieUrl,
      subtitles,
      adsSource,
      skipVideoAdsOffset,
      deviceId,
      drm
    } = this.props;

    const userAgent = navigator.userAgent;
    const isSafari = /.*Version.*Safari.*/.test(userAgent);
    const trident = userAgent.indexOf('Trident/') >= 0;
    const edge = userAgent.indexOf('Edge/') >= 0;

    let verimatrixDRMConfiguration;
    if (drm) {
      verimatrixDRMConfiguration = {
        fairplay: {
          licenseAcquisitionURL: drm.fairplay
            ? `${drm.fairplay.licenseUrl}?deviceId=${deviceId}`
            : '',
          certificateURL: drm.fairplay
            ? `${drm.fairplay.certificateUrl}?deviceId=${deviceId}`
            : ''
        },
        playready: {
          licenseAcquisitionURL: drm.playready
            ? `${drm.playready.licenseUrl}?deviceId=${deviceId}`
            : ''
        },
        widevine: {
          licenseAcquisitionURL: drm.widevine
            ? `${drm.widevine.licenseUrl}?deviceId=${deviceId}`
            : ''
        }
      };
    }

    let drmStreamUrl = '';
    if (drm) {
      if (isSafari) {
        drmStreamUrl = drm.fairplay.streamUrl ? drm.fairplay.streamUrl : '';
      } else if (trident || edge) {
        drmStreamUrl = drm.playready.streamUrl ? drm.playready.streamUrl : '';
      } else {
        drmStreamUrl = drm.widevine.streamUrl ? drm.widevine.streamUrl : '';
      }
    }

    const responseInterceptor = response => {
      // console.log("response.url", response.url)
      // console.log("verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL", verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL)
      // console.log("TEST", response.url == verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL)
      // if (response.url.indexOf('') !== -1) {
      // var laurl = "http://ec2-54-169-140-196.ap-southeast-1.compute.amazonaws.com:8064/fpsa/v1.0/?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw";
      if (
        response.url ==
        verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL
      ) {
        // console.log("body", body)
        var body = response.body;
        var key = JSON.parse(body).ckc;
        // console.log("key", key)
        response.respondWith({
          body: key
        });
      }
    };

    this.player.source = {
      sources: {
        src: drmStreamUrl ? drmStreamUrl : movieUrl,
        contentProtection: drmStreamUrl ? verimatrixDRMConfiguration : null
      },
      ads: [
        {
          sources: adsSource ? adsSource : null,
          skipOffset: skipVideoAdsOffset
        }
      ],
      textTracks: subtitles,
      preload: 'auto'
    };
    this.player.network.addResponseInterceptor(responseInterceptor);
  };

  loadTheoPlayer() {
    const { autoPlay, allowMutedAutoplay, poster, isMobile } = this.props;
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
      // this.player.play();

      this.player.autoplay = true;
      // const isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
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

    this.player.addEventListener('timeupdate', this.handleVideoTimeUpd);

    // the first banner ad is scheduled upon the first playing event
    this.player.addEventListener('sourcechange', this.handleVideoSrcChange);
    this.player.addEventListener(
      'readystatechange',
      this.handleReadyStateChange
    );
  }

  handleVideoPause = () => {
    if (this.props.handleOnVideoPause) {
      this.props.handleOnVideoPause(true, this.player);
    }
  };

  handleVideoPlay = () => {
    if (this.props.handleOnVideoPlay) {
      this.props.handleOnVideoPlay(true, this.player);
    }
  };

  handleVideoEnded = () => {
    if (this.props.handleOnVideoPlaying) {
      this.props.handleOnVideoPlaying(false, this.player);
    }
    if (this.props.handleOnVideoEnded) {
      this.props.handleOnVideoEnded(true, this.player);
    }
    if (this.props.handleOnVideoPlay) {
      this.props.handleOnVideoPlay(false, this.player);
    }
  };

  handleVideoPlaying = () => {
    if (this.props.handleOnVideoPlaying) {
      this.props.handleOnVideoPlaying(true, this.player);
    }
  };

  handleVideoTimeUpd = timeCallback => {
    if (this.props.handleVideoTimeUpdate) {
      this.props.handleVideoTimeUpdate(timeCallback.currentTime, this.player);
    }
  };

  handleVideoSrcChange = () => {
    this.player.removeEventListener('playing', this.firstplay);
    this.player.addEventListener('playing', this.firstplay);
  };

  handleReadyStateChange = () => {
    if (this.props.handleOnReadyStateChange) {
      this.props.handleOnReadyStateChange(this.player);
    }
  };

  firstplay = () => {
    const {
      adsBannerUrl,
      adsBannerOptions,
      resizeBannerAndCBarEnabled
    } = this.props;

    if (!this.player.ads.playing) {
      // check that we're not trying to schedule the banner during a preroll
      this.player.removeEventListener('playing', this.firstplay);
      if (adsBannerUrl) {
        var AdBannerOptions = {
          player: this.player,
          ipaRequestUrl: adsBannerUrl,
          resizeBannerAndCBarEnabled: resizeBannerAndCBarEnabled,
          ...adsBannerOptions
        };
        const Advert = new AdBanner(AdBannerOptions);
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
  };

  loadFullscreenEvent = () => {
    ['', 'webkit', 'moz', 'ms'].forEach(prefix =>
      document.addEventListener(
        prefix + 'fullscreenchange',
        this.handleFullscreen,
        false
      )
    );
  };

  handleFullscreen = () => {
    const { isFullscreen } = this.state;

    const userAgent = navigator.userAgent;
    const isSafari = /.*Version.*Safari.*/.test(userAgent);
    const msie = userAgent.indexOf('MSIE ') >= 0;
    const trident = userAgent.indexOf('Trident/') >= 0;

    if (!isSafari && !msie && !trident) {
      this.setState({ isFullscreen: !isFullscreen }, () => {
        if (!isFullscreen) {
          window.screen.orientation.lock('landscape').catch(function(error) {});
        } else {
          window.screen.orientation.unlock();
        }
      });
    }
  };

  componentDidMount() {
    this.loadDynamicStyle();
    this.loadDynamicScript();
    this.loadFullscreenEvent();
  }

  loadDynamicScript = () => {
    let existingScript = true;
    theoScripts.map(dt => {
      const el = document.getElementById(dt.id);
      const elExist = el ? true : false;
      existingScript = existingScript && elExist;
    });

    if (!existingScript) {
      const scriptCount = theoScripts.length;
      let loadedScriptCount = 0;
      theoScripts.map(dt => {
        const script = document.createElement('script');
        script.src = dt.src;
        script.id = dt.id;
        document.body.appendChild(script);
        script.onload = () => {
          loadedScriptCount += 1;
          if (loadedScriptCount >= scriptCount) {
            this.loadTheoPlayer();
            if (this.props.handleOnVideoLoad) {
              this.props.handleOnVideoLoad(this.player);
            }
          }
        };
      });
    } else {
      this.loadTheoPlayer();
    }
    return false;
  };

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
      const userAgent = navigator.userAgent;
      const isSafari = /.*Version.*Safari.*/.test(userAgent);
      const msie = userAgent.indexOf('MSIE ') >= 0;
      const trident = userAgent.indexOf('Trident/') >= 0;

      if (!isSafari && !msie && !trident) {
        window.screen.orientation.unlock();
      }

      this.player.removeEventListener('pause', this.handleVideoPause);
      this.player.removeEventListener('play', this.handleVideoPlay);
      this.player.removeEventListener('ended', this.handleVideoEnded);
      this.player.removeEventListener('playing', this.handleVideoPlaying);
      this.player.removeEventListener('timeupdate', this.handleVideoTimeUpd);
      this.player.removeEventListener(
        'sourcechange',
        this.handleVideoSrcChange
      );
    }
  }

  render() {
    const { isFullscreen } = this.state;
    const { className, showBackBtn, children } = this.props;
    return (
      <div
        className={`${videoPlayer} ${className} video-container video-js theoplayer-skin`}
        ref={el => {
          this.containerPlayer = el;
        }}
      >
        {showBackBtn && (
          <div className={arrowContainer} onClick={this.handleGoBack}>
            {!isFullscreen && <span className={arrowIcon} />}
            {isFullscreen && <span className={closeIcon} />}
          </div>
        )}
        {children}
      </div>
    );
  }
}

export default Theoplayer;
