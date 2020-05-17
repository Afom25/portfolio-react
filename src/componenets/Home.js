import React, { Component } from 'react';
import img from '../hidria.png';

class Home extends Component{

    render(){
        return (
        
<div className="container">

  <div class="centered">
           <h1> HELLO</h1>
           <h1> HIDRI A. GHEBRETINSAE </h1> 
           <hr></hr>
         
           <h3> REACT DEVELOPER</h3>
           <img src={img} alt='hidri' id='hidri-img'/>
        
</div>

            
           
        </div>
        );
    }
}


export default Home