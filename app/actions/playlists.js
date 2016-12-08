import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';

polyfill();
export function makeFicheRequest(method, id, data, api = '/playlists') {
    return request[method](api + (id ? ('/' + id) : ''), data);
}
export function fetchData(){
    return{
        type: types.GET_PLAYLISTS,
        promise: makeFicheRequest('get')
    }
}
