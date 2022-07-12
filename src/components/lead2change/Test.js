import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: 400,
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
};

const modalTextStyle = {
  fontSize: 20,
  color: 'grey',
  p: 2,
  fontFamily: 'calibri',
  textAlign: 'center',
};

const modalWarningStyle = {
  fontSize: 20,
  color: 'red',
  textAlign: 'center',
  fontFamily: 'calibri',
  p: 2,
};

const modalHeadingStyle = {
  justifyContent: 'center',
  bgcolor: '#004cbb',
  p: 2,
  textAlign: 'center',
  fontFamily: 'Calibri',
  color: 'white',
  borderRadius: '10px 10px 0px 0px',
  fontSize: 20,
};

const buttonAlign = {
  textAlign: 'center',
  p: 2,
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Delete</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={modalHeadingStyle}>Delete Admin</Typography>
          <Typography sx={modalTextStyle}>
            Are you sure you want to delete this administrative account?
          </Typography>
          <Typography sx={modalWarningStyle}>All data will be lost.</Typography>
          <Typography sx={buttonAlign}>
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Delete
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
