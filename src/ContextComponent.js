import React, { useContext } from 'react';
import { ThemeContext } from './UseContext1';

function ContextComponent() {
    const darkTheme = useContext(ThemeContext);
     
    const themeStyles = {
        background: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem"
    }

    return (
        <div style={themeStyles}>
            Function Theme
        </div>
    )
}

export default ContextComponent;
