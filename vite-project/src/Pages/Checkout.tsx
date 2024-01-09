import React from 'react'
import Navbar from '../Components/Navbar'
import GridCheckout from '../Components/GridCheckout'
import { Container } from '@mui/material'
function Checkout() {
  return (
    <>
    <Navbar/>
    <br />
    
    <h3 style={{textAlign:"center" } }> Check Out Form </h3>
   <Container style={{maxWidth:1000}}>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ea dolores quibusdam saepe! Aliquam exercitationem, sapiente ut deserunt rem recusandae eveniet excepturi sequi repudiandae perspiciatis tempore ipsum accusantium autem beatae?</p>
   </Container>
    <GridCheckout/>
    </>
  )
}

export default Checkout