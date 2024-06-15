import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src="/logo.png" alt="Logo" style={{ height: '30px' }} /> {/* Add your logo here */}
        </Typography>
        <Button color="inherit">Dashboard</Button>
        <Button color="inherit">FAQs</Button>
        <Button color="inherit">Support</Button>
        <IconButton edge="end" color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;