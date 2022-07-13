/* eslint-disable prettier/prettier */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';

export default function waste() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor: '#212529'}}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center" justify="center">
            <Grid item xl={3} lg={3} md={3} sx={{}}>
              <Box 
              display="flex" 
              width={394} height={114} 
              bgcolor="grey"
              alignItems="center"
              justifyContent="center"
              styler={{ml: 400}}
              >
              <img src="https://dev-lead2change-ctw.azurewebsites.net/Images/Lead2ChangeLogo.png" width="100%" height="100%"/>
            </Box>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8} >
              <Grid container spacing={2}>
                <Grid item xl={2}>
                  <p>Students</p>
                </Grid>
                <Grid item xl={2}>
                  <p>Coaches</p>
                </Grid>
                <Grid item xl={2}>
                  <p>Interviews</p>
                </Grid>
                <Grid item xl={2}>
                  <p>Questions</p>
                </Grid>
                <Grid item xl={2}>
                  <p>Admins</p>
                </Grid>
                <Grid item xl={2}>
                  <p>Hello *insert name here*</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}