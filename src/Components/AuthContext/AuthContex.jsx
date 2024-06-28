import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null); // Define the context using createContext

const AuthContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localStorageTheme = localStorage.getItem('theme') || 'light';
        setTheme(localStorageTheme);
        document.querySelector('html').setAttribute('data-theme', localStorageTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <AuthContext.Provider value={{ theme, setTheme }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
