import React from 'react';

import { Grid, Typography } from '@mui/material';
import BasePage from './BasePage';
import AccountSettings from '../components/AccountSettings';

const AccountSettingsPage = () => {
  //const theme = useTheme();

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
          <Typography variant="pageTitle">Account Settings</Typography>
          <AccountSettings/>
        </Grid>
      </Grid>
    </BasePage>
  );
};

export default AccountSettingsPage;
