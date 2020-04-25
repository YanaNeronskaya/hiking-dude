import React, { FunctionComponent } from 'react';

// @ts-ignore
import BtnUpSvg from '../../../toCDN/btnUp.svg';
// @ts-ignore
import css from './btn-page-up.module.scss';

type BtnPageUpProps = {
    width?: number,
    height?: string
};

const baseColor = '#FF485A';

// @TODO: add theme
export const BtnPageUp: FunctionComponent<BtnPageUpProps> = ({
    width=80,
    height=80
}) => {
    return (
        <button className={css.btn}>
            <BtnUpSvg width={width} height={height} />
        </button>
    );
};
