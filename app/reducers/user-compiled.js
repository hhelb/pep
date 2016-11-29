'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _types = require('types');

var types = _interopRequireWildcard(_types);

var _redux = require('redux');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isLogin = function isLogin() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments[1];

  switch (action.type) {
    case types.TOGGLE_LOGIN_MODE:
      return !state;
    default:
      return state;
  }
};

var message = function message() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments[1];

  switch (action.type) {
    case types.TOGGLE_LOGIN_MODE:
    case types.MANUAL_LOGIN_USER:
    case types.SIGNUP_USER:
    case types.LOGOUT_USER:
    case types.LOGIN_SUCCESS_USER:
    case types.SIGNUP_SUCCESS_USER:
      return '';
    case types.LOGIN_ERROR_USER:
    case types.SIGNUP_ERROR_USER:
      return action.message;
    default:
      return state;
  }
};

var isWaiting = function isWaiting() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case types.MANUAL_LOGIN_USER:
    case types.SIGNUP_USER:
    case types.LOGOUT_USER:
      return true;
    case types.LOGIN_SUCCESS_USER:
    case types.SIGNUP_SUCCESS_USER:
    case types.LOGOUT_SUCCESS_USER:
    case types.LOGIN_ERROR_USER:
    case types.SIGNUP_ERROR_USER:
    case types.LOGOUT_ERROR_USER:
      return false;
    default:
      return state;
  }
};

var authenticated = function authenticated() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case types.LOGIN_SUCCESS_USER:
    case types.SIGNUP_SUCCESS_USER:
    case types.LOGOUT_ERROR_USER:
      return true;
    case types.LOGIN_ERROR_USER:
    case types.SIGNUP_ERROR_USER:
    case types.LOGOUT_SUCCESS_USER:
      return false;
    default:
      return state;
  }
};

var userReducer = (0, _redux.combineReducers)({
  isLogin: isLogin,
  isWaiting: isWaiting,
  authenticated: authenticated,
  message: message
});

exports.default = userReducer;

//# sourceMappingURL=user-compiled.js.map