import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper ,Button} from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function RatebarHome() {
    const [value, setValue] = React.useState<number | null>(2);
    const handleButtonClick = () => {
        // ทำสิ่งที่คุณต้องการเมื่อปุ่มถูกคลิก
        console.log('ให้คะแนนแล้ว');
      };
    return (
        
      <TableContainer component={Paper} style={{ maxHeight: '150px' }}>
        <Table>
          <TableBody>
            { <>
              <TableRow>
                <TableCell className='tablecell-spec' style={{ backgroundColor:"silver" }  } >Rate this Product</TableCell>
              </TableRow>
              <TableRow >
                <TableCell>
                    
                <Typography component="legend"></Typography>
<Rating
  name="simple-controlled"
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}

/>
<br />
<Button variant="contained" color="primary" onClick={handleButtonClick}>
                  Submit Rating
                </Button>
                </TableCell>
              </TableRow>
              </>
            }
          </TableBody> 
          
        </Table>
      </TableContainer>
    );
  };
export default RatebarHome