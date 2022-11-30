import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import product_Data from './product_Data';


const Products = () => {
  const ListItems = product_Data.map((items)=>
        <Box //main container holding all the looping items with a map function
         key={items.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            alignItems: 'center',
            mt:1,

            
           }}> 
           <Box
            sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            border: '1px solid teal',
            height: 50,
            borderRadius: 2,
            background: 'linear-gradient(to right, 	rgb(175, 173, 169), pink)'

           }}>
            {items.prod_name}
           </Box>
  <Box component='img'
  src={items.pic}
  sx={{
    width: 400,
    height: 500,
    borderRadius: 2,
  }} />
  
  <Box>
    <Box>
    {items.description}
    </Box>
    <Box>

    <Button>    {items.currency}  {items.price}  </Button>
    </Box>
 

  </Box>
    
    

  </Box>



  )
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-evenly',
      gap: 1,
      flexWrap: 'wrap',
      }}>
      {ListItems}
    </Box>
  )
}

export default Products