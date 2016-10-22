/**
 * Created by Bartlomiej Rutkowski on 22.10.16.
 */
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';

const createDevelopmentMiddleware = () => {
    const logger = createLogger();
    return applyMiddleware(thunk, logger);
};

const createProductionMiddleware = () => {
    return applyMiddleware(thunk);
};

export const testMiddleware = [thunk];

const middleware = process.env.NODE_ENV !== 'production' ? createDevelopmentMiddleware() : createProductionMiddleware();
const store = createStore(
    reducer,
    middleware
);

export default store;
