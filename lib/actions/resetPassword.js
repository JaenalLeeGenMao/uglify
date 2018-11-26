'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePassword = undefined;

var _reactReduxToastr = require('react-redux-toastr');

var _auth = require('../api/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var updatePassword = exports.updatePassword = function updatePassword(_ref) {
  var currentPassword = _ref.currentPassword,
      newPassword = _ref.newPassword,
      confirmNewPassword = _ref.confirmNewPassword;

  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState) {
      var csrf, checkCurrentPassword, updateNewPassword;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              csrf = getState().runtime.csrf;

              if (!(newPassword !== confirmNewPassword)) {
                _context.next = 4;
                break;
              }

              _reactReduxToastr.toastr.warning('Notification', "Confirmation password doesn't match your new password.");
              return _context.abrupt('return', false);

            case 4:
              _context.next = 6;
              return _auth2.default.verifyPasswordToken({
                password: currentPassword,
                csrf: csrf
              });

            case 6:
              checkCurrentPassword = _context.sent;

              if (!(checkCurrentPassword.meta.status !== 'success')) {
                _context.next = 10;
                break;
              }

              _reactReduxToastr.toastr.warning('Notification', 'Current Password is invalid');
              return _context.abrupt('return', false);

            case 10:
              _context.next = 12;
              return _auth2.default.updateNewPassword({
                password: newPassword,
                csrf: csrf
              });

            case 12:
              updateNewPassword = _context.sent;

              if (!(updateNewPassword.meta.status !== 'success')) {
                _context.next = 16;
                break;
              }

              _reactReduxToastr.toastr.warning('Notification', 'Update password is failed');
              return _context.abrupt('return', false);

            case 16:

              _reactReduxToastr.toastr.success('Notification', 'Update password is success');
              return _context.abrupt('return', true);

            case 18:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};