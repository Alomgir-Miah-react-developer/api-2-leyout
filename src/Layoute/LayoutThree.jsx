import React from 'react'
import NavbarThree from '../Component/NavbarThree'
import { Outlet } from 'react-router-dom'

function LayoutThree() {
  return (
    <>
  <NavbarThree/>
  <Outlet/>
  
    
    
    </>
  )
}

export default LayoutThree