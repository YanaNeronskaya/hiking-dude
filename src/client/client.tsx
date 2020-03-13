// @ts-nocheck
import React from 'react';
import { hydrate } from 'react-dom';

import { App } from './components/app';

hydrate(<App isSsr={false} />, document.querySelector('#app'));
