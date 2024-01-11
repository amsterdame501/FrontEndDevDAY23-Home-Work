import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Grid ,Box} from '@mui/material';

export default function BillingRadio() {
  return (
    <>
    <Grid textAlign={'start'} >
    <FormControl >
      <FormLabel id="demo-radio-buttons-group-label"> <h3>Payment</h3>  </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="paypal"
        name="radio-buttons-group"
      >
        <FormControlLabel value="cradit" control={<Radio />} label="Credit Card" />
        <FormControlLabel value="debit" control={<Radio />} label="Debit Card" />
        <FormControlLabel value="papal" control={<Radio />} label="Paypal" />
      </RadioGroup>
    </FormControl>
    <Box display={'flex'}>
    <div>
      <p>Name On Card</p>
      <input  type="text" name="" id="" placeholder='Jhone Smit' /> 
    </div> &nbsp; &nbsp;
    <div>
      <p>Cradir Card Number</p>
      <input  type="text" name="" id=""  placeholder='123-456-789'/> 
    </div>
    
    </Box>
    <div>
      <p>CVV.</p>
      <input  type="text" placeholder='CVV.' />  <h2> Expiration:</h2> <input type="date" id="start" name="trip-start"  min="2024-01-01" max="2027-12-31" />
    </div>
    </Grid>
    </>
  );
}