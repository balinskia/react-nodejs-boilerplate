import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import './styles/main.scss';
import Root from './containers/Root';
import reducer from './reducers';

const logger = createLogger();

let middlewares = null;
if (process.env.NODE_ENV !== 'production') {
    middlewares = applyMiddleware(thunk, logger);
} else {
    middlewares = applyMiddleware(thunk);
}

const store = createStore(
    reducer,
    middlewares
);

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('main')
);
