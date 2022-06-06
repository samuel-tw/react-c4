import React from "react";
import { useParams } from "react-router-dom";

const NewsReader = (props) => {
    //let params = useParams()
    //const targetNewsId = params.id 
    const { id: targetNewsId} = useParams()  //和上面方法相同
       //const targetNewsId = props.match.params.id;  v6版不能使用需改用useParams()
    const targetNews = props.news.find(theNews => (
        String(theNews.id) === String(targetNewsId)
    ));
    return (
        <div>
            <h1>You are Reading  {targetNews.name}</h1>
            <p>{targetNews.describe}</p>
        </div>
    );
};

export default NewsReader;