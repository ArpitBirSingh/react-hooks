import React, { useEffect, useState } from 'react';

function UseEffect3() {
    
    const [resourceType, setResourceType] = useState("posts");

    useEffect(() => {             
        console.log("resource changed");

        return () => {                            // CLEANUP when useeffect is run first cleanup process is run
            console.log("return from resource changed CLEANUP PROCESS");
        };

    }, [resourceType]);                           

    return (
        <div>
            <div>
                <button onClick={ () => setResourceType("posts") }>Posts</button>
                <button onClick={ () => setResourceType("users") }>Users</button>
                <button onClick={ () => setResourceType("comments") }>Comments</button>
            </div>
            <h1> {resourceType} </h1>
        </div>
    )
}

export default UseEffect3;