import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'right',
        width: 300,
        bgcolor: '#F5F5F5',
        marginLeft: '50%',
      }}
    >
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Filter..." />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
