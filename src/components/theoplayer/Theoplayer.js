import React, { Component } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import { theoScripts, theoStyle, theoLibraryLocation } from './config';
import { Arrow, videoPlayer, arrowIcon, AudioButton } from './style';

// let player;
class Theoplayer extends Component {
  state = {
    toggleArrow: false,
    isMuted: this.props.allowMutedAutoplay
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
    showAudioButton: PropTypes.bool
  };

  static defaultProps = {
    licenseKey: '', //theoplayer
    autoPlay: true,
    allowMutedAutoplay: true,
    className: '',
    fullscreen: true,
    isTrailer: false,
    showBackBtn: true,
    playerBtnImg: 'https://image.flaticon.com/icons/svg/60/60682.svg', //playerArrow
    noPause: false,
    handleOnVideoLoad: () => {},
    showAudioButton: false
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
    if (toggleArrow) {
      this.setState(
        {
          toggleArrow: true
        },
        () => {
          setTimeout(() => {
            this.setState({ toggleArrow: false });
          }, 5000);
        }
      );
    }
  };

  handleScriptInject({ scriptTags }) {
    if (scriptTags) {
      scriptTagCount = scriptTags.length;
      scriptTags.map(tag => {
        tag.onload = this.handleOnLoad;
      });
    }
  }

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

  configTheoPlayer = () => {
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
    this.player.source = {
      sources: [
        {
          src: this.props.movieUrl,
          type: 'application/x-mpegurl' // sets type to HLS
        }
      ],
      textTracks: this.props.theoConfig
    };
  };

  loadTheoPlayer() {
    const { autoPlay, noPause, allowMutedAutoplay } = this.props;

    this.player = this.configTheoPlayer();
    this.configVideoPlayer();
    this.player.muted = true;
    if (autoPlay) {
      if (allowMutedAutoplay) {
        this.player.muted = true;
      }
      this.player.play();
    }
    const that = this;
    this.player.addEventListener('pause', function() {
      if (noPause) {
        that.player.play();
      }
    });
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
            // if(this.props.handleOnVideoLoad) {
            //   this.props.handleOnVideoLoad(this.player);
            // }
          }
        };
      });
    } else {
      this.loadTheoPlayer();
    }
    return false;
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

  componentWillUnmount() {
    if (this.player) {
      window.screen.orientation.unlock();
      this.player.destroy();
    }
  }

  handleAudioBtn = () => {
    const { isMuted } = this.state;
    // if (showBackBtn) {
    this.setState({
      isMuted: !isMuted
    });
    // }
  };

  render() {
    const { toggleArrow, isMuted } = this.state;
    const { className, showBackBtn, showAudioButton } = this.props;
    return (
      <div
        className={`${videoPlayer} ${className} video-container video-js theoplayer-skin`}
        onMouseEnter={this.getToggleArrow}
        onMouseMove={this.getToggleArrow}
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
        {showAudioButton && (
          <AudioButton onClick={this.handleAudioBtn}>
            {/* <span className={isMuted ? audioMutedIcon : audioIcon} /> */}
            {isMuted ? 'MUTED' : 'SOUND'}
          </AudioButton>
        )}
      </div>
    );
  }
}

export default Theoplayer;
