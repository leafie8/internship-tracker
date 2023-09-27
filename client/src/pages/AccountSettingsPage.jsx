import { Box, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import BasePage from './BasePage';
import React from 'react';

const AccountSettingsPage = () => {
  //const theme = useTheme();

  return (
    <BasePage>
      <Card sx={{mt:5}}>
        <Stack direction="row" spacing={5}>
          <Typography>Hi</Typography>
        </Stack>
      </Card>
    </BasePage>
  );
};

export default AccountSettingsPage;
