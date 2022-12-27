import React, { useEffect, useState } from 'react';

import useWindowDimensions from '../../utils/useWindowDimensions';
import { windowDimensionsTypes } from '../../utils/types';
import { WINDOW_SIZE } from '../../utils/windowSize';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
// import MobileHeader from './MobileHeader';
// import DesktopHeader from './DesktopHeader';
// import MGlogo from '../../assets/images/MGlogo.svg';
// import LogoWhite from '../../assets/images/MGLlogoW.svg';
// import LogoBlack from '../../assets/images/MGLlogoB.svg';

// export enum HeaderVariant {
//     PRIMARY = 'black',
//     SECONDARY = 'white',
//     GREY10 = 'grey10',
//     GREY90 = 'grey90',
// }



export const Header = () => {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    const windowDimensions: windowDimensionsTypes = useWindowDimensions();

    useEffect(() => {
        if (windowDimensions.width) {
            setWindowWidth(windowDimensions.width);
        }
    }, [windowDimensions]);

    return (
        <>
            {windowWidth >= WINDOW_SIZE.LARGE ? (
                <>
                    <DesktopHeader />
                </>
            ) : (
                <MobileHeader />
            )}
        </>
    );
};
