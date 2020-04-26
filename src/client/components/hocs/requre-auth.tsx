// @ts-nocheck
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useHistory } from 'react-router';
import { getCurrentUser } from '../../graphql/queries/user';
import { USER_ROUTES } from '../../../constants/routes';
import { Loader } from '../organisms/loader/loader.component';

interface authData {
    data: any;
}

export const withAuth = WrappedComponent => {
    const RequireAuth: React.FC<{}> = () => {
        const history = useHistory();
        const { loading, data } = useQuery<authData>(getCurrentUser);

        useEffect(() => {
            if (!loading && !data.user) {
                history.push(USER_ROUTES.LOG_IN);
            }
        }, [data]);

        if (loading) return <Loader />;

        return !loading && <WrappedComponent />;
    };

    return <RequireAuth />;
};
