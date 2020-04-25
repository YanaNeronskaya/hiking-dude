import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from '../client/components/app';

type serverRender = {
    url: string;
    user?: any;
};

export const serverRender = ({ url }: serverRender) => {
    let content = renderToString(<App url={url} isSsr />);

    return { content };
};
