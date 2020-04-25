import React from 'react';

import { BtnPageUp } from '../../base/btn-page-up/btn-page-up.component';

// @ts-ignore
import ForestSvg from '../../../toCDN/forest.svg';
// @ts-ignore
import HikingSvg from '../../../toCDN/hiking.svg';
// @ts-ignore
import PlaneSvg from '../../../toCDN/plane.svg';
// @ts-ignore
import TravelBagsSvg from '../../../toCDN/travel.svg';
// @ts-ignore
import css from './home-content.module.scss';

export const HomeContent = () => {
    return (
        <>
            <div className={css.container}>
                <div className={css.btnBlock}>
                    <p className={css.btnBlockText}>
                        Plan your trips in right for you way
                    </p>
                    <button className={css.btnBlockBtn}>Start</button>
                </div>
                <PlaneSvg width={40} height={40} />
                <div className={css.imagesBlock}>
                    <TravelBagsSvg width={50} height={50} />
                    <HikingSvg width={125} height={220} />
                    <ForestSvg width={110} height={110} />
                </div>
            </div>
        </>
    );
};
