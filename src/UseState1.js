import React, { useState } from 'react';

function UseState1() {

    const [count, setCount] = useState(4);

    const decrementCount1 = () => {
       setCount(count-1);      
       setCount(count-1);     // they both overlapping each others
    };

    const decrementCount2 = () => {
        setCount(prevCount => prevCount-1);
        setCount(prevCount => prevCount-1);
     };

     const decrementCount = () => {
        setCount(prevCount => prevCount-1);
     };

     const incrementCount = () => {
        setCount(prevCount => prevCount+1);
     };



    return (
        <div>
            <button onClick={decrementCount2}>-2</button>
            <button onClick={decrementCount1}>-1</button>
            
            
            <button onClick={decrementCount}>-</button>
            <span>{count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
    )
}

export default UseState1;