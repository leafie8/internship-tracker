import { Card, TextField } from '@mui/material';
import React from 'react';
import secureLocalStorage from 'react-secure-storage';


// only deal with changing username(instead of first & last name edit) and password - double check with jenna & razi later for no email change 

// have one button per info
// use the style of sign in page
// to change username/display name - just press on change 
// to change password, first confirm old password before new password + confirm new password
// 


const AccountSettings = () => {
  const handleChangeName = (username) => {
    
  }

  return (
    <Card sx={{ mt: 5 }}>
      <Stack direction="column" spacing={5}>
        <TextField
        fullWidth
        id="outlined-basic"
        label="Name"
        variant="standard"
        value={email}
        onChange={handleEmail}
        />

      </Stack>

        </Card>
    )
}

export default AccountSettings;
