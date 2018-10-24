'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getApi = exports.getAction = exports.getReducer = exports.getConstant = exports.getComponent = exports.webpackBaseConfig = exports.config = undefined;

var _webpackConfig = require('./webpack.config.base');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _config = require('./config.base');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getComponent = function getComponent(name) {
  return require('./components/' + name).default;
};

var getReducer = function getReducer() {
  return require('./reducers');
};
var getAction = function getAction(actionName) {
  return require('./actions/' + actionName);
};
var getConstant = function getConstant(type) {
  return require('./constants/' + type);
};

var getApi = function getApi(name) {
  return require('./api/' + name);
};

exports.config = _config2.default;
exports.webpackBaseConfig = _webpackConfig2.default;
exports.getComponent = getComponent;
exports.getConstant = getConstant;
exports.getReducer = getReducer;
exports.getAction = getAction;
exports.getApi = getApi;