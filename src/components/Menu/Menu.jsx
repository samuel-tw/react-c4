import React from "react";
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//注意 Link 大小寫
const Menu = () => {
    const navigate = useNavigate();
 
return (
    <>
        <ul>
            <li onClick={()=>navigate('/home')}>
               HOME
            </li>
            <li onClick={()=>navigate('/about')}>
                ABOUT US
            </li>
            <li onClick={()=>navigate('/news')}>
                NEWS
            </li>
        </ul>
    </>
)};

/*
return (
    <>
        <ul>
            <li>
                <Link to = "/home">HOME</Link>
            </li>
            <li>
                <Link to ="/about">ABOUT US</Link>
            </li>
            <li>
                <Link to ="/news">NEWS</Link>
            </li>
        </ul>
    </>
)};

*/

export default Menu;