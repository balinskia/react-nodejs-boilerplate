import axios from 'axios';

function init() {
    return {type: 'START', payload: 'YOU!'};
}

const URL =
    'https://api.github.com/orgs/angular/repos';

export function start() {
    return dispatch => {
        axios.get(URL)
            .then(res => dispatch(init(res)))
            .catch(() => alert('error fetching'));
    }
}

