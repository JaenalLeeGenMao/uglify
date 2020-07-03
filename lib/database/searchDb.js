"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dexie = _interopRequireDefault(require("dexie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = new _dexie["default"]('search-cache-database');
db.version(1).stores({
  searchKeyword: '++id, keyword, createdDate'
});
db.version(1).stores({
  moviesResult: '++id, movieId, createdDate'
});
db.version(1).stores({
  castsResult: '++id, castId, createdDate'
});
_dexie["default"].debug = true;
var _default = db;
exports["default"] = _default;