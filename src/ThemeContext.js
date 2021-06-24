import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();     // for toogle theme function

export function useTheme() {               // custom hooks for access to values 
    return useContext(ThemeContext);
}

export function useThemeUpdate() {               // custom hooks  access to values
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider( {children} ) {

    const [darkTheme, setDarkTheme] = useState(true);                // creating state

    function toggleTheme() {                                         // updating state
        setDarkTheme( prevDarkTheme => !prevDarkTheme );
      }

    return (
        <ThemeContext.Provider value={darkTheme}>                    {/* pass darkTheme toggleTheme to children  */}
            <ThemeUpdateContext.Provider value={toggleTheme}>
                                { children }
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}