import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  {
    name: 'Home',
    to: '/',
    icon: <></>,
  },
  {
    name: 'About',
    to: '/skills',
    icon: <></>,
  },
  {
    name: 'Projects',
    to: '/projects',
    icon: <></>,
  },  
  {
    name: 'Contact',
    to: '/contact',
    icon: <></>,
  },
  {
    name: 'User',
    to: '/user/login',
    icon: <></>,
  },
];

function NavMenu() {
  return (
    <nav>
        {navLinks.map((link, index) => (
        <div key={index}>
          <img src={link.icon} alt={link.name}/>
          <Link to={link.to}>{link.name}</Link>
        </div>
        ))}
    </nav>
  );
}

// to : main-header
export default NavMenu;
