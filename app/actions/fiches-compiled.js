'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * Created by hasj on 21/11/2016.
                                                                                                                                                                                                                                                                               */
/* eslint consistent-return: 0, no-else-return: 0*/


exports.makeFicheRequest = makeFicheRequest;
exports.fetchFiches = fetchFiches;
exports.ficheTyping = ficheTyping;
exports.createFicheRequest = createFicheRequest;
exports.destroy = destroy;
exports.createFicheSuccess = createFicheSuccess;
exports.createFicheFailure = createFicheFailure;
exports.submitFormSuccess = submitFormSuccess;
exports.editFicheSuccess = editFicheSuccess;
exports.editFicheFailure = editFicheFailure;
exports.createFiche = createFiche;
exports.submitForm = submitForm;
exports.destroyFiche = destroyFiche;
exports.editFiche = editFiche;

var _es6Promise = require('es6-promise');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _sparkMd = require('spark-md5');

var _sparkMd2 = _interopRequireDefault(_sparkMd);

var _types = require('types');

var types = _interopRequireWildcard(_types);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _es6Promise.polyfill)();
function makeFicheRequest(method, id, data) {
    var api = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/fiches';

    return _axios2.default[method](api + (id ? '/' + id : ''), data);
}

// Fetch posts logic
function fetchFiches() {
    return {
        type: types.GET_FICHES,
        promise: makeFicheRequest('get')
    };
}

function ficheTyping() {
    return {
        type: types.FICHE_TYPING
    };
}

function createFicheRequest(data) {
    return {
        type: types.CREATE_FICHE_REQUEST,
        id: data.id,
        text: data.text,
        name: data.name
    };
}
function destroy(id) {
    return {
        type: types.DESTROY_FICHE,
        id: id
    };
}

function createFicheSuccess() {
    return {
        type: types.CREATE_FICHE_SUCCESS
    };
}

function createFicheFailure(data) {
    return {
        type: types.CREATE_FICHE_FAILURE,
        id: data.id,
        error: data.error
    };
}
function submitFormSuccess(data) {
    return {
        type: types.SUBMIT_FORM,
        payload: data
    };
}

function editFicheSuccess(data) {
    return {
        type: type.EDIT_FICHE_SUCCESS,
        payload: data
    };
}
function editFicheFailure(data) {
    return {
        type: types.EDIT_FICHE_FAILURE,
        id: data.id,
        error: data.error
    };
}
function createFiche(data) {
    console.log("holaaaaaaaaaaaaaa  " + (typeof data === 'undefined' ? 'undefined' : _typeof(data)) + " " + data);
    return function (dispatch, getState) {
        var id = _sparkMd2.default.hash(data.name);
        // Redux thunk's middleware receives the store methods `dispatch`
        // and `getState` as parameters

        var _getState = getState(),
            fiche = _getState.fiche;
        // First dispatch an optimistic update


        dispatch(createFicheRequest(data));
        return makeFicheRequest('post', id, data).then(function (res) {
            if (res.status === 200) {
                return dispatch(createFicheSuccess());
            }
        }).catch(function () {
            return dispatch(createFicheFailure({ id: id, error: 'Oops! Something went wrong and we couldn\'t create your fiche' }));
        });
    };
}
function submitForm(_ref) {
    var name = _ref.name,
        text = _ref.text;

    return function (dispatch) {
        var id = _sparkMd2.default.hash(name);
        dispatch(createFicheRequest({ id: id, name: name, text: text }));
        return makeFicheRequest('post', id, { id: id, name: name, text: text }).then(function (res) {
            if (res.status === 200) {
                return dispatch(submitFormSuccess(res.data));
            }
        }).catch(function () {
            return dispatch(createFicheFailure({ id: id, error: 'Oops! Something went wrong and we couldn\'t create your fiche' }));
        });
    };
}

function destroyFiche(id) {
    return function (dispatch) {
        return makeFicheRequest('delete', id).then(function () {
            return dispatch(destroy(id));
        }).catch(function () {
            return dispatch(createFicheFailure({ id: id,
                error: 'Oops! Something went wrong and we couldn\'t destroy your fiche' }));
        });
    };
}

function editFiche(id) {
    return function (dispatch) {
        return makeFicheRequest('put', id).then(function (res) {
            if (res.status === 200) {
                return dispatch(editFicheSuccess(res.data));
            }
        }).catch(function () {
            return editFicheFailure({ id: id,
                error: 'Oops! Something went wrong and we couldn\'t edit your fiche' });
        });
    };
}

//# sourceMappingURL=fiches-compiled.js.map