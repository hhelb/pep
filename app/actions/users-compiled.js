'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beginLogin = beginLogin;
exports.loginSuccess = loginSuccess;
exports.loginError = loginError;
exports.signUpError = signUpError;
exports.beginSignUp = beginSignUp;
exports.signUpSuccess = signUpSuccess;
exports.beginLogout = beginLogout;
exports.logoutSuccess = logoutSuccess;
exports.logoutError = logoutError;
exports.toggleLoginMode = toggleLoginMode;
exports.manualLogin = manualLogin;
exports.signUp = signUp;
exports.logOut = logOut;

var _es6Promise = require('es6-promise');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _reactRouterRedux = require('react-router-redux');

var _types = require('types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _es6Promise.polyfill)();

var getMessage = function getMessage(res) {
  return res.response && res.response.data && res.response.data.message;
};
/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint - defaults to /login
 * @return Promise
 */
function makeUserRequest(method, data) {
  var api = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/login';

  return _axios2.default[method](api, data);
}

// Log In Action Creators
function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message: message
  };
}

function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message: message
  };
}

// Sign Up Action Creators
function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message: message
  };
}

function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

function signUpSuccess(message) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    message: message
  };
}

// Log Out Action Creators
function beginLogout() {
  return { type: types.LOGOUT_USER };
}

function logoutSuccess() {
  return { type: types.LOGOUT_SUCCESS_USER };
}

function logoutError() {
  return { type: types.LOGOUT_ERROR_USER };
}

function toggleLoginMode() {
  return { type: types.TOGGLE_LOGIN_MODE };
}

function manualLogin(data) {
  return function (dispatch) {
    dispatch(beginLogin());

    return makeUserRequest('post', data, '/login').then(function (response) {
      if (response.status === 200) {
        dispatch(loginSuccess(response.data.message));
        dispatch((0, _reactRouterRedux.push)('/'));
      } else {
        dispatch(loginError('Oops! Something went wrong!'));
      }
    }).catch(function (err) {
      dispatch(loginError(getMessage(err)));
    });
  };
}

function signUp(data) {
  return function (dispatch) {
    dispatch(beginSignUp());

    return makeUserRequest('post', data, '/signup').then(function (response) {
      if (response.status === 200) {
        dispatch(signUpSuccess(response.data.message));
        dispatch((0, _reactRouterRedux.push)('/'));
      } else {
        dispatch(signUpError('Oops! Something went wrong'));
      }
    }).catch(function (err) {
      dispatch(signUpError(getMessage(err)));
    });
  };
}

function logOut() {
  return function (dispatch) {
    dispatch(beginLogout());

    return makeUserRequest('post', null, '/logout').then(function (response) {
      if (response.status === 200) {
        dispatch(logoutSuccess());
      } else {
        dispatch(logoutError());
      }
    });
  };
}

//# sourceMappingURL=users-compiled.js.map