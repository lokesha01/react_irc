import React from 'react';
import { AppBar, Toolbar, Typography, IconButton,Link } from '@mui/material';
import innovifts from '../assets/innovifts.jpg';
function Navbar() {
  return (
    <AppBar position="fixed" color="primary"  >
    <Toolbar>
    <img src={innovifts} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Innovifts | because you care
      </Typography>
<div>
        <IconButton color="inherit" component={Link} href="/Home" sx={{fontSize:'medium'}}>Home</IconButton>
        <IconButton color="inherit" component={Link} href="/Login" sx={{fontSize:'medium'}}>Login</IconButton>
        <IconButton color="inherit" component={Link} href="/Register" sx={{fontSize:'medium'}}>Register</IconButton>
        <IconButton color="inherit" component={Link} href="/Store" sx={{fontSize:'medium'}}>Birthdays</IconButton>
        <IconButton color="inherit" component={Link} href="/CStore" sx={{fontSize:'medium'}}>Christmas</IconButton>
        <IconButton color="inherit" component={Link} href="/AStore" sx={{fontSize:'medium'}}>Anniversary</IconButton>
        <IconButton color="inherit" component={Link} href="/About" sx={{fontSize:'medium'}}>About</IconButton>
        {/* <IconButton color="inherit" component={Link} href="/Home" sx={{fontSize:'medium'}}>Home</Button>
        <Button color="inherit">Login</Button>
        <Button color="inherit">Register</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Services</Button> */}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;