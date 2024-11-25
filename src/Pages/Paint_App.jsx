import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import picture4 from '../project_photos/paint_react_app.png'
import './Paint_App.css';
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

const Paint_App = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
    <Row>
    <h5 className='paint_heading'><u>Paint App</u></h5>
        <Col></Col>
        <Col xs={6}>
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
        <Image className='paint_pics'  src={picture4}/>
        </LightGallery>
        <p className='paint_paragraph'>We will create three functions: startDrawing(), endDrawing() and draw(). 
          The main idea is that whenever the mouse button is down, we execute the startDrawing function so that
           the cursor knows the x and y coordinate (starting coordinates) and we toggle the isDrawing state to true. 
           Now whenever the user moves the mouse, we execute the draw function which will draw a stroke in the
            current x and y coordinate. If the user lifts the mouse button up we execute the endDrawing 
            function which will close the stroke path and toggle the isDrawing state to false simultaneously. . .</p>
        </Col>
        <Col></Col>
    
    </Row>
</Container>
  )
}

export default Paint_App;
