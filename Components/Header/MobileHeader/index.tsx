import React from 'react';
import cx from 'classnames';

import Hamburger from '../../../assets/icon/Hamburger.svg';
import SearchIcon from '../../../assets/icon/Search.svg';
import styles from './styles.module.scss';

type MobileHeaderProp = {
    className?: string;
};

export const MobileHeader: React.FC<MobileHeaderProp> = (props) => {
    const { className } = props;

    return (
        <div className={cx(styles.mainContainer, className)}>
            <div className={styles.resumeIcon}>Resume Builder</div>

            <div className={styles.hamburger}>
                <SearchIcon height="32px" width="32px" />
                <Hamburger height="36px" width="36px" />
            </div>
        </div>
    );
};
