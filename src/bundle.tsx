import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import { App } from './client/components/app';

const store = configureStore({ isFetching: false });

render(
    <Provider store={store}>
        <App isSsr={false} />
    </Provider>,
    document.querySelector('#app')
);
