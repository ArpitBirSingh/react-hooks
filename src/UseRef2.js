import React, { useRef, useState } from 'react';

function UseRef2() {

    const [name, setName] = useState("");
    const inputRef = useRef();               // each element in html document have ref
                                             // useRef is like useState, but cannot use useRef where useSate is required
                                             //  because it cannot set value to "inputRef" each time 
                                             // its like only take the value not set it


    function focus() {
        console.log(inputRef.current);
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} value={name} onChange = { e => setName(e.target.value) } /> 
            <div> My Name is {name} </div>
            <button onClick={focus} >Focus</button>
        </div>
    )
}

export default UseRef2;