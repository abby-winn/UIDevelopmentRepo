import Container from '@mui/material/Container';
import { useState } from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

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
      <IconButton
        variant="contained"
        aria-label="Edit"
        sx={{
          border: '0px solid orange',
          borderRadius: 2,
          backgroundColor: 'orange',
        }}
        onClick={handleClickOpen}
      >
        <EditIcon />
      </IconButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle center>Edit Admin</DialogTitle>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            Register New Admin
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
