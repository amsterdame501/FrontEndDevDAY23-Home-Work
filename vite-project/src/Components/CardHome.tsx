import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function CardHome () {
  return (
    <Card sx={{ maxWidth: 550 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100%"
          width="120%"
          image='src\assets\img-product1.png'
        />
      </CardActionArea>
    </Card>
  );
}