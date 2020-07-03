"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createBrowserHistory = _interopRequireDefault(require("history/createBrowserHistory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
var _default = process.env.BROWSER && (0, _createBrowserHistory["default"])();

exports["default"] = _default;