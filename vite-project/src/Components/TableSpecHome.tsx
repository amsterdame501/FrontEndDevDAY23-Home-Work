import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const TableSpecHome = () => {
  return (
    <TableContainer component={Paper} style={{ maxHeight: '150px' }}>
      <Table>
        <TableBody>
          { <>
            <TableRow>
              <TableCell className='tablecell-spec' style={{ backgroundColor:"silver" }  } >คุณสมบัติ</TableCell>
            </TableRow>
            <TableRow >
              <TableCell>วัสดุ:พลาสติก  </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>น้ำหนัก : 20  กรัม</TableCell>
            </TableRow>
            <TableRow >
              <TableCell>ขนาด :15 X 20 Cm.</TableCell>
            </TableRow>
           
            </>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableSpecHome ;
