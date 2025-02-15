import React from 'react'
import Nav from './compentes/Nav'
import Shop from './compentes/Shop'
import Signup from './compentes/Signup'
import Pay from './compentes/Pay'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <>
      
  <BrowserRouter>
  
  <Routes>

    <Route  path='/' element={<Nav />} />


    <Route path='/shop' element={<Shop />} />

   <Route path='/Signup' element={<Signup />} />

   <Route path='/Pay' element={<Pay />} />




  </Routes>
  
  
  
  
  
  
  
  
  
  </BrowserRouter>

  


    </>
  )
}
