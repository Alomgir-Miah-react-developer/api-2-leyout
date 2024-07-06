import React from 'react'

import { Outlet } from 'react-router-dom'
import NavbarFour from '../Component/NavbarFour'

function LayoutFour() {
  return (
  <>
  <NavbarFour/>

  <Outlet/>
  
  </>
  )
}

export default LayoutFour