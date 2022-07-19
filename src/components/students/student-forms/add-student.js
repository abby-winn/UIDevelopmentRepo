import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import AddAdmin from './add-admin';

export default function AddStudent(props) {
  const {
    firstName,
    lastName,
    emailAddress,
    username,
    password,
    confirmPassword,
    onFirstNameChange,
    onLastNameChange,
    onEmailAddressChange,
    onUsernameChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
  } = props;

  const onSubmitDisabled =
    !firstName ||
    !lastName ||
    !emailAddress ||
    !username ||
    !password ||
    !confirmPassword;

  const addStudentHandler = (event) => {
    event.preventDefault();
    onSubmit(
      firstName,
      lastName,
      emailAddress,
      username,
      password,
      confirmPassword
    );
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            onChange={(event) => onFirstNameChange(event.target.value)}
            required
            value={firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            onChange={(event) => onLastNameChange(event.target.value)}
            required
            value={lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email Address"
            onChange={(event) => onEmailAddressChange(event.target.value)}
            required
            type="email"
            value={emailAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Username"
            onChange={(event) => onUsernameChange(event.target.value)}
            required
            value={username}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Password"
            onChange={(event) => onPasswordChange(event.target.value)}
            required
            value={password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Confirm Password"
            onChange={(event) => onConfirmPasswordChange(event.target.value)}
            required
            value={confirmPassword}
          />
        </Grid>
      </Grid>
      <Button
        disabled={onSubmitDisabled}
        fullWidth
        sx={{ mt: 3, mb: 2 }}
        type="submit"
        onClick={addStudentHandler}
        variant="contained"
      >
        Add Student
      </Button>

      <AddAdmin />
    </Box>
  );
}

AddStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onEmailAddressChange: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.string.isRequired,
  onPasswordChange: PropTypes.string.isRequired,
  onConfirmPasswordChange: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
