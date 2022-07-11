/* eslint-disable prettier/prettier */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function navbar() {
  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor: '#212529'}}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center" justify="center">
            <Grid item xl={3} lg={3} md={3}>

              <Box
              width={394} height={114} >
              <img src="https://dev-lead2change-ctw.azurewebsites.net/Images/Lead2ChangeLogo.png" width="100%" height="100%"/>
            </Box>

            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8} >
              <Grid container spacing={2}>
                <Grid item xl={2}>
                    <Typography>
                        <p>Students</p>
                    </Typography>
                </Grid>
                <Grid item xl={2}>
                    <Typography>
                  <p>Coaches</p>
                  </Typography>
                </Grid>
                <Grid item xl={2}>
                    <Typography>
                  <p>Interviews</p>
                  </Typography>
                </Grid>
                <Grid item xl={2}>
                    <Typography>
                  <p>Questions</p>
                  </Typography>
                </Grid>
                <Grid item xl={2}>
                    <Typography>
                  <p>Admins</p>
                  </Typography>
                </Grid>
                <Grid item xl={2}>
                    <Typography>
                  <p>Hello *insert name here*</p>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
