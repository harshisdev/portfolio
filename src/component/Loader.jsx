import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(
        localStorage.getItem('isDarkTheme') === 'true'
    );

    useEffect(() => {
        const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkTheme(systemPrefersDark);
    }, []);

    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark-theme');
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#1C242C');
        } else {
            document.body.classList.remove('dark-theme');
            document.querySelector('meta[name="theme-color"]').setAttribute('content', '#ffc107');
        }
    }, [isDarkTheme]);

    return (
        <div className={`w-100 vh-100 d-flex justify-content-center align-items-center ${isDarkTheme ? "dark-theme-bg" : ""}`}>
            <ThreeDots
                visible={true}
                height={60}
                width={60}
                ariaLabel="three-dots-loading"
                wrapperClassName="three-dots-loading"
                color={isDarkTheme ? "#ffffff" : "#ffc107"}
            />
        </div>
    );
}

export default Loader;
