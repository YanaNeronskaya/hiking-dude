import React from 'react';

import { Header } from '../../../organisms/header/header.component';
import { HomeContent } from '../../../organisms/home-content/home-content.component';
// @ts-ignore
import css from './home-mobile.page.module.scss';

export const HomeMobile = () => {
    return (
        <>
        <div className={css.mainContainer}>
            <Header />
            <HomeContent />
        </div>
        </>
    );
};
