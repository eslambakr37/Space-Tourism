import Crew from '../Crew/Crew';
import Destination from '../Destination/Destination';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Technology from '../Technology/Technology';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import style from './App.module.css';
import { useEffect } from 'react';
import homeDesktop from '../../assets/home/background-home-desktop.jpg'
import homeTablet from '../../assets/home/background-home-tablet.jpg'
import homeMobile from '../../assets/home/background-home-mobile.jpg'
import destinationDesktop from '../../assets/destination/background-destination-desktop.jpg'
import destinationTablet from '../../assets/destination/background-destination-tablet.jpg'
import destinationMobile from '../../assets/destination/background-destination-mobile.jpg'
import crewDesktop from '../../assets/crew/background-crew-desktop.jpg'
import crewTablet from '../../assets/crew/background-crew-tablet.jpg'
import crewMobile from '../../assets/crew/background-crew-mobile.jpg'
import technologyDesktop from '../../assets/technology/background-technology-desktop.jpg'
import technologyTablet from '../../assets/technology/background-technology-tablet.jpg'
import technologyMobile from '../../assets/technology/background-technology-mobile.jpg'


function App() {
  const path = useLocation().pathname;
  useEffect(() => {
    checkPath();
  }, [path]);

  function checkPath() {
    if (path == "/home" | "/") {
      if (window.innerWidth > 786) {
        document.body.style.cssText = `background-image: url(${homeDesktop})`;
      }
      else if (window.innerWidth <= 786) {
        document.body.style.cssText = `background-image: url(${homeTablet})`;
      }
      else {
        document.body.style.cssText = `background-image: url(${homeMobile})`;

      }
    }
    else if (path == "/destination") {
      if (window.innerWidth > 786) {
        document.body.style.cssText = `background-image: url(${destinationDesktop})`;
      }
      else if (window.innerWidth <= 786) {
        document.body.style.cssText = `background-image: url(${destinationTablet})`;
      }
      else {
        document.body.style.cssText = `background-image: url(${destinationMobile})`;

      }
    }
    else if (path == "/crew") {
      if (window.innerWidth > 786) {
        document.body.style.cssText = `background-image: url(${crewDesktop})`;
      }
      else if (window.innerWidth <= 786) {
        document.body.style.cssText = `background-image: url(${crewTablet})`;
      }
      else {
        document.body.style.cssText = `background-image: url(${crewMobile})`;

      }
    }
    else {
      if (window.innerWidth > 786) {
        document.body.style.cssText = `background-image: url(${technologyDesktop})`;
      }
      else if (window.innerWidth <= 786) {
        document.body.style.cssText = `background-image: url(${technologyTablet})`;
      }
      else {
        document.body.style.cssText = `background-image: url(${technologyMobile})`;

      }
    }
  }

  return (
    <div className={style.home}>
      <Navbar path={path} />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/' element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
