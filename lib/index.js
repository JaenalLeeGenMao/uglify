'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getComponent = exports.Theoplayer = exports.Layout = exports.LoadingPlaceholder = exports.LazyLoad = exports.getApi = exports.getAction = exports.getReducer = exports.getConstant = exports.webpackBaseConfig = exports.config = undefined;

var _webpackConfig = require('./webpack.config.base');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

var _config = require('./config.base');

var _config2 = _interopRequireDefault(_config);

var _LazyLoad = require('./components/LazyLoad');

var _LazyLoad2 = _interopRequireDefault(_LazyLoad);

var _LoadingPlaceholder = require('./components/LoadingPlaceholder');

var _LoadingPlaceholder2 = _interopRequireDefault(_LoadingPlaceholder);

var _Layout = require('./components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _Theoplayer = require('./components/Theoplayer');

var _Theoplayer2 = _interopRequireDefault(_Theoplayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getComponent = function getComponent(name) {
  return require('./components/' + name).default;
};
var getReducer = function getReducer() {
  return require('./reducers');
};
var getAction = function getAction() {
  return require('./actions');
};
var getConstant = function getConstant(type) {
  return require('./constants/' + type);
};

var getApi = function getApi(name) {
  return require('./api/' + name);
};

exports.config = _config2.default;
exports.webpackBaseConfig = _webpackConfig2.default;
exports.getConstant = getConstant;
exports.getReducer = getReducer;
exports.getAction = getAction;
exports.getApi = getApi;
exports.LazyLoad = _LazyLoad2.default;
exports.LoadingPlaceholder = _LoadingPlaceholder2.default;
exports.Layout = _Layout2.default;
exports.Theoplayer = _Theoplayer2.default;
exports.getComponent = getComponent;