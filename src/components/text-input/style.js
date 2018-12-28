import styled, { css } from 'react-emotion'

export const Label = styled('label')`{
  color: #6f6f6f;
  font-weight: lighter;
  position: absolute;
  bottom: 5px;
  left: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition-property: color, bottom, transform;
  transform-origin: bottom left;
}`;

export const inputContainer = css`{
  position: relative;
}`;

export const underline = css`{
  &::before,
  &::after {
    content: '';
    height: 3px;
    width: 0;
    bottom: -1px;
    position: absolute;
    background: #25A2E4;
    transition: 0.2s ease all;
  }

  &::before {
    left: 50%;
  }

  &::after {
    right: 50%;
  }
}`;

export const hasValue = css`{
  & ~ label {
    transform: scale(0.75) translateY(-35px);
  }
}`;

export const inputClass = css`{
  color: #333333;
  padding: 0;
  margin: 10px 0 0;
  width: 100%;
  height: 28px;

  &:focus ~ label {
    transform: scale(0.75) translateY(-35px);
    color: #25A2E4;
  }

  &:focus ~ .${underline}::before,
  &:focus ~ .${underline}::after {
    width: 50%;
  }
}`;

export const mdClass = css`{
  border: none;
  outline: none;
  background: none;
  border-bottom: 1px solid #1a202f;
}`;

export const boxClass = css`{
  border: none;
  outline: none;
  background-color: #fff;
  border-radius: 3px;
  height: 5rem;
  width: 100%;
  border: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: .5rem 0 1.5rem;
  padding: 1.2rem 1.5rem;
}`;

export const passWordVisibility = css`{
  cursor: pointer;
  position: absolute;
  top: 30%;
  right: 15px;
}`;

export const passwordNotVisible = css`{
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBUUFBQUFuZ05XR0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE4KUlFmaUNoZ09DU1pCRkdSR0FBQUI5VWxFUVZRb3o2MlNUMGhVVVJqRnozZnZmVFBPSkZOTkM2ZEh0QXpLVkVKNFFRUzJTU2xvbDIxeQo0V2FNQ1lheFFJaHE4WUlnaUtnWkIyYXdDV3BSQzJ0YkkrWm1LREdkVFFnVnRJa0M4MDkvZkJhT3FmUHUvVnFNbUJhMDhxeC9jTTc1CnZnTnN0U1FBdUtKcGY5ajdhUDRIRWdBa0Q2aEpmckFqNGZyblk0RkRlamRBMC93bU83VVJWQUN3NjROM1B4RDN1RE1Sc1BFd0hOWFEKNFBuZUVicDlwN3pKdXVUdkxZWlBCazl0aTZVTHppaTNzVVNkREltRDNPVmdmUFFhQUVEVWVOdVZ6YXRRUGFtNy9XTitLeldaMDNxUwp3U0hyZW0rYTZVL0dSQ0NuQWZDU0ZhNFcwdWVJZ1ZRRFBSZk5CaExWdnY1YmdBU1NMZklSZ2d6QnVwdG5nb2xuOW9taGtwbW9PSE4wCmhvbEJSNTNoaVJrQmlFc3FZa0F3UDFlS0dOWlFjUy9uS2tDV2RZWEFVR0hxcTJXVTY4MEVXd1FmS3U3bE9tVmxrYjZ0VlZnQkJLQnYKK2tzRWhvZ0UyNkpEMVpJRlJqQnU1NzFGUHN0ekN2Njh2Z0ZJb0R6dHJLcDJoaUJ1WEJqOE1sRC9Xai9XWDYxRWZTeVRkOFprdTdtYQpIVm16SFg5VjNLa09HNGdHMlJHWnJiN2dUMlJ4aHpyaTJKbDg2MkQyNWZwNUFLYlVaWGxGaEFBRC9zRVEyd0VCaGVWQ3BtZkRyMnU2CjRQQkZIS2VvQktEQjM4MVRrblZkdis1RmsrN3lKaEFBa250RUk5dUMrTE41bTUxeXhjSUFkZnN0MlhmL2dIL3JtR3JhTi92K2lkN3kKZVFQNERYWnB3VFN0Y1lUWEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRFd0xUSTBWREl4T2pBNU9qTTRMVEEzT2pBdwprRk02Q3dBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB4TUMweU5GUXlNVG93T1Rvek9DMHdOem93TU9FT2dyY0FBQUFBClNVVk9SSzVDWUlJPSIgLz4KPC9zdmc+Cg==');
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  display: block;
}`;

export const passwordVisible = css`{
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBUUFBQUFuZ05XR0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE4KUlFmaUNoZ05NaDVYNG8yNUFBQUJzRWxFUVZRb3o4V1N6MHRVVVJUSFAvZmM5M3lXTGFacEVXSUtSY3RRVUJpWTJUaWJDbGY5QXhFTgpVUXRONXcyMGlheWtDQ0tDZkU3Tm9xQlpWTkF1eW41czJ3UnFWT0JpMEJaUkVCSzJTR2lHOUwxMzcyMVJTUmF1L2U0TzU4T0I4LzErClljdWtObzZWL2JhUExtWDRFTCtyZmRrRUxCOGtWTVcyN1FLa3BNczhNVGVxalgvQU1PT3V5UWxQNGxXZThaWkFEYXBCajNURlhvb20KY2V2Z2NIZndVQmNzN3IwOUZzMytPakIyVkdxeVE1SGVzYVBWTmRCUTN1MU5lN2tVV3ZaSU5BZGhKcTlta3RuNVhGT0dEUDZBNitwNQoybkJ5eXFmdTlTZG96SXZvTlpSUHlyeWFDL09RMXMxSEljRXJkWTZEYkx1dGh4SkFvZDVBbU9FeTNmcUFHNGRhMHkwSVlKRHpZd1ZoCjBmMzVxeDI4aEc4YXdYMEZVRzIvZHkyM0l0RlY4OEFITExZSTExdTZaQjZ2MXZVNUNEdFZyd1UwN215MW9hQ1N0ZE4rSVVHTVBSN2QKLzh2WFc5NXdpazljbXpxTjB6RHpZK0M1NnZmM091RlFybGxjZkxVRzVaNzhGUmx4Q09sVXR2TFNyaHQrcGlPOW9FYThEa2Y4U1MwUQp1TDcyblpiME14Y243LzRmWWE4cWNkanQ4d0tIL1U1REhzWDNiaTV0VW9yUmdEMlNWY1lzNzFxYXNGdlgxUTM2Q1dFcm9rVDR5SUplCkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRFd0xUSTBWREl3T2pVd09qTXdMVEEzT2pBdzgyZ3FZUUFBQUNWMFJWaDAKWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB4TUMweU5GUXlNRG8xTURvek1DMHdOem93TUlJMWt0MEFBQUFBU1VWT1JLNUNZSUk9IiAvPgo8L3N2Zz4K');
  background-repeat: no-repeat;
  background-size: contain;
  width: 20px;
  height: 20px;
  display: block;
}`;

export const errorClass = css`{
  .${mdClass} {
    border-bottom-color: #D80000;

    &:focus ~ label {
      color: #D80000;
    }
  }

  label {
    color: #D80000;
  }

  .${boxClass} {
    border: 1px solid #D80000;
  }

  .${underline} {
    &::before,
    &::after {
      background: #D80000;
    }
  }
}`;