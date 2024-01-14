import React from 'react'
import Button from '@mui/material/Button';
import CardAlbum from './CardAlbum';
import { Link } from 'react-router-dom';
function ProductnameHome() {
  return (
    <>
    <h3>Product Name</h3>  
   <p>Lorem ipsum dolor sit amet consectetur adipisicing exercitationem inventore elit. Minus, fugiat non a exercitationem inventore consequatur iure officiis quaerat doloribus vero unde ullam magnam quas debitis exercitationem inventore cupiditate? Magni nobis non The agg and sit.</p>
    <h3>Price:199$</h3>
    <p>Quantily:</p>
    <input type="text" onKeyPressCapture={(e)=>{  
      if (!/[1-9]/.test(e.key)){
        e.preventDefault()
      }
    } } /> <br /><br />
    <Button variant="contained" color="primary" component={Link} to="/Checkout" >Add to Cart</Button>
    </>
  )
}

export default ProductnameHome