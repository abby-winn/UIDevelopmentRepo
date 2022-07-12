import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

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
  return (
    <Container maxWidth="sm">
      {/* <ThemeProvider theme={theme}> */}
      <Button color="primary" variant="contained">
        + Register Admin
      </Button>
      {/* </ThemeProvider> */}
    </Container>
  );
}
