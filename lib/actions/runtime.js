'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRuntimeVariable = setRuntimeVariable;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setRuntimeVariable(_ref) {
  var name = _ref.name,
      value = _ref.value;

  return {
    type: _constants2.default.SET_RUNTIME_VARIABLE,
    payload: {
      name: name,
      value: value
    }
  };
} /* eslint-disable import/prefer-default-export */