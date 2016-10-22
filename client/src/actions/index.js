import axios from 'axios';
import REDUX_CONST from '../../constants/Redux/index';

export function initAction() {
    return {
        type: REDUX_CONST,
        payload: 'YOU!'
    };
}

const URL = 'https://api.github.com/orgs/angular/repos';

export function start() {
    return dispatch => {
        axios.get(URL)
            .then(res => dispatch(initAction(res)))
            .catch(() => alert('error fetching')); // eslint-disable-line no-alert
    };
}

