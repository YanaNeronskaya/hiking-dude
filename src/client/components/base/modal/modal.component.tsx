import React, { FunctionComponent, ReactChildren } from 'react';

// @ts-ignore
import CloseBtnSvg from '../../../toCDN/closeBtn.svg';
// @ts-ignore
import css from './modal.module.scss';

type ModalProps = {
    isOpen: boolean;
    isCloseIconEnabled: boolean;
    children?: any;
    onClose?: any;
};

export const Modal: FunctionComponent<ModalProps> = ({
    isOpen = false,
    isCloseIconEnabled = false,
    children,
    onClose,
}) => {
    return (
        isOpen && (
            <div className={css.modalContainer}>
                <div className={css.innerContainer}>
                    {isCloseIconEnabled && (
                        <button className={css.closeBtn} onClick={onClose}>
                            <CloseBtnSvg />
                        </button>
                    )}
                    <div className={css.content}>{children}</div>
                </div>
            </div>
        )
    );
};
