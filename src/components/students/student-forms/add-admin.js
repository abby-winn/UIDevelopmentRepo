/* eslint-disable prettier/prettier */
import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

function FancyDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DialogTitle sx={{ m: 0, p: 2}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

FancyDialogTitle.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function AddAdmin() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create New Admin
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth='md'
      >
        <FancyDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          sx={{ textAlign: 'center', bgcolor:'#3764A8', color:'white'}}
        >
            Create New Admin
        </FancyDialogTitle>
        <Box  
       style={{padding: '10px'}}
        >
            <Grid container spacing={2}>
                <Grid item md={6}>
                <TextField>test</TextField>
                </Grid>
                <Grid item md={6}>
                <Paper>test</Paper>
                </Grid>
            </Grid>
            
        </Box>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}