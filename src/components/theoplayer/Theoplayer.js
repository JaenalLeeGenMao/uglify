import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { theoScripts, theoStyle, theoLibraryLocation } from './config'
import { Arrow, videoPlayer, arrowIcon } from './style';

class Theoplayer extends Component {
  state = {
    toggleArrow: false,
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
    handleOnVideoLoad: PropTypes.func,
    showAudioButton: PropTypes.bool,
    showReplayButton: PropTypes.bool,
    handleOnVideoPlaying: PropTypes.func,
    handleOnVideoEnded: PropTypes.func,
    isMobile: PropTypes.bool,
    videoType: PropTypes.string,
    poster: PropTypes.string
  };

  static defaultProps = {
    licenseKey: '',//theoplayer
    autoPlay: true,
    isMobile: false,
    allowMutedAutoplay: true,
    className: '',
    fullscreen: true,
    isTrailer: false,
    showBackBtn: true,
    playerBtnImg: 'https://image.flaticon.com/icons/svg/60/60682.svg', //playerArrow
    noPause: false,
    handleOnVideoLoad: () => { },
    showAudioButton: false,
    showReplayButton: false,
    handleOnVideoPlaying: () => { },
    handleOnVideoEnded: () => { },
    videoType: 'application/x-mpegurl',
    poster: ''
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
    theoStyle.map((dt) => {
      const el = document.getElementById(dt.id);
      const elExist = el ? true : false;
      existingStyle = existingStyle && elExist;
    });

    if (!existingStyle) {
      theoStyle.map((dt) => {
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
  }

  initTheoPlayer = () => {
    const playerConfig = {
      libraryLocation: theoLibraryLocation,
      ui: {
        fluid: true,
      },
    };
    this.theoPlayer = new window.THEOplayer.Player(this.containerPlayer, playerConfig);
    return this.theoPlayer;
  }

  configVideoPlayer = () => {
    const { videoType, movieUrl, theoConfig } = this.props;
    this.player.source = {
      sources: [
        {
          src: movieUrl,
          type: videoType // sets type to HLS
        }
      ],
      textTracks: theoConfig
    };
  }

  loadTheoPlayer() {
    const { autoPlay,
      allowMutedAutoplay,
      handleOnVideoPlaying,
      handleOnVideoEnded,
      poster
    } = this.props;
    this.player = this.initTheoPlayer();
    this.configVideoPlayer();
    this.player.poster = poster;
    if (autoPlay) {
      if (allowMutedAutoplay) {
        this.player.muted = true;
        this.player.loop = false;
      }
      this.player.play();
    }
    const that = this;
    this.player.addEventListener('pause', function () {
    });

    this.player.addEventListener('play', function () {
    })

    this.player.addEventListener('ended', function () {
      if (handleOnVideoPlaying) {
        handleOnVideoPlaying(false, that.player);
      }
      if (handleOnVideoEnded) {
        handleOnVideoEnded(true, that.player);
      }
    });

    this.player.addEventListener('playing', function () {
      // console.log("Width:", that.player.videoWidth,  that.player.videoHeight)
      if (handleOnVideoPlaying) {
        handleOnVideoPlaying(true, that.player);
      }
    });
  }

  // componentDidUpdate() {
  //   const { isMobile } = this.props;
  //   if (isMobile) {
  //     const screen = window.screen;
  //     screen.lockOrientationUniversal = (mode) =>
  //       screen.orientation && screen.orientation.lock(mode)
  //         .then(() => { }, err => { })
  //       || screen.mozLockOrientation && screen.mozLockOrientation(mode)
  //       || screen.msLockOrientation && screen.msLockOrientation(mode);
  //     screen.lockOrientationUniversal('landscape');
  //   }
  // }

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
    theoScripts.map((dt) => {
      const el = document.getElementById(dt.id);
      const elExist = el ? true : false;
      existingScript = existingScript && elExist;
    });

    if (!existingScript) {
      const scriptCount = theoScripts.length;
      let loadedScriptCount = 0;
      theoScripts.map((dt) => {
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
      })
    } else {
      this.loadTheoPlayer();
    }
    return false;
  };


  componentDidMount() {
    this.loadDynamicStyle();
    this.loadDynamicScript();
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  render() {
    const { toggleArrow } = this.state;
    const { className, showBackBtn } = this.props;
    return (

      <div
        className={`${videoPlayer} ${className} video-container video-js theoplayer-skin`}
        onMouseEnter={this.getToggleArrow}
        onMouseLeave={this.getToggleArrow}
        ref={(el) => {
          this.containerPlayer = el;
        }}
      >
        {showBackBtn && (
          <Arrow isShow={toggleArrow} onClick={this.handleGoBack}>
            <span className={arrowIcon} />
          </Arrow>
        )}
      </div>
    );
  }
}

export default Theoplayer;
