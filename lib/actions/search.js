'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecentSearch = exports.getSearchGenre = exports.getSearchResult = undefined;

var _mola = require('../api/mola');

var _mola2 = _interopRequireDefault(_mola);

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _searchDb = require('../database/searchDb');

var _searchDb2 = _interopRequireDefault(_searchDb);

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getSearchResult = function getSearchResult(searchText) {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_SEARCH_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    var isExist = false;
    var cacheResult = {
      meta: {
        status: 'success'
      },
      data: []
    };
    _dexie2.default.exists('mola-search-cache-database').then(function (exists) {
      var _this = this;

      if (exists) {
        _searchDb2.default.transaction('r', _searchDb2.default.moviesResult, _searchDb2.default.castsResult, _searchDb2.default.searchKeyword, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _searchDb2.default.searchKeyword.where('keyword').equalsIgnoreCase(searchText).each(function (res) {
                    isExist = true; //if exist
                    if (res.movieId) {
                      var movieIdArr = res.movieId.split(',');
                      movieIdArr.map(function (id) {
                        _searchDb2.default.moviesResult.where('movieId').equals(id).each(function (res) {
                          cacheResult.data.push({
                            id: res.movieId,
                            type: res.type,
                            title: res.title,
                            year: res.year,
                            coverUrl: res.coverUrl
                          });
                        });
                      });
                    }
                    if (res.castId) {
                      var castIdArr = res.castId.split(',');
                      castIdArr.map(function (id) {
                        _searchDb2.default.castsResult.where('castId').equals(id).each(function (res) {
                          cacheResult.data.push({
                            id: res.castId,
                            type: res.type,
                            name: res.name,
                            imageUrl: res.imageUrl
                          });
                        });
                      });
                    }
                  });

                case 2:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))).then(function () {
          if (!isExist) {
            //if keyword not exist in cache indexed DB then get from api and store in cache
            return _mola2.default.getSearchResult({ q: searchText }).then(function (result) {
              if (result.meta.status === 'error') {
                dispatch({
                  type: _constants2.default.GET_SEARCH_ERROR,
                  payload: result
                });
              } else {
                dispatch({
                  type: _constants2.default.GET_SEARCH_SUCCESS,
                  payload: result
                });

                var curDate = new Date();

                var createdDate = curDate.getFullYear() + '-' + ('0' + (curDate.getMonth() + 1)).slice(-2) + '-' + ('0' + curDate.getDate()).slice(-2) + ' 00:00:00';

                var movieIdAdded = [];
                var castIdAdded = [];
                _searchDb2.default.transaction('rw', _searchDb2.default.moviesResult, _searchDb2.default.castsResult, _searchDb2.default.searchKeyword, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _loop, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, dt, isMovieIdExist, isCastIdExist;

                  return regeneratorRuntime.wrap(function _callee2$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(dt) {
                            return regeneratorRuntime.wrap(function _loop$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    isMovieIdExist = false;
                                    isCastIdExist = false;

                                    //check type to store to related table

                                    if (!(dt.type == 'videos')) {
                                      _context2.next = 8;
                                      break;
                                    }

                                    _context2.next = 5;
                                    return _searchDb2.default.moviesResult.where('movieId').equals(dt.id).count(function (cnt) {
                                      isMovieIdExist = cnt > 0;
                                    }).then(function () {
                                      if (!isMovieIdExist) {
                                        //if not exist then store
                                        _searchDb2.default.moviesResult.add({
                                          movieId: dt.id,
                                          type: dt.type,
                                          title: dt.title,
                                          year: dt.year,
                                          coverUrl: dt.coverUrl,
                                          createdDate: createdDate
                                        });
                                      }
                                    });

                                  case 5:
                                    movieIdAdded.push(dt.id);
                                    _context2.next = 11;
                                    break;

                                  case 8:
                                    _context2.next = 10;
                                    return _searchDb2.default.castsResult.where('castId').equals(dt.id).count(function (cnt) {
                                      isCastIdExist = cnt > 0;
                                    }).then(function () {
                                      if (!isCastIdExist) {
                                        //if not exist then store
                                        _searchDb2.default.castsResult.add({
                                          type: dt.type,
                                          castId: dt.id,
                                          name: dt.name,
                                          imageUrl: dt.imageUrl,
                                          createdDate: createdDate
                                        });
                                      }
                                    });

                                  case 10:
                                    castIdAdded.push(dt.id);

                                  case 11:
                                  case 'end':
                                    return _context2.stop();
                                }
                              }
                            }, _loop, _this);
                          });

                          //loop result from api to store to cache db
                          _iteratorNormalCompletion = true;
                          _didIteratorError = false;
                          _iteratorError = undefined;
                          _context3.prev = 4;
                          _iterator = result.data[Symbol.iterator]();

                        case 6:
                          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context3.next = 12;
                            break;
                          }

                          dt = _step.value;
                          return _context3.delegateYield(_loop(dt), 't0', 9);

                        case 9:
                          _iteratorNormalCompletion = true;
                          _context3.next = 6;
                          break;

                        case 12:
                          _context3.next = 18;
                          break;

                        case 14:
                          _context3.prev = 14;
                          _context3.t1 = _context3['catch'](4);
                          _didIteratorError = true;
                          _iteratorError = _context3.t1;

                        case 18:
                          _context3.prev = 18;
                          _context3.prev = 19;

                          if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                          }

                        case 21:
                          _context3.prev = 21;

                          if (!_didIteratorError) {
                            _context3.next = 24;
                            break;
                          }

                          throw _iteratorError;

                        case 24:
                          return _context3.finish(21);

                        case 25:
                          return _context3.finish(18);

                        case 26:

                          _searchDb2.default.searchKeyword.add({
                            keyword: searchText,
                            movieId: movieIdAdded.join(','),
                            castId: castIdAdded.join(','),
                            createdDate: createdDate
                          });

                        case 27:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  }, _callee2, _this, [[4, 14, 18, 26], [19,, 21, 25]]);
                })));
              }
            });
          } else {
            if (cacheResult.data.length > 0) {
              dispatch({
                type: _constants2.default.GET_SEARCH_SUCCESS,
                payload: cacheResult
              });
            } else {
              dispatch({
                type: _constants2.default.GET_SEARCH_NO_RESULT,
                payload: cacheResult
              });
            }
          }
        });
      } else {
        return _mola2.default.getSearchResult({ q: searchText }).then(function (result) {
          if (result.meta.status === 'error') {
            dispatch({
              type: _constants2.default.GET_SEARCH_ERROR,
              payload: result
            });
          } else {
            dispatch({
              type: _constants2.default.GET_SEARCH_SUCCESS,
              payload: result
            });
          }
        });
      }
    });
  };
};

var getSearchGenre = function getSearchGenre() {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_SEARCH_GENRE_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    return _mola2.default.getSearchGenre().then(function (result) {
      if (result.meta.status === 'error') {
        dispatch({
          type: _constants2.default.GET_SEARCH_GENRE_ERROR,
          payload: result
        });
      } else {
        dispatch({
          type: _constants2.default.GET_SEARCH_GENRE_SUCCESS,
          payload: result
        });
      }
    });
  };
};

var getRecentSearch = function getRecentSearch(sessionId) {
  return function (dispatch) {
    dispatch({
      type: _constants2.default.GET_RECENT_SEARCH_LOADING,
      payload: {
        meta: {
          status: 'loading',
          error: ''
        },
        data: []
      }
    });
    return _mola2.default.getRecentSearch(sessionId).then(function (result) {
      if (result.meta.status === 'error') {
        dispatch({
          type: _constants2.default.GET_RECENT_SEARCH_ERROR,
          payload: result
        });
      } else {
        dispatch({
          type: _constants2.default.GET_RECENT_SEARCH_SUCCESS,
          payload: result
        });
      }
    });
  };
};

exports.getSearchResult = getSearchResult;
exports.getSearchGenre = getSearchGenre;
exports.getRecentSearch = getRecentSearch;