import React, { Component } from 'react';
import LazyLoad from '../lazyload';
import { func, node } from 'prop-types';
import {
  wrapper,
  imgThumbnail,
  wrapperThumbnail,
  imgThumbnailWrapper,
  durationClass,
  detailWrapper,
  rightThumbnail,
  topThumbnail,
  bottomThumbnail,
  bottomDetail,
  wrapThumbnail,
  overlayDetail,
  playButton
} from './style'
/* PROPS:
 * children, className, thumbnailUrl
 * thumbnailPosition (image position) = top, bottom, left, right (by default left), wrap
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
    ${hour > 0 ? ('0' + hour).slice(-2) + ':' : ''}${min > 0 ? ('0' + min).slice(-2) + ':' : ''}${sec > 0 ? ('0' + sec).slice(-2) : '00'}
    `;
  }

  render() {
    const {
      children,
      thumbnailPosition,
      duration,
      className,
      thumbnailUrl,
      thumbnailStyle,
      onErrorShowDefault = false,
      imgWrapperClassName = '',
      errorImgClassName = '',
      detailStyle } = this.props;
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
      <div className={`${wrapper} ${className || ''}`}>
        {thumbnailPosition === 'bottom' &&
          <LazyLoad
            className={`${detailWrapper}  ${bottomDetail}`}
            onErrorShowDefault={onErrorShowDefault}
            containerStyle={detailStyle}
            errorImgClassName={errorImgClassName}>
            {children}
          </LazyLoad>
        }
        <div className={`${wrapperThumbnail} ${thumbnailPos}`}>
          <LazyLoad
            src={thumbnailUrl}
            className={`${imgThumbnail}`}
            style={thumbnailStyle}
            onErrorShowDefault={onErrorShowDefault}
            errorImgClassName={errorImgClassName}
            containerClassName={`${imgThumbnailWrapper} ${imgWrapperClassName}`}
          >
            {thumbnailPosition === 'wrap' && <div className={overlayDetail}> {children} </div>}
            {duration && <div className={`${durationClass} durationStat`}>{this.getDurationFormatted()}</div>}
            {thumbnailPosition !== 'wrap' &&
              <div className={`${playButton} playIcon`} />
            }
          </LazyLoad>
          {thumbnailPosition !== 'bottom' &&
            <LazyLoad
              containerClassName={detailWrapper}
              containerStyle={detailStyle}
              onErrorShowDefault={onErrorShowDefault}
              errorImgClassName={errorImgClassName}>
              {children}
            </LazyLoad>
          }
        </div>
      </div>
    );
  }
}

export default VideoThumbnail;
