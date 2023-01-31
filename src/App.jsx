import React from 'react';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import NavBar from './pages/Navbar';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutUs />
    </>
  );
};

export default App;
