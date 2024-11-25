import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import picture from '../project_photos/distionary react app.png'
import picture1 from '../project_photos/meme genrator react app.png'
import picture2 from '../project_photos/movie tralor search react app.png'
import picture3 from '../project_photos/my travell react app.png'
import picture4 from '../project_photos/paint_react_app.png'
import picture5 from '../project_photos/weather react app.png'
import picture6 from '../project_photos/indiatouriumproject.png';
import picture7 from '../project_photos/hydroslide.png';
import cal_pic from '../project_photos/calcultor.png';
import './Projects.css';




const Projects = () => {
  return (
   <Container className='projects_container'>
    <Row className='projects_row'>
      <h2 className='project_heading'><u>Projects Based on React</u></h2>
      <Col>
      <h5 className='project_heading1'>Dictionary App</h5>
      <Image className='projects_pics' src={picture}/>
      <a className='projects_anchor' href='/dictionary'>For More Details...</a>
      </Col>
      <Col>
      <h5 className='project_heading1'>Meme Generator App</h5>
      <Image className='projects_pics'  src={picture1}/>
      <a className='projects_anchor' href='/meme'>For More Details...</a>

      </Col>
      <Col>
      <h5 className='project_heading1'>Movie Trailer Search App</h5>
      <Image className='projects_pics1'  src={picture2}/>
      <a className='projects_anchor' href='/movie'>For More Details...</a>
      </Col>
      </Row>
      <Row className='projects_row'>
      <Col>
      <h5  className='project_heading1'>Travel Blog Website App</h5>
      <Image className='projects_pics1'  src={picture3}/>
            <a className='projects_anchor' href='/travel'>For More Details...</a>

      </Col>
      <Col>
      <h5  className='project_heading1'>Paint App</h5>
      <Image className='projects_pics'  src={picture4}/>
      <a className='projects_anchor' href='/paint'>For More Details...</a>

      </Col>
      <Col>
      <h5 className='project_heading1'>Weather Application</h5>
      <Image className='projects_pics'  src={picture5}/>
      <a className='projects_anchor' href='/weather'>For More Details...</a>
      </Col>
      </Row>
      <Row  className='projects_row'>
      <Col>
      <h5 className='project_heading1'>India Tourism Website</h5>
      <Image className='projects_pics'  src={picture6}/>
      <a className='projects_anchor' href='/tourism'>For More Details...</a>
      </Col>
      <Col>
      <h5 className='project_heading1'>HydroPower Website</h5>
      <Image className='projects_pics'  src={picture7}/>
      <a className='projects_anchor' href='/hydropower'>For More Details...</a>
      </Col>
      <Col>
      <h5 className='project_heading1'>Calculator App</h5>
      <Image className='projects_pics'  src={cal_pic}/>
      <a className='projects_anchor' href='/calculator'>For More Details...</a>
      </Col>
    </Row>
   </Container>
  )
}

export default Projects;
