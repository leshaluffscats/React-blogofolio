import { createContext, useState } from 'react';
import { IWithThemeContextProps, IThemeContext } from '../../types';

const WithThemeContext = ({ children }: IWithThemeContextProps) => {
    const [isDark, setIsDark] = useState(false);
    const value = { isDark, setIsDark }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

const defaultContext = { isDark: false, setIsDark: () => { } }

export const ThemeContext = createContext<IThemeContext>(defaultContext);

export default WithThemeContext;
