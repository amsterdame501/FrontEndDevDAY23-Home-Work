import React from 'react';
import { Box,Container } from '@mui/system';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
const AlbumExample = () => {
  return (
    <>
    <Container maxWidth="md" >    
    <Typography variant="h5" align="center" >
        <h1> Album Example </h1> 
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sint, aliquam asperiores dolores deleniti dolorum ut hic facere, tempora odit neque quos ea? Dolores cum ipsam provident, cumque maxime nobis.</p>
    <Stack spacing={2} direction="row" justifyContent="center" >
    <Button variant="contained" color="primary" style={{ marginRight: 16 }}>
       Main Call To Action
      </Button>
      <Button variant="contained" color="secondary">
        Secandary Action
      </Button>
    </Stack>
      </Typography>
    </Container>
    </>
  );
};

export default AlbumExample;