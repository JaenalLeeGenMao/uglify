'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.featchProfile = exports.verifyPassword = exports.updateNewPassword = exports.verifyPasswordToken = exports.emailForgotPassword = exports.requestLogout = exports.requestLogin = exports.resendUserToken = exports.verifyUserToken = exports.createNewUser = undefined;

var _axios = require('axios');

var _endpoints = require('./endpoints');

var createNewUser = function createNewUser(_ref) {
  var _ref$email = _ref.email,
      email = _ref$email === undefined ? '' : _ref$email,
      _ref$password = _ref.password,
      password = _ref$password === undefined ? '' : _ref$password,
      _ref$csrf = _ref.csrf,
      csrf = _ref$csrf === undefined ? '' : _ref$csrf;

  var body = { email: email, password: password };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/signup', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response.data
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var verifyUserToken = function verifyUserToken(_ref2) {
  var _ref2$token = _ref2.token,
      token = _ref2$token === undefined ? '' : _ref2$token,
      _ref2$email = _ref2.email,
      email = _ref2$email === undefined ? '' : _ref2$email,
      _ref2$csrf = _ref2.csrf,
      csrf = _ref2$csrf === undefined ? '' : _ref2$csrf;

  var body = { token: token, email: email };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/signup/otp/verify', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function () {
    return {
      meta: {
        status: 'success'
      },
      data: {}
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var resendUserToken = function resendUserToken(_ref3) {
  var _ref3$email = _ref3.email,
      email = _ref3$email === undefined ? '' : _ref3$email,
      _ref3$csrf = _ref3.csrf,
      csrf = _ref3$csrf === undefined ? '' : _ref3$csrf;

  var body = { email: email };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/signup/otp/resend', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function () {
    return {
      meta: {
        status: 'success'
      },
      data: {}
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var requestLogin = function requestLogin(_ref4) {
  var _ref4$email = _ref4.email,
      email = _ref4$email === undefined ? '' : _ref4$email,
      _ref4$password = _ref4.password,
      password = _ref4$password === undefined ? '' : _ref4$password,
      _ref4$csrf = _ref4.csrf,
      csrf = _ref4$csrf === undefined ? '' : _ref4$csrf;

  var body = { email: email, password: password };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/login', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response.data.data
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var requestLogout = function requestLogout(_ref5) {
  var _ref5$uid = _ref5.uid,
      uid = _ref5$uid === undefined ? '' : _ref5$uid,
      _ref5$csrf = _ref5.csrf,
      csrf = _ref5$csrf === undefined ? '' : _ref5$csrf;

  var body = { uid: uid };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/logout', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var emailForgotPassword = function emailForgotPassword(_ref6) {
  var _ref6$email = _ref6.email,
      email = _ref6$email === undefined ? '' : _ref6$email,
      _ref6$csrf = _ref6.csrf,
      csrf = _ref6$csrf === undefined ? '' : _ref6$csrf;

  var body = { email: email };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/password/forgot', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var verifyPasswordToken = function verifyPasswordToken(_ref7) {
  var _ref7$email = _ref7.email,
      email = _ref7$email === undefined ? '' : _ref7$email,
      _ref7$token = _ref7.token,
      token = _ref7$token === undefined ? '' : _ref7$token,
      _ref7$csrf = _ref7.csrf,
      csrf = _ref7$csrf === undefined ? '' : _ref7$csrf,
      _ref7$password = _ref7.password,
      password = _ref7$password === undefined ? '' : _ref7$password;

  var body = { email: email, token: token, password: password };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/password/token', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var verifyPassword = function verifyPassword(_ref8) {
  var _ref8$csrf = _ref8.csrf,
      csrf = _ref8$csrf === undefined ? '' : _ref8$csrf,
      _ref8$password = _ref8.password,
      password = _ref8$password === undefined ? '' : _ref8$password;

  var body = { password: password };
  return (0, _axios.post)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/password/token', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var updateNewPassword = function updateNewPassword(_ref9) {
  var _ref9$password = _ref9.password,
      password = _ref9$password === undefined ? '' : _ref9$password,
      _ref9$csrf = _ref9.csrf,
      csrf = _ref9$csrf === undefined ? '' : _ref9$csrf;

  var body = { password: password };
  return (0, _axios.patch)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/password', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var featchProfile = function featchProfile(_ref10) {
  var _ref10$csrf = _ref10.csrf,
      csrf = _ref10$csrf === undefined ? '' : _ref10$csrf;

  return (0, _axios.get)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/profile', {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response.data.data
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

var updateProfile = function updateProfile(_ref11) {
  var _ref11$name = _ref11.name,
      name = _ref11$name === undefined ? '' : _ref11$name,
      _ref11$csrf = _ref11.csrf,
      csrf = _ref11$csrf === undefined ? '' : _ref11$csrf,
      _ref11$birthdate = _ref11.birthdate,
      birthdate = _ref11$birthdate === undefined ? '' : _ref11$birthdate,
      _ref11$gender = _ref11.gender,
      gender = _ref11$gender === undefined ? '' : _ref11$gender,
      _ref11$location = _ref11.location,
      location = _ref11$location === undefined ? '' : _ref11$location,
      token = _ref11.token;

  var body = { name: name, birthdate: birthdate, gender: gender, location: location, token: token };
  return (0, _axios.patch)(_endpoints.AUTH_BASE_ENDPOINT + '/v1/profile', body, {
    headers: {
      'x-csrf-token': csrf
    }
  }).then(function (response) {
    return {
      meta: {
        status: 'success'
      },
      data: response
    };
  }).catch(function (error) {
    return {
      meta: {
        status: 'error',
        error: error
      },
      data: {}
    };
  });
};

exports.createNewUser = createNewUser;
exports.verifyUserToken = verifyUserToken;
exports.resendUserToken = resendUserToken;
exports.requestLogin = requestLogin;
exports.requestLogout = requestLogout;
exports.emailForgotPassword = emailForgotPassword;
exports.verifyPasswordToken = verifyPasswordToken;
exports.updateNewPassword = updateNewPassword;
exports.verifyPassword = verifyPassword;
exports.featchProfile = featchProfile;