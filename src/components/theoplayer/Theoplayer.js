import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import {
  theoScripts,
  theoStyle,
  theoLibraryLocation,
  verimatrixDRMConf
} from './config';
import { Arrow, videoPlayer, arrowIcon } from './style';
import AdBanner from './adApi';
class Theoplayer extends Component {
  state = {
    toggleArrow: false
  };

  static propTypes = {
    licenseKey: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    isTrailer: PropTypes.bool,
    subtitles: PropTypes.array,
    autoPlay: PropTypes.bool,
    allowMutedAutoplay: PropTypes.bool,
    showBackBtn: PropTypes.bool,
    fullscreen: PropTypes.bool,
    playerBtnImg: PropTypes.string,
    className: PropTypes.string,
    noPause: PropTypes.bool,
    showAudioButton: PropTypes.bool,
    showReplayButton: PropTypes.bool,
    handleOnVideoLoad: PropTypes.func,
    handleOnVideoPlaying: PropTypes.func,
    handleOnVideoEnded: PropTypes.func,
    handleOnVideoPause: PropTypes.func,
    handleOnVideoPlay: PropTypes.func,
    handleVideoTimeUpdate: PropTypes.func,
    isMobile: PropTypes.bool,
    videoType: PropTypes.string,
    poster: PropTypes.string,
    adsSource: PropTypes.string,
    adsBannerUrl: PropTypes.string,
    adsBannerOptions: PropTypes.object,
    resizeBannerAndCBarEnabled: PropTypes.bool,
    skipVideoAdsOffset: PropTypes.number,
    deviceId: PropTypes.string,
    isDRM: PropTypes.bool
  };

  static defaultProps = {
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
    skipVideoAdsOffset: null,
    deviceId: '',
    isDRM: false
  };

  handleGoBack = () => {
    const { goBack } = history;
    if (goBack) {
      goBack();
    }
  };

  getToggleArrow = () => {
    const { toggleArrow } = this.state;
    const { showBackBtn } = this.props;
    if (showBackBtn) {
      this.setState({
        toggleArrow: !toggleArrow
      });
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
      isDRM
    } = this.props;

    // const verimatrixDRMConfiguration = {
    //   fairplay: {
    //     certificateURL: 'http://119.73.158.229/fps-s/fairplay_sony195.cer',
    //     licenseAcquisitionURL:
    //       'http://ec2-54-169-140-196.ap-southeast-1.compute.amazonaws.com:8064/fpsa/v1.0/?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw'
    //     // headers: {
    //     //   ETag: 'f71-57faefd0c21d3',
    //     //   'Accept-Ranges': 'bytes',
    //     //   'Content-Length': '3953',
    //     //   'Access-Control-Allow-Origin': '*',
    //     //   'Content-Type': 'application/vnd.apple.mpegurl'
    //     // },
    //     // useCredentials: true
    //   },
    //   playready: {
    //     licenseAcquisitionURL:
    //       'https://pr.vmxapac.net:8065/PlayReady/rightsmanager.asmx?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw',
    //   },
    //   widevine: {
    //     licenseAcquisitionURL:
    //       'https://vmxapac.net:8063?deviceId=Y2U1NmM3NzAtNmI4NS0zYjZjLTk4ZDMtOTFiN2FjMTZhYWUw',
    //   }
    // };

    const verimatrixDRMConfiguration = JSON.parse(
      JSON.stringify(verimatrixDRMConf)
    );

    verimatrixDRMConfiguration.fairplay.licenseAcquisitionURL = `${
      verimatrixDRMConf.fairplay.licenseAcquisitionURL
    }?deviceId=${deviceId}`;
    verimatrixDRMConfiguration.playready.licenseAcquisitionURL = `${
      verimatrixDRMConf.playready.licenseAcquisitionURL
    }?deviceId=${deviceId}`;
    verimatrixDRMConfiguration.widevine.licenseAcquisitionURL = `${
      verimatrixDRMConf.widevine.licenseAcquisitionURL
    }?deviceId=${deviceId}`;

    // console.log("verimatrixDRMConfiguration", verimatrixDRMConfiguration)

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
        src: movieUrl,
        // src: isSafari
        //   ? 'http://119.73.158.229/redbull-fps/stream.m3u8'
        //   : 'https://cdn-supersoccer-k-01.akamaized.net/Content/DASH/Live/channel(74fa5c1e-bde9-6718-e3ab-11227d90da31)/manifest.mpd?hdnts=st=1550200457~exp=1552792457~acl=/*~hmac=56352d8b8b847dca3f221808343bc03b5bce35733bdb9aa81e135caca496e138',
        // type: isSafari
        //   ? 'application/x-mpegurl' /* sets type to HLS */
        //   : 'application/dash+xml' /* sets type to Verimetrix */,
        // contentProtection: certificateUrl ? verimatrixDRMConfiguration : null
        contentProtection: isDRM ? verimatrixDRMConfiguration : null
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
      const isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
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
    if (!this.isSafari) {
      this.setState({ isFullscreen: !isFullscreen }, () => {
        if (!isFullscreen) {
          window.screen.orientation.lock('landscape');
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
    this.isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
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
      this.isSafari = /.*Version.*Safari.*/.test(navigator.userAgent);
      if (!this.isSafari) {
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
    const { toggleArrow } = this.state;
    const { className, showBackBtn, children } = this.props;
    return (
      <div
        className={`${videoPlayer} ${className} video-container video-js theoplayer-skin`}
        onMouseEnter={this.getToggleArrow}
        onMouseLeave={this.getToggleArrow}
        ref={el => {
          this.containerPlayer = el;
        }}
      >
        {showBackBtn && (
          <Arrow isShow={toggleArrow} onClick={this.handleGoBack}>
            <span className={arrowIcon} />
          </Arrow>
        )}
        {children}
      </div>
    );
  }
}

export default Theoplayer;
