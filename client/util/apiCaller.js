/**
 * Created by Bartlomiej Rutkowski on 23.10.16.
 */
// import axios from 'axios';
import Config from '../../server/config';

export const API_URL = (typeof window === 'undefined' || process.env.NODE_ENV === 'test') ?
process.env.BASE_URL || (`http://localhost:${process.env.PORT || Config.port}/api`) :
    '/api';

/*
export function callApiGet(URL, query) {
    return axios
        .get(`${API_URL}/${URL}`, {
            params: {
                query
            }
        });
}

export function callApiPost(URL, body) {
    return axios
        .post(`${API_URL}/${URL}`, body);
}

export function callApiPut(URL, body) {
    return axios
        .put(`${API_URL}/${URL}`, body);
}

export function callApiDelete(URL, body) {
    return axios
        .put(`${API_URL}/${URL}`, {body});
}
*/
