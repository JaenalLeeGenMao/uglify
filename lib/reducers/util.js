'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var findIndexByKeyValue = exports.findIndexByKeyValue = function findIndexByKeyValue(arraytosearch, key) {
  var valuetosearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  for (var i = 0; i < arraytosearch.length; i++) {
    if (arraytosearch[i]['meta'][key] == valuetosearch) {
      return i;
    }
  }
  return -1;
};