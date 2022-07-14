import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import { indigo, green, lightBlue, grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function UpdateWaste(props) {
  const { admin, onSubmit, handleClose } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    initializeForm();
  }, []);

  const initializeForm = () => {
    if (admin.firstName != null) {
      setFirstName(admin.firstName);
    }
    if (admin.lastName != null) {
      setLastName(admin.lastName);
    }
    if (admin.email != null) {
      setEmail(admin.email);
    }
    if (admin.username != null) {
      setUsername(admin.username);
    }
    if (admin.password != null) {
      setPassword(admin.password);
    }
  };

  const updateAdminHandler = (event) => {
    event.preventDefault();
    onSubmit(admin.Id, firstName, lastName, email, username, password);
  };

  const firstNameChangeHandler = (event) => {
    setFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Dialog open onClose={handleClose}>
      <DialogTitle
        center
        sx={{
          backgroundColor: indigo[500],
          color: 'white',
        }}
      >
        <Typography variant="h5" align="center" sx={{ fontWeight: 500 }}>
          Edit Admin
        </Typography>
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
                onChange={firstNameChangeHandler}
                value={firstName}
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
                onChange={lastNameChangeHandler}
                value={lastName}
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
                onChange={emailChangeHandler}
                value={email}
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
                onChange={usernameChangeHandler}
                value={username}
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
                onChange={passwordChangeHandler}
                value={password}
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
            <Grid item xs={6} sx={{ marginTop: 6, marginBottom: 2 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={updateAdminHandler}
                sx={{
                  borderRadius: 2,
                  backgroundColor: green[500],
                  color: 'white',
                }}
              >
                Save
              </Button>
            </Grid>
            <Grid item xs={6} sx={{ marginTop: 6, marginBottom: 2 }}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleClose}
                sx={{
                  borderRadius: 2,
                  backgroundColor: lightBlue[200],
                  color: 'white',
                }}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogActions>
    </Dialog>
  );
}

UpdateWaste.propTypes = {
  admin: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};
