import styled, { keyframes } from 'react-emotion'

export const Placeholder = styled('div')`
  -webkit-animation-duration: 3.6s;
  -moz-animation-duration: 3.6s;
  -o-animation-duration: 3.6s;
  animation-duration: 3.6s;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
  -moz-animation-timing-function: ease-in-out;
  -o-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: ${props => props.isLight ? lightShimmerAnimation : darkShimmerAnimation};
  -moz-animation-name: ${props => props.isLight ? lightShimmerAnimation : darkShimmerAnimation};
  -o-animation-name: ${props => props.isLight ? lightShimmerAnimation : darkShimmerAnimation};
  animation-name: ${props => props.isLight ? lightShimmerAnimation : darkShimmerAnimation};
`;

const lightShimmerAnimation = keyframes`
  from {
    background-color: rgba(165, 165, 165, 0.1);
  }

  25% {
    background-color: rgba(165, 165, 165, 0.3);
  }

  50% {
    background-color: rgba(165, 165, 165, 0.1);
  }

  to {
    background-color: rgba(165, 165, 165, 0.1);
  }
`

const darkShimmerAnimation = keyframes`
  from {
    background-color: #1a1a1a;
  }

  25% {
    background-color: #333;
  }

  50% {
    background-color: #1a1a1a;
  }

  to {
    background-color: #1a1a1a;
  }
`;