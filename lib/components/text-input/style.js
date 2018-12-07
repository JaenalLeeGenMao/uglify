'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordVisible = exports.passwordNotVisible = exports.passWordVisibility = exports.boxClass = exports.mdClass = exports.inputClass = exports.hasValue = exports.underline = exports.inputContainer = exports.Label = undefined;

var _templateObject = _taggedTemplateLiteral(['{\n  color: #6f6f6f;\n  background-color: #F5F5F5;\n  font-weight: lighter;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: color, bottom, transform;\n  transform-origin: bottom left;\n}'], ['{\n  color: #6f6f6f;\n  background-color: #F5F5F5;\n  font-weight: lighter;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  transition-property: color, bottom, transform;\n  transform-origin: bottom left;\n}']),
    _templateObject2 = _taggedTemplateLiteral(['{\n  position: relative;\n}'], ['{\n  position: relative;\n}']),
    _templateObject3 = _taggedTemplateLiteral(['{\n  &::before,\n  &::after {\n    content: \'\';\n    height: 3px;\n    width: 0;\n    bottom: -1px;\n    position: absolute;\n    background: #25A2E4;\n    transition: 0.2s ease all;\n  }\n\n  &::before {\n    left: 50%;\n  }\n\n  &::after {\n    right: 50%;\n  }\n}'], ['{\n  &::before,\n  &::after {\n    content: \'\';\n    height: 3px;\n    width: 0;\n    bottom: -1px;\n    position: absolute;\n    background: #25A2E4;\n    transition: 0.2s ease all;\n  }\n\n  &::before {\n    left: 50%;\n  }\n\n  &::after {\n    right: 50%;\n  }\n}']),
    _templateObject4 = _taggedTemplateLiteral(['{\n  & ~ label {\n    transform: scale(0.75) translateY(-35px);\n    color: #25A2E4;\n  }\n}'], ['{\n  & ~ label {\n    transform: scale(0.75) translateY(-35px);\n    color: #25A2E4;\n  }\n}']),
    _templateObject5 = _taggedTemplateLiteral(['{\n  color: #333333;\n  padding: 0;\n  margin: 10px 0 0;\n  width: 100%;\n  height: 28px;\n\n  &:focus ~ label {\n    transform: scale(0.75) translateY(-35px);\n    color: #25A2E4;\n  }\n\n  &:focus ~ .', '::before,\n  &:focus ~ .', '::after {\n    width: 50%;\n  }\n}'], ['{\n  color: #333333;\n  padding: 0;\n  margin: 10px 0 0;\n  width: 100%;\n  height: 28px;\n\n  &:focus ~ label {\n    transform: scale(0.75) translateY(-35px);\n    color: #25A2E4;\n  }\n\n  &:focus ~ .', '::before,\n  &:focus ~ .', '::after {\n    width: 50%;\n  }\n}']),
    _templateObject6 = _taggedTemplateLiteral(['{\n  border: none;\n  outline: none;\n  background: none;\n  border-bottom: 1px solid #1a202f;\n}'], ['{\n  border: none;\n  outline: none;\n  background: none;\n  border-bottom: 1px solid #1a202f;\n}']),
    _templateObject7 = _taggedTemplateLiteral(['{\n  border: none;\n  outline: none;\n  background-color: #fff;\n  border-radius: 3px;\n  height: 5rem;\n  width: 100%;\n  border: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: .5rem 0 1.5rem;\n  padding: 1.2rem 1.5rem;\n}'], ['{\n  border: none;\n  outline: none;\n  background-color: #fff;\n  border-radius: 3px;\n  height: 5rem;\n  width: 100%;\n  border: none;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  margin: .5rem 0 1.5rem;\n  padding: 1.2rem 1.5rem;\n}']),
    _templateObject8 = _taggedTemplateLiteral(['{\n  cursor: pointer;\n  position: absolute;\n  top: 30%;\n  right: 15px;\n}'], ['{\n  cursor: pointer;\n  position: absolute;\n  top: 30%;\n  right: 15px;\n}']),
    _templateObject9 = _taggedTemplateLiteral(['{\n  background-image: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBUUFBQUFuZ05XR0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE4KUlFmaUNoZ09DU1pCRkdSR0FBQUI5VWxFUVZRb3o2MlNUMGhVVVJqRnozZnZmVFBPSkZOTkM2ZEh0QXpLVkVKNFFRUzJTU2xvbDIxeQo0V2FNQ1lheFFJaHE4WUlnaUtnWkIyYXdDV3BSQzJ0YkkrWm1LREdkVFFnVnRJa0M4MDkvZkJhT3FmUHUvVnFNbUJhMDhxeC9jTTc1CnZnTnN0U1FBdUtKcGY5ajdhUDRIRWdBa0Q2aEpmckFqNGZyblk0RkRlamRBMC93bU83VVJWQUN3NjROM1B4RDN1RE1Sc1BFd0hOWFEKNFBuZUVicDlwN3pKdXVUdkxZWlBCazl0aTZVTHppaTNzVVNkREltRDNPVmdmUFFhQUVEVWVOdVZ6YXRRUGFtNy9XTitLeldaMDNxUwp3U0hyZW0rYTZVL0dSQ0NuQWZDU0ZhNFcwdWVJZ1ZRRFBSZk5CaExWdnY1YmdBU1NMZklSZ2d6QnVwdG5nb2xuOW9taGtwbW9PSE4wCmhvbEJSNTNoaVJrQmlFc3FZa0F3UDFlS0dOWlFjUy9uS2tDV2RZWEFVR0hxcTJXVTY4MEVXd1FmS3U3bE9tVmxrYjZ0VlZnQkJLQnYKK2tzRWhvZ0UyNkpEMVpJRlJqQnU1NzFGUHN0ekN2Njh2Z0ZJb0R6dHJLcDJoaUJ1WEJqOE1sRC9Xai9XWDYxRWZTeVRkOFprdTdtYQpIVm16SFg5VjNLa09HNGdHMlJHWnJiN2dUMlJ4aHpyaTJKbDg2MkQyNWZwNUFLYlVaWGxGaEFBRC9zRVEyd0VCaGVWQ3BtZkRyMnU2CjRQQkZIS2VvQktEQjM4MVRrblZkdis1RmsrN3lKaEFBa250RUk5dUMrTE41bTUxeXhjSUFkZnN0MlhmL2dIL3JtR3JhTi92K2lkN3kKZVFQNERYWnB3VFN0Y1lUWEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRFd0xUSTBWREl4T2pBNU9qTTRMVEEzT2pBdwprRk02Q3dBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB4TUMweU5GUXlNVG93T1Rvek9DMHdOem93TU9FT2dyY0FBQUFBClNVVk9SSzVDWUlJPSIgLz4KPC9zdmc+Cg==\');\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 20px;\n  height: 20px;\n  display: block;\n}'], ['{\n  background-image: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBUUFBQUFuZ05XR0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE4KUlFmaUNoZ09DU1pCRkdSR0FBQUI5VWxFUVZRb3o2MlNUMGhVVVJqRnozZnZmVFBPSkZOTkM2ZEh0QXpLVkVKNFFRUzJTU2xvbDIxeQo0V2FNQ1lheFFJaHE4WUlnaUtnWkIyYXdDV3BSQzJ0YkkrWm1LREdkVFFnVnRJa0M4MDkvZkJhT3FmUHUvVnFNbUJhMDhxeC9jTTc1CnZnTnN0U1FBdUtKcGY5ajdhUDRIRWdBa0Q2aEpmckFqNGZyblk0RkRlamRBMC93bU83VVJWQUN3NjROM1B4RDN1RE1Sc1BFd0hOWFEKNFBuZUVicDlwN3pKdXVUdkxZWlBCazl0aTZVTHppaTNzVVNkREltRDNPVmdmUFFhQUVEVWVOdVZ6YXRRUGFtNy9XTitLeldaMDNxUwp3U0hyZW0rYTZVL0dSQ0NuQWZDU0ZhNFcwdWVJZ1ZRRFBSZk5CaExWdnY1YmdBU1NMZklSZ2d6QnVwdG5nb2xuOW9taGtwbW9PSE4wCmhvbEJSNTNoaVJrQmlFc3FZa0F3UDFlS0dOWlFjUy9uS2tDV2RZWEFVR0hxcTJXVTY4MEVXd1FmS3U3bE9tVmxrYjZ0VlZnQkJLQnYKK2tzRWhvZ0UyNkpEMVpJRlJqQnU1NzFGUHN0ekN2Njh2Z0ZJb0R6dHJLcDJoaUJ1WEJqOE1sRC9Xai9XWDYxRWZTeVRkOFprdTdtYQpIVm16SFg5VjNLa09HNGdHMlJHWnJiN2dUMlJ4aHpyaTJKbDg2MkQyNWZwNUFLYlVaWGxGaEFBRC9zRVEyd0VCaGVWQ3BtZkRyMnU2CjRQQkZIS2VvQktEQjM4MVRrblZkdis1RmsrN3lKaEFBa250RUk5dUMrTE41bTUxeXhjSUFkZnN0MlhmL2dIL3JtR3JhTi92K2lkN3kKZVFQNERYWnB3VFN0Y1lUWEFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRFd0xUSTBWREl4T2pBNU9qTTRMVEEzT2pBdwprRk02Q3dBQUFDVjBSVmgwWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB4TUMweU5GUXlNVG93T1Rvek9DMHdOem93TU9FT2dyY0FBQUFBClNVVk9SSzVDWUlJPSIgLz4KPC9zdmc+Cg==\');\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 20px;\n  height: 20px;\n  display: block;\n}']),
    _templateObject10 = _taggedTemplateLiteral(['{\n  background-image: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBUUFBQUFuZ05XR0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE4KUlFmaUNoZ05NaDVYNG8yNUFBQUJzRWxFUVZRb3o4V1N6MHRVVVJUSFAvZmM5M3lXTGFacEVXSUtSY3RRVUJpWTJUaWJDbGY5QXhFTgpVUXRONXcyMGlheWtDQ0tDZkU3Tm9xQlpWTkF1eW41czJ3UnFWT0JpMEJaUkVCSzJTR2lHOUwxMzcyMVJTUmF1L2U0TzU4T0I4LzErClljdWtObzZWL2JhUExtWDRFTCtyZmRrRUxCOGtWTVcyN1FLa3BNczhNVGVxalgvQU1PT3V5UWxQNGxXZThaWkFEYXBCajNURlhvb20KY2V2Z2NIZndVQmNzN3IwOUZzMytPakIyVkdxeVE1SGVzYVBWTmRCUTN1MU5lN2tVV3ZaSU5BZGhKcTlta3RuNVhGT0dEUDZBNitwNQoybkJ5eXFmdTlTZG96SXZvTlpSUHlyeWFDL09RMXMxSEljRXJkWTZEYkx1dGh4SkFvZDVBbU9FeTNmcUFHNGRhMHkwSVlKRHpZd1ZoCjBmMzVxeDI4aEc4YXdYMEZVRzIvZHkyM0l0RlY4OEFITExZSTExdTZaQjZ2MXZVNUNEdFZyd1UwN215MW9hQ1N0ZE4rSVVHTVBSN2QKLzh2WFc5NXdpazljbXpxTjB6RHpZK0M1NnZmM091RlFybGxjZkxVRzVaNzhGUmx4Q09sVXR2TFNyaHQrcGlPOW9FYThEa2Y4U1MwUQp1TDcyblpiME14Y243LzRmWWE4cWNkanQ4d0tIL1U1REhzWDNiaTV0VW9yUmdEMlNWY1lzNzFxYXNGdlgxUTM2Q1dFcm9rVDR5SUplCkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRFd0xUSTBWREl3T2pVd09qTXdMVEEzT2pBdzgyZ3FZUUFBQUNWMFJWaDAKWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB4TUMweU5GUXlNRG8xTURvek1DMHdOem93TUlJMWt0MEFBQUFBU1VWT1JLNUNZSUk9IiAvPgo8L3N2Zz4K\');\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 20px;\n  height: 20px;\n  display: block;\n}'], ['{\n  background-image: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjAgMjAiIHhtbDpzcGFjZT0icHJlc2VydmUiPiAgPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iMCIgeT0iMCIKICAgIGhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBUUFBQUFuZ05XR0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFDQmpTRkpOCkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE4KUlFmaUNoZ05NaDVYNG8yNUFBQUJzRWxFUVZRb3o4V1N6MHRVVVJUSFAvZmM5M3lXTGFacEVXSUtSY3RRVUJpWTJUaWJDbGY5QXhFTgpVUXRONXcyMGlheWtDQ0tDZkU3Tm9xQlpWTkF1eW41czJ3UnFWT0JpMEJaUkVCSzJTR2lHOUwxMzcyMVJTUmF1L2U0TzU4T0I4LzErClljdWtObzZWL2JhUExtWDRFTCtyZmRrRUxCOGtWTVcyN1FLa3BNczhNVGVxalgvQU1PT3V5UWxQNGxXZThaWkFEYXBCajNURlhvb20KY2V2Z2NIZndVQmNzN3IwOUZzMytPakIyVkdxeVE1SGVzYVBWTmRCUTN1MU5lN2tVV3ZaSU5BZGhKcTlta3RuNVhGT0dEUDZBNitwNQoybkJ5eXFmdTlTZG96SXZvTlpSUHlyeWFDL09RMXMxSEljRXJkWTZEYkx1dGh4SkFvZDVBbU9FeTNmcUFHNGRhMHkwSVlKRHpZd1ZoCjBmMzVxeDI4aEc4YXdYMEZVRzIvZHkyM0l0RlY4OEFITExZSTExdTZaQjZ2MXZVNUNEdFZyd1UwN215MW9hQ1N0ZE4rSVVHTVBSN2QKLzh2WFc5NXdpazljbXpxTjB6RHpZK0M1NnZmM091RlFybGxjZkxVRzVaNzhGUmx4Q09sVXR2TFNyaHQrcGlPOW9FYThEa2Y4U1MwUQp1TDcyblpiME14Y243LzRmWWE4cWNkanQ4d0tIL1U1REhzWDNiaTV0VW9yUmdEMlNWY1lzNzFxYXNGdlgxUTM2Q1dFcm9rVDR5SUplCkFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREU0TFRFd0xUSTBWREl3T2pVd09qTXdMVEEzT2pBdzgyZ3FZUUFBQUNWMFJWaDAKWkdGMFpUcHRiMlJwWm5rQU1qQXhPQzB4TUMweU5GUXlNRG8xTURvek1DMHdOem93TUlJMWt0MEFBQUFBU1VWT1JLNUNZSUk9IiAvPgo8L3N2Zz4K\');\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 20px;\n  height: 20px;\n  display: block;\n}']);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = exports.Label = (0, _reactEmotion2.default)('label')(_templateObject);

var inputContainer = exports.inputContainer = (0, _reactEmotion.css)(_templateObject2);

var underline = exports.underline = (0, _reactEmotion.css)(_templateObject3);

var hasValue = exports.hasValue = (0, _reactEmotion.css)(_templateObject4);

var inputClass = exports.inputClass = (0, _reactEmotion.css)(_templateObject5, underline, underline);

var mdClass = exports.mdClass = (0, _reactEmotion.css)(_templateObject6);

var boxClass = exports.boxClass = (0, _reactEmotion.css)(_templateObject7);

var passWordVisibility = exports.passWordVisibility = (0, _reactEmotion.css)(_templateObject8);

var passwordNotVisible = exports.passwordNotVisible = (0, _reactEmotion.css)(_templateObject9);

var passwordVisible = exports.passwordVisible = (0, _reactEmotion.css)(_templateObject10);