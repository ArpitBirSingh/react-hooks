import React, { useEffect, useRef, useState } from 'react';

function UseRef1() {

    const [name, setName] = useState("");
    //const [renderCount, setrenderCount] = useState(0);
    const renderCount = useRef(1);

    useEffect(() => {
        //setrenderCount( prevRenderCount => prevRenderCount+1 );       // it can set state and re-render and again set state and re render
                                                                      // and re-render re-render re-render (infinity loop)
                                                                      // so we use ref
         renderCount.current = renderCount.current+1;  // as "renderCount.current" is completely different from "renderCount"
                                                       // so our state does not change. it gives output
    }); 

    return (
        <div>
           <input value={name} onChange = { e => setName(e.target.value) } />
           <div> My Name is {name} </div>
           <div> i rendered {renderCount.current} times </div>
        </div>
    )
}

export default UseRef1;
