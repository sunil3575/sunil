import React from 'react'
import picture1 from '../project_photos/meme genrator react app.png'
import './Meme_Generator.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgRotate from 'lightgallery/plugins/rotate';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgPager from 'lightgallery/plugins/pager';
import  lgFullscreen from 'lightgallery/plugins/fullscreen';
import "lightgallery.js/dist/css/lightgallery.css";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery.js/dist/css/lightgallery.css';
import 'lightgallery/css/lightgallery.css';
import LightGallery from 'lightgallery/react';
import "lightgallery.js/dist/css/lightgallery.css";

const Meme_Generator = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
        <Row>
        <h5 className='meme_heading'><u>Meme Generator App</u></h5>
            <Col></Col>
            <Col xs={6}>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
            <Image className='meme_pics'  src={picture1}/>
            </LightGallery>
            <p className='meme_paragraph'>we’ll create a meme generator using ReactJS.
                 In the meme generator, we have two text fields in which we enter the first text and last text.
                 After writing the text when we click the Gen button, it creates a meme with an image and the text written on it.</p>
            </Col>
            <Col></Col>
        
        </Row>
    </Container>
  )
}

export default Meme_Generator;
