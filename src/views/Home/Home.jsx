
import React, {useState} from 'react';
// import HelloWorld from '..//../components/HelloWorld';
//import SayHello from '..//../components/SayHello';
import Counter from '..//../components/Counter';

/* Chapter 2.2.5
const names = ['world', 'sun', null,  'water' ]
const Home = () => (
    <div>
        {
            names.map((name) => <SayHello key={name} name={name} />)
        }
   </div>
);
*/
/* 第二章內容 Chapter 2.3
const Home = () => {
    const [displayCounter, setDisplayCounter]  = useState(true);

    return(
        <div>
            <button onClick={() => {setDisplayCounter(true);}}>
                Open Counter
            </button>
            <button onClick={() => {setDisplayCounter(false);}}>
                Close Counter
            </button> 
            {displayCounter ? <Counter /> :null}   
        </div>
    )


}
*/

import Menu from '../../components/Menu';

const Home = () => (
    <div>
        <Menu />
        <h1>Here is Home Page</h1>
    </div>
);

// console.log("HOME",Home)


// console.log("My HelloWorld", SayHello);

export default Home;