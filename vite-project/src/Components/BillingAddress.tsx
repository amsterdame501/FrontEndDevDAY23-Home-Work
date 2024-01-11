import React from 'react'
import { Grid ,MenuItem ,Box} from '@mui/material'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
        <TextField 
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
          placeholder='Address'
        />
        </div>

        /**/

    <Grid textAlign={'start'}  >
    <FormControl  sx={{ m: 1, minWidth: 120 }} size="small">Country
      <Select
        label='Country'
      >
        <MenuItem value="" >
        </MenuItem>
        <MenuItem value={'th'}>Thailand</MenuItem>
      </Select>
    </FormControl>

    <FormControl  sx={{ m: 1, minWidth: 120 }} size="small">State
      <Select>
        <MenuItem value="" >
        </MenuItem>
        <MenuItem value={'BKK'}>Bangkok</MenuItem>
        <MenuItem value={'NON'}>Nontaburi</MenuItem>
        <MenuItem value={'PatThum'}>PathumThani</MenuItem>
      </Select>
    </FormControl>
    <FormControl sx={{ m:1, minWidth:210}} > Zipcode 
    <TextField size="small" />
    </FormControl>
    </Grid>

    </div>
    </>
  )
}

export default BillingAddress