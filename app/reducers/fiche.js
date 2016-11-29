/**
 * Created by hasj on 21/11/2016.
 */
import { combineReducers } from 'redux';
import * as types from 'types';

const fiche = (
    state = {},
    action
) => {
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

const fiches = (
    state = [],
    action
) => {
    switch (action.type) {
        case types.REQUEST_SUCCESS:
            if (action.data) return action.data;
            return state;
        case types.CREATE_FICHE_REQUEST:
            return [...state, fiche(undefined, action)];
        case types.CREATE_FICHE_FAILURE:
        case types.EDIT_FICHE_FAILURE:
            return state.filter(t => t.id !== action.id);
        case types.DESTROY_FICHE:
            return state.filter(t => t.id !== action.id);
        default:
            return state;
    }
};

const newFiche = (
    state = {},
    action
) => {
    switch (action.type) {
        case types.FICHE_TYPING:
            return action.newFiche;
        case types.CREATE_FICHE_REQUEST:
            return {};
        default:
            return state;
    }
};

const ficheReducer = combineReducers({
    fiches,
    newFiche
});

export default ficheReducer;