
import './App.css';
import React, { useState } from 'react'
import Navbar  from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


//rcc
const App=() => {
  const pagesize=6;
 const  apikey=process.env.REACT_APP_NEWS_API;


  const [progress,setprogress]=useState(0)

 
 
  
    return (
      <div>
        <Router>       
        <Navbar/>
        <LoadingBar
        height={5}
        color='rgb(0 21 255)'
        progress={progress}
       
      />
        {/* <News  setprogress={setprogress} apikey={apikey}  pagesize={pagesize} category="sports" country="us" /> */}
        <Routes>  
        <Route exact path="/" element={<News  setprogress={setprogress} apikey={apikey}  key="general" pagesize={pagesize} category="general" country="in" />} />
        <Route exact path="/business"  element={<News  setprogress={setprogress} apikey={apikey}  key ="business" pagesize={pagesize} category="business" country="in" />} />
        <Route exact path="/entertainment" element={<News  setprogress={setprogress} apikey={apikey}  key="entertainment" pagesize={pagesize} category="entertainment" country="in" />} />
        <Route exact path="/health" element={<News  setprogress={setprogress} apikey={apikey}  key="health" pagesize={pagesize} category="health" country="in" />} />
        {/* <Route exact path="/general" element={<News  setprogress={setprogress} apikey={apikey}  key="general" pagesize={pagesize} category="general" country="in" />} /> */}
        <Route exact path="/science" element={<News  setprogress={setprogress} apikey={apikey}  key="science" pagesize={pagesize} category="science" country="in" />} />
        <Route exact path="/sports" element={<News  setprogress={setprogress} apikey={apikey}  key="sports" pagesize={pagesize} category="sports" country="in" />} />
        <Route exact path="/technology" element={<News  setprogress={setprogress} apikey={apikey}  key="technology" pagesize={pagesize} category="technology" country="in" />} />
        </Routes>  
        
      </Router>
      </div>
    )
  
}

export default App;

