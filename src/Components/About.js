import React from 'react';
import Breadcumb from './Breadcumb';
import  Project from './Project';
import Score from './Score';
import  Principle from './Principle';
import Video from './Video';
import  Testimonial from './Testimonial';

export default function About() {
  return (
    <div>
      	  <Breadcumb></Breadcumb>
		  <Project></Project>
		  <Score></Score>
		  <Principle></Principle>
		  <Video></Video>
		  <Testimonial></Testimonial>  
    </div>
  )
}
