import React from 'react'
import About from './About';
import Contact from './Contact';
import Slider from '../Components.jsx/Slider';
import Projects from './Projects';

const Home = () => {
  return (
    <>
    <Slider/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default Home;
