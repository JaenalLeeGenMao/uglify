import { css } from 'react-emotion';

export const wrapper = css`{
  padding: 7px 0;
  clear: both;
}`;

export const wrapperThumbnail = css`{
  position: relative;
  cursor: pointer;
  display: block;
  height: 100%;
  width: 100%;
  overflow: hidden;
}`;

export const imgThumbnail = css`{
  border-radius: 3px;
  width: 50%;
  float: left;
  vertical-align: middle;
  cursor: pointer;
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
  width: 50%;
  float: right;
  vertical-align: middle;
  padding-left: 15px;
  cursor: pointer;
}`;


export const rightThumbnail = css`{
  .${imgThumbnail} {
    float: right;
  }

  .${durationClass} {
    right: 10px;
    left: auto;
  }

  .${detailWrapper} {
    float: left;
  }
}`;

export const bottomThumbnail = css`{
  .${imgThumbnail} {
    width: 100%;
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
  .${imgThumbnail} {
    width: 100%;
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
  .${imgThumbnail} {
    width: 100%;
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
