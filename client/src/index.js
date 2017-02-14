import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.scss';
import Root from './containers/Root';
import store from './store';

render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById('main')
);
