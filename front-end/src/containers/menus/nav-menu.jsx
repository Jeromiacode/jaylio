import React from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    name: 'Home',
    to: '',
    icon: <></>,
  },
  {
    name: 'About',
    to: 'skills',
    icon: <></>,
  },
  {
    name: 'Projects',
    to: 'projects',
    icon: <></>,
  },  
  {
    name: 'Contact',
    to: 'contact',
    icon: <></>,
  },
  {
    name: 'User',
    to: 'user',
    icon: <></>,
  },
];

function NavMenuItem({ name, icon, to }) {
  return (
    <ListItemButton
    component={NavLink}
    to={to}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItemButton>
  );
}

function NavMenu({ onMenuClick }) {
  return (
    <nav>
      <List onClick={onMenuClick}>
        {navLinks.map((link, index) => (
          <NavMenuItem {...link} key={index} />
        ))}
      </List>
    </nav>
  );
}

NavMenu.defaultProps = {
    onMenuClick: () => { } // NOOP
}

// to : main-header
export default NavMenu;
