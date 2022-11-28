import React from "react";
import {  Box } from "@mui/material";
import { Link } from "react-router-dom";
import './Appbar.css'
import logo from '../Assets/logo.png'
const Appbar = () =>{
  return(
    <Box sx={{
      width: '100%',
      height: '100px',
      position: 'static',
      background: '#231f20'
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
          flexWrap: 'wrap'
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
      </ul>
    </Box>
    
    </Box>
  )
}

export default Appbar;