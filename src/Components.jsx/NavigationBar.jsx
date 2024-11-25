import React from 'react'
import { Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import './NavigationBar.css';
import photo from './logo_photo/logo1.jpg'




const NavigationBar = () => {
  return (
        <Navbar  expand="lg" className="navbar_part" sticky='top'>
        <Navbar.Brand className='brand' href="/home"><Image src={photo} height="60px" width="60px" style={{borderRadius:"50%"}} /></Navbar.Brand>
        <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='collapse'>
        <Nav className="m-auto">
        <Nav.Item>
        <Nav.Link className='nav_link'  href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='nav_link'  href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='nav_link' href="/projects" >Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='nav_link' href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
    <Nav className='second_navbar_icon'>
    <a  href="https://x.com" target='_blank' style={{color:"white"}}><FaXTwitter className='twitter' /></a>
    <a href="https://www.facebook.com/" target='_blank' style={{color:"white"}}><FaFacebookF className='facebook' /></a>
    <a href="https://www.instagram.com/" target='_blank' style={{color:"white"}}><FaInstagram className='instagram'/></a>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;
