import React, { useCallback, useState } from 'react';
import List from './List';

function UseCallback() {

    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);

    const getItems = useCallback( (inc) => {      // useCallback returns function whereas useMemo returns value
        return [number + inc, number+1+inc, number+2+inc];
    }, [number] );                                  // only changes when number change

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }

    return (
        <div style = {theme} >
            <input type="number" value={number} onChange={ e => setNumber( parseInt(e.target.value) ) } />
            <button onClick={ () => setDark( prevDark => !prevDark ) }>
                Toggle Theme
            </button>
            <List getItems = {getItems} />
        </div>
    )
}

export default UseCallback;
