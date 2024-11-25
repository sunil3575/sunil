import React from 'react'
import image from '../project_photos/banner-photo.jpeg';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Slider.css';

const Slider = () => {
  return (
    
           <Col className='card-img-bottom'>
           <Image className='slider_image' src={image} width="100%" height={500} alt="image"/>
           <h2 className='card-img-overlay'>Hello, I'm sunil.<p>I'am a front-End developer.</p>
           </h2>
           </Col>

    
  )
}

export default Slider;
