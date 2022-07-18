import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

export default function Validation(props) {
  const { firstName } = props;

  if (firstName.length > 2) {
    return <Typography>Test</Typography>;
  }
}

Validation.propTypes = {
  firstName: PropTypes.string.isRequired,
};
