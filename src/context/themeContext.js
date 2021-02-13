import React, { createContext, useState, useEffect } from 'react';

const defaultContext = {
    isDark: false,
    toggleBodyClass: () => { console.log('set theme')},
}

export const ThemeContext = createContext( defaultContext );

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleBodyClass = (setDarkMode) => {
        if(setDarkMode) {
            document.body.classList.add('dark-theme');
            document.body.classList.remove('light-theme');
            localStorage.setItem('mlaroy_theme', true);
        } else {
            document.body.classList.add('light-theme');
            document.body.classList.remove('dark-theme');
            localStorage.removeItem('mlaroy_theme');
        }

        setIsDark(setDarkMode);
    };

    useEffect(() => {
        const theme = localStorage.getItem('mlaroy_theme');
        if( theme ) {
            toggleBodyClass(true);
        } else {
            toggleBodyClass(isDark);
        }
    }, [])

    return (
        <ThemeContext.Provider value={{
            ...defaultContext,
            isDark,
            toggleBodyClass
        }}>
            {children}
        </ThemeContext.Provider>
    );
}
