import React from 'react';
import Slider from './Slider';
import  Principle from './Principle';
import  Service from './Service';
import  Project from './Project';
import   Images from './Images';
import  Testimonial from './Testimonial';
import  Faq from './Faq';

export default function Home() {
  return (
    <div>
	  <Slider/>
      <Principle></Principle>
      <Service></Service>
      <Project></Project>
      <Images></Images>
      <Testimonial></Testimonial>
      <Faq></Faq>
    

           
		
    </div>
  )
}
