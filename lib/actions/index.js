"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _history = require("./history");

var historyActions = _interopRequireWildcard(_history);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import search from './search';
// import movieDetail from './movie-detail'
// import movieLibrary from './movie-library'
// import movieStream from './movie-stream'
console.log("MASUK"); // import * as userActions from './user';
// import runtime from './runtime';
// import home from './home';
exports.default = {
  historyActions: historyActions
};