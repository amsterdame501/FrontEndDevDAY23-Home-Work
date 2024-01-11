import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BillingAddress from './BillingAddress';
import BillingRadio from './BillingRadio';
import BillingCheckbox from './BillingCheckbox';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridCheckout() {
  return (
    <Container fixed>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={8}>
          <Item> <h4>Billing Checkout</h4><BillingAddress/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>You Cart</Item>
        </Grid>
        <Grid item xs={12}>
          <Item><BillingCheckbox/></Item>
        </Grid>
        <Grid item xs={12}>
          <Item><BillingRadio/></Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
          <Button variant="contained">Confirm</Button>&nbsp; &nbsp; &nbsp;
          <Button variant="contained">Cancel</Button>
          </Item>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}