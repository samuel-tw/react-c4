//import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import styles from './index.scss'

const Counter = () => {
    const [count, setCount] = useState(0);

 /* 
    return (
        <div>
            <div>  Number :{count}</div>               
            <button onClick={()=> { 
                setCount((n,p) => n+1);
                setCount((n,p) => n+1);
                 }}>Add One</button>
        </div>
    );
*/

// const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log('1st render');
        console.log(`new value ${count}`);
        
        return () => {
            console.log(`old value ${count}`);
            console.log('counter moved');
        }
        
    }, [count]);
 
    return (
        <div>
            <div>  Number :{count}</div>               
            <button onClick={()=> { 
                setCount((n,p) => n+1);
                setCount((n,p) => n+1);
                 }}>Add One</button>
        </div>
    );

};

 

export default Counter;