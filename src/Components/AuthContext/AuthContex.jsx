import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [theme, setTheme] = useState('blue');

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme') || 'blue';
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

export default AuthProvider;
