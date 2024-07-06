import React from 'react'
import { Link } from 'react-router-dom'

function NavbarThree() {
  return (
    <>
  
    <nav className=' py-5 bg-[#D6589F]'>
      
     <ul className=' flex justify-center gap-8 '>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/'>Home</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutThree/monitor'>Monitor</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutThree/tebletpc'>Teblet Pc</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutThree/gaming'>Gaming</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutThree/soundSystem'>Sound System</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutThree/officeitems'>Office item</Link></li>
      <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutFour'>LayoutFour</Link></li>
  
  
     </ul>
     
  
    </nav>
    
    
    </>
  )
}

export default NavbarThree