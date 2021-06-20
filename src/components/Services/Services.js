import React from 'react';
import './Services.css';

function Services() {
    return(
        <>
       <div className='services'>
             <div className='container text-center'>
                 <h2 className='title'>WHAT WE DO ?</h2>
                 <div className='row text-center'>
                     <div className='col-md-4 Services'>
                         <img src ='service1.png'alt=''className='service-img' />
                         <h4>Growth Marketing </h4>
                         <p>Subscribe Easy tutorials Youtube Channel to watch more videos on website development
                             ,Digital Marketing, Wordpress and graphices Designing. </p>
                     </div>
                     <div className='col-md-4 Services'>
                         <img src ='service2.png'alt=''className='service-img' />
                         <h4>Online Branding </h4>
                         <p>Subscribe Easy tutorials Youtube Channel to watch more videos on website development
                             ,Digital Marketing, Wordpress and graphices Designing. </p>
                     </div>

                     <div className='col-md-4 Services'>
                         <img src ='service3.png'alt=''className='service-img' />
                         <h4>Animated Ads</h4>
                         <p>Subscribe Easy tutorials Youtube Channel to watch more videos on website development
                             ,Digital Marketing, Wordpress and graphices Designing. </p>
                     </div>
                 </div>
               
                 <button type='button'className='btn btn-secondary'>All Services</button>
             </div>
         </div>
        
        </>
    )
}
export default Services;