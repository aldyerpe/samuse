import React from 'react';
import AboutUs from './pages/AboutUs';
import Hero from './components/Hero';
import NavBar from './pages/Navbar';
import VisionMission from './pages/VisionMission';
import OurFacilities from './pages/OurFacilities';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
      <VisionMission />
      <OurFacilities />
    </>
  );
};

export default App;
