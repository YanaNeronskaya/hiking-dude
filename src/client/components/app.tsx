// @ts-nocheck
import React, { useEffect } from 'react';

import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

import { Routes } from '../routes';

interface AppProps {
    isSsr: boolean;
}

export const App: React.SFC<AppProps> = ({ isSsr = false }) => {
    // useEffect(() => {
    //     const query = `query User($id: ID!){
    //     user(id: $id) {
    //       name
    //       surname
    //       age
    //       address,
    //       trips{
    //           name
    //       }
    //     }
    // }`;

    //     fetch(USER_ROUTES.GET_BY_ID, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Accept: 'application/json',
    //         },
    //         body: JSON.stringify({
    //             query,
    //             variables: { id: '5e42a3ca5c3c240ec84fbff9' },
    //         }),
    //     })
    //         .then(r => r.json())
    //         .then(data => console.log('data returned:', data));
    // }, []);

    const cache = new InMemoryCache();
    const link = new HttpLink({
        uri: '/graphql',
        fetch: fetch,
    });

    const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
        cache,
        link,
    });

    return (
        <ApolloProvider client={client}>
            <Routes isSsr={isSsr} />
        </ApolloProvider>
    );
};
