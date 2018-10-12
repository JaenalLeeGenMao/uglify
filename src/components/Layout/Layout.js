import React, { Fragment } from 'react';
import 'normalize.css';
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

const Layout = ({ children }) => {
  return (
    <Fragment>{children}</Fragment>
  )
}

export default Layout;
