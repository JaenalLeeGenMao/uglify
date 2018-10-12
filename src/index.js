// import actions from "./actions"
// import constants from "./constants"
// import reducers from "./reducers"
// import api from "./api/mola"
// import LoadingPlaceholder from "./components/LoadingPlaceholder"
import LazyLoad from "./components/LazyLoad";
import LoadingPlaceholder from "./components/LoadingPlaceholder";
import Layout from "./components/Layout";
import Theoplayer from "./components/Theoplayer";

import webpackBaseConfig from "../.dev/webpack.config.base"
import config from "./config.base";

export {
  config,
  webpackBaseConfig,
  LoadingPlaceholder,
  LazyLoad,
  Theoplayer,
  Layout
}