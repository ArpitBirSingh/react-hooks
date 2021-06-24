import React, { useMemo, useState } from 'react';

function UseMemo() {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);    // this also take as many time as "setNumber" takes
                                               // once update state is called whole component is called 
                                               // in this, whole "UseMemo" function is call when state changes.
                                               // that is why it is taking so much time, so we use useMemo
        
    //const doubleNumber = slowFunction(number);
    
    const doubleNumber = useMemo( () => {            // this can save a value of "number" so that it cannot call
                                                     // two times for same number 
        return slowFunction(number);
    },[number]);

    const themeStyles = {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black"
    };

    return (
        <div>
            <input type="number" value={number} onChange= { e => setNumber(parseInt(e.target.value)) } />
            <button onClick = { () => setDark( prevDark => !prevDark ) } > Change Theme </button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num) {
    console.log("Calling Slow Function");
    for(let i=0; i<=100000000; i++) { };
    return num*2;
}

export default UseMemo;
