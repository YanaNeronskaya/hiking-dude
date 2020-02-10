import React from 'react';
import { renderToString } from 'react-dom/server';

import { Provider } from 'react-redux';
import { configureStore, StateProps } from '../redux/configureStore';
import { App } from '../client/components/app';

export const serverRender = (initialState: StateProps) => {
    const store = configureStore(initialState);

    let content = renderToString(
        <Provider store={store}>
            <App isSsr />
        </Provider>
    );

    const preloadedState = store.getState();

    return { content, preloadedState };
};
