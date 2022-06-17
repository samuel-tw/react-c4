import React from "react";
import {Link} from 'react-router-dom'

import {useDispatch, useSelector} from "react-redux";
import { DELETE_NEWS } from "../../redux/features/news.feature";


/*
const mapStateToProps = state =>({
    news: state.news,
})
*/
 

const NewsList = () =>{
    let dispatch = useDispatch();
    let newsState = useSelector((store) => {
        return store["news"];
    });
    let {news} = newsState;
    console.log("add NEWS" , newsState);
    let delete_news = (id) => {
        // console.log("ID",id);
        dispatch(DELETE_NEWS(id));

        }
    return(
        <ul>
            {
                news.map(theNews => (
                    <li key={theNews.id}>
                        <Link to={`/news/newsReader/${theNews.id}`}>{theNews.name}</Link>
                    
                    <button onClick={() => delete_news(theNews.id)} > DELETE </button>
                    </li>
                ))
            }
        </ul>
    )
        }

export default NewsList;

//export default connect(mapStateToProps)(NewsList);

// export default NewsList;