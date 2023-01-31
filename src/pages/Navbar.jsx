import React from 'react';
import SansaLogo from '../images/sansa_logo.png';
import MenuBar from '../components/MenuBar';

const menuList = [
  {
    url: '#',
    title: 'HOME',
  },
  {
    url: '#',
    title: 'ABOUT US',
  },
  {
    url: '#',
    title: 'VISION AND MISSION',
  },
  {
    url: '#',
    title: 'OUR FACILITIES',
  },
  {
    url: '#',
    title: 'OUR SERVICES',
  },
  {
    url: '#',
    title: 'OUR VALUES',
  },
  {
    url: '#',
    title: 'OUR CUSTOMERS',
  },
  {
    url: '#',
    title: 'CONTACT US',
  },
];

const NavBar = () => {
  return (
    <>
      <MenuBar
        logoSrc={SansaLogo}
        logoAlt="Sansa Logo"
        compTitle="PT. SANSA MULYA SEMPURNA"
        menuList={menuList}
      />
    </>
  );
};

export default NavBar;
