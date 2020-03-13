import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from '../client/components/app';

export const serverRender = () => {
    let content = renderToString(<App isSsr />);

    return { content };
};
