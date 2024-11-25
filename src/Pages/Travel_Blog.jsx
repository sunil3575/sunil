import React from 'react'
import picture3 from '../project_photos/my travell react app.png'
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Travel_Blog.css';
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


const Travel_Blog = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
    <Row>
    <h5 className='travel_heading'><u>Travel Blog Website App</u></h5>
        <Col></Col>
        <Col xs={6}>
        <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
        <Image className='travel_pics'  src={picture3}/>
        </LightGallery>
        <p className='travel_paragraph'>Creating a Travel Blog Website using React JS is a better way to learn
           how to manage state, passing props and render data dynamically. In this article, we are going 
           to learn how to create a Travel Blog Website using React JS. This website will have a list 
           of places with images and description. The data is passed through the application with the 
           help of JSON file. When you click on the location, it will redirect you to the google maps
            to see the complete description of that place. . .</p>
        </Col>
        <Col></Col>
    
    </Row>
</Container>
  )
}

export default Travel_Blog;
