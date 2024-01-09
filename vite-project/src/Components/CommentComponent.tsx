import React, { useState } from 'react';
import { TextareaAutosize, Button } from '@mui/material';
import { Table, TableBody, TableCell , TableRow, Paper } from '@mui/material';

const CommentComponent = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event:any) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // ทำสิ่งที่ต้องการเมื่อ Comment ถูก Submit
    console.log('Comment submitted:', comment);
    // เพิ่มโค้ดเพื่อทำบันทึก Comment หรือส่งข้อมูลไปที่ API ต่อไป
  };

  return (
    <div>
      <Table>
        <TableBody>
          { <>
            <TableRow>
              <TableCell className='tablecell-spec' style={{ backgroundColor:"silver" }  } >Reviews</TableCell>
            </TableRow>
            <TableRow >
              <TableCell><h4>John Doe</h4> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consequuntur quam neque? Facere debitis porro quibusdam aut laudantium sit repudiandae suscipit, non explicabo. Iste, excepturi harum recusandae numquam aspernatur ratione.</p> </TableCell>
            </TableRow>
            <TableRow >
              <TableCell><h4>Jane Smith</h4> <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem alias eveniet accusantium ipsam atque molestiae dolore, impedit placeat in animi, veritatis nesciunt quidem illo culpa vero amet deserunt hic harum!</p></TableCell>
            </TableRow>
            <TableRow >
              <TableCell></TableCell>
            </TableRow>
            </>
          }
        </TableBody>
      </Table>
      <TextareaAutosize
        className="custom-textarea"
        aria-label="comment textarea"
        placeholder=" You can Comment Product."
        value={comment}
        onChange={handleCommentChange}
      />
      <Button variant="contained" color="primary" onClick={handleCommentSubmit}>
        Submit Comment
      </Button>
    </div>
  );
};

export default CommentComponent;
