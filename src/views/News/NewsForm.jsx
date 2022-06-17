
import React, {useState} from 'react';
//import { connect } from 'react-redux';
import {useDispatch, useSelector} from "react-redux";
import { ADD_NEWS } from '../../redux/features/news.feature';

/*
const NewsForm = () => (
    <div>
        name : <input />
        decription: <input />
        <button>Add NEWS</button>
    </div>
)
*/


const NewsForm = () => {
    const [name, setName] = useState('');
    const [describe, setDescribe] = useState('');

    let dispatch = useDispatch();
    let newsState = useSelector((store) => {
        return store["news"];
    });
    let {news} = newsState;
    

    // console.log("add NEWS" , newsState);
  
    
    let add_news = () => {
        console.log("value", name,describe),
        dispatch(ADD_NEWS({ news:{id:Math.random(), name, describe}}))

        }
    

return (        
        <div>
            name:
            <input value= {name} onChange = { 
                
                (e)=> {setName(e.target.value);
                    // console.log("Target Value", e.target.value);}
                }} />
            describe:
            <input value={describe} onChange ={ (e)=> {setDescribe(e.target.value);}} />

            
            <button onClick = {() => add_news()}>Add NEWS</button>
        </div>

    )
    
}

//export default connect()(NewsForm);
export default NewsForm;
