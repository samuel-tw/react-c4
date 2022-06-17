
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
import { useSelector, useDispatch } from 'react-redux';
//import { fetchUser } from '../../actions/user';
import { useEffect } from 'react';
import { getUsers } from '../../redux/features/user.feature';
import axios from "axios";

const Home = () => { 

    let dispatch = useDispatch();

    //get data from Redux Store
    let userState = useSelector((store) => {
        return store["user"];
    })

    useEffect(async () => {
        dispatch(getUsers()); // dispatch action
    }, [dispatch]);

    let {loading , errorMessage , user} = userState;
    console.log("USER STATE",userState )
    
        return (
            <>
                <div>
                    <Menu />
                    <h1>Here is Home Page</h1>
                    <div>HAY
                    <table className="table table-hover text-center table-sthiped">
                                <thead className="bg-primary text-white">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                        <th>Company</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map(user => {
                                            return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.website}</td>
                                                    <td>{user.company.name}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                    </div>
                
                </div>
            </>
        );
        
    }
// console.log("HOME",Home)


// console.log("My HelloWorld", SayHello);

export default Home;