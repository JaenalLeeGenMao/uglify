import { css } from 'react-emotion';

export const wrapper = css`{
  display: block;
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

export const playButton = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgNDggNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyICg2Njg2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QXJ0Ym9hcmQ8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBkPSJNMCwxLjYwMDE2NDQyIEwwLDE4LjQwMDE2NDQgQzAsMTkuMjY3MTY0NCAwLjk1NzUsMTkuNzkyMTY0NCAxLjY4ODUsMTkuMzI1NjY0NCBMMTQuNTEsMTEuMTQ3MTY0NCBDMTUuMTc3LDEwLjcyMTE2NDQgMTUuMTg4NSw5Ljc1MTE2NDQyIDE0LjUzMTUsOS4zMDk2NjQ0MiBMMS43MTA1LDAuNjg4NjY0NDI0IEMwLjk4MTUsMC4xOTgxNjQ0MjQgMCwwLjcyMTE2NDQyNCAwLDEuNjAwMTY0NDIiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJBcnRib2FyZCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IlBsYXktQnV0dG9uIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI0LDAgTDI0LDAgQzM3LjI1NDgzNCwtMi40MzQ4NzM1ZS0xNSA0OCwxMC43NDUxNjYgNDgsMjQgTDQ4LDI0IEM0OCwzNy4yNTQ4MzQgMzcuMjU0ODM0LDQ4IDI0LDQ4IEwyNCw0OCBDMTAuNzQ1MTY2LDQ4IDEuNjIzMjQ5ZS0xNSwzNy4yNTQ4MzQgMCwyNCBMMCwyNCBDLTEuNjIzMjQ5ZS0xNSwxMC43NDUxNjYgMTAuNzQ1MTY2LDIuNDM0ODczNWUtMTUgMjQsMCBaIiBpZD0iUmVjdGFuZ2xlLTEyIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpY29uL3BsYXkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5LjAwMDAwMCwgMTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvbWFzaz4KICAgICAgICAgICAgICAgIDx1c2UgaWQ9IkZpbGwtMiIgZmlsbD0iIzE2MTYxQSIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==) rgba(0, 0, 0, .7) center center no-repeat;
  background-size: auto 35%;
  opacity: 0;
`

export const imgThumbnail = css`{
  border-radius: 3px;
  width: 50%;
  vertical-align: middle;
  cursor: pointer;
  flex: none;
}`;

export const imgThumbnailWrapper = css`{
  flex: none;
  position: relative;

  &:hover .durationStat {
    opacity: 0;
    transition: .2s;
  }

  &:hover .playIcon {
    opacity: 1;
    transition: .2s;
  }
}`;

export const overlayDetail = css`{
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

  .${overlayDetail} {
    opacity: 0;
  }

  .${detailWrapper} {
    display: none;
  }

  &:hover {
    .durationStat {
      opacity: 0;
      transition: .2s;
    }
    .${overlayDetail} {
      opacity: 1;
      transition: .2s;
    }
    .${imgThumbnail} {
      background-color:#000;
      opacity:0.3;
      transition: .2s;
    }
  }
}`;