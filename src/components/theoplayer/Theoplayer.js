import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { theoScripts, theoStyle, theoLibraryLocation } from './config';
import { Arrow, videoPlayer, arrowIcon } from './style';
import AdBanner from './adApi'
class Theoplayer extends Component {
  state = {
    toggleArrow: false
  };

  static propTypes = {
    licenseKey: PropTypes.string.isRequired,
    movieUrl: PropTypes.string.isRequired,
    isTrailer: PropTypes.bool,
    theoConfig: PropTypes.array,
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
    resizeBannerAndCBarEnabled: PropTypes.bool
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
    theoConfig: [],
    playerBtnImg: 'https://image.flaticon.com/icons/svg/60/60682.svg', //playerArrow
    noPause: false,
    showAudioButton: false,
    showReplayButton: false,
    videoType: 'application/x-mpegurl',
    poster: '',
    adsSource: null,
    adsBannerUrl: null,
    adsBannerOptions: null,
    resizeBannerAndCBarEnabled: true
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
    const { videoType, movieUrl, theoConfig, adsSource } = this.props;
    if (adsSource) {
      this.player.source = {
        sources: [
          {
            src: movieUrl,
            type: videoType // sets type to HLS
          }
        ],
        ads: [
          {
            sources: adsSource,
          }
        ],
        textTracks: theoConfig,
        preload: 'auto'
      };
    }
    else {
      this.player.source = {
        sources: [
          {
            src: movieUrl,
            type: videoType // sets type to HLS
          }
        ],
        textTracks: theoConfig,
      };
    }
  }

  loadTheoPlayer() {
    const {
      autoPlay,
      allowMutedAutoplay,
      handleOnVideoPlaying,
      handleOnVideoEnded,
      handleOnVideoPause,
      handleOnVideoPlay,
      handleVideoTimeUpdate,
      poster,
      adsBannerUrl,
      adsBannerOptions,
      resizeBannerAndCBarEnabled
    } = this.props;
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
    const that = this;
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
      if (handleOnVideoPlaying) {
        handleOnVideoPlaying(true, that.player);
      }
    });

    this.player.addEventListener('timeupdate', function () {
      if (handleVideoTimeUpdate) {
        handleVideoTimeUpdate(this.currentTime, that.player);
      }
    });


    if (adsBannerUrl) {
      var AdBannerOptions = {
        player: this.player,
        ipaRequestUrl: adsBannerUrl,
        resizeBannerAndCBarEnabled: resizeBannerAndCBarEnabled,
        ...adsBannerOptions
      }
      const Advert = new AdBanner(AdBannerOptions);
      Advert.init();
    }

  }

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
    this.setState({ isFullscreen: !isFullscreen }, () => {
      if (!isFullscreen) {
        window.screen.orientation.lock('landscape');
      } else {
        window.screen.orientation.unlock();
      }
    });
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
      window.screen.orientation.unlock();
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
