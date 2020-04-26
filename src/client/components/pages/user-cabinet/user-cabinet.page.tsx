import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../../organisms/header/header.component';

// @ts-ignore
import css from './user-cabinet.module.scss';

type UserCabinetProps = {}

export const UserCabinet: FunctionComponent<UserCabinetProps> = (props) => {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hiking-dude | User's cabinet</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Baloo+Bhai+2&display=swap"
                    rel="stylesheet"
                ></link>
            </Helmet>
            <div className={css.mainContainer}>
                <Header />
                <div className={css.pageContent} >
                    user page
                </div>
            </div>
        </>
    );
};
