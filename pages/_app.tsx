/* eslint-disable */
import { useEffect } from 'react';
import '../styles/index.scss';

// TODO: we have to change this any type to AppProps

const MyApp = ({ Component, pageProps }: any) => {
    // useEffect(() => {

    //     if (!window.googleTranslateElementInit) {

    //         var addScript = document.createElement('script');
    //         addScript.setAttribute(
    //             'src',
    //             '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit',
    //         );
    //         document.body.appendChild(addScript);
    //         window.googleTranslateElementInit = googleTranslateElementInit;
    //     }
    // }, []);

    // var googleTranslateElementInit = () => {
    //     console.log('element Init');
    //     if (document.getElementById('google_translate_element')?.children.length>0) return;
    //         new window.google.translate.TranslateElement(
    //             {
    //                 pageLanguage: 'en',
    //                 layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    //             },
    //             'google_translate_element',
    //         );
    // };

    return <Component {...pageProps} />;
};

export default MyApp;
