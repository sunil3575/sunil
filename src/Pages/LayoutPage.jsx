import React from 'react'
import NavigationBar from '../Components.jsx/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Slider from '../Components.jsx/Slider';


const LayoutPage = () => {
  return (
    <>
    <NavigationBar/>
  <Outlet/>
  <Footer/>
  
    </>
  )
}

export default LayoutPage;
