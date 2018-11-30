import React, { Component } from 'react';
import LazyLoad from '../lazyload';
import { func, node } from 'prop-types';
import {
  wrapper,
  imgThumbnail,
  wrapperThumbnail,
  durationClass,
  detailWrapper,
  rightThumbnail,
  topThumbnail,
  bottomThumbnail,
  bottomDetail,
  wrapThumbnail
} from './style'

/* PROPS:
 * children, className, thumbnailUrl
 * thumbnailPosition (image position) = top, bottom, left, right (by default left)
 * duration (in second)
 */

class VideoThumbnail extends Component {
  static propTypes = {
    onClick: func,
    children: node,
  };

  static defaultProps = {
    onClick: () => { },
    children: null,
  };

  handleOnClick = () => {
    const { onClick } = this.props;
    onClick();
  }

  getDurationFormatted = () => {
    const { duration } = this.props;
    let durationTotal = duration;
    const sec = durationTotal % 60;
    durationTotal -= sec;
    const minRemain = Math.floor(durationTotal / 60);
    const min = minRemain % 60;
    let hour = 0;
    if (minRemain > 60) {
      hour = (minRemain - min) / 60;
    }

    return `
      ${hour > 0 ? ('0' + hour).slice(-2) + ':' : ''}
      ${min > 0 ? ('0' + min).slice(-2) + ':' : ''}
      ${sec > 0 ? ('0' + sec).slice(-2) : '00'}
    `;
  }

  render() {
    const { children, thumbnailPosition, duration, className, thumbnailUrl, thumbnailStyle, detailStyle } = this.props;
    let thumbnailPos = '';
    if (thumbnailPosition === 'right') {
      thumbnailPos = rightThumbnail;
    } else if (thumbnailPosition === 'top') {
      thumbnailPos = topThumbnail;
    } else if (thumbnailPosition === 'bottom') {
      thumbnailPos = bottomThumbnail;
    } else if (thumbnailPosition === 'wrap') {
      thumbnailPos = wrapThumbnail;
    }

    return (
      <div onClick={this.handleOnClick} className={`${wrapper} ${className || ''}`}>
        {thumbnailPosition === 'bottom' &&
          <div className={`${detailWrapper} ${bottomDetail}`} style={detailStyle}>
            {children}
          </div>
        }
        <LazyLoad
          src={thumbnailUrl}
          className={`${imgThumbnail}`}
          style={thumbnailStyle}
          containerClassName={`${wrapperThumbnail} ${thumbnailPos}`}
        >
          {duration && <div className={durationClass}>{this.getDurationFormatted()}</div>}
          {thumbnailPosition !== 'bottom' &&
            <div className={detailWrapper} style={detailStyle}>
              {children}
            </div>
          }
        </LazyLoad>
      </div>
    );
  }
}

export default VideoThumbnail;
