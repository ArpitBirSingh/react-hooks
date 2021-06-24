import React, { useState } from 'react';

function UseState2() {

    const [state, setState] = useState({ count:4, theme: "blue" });

     const decrementCount_wrong = () => {
        setState(prevState => {                    // overwritting return value to state so theme disappears
            return { count:prevState.count-1 } 
        });
     };

     const incrementCount_wrong = () => {
        setState(prevState => {
            return { count:prevState.count+1 } 
        });
     };

     const decrementCount_correct = () => {
        setState(prevState => {
            return { ...prevState, count:prevState.count-1 } 
        });
     };

     const incrementCount_correct = () => {
        setState(prevState => {
            return { ...prevState, count:prevState.count+1 } 
        });
     };



    return (
        <div>
            <button onClick={decrementCount_wrong}>- WRONG</button>
            <button onClick={decrementCount_correct}>- CORRECT</button>
            <span>{state.count}</span>
            <span>{state.theme}</span>
            <button onClick={incrementCount_correct}>+ CORRECT</button>
            <button onClick={incrementCount_wrong}>+ WRONG</button>
        </div>
    )
}

export default UseState2;