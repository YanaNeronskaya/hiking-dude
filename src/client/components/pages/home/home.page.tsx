import React from 'react';

import { Header } from '../../organisms/header/header.component';

export interface HomePageProps {}

export const HomePage: React.SFC<HomePageProps> = ({}) => {
    return (
        <>
            <Header />
            <div>Home Page</div>
        </>
    );
};
