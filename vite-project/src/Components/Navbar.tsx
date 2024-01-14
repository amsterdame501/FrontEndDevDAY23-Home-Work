
import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
const Navbar = () => {
  return (
    <div>
      <AppBar position="static" style={{backgroundColor:'#808080'}} >
        <Toolbar>
          <Grid>
          <Button color="inherit" component={Link} to="/Home">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/Album">
            Album
          </Button>
          <Button color="inherit" component={Link} to="/Checkout">
            Checkout
          </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
