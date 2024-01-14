import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState ,useEffect} from "react";
import { Link } from 'react-router-dom';
const CardAlbum = ({}) => {
  
  const [item, setitem] = useState({
    brand: "คิ้วตี้",
    img :"src\assets\img-product1.png",
    model: "กระจกแป้ง",
    proper: "ใช้ส่องกระจกใบหน้า",
    price: "25"
  });
  
  return (
    <Card>
      <CardMedia component="img" image='src\assets\img-product1.png'/>
      <CardContent>
        <>
        <h4> สินค้า:{item.model}</h4>
      <p>
        แบร์น :{item.brand} <br /> สินค้า : {item.model} <br /> ชนิดสินค้า: {item.proper}
        <br />ราคา : {item.price}
      </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0px' }}>
        <div>
          <Button variant="outlined" color="primary" component={Link} to="/Album" > View</Button>
          <Button variant="outlined" color="secondary">Edit</Button>
           </div>
          <div><p>9 mim</p></div>
        </div>
        
        </>
      </CardContent>
    </Card>
  );
};

export default CardAlbum ;
