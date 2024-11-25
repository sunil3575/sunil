import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutPage from './Pages/LayoutPage';
import About from './Pages/About';
import Qualifications from './Pages/Qualifications';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';
import Dictionary from './Pages/Dictionary';
import Meme_Generator from './Pages/Meme_Generator';
import Movie_Trailer from './Pages/Movie_Trailer';
import Travel_Blog from './Pages/Travel_Blog';
import Paint_App from './Pages/Paint_App';
import Weather_Application from './Pages/Weather_Application';
import India_Tourism from './Pages/India_Tourism';
import HydroProject from './Pages/HydroProject';
import Calculator from './Pages/Calculator';




function App() {
  return (
<>

   <BrowserRouter>
    <Routes>
<Route path='/' element={<LayoutPage/>}>
<Route index element={<Home/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/qualifications' element={<Qualifications/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/services' element={<Services/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/dictionary' element={<Dictionary/>}/>
<Route path='/meme' element={<Meme_Generator/>}/>
<Route path='/movie' element={<Movie_Trailer/>}/>
<Route path='/travel' element={<Travel_Blog/>}/>
<Route path='/paint' element={<Paint_App/>}/>
<Route path='/weather' element={<Weather_Application/>}/>
<Route path='/tourism' element={<India_Tourism/>}/>
<Route path='/hydropower' element={<HydroProject/>}/>
<Route path='/calculator' element={<Calculator/>}/>
<Route path='*' element={<ErrorPage/>}/>
</Route>
    </Routes>
   </BrowserRouter>
   
   </>
  
  );
}

export default App;
