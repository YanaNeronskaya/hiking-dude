import React, { useEffect } from 'react';
import { USER_ROUTES } from '../../constants/routes';

import { Routes } from '../routes';

interface AppProps {
    isSsr: boolean;
}

export const App: React.SFC<AppProps> = ({ isSsr = false }) => {
    useEffect(() => {
        const query = `query User($id: ID!){
        user(id: $id) {
          name
          surname
          age
          address,
          trips{
              name
          }
        }
    }`;

        fetch(USER_ROUTES.GET_BY_ID, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: { id: '5e42a3ca5c3c240ec84fbff9' },
            }),
        })
            .then(r => r.json())
            .then(data => console.log('data returned:', data));
    }, []);

    return <Routes isSsr={isSsr} />;
};
