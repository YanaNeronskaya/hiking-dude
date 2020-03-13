// @ts-nocheck
import React from 'react';
import { BrowserRouter, Route, Switch, StaticRouter } from 'react-router-dom';

import { HomePage } from './components/pages/home/home.page';
import { LoginPage } from './components/pages/login/login.page';
import { BASE_ROUTES } from '../constants/routes';

const routesRules = (
    <Switch>
        <Route path={BASE_ROUTES.HOME}>
            <HomePage />
        </Route>
        <Route path={BASE_ROUTES.LOGIN}>
            <LoginPage />
        </Route>
    </Switch>
);

interface RoutesProps {
    isSsr: boolean;
}

export const Routes: React.SFC<RoutesProps> = ({ isSsr = false }) => {
    return isSsr ? (
        <StaticRouter>{routesRules}</StaticRouter>
    ) : (
        <BrowserRouter>{routesRules}</BrowserRouter>
    );
};
