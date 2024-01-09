import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container} from '@mui/material';
import CardHome from './CardHome';
import Processbar from './Processbar';
import ProductnameHome from './ProductnameHome';
import TableSpecHome from './TableSpecHome';
import RatebarHome from './RatebarHome';
import CommentComponent from './CommentComponent';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode,
  ...theme.typography.body1,
  padding: theme.spacing(1),
  
}));

export default function GridHome() {
  return (
    <Container maxWidth="md" style={{ backgroundColor:"hotpink" }} >
    <Grid container spacing={2} gap={0}>
  <Grid item xs={12} md={6}>
    <Item><CardHome/></Item>
  </Grid>
  <Grid item xs={12} md={6} >
    <Item><ProductnameHome/></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item><Processbar/></Item>
  </Grid>
  <Grid item xs={12} md={6}>
    <Item ><TableSpecHome/></Item>
  </Grid>
  <Grid item xs={12} md={12}>
    <Item ><RatebarHome/></Item>
  </Grid>
  <Grid item xs={12} md={12}>
    <Item ><CommentComponent /></Item>
  </Grid>
</Grid>
    </Container>
  );
}