import React from 'react'
import AlbumExample from './Albumexample'
import CardAlbum from './CardAlbum'
import CardAlbum2 from './CardAlbum2';
import CardAlbum3 from './CardAlbum3';
import CardAlbum4 from './CardAlbum4';
import CardAlbum5 from './CardAlbum5';
import CardAlbum6 from './CardAlbum6';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
function GridAlbum() {
  return (
    <>
    <AlbumExample/>
    <br />
    <Container maxWidth="lg">
        <Box sx={{ bgcolor: 'red' }} />
        <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <CardAlbum/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum2/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum3/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum4/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum5/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum6/>
        </Grid>
      </Grid>
        
      </Container>
    
    </>
  )
}

export default GridAlbum