import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import picture7 from '../project_photos/hydroslide.png';
import picture8 from '../project_photos/hydrobod.png';
import picture9 from '../project_photos/hydroteam.png';
import picture10 from '../project_photos/hydronews.png';
import picture11 from '../project_photos/hydroproject.png';
import picture12 from '../project_photos/hydrovacancy.png';
import picture13 from '../project_photos/hydrolocation.png';
import picture14 from '../project_photos/hydrocontact.png';
import './HydroProject.css';
import hydro_data from '../Components.jsx/Hydropower.json';
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









const HydroProject = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  }
  return (
    <Container>
        <Row className='hydropower_row'>
        <h5 className='hydropower_heading'><u>HydroPower project Website</u></h5>
        {/* {hydro_data.map((data)=>( */}
            <Col className='hydropower_column'>
            <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail,lgFullscreen,lgAutoplay,lgRotate,lgPager]}>
            <Image className='hydropower_pics'  src={picture7}/>
            <Image className='hydropower_pics'  src={picture8}/>  
            <Image className='hydropower_pics'  src={picture9}/>  
            <Image className='hydropower_pics'  src={picture10}/>  
            <Image className='hydropower_pics'  src={picture11}/>  
            <Image className='hydropower_pics'  src={picture12}/>  
            <Image className='hydropower_pics'  src={picture13}/>  
            <Image className='hydropower_pics'  src={picture14}/>  
            </LightGallery>
            </Col>
              {/* ))} */}
               <p className='hydropower_paragraph'>India tourism app using React, featuring destination exploration, 
                travel experiences, and a visually appealing image carousel. Users can interact with the app 
                and contact through a form, highlighting the beauty of India. . .</p>
        </Row>
        

    </Container>
  )
}

export default HydroProject;
