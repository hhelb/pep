/**
 * Created by hasj on 21/11/2016.
 */
import { combineReducers } from 'redux';
import * as types from 'types';

const playlist = (
    state = {},
    action
) => {
        switch(action.type){
            default:return state;
        }
};

const playlists = (
    state = [],
        action
) => {
    switch(action.type){
        case types.REQUEST_SUCCESS:
            if(action.data) return action.data;
            return state;
        default :
            return state;
    }
};

const playlistReducer = combineReducers(playlists);

export default  playlists;