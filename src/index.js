import webpackBaseConfig from './webpack.config.base';
import config from './config.base';

const getComponent = name => require(`./components/${name}`).default;
const getReducer = () => require(`./reducers`);
const getAction = () => require(`./actions`);
const getConstant = type => require(`./constants/${type}`);
const getLibrary = name => require(`./lib/${name}`);

const getApi = name => require(`./api/${name}`);

export {
  config,
  webpackBaseConfig,
  getConstant,
  getReducer,
  getAction,
  getApi,
  getComponent,
  getLibrary
};
