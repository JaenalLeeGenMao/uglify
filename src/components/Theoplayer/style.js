import { css } from 'react-emotion'

export const arrow = css`{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  top: 2%;
  left: 2%;
  opacity: 0.5;
  border: 3px solid white;
  display: none;
  padding: 10px;
  img {
    width: 100%;
  }
}`;

export const arrow_show = css`{
  display: block;
  cursor: pointer;
}`;