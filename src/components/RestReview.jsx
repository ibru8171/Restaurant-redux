import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview() {
  const [open, setOpen] = useState(false);
  return (
  <>
  <button type='submit' className="btn btn-warning  text-white rounded-pill mt-2 ms-3"  onClick={() => setOpen(!open)} style={{fontFamily:"-moz-initial"}}>
    Click here to see Reviews
  </button>
  <Collapse in={open}>
  <div className='my-2'>
    <hr />

  <div className='mt-5' style={{fontFamily:"-moz-initial"}}>
    <h6>Name & Date</h6>
    <h6>Rating</h6>
    <h6>Description</h6>
  </div>
  </div>
  </Collapse>

  </>
  )
}

export default RestReview