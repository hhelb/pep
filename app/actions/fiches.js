/**
 * Created by hasj on 21/11/2016.
 */
/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';

polyfill();
export function makeFicheRequest(method, id, data, api = '/fiches') {
    return request[method](api + (id ? ('/' + id) : ''), data);
}

// Fetch fiche logic
export function fetchFiches() {
    return {
        type: types.GET_FICHES,
        promise: makeFicheRequest('get')
    };
}
export function getOne(id){
    return {
        type: types.GET_FICHE,
        promise: makeFicheRequest('get',id)
    }
}
export function ficheTyping() {
    return {
        type: types.FICHE_TYPING,
    };
}

export function createFicheRequest(data) {
    return {
        type: types.CREATE_FICHE_REQUEST,
        text: data.text,
        name: data.name
    };
}

export function editFicheRequest(data){
    return {
        type: types.EDIT_FICHE_REQUEST,
        id:data.id,
        text: data.text,
        name : data.name
        }
}
export function destroy(id){
    return {
        type: types.DESTROY_FICHE,
        id : id
    }
}

export function createFicheSuccess() {
    return {
        type: types.CREATE_FICHE_SUCCESS
    };
}

export function createFicheFailure(data) {
    return {
        type: types.CREATE_FICHE_FAILURE,
        id: data.id,
        error: data.error
    };
}
export function submitFormSuccess(data){
    return {
        type: types.SUBMIT_FORM,
        payload: data
    }
}

export function editFicheSuccess(id){
    return {
        type: types.EDIT_FICHE_SUCCESS,
        id
    }
}
export function editFicheFailure(data) {
    return{
        type:types.EDIT_FICHE_FAILURE,
        id:data.id,
        error: data.error
    }
}
export function createFiche(data) {
    return (dispatch, getState) => {
        //const id = md5.hash(data.name);
        // Redux thunk's middleware receives the store methods `dispatch`
        // and `getState` as parameters
        const { fiche } = getState();
        // First dispatch an optimistic update
        dispatch(createFicheRequest(data));
        return makeFicheRequest('post', data)
            .then(res => {
                if (res.status === 200) {
                    return dispatch(createFicheSuccess());
                }
            })
            .catch(() => {
                return dispatch(createFicheFailure({ error: 'Oops! Something went wrong and we couldn\'t create your fiche'}));
            });
    };
}
export function submitForm({ name, text}){
    return (dispatch) => {
        let id = md5.hash(name);
        dispatch(createFicheRequest({name, text}));
        return makeFicheRequest('post',{ name, text})
            .then(res => {
                if(res.status ===200) {
                    return dispatch(submitFormSuccess(res.data));
                }
            })
            .catch(() => dispatch(createFicheFailure({error: 'Oops! Something went wrong and we couldn\'t create your fiche'})))
    }
}

export function destroyFiche(id){
    return (dispatch) => {
        return makeFicheRequest('delete', id)
            .then(() => dispatch(destroy(id)))
            .catch(() => dispatch(createFicheFailure({id,
                error: 'Oops! Something went wrong and we couldn\'t destroy your fiche'})));
    }
}

export function editFiche({id, name, text}){
    return (dispatch) => {
        dispatch(editFicheRequest({id, name, text}));
        return makeFicheRequest('put', id, {id, name, text})
            .then((res) => {if(res.status === 200) {
                return dispatch(editFicheSuccess(res.data));}})
            .catch(() => (editFicheFailure({id,
                error: 'Oops! Something went wrong and we couldn\'t edit your fiche'})))
    }
}