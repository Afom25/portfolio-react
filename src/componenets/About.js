import React, { Component } from 'react';
import img from '../hidri.jpg';


class About extends Component{

    render(){
        return (

        <div className='container'>
            <h2> ABOUT </h2> 
        <div className='row'>
        <div className='col-8 text-center'>
             
           
           <h4> In love with the first respect principle, fast learing new technology and love sharing expeience.Currently working in frontend development react libarary</h4>
           <button type="button" class="btn btn-primary btn-sm" id='button'>Resume</button>

        </div>
        <div className='col-4'>
    
        <img src={img} alt='img' id='img-1'/>
        </div>

        </div>     

        </div>  

        );
    }
}


export default About