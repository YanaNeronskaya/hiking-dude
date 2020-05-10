import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../../organisms/header/header.component';
import { LoginForm } from '../../base/login-form/login-form';

// @ts-ignore
import css from './login.module.scss';
// @ts-ignore
import GoogleSvg from '../../../toCDN/googlePlus.svg';

type LoginPageProps = {};

const LogInTypes = {
    GOOGLE: 'google',
};

const handleLoginBtnClick = (type: string) => () => {
    switch (type) {
        case LogInTypes.GOOGLE: {
            window.location.href = '/login';
        }
    }
};

export const LogInPage: FunctionComponent<LoginPageProps> = () => {
    const handleFormSubmit = () => {};

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hiking-dude | Log in</title>
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
                <div className={css.pageContent}>
                    <p className={css.text}>
                        Please, enter your email and password:
                    </p>
                    <div className={css.formContainer}>
                        <LoginForm handleFormSubmit={handleFormSubmit} />
                    </div>
                </div>
            </div>
        </>
    );
};
