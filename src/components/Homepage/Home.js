import React from 'react';
import Services from'../../Services';
import About from'../../About';
import Hproduct from '../../Hproduct';
import './Home.css';


function Home() {
     return(
         <>      
      <div className='banner'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
               <p className='promo-title'>You Complete Digital Home Health Solution!</p>
             
                <button className='btn btn-primary mt-2'>Let Us know</button>
            </div>
            <div className='plan'>
              <p>Our Plan</p>
              <ul>
                <li>Lite 10$</li><br/>
                <li>Basic 20$</li><br/>
                <li>Medium50$</li><br/>
                <li> premium 100$</li>  <br/>
                <li> support unlimited</li> <br/>   
                </ul><br/>
                <a className='c-btn'href='#'>Click Now</a>
            </div>
             <div className='col-md-6'>       
              <img src='unnamed.png'className='img-fluid' />      
             </div>
          </div>      
        </div>
          
      </div>
      <img src='wave-9.svg' alt=''className='wave-img'/>
    
      <Services /> 
     <About />
    
   
    
    
    
  
    
         </>
     )
}

export default Home