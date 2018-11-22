import styled, { keyframes } from 'react-emotion'

export const Placeholder = styled('div')`
  animation-duration: 3.6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
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