import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from '../Products/Products';
import Payment from '../Payment/Payment';
const RouteSection = () => {
  return (
    <Routes>
        
        <Route
        path='/'
        element={<Products />}
        />{/**defined each path to our page */}
        <Route
        path='/payments'
        element={<Payment />}
        />{/**defined each path to our page */}


    </Routes>
  )
}

export default RouteSection;