import React from 'react'
import AlbumExample from './Albumexample'
import CardAlbum from './CardAlbum'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
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
        <CardAlbum/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum/>
        </Grid>
        <Grid item xs={12} md={4}>
        <CardAlbum/>
        </Grid>
      </Grid>
        
      </Container>
    
    </>
  )
}

export default GridAlbum