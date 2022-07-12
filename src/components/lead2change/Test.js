import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { createTheme } from '@mui/material/styles';

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    bgcolor: '#004cbb',
    borderRadius: '10px 10px 0px 0px',
  };

  const modalHeading = {
    textAlign: 'center',
    fontFamily: 'Calibri',
    fontSize: 20,
    p: 2,
    color: 'white',
  };

  const xButton = {
    color: 'white',
    buttonAlign: 'right',
  };

  const buttonAlign = {
    textAlign: 'center',
    p: 2,
  };

  const buttonTheme = createTheme({
    palette: {
      delete: {
        main: '#e82315',
        contrastText: '#fff',
      },
      cancel: {
        main: '#004cbb',
        contrastText: '#fff',
      },
    },
    typography: {
      fontFamily: 'Calibri',
      fontSize: 20,
    },
  });

  return (
    <div>
      <Button
        theme={buttonTheme}
        color="delete"
        onClick={handleOpen}
        variant="contained"
      >
        Delete
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography sx={modalHeadingStyle}>
            <Typography sx={modalHeading}>
              Delete Admin
              <Button sx={xButton} onClick={handleClose}>
                X
              </Button>
            </Typography>
          </Typography>
          <Typography sx={modalTextStyle}>
            Are you sure you want to delete this administrative account?
          </Typography>
          <Typography sx={modalWarningStyle}>All data will be lost.</Typography>
          <Typography sx={buttonAlign}>
            <Button
              theme={buttonTheme}
              color="delete"
              variant="contained"
              onClick={handleClose}
            >
              Delete
            </Button>
            <Button
              theme={buttonTheme}
              color="cancel"
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
