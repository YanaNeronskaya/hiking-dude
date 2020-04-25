import React, { FunctionComponent, ReactChildren } from 'react';
import { Link } from 'react-router-dom';

// @ts-ignore
import css from './hidden-link.module.scss';

type HiddenLinkProps = {
    href: string;
    children: ReactChildren | Element;
};

export const HiddenLink: FunctionComponent<HiddenLinkProps> = ({
    href,
    children,
}) => {
    return (
        <Link to={href} className={css.link}>
            {children}
        </Link>
    );
};
