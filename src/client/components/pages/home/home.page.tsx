import React from 'react';
import { Helmet } from 'react-helmet';
import { HomeMobile } from './mobile/home-mobile.page';

export interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hiking-dude | Home page</title>
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
