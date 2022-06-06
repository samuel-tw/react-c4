/*

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import position from "./position.js";

const profile = {
  name: 'qqqqq',
};

console.log(`my ${profile.name} position  ${position}`);
*/

import React from 'react';

import { createRoot } from 'react-dom/client';                  //(2022-0604) 和書（64頁）不同，此為React 18以上的版本使用法
import Home from './views/Home';
// import HelloWorld  from './components/HelloWorld';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom'
import Menu from './components/Menu';
import About from './views/About';
import NotFound from './views/NotFound';
import News from './views/News';



const root = createRoot(document.getElementById('root'));       //(2022-0604) 和書（64頁）不同，此為React 18以上的版本使用法
//root.render(<HelloWorld />);                                            //(2022-0604) 和書（64頁）不同，此為React 18以上的版本使用法

//3.3.2 react-routet-dom 己經改成用Routes 取代 Swith element取代 component 書109頁  https://ithelp.ithome.com.tw/m/articles/10282773
const element =(
  
  <HashRouter>
    <Menu /> 
    <Outlet /> 
    <Routes>   
      <Route path ="/about" element={<About />} />     
      <Route path = "/home"  element={<Home />} />                
      <Route path = "/news/*" element={<News />} />
    </Routes> 
    </HashRouter>  
  

)

root.render( element);  