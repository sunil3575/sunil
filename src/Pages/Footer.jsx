import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
  <Container fluid className='footer_container'>
    <Row className='footer_row'>
      
     <h5 className='footer_contact'>Contact :</h5>
        <Row className='footer_row'>
        <span className='footer_location_info'><i class="fa-solid fa-location-dot footer_location" style={{color:"red"}}></i> Sudhodhan Gaupalika  Word-03, Charpata.</span>
        </Row>
        <Row className='footer_row'>
        <span className='footer_phone_info'><i class="fa-solid fa-phone footer_phone" style={{color:"green"}}></i> 977-9865451246 </span>
        </Row>
        <Row className='footer_row'>
        <span className='footer_mail_info'><i class="fa-solid fa-envelope footer_mail" style={{color:"blue"}}></i> SunilPangeni3570@gmail.com </span>
        </Row>
        
        {/* <Col className='footer_location10'>
        <i class="fa-solid fa-location-dot footer_icon1" style={{color:"red"}}></i><span className='footer_location_info' style={{color:"black"}}> Sudhodhan Gaupalika  Word-03, Charpata.</span>
        <i class="fa-solid fa-phone footer_icon1" style={{color:"green"}}></i><span className='footer_phone_info' style={{color:"black"}}> 977-9865451246 </span>
        <i class="fa-solid fa-envelope footer_icon1" style={{color:"blue"}}></i><span className='footer_mail_info' style={{color:"black"}}> SunilPangeni3570@gmail.com </span>
        </Col> */}
        {/* <Col className='footer_social'>
        {/* <h5>Follow me:</h5> */}
        {/* <a className='footer_icon'  href="https://x.com" target='_blank' style={{color:"white"}}><FaXTwitter className='twitter social' /></a>
    <a className='footer_icon' href="https://www.facebook.com/" target='_blank' style={{color:"white"}}><FaFacebookF className='facebook social' /></a>
    <a className='footer_icon' href="https://www.instagram.com/" target='_blank' style={{color:"white"}}><FaInstagram className='instagram social'/></a>
        </Col>*/} 
         </Row>
     </Container> 
     
  )
}

export default Footer;

