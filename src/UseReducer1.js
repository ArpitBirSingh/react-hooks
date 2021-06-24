import React, { useReducer } from 'react';

// useReducer also helps to manage states
// handle complex state and it is like redux

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

function reducer( state, action ) {
    switch (action.type) {
        case ACTIONS.INCREMENT:
             return { count: state.count + 1 };
        case ACTIONS.DECREMENT:
             return { count: state.count - 1 };
        default:
             return state;
    };
}

function UseReducer1() {
     
    // const [state, dispatch] = useReducer(reducer, initialState, init);
                                    // reducer is a function performed on state to get new state
                                    // dispatch is responsible for call "reducer" function and have a value of "action"
    const [state, dispatch] = useReducer(reducer, { count:0 } );


     const decrementCount = () => {
        dispatch( { type:ACTIONS.DECREMENT } );
     };

     const incrementCount = () => {
        dispatch( { type:ACTIONS.INCREMENT } );
     };



    return (

        <div>
            <button onClick={decrementCount}>-</button>
            <span>{state.count}</span>
            <button onClick={incrementCount}>+</button>
        </div>
        
    )
}

export default UseReducer1;