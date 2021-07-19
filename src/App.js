import React, { useState,useEffect, Component, useRef } from 'react';
import { BrowserRouter, BrowserRouter as Router, Route} from 'react-router-dom'; //React-router import

import logo from './logo.svg';
import './App.css';

import Main from "./container/Main";
import Viewer from './container/Viewer';
import About from './container/About';
import Memo from './container/Memo';
import Push_up from './container/Push_up';
import Sit_up from './container/Sit_up';
import Squat from './container/Squat';
import Tae from './container/Tae';
import Yoga from './container/Yoga';
import Dance from './container/Dance';
function App() {
  
  return (
    <div className="App">
        
        <Router>
        <div> 
          <Route exact path="/" component={Main} /> 
          <Route path="/viewer/" component={Viewer} />
          <Route path="/about/" component={About}/> 
          <Route path="/memo/" component={Memo}/>
          <Route path="/squat/" component={Squat}/>
          <Route path="/push_up" component={Push_up} />
          <Route path="/sit_up" component={Sit_up} />
          <Route path="/tae" component={Tae}/>
          <Route path="/yoga" component={Yoga}/>
          <Route path="/dance" component={Dance}/>
        </div> 
        </Router> 
      
   
      
    </div>
  );
}


export default App;