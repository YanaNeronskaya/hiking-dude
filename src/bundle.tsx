import React from 'react';
import { render } from 'react-dom';
import { App } from './client/components/app';

render(
    <App isSsr={false} />,
    document.querySelector('#app')
);
