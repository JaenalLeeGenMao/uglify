import webpackBaseConfig from './webpack.config.base';
import config from './config.base';

import LazyLoad from "./components/LazyLoad";
import LoadingPlaceholder from "./components/LoadingPlaceholder";
import Layout from "./components/Layout";
import Theoplayer from "./components/Theoplayer";
const getComponent = name => require(`./components/${name}`).default;
const getReducer = () => require(`./reducers`);
const getAction = () => require(`./actions`);
const getConstant = type => require(`./constants/${type}`);

const getApi = name => require(`./api/${name}`);

export {
  config,
  webpackBaseConfig,
  getConstant,
  getReducer,
  getAction,
  getApi,
  LazyLoad,
  LoadingPlaceholder,
  Layout,
  Theoplayer,
  getComponent
};
