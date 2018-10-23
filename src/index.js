import webpackBaseConfig from "./webpack.config.base"
import config from "./config.base";

const getComponent = name => require(`./components/${name}`).default

const getReducer = pageName => require(`./reducers/${pageName}`)
const getAction = actionName => require(`./actions/${actionName}`)
const getConstant = type => require(`./constants/${type}`)

const getApi = name => require(`./api/${name}`)

export {
  config,
  webpackBaseConfig,
  getComponent,
  getConstant,
  getReducer,
  getAction,
  getApi
}
