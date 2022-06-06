import React, {useState} from "react";
import { Outlet, Route, Routes} from 'react-router-dom'
import NewsList from "./NewsList.jsx";
import NewsReader from "./NewsReader.jsx";
import About from "../About/About.jsx";
import Menu from "../../components/Menu/Menu.jsx";

/*
const News = () =>(
    <div>
        <NewsList />
        <h1> The latest news</h1>
    </div>
)
*/

const News = () => {
    const [news] = useState([
    {id:1, name:'1st News', describe: 'your 1st NEWS'},
    {id:2, name:'2st News', describe: 'your 2st NEWS'},
    {id:3, name:'3st News', describe: 'your 3st NEWS'},

    ]);

    return (
        <>
        <Menu />
       
        <Routes>
        <Route exact path="/*" element={
                <>
                <Menu />
                <h1> Latest News</h1>
                <NewsList news={news} />
                </>   
            } />
            <Route path="/newsReader/:id" element={<NewsReader news={news} />} />

        </Routes>
        </>
    )
    /*
    return (
        <Routes>
            <Route path="/news" element={
                <>
                <Menu />
                <h1> Latest News</h1>
                <NewsList news={news} />
                </>   
            } />
            <Route path="/news/newsReader/:id" element={<NewsReader news={news} />} />
        </Routes>
    
    )
    */
}


/*
const News = () => {
    const [news] = useState([
    {id:1, name:'1st News', describe: 'your 1st NEWS'},
    {id:2, name:'2st News', describe: 'your 2st NEWS'},
    {id:1, name:'3st News', describe: 'your 3st NEWS'},

    ]);
    
    return (
    
        <Routes>
            <Route path="/news" element={
                <>
                <h1> Latest News</h1>
                <NewsList news={news} />
                </>   } />
            <Route path="/news/newsReader/:id" element={<NewsReader news={news} />} />
        </Routes>
        

    
    )
}

        
        return(
            <ul>
                {
                    news.map(theNews => (
                    <li key={theNews.id}>
                        <Link to = {`/news/newsReader/${theNews.id}`} > {theNews.name}</Link>
                    </li>
                    ))
                }
            </ul>
        );
        
     */   



export default News;
