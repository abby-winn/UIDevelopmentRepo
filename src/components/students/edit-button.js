import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';

export default function Students() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Container maxWidth="sm">
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Admin
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle center>Create New Admin</DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Register New Admin
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
