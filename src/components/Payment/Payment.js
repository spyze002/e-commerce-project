import React, { useState } from 'react';
import { Box, ToggleButton, ToggleButtonGroup, TextField, Typography, Button,  } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const Payment = () => {

  const [toggle, setToggle] = useState ('PayPal');
  const handleChange = (event, newToggle) =>{
    setToggle(newToggle);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      mt: 3
    }}>
      <ToggleButtonGroup
       color = 'secondary'
       value={toggle}
       exclusive
       onChange={handleChange}
       sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '60%',

       }}
      >
        <ToggleButton value = 'PayPal' sx={{width: 200, height: 100, border: '1px solid #0707DB'}} > Paypal </ToggleButton>
        <ToggleButton value = 'Credit Card' sx={{width: 200, height: 100, border: '1px solid #FA0201'}}>Credit Card</ToggleButton>
        <ToggleButton value = 'Others' sx={{width: 200, height: 100, border: '1ppx solid #D2D2DE'}}>Others</ToggleButton>
      </ToggleButtonGroup>

      <TextField variant='standard' label = 'Enter your card number' type='text' sx={{
        display: 'flex',
        width: '60%',
        mt: 2
      }} />
      <Box sx={{
        display: 'flex',
        width: '60%',
        alignItems: 'center',
        mt: 2
      }}>
        <TextField  variant='standard'  type='date' />
        <TextField  variant='standard' label = 'Pin' type='password' sx={{
          ml: 4
        }} />
      </Box>
      <TextField  variant='standard' label ='Leave a note'sx={{
        display: 'flex',
        width: '60%',
        mt: 2
      }}  />

      <Box sx={{
        display: 'flex',
        width: '60%',
        justifyContent: 'space-between',
        mt: 3
      }}>
        <Box>
        <Typography> <LockIcon /> Secure Card Payment</Typography>
        <Typography >We use the power of odin to protect data. Everything will be private</Typography>
        </Box>

        <Button variant ='contained' sx={{background: '#DBC207', color: '#000', width: 200}} > Checkout </Button>
      </Box>
    
    </Box>
  )
}

export default Payment