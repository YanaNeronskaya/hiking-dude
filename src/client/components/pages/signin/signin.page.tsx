import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Header } from '../../organisms/header/header.component';
import { SignUpForm } from '../../base/sign-up-form/sign-up-form';

// @ts-ignore
import css from '../login/login.module.scss';
// @ts-ignore
import GoogleSvg from '../../../toCDN/googlePlus.svg';

type SignInPageProps = {};

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

export const SignInPage: FC<SignInPageProps> = () => {
    const handleFormSubmit = () => {};

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Hiking-dude | Sign in</title>
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
                        Please, enter some info for your account:
                    </p>
                    <div className={css.formContainer}>
                        <SignUpForm handleFormSubmit={handleFormSubmit} />
                    </div>
                    {/* <p className={css.text}>You can sign up with the next services:</p>
                    <button className={css.logInBtn} onClick={handleLoginBtnClick(LogInTypes.GOOGLE)}>
                        <GoogleSvg height={90} width={90}/>
                    </button> */}
                </div>
            </div>
        </>
    );
};
