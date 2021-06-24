import React, { useState } from 'react';
import ContextComponent from './ContextComponent';

export const ThemeContext = React.createContext();          // create context so we can use it in rest of application

function UseContext1() {

    const [darkTheme, setDarkTheme] = useState(true);

    function toggleTheme() {
        setDarkTheme( prevDarkTheme => !prevDarkTheme );
    }

    return (
        <div>
             <ThemeContext.Provider value={darkTheme}>       {/*  everything inside provider have access to value prop */}
                 <button onClick={toggleTheme}>Toggle Theme</button>   {/* like global state for all children of themecontext */}
                 <ContextComponent />             
             </ThemeContext.Provider>

        </div>
    )
}

export default UseContext1;