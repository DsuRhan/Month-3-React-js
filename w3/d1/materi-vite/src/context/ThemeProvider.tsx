// ThemeProvider.jsx
import  { useState, type ReactNode } from 'react';
import ThemeContext from './ThemeContext';

interface ThemeProps {
  children : ReactNode
}


function ThemeProvider({ children }:ThemeProps) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Nilai yang akan disediakan ke konsumen
  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;