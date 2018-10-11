import { injectGlobal } from 'emotion';

injectGlobal`
  html {
    font-size: 62.5%;
    font-family: Futura, Trebuchet MS, Arial, sans-serif;
  }

  @media screen and (min-height: 1080px) {
    html {
      font-size: 187.5%;
    }
  }
`