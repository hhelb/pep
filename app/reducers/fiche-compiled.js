'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _types = require('types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * Created by hasj on 21/11/2016.
                                                                                                                                                                                                     */


var fiche = function fiche() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case types.CREATE_FICHE_REQUEST:
            return {
                id: action.id,
                text: action.text,
                name: action.name
            };
        default:
            return state;
    }
};

var fiches = function fiches() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case types.REQUEST_SUCCESS:
            if (action.data) return action.data;
            return state;
        case types.CREATE_FICHE_REQUEST:
            return [].concat(_toConsumableArray(state), [fiche(undefined, action)]);
        case types.CREATE_FICHE_FAILURE:
        case types.EDIT_FICHE_FAILURE:
            return state.filter(function (t) {
                return t.id !== action.id;
            });
        case types.DESTROY_FICHE:
            return state.filter(function (t) {
                return t.id !== action.id;
            });
        default:
            return state;
    }
};

var newFiche = function newFiche() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case types.FICHE_TYPING:
            return action.newFiche;
        case types.CREATE_FICHE_REQUEST:
            return {};
        default:
            return state;
    }
};

var ficheReducer = (0, _redux.combineReducers)({
    fiches: fiches,
    newFiche: newFiche
});

exports.default = ficheReducer;

//# sourceMappingURL=fiche-compiled.js.map