import React from 'react';
import { useTheme, useThemeUpdate } from "./ThemeContext";

function ContextComponent2() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
     
    const themeStyles = {
        background: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }

    return (
        <div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                Function Theme
            </div>
        </div>
    );
}

export default ContextComponent2;