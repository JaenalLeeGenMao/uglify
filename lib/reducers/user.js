'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = runtime;

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var emptyData = {
  uid: '',
  sid: '',
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  refreshToken: '',
  expire: '',
  type: '',
  isLoading: false
};

var fakeData = {
  username: 'Trisno Nino',
  email: 'ninotrisno34@gmail.com',
  birthdate: '2018-09-29',
  gender: 'm',
  phoneNumber: '0853-1501-5663',
  photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtTG0j1MmEng29JZuTbH7KqM55WOrUD7XfxtzOseyZeuFWJPv7',
  location: 'Indonesia',
  setting: {
    videoQuality: 1,
    location: 1,
    autoPlay: [1],
    signOn: [1, 2]
  }
};

var initialState = Object.assign(emptyData, fakeData);
function runtime() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants2.default.UPDATE_PROFILE_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });
    case _constants2.default.UPDATE_PROFILE_SUCCESS:
      return _extends({}, state, action.payload, {
        isLoading: false
      });
    case _constants2.default.UPDATE_PROFILE_FAILURE:
      return _extends({}, state, {
        isLoading: false
      });

    case _constants2.default.UPDATE_SETTING_REQUEST:
      return _extends({}, state, {
        isLoading: true
      });
    case _constants2.default.UPDATE_SETTING_SUCCESS:
      return _extends({}, state, {
        isLoading: false,
        setting: action.payload
      });
    case _constants2.default.UPDATE_SETTING_FAILURE:
      return _extends({}, state, {
        isLoading: false
      });

    case _constants2.default.FETCH_PROFILE_USER:
      return _extends({}, state, action.payload, {
        isLoading: false
      });

    case _constants2.default.SET_USER_VARIABLE:
      return _extends({}, initialState, state, _defineProperty({}, action.payload.name, action.payload.value));
    default:
      return _extends({}, initialState, state);
  }
}