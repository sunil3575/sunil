import React from 'react'
import Services from './Services';
import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import photo from '../Components.jsx/myphoto/IMG_20201214_150020.jpg'
import './About.css';
import resume from '../Components.jsx/Resume/Sunil CV.pdf';
import { Button } from 'bootstrap';

const About = () => {
    const now = 95;
    const now1=70;
    const now2=80;
    const now3=85;

  return (
    <>
   <Container>
    <Row className='about_row'>
      <Col>
      <Image className='about_image img img1' src={photo} alt=''/>
      </Col>
      <Col className='about_column'>
      <p className='about_paragraph'><h3>Meet Sunil ,</h3><br/>

Hey there 👋, thank you for visiting my page. My name is Sunil Pangeni and <b> I'am a front-End developer.</b> I enjoy 
solving problems writing code. I completed a <b>Master of Computer Application (MCA)</b>.
Development has been a passion of mine ever since
 I was a young kid who was influenced by my uncle and brother who are also developers. 
 Nowadays, I continue to challenge myself by learning and applying it to solve complex problems. 
 It inspires me how coding can reach so many people, the possibilities feel endless!</p>
      </Col>
    </Row>
    <Row className='second_about_row'>
      <Col className='second_about_column'>
      <h3  className='second_about_heading'>My Skills</h3>
      <p><b>Web Design Like React,Bootstrap & Java script.</b><br/><br/>
      <ProgressBar className='second_about_progress' animated now={95} label={`${now}%`} />
      </p>
      <p><b>Big Database and Oracle Database</b><br/><br/>
      <ProgressBar className='second_about_progress' animated now={70} label={`${now1}%`} />
      </p>
      <p><b>Advanced Java Like Spring and Hibernate framework</b><br/><br/>
      <ProgressBar className='second_about_progress' animated now={80} label={`${now2}%`} />
      </p>
      <p><b>Oprating system Like Linux and windows</b><br/><br/>
      <ProgressBar className='second_about_progress' animated now={85} label={`${now3}%`} />
      </p>
      <a className='about_resume' href={resume} download="SunilResume"><i class="fa-solid fa-download"></i> Download Resume</a>
        </Col>
    </Row>
    </Container>
    <Container>
    <Row className='third_about_row'>
      <Col className='third_about_column'>
         <h4 className='third_about_heading'>14+<br/>Partner</h4>
      </Col>
      <Col className='third_about_column'>
         <h4 className='third_about_heading'>10+<br/>Projects Done</h4>
      </Col>
      <Col className='third_about_column'>
         <h4 className='third_about_heading'>15+<br/>Happy Clients</h4>
      </Col>
      <Col className='third_about_column'>
         <h4 className='third_about_heading'>20+<br/>Meetings</h4>
      </Col>
    </Row>
    </Container>
    </>

  )
}
export default About;


