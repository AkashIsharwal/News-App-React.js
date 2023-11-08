import './App.css';

import React, { Component } from 'react'
import NavBar from './Componets/NavBar'
import News from './Componets/News';
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';


const App =()=> {
  const apiKey = process.env.REACT_APP_apiKey;
  const pageSize=6;
  
  const [progress, setProgress] = useState(0)
  const [base, setbase] = useState(0)

  
    return (
      <div>
      <NavBar clicks={base}/>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
   
      <Routes>
      {/* <Route><News setProgress={ setProgress} apiKey={ apiKey}  pagesize={6} country='in' category="science"/></Route> */}
      <Route exact path="/" element={<News setProgress={ setProgress} apiKey={ apiKey}   key="general"  pagesize={ pageSize} country='in' category="general" x={base} setX={setbase} />}/>
      <Route exact path="/business" element={<News setProgress={ setProgress} apiKey={ apiKey}   key="business" pagesize={ pageSize} country='in' category="business"  x={base} setX={setbase}/>}/>
      <Route exact path="/entertainment" element={<News setProgress={ setProgress} apiKey={ apiKey}  key="entertainment"  pagesize={ pageSize} country='in' category="entertainment"  x={base} setX={setbase}/>}/>
      <Route exact path="/general" element={<News setProgress={ setProgress} apiKey={ apiKey}   key="general" pagesize={ pageSize} country='in' category="general"  x={base} setX={setbase}/>}/>
      <Route exact path="/health" element={<News setProgress={ setProgress} apiKey={ apiKey}  key="health"  pagesize={ pageSize} country='in' category="health"  x={base} setX={setbase}/>}/>
      <Route exact path="/science" element={<News setProgress={ setProgress} apiKey={ apiKey}   key="science" pagesize={ pageSize} country='in' category="science"  x={base} setX={setbase}/>}/>
      <Route exact path="/sports" element={<News setProgress={ setProgress} apiKey={ apiKey}  key="sports"  pagesize={ pageSize} country='in' category="sports"  x={base} setX={setbase}/>}/>
      <Route exact path="/Technology" element={<News setProgress={ setProgress} apiKey={ apiKey}   key="Technology" pagesize={ pageSize} country='in' category="Technology"  x={base} setX={setbase}/>}/>
      </Routes>
      </div>
    )
  
}
export default App;