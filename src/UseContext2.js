import React, { useState } from 'react';
import ContextComponent2 from './ContextComponent2';
import { ThemeProvider } from './ThemeContext';

function UseContext2() {

    return (
        <div>
             <ThemeProvider>       
                 <ContextComponent2 />             
             </ThemeProvider>

        </div>
    )
}

export default UseContext2;