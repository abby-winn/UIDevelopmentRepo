import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { indigo, green, lightBlue, grey } from '@mui/material/colors';
// import UpdateAdmin from './update-admin';

export default function Students() {

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Container maxWidth="sm">
      <Button color="primary" variant="contained" onClick={handleOpen}>
        + Register Admin
      </Button>
      {/* <UpdateAdmin onSubmit={updateModalChange} handleClose={handleClose} /> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          center
          sx={{
            backgroundColor: indigo[500],
            color: 'white',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3} />
            <Grid item xs={10} sm={6}>
              <Typography variant="h4" align="center" sx={{ fontWeight: 500 }}>
                Register Admin
              </Typography>
              <IconButton
                onClick={handleClose}
                sx={{ position: 'absolute', right: 8, top: 10 }}
              >
                <CloseIcon fontSize="large" sx={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogActions>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2} rowSpacing={1}>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ fontWeight: 'Medium' }}
                >
                  First Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ fontWeight: 'Medium' }}
                >
                  Last Name
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Enter first name..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  // onChange={firstNameChangeHandler}
                  // value={firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Enter last name..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  // onChange={lastNameChangeHandler}
                  // value={lastName}
                />
              </Grid>
              <Grid item xs={12} sm={12} sx={{ marginTop: 4 }}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ fontWeight: 'Medium' }}
                >
                  Email Address
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter email address..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  // onChange={emailChangeHandler}
                  // value={email}
                />
              </Grid>
              <Grid item xs={12} sm={12} sx={{ marginTop: 4 }}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ fontWeight: 'Medium' }}
                >
                  Username
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter username..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  // onChange={usernameChangeHandler}
                  // value={username}
                />
              </Grid>
              <Grid item xs={12} sm={12} sx={{ marginTop: 4 }}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ fontWeight: 'Medium' }}
                >
                  Password
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter password..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                  // onChange={passwordChangeHandler}
                  // value={password}
                />
              </Grid>
              <Grid item xs={12} sm={12} sx={{ marginTop: 4 }}>
                <Typography
                  variant="subtitle1"
                  align="left"
                  sx={{ fontWeight: 'Medium' }}
                >
                  Confirm Password
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Enter same password..."
                  variant="filled"
                  sx={{
                    backgroundColor: grey[100],
                    boxShadow: 2,
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{marginBottom: 2, marginTop: 2 }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    borderRadius: 2,
                    backgroundColor: lightBlue[200],
                    color: 'white',
                    fontSize: '30px'
                  }}
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
