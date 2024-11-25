import React from 'react'
import picture6 from '../project_photos/indiatouriumproject.png';
import './India_Tourism.css'
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

const India_Tourism = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
        <Row>
        <h5 className='Tourism_heading'><u>India Tourism Website</u></h5>
            <Col></Col>
            <Col xs={6}>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
            <Image className='Tourism_pics'  src={picture6}/>
            </LightGallery>
            <p className='Tourism_paragraph'>India tourism app using React, featuring destination exploration, 
                travel experiences, and a visually appealing image carousel. Users can interact with the app 
                and contact through a form, highlighting the beauty of India. . .</p>
            </Col>
            <Col></Col>
        
        </Row>
    </Container>
  )
}

export default India_Tourism;
