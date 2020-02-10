// @ts-nocheck

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export interface StateProps {
    isFetching: boolean;
}

export const configureStore = (preloadedState: StateProps) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware)
    );
}
