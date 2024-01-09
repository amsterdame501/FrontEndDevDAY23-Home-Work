import React from 'react'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
function BillingAddress() {
  return (
    <>
    <div >
        <div>
            <Grid style={{ display:"flex" }}>
            <div style={{textAlign:"start"}}>
                <label > FirstName </label>
                <br />
                <TextField
                id="outlined-size-small"
                size="small"
                type="text" name='firstname' className='form-control' placeholder='Firstname' />
            </div> &nbsp; &nbsp;
            <div style={{textAlign:"start"}}>
                <label > LastName </label>
                <br />
                <TextField 
                id="outlined-size-small"
                size="small"type="text" name='lastaname' className='form-control'  placeholder='Lastname' />
            </div>
            </Grid>
            <br />
            <div style={{textAlign:"start"}} >
                <label> Username </label>
                <br />
        <AlternateEmailIcon/>
        <TextField fullWidth
          id="outlined-size-small"
          size="small"
          placeholder='Username'
        />
            </div>
        </div>
        <br />
        <div style={{textAlign:"start"}} >
                <label> Email </label>
                <br />
        <TextField fullWidth
          id="outlined-size-small"
          size="small"
          placeholder='Email'
        />
            </div>
            <br />
            <div style={{textAlign:"start"}} >
                <label> Address </label>
                <br />
      
        <TextField fullWidth
          id="outlined-size-small"
          size="small"
          placeholder='Address'
        />
            </div>
            <br />
            <div style={{textAlign:"start"}} >
                <label> Address 2 ( Optional) </label>
                <br />

        <TextField fullWidth
          id="outlined-size-small"
          size="small"
          placeholder='Apartment or Suite'
        />
            </div>

            
    </div>
    </>
  )
}

export default BillingAddress