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
  background-image: url('data:image/svg+xml;base64,PCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiCiAgICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIKICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ0LjRweCIgaGVpZ2h0PSI0NC41cHgiIHZpZXdCb3g9IjAgMCA0NC40IDQ0LjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0LjQgNDQuNTsiCiAgICAgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgICAuc3Qwe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9CiAgICAuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQo8L3N0eWxlPgo8ZGVmcz4KPC9kZWZzPgo8ZyBpZD0iWE1MSURfMThfIj4KICAgIDxjaXJjbGUgaWQ9IlhNTElEXzIwXyIgY2xhc3M9InN0MCIgY3g9IjE4LjQiIGN5PSIxOC40IiByPSIxNi45Ii8+CiAgICA8bGluZSBpZD0iWE1MSURfMTlfIiBjbGFzcz0ic3QxIiB4MT0iMzAuNCIgeTE9IjMwLjQiIHgyPSI0Mi45IiB5Mj0iNDMiLz4KPC9nPgo8L3N2Zz4=');
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  background-repeat: no-repeat;
  background-size: 50px 50px;
  background-position-x: 50%;
  background-position-y: 50%;
}`;