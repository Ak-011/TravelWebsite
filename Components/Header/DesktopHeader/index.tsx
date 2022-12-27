import React from 'react';
import cx from 'classnames';

import SearchIcon from '../../../assets/icon/Search.svg';
import People from '../../../assets/icon/People.svg';
import styles from './styles.module.scss';

type HeaderProp = {
    className?: string;
};

export const DesktopHeader: React.FC<HeaderProp> = (props) => {
    const { className } = props;

    return (
        <div className={cx(styles.mainContainer, className)}>
            <div className={styles.resumeIcon}>Resume Builder</div>

            <div className={styles.home}>
                <p>Template</p>
                <p>CV Editor</p>
                <SearchIcon className={styles.search} height="24px" width="24px" />

                <People height="24px" width="24px" />
                <p>
                    {/* <Circle className={styles.circle} height="48px" width="48px" /> */}
                    {/* <PlayButton height="48px" width="48px" /> */}
                </p>
            </div>
        </div>
    );
};
