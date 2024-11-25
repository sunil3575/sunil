import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Contact.css';

const getIconSize = () => {
if (window.innerWidth > 320) {
  return [20,20]; // Small icon for mobile screens
}
return [50, 50]; // Default icon size for larger screens
}

// // Set your Mapbox access token
// mapboxgl.accessToken = 'pk.eyJ1Ijoic3NqaGhzLTM1NzAiLCJhIjoiY20xYXprdG55MXN6eDJsc2pkZXBtamJwdSJ9.0oRffCQBEzmlFfz2v0uPHQ';
//custom icon
const customicon=new L.Icon({
  iconUrl:"https://www.google.com/maps/dir/Malika+Nursery,+Sauraha+Pharsatikar/27.6089404,83.417163/@27.6072007,83.4142086,167m/data=!3m1!1e3!4m8!4m7!1m5!1m1!1s0x39968fa3cbf632e3:0x3234d001318e769!2m2!1d83.4172083!2d27.6089289!1m0!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D",
  iconSize:getIconSize(),
  iconAnchor:[20,20],
});
const Contact = () => {
  return (
      <Container className='form-container'>
        <Row className='form_container'>
            <Col className='column10'>  
            <h3 className='Contact_heading'><u>Lets get in touch. Send me a message:</u></h3> 
            <Form className='form'>
      <Form.Group className="mb-3" controlId="formname">
        <Form.Label>Name</Form.Label>
        <Form.Control className='name' type="text" placeholder="name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control className='name' re type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formtextarea">
      <Form.Label>Message</Form.Label>
      <Form.Control as="textarea"rows={4} className="focus" placeholder="Enter message..." required  />
      </Form.Group>
      <Button className='btn' type='Submit'><i class="fa-brands fa-telegram"></i> Send Message</Button>
    </Form>
      </Col>
        <Col className='map_location'>
        <h1 className="Contact_heading" style={{textAlign:"center"}}><u>Find Me</u></h1>
        <MapContainer center={[27.607199, 83.414790]} zoom={17} style={{ height: "350px", width: "100%",border:"2px solid blue" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='<a href="https://www.openstreetmap.org">OpenStreetMap</a> contributors'
          />
          <Marker position={[27.607199, 83.414790]} icon={customicon}>
            <Popup>
            <h6 style={{color:"green"}}> sudhodan gaupalika word-03,charpata</h6>
            </Popup>
          </Marker>
        </MapContainer>
      </Col>
    </Row>
  </Container>
  )
}

export default Contact;
