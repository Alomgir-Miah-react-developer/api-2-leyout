import React from 'react'
import NavbarTwo from '../Component/NavbarTwo'
import { Outlet } from 'react-router-dom'


function LayoutTwo() {
  return (
    <>
   <NavbarTwo/>
   <Outlet/>
    
    
    </>
  )
}

export default LayoutTwo