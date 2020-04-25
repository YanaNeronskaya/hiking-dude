// @ts-nocheck
import React from 'react';
import { BrowserRouter, Route, Switch, StaticRouter } from 'react-router-dom';
import { HomePage } from './components/pages/home/home.page';
import { LogInPage } from './components/pages/login/login.page';
import { SignInPage } from './components/pages/signin/signin.page';
import { UserCabinet } from './components/pages/user-cabinet/user-cabinet.page';
import { BASE_ROUTES, USER_ROUTES } from '../constants/routes';
import { ErrorPage } from './components/pages/error-login/error.page';
import { withAuth } from '../client/components/hocs/requre-auth';

const routesRules = (
    <Switch>
        <Route exact path={USER_ROUTES.LOG_IN}>
            <LogInPage />
        </Route>
        <Route exact path={USER_ROUTES.SIGN_IN}>
            <SignInPage />
        </Route>
        <Route exact path={USER_ROUTES.USER_CABINET}>
            {withAuth(UserCabinet)}
        </Route>
        <Route exact path={BASE_ROUTES.HOME}>
            <HomePage />
        </Route>
    </Switch>
);

interface RoutesProps {
    url: string;
    isSsr: boolean;
}

export const Routes: React.SFC<RoutesProps> = ({ url, isSsr = false }) => {
    const context = {};

    return isSsr ? (
        <StaticRouter context={context} location={url}>
            {routesRules}
        </StaticRouter>
    ) : (
        <BrowserRouter>{routesRules}</BrowserRouter>
    );
};
