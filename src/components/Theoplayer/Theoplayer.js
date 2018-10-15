import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import Layout from '../Layout';
import Helmet from 'react-helmet';

// import playerArrow from './assets/arrowback.png';

import { arrow, arrow_show } from './style';

let scriptLoadedCount = 0;
let scriptTagCount = 0;
class Theoplayer extends Component {
  state = {
    toggleArrow: ''
  };

  static propTypes = {
    movieUrl: PropTypes.string.isRequired,
    isTrailer: PropTypes.bool,
    theoConfig: PropTypes.array.isRequired,
    autoPlay: PropTypes.bool,
    showBackBtn: PropTypes.bool,
    fullscreen: PropTypes.bool,
    playerBtnImg: PropTypes.string,
  };

  static defaultProps = {
    autoPlay: true,
    fullscreen: true,
    isTrailer: false,
    showBackBtn: true,
    playerBtnImg: 'https://image.flaticon.com/icons/svg/60/60682.svg', //playerArrow
  };

  handleGoBack = () => {
    const { goBack } = history;
    if (goBack) {
      goBack();
    }
  };

  movieConfig(player) {
    player.source = {
      sources: [
        {
          src: this.props.movieUrl,
          type: 'application/x-mpegurl' // sets type to HLS
        }
      ],
      textTracks: this.props.theoConfig
    };
  }

  getToggleArrow = () => {
    const { toggleArrow } = this.state;
    const { showBackBtn } = this.props;
    if(showBackBtn) {
      console.log("MASUK SHOWBACK", showBackBtn)
      this.setState({
        toggleArrow: toggleArrow === '' ? arrow_show : ''
      });
    }
  };

  handleScriptInject({ scriptTags }) {
    if (scriptTags) {
      scriptTagCount = scriptTags.length;
      scriptTags.map((tag) => {
        tag.onload = this.handleOnLoad;
      })
    }
  }

  handleOnLoad = () => {
    const { autoPlay } = this.props;
    scriptLoadedCount += 1;
    if(scriptLoadedCount === scriptTagCount) {
      var playerConfig = {
        libraryLocation: '//cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/',
        ui: {
          fluid: true
        }
      };

      var element = document.querySelector('.video-container');
      var player = new THEOplayer.Player(element, playerConfig);
      this.movieConfig(player);

      player.autoplay = autoPlay;
      player.play();
    }
  }

  render() {
    const { toggleArrow } = this.state;
    const { playerBtnImg, isTrailer } = this.props;
    return (
      <Fragment>
        <Helmet
          link={[{ href:'https://cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/ui.css', type:"text/css", rel:"stylesheet" }]}
          script={[{ src: '//imasdk.googleapis.com/js/sdkloader/ima3.js' }]} />
        <Helmet
          // onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}
          script={[{ src: 'https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1', type:"text/javascript" }]} />
        <Helmet
          onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}
          script={[{ src: 'https://cdn.theoplayer.com/dash/5acd847e-4a8d-4a7b-85a4-ccfd12d5562d/THEOplayer.js', type:"text/javascript" }]} />
        <Helmet/>
        <Layout>
          <div
            className="video-container video-js theoplayer-skin"
            onMouseEnter={this.getToggleArrow}
            onMouseLeave={this.getToggleArrow}
          >
            {!isTrailer && (
              <div className={`${arrow} ${toggleArrow}`} onClick={this.handleGoBack}>
                <img src={playerBtnImg} />
                AAAAAAAA
              </div>
            )}
          </div>
        </Layout>
      </Fragment>
    );
  }
}

export default Theoplayer;
