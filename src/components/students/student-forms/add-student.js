import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

export default function AddStudent(props) {
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

  return (
    <Box sx={{ mt: 3 }}>
      <ThemeProvider theme={theme}>
        <Button color="primary" variant="contained">
          + Register Admin
        </Button>
      </ThemeProvider>
    </Box>
  );
}

AddStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
  cellPhone: PropTypes.string.isRequired,
  emailAddress: PropTypes.string.isRequired,
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onBirthDateChange: PropTypes.func.isRequired,
  onCellPhoneChange: PropTypes.func.isRequired,
  onEmailAddressChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
