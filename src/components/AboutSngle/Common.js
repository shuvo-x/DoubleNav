import React from 'react';
import { NavLink } from "react-router-dom";

const Common =(props) => {
    return(
    <>
     <div id='header'>
      <div className='container'>
      <h2 className='title text-center'>WHY CHOOSE US ?</h2>
      <div className='row'>
      <div className='col-md-6 About-us-2'>
            <p className='About-title'>Why We are different</p>
             <ul>
               <li>Believe in doing business with honesty</li>
               <li>Believe in doing business with honesty</li>
               <li>Believe in doing business with honesty</li>
               <li>Believe in doing business with honesty</li>
               <li>Believe in doing business with honesty</li>
               <li>Believe in doing business with honesty</li>
             </ul>
     </div>
       <div className="col-lg-6  header-img">
       <img src={'network.png'} className="img-fluid animated"id="img-st"alt="home img"/>
        </div>
   
      </div>
      </div>
     </div>
     
    </>

    );
};

export default Common;