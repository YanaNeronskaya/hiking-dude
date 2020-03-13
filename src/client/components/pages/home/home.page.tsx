import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { getUserById } from '../../graphql/queries/user';
import { Header } from '../../organisms/header/header.component';

export interface HomePageProps {}

export const HomePage: React.SFC<HomePageProps> = props => {
    const { loading, error, data } = useQuery(getUserById, {
        variables: { id: '5e42a3ca5c3c240ec84fbff9' },
    });

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(data);
    debugger;

    return (
        <>
            <Header />
            <div>Home Page</div>
        </>
    );
};
