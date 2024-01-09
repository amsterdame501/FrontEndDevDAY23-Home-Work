import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { FormatAlignJustify } from '@mui/icons-material';

const CardAlbum = ({}) => {
  return (
    <Card>
      <CardMedia component="img" image='src\assets\img-product1.png'/>
      <CardContent>
        <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus sapiente inventore reiciendis velit tempore! Corrupti sed, blanditiis aspernatur quibusdam, architecto cumque esse itaque, molestias delectus aperiam ipsum veniam maxime tenetur.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0px' }}>
        <div>
          <Button variant="outlined" color="primary"> View</Button>
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
