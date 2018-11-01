import { css } from 'react-emotion';

export const wrapper = css`{
  padding: 7px 0;
  clear: both;
}`;

export const wrapperThumbnail = css`{
  position: relative;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}`;

export const imgThumbnail = css`{
  border-radius: 3px;
  width: 50%;
  vertical-align: middle;
  cursor: pointer;
  flex: none;
  height: 94px;
  width: 168px;
}`;

export const durationClass = css`{
  background-color: #16161A;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 2.2rem;
  position: absolute;
  top: auto;
  bottom: 4px;
  left: 10px;
  right: auto;
  border-radius: 3px;
  padding: 0 5px;
}`;

export const detailWrapper = css`{
  vertical-align: middle;
  padding-left: 15px;
  padding-right: 0;
  cursor: pointer;
  flex: 1;
  flex-basis: 0.000000001px;
}`;

export const rightThumbnail = css`{
  &.${wrapperThumbnail} {
    flex-direction: row-reverse;
  }

  .${durationClass} {
    right: 10px;
    left: auto;
  }

  .${detailWrapper} {
    padding-right: 15px;
    padding-left: 0;
  }
}`;

export const bottomThumbnail = css`{
  &.${wrapperThumbnail} {
    display: block;
  }

  .${imgThumbnail} {
    width: 100%;
    height: 100%;
    float: none;
    clear: both;
    padding: 0;
  }

  .${durationClass} {
    bottom: 4px;
    top: auto;
  }

  .${detailWrapper} {
    width: 100%;
    float: none;
    clear: both;
    padding: 0;
  }
}`;

export const bottomDetail = css`{
  width: 100%;
  float: none;
  clear: both;
  padding: 0;
}`;

export const topThumbnail = css`{
  &.${wrapperThumbnail} {
    display: block;
  }

  .${imgThumbnail} {
    width: 100%;
    height: 100%;
    float: none;
    clear: both;
    padding: 0;
  }

  .${durationClass} {
    top: 4px;
    bottom: auto;
  }

  .${detailWrapper} {
    width: 100%;
    float: none;
    clear: both;
    padding: 0;
  }
}`;


export const wrapThumbnail = css`{
  &.${wrapperThumbnail} {
    display: block;
  }

  .${imgThumbnail} {
    width: 100%;
    height: 100%;
    float: none;
    clear: both;
    padding: 0;
  }

  .${durationClass} {
    top: 4px;
    bottom: auto;
  }

  .${detailWrapper} {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}`;
