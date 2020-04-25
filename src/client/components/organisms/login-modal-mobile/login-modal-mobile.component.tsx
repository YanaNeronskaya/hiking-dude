import React, { FC } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { BASE_ROUTES, USER_ROUTES } from '../../../../constants/routes';
import { Modal } from '../../base/modal/modal.component';
import { getCurrentUser } from '../../../graphql/queries/user';
import { userLogOut } from '../../../graphql/mutations/user';
//@ts-ignore
import css from './login-modal-mobile.module.scss';
import { Loader } from '../loader/loader.component';

type LoginModalMobileProps = {
    isOpen: boolean;
    onClose: any;
    data: any;
    mutate: (arg: any) => void;
};

const renderModalAuthBtn = (
    css: {
        contentText: string;
    },
    user: any,
    onLogOutClick: () => void
) => {
    if (user) {
        return (
            <>
                <Link to={USER_ROUTES.USER_CABINET} className={css.contentText}>
                    Account
                </Link>
                <button className={css.contentText} onClick={onLogOutClick}>
                    Logout
                </button>
            </>
        );
    } else {
        return (
            <>
                <Link to={USER_ROUTES.LOG_IN} className={css.contentText}>
                    Log in
                </Link>
                <Link to={USER_ROUTES.SIGN_IN} className={css.contentText}>
                    Sign in
                </Link>
            </>
        );
    }
};

const LoginModalMobileContent: FC<LoginModalMobileProps> = ({
    isOpen = false,
    onClose,
    data,
    mutate,
}) => {
    if (data.loading) {
        return <Loader />;
    }

    const onLogOutClick = () =>
        mutate({
            refetchQueries: [
                {
                    query: getCurrentUser,
                },
            ],
        });

    return (
        <Modal isOpen={isOpen} isCloseIconEnabled onClose={onClose}>
            <div className={css.contentContainer}>
                {renderModalAuthBtn(css, data.user, onLogOutClick)}
                <Link to={BASE_ROUTES.HOME} className={css.contentText}>
                    Explore boards
                </Link>
            </div>
        </Modal>
    );
};

export const LoginModalMobile = graphql(userLogOut)(
    graphql(getCurrentUser)(LoginModalMobileContent)
);
