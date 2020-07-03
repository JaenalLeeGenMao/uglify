import React, { Component } from 'react'
import _get from 'lodash/get'
import Link from '../../link';
import Lazyload from '../../lazyload';
import history from '../../../history';
import CountDown from './count-down';
import { setMultilineEllipsis } from '../../../utils/ellipsis';
import {
  playerContainer
} from './upcoming-video.style'

class UpcomingVideo extends Component {
  state = {
    adsHeight: 0,
    adsWidth: 0,
    isFullscreenMobile: false,
  }

  componentDidMount() {
    setMultilineEllipsis('upc-video-title')
    setMultilineEllipsis('upc-video-desc')
  }

  cancelUpcVideo = e => {
    if (this.props.handleCancelVideo) {
      this.props.handleCancelVideo()
    }
    e.preventDefault()
  }

  redirectToNextVideo = videoId => {
    history.push(`/watch?v=${videoId}&autoplay=1`)
  }

  render() {
    const { data, isMobile = false, startInterval = 20 } = this.props
    const { adsWidth, adsHeight, isFullscreenMobile } = this.state
    const playerWidth = adsWidth ? `${adsWidth}px` : '100%'
    const containerBottom = isMobile && !isFullscreenMobile ? {} : { bottom: '0' } //{ bottom: `calc(${adsHeight}px + 7rem)` }
    const thumbnail = _get(data, `images.cover[${isMobile ? 'landscape' : 'portrait'}`, '')

    return (
      <div className={playerContainer} style={{ width: playerWidth }}>
        <div className={'container'} style={containerBottom}>
          <div className={'poster'}>
            <Lazyload src={thumbnail} />
          </div>
          <div className={'content'}>
            <div className={'title'}>
              <p className="upc-video-title">{data.title}</p>
            </div>
            <div className={'desc'}>
              <p className="upc-video-desc">{data.shortDescription}</p>
            </div>
            {!isMobile && (
              <div className={'link'}>
                <Link className={'play'} to={`/watch?v=${data.id}&autoplay=1`}>
                  <CountDown startSecond={startInterval} onTimeFinish={() => this.redirectToNextVideo(data.id)} />
                </Link>
                <Link className={'close'} onClick={this.cancelUpcVideo}>
                  Close
                </Link>
              </div>
            )}
          </div>
          {isMobile && (
            <div className={'link'}>
              <Link className={'play'} to={`/watch?v=${data.id}&autoplay=1`}>
                <CountDown
                  isMobile={isMobile}
                  startSecond={startInterval}
                  onTimeFinish={() => this.redirectToNextVideo(data.id)}
                />
              </Link>
              <Link className={'close'} onClick={this.cancelUpcVideo}>
                Close
              </Link>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default UpcomingVideo
