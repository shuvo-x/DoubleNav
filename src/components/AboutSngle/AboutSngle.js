import React from 'react';
import Common from './Common';
import './AboutSngle.css';

const About =() => {
    return(
    <>
     
     <Common 
     name='Welecome to About page'
     imgsrc={'network.png'}
     visit='/Contact'
     bouutn='Contact Now'
     bt />
    </>

    );
};

export default About;