import React from 'react'
import './Calculator.css';
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
import './Dictionary.css';
import calculator_pic from '../project_photos/calcultor.png';

const Calculator = () => {
    const onInit = () => {
        console.log('lightGallery has been initialized');
      }
  return (
    <Container>
        <Row>
        <h5 className='calculator_heading'><u>Calculator App</u></h5>
            <Col></Col>
            <Col xs={6}>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
            <Image className='calculator_pics'  src={calculator_pic}/>
            </LightGallery>
            <p className='calculator_paragraph'>we will be building a very simple Dictionary app with the help of an API. 
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

export default Calculator;
