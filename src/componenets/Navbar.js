import React, { Component } from 'react';
import { Link} from "react-router-dom";

class Navbar extends Component{

    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <a class="navbar-brand" href="#"><h5>HIDRI A.</h5></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="nav navbar-nav ml-auto">
                <Link to ='/' class="nav-item active">
                  <a class="nav-link" href="#"> <h5> Home </h5> <span class="sr-only">(current)</span></a>
                </Link>
                <Link to ='/about' class="nav-item">
                  <a class="nav-link" href="#"><h5> About </h5></a>
                </Link>
             
                <Link to='/technology' class="nav-item">
                  <a class="nav-link"> <h5> Technology </h5> </a>
                </Link>
                <Link to='/projects' class="nav-item">
                  <a class="nav-link" ><h5> Project</h5></a>
                </Link>
                <Link to='/contact' class="nav-item">
                  <a class="nav-link" href="#"><h5> Contact </h5></a>
                </Link>
               
              </ul>
            </div>
          </nav>
        );
    }
}


export default Navbar