import React from 'react'
import picture2 from '../project_photos/movie tralor search react app.png'
import './Movie_Trailer.css';
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


const Movie_Trailer = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
        <Row>
        <h5 className='movie_heading'><u>Movie Trailer Search App</u></h5>
            <Col></Col>
            <Col xs={6}>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
            <Image className='movie_pics'  src={picture2}/>
            </LightGallery>
            <p className='movie_paragraph'>we are going to make a simple app that searches for any movie/web 
                series trailers. The users can search for their favourite movie trailers using this application.
                 The API will fetch the trailer from the internet and display it on the webpage. We will 
                 use ‘movie-trailer’ npm package to find such URLs and display the content using another
                  npm package called ‘react-player’. .</p>
            </Col>
            <Col></Col>
        
        </Row>
    </Container>
  )
}

export default Movie_Trailer;
