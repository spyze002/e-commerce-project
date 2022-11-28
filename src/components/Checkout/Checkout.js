import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Typography, TextField, Checkbox, Button, ButtonGroup} from '@mui/material';

const Country = [
    {
    Name: 'USA'
},
{
    Name: 'France'
},
{
    Name: 'Cameroon'
},
{
    Name: 'UK'
}

]

const deliveryDate = Date('2015- 03')

const Checkout = () => {

    const [country, setCountry] = useState ('USA')
  return (
    //main container holding the whole payment form.
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '95%',
        height: '80%'
    }}>
        <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#DBDFDB',
            width: '50%',
            height: '70%',
            ml: 8
        }}> {/**Left container */}
            <Typography variant='h5' sx={{ opacity: 0.5, textAlign: 'center', mb: 4, fontWeight: 'bold'}}> Personal Information</Typography>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
            }}>
                <TextField variant='outlined' label ="First Name"/>
                <TextField variant='outlined' label ="Last Name"/>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: 150,
                mt: 5
            }}>
            <TextField type="email" variant ="outlined" label ="Email Adress" sx= {{width: 526}} />
            <TextField type="text" variant ="outlined" label ="Street"  sx= {{width: 526}}/>
            </Box>
     

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                mt: 4
            }}>
                <TextField type="text" variant='outlined' label ="City"/>
                <TextField type="text" variant='outlined' label ="Country"/>
            </Box>

            <TextField variant ="outlined" label ="Phone number" type='tel'  sx= {{ width: 525, ml: 10, mt: 4, mb: 10}} />
        </Box> {/**End of left container*/}


        <Box  sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#DBDFDB',
            width: '50%',
            height: '70%',
            ml: 4,
            
        }}>{/** Start of right container */}
            <Typography  variant='h5' sx={{ opacity: 0.5, textAlign: 'center', mb: 4, fontWeight: 'bold'}}> Delivery </Typography>
        <Box>
            <Typography variant='h6' sx={{ opacity: 0.5, ml: 8, fontWeight: 'bold'}}> Delivery fee</Typography>
        <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      sx={{
        display: 'flex',
        width: '100%',
        height: 170,
        justifyContent: 'space-evenly',
      }}
    >
      <Button sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 250,
        background: '#A903FA',
        borderRadius: '20px'
      }}>
        <Typography>
        0$
        </Typography>
        <Typography>
        3-4 weeks 
        </Typography>
       </Button>
       <Button sx={{
        display: 'flex',
        flexDirection: 'column',
        width: 250,
        background: '#A903FA',
        borderRadius: '20px'
      }}>
        <Typography sx={{
            color: 'primary',
            fontWeight: 'bold',
            fontSize: 50
        }}>
        5$
        </Typography>
        <Typography>
        2-5 days weeks 
        </Typography>
       </Button>
    </ButtonGroup>
        </Box>

           
            <Typography sx={{opacity:0.6}}>
                Estimated delivery date: { deliveryDate}
            </Typography>

            <Box>
               <Typography> <Checkbox placeholder='Sub' /> Subscribe to out newsletter</Typography>
             <Typography>  <Checkbox /> Create Account</Typography>
            </Box>


            <Button variant="contained" sx={{background: '#A903FA'}}>Confirm Order</Button>

        </Box> {/**end of right container */}
    </Box>
  )
}

export default Checkout