import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import picture from '../project_photos/distionary react app.png'
import picture1 from '../project_photos/meme genrator react app.png'
import picture2 from '../project_photos/movie tralor search react app.png'
import picture3 from '../project_photos/my travell react app.png'
import picture4 from '../project_photos/paint_react_app.png'
import picture5 from '../project_photos/weather react app.png'
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
import './Dictionary.css';

const Dictionary = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
        <Row>
        <h5 className='dictionary_heading'><u>Dictionary App</u></h5>
            <Col></Col>
            <Col xs={6}>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
            <Image className='dictionary_pics'  src={picture}/>
            </LightGallery>
            <p className='dictionary_paragraph'>we will be building a very simple Dictionary app with the help of an API. 
                This is a perfect project for beginners as it will teach you how to fetch 
                information from an API and display it and some basics of how React actually works. 
                Also, we will learn about how to use React icons. Let’s begin.Approach: Our app contains
                 two sections, one for taking the user input and the other is for displaying the data. Whenever
                  a user searches for a word, we store that input in a state and trigger an API call based on the 
                  searched keyword parameter. After that when the API call is made, we simply store that API response 
                  in another state variable, and then we finally display the information accordingly.</p>
            </Col>
            <Col></Col>
        
        </Row>
    </Container>
  )
}

export default Dictionary;
