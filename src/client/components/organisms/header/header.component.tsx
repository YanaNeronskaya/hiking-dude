import React, { useState } from 'react';
import { LoginModalMobile } from '../login-modal-mobile/login-modal-mobile.component';
import { BASE_ROUTES } from '../../../../constants/routes';
import { HiddenLink } from '../../base/hiddenLink/hidden-link.component';

// @ts-ignore
import MenuSvg from '../../../toCDN/menu.svg';
// @ts-ignore
import css from './header.module.scss';

export interface HeaderProps {}

export const Header: React.SFC<HeaderProps> = () => {
    const [isLoginModalOpen, toggleLoginModal] = useState(false);
    const handleModalToggle = () => {
        toggleLoginModal(!isLoginModalOpen);
    };

    return (
        <div className={css.wrapper}>
            <HiddenLink href={BASE_ROUTES.HOME}>
                <div className={css.logoText}>Hiking, dude</div>
            </HiddenLink>
            <button className={css.btnMenu} onClick={handleModalToggle}>
                <MenuSvg height={45} width={45} />
            </button>
            <LoginModalMobile
                isOpen={isLoginModalOpen}
                onClose={handleModalToggle}
            />
        </div>
    );
};
