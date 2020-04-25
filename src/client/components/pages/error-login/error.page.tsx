import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Header } from '../../organisms/header/header.component';

// @ts-ignore
import css from './error.module.scss';

type ErrorPageProps = {
    pageTitle: string;
    errorMessage: string;
    linkToRetry: string;
};

export const ErrorPage: FunctionComponent<ErrorPageProps> = ({
    pageTitle,
    errorMessage,
    linkToRetry
}) => {
  return (
      <>
          <Helmet>
              <meta charSet="utf-8" />
              <title>{pageTitle}</title>
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
                  <p>
                      {errorMessage}
                  </p>
                  <Link to={linkToRetry}>
                      Try again
                  </Link>
              </div>
          </div>
      </>
  )
};