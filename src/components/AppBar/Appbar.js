import React from "react";
import {  Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import './Appbar.css'
import logo from '../Assets/logo.png'

//updates on nav bar
const Appbar = () =>{
  return(
    <Box sx={{
      width: '100%',
      height: '100px',
      background: '#231f20',
      position: 'fixed'
    }}>
    <Box sx={{
      display: 'flex'
    }} >
   <Box
   component='img'
   src ={logo}
   sx={{
    width: 150,
    height: 100,
   }}
  />

      <ul 

      style={
        {
          display: 'flex',
          width: '100%',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          gap: 1,
        }
        
      }>
        <li>
          <Link className="lis" to={'/'} >Home </Link>
        </li>
        <li>
          <Link className="lis" to={'/payments'} > Payments  </Link>
        </li>
        <li>
          <Link className="lis" to={'/'} > About  </Link>
        </li>

        <li>
          <Link className="lis" to={'/'} > Contact Us </Link>
        </li>
        <li>
          
          <Box sx={{
            display: 'flex',
            marginBottom: 10,
            position: 'relative'
          }}>
          {/* <Typography className="lis">
              Search
            </Typography> */}
            <Button sx={{color: '#fff', textTransform: 'capitalize' }}>Search</Button>
            <input className="SearchBox" type={'search'} />
          </Box>
          

        </li>
      </ul>
    </Box>
    
    </Box>
  )
}

export default Appbar;