// @ts-nocheck
import React from 'react';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import { Routes } from '../routes';

interface AppProps {
    isSsr: boolean;
    url?: string;
}

const AppComponent: React.SFC<AppProps> = ({ isSsr = false, url}) => {
    const cache = new InMemoryCache();
    const link = new HttpLink({
        uri: '/graphql',
        fetch: fetch,
        credentials: 'same-origin',
    });

    const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        cache,
        link
    });

    return (
        <ApolloProvider client={client}>
            <Routes url={url} isSsr={isSsr} />
        </ApolloProvider>
    );
};

export const App = AppComponent;
