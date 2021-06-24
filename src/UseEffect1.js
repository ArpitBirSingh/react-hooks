import React, { useEffect, useState } from 'react';

function UseEffect1() {

    const [resourceType, setResourceType] = useState("posts");
    const [items, setItems] = useState([]);

    useEffect(() => {             
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then( data => setItems(data) );
    }, [resourceType]);                            // when resourceType changes it run

    return (
        <div>
            <div>
                <button onClick={ () => setResourceType("posts") }>Posts</button>
                <button onClick={ () => setResourceType("users") }>Users</button>
                <button onClick={ () => setResourceType("comments") }>Comments</button>
            </div>
            <h1> {resourceType} </h1>

            {
                items.map( item => {
                    return <pre> { JSON.stringify(item) } </pre>;
                } )                
            }

        </div>
    )
}

export default UseEffect1;
