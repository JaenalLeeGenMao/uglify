import styled, { css } from 'react-emotion'

export const container = css`{
  span {
    color: #fff;
    font-weight: bold;
    display: inline-block;
    vertical-align: middle;
    padding-left: 0.5rem;
  }

  .animationContainer {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 2rem;
    height: 2rem;
  }
  
  .animationContainer svg {
    position: absolute;
  }
  
  .animationContainer i {
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDIyIDIyIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojMmM1NmZmO30uYntmaWxsOiNmZmY7fTwvc3R5bGU+PC9kZWZzPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIxMSIgY3k9IjExIiByPSIxMSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjkuNDc3LDI2LjI4MSwyMi43NDMsMjIuNTRhMS4xMzQsMS4xMzQsMCwwLDAtMS42ODQuOTkydjcuNDgyQTEuMTM0LDEuMTM0LDAsMCwwLDIyLjc0MywzMmw2LjczMy0zLjc0MUExLjEzNCwxLjEzNCwwLDAsMCwyOS40NzcsMjYuMjgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzLjA1OSAtMTYuMzk2KSIvPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    vertical-align: middle;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .timeCount {
    transition: all 1s linear;
    stroke-linecap: round;
  }
  
  @media screen and (max-width: 640px) {
    .animationContainer {
      width: 16px;
      height: 16px;
    }
  
    .animationContainer i {
      width: 12px;
      height: 12px;
    }
  }
}`
