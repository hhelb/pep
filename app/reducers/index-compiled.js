'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _user = require('reducers/user');

var _user2 = _interopRequireDefault(_user);

var _topic = require('reducers/topic');

var _topic2 = _interopRequireDefault(_topic);

var _message = require('reducers/message');

var _message2 = _interopRequireDefault(_message);

var _fiche = require('reducers/fiche');

var _fiche2 = _interopRequireDefault(_fiche);

var _reduxForm = require('redux-form');

var _reactRouterRedux = require('react-router-redux');

var _types = require('types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isFetching = function isFetching() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case types.CREATE_REQUEST:
      return true;
    case types.REQUEST_SUCCESS:
    case types.REQUEST_FAILURE:
      return false;
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
var rootReducer = (0, _redux.combineReducers)({
  isFetching: isFetching,
  fiche: _fiche2.default,
  topic: _topic2.default,
  user: _user2.default,
  message: _message2.default,
  routing: _reactRouterRedux.routerReducer,
  form: _reduxForm.reducer
});

exports.default = rootReducer;

//# sourceMappingURL=index-compiled.js.map