import { Grid, Typography } from '@mui/material';
import React from 'react';

import AuthComponentV2 from '../components/AuthComponentV2';
import BasePage from './BasePage';

const SignUpPage = () => {
  return (
    <BasePage>
      <Grid
        container
        justifyContent="center"
        mt={10}
        alignItems="center"
        spacing={0}
      >
        <Grid item xs={12} sm={9} md={7} lg={5}>
          <Typography variant="pageTitle">Create an account</Typography>
          <AuthComponentV2 setting="signup"/>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default SignUpPage;
