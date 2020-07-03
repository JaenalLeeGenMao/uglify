"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLibrary = exports.getComponent = void 0;

/**
 *
 * @param {*} name e.g. text-input | mola-player | vo-player | theo-player | text-input | lazyload | video-thumbnail | layout
 */
var getComponent = function getComponent(name) {
  return require("./components/".concat(name))["default"];
};
/**
 *
 * @param {*} name e.g. ellipsis | encrypt
 */


exports.getComponent = getComponent;

var getLibrary = function getLibrary(name) {
  return require("./utils/".concat(name));
};

exports.getLibrary = getLibrary;