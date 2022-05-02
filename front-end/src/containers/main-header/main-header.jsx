import { AppBar, Toolbar, Drawer, IconButton, Typography } from '@mui/material'; 
import MenuIcon from '@mui/icons-material/Menu'; 
import { useState } from 'react';
import NavMenu from '../menus/nav-menu';

const MainHeader = () => {

  const [menuVisibility, setMenuVisibility] = useState(false)

  return (
  <header>
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
        onClick={() => setMenuVisibility(true)}
        size='large'
        edge='start'
        color='inherit'
        >
          <MenuIcon />
        </IconButton>
        <Typography
        component='p'
        variant='h5'
        >
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
    <Drawer
    anchor='left'
    open={menuVisibility}
    onClose={() => setMenuVisibility(false)}
    >
      <NavMenu onMenuClick={() => setMenuVisibility(false)}/>
    </Drawer>
  </header>
);
  }

MainHeader.defaultProps = {
  onMenuOpen: () => { } // NOOP
}

export default MainHeader;
