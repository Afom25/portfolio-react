import React from 'react';
import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import About from './componenets/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router, Switch,Route,
  
} from "react-router-dom";





function App() {
  return (
    <Router>
          <Navbar/>
       <div className="container">

      <div className='home-section'>
 <Route exact path='/' component={Home}/>
          {/* <Route  path='/about' component={About}/> */} 
      </div>
         
      </div>
      <div className='about-section'>
      <About/>
      </div>
    </Router>
   
  );
}

export default App;
