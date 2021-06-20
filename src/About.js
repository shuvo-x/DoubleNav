import React from 'react';
import './About.css';

function About() {
    return(
        <>
        <div className='About-us'id='About-id'>
            <div className='container'>
                <h2 className='title text-center'>WHY CHOOSE US ?</h2>
                <div className='row'id='row-id'>                  
                    <div className="col-lg-6">
                       <img src='network.png'className='img-fluid' />
                    </div>
                    <div className='col-md-6 About-us-3'>
                        <p className='About-title'>Why We are different</p>
                        <ul>
                            <li>Believe in doing business with honesty</li>
                            <li>Our Works is doing the best employe for this company</li>
                            <li>We are very patient of our works</li>
                            <li>We have expert and clever developer for designing</li>
                            <li>We are very trusted company </li>
                            <li>See our rating,then work with us</li>
                            <li>Money is not everything , we will never get it</li>
                            <li>We are very very chutiya person in the world</li>
                           
                        </ul>
                    </div>
                   
                 
                </div>   
                <div className='text-center mt-4'> <button type='button'className='btn btn-primary'id='btn-behave'>Back Home</button></div>

            </div>
        </div>
        
        </>
    )
}

export default About;