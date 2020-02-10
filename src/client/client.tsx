import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '../redux/configureStore';
import { App } from './components/app';

// @ts-ignore
const state = window.__STATE__;
//@ts-ignore
delete window.__STATE__;

const store = configureStore(state);

hydrate(
    <Provider store={store}>
        <App isSsr={false} />
    </Provider>,
    document.querySelector('#app')
);
