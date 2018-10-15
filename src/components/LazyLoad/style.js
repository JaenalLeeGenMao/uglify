import styled, { css, keyframes } from 'react-emotion'
export const fade = css`{
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}`;

export const success = css`{
  opacity: 1;
  img {
    width: 100%;
    outline: 0;
  }
  a {
    text-decoration: none;
    outline: 0;
  }
}`;

export const defaults = css`{
  opacity: 1;
}`;

export const img = styled('img')`{
  width: 100%;
  outline: 0;
}`;

export const a = styled('a')`{
  text-decoration: none;
  outline: 0;
}`;

const fadeinKeyframe = keyframes`{
  from { opacity: 0; }
  to { opacity: 1; }
}`;

export const fadeInCss = css`{
  animation: ${fadeinKeyframe} 2s;
  img {
    width: 100%;
    outline: 0;
  }
  a {
    text-decoration: none;
    outline: 0;
  }
}`;

export const errorBg = css`{
  /*background-image: url('https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg');*/
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position-x: 50%;
  background-position-y: 50%;
}`;