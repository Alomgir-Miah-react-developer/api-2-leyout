import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
  <>
  
  <nav className=' py-5 bg-[#5AB2FF]'>
    
   <ul className=' flex justify-center gap-8 '>
    <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/'>Home</Link></li>
    <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/product'>Product</Link></li>
    <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/about'>About</Link></li>
    <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/help'>Help</Link></li>
    <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/contact'>Contact</Link></li>
    <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/LayoutTwo'>LayoutTwo</Link></li>


   </ul>
   

  </nav>
  
  
  </>
  )
}

export default Navbar