import React from 'react'
import { Link } from 'react-router-dom'

function NavbarFour() {
  return (
    <>
  
    <nav className=' py-5 bg-[#37B7C3]'>
      
     <ul className=' flex justify-center gap-8 '>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/'>Home</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutFour/camera'>Camera</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutFour/securitySystem'>Security System</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutFour/sowftware'>Software</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutFour/accessories'>Accessories</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutFour/store'>Store</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutFive'>LayoutFive</Link></li>
  
  
     </ul>
     
  
    </nav>
    
    
    </>
  )
}

export default NavbarFour