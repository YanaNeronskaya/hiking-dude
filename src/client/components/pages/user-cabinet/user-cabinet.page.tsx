import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { getCurrentUser } from '../../../graphql/queries/user';
import { Header } from '../../organisms/header/header.component';
import { Loader } from '../../organisms/loader/loader.component';
import { UserIcon } from '../../base/user-icon/user-icon';

// @ts-ignore
import css from './user-cabinet.module.scss';
// @ts-ignore
import Collections from '../../../toCDN/collections.svg';
// @ts-ignore
import Favourites from '../../../toCDN/favourite-collections.svg';
// @ts-ignore
import AddRoute from '../../../toCDN/add-route.svg';
// @ts-ignore
import ArrowLeft from '../../../toCDN/left-arrow.svg';
interface userData {
    data: any;
}

type UserCabinetProps = {};

export const UserCabinet: FunctionComponent<UserCabinetProps> = () => {
    const { loading, data } = useQuery<userData>(getCurrentUser);

    if (loading) return <Loader />;

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
                <div className={css.pageContent}>
                    <div className={css.userInfoBlock}>
                        <UserIcon />
                        <h2 className={css.userName}>
                            {data.user.name} {data.user.surname}
                        </h2>
                        <div className={css.iconsBlock}>
                            <Link to="/" className={css.iconLink}>
                                <Collections />
                            </Link>
                            <Link to="/" className={css.iconLink}>
                                <Favourites />
                            </Link>
                            <Link to="/" className={css.iconLink}>
                                <AddRoute />
                            </Link>
                        </div>
                    </div>
                    <div className={css.optionsBlock}>
                        <div className={css.menuOption}>
                            <span className={css.optionText}>My trips</span>{' '}
                            <ArrowLeft className={css.iconArrow} />
                        </div>
                        <div className={css.menuOption}>
                            <span className={css.optionText}>Create new</span>{' '}
                            <ArrowLeft className={css.iconArrow} />
                        </div>
                        <div className={css.menuOption}>
                            <span className={css.optionText}>
                                Explore suggestions
                            </span>{' '}
                            <ArrowLeft className={css.iconArrow} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
