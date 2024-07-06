import React from 'react'
import { Link } from 'react-router-dom'

function NavbarTwo() {
  return (
    <>
    <nav className=' py-5 bg-[#41B06E]'>
    
    <ul className=' flex justify-center gap-8 '>
     <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/'>Home</Link></li>
     <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutTwo/laptop'>Laptop</Link></li>
     <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutTwo/blog'>Blog</Link></li>
     <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutTwo/network'>Network</Link></li>
     <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutTwo/printer'>Printer</Link></li>
     <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutTwo/Services'>Services</Link></li>
     <li><Link className=' text-xl font-bold text-white active:scale-[1.1] inline-block' to='/layoutThree'>LayouThree</Link></li>
 
 
    </ul>
    
 
   </nav>
    
    </>
  )
}

export default NavbarTwo