import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import picture5 from '../project_photos/weather react app.png'
import './Weather_Application.css';
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

const Weather_Application = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
    <Row>
    <h5 className='weather_heading'><u>Weather Application</u></h5>
        <Col></Col>
        <Col xs={6}>
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
        <Image className='weather_pics'  src={picture5}/>
        </LightGallery>
        <p className='weather_paragraph'>The developed code displays the interactive Weather Application using
           ReactJS Framework. The application allows users to get information on various cities in real time.
            With the help of API, we are fetching the weather details of the city which is been searched by
             the user. The application is completely responsive and the response in terms of the output is 
             also given in a quick time. Navigation to the app components is also easy for the user. 
             The UI is completely user-friendly so that users can easily handle the application. 
             We have used various icons, that made our developed application more attractive. . .</p>
        </Col>
        <Col></Col>
    
    </Row>
</Container>
  )
}

export default Weather_Application;
