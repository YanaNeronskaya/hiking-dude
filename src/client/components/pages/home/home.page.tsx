import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/react-hooks';

import { getUserById } from '../../../graphql/queries/user';
import { Loader } from '../../organisms/loader/loader.component';
import { HomeMobile } from './mobile/home-mobile.page';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = props => {
    // const { loading, error, data } = useQuery(getUserById, {
    //     variables: { id: '5e42a3ca5c3c240ec84fbff9' },
    // });
    //
    // if (loading) {
    //     return <Loader />;
    // }

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home page</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link href="https://fonts.googleapis.com/css?family=Baloo+Bhai+2&display=swap" rel="stylesheet"></link>
            </Helmet>
            <HomeMobile />
        </>
    );
};
