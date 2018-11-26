'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _dexie2.default('search-cache-database');
db.version(1).stores({ searchKeyword: '++id, keyword, createdDate' });
db.version(1).stores({ moviesResult: '++id, movieId, createdDate' });
db.version(1).stores({ castsResult: '++id, castId, createdDate' });
_dexie2.default.debug = true;
exports.default = db;