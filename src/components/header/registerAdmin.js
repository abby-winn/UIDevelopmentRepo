/* eslint-disable prettier/prettier */
import Button from '@mui/material/Button';
import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function RegisterAdmin() {
  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
      },
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    width: '50%',
    mt: '3',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="sm">
      {/* <ThemeProvider theme={theme}> */}
      <Button color="primary" variant="contained" onClick={handleOpen}>
        + Register Admin
      </Button>
        <Modal
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            fullWidth='md'
        >
        <Box sx={style}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography textAlign= 'center' bgcolor='#3764A8' color='white' variant='h2'>Register New Admin</Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="First Name"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    fullWidth
                    label="Last Name"
                
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Date of Birth"
            
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Email Address"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Username"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Password"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    fullWidth
                    label="Confirm Password"
                />
                </Grid>
            </Grid>
        <Button
            fullWidth
            sx={{ mt: 3, mb: 2 }}
            type="submit"

            variant="contained"
        >
            Register
        </Button>
        </Box>
        </Modal>
      {/* </ThemeProvider> */}
    </Container>
  );
}
