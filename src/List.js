import React, { useEffect, useState } from 'react';

function List( { getItems } ) {

    const [ items, setItems ] = useState([]);

    useEffect(() => {                 
       setItems( getItems(5) );
       console.log("Updating Items");    // when we toggle theme it is also called so we use useCallback
                                         // it is like useMemo
    }, [getItems]);

    return (
        <div>
            { items.map( item => <div key={item}>{item}</div> )}
        </div>
    )
}

export default List;
